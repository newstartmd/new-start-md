// GEN HEALTH WEBHOOK — verification + event mapping (server-only).
//
// Scheme CONFIRMED with GEN Health (2026-10-20), matching the shared client's
// webhooks.ts: the event NAME is in the X-Webhook-Event header; the signature
// in X-Webhook-Signature is a hex HMAC-SHA256 of the RAW request body (no
// prefix); dedupe on event_id; delivery is at-least-once with ~5 retries.
//
// The exact field PATHS inside a fulfillment event's `data` (pharmacy, batch,
// COA) are not yet confirmed — toProvenanceRecord() reads them defensively and
// returns null rather than fabricating. Confirm paths on the first live event
// (marked // VERIFY) and tighten.

import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import type { ProvenanceRecord } from "@/lib/provenance";

export const WEBHOOK_SIG_HEADER = "x-webhook-signature";
export const WEBHOOK_EVENT_HEADER = "x-webhook-event";

/** Hex HMAC-SHA256 of the raw body, constant-time compared. */
export function verifySignature(rawBody: string, signature: string | null, secret: string): boolean {
  if (!signature || !secret) return false;
  const expected = createHmac("sha256", secret).update(rawBody, "utf8").digest("hex");
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(signature.trim().toLowerCase(), "utf8");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export type GenHealthEvent = {
  type: string;
  event_id?: string;
  data?: Record<string, unknown>;
  [k: string]: unknown;
};

export function parseEvent(rawBody: string, eventName: string | null): GenHealthEvent {
  let payload: Record<string, unknown> = {};
  try {
    const parsed = JSON.parse(rawBody);
    if (parsed && typeof parsed === "object") payload = parsed as Record<string, unknown>;
  } catch {
    /* leave empty; type falls back below */
  }
  const type = eventName ?? (typeof payload.type === "string" ? payload.type : "unknown");
  return { ...payload, type };
}

// Fulfillment events that carry provenance facts. // VERIFY exact names.
const PROVENANCE_EVENTS = new Set(["order.shipped", "order.dispensed", "order.fulfilled"]);

function s(v: unknown): string | undefined {
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}
function field(d: Record<string, unknown>, key: string): string | undefined {
  return s(d[key]);
}
function nested(d: Record<string, unknown>, key: string, sub: string): string | undefined {
  const o = d[key];
  if (o && typeof o === "object") return s((o as Record<string, unknown>)[sub]);
  return undefined;
}

/**
 * Map a fulfillment event to a provenance record (seq assigned by the store),
 * or null if it's not a provenance event or lacks the facts we attest to. We
 * record ONLY the licensed pharmacy + batch + COA — never fabricate them.
 */
export function toProvenanceRecord(ev: GenHealthEvent): Omit<ProvenanceRecord, "seq"> | null {
  if (!PROVENANCE_EVENTS.has(ev.type)) return null;
  const d = ev.data ?? {};

  const pharmacy = field(d, "pharmacy") ?? nested(d, "pharmacy", "name");
  const pharmacyState = field(d, "pharmacyState") ?? nested(d, "pharmacy", "state") ?? "";
  const batch = field(d, "batch") ?? field(d, "lot") ?? field(d, "batchNumber");
  const coa = field(d, "coa") ?? field(d, "coaRef") ?? field(d, "certificateOfAnalysis");
  const product = field(d, "product") ?? field(d, "productName") ?? nested(d, "product", "name") ?? "Therapy";
  const orderId = field(d, "orderId") ?? field(d, "id") ?? s(ev.event_id);
  const dispensedAt = field(d, "dispensedAt") ?? field(d, "shippedAt") ?? new Date().toISOString().slice(0, 10);

  if (!pharmacy || !batch || !coa || !orderId) return null;

  return {
    code: codeFromOrder(orderId),
    product,
    pharmacy,
    pharmacyState,
    batch,
    coa,
    dispensedAt,
  };
}

/** Deterministic, human-friendly verification code derived from the order id. */
export function codeFromOrder(orderId: string): string {
  const h = createHmac("sha256", "nsmd-provenance").update(orderId).digest("hex").toUpperCase();
  return `NS-${h.slice(0, 4)}-${h.slice(4, 8)}`;
}
