// GEN HEALTH BACKEND BRIDGE  (server-only)
// ---------------------------------------------------------------------------
// New Start MD's patient app / checkout runs on GEN Health's EHR. This
// marketing + partner site does NOT hold PHI and does NOT prescribe. Its only
// job against the backend is to hand a captured lead — with partner attribution
// intact — into GEN Health's own hosted assessment/checkout, where the patient
// finishes intake (DOB, full address, medical history), pays, and is treated.
//
// WHY A REDIRECT, NOT A SERVER-SIDE createPatient/createOrder: GEN Health's
// PatientInput REQUIRES date of birth + full address (see the shared client's
// types.ts), and an order needs an activated product. This public form collects
// none of that on purpose (it must not become a PHI surface). So the correct,
// GEN-documented handoff is to route the lead to a product's hosted checkout /
// assessment link and let GEN collect the rest — carrying our first-touch
// attribution as the order couponCode + UTM tracking.
//
// The attribution rides as query params on the hosted link (couponCode + utm_*),
// the same fields GEN echoes back on order.* webhooks. If GEN ignores an unknown
// param the lead still reaches intake, and the inbox path (lib/email) has
// already recorded the lead + attribution, so nothing is ever lost.
//
// Set GENHEALTH_ASSESSMENT_URL to the GEN-hosted assessment-first checkout link
// (per the active product) to turn the live handoff on. Until it is set, the
// form captures the lead to the inbox and shows a normal confirmation.

import "server-only";
import { toGenHealthAttribution, type Attribution } from "@/lib/partners";

const API_KEY = process.env.GENHEALTH_API_KEY ?? "";
const BASE_URL = process.env.GENHEALTH_BASE_URL ?? "https://api.gen-health.app";
// GEN-hosted assessment/checkout link the lead is handed off into. A single
// default today; a per-goal map can replace this once products are activated.
const ASSESSMENT_URL = process.env.GENHEALTH_ASSESSMENT_URL ?? "";

/** True once GEN Health has provisioned a server API key (for future reads). */
export function genHealthConfigured(): boolean {
  return API_KEY.length > 0;
}

/** True once the hosted assessment/checkout handoff link is configured. */
export function genHealthHandoffConfigured(): boolean {
  return ASSESSMENT_URL.length > 0;
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

export type HandoffResult = {
  delivered: boolean;
  /** Where to send the patient to finish intake on GEN Health, with attribution. */
  handoffUrl?: string;
  reason?: string;
};

/**
 * Build the GEN-hosted handoff URL for a lead: the configured assessment link
 * with the lead's email prefilled and attribution (partner couponCode + UTM)
 * appended as query params. Returns null when no assessment link is configured.
 */
export function buildHandoffUrl(lead: PartnerLead): string | null {
  if (!ASSESSMENT_URL) return null;
  let url: URL;
  try {
    url = new URL(ASSESSMENT_URL);
  } catch {
    return null;
  }
  // Prefill the submitter's email so GEN's intake starts warm (not PHI beyond
  // what the person just typed to us). Never pass health details in the URL.
  if (lead.email) url.searchParams.set("email", lead.email);

  const { couponCode, tracking } = toGenHealthAttribution(lead.attribution);
  if (couponCode) url.searchParams.set("couponCode", couponCode);
  if (tracking) {
    for (const [k, v] of Object.entries(tracking)) {
      if (v) url.searchParams.set(k, v);
    }
  }
  return url.toString();
}

/**
 * Hand a lead to GEN Health. Resolves the hosted assessment/checkout URL (with
 * attribution) the caller should route the patient to. When no handoff link is
 * configured, returns delivered:false so the inbox path stays authoritative and
 * the form shows a standard "we'll reach out" confirmation.
 */
export async function handoffLeadToGenHealth(lead: PartnerLead): Promise<HandoffResult> {
  void BASE_URL; // reserved for future server-side reads (getPatientByEmail, products)
  const handoffUrl = buildHandoffUrl(lead);
  if (!handoffUrl) {
    return { delivered: false, reason: genHealthHandoffConfigured() ? "bad-url" : "not-configured" };
  }
  return { delivered: true, handoffUrl };
}
