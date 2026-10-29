// EDUCATION ARTICLES — original copy for the Learn hub.
//
// These are written IN OUR OWN WORDS from background research; they do not
// reproduce any pharmacy or vendor marketing. The editorial line (see the Learn
// page) is "plain answers, not marketing": explain how this kind of care works
// so a reader can judge any clinic on the merits.
//
// COMPLIANCE: education is not a place to smuggle in efficacy claims. Articles
// describe mechanisms and process conservatively, never promise an outcome from
// a specific product, and always state that compounded medications are not
// FDA-approved and that individual results vary. Anything that would function as
// a product efficacy claim belongs in lib/claims.ts, gated for counsel — not
// here. Keep this content general and non-promissory.

export type Block =
  | { type: "p"; text: string; links?: { text: string; href: string }[] }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  title: string;
  summary: string;
  /** Short category label shown on the card and article header. */
  topic: string;
  /** ISO date; shown as "Last updated". */
  updated: string;
  /** Rough read time, minutes. */
  readMinutes: number;
  status: "PUBLISHED" | "PLANNED";
  body?: Block[];
  /** Primary sources this article draws on — peer-reviewed, open-access. */
  sources?: { title: string; publisher: string; href: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "storing-your-peptide-medication",
    title: "How to store and handle your peptide medication",
    summary:
      "Peptides are sensitive to light and heat. Here's how to store yours so it stays effective, what to do if it arrives warm, and when to call your care team.",
    topic: "Using your medication",
    updated: "2026-08-01",
    readMinutes: 4,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "If your provider prescribes a compounded peptide, it arrives as a liquid that has been prepared specifically for you and shipped cold. Peptides are delicate molecules, and a little care in how you store and handle yours goes a long way toward keeping it stable. None of this is complicated — but it is worth getting right.",
      },
      { type: "h2", text: "Keep it cold — but not frozen" },
      {
        type: "p",
        text: "Refrigerate your medication promptly when it arrives. The target range is a normal refrigerator temperature, roughly 40–46°F (4–8°C).",
      },
      {
        type: "ul",
        items: [
          "Store the vial toward the front-middle of the fridge, where the temperature is most stable.",
          "Avoid the back wall, the cooling vents, and the chill/crisper drawers — those spots run coldest and can dip too low.",
          "Do not freeze it, and don't let it sit against an ice pack. Freezing can damage a peptide solution.",
        ],
      },
      { type: "h2", text: "Light matters more than a warm delivery" },
      {
        type: "p",
        text: "It's natural to worry if a package arrives warm after a day in transit. In most cases that's fine. Peer-reviewed stability research on reconstituted peptides has generally found that brief temperature swings in shipping are far less damaging than people assume — light exposure, not a short warm spell, tends to be the bigger driver of degradation. That's why quality shipments go out in opaque, light-blocking packaging.",
      },
      {
        type: "p",
        text: "So the habit that protects your medication most is simple: keep it out of the light.",
      },
      {
        type: "ul",
        items: [
          "Keep the vial away from direct sunlight and bright fluorescent lighting.",
          "Don't leave it sitting out in the light while you draw a dose — take it out, use it, and put it back.",
          "Store it in its original packaging or a dark container between uses.",
        ],
      },
      { type: "h2", text: "When to check with your care team" },
      {
        type: "p",
        text: "Contact your care team before using your medication if any of these apply:",
      },
      {
        type: "ul",
        items: [
          "The solution looks cloudy, has gelled or thickened, or has visible particles that don't dissolve.",
          "You think the vial was frozen, or left unrefrigerated for an extended period.",
          "The packaging arrived damaged, or you're simply unsure whether it's still good.",
        ],
      },
      {
        type: "callout",
        text: "Always follow the specific storage and handling instructions that come with your prescription and anything your provider tells you — those take priority over general guidance. This article is general information, not medical advice, and not a substitute for your provider's directions.",
      },
    ],
  },
  {
    slug: "why-results-vary",
    title: "Why two people can respond differently to the same peptide",
    summary:
      "\"I don't feel anything\" and \"this worked better for my friend\" usually aren't about the vial. Here's the honest biology of why responses vary — and what actually helps.",
    topic: "Setting expectations",
    updated: "2026-08-01",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "One of the most common questions in this kind of care is some version of \"why didn't I feel what someone else felt?\" It's a fair question, and the honest answer is rarely \"a better vial.\" It's biology. Understanding why sets realistic expectations — and points to the things that genuinely move the needle.",
      },
      { type: "h2", text: "Peptides are signals, not force" },
      {
        type: "p",
        text: "A useful way to think about most peptides: they are messengers. They ask your body to do something — repair a tissue, build collagen, support a metabolic process — rather than doing the work themselves. Your body still has to carry out the request.",
      },
      {
        type: "callout",
        text: "A peptide is like an instruction. Your cells are what actually do the job. A great instruction sent to a tired, under-resourced system doesn't get carried out as well.",
      },
      { type: "h2", text: "Your cells need the resources to respond" },
      {
        type: "p",
        text: "Carrying out that instruction takes energy and raw materials. Your cells run on ATP — the energy your mitochondria produce — and they need building blocks like protein, plus rest and recovery, to do things like repair tissue or rebuild after exercise. When the underlying system is depleted, even a good signal produces a quieter response.",
      },
      {
        type: "p",
        text: "That's why the same therapy can land differently for two people. Consider two patients on an identical protocol:",
      },
      {
        type: "ul",
        items: [
          "One is younger, sleeps well, eats enough protein, trains consistently, and has lower inflammation — a body that's ready to act on the signal.",
          "The other is under-slept, sedentary, more inflamed, and metabolically stressed — the signal arrives, but the system has less capacity to respond.",
        ],
      },
      {
        type: "p",
        text: "Age plays a role too: the cellular environment gradually changes over the decades, and recovery tends to slow. None of this means a therapy \"isn't working\" — it means results depend on the whole person, not the vial alone.",
      },
      { type: "h2", text: "What actually helps" },
      {
        type: "p",
        text: "This is exactly why a responsible program treats a prescription as one part of the picture, not a magic bullet. The fundamentals still matter — sleep, protein, movement, and managing stress all improve your body's ability to respond — and your provider looks at your labs and history to tailor the plan and set realistic expectations.",
      },
      {
        type: "callout",
        text: "Individual results vary and are not guaranteed. Compounded medications are not FDA-approved. Whether any therapy is appropriate for you is a decision for a licensed provider after an evaluation — not something this article can promise.",
      },
    ],
  },
  {
    slug: "compounded-medication-explained",
    title: "Compounded medication, explained",
    summary:
      "What it means when a medication is \"compounded,\" how that differs from a product off a pharmacy shelf, why it isn't FDA-approved, and the questions worth asking.",
    topic: "How this works",
    updated: "2026-08-01",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "A lot of the medication offered through telehealth wellness programs — including peptides — is \"compounded.\" It's a word people see and skip past. It's worth understanding, because it changes what you're getting and what questions to ask.",
      },
      { type: "h2", text: "What \"compounded\" means" },
      {
        type: "p",
        text: "A compounded medication is prepared by a licensed pharmacy for an individual patient, based on a prescription from a licensed provider, rather than mass-manufactured in fixed doses. Compounding pharmacies in the U.S. generally operate under what are known as 503A and 503B frameworks. It's an established part of medicine — it's how a patient can get a specific formulation or strength that isn't available as a standard commercial product.",
      },
      { type: "h2", text: "How it differs from a product off the shelf" },
      {
        type: "ul",
        items: [
          "A commercially manufactured drug is made in large batches and reviewed and approved by the FDA for a specific use.",
          "A compounded preparation is made for you. Because each preparation is individualized, compounded medications are not FDA-approved — the FDA does not review individual compounded formulations for safety or effectiveness.",
          "That is not the same as \"unregulated.\" The pharmacy is state-licensed and the medication is dispensed only on a valid prescription from a provider licensed in your state.",
        ],
      },
      {
        type: "callout",
        text: "Compounded medications are prepared by a state-licensed pharmacy for an individual patient. They have not been evaluated or approved by the FDA as safe or effective for the treatment of any condition.",
      },
      { type: "h2", text: "Questions worth asking any clinic" },
      {
        type: "p",
        text: "Whether you're considering us or anyone else, these are reasonable things to ask before you start:",
      },
      {
        type: "ul",
        items: [
          "Who evaluates me, and are they licensed in my state? A prescription should follow an actual evaluation, not a checkout page.",
          "Is the pharmacy licensed, and where is my medication made?",
          "What are the realistic expectations, and what are the risks and side effects for someone like me?",
          "How does billing work, and how do I cancel if I want to stop?",
          "Who can say no? A clinic that will decline to prescribe when it isn't appropriate is a good sign, not a bad one.",
        ],
      },
      {
        type: "callout",
        text: "This article is general information, not medical advice. Whether a compounded therapy is appropriate for you is decided by a licensed provider after an evaluation.",
      },
    ],
  },
  {
    slug: "peptides-and-hormone-therapy",
    title: "Peptides and hormone therapy: how they fit together",
    summary:
      "Hormones and peptides work on different systems in the body. Here's what each one does, why a provider might use them together, and the guardrails that matter — especially with testosterone.",
    topic: "How this works",
    updated: "2026-08-01",
    readMinutes: 6,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "A question that comes up a lot: do I need hormones, peptides, or both? They get lumped together because both show up in wellness programs, but they are different tools that work on different systems. Here's a plain explanation of how they relate — and the guardrails a responsible clinic puts around them.",
      },
      { type: "h2", text: "Two different tools" },
      {
        type: "p",
        text: "Hormone therapy replaces or supplements a hormone your body makes — testosterone, estrogen, or progesterone, for example. It works on your hormone receptor pathways, essentially topping up a level that has dropped. Peptides are short chains of amino acids that act as signals: rather than replacing a hormone, they nudge a specific process — tissue repair, metabolism, sleep, and so on. One adjusts a hormone level; the other sends a targeted message.",
      },
      { type: "h2", text: "Why a provider might use them together" },
      {
        type: "p",
        text: "Because they work through different mechanisms, hormones and peptides can be complementary rather than competing. Someone already on hormone therapy may still have goals that hormones alone don't fully cover — recovery, skin, sleep, energy — and a peptide may be one option a provider considers alongside it. This is a clinical judgment made person by person, not a formula, and not something to self-assemble from a menu.",
      },
      {
        type: "callout",
        text: "Peptides are not a substitute for hormone therapy, and hormone therapy is not a substitute for peptides. Whether either — or both — is appropriate for you is a decision your provider makes after evaluating you.",
      },
      { type: "h2", text: "Evaluation and bloodwork come first" },
      {
        type: "p",
        text: "Hormone therapy in particular is guided by lab work. A responsible provider orders bloodwork, reviews the results with you, and monitors over time — hormones are not prescribed on symptoms alone, and \"more\" is not automatically better. Peptides, likewise, are prescribed only when a provider determines they're appropriate after an evaluation. If a clinic is willing to prescribe either from a questionnaire alone, treat that as a warning sign.",
      },
      { type: "h2", text: "A note on testosterone and other controlled substances" },
      {
        type: "p",
        text: "Testosterone therapy (TRT) and some other hormones are controlled substances. Where they are offered, they are prescribed only in line with federal and state law — including examination, monitoring, prescription-drug-monitoring, and electronic-prescribing requirements — and only by a provider who is licensed and authorized to prescribe them in your state. Those steps are a legal and safety guardrail, not red tape, and any legitimate program will follow them.",
      },
      { type: "h2", text: "What this means for you" },
      {
        type: "p",
        text: "If you're weighing this kind of care, a few honest expectations: it starts with an evaluation, not a checkout page; a prescription is never guaranteed; and any plan should be tailored to you rather than pulled off a shelf. Responses also differ from person to person — we wrote a separate piece on why that is and what actually helps.",
      },
      {
        type: "callout",
        text: "Compounded medications are not FDA-approved. Individual results vary and are not guaranteed. This article is general education, not medical advice, and does not create a provider-patient relationship. Whether hormone therapy, peptide therapy, or both is right for you is decided by a licensed provider after an evaluation.",
      },
    ],
  },
  {
    slug: "mitochondrial-peptides-explained",
    title: "Mitochondrial peptides, explained",
    summary:
      "A much-discussed class of peptides tied to the cell's energy system. Here's what mitochondria do, what peptides like MOTS-c are, and an honest look at what the research does — and doesn't yet — show.",
    topic: "The science",
    updated: "2026-08-01",
    readMinutes: 6,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "Mitochondrial peptides — MOTS-c in particular — get a lot of attention in wellness circles. They're genuinely interesting, but the conversation often runs ahead of the evidence. Here's a plain explanation of what they are and an honest account of what's actually known.",
      },
      { type: "h2", text: "Start with the mitochondria" },
      {
        type: "p",
        text: "Mitochondria are the tiny power plants inside your cells. Their main job is producing ATP — the energy your cells spend on nearly everything, from repairing tissue to recovering after exercise to brain function. When mitochondria are working well, your cells have the energy to do their jobs. When energy production falters — with age, chronic stress, or poor metabolic health — a lot of processes slow down. That's the backdrop for why the cell's energy system gets so much interest.",
      },
      { type: "h2", text: "What \"mitochondrial-derived peptides\" are" },
      {
        type: "p",
        text: "Here's the newer discovery: mitochondria don't only make energy — they also carry the code for a small class of signaling molecules called mitochondrial-derived peptides (MDPs). The most studied is MOTS-c, a short 16-amino-acid peptide first described in 2015. Rather than acting as a fuel, these peptides appear to act as signals involved in how the body manages energy and metabolic stress.",
      },
      { type: "h2", text: "What the research shows — and its limits" },
      {
        type: "p",
        text: "In laboratory research, MOTS-c has been associated with improvements in how muscle mitochondria produce energy and with reductions in cellular oxidative stress; earlier laboratory work linked it to metabolic measures such as insulin sensitivity. A 2026 University of Copenhagen study pointed to specific cellular pathways — PGC-1α and AMPK, part of the cell's energy-sensing machinery — as part of how it may act.",
      },
      {
        type: "callout",
        text: "The honest part: this evidence is early laboratory research, and what is seen there does not automatically translate to people. It has not been tested in people at any scale — human research is limited and ongoing. Mitochondrial peptides are not FDA-approved, and no outcome is promised.",
      },
      { type: "h2", text: "Where NAD+ fits" },
      {
        type: "p",
        text: "You'll often see NAD+ mentioned alongside mitochondrial peptides. NAD+ is a coenzyme central to how cells produce energy, and it's studied for cellular-energy and healthy-aging support. It isn't a mitochondrial-derived peptide, but it belongs to the same broader conversation about supporting the cell's energy system.",
      },
      { type: "h2", text: "The honest takeaway" },
      {
        type: "p",
        text: "Mitochondrial peptides are an active area of research, not a finished story. If a provider considers one for you, that's a clinical judgment based on your goals and health — not a guaranteed result — and it works best alongside the fundamentals that support your own mitochondria: sleep, protein, and regular movement. We wrote separately about why responses vary so much from person to person.",
      },
      {
        type: "callout",
        text: "Compounded medications are not FDA-approved. Individual results vary and are not guaranteed. This article is general education, not medical advice, and does not create a provider-patient relationship. Whether any therapy is appropriate for you is decided by a licensed provider after an evaluation.",
      },
    ],
  },
  {
    slug: "what-a-telehealth-visit-involves",
    title: "What a telehealth visit actually involves",
    summary:
      "What your provider sees before the call, what you'll be asked, what gets decided, and what a good visit looks like — start to finish.",
    topic: "How this works",
    updated: "2026-08-01",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "If you've never had a telehealth visit, the process can feel abstract — you're not sure what actually happens or how a provider can make a decision without seeing you in person. Here's the whole thing, start to finish, so there are no surprises.",
      },
      { type: "h2", text: "Before the visit: the intake" },
      {
        type: "p",
        text: "It starts with an account and a medical intake — your history, current medications, and what you're hoping to address. Your provider reviews this before meeting you, so the visit isn't starting from a blank page. You'll also verify your identity when you register; providing accurate information matters, because the provider's assessment depends on it.",
      },
      { type: "h2", text: "The visit itself" },
      {
        type: "p",
        text: "Depending on your state and your situation, your care may involve a live video visit with a licensed provider and secure messaging with your care team. A provider licensed in the state where you're located reviews your information and, where appropriate, meets with you by video before any treatment decision. There's no hands-on physical exam, so the provider relies on what you report and on any lab work — one reason accurate answers and, when needed, bloodwork matter.",
      },
      { type: "h2", text: "What the provider is actually deciding" },
      {
        type: "p",
        text: "The core question is whether treatment is appropriate for you at all — and a prescription is never guaranteed. A provider may recommend labs first, suggest a different approach, decide telehealth isn't right for your situation and recommend an in-person visit, or decline to prescribe. That's the system working, not failing.",
      },
      { type: "h2", text: "If something is prescribed" },
      {
        type: "p",
        text: "If a provider prescribes medication, it's prepared by a licensed pharmacy and shipped to you, and your provider stays involved for monitoring and any adjustments. Some treatments require follow-up labs or check-ins over time.",
      },
      { type: "h2", text: "What a good visit looks like" },
      {
        type: "ul",
        items: [
          "The provider is licensed in your state and evaluates you before prescribing.",
          "Someone can say no — a clinic willing to decline when treatment isn't appropriate is a good sign.",
          "You're not rushed, and your questions actually get answered.",
          "It's clear what happens to your health information.",
        ],
      },
      {
        type: "callout",
        text: "Telehealth is not for emergencies. If you have a medical emergency, call 911 or go to your nearest emergency department. This article is general education, not medical advice, and does not create a provider-patient relationship.",
      },
      { type: "h2", text: "Related reading" },
      {
        type: "p",
        text: "If you're looking for education about where this evaluation fits, browse our protocols and the peptide library, or read the graded evidence behind each compound.",
        links: [
          { text: "protocols", href: "/products" },
          { text: "peptide library", href: "/peptides" },
          { text: "graded evidence", href: "/evidence" },
        ],
      },
    ],
  },
  {
    slug: "why-your-labs-matter",
    title: "Why your labs matter",
    summary:
      "Why some treatments require bloodwork first, what providers generally look at, and what follow-up testing is really for.",
    topic: "How this works",
    updated: "2026-08-01",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "For some treatments — hormone therapy in particular — a provider will ask for bloodwork before prescribing, and again periodically afterward. It can feel like an extra hurdle. It isn't. Labs are one of the main things separating responsible care from a pill mill.",
      },
      { type: "h2", text: "Why bloodwork comes before treatment" },
      {
        type: "p",
        text: "Bloodwork establishes a baseline and helps confirm whether a treatment is appropriate for you. Hormone therapy especially is not prescribed on symptoms alone — symptoms overlap across many conditions, and labs give the provider objective information to work from. They can also surface something that changes the plan, or a reason a particular therapy isn't a good idea for you. In short, labs protect you.",
      },
      { type: "h2", text: "What providers generally look at" },
      {
        type: "p",
        text: "Which tests are ordered depends entirely on you and the therapy under consideration — that's a clinical decision, not something a website should prescribe. In general terms, a provider may look at baseline hormone levels, a blood count, and metabolic or safety markers relevant to the specific treatment. Your provider will explain which values matter in your case and why.",
      },
      { type: "h2", text: "What follow-up testing is for" },
      {
        type: "p",
        text: "Testing doesn't stop once you start. Follow-up labs let your provider confirm the plan is working and remains safe, and adjust it if it isn't. This is also the honest answer to a common misconception: with hormones, \"more\" is not automatically better, and monitoring is how a provider keeps a plan in a sensible range.",
      },
      { type: "h2", text: "What this means for you" },
      {
        type: "p",
        text: "If a clinic is willing to prescribe hormone therapy with no bloodwork at all, treat that as a warning sign rather than a convenience. Labs, and a provider who actually reviews them with you, are a feature of good care — not a formality.",
      },
      {
        type: "callout",
        text: "This article is general education, not medical advice. Which tests are appropriate, and what your results mean, are decided by a licensed provider based on your individual situation.",
      },
    ],
  },
  {
    slug: "how-glp-1-medicines-work",
    title: "How GLP-1 medicines actually work",
    summary:
      "GLP-1 is a hormone your body already makes after you eat. Here's what it does, why medicines that mimic it change how weight feels, and what the science does — and doesn't — say.",
    topic: "Understanding your therapy",
    updated: "2026-09-22",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "GLP-1 — glucagon-like peptide-1 — is a hormone your gut releases after a meal. It's one of a small group of signals called incretins, and it does a few quiet but important jobs: it tells the pancreas to release insulin when your blood sugar is up, it dials back a competing hormone (glucagon) that raises blood sugar, it slows how quickly the stomach empties, and it reaches areas of the brain involved in appetite. GLP-1 medicines work by making that natural signal stronger and longer-lasting.",
      },
      { type: "h2", text: "The clue that started it all" },
      {
        type: "p",
        text: "Researchers noticed something odd decades ago: swallowing glucose triggers far more insulin than putting the same amount of glucose straight into a vein. The difference is the incretin effect — gut hormones released by eating that prime the pancreas. That observation is what eventually led to GLP-1-based treatments, and the biology has since been studied in depth.",
      },
      { type: "h2", text: "Why it can make weight feel different" },
      {
        type: "p",
        text: "Because GLP-1 acts on appetite signaling and slows stomach emptying, people often feel satisfied with less food and notice fewer cravings. That's a change in some of the biological signals that make weight hard to control — not a change in willpower, and not a shortcut around the fundamentals. Nutrition, protein, movement, and sleep still do the heavy lifting; the medicine changes the terrain they work on.",
      },
      { type: "h2", text: "What the science does and doesn't say" },
      {
        type: "ul",
        items: [
          "It says: GLP-1 receptor signaling is a well-studied, legitimate target, and medicines that engage it affect insulin, appetite, and gastric emptying.",
          "It doesn't say: that any particular product will produce a particular result for you. Individual responses vary, and the studied medicines are the FDA-approved brands — not a promise about any compounded preparation.",
        ],
      },
      {
        type: "callout",
        text: "This is general education, not medical advice, and doesn't describe any specific product's results. Compounded medications are not FDA-approved. Whether GLP-1 therapy is appropriate for you is a decision for a licensed provider after an evaluation.",
      },
      { type: "h2", text: "Related reading" },
      {
        type: "p",
        text: "Connect the biology to what we actually offer: browse the weight-loss protocols, then read the graded evidence behind semaglutide and tirzepatide.",
        links: [
          { text: "weight-loss protocols", href: "/products?goal=weight-loss" },
          { text: "semaglutide", href: "/evidence/semaglutide" },
          { text: "tirzepatide", href: "/evidence/tirzepatide" },
        ],
      },
    ],
    sources: [
      {
        title: "GLP-1R Signaling and Functional Molecules in Incretin Therapy (2023)",
        publisher: "Wan et al., Molecules — DOI 10.3390/molecules28020751 (open access)",
        href: "https://doi.org/10.3390/molecules28020751",
      },
    ],
  },
  {
    slug: "how-the-fda-sees-peptide-medicines",
    title: "How the FDA sees peptide medicines",
    summary:
      "Peptides aren't fringe. Roughly 100 of them are FDA-approved medicines. Here's where they sit in the drug world — and the real line between an approved product and a compounded one.",
    topic: "Peptides & the FDA",
    updated: "2026-09-22",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "A peptide is a short chain of amino acids — the same building blocks as proteins, just smaller. In drug terms they sit in the middle: bigger and more specific than typical pills, smaller and simpler than the large biologic antibodies. That middle ground is exactly why they've become useful medicines.",
      },
      { type: "h2", text: "Not new, and not unregulated" },
      {
        type: "p",
        text: "Peptide medicine effectively began with insulin in the 1920s. Since then the FDA has approved on the order of 100 peptide drugs across many conditions — including the GLP-1 and related hormone families — with many more in clinical development. Chemists have learned to modify these molecules to make them more stable and longer-acting, which is why some can be dosed weekly rather than daily.",
      },
      { type: "h2", text: "The distinction that actually matters" },
      {
        type: "p",
        text: "Here's the part worth being precise about. An FDA-approved brand product has been reviewed by the FDA for safety, effectiveness, and quality. A compounded medication is prepared by a licensed pharmacy against an individual prescription; it is not FDA-approved, which means the FDA does not review that specific preparation before it's dispensed. Both are real, lawful paths — but they are not the same regulatory thing, and any honest program tells you which one you're getting.",
      },
      {
        type: "callout",
        text: "General education, not medical advice, and not a claim about any specific product. Compounded medications are not FDA-approved. Whether any peptide therapy is appropriate for you is decided by a licensed provider after an evaluation.",
      },
      { type: "h2", text: "Related reading" },
      {
        type: "p",
        text: "For more, browse the peptide library and read the graded evidence behind each compound — every page tells you plainly whether it is FDA-approved, compounded, in trials, or only in early research.",
        links: [
          { text: "peptide library", href: "/peptides" },
          { text: "graded evidence", href: "/evidence" },
        ],
      },
    ],
    sources: [
      {
        title: "Exploring FDA-Approved Frontiers: Natural and Engineered Peptide Analogues (2024)",
        publisher: "Al Musaimi, Biomolecules — DOI 10.3390/biom14030264 (open access)",
        href: "https://doi.org/10.3390/biom14030264",
      },
    ],
  },
  {
    slug: "why-peptides-are-given-by-injection",
    title: "Why peptides are given by injection",
    summary:
      "Almost every peptide medicine — GLP-1s included — is an injection, not a pill. It's not about convenience. It's about chemistry, and it's a good sign, not a red flag.",
    topic: "Understanding your therapy",
    updated: "2026-09-22",
    readMinutes: 4,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "The most common question about peptide therapy is a fair one: if it's a medicine, why can't I just take a pill? The answer is chemistry. Peptides are fragile molecules, and the digestive system is very good at taking them apart.",
      },
      { type: "h2", text: "What a pill would face" },
      {
        type: "ul",
        items: [
          "Stomach acid and digestive enzymes (peptidases) break peptides down — the body treats them like food protein, because chemically that's close to what they are.",
          "Even the fraction that survives is poorly absorbed through the gut wall, so very little would reach the bloodstream intact.",
          "Peptides also clear from the body quickly, which is why modern ones are chemically tuned to last longer.",
        ],
      },
      { type: "h2", text: "Why an injection solves it" },
      {
        type: "p",
        text: "A small subcutaneous injection — into the fat just under the skin — delivers the peptide intact, past the digestive system that would otherwise destroy it. That's why GLP-1 medicines and most peptides are injectables. The needles are short and fine, most people find it far easier than they expect, and your care team walks you through it. Research into oral peptide forms is active and real, but for now injection remains the standard because it's what the chemistry supports.",
      },
      {
        type: "callout",
        text: "General education, not medical advice. Your provider and pharmacy give you the specific instructions for your medication; if anything here differs from what they tell you, follow them.",
      },
    ],
    sources: [
      {
        title: "Exploring FDA-Approved Frontiers: Natural and Engineered Peptide Analogues (2024)",
        publisher: "Al Musaimi, Biomolecules — DOI 10.3390/biom14030264 (open access)",
        href: "https://doi.org/10.3390/biom14030264",
      },
    ],
  },
  {
    slug: "glp-1-dosing-safety",
    title: "How dosing errors happen with compounded GLP-1 medicines — and how to avoid them",
    summary:
      "mg, mL, and syringe “units” are not the same thing. Here's why compounded-vial dosing mistakes happen, and what to confirm with your pharmacy before your first injection.",
    topic: "Using your medication",
    updated: "2026-09-22",
    readMinutes: 6,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "Compounded GLP-1 medicines are sometimes dispensed in multi-dose vials that you draw from with a syringe — a different process than a branded, pre-filled pen. When milligrams (mg), milliliters (mL), and syringe “units” get mixed up, people can accidentally take far more medicine than intended. The FDA has publicly warned patients, providers, and compounders about exactly these dosing errors. This page explains the label language; it does not replace a teach-back with your pharmacy.",
      },
      { type: "h2", text: "mg, mL, and “units” are three different things" },
      {
        type: "ul",
        items: [
          "mg (milligrams) is the amount of drug — usually how your prescription is written.",
          "mL (milliliters) is the volume of liquid you draw. Two vials labeled the same can have very different mg per mL, so the same mL can mean very different amounts of drug.",
          "“Units” on an insulin-style syringe are just hash marks — not a universal dose. They only mean something once your pharmacy tells you how many markings equal your prescribed mg for that specific vial concentration.",
        ],
      },
      {
        type: "p",
        text: "Never assume “10 units,” “0.5 mL,” and “2.5 mg” are interchangeable. They are related only through the concentration printed on your specific vial and the syringe your pharmacy told you to use. Copying a friend's dose, a social-media chart, or an old vial's instructions can be dangerous, because those may assume a different concentration.",
      },
      { type: "h2", text: "How people have drawn several times the intended dose" },
      {
        type: "ul",
        items: [
          "Confusing mg on the prescription with mL or syringe units.",
          "Using a dosing chart that assumed a different concentration than the vial in hand.",
          "Treating “units” on an insulin syringe as if they were milligrams of the drug.",
          "Drawing to a convenient line (a full half-mL, or “10 units”) without checking the conversion for that vial.",
          "Reusing old instructions after the pharmacy changed the concentration or syringe type.",
        ],
      },
      { type: "h2", text: "What to confirm before your first injection" },
      {
        type: "ul",
        items: [
          "Read the pharmacy label and vial label together — drug, concentration (mg/mL), beyond-use date, storage, and prescribed dose.",
          "Confirm the concentration with the pharmacy or your provider if anything is unclear or different from what you expected.",
          "Ask for a teach-back: have someone walk through how your mg dose converts to the volume or markings you'll use.",
          "Use only the syringe type your pharmacy specified — don't substitute a different scale.",
          "Write the plan in plain words (“My dose is X mg. For this vial, that's Y mL / Z markings”) and keep it with the vial.",
          "Don't “eyeball” the dose or round up “just to be sure.” If you can't explain your dose in your own words, don't inject — call the pharmacy first.",
        ],
      },
      { type: "h2", text: "When to seek urgent care" },
      {
        type: "p",
        text: "After a larger-than-intended dose, people may have severe or lasting nausea, vomiting, abdominal pain, dizziness, or signs of dehydration. Seek urgent or emergency care for persistent vomiting you can't keep fluids down against, severe abdominal pain, fainting, chest pain or trouble breathing, severe allergic symptoms, or confusion — and bring the vial, syringe, and label. In the U.S. you can also call Poison Control at 1-800-222-1222; call 911 for life-threatening emergencies.",
      },
      {
        type: "callout",
        text: "Education only — not medical advice, and not a dosing guide. Compounded medicines are not FDA-approved. Follow your own prescription, the concentration on your own vial, and your licensed pharmacist and clinician. New Start MD services are for adults 18+.",
      },
    ],
    sources: [
      { title: "FDA — Dosing errors associated with compounded semaglutide", publisher: "U.S. Food and Drug Administration", href: "https://www.fda.gov/drugs/human-drug-compounding/fda-alerts-health-care-providers-compounders-and-patients-dosing-errors-associated-compounded" },
      { title: "FDA — Human drug compounding (overview)", publisher: "U.S. Food and Drug Administration", href: "https://www.fda.gov/drugs/human-drug-compounding" },
      { title: "GLP-1 agonists — patient overview", publisher: "MedlinePlus", href: "https://medlineplus.gov/ency/article/007853.htm" },
      { title: "Poison Control (U.S.) — 1-800-222-1222", publisher: "America's Poison Centers", href: "https://www.poison.org" },
    ],
  },
  {
    slug: "glp-1-shortage-and-compounding",
    title: "GLP-1 shortages eased — what that means for compounded versions",
    summary:
      "As GLP-1 supply stabilized, the FDA narrowed when pharmacies can compound copies. A plain-English look at 503A/503B, salt-form concerns, and why we stay within the law.",
    topic: "Peptides & the FDA",
    updated: "2026-09-22",
    readMinutes: 6,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "For several years, high demand strained the supply of certain GLP-1 medicines, and during official shortages compounding pharmacies sometimes prepared versions of them under specific federal rules. As the manufacturers' supply stabilized, the FDA updated its shortage determinations and clarified the limits on compounding “copies” of drugs that are commercially available again.",
      },
      { type: "h2", text: "The high-level timeline (injection products)" },
      {
        type: "ul",
        items: [
          "Tirzepatide injection: in late 2024 the FDA determined the national shortage was resolved and removed those products from the shortage list (around December 19, 2024).",
          "Semaglutide injection: in early 2025 the FDA similarly determined the shortage was resolved (around February 21, 2025).",
          "After a shortage ends, the legal room to compound essentially-copies of the approved drug generally narrows. The exact enforcement windows are time-limited and best read on FDA's own pages — this is not a compliance calendar.",
        ],
      },
      { type: "h2", text: "What “compounding a copy” means" },
      {
        type: "p",
        text: "Compounding is allowed in defined circumstances. Two pathways people hear about: Section 503A (state-licensed pharmacies compounding for an individual patient on a valid prescription) and Section 503B (FDA-registered outsourcing facilities under different requirements). In both, compounding a product that is essentially a copy of a commercially available FDA-approved drug is restricted unless a recognized legal exception applies. When supply of the approved product is adequate, the appropriate choice is generally the FDA-approved brand — not a compounded look-alike.",
      },
      { type: "h2", text: "Compounded is not the same as FDA-approved" },
      {
        type: "ul",
        items: [
          "The FDA has not reviewed a specific compounded preparation the way it reviews an approved drug for safety, effectiveness, and manufacturing quality.",
          "Labels, concentrations, inactive ingredients, and beyond-use dates can differ from brand pens and vials.",
          "The FDA has raised concerns about unapproved GLP-1 products — including certain salt forms and products of uncertain purity that were never intended for sterile human injection. “It looks similar on social media” is not a quality standard.",
        ],
      },
      { type: "h2", text: "How New Start MD approaches it" },
      {
        type: "p",
        text: "New Start MD is physician-guided care that uses licensed providers and state-licensed pharmacies, and will not prescribe outside the law. We educate patients about FDA-approved options first; we do not promise compounded copies of commercially available GLP-1 drugs when shortage-based authority no longer applies. If a medicine you hoped for isn't legally available to compound, that's often the law catching up to improved brand supply — and your provider can discuss approved alternatives and lifestyle care.",
      },
      {
        type: "callout",
        text: "Education only — not legal or medical advice, and not a guarantee of product availability. Regulatory status changes; FDA primary sources and counsel control interpretation. Compounded medicines are not FDA-approved. Prescriptions are issued only if appropriate after a clinician evaluation. Adults 18+.",
      },
    ],
    sources: [
      { title: "FDA — Clarifies policies for compounders as national GLP-1 supply stabilizes", publisher: "U.S. Food and Drug Administration", href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize" },
      { title: "FDA — Concerns with unapproved GLP-1 drugs used for weight loss", publisher: "U.S. Food and Drug Administration", href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss" },
      { title: "FDA — Intends to take action against non-FDA-approved GLP-1 drugs", publisher: "U.S. Food and Drug Administration", href: "https://www.fda.gov/news-events/press-announcements/fda-intends-take-action-against-non-fda-approved-glp-1-drugs" },
      { title: "FDA — Human drug compounding", publisher: "U.S. Food and Drug Administration", href: "https://www.fda.gov/drugs/human-drug-compounding" },
    ],
  },
  {
    slug: "peptides-vs-research-chemicals",
    title: "Clinic-prescribed peptides vs. research vials and gray-market sellers",
    summary:
      "“Research use only” isn't a loophole. Here's why gray-market peptide vials are a different category from a medicine prescribed by a licensed clinician and filled by a licensed pharmacy.",
    topic: "Peptides & the FDA",
    updated: "2026-09-22",
    readMinutes: 6,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "Peptides are short chains of amino acids. Some are FDA-approved medicines. Others appear in lab research or cosmetics. Still others are sold online with clinical-sounding language for products that were never made for human use under U.S. pharmacy standards. This page explains why “research chemicals” and unsupervised online sellers are a different category from clinic care.",
      },
      { type: "h2", text: "What “research use only” usually means" },
      {
        type: "ul",
        items: [
          "The seller is not presenting the product as a medicine for you to inject or ingest.",
          "It was not prepared under the sterile compounding and quality systems expected for patient-use injectables.",
          "There is usually no patient-specific prescription, pharmacist counseling, or clinical follow-up attached to the sale.",
        ],
      },
      { type: "h2", text: "Why gray-market peptides are risky" },
      {
        type: "ul",
        items: [
          "No sterile-compounding standards you can verify.",
          "Identity and purity unknowns — you may not know what's really in the vial, or how much.",
          "No licensed-provider oversight, history review, or lab monitoring.",
          "Storage, reconstitution, and dosing become guesswork with internet charts.",
          "Extra risk for athletes: many experimental/non-approved substances are prohibited in sport (under the WADA framework, non-approved substances can fall under category S0). Check current WADA/USADA rules if you compete.",
        ],
      },
      { type: "h2", text: "What clinic-prescribed care looks like instead" },
      {
        type: "p",
        text: "A physician-guided pathway is different in structure. When appropriate, an FDA-approved brand medicine may be the clearest evidence-based choice. In some situations a licensed clinician may write a patient-specific prescription filled by a state-licensed 503A pharmacy when compounding is lawful for that product — with documented ingredients, pharmacy labeling, and a defined beyond-use date. Compounded drugs are still not FDA-approved products.",
      },
      { type: "h2", text: "Questions worth asking any source" },
      {
        type: "ul",
        items: [
          "Is a licensed clinician evaluating me, or is it just a checkout cart?",
          "Is the product dispensed by a state-licensed U.S. pharmacy with a labeled prescription?",
          "Is it an FDA-approved medicine, a lawful compounded preparation, or a research chemical?",
          "If I'm an athlete, have I checked current anti-doping rules?",
        ],
      },
      {
        type: "callout",
        text: "Education only — not medical advice. This does not authorize or encourage self-administration of research chemicals. Compounded medicines are not FDA-approved. Prescriptions are available only if appropriate after a licensed-clinician evaluation. Adults 18+. Athletes should verify anti-doping rules independently.",
      },
    ],
    sources: [
      { title: "FDA — Human drug compounding", publisher: "U.S. Food and Drug Administration", href: "https://www.fda.gov/drugs/human-drug-compounding" },
      { title: "FDA — Concerns with unapproved GLP-1 drugs used for weight loss", publisher: "U.S. Food and Drug Administration", href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss" },
      { title: "USADA — BPC-157 is a prohibited peptide", publisher: "U.S. Anti-Doping Agency", href: "https://www.usada.org/spirit-of-sport/bpc-157-peptide-prohibited/" },
      { title: "Hormones — overview", publisher: "MedlinePlus", href: "https://medlineplus.gov/hormones.html" },
    ],
  },
  {
    slug: "understanding-obesity",
    title: "Understanding obesity as a chronic disease",
    summary:
      "Obesity is shaped by biology, environment, medications, sleep, and stress — not a willpower test. A plain-English, physician-guided overview and how care works.",
    topic: "Weight & metabolic health",
    updated: "2026-09-22",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "In clinical care, adult obesity is described using body mass index (BMI) together with a whole-person assessment — waist size, labs, medical history, medications that affect weight, and how you feel day to day. BMI is a screening tool, not a measure of health by itself. Public-health agencies treat obesity as a common, serious, chronic disease: the CDC estimates about 2 in 5 U.S. adults have obesity. Chronic diseases are managed over time, with layered tools.",
      },
      { type: "h2", text: "Why it matters" },
      {
        type: "p",
        text: "Extra weight is linked with higher risk for type 2 diabetes and insulin resistance, high blood pressure and heart disease, sleep apnea, joint and mobility issues, some cancers, fatty liver disease, and effects on mood and energy. But risk is individual — two people with the same BMI can have very different labs. Accurate risk education helps; fear-based messaging doesn't.",
      },
      { type: "h2", text: "What chronic-disease care looks like" },
      {
        type: "ul",
        items: [
          "Understanding your story — prior diets, medications, injuries, hormones, mental health, and access to food and safe movement.",
          "Clear goals — metabolic health, mobility, and sleep often matter as much as a single scale number.",
          "Evidence-aligned tools — nutrition you can keep, activity you can tolerate, and medications when criteria and labeling support them.",
          "Follow-up — monitoring, adjustments, and course corrections over time.",
        ],
      },
      {
        type: "p",
        text: "GLP-1 and related medicines are one possible tool for some adults — not a moral requirement and not right for everyone. For practical context, browse the weight-loss protocols and read the graded evidence behind each one. New Start MD explains obesity as a medical issue, not a character flaw, and a licensed provider can review whether lifestyle coaching, FDA-approved therapies, or other lawful options fit your history.",
        links: [
          { text: "weight-loss protocols", href: "/products?goal=weight-loss" },
          { text: "graded evidence", href: "/evidence" },
        ],
      },
      {
        type: "callout",
        text: "Education only — not medical advice or a diagnosis. BMI and risk lists don't replace a clinician's evaluation. Compounded medicines are not FDA-approved. Prescriptions are issued only if appropriate. Adults 18+.",
      },
    ],
    sources: [
      { title: "Adult obesity facts", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/obesity/adult-obesity-facts/index.html" },
      { title: "Obesity", publisher: "MedlinePlus", href: "https://medlineplus.gov/obesity.html" },
      { title: "Health risks of overweight & obesity", publisher: "NIDDK", href: "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/health-risks" },
      { title: "GLP-1 agonists (medication class overview)", publisher: "MedlinePlus", href: "https://medlineplus.gov/ency/article/007853.htm" },
    ],
  },
  {
    slug: "type-2-diabetes-basics",
    title: "Type 2 diabetes basics for patients considering GLP-1 care",
    summary:
      "A plain-English primer on type 2 diabetes for adults exploring GLP-1 care — what it is, why it matters, and where these medicines fit.",
    topic: "Weight & metabolic health",
    updated: "2026-09-22",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "Type 2 diabetes is a condition in which blood sugar stays too high because the body doesn't use insulin well (insulin resistance) and, over time, may not make enough. It's the most common form of diabetes in adults and develops gradually — some people learn about it from routine labs, others notice thirst, frequent urination, fatigue, or blurred vision. It's different from type 1 (autoimmune) and gestational diabetes; treatment plans differ, so don't reuse someone else's regimen.",
      },
      { type: "h2", text: "Why it matters" },
      {
        type: "p",
        text: "Over years, uncontrolled high blood sugar can damage blood vessels and nerves and raise the risk of heart, kidney, vision, and foot problems. Modern care — lifestyle support plus medications when needed — can improve control and protect long-term health. Weight, sleep apnea, blood pressure, cholesterol, and family history often sit in the same metabolic neighborhood, so a clinician looks at the whole picture, not glucose alone.",
      },
      { type: "h2", text: "Where GLP-1 medicines fit" },
      {
        type: "ul",
        items: [
          "GLP-1 receptor agonists (and dual agonists like tirzepatide) act on gut-hormone pathways involved in insulin release, appetite, and gastric emptying.",
          "Brand products have specific approved uses — a diabetes brand and a weight-management brand are not automatically interchangeable.",
          "They carry class warnings (including thyroid C-cell / MTC and MEN2 contraindications) and can cause GI side effects — read the Medication Guide for your product.",
          "Compounded look-alikes are not the same as FDA-approved pens, and these medicines are not a DIY project.",
          "If you use insulin or sulfonylureas, your clinician may adjust other medicines to reduce low-blood-sugar risk.",
        ],
      },
      {
        type: "p",
        text: "New Start MD explains metabolic care in plain English. A licensed provider can review your diagnosis, A1C/glucose history, and medications, discuss FDA-approved options that match your indication, and stay within the law on compounding and pharmacy partners. We don't replace your primary care clinician or endocrinologist when you already have a diabetes team.",
      },
      {
        type: "callout",
        text: "Education only — not medical advice, and it doesn't diagnose diabetes or recommend a specific drug. Compounded medicines are not FDA-approved. Prescriptions are issued only if appropriate. Adults 18+. Seek emergency care for severe low blood sugar, ketoacidosis concerns, chest pain, or trouble breathing.",
      },
    ],
    sources: [
      { title: "Diabetes — type 2", publisher: "MedlinePlus", href: "https://medlineplus.gov/diabetestype2.html" },
      { title: "GLP-1 agonists", publisher: "MedlinePlus", href: "https://medlineplus.gov/ency/article/007853.htm" },
      { title: "Health risks of overweight & obesity", publisher: "NIDDK", href: "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/health-risks" },
      { title: "Drugs@FDA (official labels)", publisher: "U.S. Food and Drug Administration", href: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm" },
    ],
  },
  {
    slug: "hormones-signals-peptides",
    title: "Hormones, signals, and peptides — a plain primer",
    summary:
      "Hormones and peptides are easy to mystify online. A short, humble primer on what they are, where peptides fit, and how we keep education separate from hype.",
    topic: "Understanding your therapy",
    updated: "2026-09-22",
    readMinutes: 4,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "Hormones are chemical messengers made by glands and tissues that travel through the bloodstream to help coordinate growth, metabolism, reproduction, stress, sleep, and more — the endocrine system keeping many processes in balance. Familiar examples: insulin (blood sugar), thyroid hormones (metabolic rate), cortisol (stress), estrogen and testosterone, and gut hormones involved in appetite. When these systems are out of range, people can feel exhausted, gain or lose weight unexpectedly, or develop clear diseases — and labs plus clinical context, not supplement ads, are how clinicians sort that out.",
      },
      { type: "h2", text: "Where peptides fit" },
      {
        type: "ul",
        items: [
          "An FDA-approved peptide medicine has a defined indication, manufacturing standard, and label.",
          "A compounded peptide, when legal and clinically appropriate, is prepared for a specific patient under pharmacy rules — and is still not FDA-approved like a brand drug.",
          "A research-use-only vial is not clinic care.",
        ],
      },
      { type: "h2", text: "Signals vs. “optimize everything”" },
      {
        type: "p",
        text: "Social media often frames hormones as a dashboard to constantly tweak. Real endocrine care is more careful — clinicians order tests for a reason, interpret them against symptoms, and avoid treating a number in isolation. Gut-hormone medicines (like certain GLP-1 therapies) show how powerful signal-based drugs can be when studied properly, and how much labeling, contraindications, and follow-up still matter. Experimental peptides with mostly animal data sit on a different evidence tier — our BPC-157 and GHK-Cu pages spell out those differences.",
      },
      {
        type: "callout",
        text: "Education only — not medical advice. It doesn't interpret your labs or authorize hormone or peptide therapy. Compounded medicines are not FDA-approved. Prescriptions are issued only if appropriate. Adults 18+.",
      },
    ],
    sources: [
      { title: "Hormones", publisher: "MedlinePlus", href: "https://medlineplus.gov/hormones.html" },
      { title: "GLP-1 agonists", publisher: "MedlinePlus", href: "https://medlineplus.gov/ency/article/007853.htm" },
      { title: "Human drug compounding", publisher: "U.S. Food and Drug Administration", href: "https://www.fda.gov/drugs/human-drug-compounding" },
      { title: "Obesity (metabolic context)", publisher: "MedlinePlus", href: "https://medlineplus.gov/obesity.html" },
    ],
  },
  ];

