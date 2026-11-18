// Legal pages, in one place so routes, nav links and footer resolve.
// Privacy Policy and Terms of Service are finalized plain-language copy owned
// by Michael (counsel); they carry the mobile/SMS consent language required for
// A2P 10DLC carrier registration. Any doc still marked `draft: true` (e.g.
// telehealth-consent) is a placeholder whose binding version lives in the
// patient app; it renders a visible "being finalized" note and is not indexed.

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
    updated: "November 17, 2026",
    draft: false,
    intro:
      "This policy describes, in plain language, how New Start MD handles the information you share on this website and by phone or text. The full Notice of Privacy Practices for care delivered through the patient app is provided separately when you begin a visit.",
    sections: [
      { h: "What this site collects", p: "This marketing site collects only what you give us — your name, contact details including any phone number, and the goal you tell us — so we can respond. It does not load advertising or analytics pixels and does not collect health information." },
      { h: "How we use it", p: "To respond to your request or partner application, to schedule and follow up on your care or inquiry, and nothing else. We do not sell your information." },
      { h: "Text messages and your mobile number", p: "If you give us your mobile number — on a form, by calling us, or by replying to a message — we may text you about your inquiry or care, such as appointment confirmations, reminders, and follow-up messages. Your mobile phone number and your text-messaging consent are never shared with or sold to any third parties or affiliates for their marketing or promotional purposes. Message and data rates may apply, and you can reply STOP at any time to opt out or HELP for help." },
      { h: "Your care information", p: "Any health information you provide during a visit is handled inside the patient app under its separate Notice of Privacy Practices, not here." },
      { h: "Contact us", p: "Questions about this policy or your information can be sent to hello@newstartmd.com." },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Service",
    updated: "November 17, 2026",
    draft: false,
    intro:
      "These terms govern your use of the New Start MD website and your communications with us by phone and text.",
    sections: [
      { h: "Informational only", p: "Content on this site is educational and is not medical advice. Nothing here creates a provider-patient relationship; that begins only when you start a visit and a licensed provider accepts your care." },
      { h: "No guarantees", p: "Individual results vary, and a provider may determine that a therapy is not appropriate for you." },
      { h: "Eligibility", p: "You must be of legal age and located where New Start MD providers are licensed to be treated." },
      { h: "Text messages", p: "By giving New Start MD your mobile number, you agree that we may contact you by text message about your inquiry or care — for example appointment confirmations, reminders, and follow-up messages. Message frequency varies. Message and data rates may apply. You can reply STOP to any message to unsubscribe, or HELP for help. Opting out of texts does not affect your ability to receive care through other channels. Carriers are not liable for delayed or undelivered messages. See our Privacy Policy for how we handle your mobile information." },
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
