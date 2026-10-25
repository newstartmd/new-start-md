// POST /api/genhealth/webhook — receives GEN Health order/lab events.
//
// Verifies the HMAC signature, dedupes on event_id, and on a fulfillment event
// writes a tamper-evident provenance entry (pharmacy + batch + COA) that powers
// /verify. Register this URL + a signing secret in GEN Health, then set
// GENHEALTH_WEBHOOK_SECRET. Until the secret is set it returns 503 (the
// endpoint exists, just not enabled).

import { NextResponse } from "next/server";
import {
  WEBHOOK_SIG_HEADER,
  WEBHOOK_EVENT_HEADER,
  verifySignature,
  parseEvent,
  toProvenanceRecord,
} from "@/lib/genhealthWebhook";
import { getProvenanceStore } from "@/lib/provenanceStore";

export const runtime = "nodejs"; // node:crypto
export const dynamic = "force-dynamic";

export async function POST(req: Request): Promise<Response> {
  const secret = process.env.GENHEALTH_WEBHOOK_SECRET ?? "";
  const raw = await req.text();
  const signature = req.headers.get(WEBHOOK_SIG_HEADER);
  const eventName = req.headers.get(WEBHOOK_EVENT_HEADER);

  if (!secret) {
    console.warn("[genhealth webhook] GENHEALTH_WEBHOOK_SECRET not set — event ignored:", eventName);
    return NextResponse.json({ ok: false, reason: "not-configured" }, { status: 503 });
  }
  if (!verifySignature(raw, signature, secret)) {
    return NextResponse.json({ ok: false, reason: "bad-signature" }, { status: 401 });
  }

  const event = parseEvent(raw, eventName);
  const store = getProvenanceStore();

  // Idempotency — GEN retries (~5x); dedupe on event_id.
  const eventId = typeof event.event_id === "string" ? event.event_id : undefined;
  if (eventId && (await store.hasSeen(eventId))) {
    return NextResponse.json({ ok: true, deduped: true });
  }

  // Provenance write on fulfillment events that carry the facts.
  let recorded: string | undefined;
  const rec = toProvenanceRecord(event);
  if (rec) {
    const entry = await store.append(rec);
    recorded = entry.code;
  }

  if (eventId) await store.markSeen(eventId);
  return NextResponse.json({ ok: true, type: event.type, recorded: recorded ?? null });
}
