// NEW START MD — HOME PAGE CONTENT
// Section content for the §8.1 home build. Compliance rules baked in:
//  • Usage language only ("may help / may support") — no efficacy/outcome claims.
//  • No fabricated physicians or testimonials. The physician section states
//    verifiable standards (not invented names); testimonials are flagged
//    placeholders until real, consented member stories exist (guide §10).
//  • Per-category stats are factual counts of what we carry, never outcomes.

export type Chapter = {
  goal: string; // matches a GOALS slug
  kicker: string;
  headline: string;
  accent: string; // italic accent word/phrase inside the headline
  blurb: string;
  bullets: string[];
  mood: string; // ImageSlot label — real cool-graded photo supplied by team
};

export const CHAPTERS: Chapter[] = [
  {
    goal: "weight-loss",
    kicker: "Weight & GLP-1",
    headline: "Lighter. Sharper.",
    accent: "Unstoppable.",
    blurb:
      "Physician-guided GLP-1 and metabolic programs, dosed to you and adjusted as you go.",
    bullets: [
      "May help curb appetite and cravings",
      "May support steady, sustainable weight management",
      "Clinician check-ins and dose adjustments included",
    ],
    mood: "Active · open water",
  },
  {
    goal: "hormone",
    kicker: "Hormone & vitality",
    headline: "Prime isn't an age.",
    accent: "It's a protocol.",
    blurb:
      "Testosterone, sexual-health and balance therapies, guided by your labs and your provider.",
    bullets: [
      "May support energy, drive and mood",
      "Lab-informed, provider-adjusted protocols",
      "Discreet, delivered, and monitored",
    ],
    mood: "Confidence · city terrace",
  },
  {
    goal: "recovery",
    kicker: "Recovery & performance",
    headline: "Recover like",
    accent: "you mean it.",
    blurb:
      "Peptide and recovery support for people who train hard and want to keep going.",
    bullets: [
      "May support soft-tissue and joint recovery",
      "Designed to complement how you already train",
      "Prescribed only when clinically appropriate",
    ],
    mood: "Training · the gym floor",
  },
  {
    goal: "wellness",
    kicker: "Longevity & wellness",
    headline: "Age with",
    accent: "strength.",
    blurb:
      "Growth-hormone, cellular-energy and longevity support for the long game.",
    bullets: [
      "May support energy, sleep and resilience",
      "Built around your biology, not averages",
      "A plan that evolves as you do",
    ],
    mood: "Vitality · coastal golf",
  },
];

export type Tier = {
  name: string;
  pitch: string;
  features: string[];
  signature?: boolean;
};

export const TIERS: Tier[] = [
  {
    name: "Essential",
    pitch: "Everything you need to start and stay on track.",
    features: [
      "Licensed provider visit & plan",
      "Therapy delivered to your door",
      "Message your care team",
      "Dose adjustments as you progress",
    ],
  },
  {
    name: "Signature",
    pitch: "A concierge new start, with your biology in focus.",
    signature: true,
    features: [
      "Everything in Essential",
      "Same-day clinician messaging",
      "Lab-informed protocol reviews",
      "Priority shipping & travel-ready kits",
    ],
  },
];

export type Value = { title: string; body: string };

// Verifiable standards — NOT invented physician names (guide §10).
export const STANDARDS: Value[] = [
  { title: "Board-certified", body: "Every plan is reviewed and prescribed by a licensed U.S. clinician." },
  { title: "Lab-informed", body: "Protocols are set against your labs and optimal ranges, not averages." },
  { title: "Licensed pharmacies", body: "Therapies are prepared and quality-checked by licensed U.S. pharmacies." },
  { title: "Private by design", body: "A HIPAA-ready architecture — your health data stays protected." },
];

export type Testimonial = { quote: string; name: string; placeholder?: boolean };

// Placeholders only. Real, consented member stories replace these before launch
// (guide §10: testimonials need documented consent + typical-results disclosure).
export const TESTIMONIALS: Testimonial[] = [
  { quote: "Verified member story — pending consent.", name: "Member story", placeholder: true },
  { quote: "Verified member story — pending consent.", name: "Member story", placeholder: true },
  { quote: "Verified member story — pending consent.", name: "Member story", placeholder: true },
];

export type CompareRow = { feature: string; us: boolean; them: boolean };

export const COMPARE: CompareRow[] = [
  { feature: "Licensed provider reviews every plan", us: true, them: true },
  { feature: "100% online — no clinic waiting room", us: true, them: false },
  { feature: "Delivered discreetly to your door", us: true, them: false },
  { feature: "Lab-informed, adjusted as you go", us: true, them: false },
  { feature: "Message your care team anytime", us: true, them: false },
  { feature: "Cancel anytime", us: true, them: false },
];

export type Faq = { q: string; a: string };

export const HOME_FAQ: Faq[] = [
  {
    q: "Is this legal and prescribed?",
    a: "Yes. Everything is prescribed by a licensed U.S. provider after a visit, and prepared by licensed U.S. pharmacies. Prescription therapies ship only after clinician approval.",
  },
  {
    q: "Do I need to go anywhere?",
    a: "No. The assessment, your provider visit and follow-ups are all online, and your therapy is delivered to your door.",
  },
  {
    q: "How is my plan decided?",
    a: "You share your goals and history, a provider reviews everything — including labs where clinically appropriate — and builds a plan for you. Your clinician determines the right therapy and dosing.",
  },
  {
    q: "What does it cost?",
    a: "Programs are priced as a range depending on your plan, and your exact price is set with your provider. There are no surprise fees, and you can cancel anytime.",
  },
  {
    q: "Are these FDA-approved?",
    a: "Some therapies are FDA-approved medications; compounded medications are not FDA-approved and are prepared by licensed pharmacies. Your provider will explain what applies to your plan.",
  },
  {
    q: "Is my information private?",
    a: "Yes. New Start MD is built on a HIPAA-ready architecture, and your health information is never used for advertising.",
  },
];
