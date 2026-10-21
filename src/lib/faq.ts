// NEW START MD — FAQ content (guide §8.8). Categorized, compliance-safe:
// usage language only, no efficacy guarantees, no fabricated specifics.

export const FAQ_CATEGORIES = [
  "Getting started",
  "Treatments",
  "Clinicians",
  "Pharmacy & shipping",
  "Billing",
  "Privacy",
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

export type FaqItem = { category: FaqCategory; q: string; a: string };

export const FAQ_ITEMS: FaqItem[] = [
  // Getting started
  {
    category: "Getting started",
    q: "What is New Start MD?",
    a: "A physician-led telehealth service for weight loss, hormone therapy, recovery and longevity. You take a short assessment, a licensed provider decides what's appropriate, and prescribed therapy ships to your door.",
  },
  {
    category: "Getting started",
    q: "How do I start?",
    a: "Take the 5-minute assessment from your phone. A licensed provider reviews it, and if you're a fit, your plan ships to you with ongoing care in your portal.",
  },
  {
    category: "Getting started",
    q: "How fast will I hear back?",
    a: "A provider typically reviews your assessment within one to two business days.",
  },
  {
    category: "Getting started",
    q: "Which states do you serve?",
    a: "We treat where our providers are licensed, and availability varies by state. The assessment tells you right away whether we can treat you where you are.",
  },
  {
    category: "Getting started",
    q: "A trainer referred me — what do I do?",
    a: "Start the same way. Their code travels with you automatically, and nothing about your care changes.",
  },

  // Treatments
  {
    category: "Treatments",
    q: "What do you carry?",
    a: "The full line — weight loss and GLP-1, hormone therapy and TRT, recovery and performance peptides, longevity and wellness, and mind and mood. Browse Treatments to see the catalog.",
  },
  {
    category: "Treatments",
    q: "Are these FDA-approved?",
    a: "Some therapies are FDA-approved medications. Compounded medications are not FDA-approved and are prepared by licensed pharmacies. Your provider explains what applies to your plan.",
  },
  {
    category: "Treatments",
    q: "Do you guarantee results?",
    a: "No. We describe what therapies are used for, not what they'll do for you — individual results vary, and your provider sets realistic expectations for your plan.",
  },
  {
    category: "Treatments",
    q: "Can I combine therapies or use a blend?",
    a: "Sometimes. We carry single therapies and provider-guided blends, and your clinician decides what's appropriate to combine for your goal.",
  },

  // Clinicians
  {
    category: "Clinicians",
    q: "Who prescribes my treatment?",
    a: "A licensed U.S. provider, after reviewing your assessment and history. Nothing is sold over the counter.",
  },
  {
    category: "Clinicians",
    q: "Do I need labs?",
    a: "Not always. Your provider may order simple at-home labs where they help guide or monitor your plan, and will tell you if they're needed.",
  },
  {
    category: "Clinicians",
    q: "Can I message my provider?",
    a: "Yes. You can message your care team through your portal, and your plan includes check-ins along the way.",
  },
  {
    category: "Clinicians",
    q: "Can my dose change over time?",
    a: "Yes. Your provider adjusts your plan as you progress and after any follow-up labs, and updates your prescription accordingly.",
  },

  // Pharmacy & shipping
  {
    category: "Pharmacy & shipping",
    q: "Who makes my therapy?",
    a: "Licensed U.S. pharmacies prepare and quality-check your therapy before it's packed for you.",
  },
  {
    category: "Pharmacy & shipping",
    q: "How is it shipped?",
    a: "Discreetly to your door, with tracking, and with cold-chain packaging for therapies that need it.",
  },
  {
    category: "Pharmacy & shipping",
    q: "How long does delivery take?",
    a: "Once your provider approves your plan, it typically ships within a couple of business days. Exact timing depends on the pharmacy and your location.",
  },
  {
    category: "Pharmacy & shipping",
    q: "What if my package is damaged or delayed?",
    a: "Message your care team and we'll make it right — including arranging a replacement where needed.",
  },

  // Billing
  {
    category: "Billing",
    q: "What does it cost?",
    a: "Programs are priced as a range depending on your plan, and your exact price is set with your provider. Every program includes the care and the medicine, with no surprise fees.",
  },
  {
    category: "Billing",
    q: "Can I cancel anytime?",
    a: "Yes. There are no long contracts — you can cancel anytime, and annual billing simply saves you more.",
  },
  {
    category: "Billing",
    q: "Do you accept HSA/FSA?",
    a: "HSA/FSA eligibility varies by plan and employer. We'll confirm what applies to you before you're charged.",
  },

  // Privacy
  {
    category: "Privacy",
    q: "Is my information private?",
    a: "Yes. New Start MD is built on a HIPAA-ready architecture, and your health information is never used for advertising.",
  },
  {
    category: "Privacy",
    q: "If a trainer referred me, what do they see?",
    a: "They see that you joined through their code and anything you choose to share about your progress. They never see your medical records.",
  },
];
