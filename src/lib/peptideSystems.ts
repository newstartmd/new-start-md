// PEPTIDE SYSTEM MAP — the data behind the "start with your body" library.
//
// Peptides are grouped by the body system they act in, each anchored to a real
// landmark, and marked by where it stands with the FDA. A peptide can act in
// more than one system, so it appears in each (see `also`). This is education
// only: `use` says what people and studies use a compound for, never that it
// works or is appropriate for anyone — a licensed provider decides that.

export type PeptideStatus = "ok" | "compound" | "trial" | "research";

export const STATUS_LABEL: Record<PeptideStatus, string> = {
  ok: "FDA-approved",
  compound: "Compounded",
  trial: "In trials",
  research: "Early research",
};

export type SystemPeptide = {
  name: string;
  aka?: string;
  use: string;
  status: PeptideStatus;
  /** Other system keys this peptide also acts in. */
  also?: SystemKey[];
};

export type PeptideSystem = {
  label: string;
  /** Anatomical landmark shown under the panel title. */
  landmark: string;
  blurb: string;
  /** Node position on the 240x470 figure viewBox. */
  node: { x: number; y: number };
  items: SystemPeptide[];
};

export type SystemKey =
  | "brain"
  | "hormones"
  | "immune"
  | "weight"
  | "recovery"
  | "skin"
  | "longevity"
  | "sexual";

/** Render order (also the pill order). */
export const SYSTEM_ORDER: SystemKey[] = [
  "brain",
  "hormones",
  "immune",
  "weight",
  "recovery",
  "skin",
  "longevity",
  "sexual",
];

