// NEW START MD — PRODUCT CATALOG
// ---------------------------------------------------------------------------
// New Start carries the FULL line (per Todd's 2026-10-16 split: FitClinicMD is
// LegitScript-limited; New Start carries everything). This file is the catalog
// FRAMEWORK: real compounds grouped by the goal a visitor shops for, each with
// a neutral, usage-based one-liner. It is intentionally NOT the final clinical
// copy.
//
// TWO STANDING RULES (Michael, counsel) THIS FILE MUST OBEY:
//  1. USAGE LANGUAGE ONLY. Describe what people USE a compound for. No efficacy
//     or outcome claims. Everything here is paired with the sitewide notice
//     that these are not FDA-approved medicines and are prescribed only after a
//     provider visit.
//  2. NO FABRICATED DOSING OR PROVENANCE. Dosing, protocols and detailed copy
//     come from Todd's approved source document + clinical sign-off and are
//     populated into `detail` later — never invented here.
//
// `legitScript: true` marks the products that ALSO appear on FitClinicMD (the
// "blue" items on Todd's sheet, plus TRT/semaglutide/tirzepatide which go on
// both), so the two sites stay consistent where they overlap. The authoritative
// product list is the Final Pricing tab of Todd's v16 sheet (2026-10-23); this
// catalog is kept in sync with it. Reta/cagrilintide are intentionally excluded
// (Michael: "we will not be providing them," 2026-10-27).

export type Goal = {
  slug: string;
  label: string;
  tagline: string;
};

export const GOALS: Goal[] = [
  { slug: "weight-loss", label: "Weight loss", tagline: "Metabolic and GLP-1 therapy." },
  { slug: "hormone", label: "Hormone & vitality", tagline: "TRT, sexual health, balance." },
  { slug: "recovery", label: "Recovery & performance", tagline: "Heal, repair, train harder." },
  { slug: "wellness", label: "Longevity & wellness", tagline: "Energy, anti-aging, resilience." },
  { slug: "mind", label: "Mind & mood", tagline: "Focus, calm, connection." },
];

export type Product = {
  slug: string;
  name: string;
  /** Other names people search for. */
  aka?: string[];
  goal: Goal["slug"];
  /** Usage-based one-liner. What people USE it for — never an outcome claim. */
  usedFor: string;
  /** Also carried on FitClinicMD (LegitScript-cleared). */
  legitScript?: boolean;
  /** Long-form copy, populated from the approved source + clinical sign-off. */
  detail?: string;
  /** Product photo (vial/packaging). Real photos only — supplied by the team;
   *  until set, a branded product-photo slot renders. */
  image?: string;
};

