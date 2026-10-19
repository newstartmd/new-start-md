// PRICING — single source of truth for the price range shown across the site.
//
// New Start shows pricing as a RANGE, not fixed per-product prices: from the
// lowest-priced single therapy up to combination formularies and VIP programs.
// The exact plan and price are always set with the patient's provider, so every
// price on the site carries the care-team caveat below.
//
// ⚠️ PLACEHOLDER FIGURES. The two numbers below are placeholders so the pricing
// treatment is visible for review. Replace with New Start's real lowest and
// highest monthly prices (or set them via env), then flip PRICE_CONFIRMED to
// true to drop the "indicative" tag. Changing these two numbers updates every
// price shown on the site.

export const PRICE_LOW = Number(process.env.NEXT_PUBLIC_PRICE_LOW ?? 199);
export const PRICE_HIGH = Number(process.env.NEXT_PUBLIC_PRICE_HIGH ?? 999);
export const PRICE_PERIOD = "/mo";

// Flip to true once the figures above are the real, approved prices.
export const PRICE_CONFIRMED = process.env.NEXT_PUBLIC_PRICE_CONFIRMED === "true";

// The standing caveat shown with every price (Michael's direction: steer the
// patient to decide the plan with their provider).
export const PRICE_NOTE =
  "Every plan is personalized. The right therapy — and your exact price — are set with your licensed telemedicine provider. Discuss what's best for you with your care team.";

function fmt(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

/** "$199–$999/mo" */
export function priceRange(): string {
  return `${fmt(PRICE_LOW)}–${fmt(PRICE_HIGH)}${PRICE_PERIOD}`;
}

/** "from $199/mo" — the entry point, used where a single figure reads better. */
export function priceFrom(): string {
  return `from ${fmt(PRICE_LOW)}${PRICE_PERIOD}`;
}