export const SYSTEMS: Record<SystemKey, PeptideSystem> = {
  brain: {
    label: "Brain & mind",
    landmark: "Landmark · head",
    blurb: "Peptides studied for focus, calm, and sleep. Mostly early-stage.",
    node: { x: 120, y: 38 },
    items: [
      { name: "Semax", use: "Focus and cognition; studied mainly outside the US.", status: "research" },
      { name: "Selank", use: "Calm and anxiety; early research.", status: "research" },
      { name: "DSIP", aka: "delta-sleep", use: "Sleep signaling; limited human evidence.", status: "research" },
      { name: "Dihexa", use: "Memory and neural signaling; early research.", status: "research" },
    ],
  },
  hormones: {
    label: "Hormones & metabolism",
    landmark: "Landmark · thyroid / endocrine",
    blurb: "Endocrine signals for testosterone and the growth-hormone axis.",
    node: { x: 120, y: 82 },
    items: [
      { name: "Testosterone", aka: "TRT", use: "Hormone replacement for clinically low testosterone.", status: "ok" },
      { name: "HCG", use: "Fertility and testosterone-production support.", status: "ok" },
      { name: "Tesamorelin", aka: "GHRH analog", use: "Visceral fat; the molecule in Egrifta.", status: "ok" },
      { name: "Sermorelin", aka: "GHRH", use: "Growth-hormone support, typically a nightly injection.", status: "compound" },
      { name: "CJC-1295", aka: "GHRH analog", use: "Growth-hormone pulses, often paired with ipamorelin.", status: "compound", also: ["recovery"] },
      { name: "Enclomiphene", use: "Supports the body's own testosterone production.", status: "compound" },
      { name: "Kisspeptin-10", use: "Reproductive-hormone signaling; early research.", status: "research", also: ["sexual"] },
    ],
  },
  immune: {
    label: "Immune & defense",
    landmark: "Landmark · thymus / chest",
    blurb: "Thymic and antimicrobial peptides studied for immune support.",
    node: { x: 120, y: 114 },
    items: [
      { name: "Thymosin alpha-1", aka: "Tα1", use: "Immune modulation; studied in infection and immunity.", status: "research" },
      { name: "KPV", use: "Gut-lining and inflammatory support; early research.", status: "research", also: ["recovery"] },
      { name: "LL-37", aka: "cathelicidin", use: "Antimicrobial peptide; early research.", status: "research" },
    ],
  },
  weight: {
    label: "Weight & GLP-1",
    landmark: "Landmark · gut / pancreas",
    blurb: "Gut-hormone and metabolic signals studied for appetite and weight.",
    node: { x: 120, y: 162 },
    items: [
      { name: "Semaglutide", aka: "GLP-1", use: "Appetite and weight management; the molecule in Wegovy and Ozempic.", status: "ok" },
      { name: "Tirzepatide", aka: "GLP-1 / GIP", use: "Appetite and weight management; the molecule in Zepbound and Mounjaro.", status: "ok" },
      { name: "AOD-9604", aka: "hGH fragment", use: "Promoted for fat metabolism; limited human evidence.", status: "research" },
      { name: "MOTS-c", aka: "mitochondrial", use: "Metabolic and energy support; early research.", status: "research", also: ["longevity"] },
      { name: "5-Amino-1MQ", use: "Metabolic support; early research.", status: "research" },
    ],
  },
  recovery: {
    label: "Recovery & tissue",
    landmark: "Landmark · joints / muscle",
    blurb: "Compounds studied for soft-tissue, gut-lining, and joint recovery.",
    node: { x: 178, y: 124 },
    items: [
      { name: "BPC-157", use: "Studied for injury and gut-lining recovery; not tested in people.", status: "research", also: ["immune"] },
      { name: "TB-500", aka: "TB4 fragment", use: "Soft-tissue recovery; early research.", status: "research" },
      { name: "Thymosin beta-4", aka: "TB4", use: "Tissue repair and healing; early research.", status: "research" },
      { name: "GHK-Cu", aka: "copper peptide", use: "Skin and tissue repair; often topical.", status: "compound", also: ["skin"] },
      { name: "CJC-1295", aka: "GHRH analog", use: "Growth-hormone pulses for recovery; compounded.", status: "compound", also: ["hormones"] },
    ],
  },
  skin: {
    label: "Skin & hair",
    landmark: "Landmark · skin surface",
    blurb: "Compounds used for skin quality, repair, and appearance.",
    node: { x: 62, y: 140 },
    items: [
      { name: "GHK-Cu", aka: "copper peptide", use: "Skin firmness and repair; often topical.", status: "compound", also: ["recovery"] },
      { name: "Glutathione", aka: "antioxidant", use: "Antioxidant support, used for skin and detox pathways.", status: "compound", also: ["longevity"] },
      { name: "Epitalon", use: "Studied for aging and sleep-wake rhythm; early research.", status: "research", also: ["longevity"] },
    ],
  },
  longevity: {
    label: "Longevity & energy",
    landmark: "Landmark · cellular / mitochondria",
    blurb: "Cellular-energy and healthy-aging compounds.",
    node: { x: 120, y: 196 },
    items: [
      { name: "NAD+", use: "Cellular energy and metabolism support.", status: "compound" },
      { name: "SS-31", aka: "Elamipretide", use: "Mitochondrial function; studied in clinical trials.", status: "trial" },
      { name: "MOTS-c", aka: "mitochondrial", use: "Metabolic and energy support; early research.", status: "research", also: ["weight"] },
      { name: "Epitalon", use: "Aging and sleep-wake rhythm; early research.", status: "research", also: ["skin"] },
      { name: "Glutathione", aka: "antioxidant", use: "Antioxidant support; compounded.", status: "compound", also: ["skin"] },
    ],
  },
  sexual: {
    label: "Sexual & vitality",
    landmark: "Landmark · pelvis",
    blurb: "Signals studied for desire and sexual function.",
    node: { x: 120, y: 230 },
    items: [
      { name: "PT-141", aka: "Bremelanotide", use: "Sexual desire; the molecule in FDA-approved Vyleesi.", status: "ok" },
      { name: "Oxytocin", use: "Bonding and arousal signaling; compounded.", status: "compound" },
      { name: "Kisspeptin-10", use: "Reproductive-hormone signaling; early research.", status: "research", also: ["hormones"] },
    ],
  },
};
