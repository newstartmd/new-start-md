// GEN HEALTH BACKEND BRIDGE  (server-only)
// ---------------------------------------------------------------------------
// New Start MD's patient app / checkout runs on GEN Health's EHR (the same
// backend the FitClinicMD pivot moved to). This marketing + partner site does
// NOT hold PHI and does NOT prescribe. Its only job against the backend is to
// hand off a captured lead — with partner attribution intact — so the patient
// finishes intake, pays, and is treated inside GEN Health, and the referring
// partner is credited on the resulting order.
//
// The typed client + webhook verification live in the sibling package
//   1-WEBSITES/fitclinicmd-genhealth-integration  (GenHealthClient)
// which is shared by both brands. It is BLOCKED on GEN Health (Chad Layman)
// delivering: the X-API-Key, the product catalog + state list, the promo-code
// validation behavior, the webhook signing scheme, and confirmation of who
// collects payment. Until the key exists, `genHealthConfigured()` is false and
// this bridge records the lead locally (email/inbox) without calling out — so
// no lead and no referral credit is ever lost pre-integration.
//
// DO NOT invent endpoint shapes here. The scaffold marks every unverified Beta
// field `// VERIFY`; confirm each against one real request/response before
// shipping a live call.

import "server-only";
import { toGenHealthAttribution, type Attribution } from "@/lib/partners";

const API_KEY = process.env.GENHEALTH_API_KEY ?? "";
const BASE_URL = process.env.GENHEALTH_BASE_URL ?? "https://api.gen-health.app";

/** True once GEN Health has provisioned a key for New Start MD. */
export function genHealthConfigured(): boolean {
  return API_KEY.length > 0;
}

export type PartnerLead = {
  name: string;
  email: string;
  phone?: string;
  state?: string;
  goal: string;
  note?: string;
  attribution: Attribution | null;
};

/**
 * Shape a captured lead into the attribution-bearing payload the GEN Health
 * client will send (as patient + order context). Pure/synchronous: returns the
 * object both the inbox path and the future live POST use, so the data a
 * partner is credited on is identical whether or not the key is live yet.
 */
export function buildGenHealthLeadPayload(lead: PartnerLead) {
  const { couponCode, tracking } = toGenHealthAttribution(lead.attribution);
  return {
    patient: {
      fullName: lead.name,
      email: lead.email,
      phone: lead.phone,
      state: lead.state,
    },
    intent: { goal: lead.goal, note: lead.note },
    // Attribution the backend credits the partner on.
    couponCode,
    tracking,
  };
}

/**
 * Hand a lead to GEN Health. Pre-integration (no key) this is a no-op that
 * reports `delivered: false, reason: "not-configured"` so the caller falls
 * back to the inbox path. Once GENHEALTH_API_KEY is set and the client is
 * wired, swap the body for a GenHealthClient.createPatient / createOrder call
 * using buildGenHealthLeadPayload(lead).
 */
export async function handoffLeadToGenHealth(
  lead: PartnerLead,
): Promise<{ delivered: boolean; reason?: string }> {
  if (!genHealthConfigured()) {
    return { delivered: false, reason: "not-configured" };
  }
  // Intentionally not implemented until the integration details are verified.
  // Returning not-configured keeps the inbox path authoritative and avoids
  // shipping a guessed request shape against a live PHI backend.
  void BASE_URL;
  void buildGenHealthLeadPayload;
  return { delivered: false, reason: "pending-verification" };
}
