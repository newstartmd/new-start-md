// NEW START MD — ASSESSMENT WIZARD DATA
// ---------------------------------------------------------------------------
// A Hims/Ro-style multi-step intake, but New Start's own. PHI-SAFE BY DESIGN:
// the marketing site is PHI-free, so this collects a goal, light non-clinical
// qualifiers (demographics, lifestyle, what "a win" looks like) and contact
// details only. The real clinical health history is taken in the secure portal
// AFTER handoff — never here. Do not add diagnosis/medication/condition
// questions to this file.
//
// On completion the answers submit through the existing /start server action,
// which records the lead, attaches the trainer/referral code automatically,
// and hands off to GEN Health's assessment when it is live.

export type Choice = { value: string; label: string; hint?: string; icon?: IconKey };

export type Step =
  | {
      id: string;
      kind: "single";
      eyebrow: string;
      question: string;
      sub?: string;
      choices: Choice[];
    }
  | {
      id: string;
      kind: "multi";
      eyebrow: string;
      question: string;
      sub?: string;
      choices: Choice[];
    };

export type IconKey =
  | "spark"
  | "scale"
  | "muscle"
  | "clock"
  | "brain"
  | "heart"
  | "moon"
  | "flame"
  | "shield"
  | "bolt";

// Maps the goal choice to the catalog goal slug so we can route later.
export const GOAL_TO_SLUG: Record<string, string> = {
  "Lose weight": "weight-loss",
  "Energy & drive": "hormone",
  "Build & recover": "recovery",
  "Age well": "wellness",
  "Focus & mood": "mind",
};

export const STEPS: Step[] = [
  {
    id: "goal",
    kind: "single",
    eyebrow: "Your goal",
    question: "What's your #1 goal right now?",
    sub: "We'll tailor everything that follows around this. You can change direction with your provider.",
    choices: [
      { value: "Lose weight", label: "Lose weight", hint: "GLP-1 & metabolic", icon: "scale" },
      { value: "Energy & drive", label: "More energy & drive", hint: "Hormones & vitality", icon: "bolt" },
      { value: "Build & recover", label: "Build & recover", hint: "Performance & repair", icon: "muscle" },
      { value: "Age well", label: "Age well, feel young", hint: "Longevity & energy", icon: "clock" },
      { value: "Focus & mood", label: "Sharper focus & mood", hint: "Mind & clarity", icon: "brain" },
    ],
  },
  {
    id: "sex",
    kind: "single",
    eyebrow: "About you",
    question: "Sex assigned at birth",
    sub: "Some protocols differ — this helps your provider start from the right place.",
    choices: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
  },
  {
    id: "age",
    kind: "single",
    eyebrow: "About you",
    question: "Which age range are you in?",
    choices: [
      { value: "18-29", label: "18–29" },
      { value: "30-39", label: "30–39" },
      { value: "40-49", label: "40–49" },
      { value: "50-59", label: "50–59" },
      { value: "60+", label: "60 or older" },
    ],
  },
  {
    id: "wins",
    kind: "multi",
    eyebrow: "What a win looks like",
    question: "What would feeling your best actually look like?",
    sub: "Pick as many as you like.",
    choices: [
      { value: "More energy", label: "More energy", icon: "spark" },
      { value: "Lose weight", label: "Lose weight", icon: "scale" },
      { value: "Strength & muscle", label: "Strength & muscle", icon: "muscle" },
      { value: "Better sleep", label: "Better sleep", icon: "moon" },
      { value: "Libido & vitality", label: "Libido & vitality", icon: "flame" },
      { value: "Focus & mood", label: "Focus & mood", icon: "brain" },
      { value: "Confidence", label: "Confidence", icon: "shield" },
      { value: "Longevity", label: "Live longer, better", icon: "heart" },
    ],
  },
  {
    id: "activity",
    kind: "single",
    eyebrow: "Your week",
    question: "How active are you most weeks?",
    choices: [
      { value: "Starting out", label: "Just starting out", hint: "Little exercise right now" },
      { value: "Consistent", label: "A few times a week", hint: "Fairly consistent" },
      { value: "Athlete", label: "Most days / athlete", hint: "Training is part of my life" },
    ],
  },
];
