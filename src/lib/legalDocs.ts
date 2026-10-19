// Legal pages. These are PLAIN-LANGUAGE PLACEHOLDERS so the routes, nav links
// and footer resolve and the site can launch without dead links. They are NOT
// final legal copy — Michael (counsel) replaces each body before the patient
// app opens for signups. Each renders a visible "being finalized" note until
// then (see `draft`).

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  draft: boolean;
  intro: string;
  sections: { h: string; p: string }[];
};

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    updated: "Pending",
    draft: true,
    intro:
      "This summary describes, in plain language, how New Start MD handles the information you share on this website. The full Notice of Privacy Practices for care delivered through the patient app is provided when you begin a visit.",
    sections: [
      { h: "What this site collects", p: "This marketing site collects only what you type into our forms — your name, contact details, and the goal you tell us — so we can respond. It does not load advertising or analytics pixels and does not collect health information." },
      { h: "How we use it", p: "To reach out about your request or partner application, and nothing else. We do not sell your information." },
      { h: "Your care information", p: "Any health information you provide during a visit is handled inside the patient app under its separate Notice of Privacy Practices, not here." },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Service",
    updated: "Pending",
    draft: true,
    intro:
      "These terms govern your use of the New Start MD website. They are being finalized by counsel.",
    sections: [
      { h: "Informational only", p: "Content on this site is educational and is not medical advice. Nothing here creates a provider-patient relationship; that begins only when you start a visit and a licensed provider accepts your care." },
      { h: "No guarantees", p: "Individual results vary, and a provider may determine that a therapy is not appropriate for you." },
      { h: "Eligibility", p: "You must be of legal age and located where New Start MD providers are licensed to be treated." },
    ],
  },
  "telehealth-consent": {
    slug: "telehealth-consent",
    title: "Telehealth Consent",
    updated: "Pending",
    draft: true,
    intro:
      "This summary explains what telehealth care through New Start MD involves. The binding consent is presented and acknowledged inside the patient app before any visit.",
    sections: [
      { h: "What telehealth means", p: "Your provider evaluates and treats you remotely, by secure messaging and/or video, rather than in person." },
      { h: "Its limits", p: "Telehealth is not for emergencies. If you have a medical emergency, call 911. A provider may decide an in-person visit is necessary and decline to prescribe." },
      { h: "Your consent", p: "Before any visit, you review and acknowledge the full telehealth consent in the patient app." },
    ],
  },
};