// Singles. The catalog shows ONLY what is on Todd's v16 Final Pricing tab
// (2026-10-23) — "NewStartMD gets everything on the sheet." Compounds the sheet
// sells only inside a blend (CJC-1295, Ipamorelin, Semax, Selank, KPV, Oxytocin,
// Pinealon, PE-22-28) are NOT listed as standalone products; they live in their
// blends. Off-sheet compounds are not carried. The educational /peptides body
// map stays broad on purpose — it teaches, it does not sell. Descriptors are
// deliberately plain and usage-framed.
export const PRODUCTS: Product[] = [
  // Weight loss / metabolic
  { slug: "semaglutide", name: "Semaglutide", aka: ["GLP-1"], goal: "weight-loss", usedFor: "Appetite and weight management.", legitScript: true },
  { slug: "tirzepatide", name: "Tirzepatide", aka: ["GLP-1/GIP"], goal: "weight-loss", usedFor: "Appetite and weight management.", legitScript: true },
  { slug: "mots-c", name: "MOTS-c", goal: "weight-loss", usedFor: "Metabolic and energy support." },

  // Hormone & vitality. Enclomiphene is offered ONLY inside the TRT program
  // (Todd, 2026-10-27), so it is not a standalone product.
  { slug: "testosterone", name: "Testosterone", aka: ["TRT"], goal: "hormone", usedFor: "Hormone replacement for low testosterone.", legitScript: true },
  { slug: "pt-141", name: "PT-141", aka: ["Bremelanotide"], goal: "hormone", usedFor: "Libido and sexual-health support.", legitScript: true },
  { slug: "kisspeptin", name: "Kisspeptin", goal: "hormone", usedFor: "Reproductive-hormone support." },

  // Recovery & performance
  { slug: "bpc-157", name: "BPC-157", goal: "recovery", usedFor: "Soft-tissue and gut recovery support." },
  { slug: "tb-500", name: "TB-500", aka: ["Thymosin Beta-4"], goal: "recovery", usedFor: "Tissue recovery and flexibility support." },
  { slug: "ghk-cu", name: "GHK-Cu", goal: "recovery", usedFor: "Skin and tissue support (topical)." },
  { slug: "ll-37", name: "LL-37", goal: "recovery", usedFor: "Immune and antimicrobial support." },
  { slug: "thymosin-alpha-1", name: "Thymosin Alpha-1", goal: "recovery", usedFor: "Immune support." },
  { slug: "igf-1-lr3", name: "IGF-1 LR3", goal: "recovery", usedFor: "Muscle and tissue-growth support." },

  // Longevity & wellness
  { slug: "sermorelin", name: "Sermorelin", goal: "wellness", usedFor: "Growth-hormone and sleep support.", legitScript: true },
  { slug: "tesamorelin", name: "Tesamorelin", goal: "wellness", usedFor: "Growth-hormone and body-composition support.", legitScript: true },
  { slug: "nad", name: "NAD+", goal: "wellness", usedFor: "Cellular energy and longevity support.", legitScript: true },
  { slug: "glutathione", name: "Glutathione", goal: "wellness", usedFor: "Antioxidant and detox support.", legitScript: true },
  { slug: "ss-31", name: "SS-31", aka: ["Elamipretide"], goal: "wellness", usedFor: "Mitochondrial support.", legitScript: true },
  { slug: "epitalon", name: "Epitalon", goal: "wellness", usedFor: "Longevity and sleep-cycle support." },
  { slug: "dsip", name: "DSIP", aka: ["Delta Sleep-Inducing Peptide"], goal: "wellness", usedFor: "Sleep-cycle support." },
];

export type Blend = {
  slug: string;
  name: string;
  goal: Goal["slug"];
  components: string[];
  usedFor: string;
  legitScript?: boolean;
  /** Product photo. Real photos only; a branded slot renders until set. */
  image?: string;
};

// Blends — Todd's real line-up from the "peptides+ by site" breakdown
// (2026-10-27): nine blends, no Connect. (Connect was on the v16 sheet but on
// hold, and Todd's per-site list omits it, so it is not carried.) CJC-1295 and
// Ipamorelin appear only here as blend components, never as standalone products.
export const BLENDS: Blend[] = [
  { slug: "repair", name: "Repair", goal: "recovery", components: ["BPC-157", "TB-500"], usedFor: "Combined soft-tissue recovery support." },
  { slug: "glow", name: "Glow", goal: "recovery", components: ["BPC-157", "TB-500", "GHK-Cu"], usedFor: "Recovery with skin and tissue support." },
  { slug: "klow", name: "Klow", goal: "recovery", components: ["BPC-157", "GHK-Cu", "KPV", "TB-500"], usedFor: "Full tissue-recovery and gut support." },
  { slug: "build", name: "Build", goal: "wellness", components: ["CJC-1295", "Ipamorelin"], usedFor: "Growth-hormone and recovery support." },
  { slug: "sculpt", name: "Sculpt", goal: "wellness", components: ["Tesamorelin", "Ipamorelin"], usedFor: "Growth-hormone and body-composition support." },
  { slug: "renew", name: "Renew", goal: "wellness", components: ["GHK-Cu", "Epithalon"], usedFor: "Skin and longevity support." },
  { slug: "rest", name: "Rest", goal: "wellness", components: ["DSIP", "BPC-157", "CJC-1295"], usedFor: "Sleep and recovery support." },
  { slug: "calm", name: "Calm", goal: "mind", components: ["Semax", "Selank"], usedFor: "Calm and anti-anxiety support." },
  { slug: "focus", name: "Focus", goal: "mind", components: ["Pinealon", "PE-22-28", "Selank"], usedFor: "Focus and cognitive support." },
];

export function productsByGoal(goal: string): Product[] {
  return PRODUCTS.filter((p) => p.goal === goal);
}
export function blendsByGoal(goal: string): Blend[] {
  return BLENDS.filter((b) => b.goal === goal);
}
export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function getGoal(slug: string): Goal | undefined {
  return GOALS.find((g) => g.slug === slug);
}
