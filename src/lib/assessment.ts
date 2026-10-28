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
      /** If set, this step only shows when the named function is opted into. */
      gatedBy?: string;
    }
  | {
      id: string;
      kind: "multi";
      eyebrow: string;
      question: string;
      sub?: string;
      choices: Choice[];
      gatedBy?: string;
    }
  | {
      id: "functions";
      kind: "functions";
      eyebrow: string;
      question: string;
      sub?: string;
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

// ---------------------------------------------------------------------------
// MODULAR SYSTEM — "build your protocol"
// ---------------------------------------------------------------------------
// A protocol is more than a compound. After the core questions, the visitor
// chooses which parts of the system they want. The prescribed compound is the
// CORE and is always included; diet, training, wearable tracking and coaching
// are OPT-IN. Each part a visitor turns on reveals a few extra preference
// questions so the plan can be shaped to them.
//
// PHI STAYS OUT. These follow-ups collect PREFERENCES only (what you like, how
// you train, which watch you own). Clinical history — food and drug allergies,
// conditions, medications — is taken in the secure portal with your provider,
// never on this marketing form. The diet step says so in plain language.

export type SystemFunction = {
  value: string;
  title: string;
  blurb: string;
  icon: IconKey;
  /** The compound is always included and cannot be turned off. */
  core?: boolean;
};

export const FUNCTIONS: SystemFunction[] = [
  {
    value: "medical",
    title: "Prescribed compound",
    blurb: "The peptide, GLP-1 or hormone your provider prescribes. The core of every protocol.",
    icon: "shield",
    core: true,
  },
  {
    value: "diet",
    title: "Diet & nutrition",
    blurb: "A plan shaped to your food preferences and routine.",
    icon: "flame",
  },
  {
    value: "training",
    title: "Training",
    blurb: "Workouts matched to your goal, space and schedule.",
    icon: "muscle",
  },
  {
    value: "device",
    title: "Wearable tracking",
    blurb: "Sync your watch or ring so progress shows up automatically.",
    icon: "bolt",
  },
  {
    value: "coaching",
    title: "Coaching",
    blurb: "A human in your corner, checking in and adjusting as you go.",
    icon: "heart",
  },
];

// The opt-in selection step itself. Rendered specially from FUNCTIONS.
export const FUNCTIONS_STEP: Step = {
  id: "functions",
  kind: "functions",
  eyebrow: "Build your system",
  question: "Which parts do you want?",
  sub: "Your compound is always included. Add any of the rest — only what you want, and you can change it later with your provider.",
};

// Per-function follow-up questions, shown ONLY when that function is opted in.
export const FUNCTION_STEPS: Step[] = [
  // Diet
  {
    id: "diet-style",
    gatedBy: "diet",
    kind: "single",
    eyebrow: "Diet & nutrition",
    question: "How do you prefer to eat?",
    sub: "So your plan starts from the right place.",
    choices: [
      { value: "No preference", label: "No preference", hint: "I'll eat most things" },
      { value: "High-protein", label: "High-protein" },
      { value: "Low-carb / keto", label: "Low-carb / keto" },
      { value: "Mediterranean", label: "Mediterranean" },
      { value: "Vegetarian", label: "Vegetarian" },
      { value: "Vegan", label: "Vegan" },
      { value: "Pescatarian", label: "Pescatarian" },
    ],
  },
  {
    id: "diet-avoid",
    gatedBy: "diet",
    kind: "multi",
    eyebrow: "Diet & nutrition",
    question: "Anything you'd rather not eat?",
    sub: "Preferences only — pick any that apply. Food and drug allergies are taken securely with your provider in the portal, not here.",
    choices: [
      { value: "Dairy", label: "Dairy" },
      { value: "Red meat", label: "Red meat" },
      { value: "Seafood", label: "Seafood" },
      { value: "Eggs", label: "Eggs" },
      { value: "Gluten / wheat", label: "Gluten / wheat" },
      { value: "Soy", label: "Soy" },
      { value: "Very spicy", label: "Very spicy" },
      { value: "Nothing", label: "Nothing — I'm easy" },
    ],
  },
  // Training
  {
    id: "training-where",
    gatedBy: "training",
    kind: "single",
    eyebrow: "Training",
    question: "Where will you train?",
    choices: [
      { value: "Home", label: "At home", hint: "Little or no equipment" },
      { value: "Gym", label: "At a gym" },
      { value: "Both", label: "Both" },
      { value: "Outdoors", label: "Mostly outdoors" },
    ],
  },
  {
    id: "training-days",
    gatedBy: "training",
    kind: "single",
    eyebrow: "Training",
    question: "How many days a week can you train?",
    choices: [
      { value: "1-2", label: "1–2 days" },
      { value: "3-4", label: "3–4 days" },
      { value: "5+", label: "5 or more" },
    ],
  },
  // Wearable tracking
  {
    id: "device-brand",
    gatedBy: "device",
    kind: "multi",
    eyebrow: "Wearable tracking",
    question: "What do you wear?",
    sub: "We'll connect it so your progress updates on its own. Pick any you use.",
    choices: [
      { value: "Apple Watch", label: "Apple Watch" },
      { value: "Fitbit", label: "Fitbit" },
      { value: "Garmin", label: "Garmin" },
      { value: "Oura", label: "Oura Ring" },
      { value: "Whoop", label: "Whoop" },
      { value: "Samsung / Android", label: "Samsung / Android" },
      { value: "Google Fit", label: "Google Fit" },
      { value: "None yet", label: "None yet — may get one" },
    ],
  },
  // Coaching
  {
    id: "coaching-cadence",
    gatedBy: "coaching",
    kind: "single",
    eyebrow: "Coaching",
    question: "How often would you want to hear from your coach?",
    choices: [
      { value: "Weekly", label: "Weekly check-ins" },
      { value: "Every other week", label: "Every other week" },
      { value: "Monthly", label: "Monthly" },
      { value: "As needed", label: "Just when I need it" },
    ],
  },
];

// Human-readable labels for the function keys, for the lead summary.
export const FUNCTION_LABELS: Record<string, string> = Object.fromEntries(
  FUNCTIONS.map((f) => [f.value, f.title]),
);