// MEDICAL REVIEW BYLINE — "Medically reviewed by …" is a factual claim that a
// licensed clinician actually reviewed this content. It must be TRUE: a provider
// on the clinical team must review the articles before this site is made public.
// (The site is non-indexed pre-launch, so there is runway to complete that pass.)
// Two shapes are supported: a named clinician (strongest for trust/SEO) or a
// team attribution. Set to null to render no byline and assert no reviewer.
export type MedicalReview =
  | { kind: "team"; name: string }
  | {
      kind: "person";
      name: string;
      /** Post-nominal credentials, e.g. "MD", "DO", "NP", "PA-C". */
      credentials: string;
      /** Optional role/title, e.g. "Medical Director". */
      title?: string;
      /** ISO date the content was last medically reviewed. */
      reviewedOn?: string;
    };

// No medical-reviewer byline on New Start yet. Leaving this null means the pages
// make no "medically reviewed by" claim and emit no reviewedBy schema — set a
// real named reviewer (or a team attribution Michael approves) before asserting one.
export const MEDICAL_REVIEW: MedicalReview | null = null;

export function reviewByline(r: MedicalReview): string {
  return r.kind === "person"
    ? `${r.name}, ${r.credentials}${r.title ? ` · ${r.title}` : ""}`
    : r.name;
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
export function publishedArticles(): Article[] {
  return ARTICLES.filter((a) => a.status === "PUBLISHED");
}
export function plannedArticles(): Article[] {
  return ARTICLES.filter((a) => a.status === "PLANNED");
}
