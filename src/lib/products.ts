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
// `legitScript: true` marks the products that ALSO appear on FitClinicMD, so
// the two sites stay consistent where they overlap. The authoritative
// full-catalog list (38 singles + 48 blends) is Todd's to confirm; add the
// remainder here as it is approved.

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

// Singles. Descriptors are deliberately plain and usage-framed.
export const PRODUCTS: Product[] = [
  // Weight loss / metabolic
  { slug: "semaglutide", name: "Semaglutide", aka: ["GLP-1"], goal: "weight-loss", usedFor: "Appetite and weight management.", legitScript: true },
  { slug: "tirzepatide", name: "Tirzepatide", aka: ["GLP-1/GIP"], goal: "weight-loss", usedFor: "Appetite and weight management.", legitScript: true },
  { slug: "retatrutide", name: "Retatrutide", goal: "weight-loss", usedFor: "Investigational metabolic and weight support." },
  { slug: "cagrilintide", name: "Cagrilintide", goal: "weight-loss", usedFor: "Appetite support, often paired with a GLP-1." },
  { slug: "aod-9604", name: "AOD-9604", goal: "weight-loss", usedFor: "Fat-metabolism support." },
  { slug: "mots-c", name: "MOTS-c", goal: "weight-loss", usedFor: "Metabolic and energy support." },
  { slug: "5-amino-1mq", name: "5-Amino-1MQ", goal: "weight-loss", usedFor: "Metabolic support." },

  // Hormone & vitality
  { slug: "testosterone", name: "Testosterone", aka: ["TRT"], goal: "hormone", usedFor: "Hormone replacement for low testosterone.", legitScript: true },
  { slug: "hcg", name: "HCG", goal: "hormone", usedFor: "Fertility and testosterone support.", legitScript: true },
  { slug: "enclomiphene", name: "Enclomiphene", goal: "hormone", usedFor: "Natural testosterone production support." },
  { slug: "gonadorelin", name: "Gonadorelin", goal: "hormone", usedFor: "Hormonal-axis support alongside TRT." },
  { slug: "pt-141", name: "PT-141", aka: ["Bremelanotide"], goal: "hormone", usedFor: "Libido and sexual-health support.", legitScript: true },
  { slug: "kisspeptin", name: "Kisspeptin", goal: "hormone", usedFor: "Reproductive-hormone support." },
  { slug: "oxytocin", name: "Oxytocin", goal: "hormone", usedFor: "Mood, bonding and intimacy support.", legitScript: true },

  // Recovery & performance
  { slug: "bpc-157", name: "BPC-157", goal: "recovery", usedFor: "Soft-tissue and gut recovery support." },
  { slug: "tb-500", name: "TB-500", aka: ["Thymosin Beta-4"], goal: "recovery", usedFor: "Tissue recovery and flexibility support." },
  { slug: "ghk-cu", name: "GHK-Cu", goal: "recovery", usedFor: "Skin and tissue support (topical).", legitScript: true },
  { slug: "kpv", name: "KPV", goal: "recovery", usedFor: "Inflammation and gut support." },
  { slug: "thymosin-alpha-1", name: "Thymosin Alpha-1", goal: "recovery", usedFor: "Immune support." },

  // Longevity & wellness
  { slug: "sermorelin", name: "Sermorelin", goal: "wellness", usedFor: "Growth-hormone and sleep support.", legitScript: true },
  { slug: "tesamorelin", name: "Tesamorelin", goal: "wellness", usedFor: "Growth-hormone and body-composition support.", legitScript: true },
  { slug: "ipamorelin", name: "Ipamorelin", goal: "wellness", usedFor: "Growth-hormone and recovery support." },
  { slug: "cjc-1295", name: "CJC-1295", goal: "wellness", usedFor: "Growth-hormone support, often paired with Ipamorelin." },
  { slug: "mk-677", name: "MK-677", aka: ["Ibutamoren"], goal: "wellness", usedFor: "Growth-hormone and appetite support." },
  { slug: "nad", name: "NAD+", goal: "wellness", usedFor: "Cellular energy and longevity support.", legitScript: true },
  { slug: "glutathione", name: "Glutathione", goal: "wellness", usedFor: "Antioxidant and detox support.", legitScript: true },
  { slug: "ss-31", name: "SS-31", aka: ["Elamipretide"], goal: "wellness", usedFor: "Mitochondrial support.", legitScript: true },
  { slug: "epitalon", name: "Epitalon", goal: "wellness", usedFor: "Longevity and sleep-cycle support." },

  // Mind & mood
  { slug: "selank", name: "Selank", goal: "mind", usedFor: "Calm and anti-anxiety support." },
  { slug: "semax", name: "Semax", goal: "mind", usedFor: "Focus and cognitive support." },
  { slug: "dihexa", name: "Dihexa", goal: "mind", usedFor: "Cognitive and memory support." },
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

// Blends — Todd's real line-up and compositions from the v16 pricing sheet
// (2026-10-23). Priced per vial in lib/catalogPricing.ts. (Connect is on the
// sheet but on hold — not at Dirx-Hub yet — so it's omitted from the active
// grid for now.)
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
