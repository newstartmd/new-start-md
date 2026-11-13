// Notify the partner portal of a referral event (a click that lands with a
// partner code, or a /start submission from a referred visitor).
//
// Best-effort and non-blocking: it never throws and is a no-op until
// NEXT_PUBLIC_PORTAL_URL is set (the partner portal is a separate app, deployed
// later). Works in both the browser (first-touch CLICK) and server actions
// (SIGNUP). This is ATTRIBUTION ONLY — it never carries payment data and the
// portal never computes pay from it (EKRA). See lib/partners.ts.

type ReferralKind = "CLICK" | "SIGNUP";

export function notifyReferral(input: {
  code: string;
  kind: ReferralKind;
  source?: string;
  campaign?: string;
}): void {
  const base = process.env.NEXT_PUBLIC_PORTAL_URL;
  if (!base || !input.code) return;
  try {
    void fetch(`${base.replace(/\/$/, "")}/api/referral`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        code: input.code,
        kind: input.kind,
        source: input.source,
        campaign: input.campaign,
      }),
      keepalive: true,
    }).catch(() => {
      /* best-effort: attribution must never block or fail the user flow */
    });
  } catch {
    /* ignore */
  }
}
