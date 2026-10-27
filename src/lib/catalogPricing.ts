// CATALOG PRICING — retail prices from Todd's v16 pricing sheet (2026-10-23),
// column I "YOUR PRICE". Peptides & blends are priced PER VIAL; GLP-1 is priced
// PER MONTH by dose step; TRT/enclomiphene/Connect are not at Dirx-Hub yet
// ("on hold"). Internal cost/profit columns are deliberately NOT represented
// here — never show them. Keep mg strengths off the UI (Todd's instruction).
//
// Keyed by the product/blend slug in lib/products.ts. Products not listed have
// no sheet price yet and fall back to the "set with your provider" line.

type Vial = { price: number; lasts?: string };

/** Single peptides — per vial (slug → price). */
export const PEPTIDE_VIAL: Record<string, Vial> = {
  sermorelin: { price: 139, lasts: "about 10 weeks" },
  nad: { price: 139, lasts: "about 3 weeks" },
  "tb-500": { price: 149, lasts: "about 4 weeks" },
  "ghk-cu": { price: 149, lasts: "up to 12 weeks" },
  "thymosin-alpha-1": { price: 149, lasts: "up to 12 weeks" },
  epitalon: { price: 149, lasts: "about 10 days" },
  "ss-31": { price: 149, lasts: "about 3 weeks" },
  kisspeptin: { price: 149, lasts: "up to 12 weeks" },
  "mots-c": { price: 189, lasts: "about 4 weeks" },
  "pt-141": { price: 189, lasts: "about 3 weeks" },
  "bpc-157": { price: 199, lasts: "about 5 weeks" },
  tesamorelin: { price: 229, lasts: "about 3 weeks" },
  glutathione: { price: 99, lasts: "about 3 weeks" },
  // Added from the v16 Final Pricing tab (NewStartMD carries everything on the
  // sheet). No vial-duration given on the sheet for these, so `lasts` is omitted
  // rather than fabricated (per the no-invented-dosing rule).
  "ll-37": { price: 149 },
  "igf-1-lr3": { price: 179 },
  dsip: { price: 149 },
};

/** Blends — per vial (slug → price). */
export const BLEND_VIAL: Record<string, Vial> = {
  build: { price: 209, lasts: "about 7 weeks" },
  calm: { price: 209, lasts: "about 3 weeks" },
  renew: { price: 209, lasts: "about 4 weeks" },
  rest: { price: 229, lasts: "up to 12 weeks" },
  focus: { price: 229, lasts: "about 3 weeks" },
  repair: { price: 259, lasts: "about 4 weeks" },
  glow: { price: 279, lasts: "about 4 weeks" },
  sculpt: { price: 289, lasts: "about 3 weeks" },
  klow: { price: 299, lasts: "about 4 weeks" },
};

/** GLP-1 — per month, by dose step (slug → ladder). */
export const GLP1: Record<string, { from: number; to: number; steps: number[] }> = {
  semaglutide: { from: 169, to: 299, steps: [169, 189, 219, 249, 299] },
  tirzepatide: { from: 199, to: 479, steps: [199, 249, 299, 379, 429, 479] },
};

/** Not at Dirx-Hub yet — shown as "joining soon" with no live price. */
export const ON_HOLD: Record<string, string> = {
  testosterone: "TRT programs ($149.99 Core / $199.99 Complete) are joining soon.",
  enclomiphene: "Enclomiphene ($109/mo) is joining soon.",
  connect: "Connect is joining soon.",
};

export type PriceDisplay =
  | { kind: "vial"; price: number; lasts?: string; short: string; label: string }
  | { kind: "month"; from: number; to: number; short: string; label: string }
  | { kind: "hold"; short: string; label: string }
  | { kind: "none"; short: string; label: string };

function usd(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

/** The price to display for a product/blend slug, respecting Todd's rules. */
export function priceFor(slug: string): PriceDisplay {
  const glp = GLP1[slug];
  if (glp) {
    return {
      kind: "month",
      from: glp.from,
      to: glp.to,
      short: `from ${usd(glp.from)}/mo`,
      label: `${usd(glp.from)}–${usd(glp.to)}/mo, by dose step`,
    };
  }
  const vial = PEPTIDE_VIAL[slug] ?? BLEND_VIAL[slug];
  if (vial) {
    return {
      kind: "vial",
      price: vial.price,
      lasts: vial.lasts,
      short: `${usd(vial.price)}/vial`,
      label: vial.lasts ? `${usd(vial.price)} per vial · a vial lasts ${vial.lasts}` : `${usd(vial.price)} per vial`,
    };
  }
  if (ON_HOLD[slug]) {
    return { kind: "hold", short: "Joining soon", label: ON_HOLD[slug] };
  }
  return { kind: "none", short: "Set with your provider", label: "Your plan and price are set with your provider." };
}
