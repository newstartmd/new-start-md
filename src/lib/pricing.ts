// PRICING — single source of truth for the price range shown across the site.
//
// New Start shows pricing as a RANGE, not fixed per-product prices: from the
// lowest-priced monthly program up to the highest single-therapy step. The exact
// plan and price are always set with the patient's provider, so every price on
// the site carries the care-team caveat below.
//
// This is the headline MONTHLY-program range (GLP-1 + TRT). Per-product prices
// (per-vial peptides/blends, GLP-1 dose-step ladders, on-hold items) live in
// lib/catalogPricing.ts. Figures are Todd's v16 pricing (2026-10-23), retail.
//   Lowest active monthly program: semaglutide $169/mo (TRT $149.99 and
//   enclomiphene $109 are on hold — not at Dirx-Hub yet). Top single step:
//   tirzepatide $479/mo. Peptides/blends are per vial (from $99), not monthly.
//   Keep mg strengths off the site (Todd's instruction).
// Override per-environment with NEXT_PUBLIC_PRICE_LOW/HIGH if these change.

export const PRICE_LOW = Number(process.env.NEXT_PUBLIC_PRICE_LOW ?? 169);
export const PRICE_HIGH = Number(process.env.NEXT_PUBLIC_PRICE_HIGH ?? 479);
export const PRICE_PERIOD = "/mo";

// Real, approved figures — show no "indicative" tag unless explicitly unset.
export const PRICE_CONFIRMED = process.env.NEXT_PUBLIC_PRICE_CONFIRMED !== "false";

// Flat shipping, added to any order (Todd's v16 pricing). The savings model on
// the Membership page is built from this: it's charged PER ORDER, not per item.
export const SHIPPING_FLAT = Number(process.env.NEXT_PUBLIC_SHIPPING_FLAT ?? 40);
export const SHIPPING_MONTHLY_YEAR = SHIPPING_FLAT * 12; // ship every month
export const SHIPPING_QUARTERLY_YEAR = SHIPPING_FLAT * 4; // 90-day boxes
export const SHIPPING_QUARTERLY_SAVINGS = SHIPPING_MONTHLY_YEAR - SHIPPING_QUARTERLY_YEAR;

// The standing caveat shown with every price (Michael's direction: steer the
// patient to decide the plan with their provider).
export const PRICE_NOTE =
  "Every plan is personalized. The right therapy — and your exact price — are set with your licensed telemedicine provider. Discuss what's best for you with your care team.";

function fmt(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

/** "$129.99–$479/mo" */
export function priceRange(): string {
  return `${fmt(PRICE_LOW)}–${fmt(PRICE_HIGH)}${PRICE_PERIOD}`;
}

/** "from $129.99/mo" — the entry point, used where a single figure reads better. */
export function priceFrom(): string {
  return `from ${fmt(PRICE_LOW)}${PRICE_PERIOD}`;
}

/** "$40" / "$480" etc. — exposed for the savings copy. */
export function money(n: number): string {
  return fmt(n);
}
