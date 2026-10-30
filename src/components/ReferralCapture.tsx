"use client";

import { useEffect } from "react";
import {
  ATTR_COOKIE,
  ATTR_MAX_AGE_DAYS,
  attributionFromParams,
  serializeAttribution,
} from "@/lib/partners";
import { notifyReferral } from "@/lib/referral-notify";

/**
 * First-touch partner attribution capture.
 *
 * Runs once on mount: if the URL carries a partner code (?ref / ?partner /
 * ?aff / ?promo) and we have not already stored a first touch, persist it to a
 * first-party cookie so the referral survives until the visitor books — days
 * later, on another page. No third-party pixel, no network call. First touch
 * wins (we never overwrite an existing attribution), so the partner who
 * actually introduced the visitor keeps the credit.
 */
export default function ReferralCapture() {
  useEffect(() => {
    try {
      const already = document.cookie.split("; ").some((c) => c.startsWith(`${ATTR_COOKIE}=`));
      if (already) return;
      const params = new URLSearchParams(window.location.search);
      const attr = attributionFromParams(params);
      if (!attr) return;
      const maxAge = ATTR_MAX_AGE_DAYS * 24 * 60 * 60;
      const value = encodeURIComponent(serializeAttribution(attr));
      document.cookie = `${ATTR_COOKIE}=${value}; path=/; max-age=${maxAge}; samesite=lax; secure`;
      // First touch only (the `already` guard above): tell the partner portal a
      // referred visitor landed. Best-effort; no-op until the portal is live.
      notifyReferral({ code: attr.code, kind: "CLICK", source: attr.source, campaign: attr.campaign });
    } catch {
      // Non-fatal: attribution is best-effort, never block the page.
    }
  }, []);

  return null;
}
