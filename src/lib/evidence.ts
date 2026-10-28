// EVIDENCE — the cited reference entries behind the /evidence pages.
//
// New Start MD's self-contained evidence corpus. STANDING RULES this file obeys:
//  • LINK to primary sources; never reproduce an abstract verbatim (copyright).
//    Each evidence row is a one-line summary + a citation that links out.
//  • No dosing advice. `studiedDoses` reports only what trials/labels state.
//  • Honest harms + regulatory status on every entry; "talk to your doctor."
//  • Grades (A–D) and tiers (1–3) are the rigor signal, shown on /evidence —
//    never on the storefront, where they would read as claims.
//  • Every citation is a REAL, verified reference (PMIDs confirmed against NCBI).
//    Never invent a PMID, DOI, title, or finding.

export type Grade = "A" | "B" | "C" | "D" | string;
export type Tier = 1 | 2 | 3;

export type Citation = {
  /** One-line, original summary of what the source found (not the abstract). */
  summary: string;
  type: "RCT" | "observational" | "case report" | "animal/lab" | "review" | "regulatory";
  pmid?: string;
  doi?: string;
  nct?: string;
  /** Falls back to a PubMed link built from pmid. */
  href?: string;
};

export type Compound = {
  slug: string;
  name: string;
  aka?: string[];
  class: string;
  goals: string[];
  grade: Grade;
  tier: Tier;
  /** One-sentence, neutral "what it is." */
  oneLiner: string;
  mechanism: string;
  regulatory: {
    fda: string;
    compounding?: string;
    wada?: string;
    dea?: string;
  };
  evidence: Citation[];
  studiedDoses: string;
  safety: string;
  /** True only for Tier 1 — the brands may offer it under a clinician's call. */
  mayBeOffered?: boolean;
  updated: string;
};

function pubmed(pmid?: string, href?: string) {
  return href ?? (pmid ? `https://pubmed.ncbi.nlm.nih.gov/${pmid}/` : undefined);
}

export const COMPOUNDS: Compound[] = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    aka: ["Ozempic", "Wegovy", "Rybelsus"],
    class: "GLP-1 / incretins",
    goals: ["Weight loss"],
    grade: "A",
    tier: 1,
    oneLiner: "A GLP-1 receptor agonist used for weight management and type 2 diabetes.",
    mechanism: "GLP-1 receptor agonist; long half-life (~7 days) supports weekly subcutaneous dosing, with an oral formulation using SNAC.",
    regulatory: {
      fda: "Approved — Ozempic (type 2 diabetes, cardiovascular, chronic kidney disease), Wegovy (obesity, cardiovascular risk reduction), Rybelsus (oral type 2 diabetes), and oral Wegovy 25 mg (obesity; approved Dec 2025).",
      compounding: "Shortage resolved Feb 21 2025; FDA compounding enforcement discretion ended in 2025. Not on the 503B bulks list.",
      wada: "Not on the WADA Prohibited List.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "Large randomized trial program showing substantial, sustained weight loss on semaglutide 2.4 mg weekly versus placebo.", type: "RCT", pmid: "33567185" },
    ],
    studiedDoses: "Reported in trials and FDA labels only (e.g., the approved weight-management titration). Not guidance — your clinician sets any dose.",
    safety: "Gastrointestinal effects (nausea, vomiting) are common early. The GLP-1 class carries a boxed warning for thyroid C-cell tumors seen in rodents; discuss personal and family history with your clinician.",
    mayBeOffered: true,
    updated: "2026-10-20",
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    class: "Healing / repair",
    goals: ["Recovery / injury"],
    grade: "C",
    tier: 3,
    oneLiner: "A synthetic gastric pentadecapeptide studied, mostly in animals, for tissue repair.",
    mechanism: "Proposed nitric-oxide / VEGF / growth-factor effects; the supporting data are overwhelmingly from rodent models.",
    regulatory: {
      fda: "Not approved.",
      compounding: "Removed from the 503A Category 2 list (~Apr 22 2026) after nominations were withdrawn; the PCAC voted (Jul 2026) to recommend 503A bulks-list inclusion, but no rulemaking has followed, so it is not lawfully compoundable.",
      wada: "WADA 2026 Prohibited List — S0 (non-approved substances).",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "Systematic review: human evidence is limited to small, low-quality reports; the literature is dominated by preclinical (animal) work.", type: "review", pmid: "40756949" },
      { summary: "Narrative review of musculoskeletal healing and the compound's regulatory and safety controversies.", type: "review", pmid: "40789979" },
    ],
    studiedDoses: "No validated human dosing exists.",
    safety: "Unknown in humans; the FDA has cited immunogenicity and impurity concerns. Banned in sport (WADA S0).",
    updated: "2026-10-20",
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    class: "Skin / collagen",
    goals: ["Skin", "Recovery / injury"],
    grade: "B (topical)",
    tier: 3,
    oneLiner: "A copper-binding tripeptide used topically for skin, with limited human data.",
    mechanism: "Copper-binding tripeptide shown to support collagen synthesis in laboratory models.",
    regulatory: {
      fda: "Not approved as a drug; topical cosmetic use is legal.",
      compounding: "Non-injectable GHK-Cu is 503A Category 1 (re-added after a May 2026 clarification); injectable forms were nominated but withdrawn.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "Review of GHK-Cu's role in skin regeneration and wound-healing research.", type: "review", pmid: "35083444" },
    ],
    studiedDoses: "Topical cosmetic concentrations appear in the literature; injectable dosing is not established. Not guidance.",
    safety: "Topical use is generally well tolerated; injectable use is unproven and outside approved channels.",
    updated: "2026-10-20",
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    class: "GH secretagogues",
    goals: ["Muscle / body composition"],
    grade: "B",
    tier: 3,
    oneLiner: "A long-acting growth-hormone-releasing hormone analog, often paired with Ipamorelin.",
    mechanism: "Albumin-binding GHRH analog with an extended half-life (~6–8 days) that raises growth-hormone and IGF-1 output.",
    regulatory: {
      fda: "Not approved.",
      compounding: "Listed by FDA as 'nominated but withdrawn' from Category 2 — no longer in Category 2 and not on the 503A bulks list.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "Early clinical study characterizing the extended release of growth hormone after CJC-1295 dosing.", type: "RCT", pmid: "16352683" },
    ],
    studiedDoses: "Reported in the early clinical literature only. Not guidance.",
    safety: "Raises the GH/IGF-1 axis; human safety data are limited. Discuss with a clinician, especially with any cancer or metabolic history.",
    updated: "2026-10-20",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    aka: ["Mounjaro", "Zepbound"],
    class: "GLP-1 / GIP incretins",
    goals: ["Weight loss"],
    grade: "A",
    tier: 1,
    oneLiner: "A dual GIP/GLP-1 receptor agonist used for weight management and type 2 diabetes.",
    mechanism: "Single peptide activating both the GIP and GLP-1 receptors; weekly subcutaneous dosing.",
    regulatory: {
      fda: "Approved — Mounjaro (type 2 diabetes) and Zepbound (obesity, and obstructive sleep apnea with obesity).",
      compounding: "Shortage resolved in 2025; FDA compounding enforcement discretion has ended. Not on the 503B bulks list.",
      wada: "Not on the WADA Prohibited List.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "In 2,539 adults with obesity, once-weekly tirzepatide produced mean weight loss up to ~21% at 72 weeks versus placebo.", type: "RCT", pmid: "35658024" },
      { summary: "In 1,879 people with type 2 diabetes, tirzepatide lowered HbA1c and body weight significantly more than semaglutide over 40 weeks.", type: "RCT", pmid: "34170647" },
    ],
    studiedDoses: "Reported in trials and FDA labels only (2.5–15 mg weekly titration). Not guidance — your clinician sets any dose.",
    safety: "Gastrointestinal effects are common early. The class carries a boxed warning for thyroid C-cell tumors seen in rodents; discuss personal and family history with your clinician.",
    mayBeOffered: true,
    updated: "2026-10-27",
  },
  {
    slug: "testosterone",
    name: "Testosterone",
    aka: ["TRT"],
    class: "Androgen / hormone",
    goals: ["Hormones / vitality"],
    grade: "A",
    tier: 1,
    oneLiner: "The primary male sex hormone, replaced in men with diagnosed hypogonadism.",
    mechanism: "Binds the androgen receptor; replacement restores physiologic levels in men with deficiency.",
    regulatory: {
      fda: "Approved for men with hypogonadism (low measured testosterone plus symptoms). Not approved for men with normal levels or for 'anti-aging.'",
      wada: "WADA Prohibited List — S1 (anabolic agents).",
      dea: "Schedule III controlled substance.",
    },
    evidence: [
      { summary: "The TRAVERSE trial (5,246 hypogonadal men at high cardiovascular risk) found testosterone gel was noninferior to placebo for major adverse cardiovascular events.", type: "RCT", pmid: "37326322" },
      { summary: "The Testosterone Trials (790 men ≥65 with low testosterone) found small-to-moderate improvements in sexual function and mood, but none in vitality or walking distance.", type: "RCT", pmid: "26886521" },
    ],
    studiedDoses: "Set by a clinician to a target physiologic range based on labs. Not guidance.",
    safety: "Requires monitoring (hematocrit, PSA, symptoms). Not for men with normal levels. Controlled substance; banned in sport.",
    mayBeOffered: true,
    updated: "2026-10-27",
  },
  {
    slug: "pt-141",
    name: "PT-141",
    aka: ["Bremelanotide", "Vyleesi"],
    class: "Melanocortin agonist",
    goals: ["Sexual health"],
    grade: "A",
    tier: 1,
    oneLiner: "A melanocortin-receptor agonist for low sexual desire, FDA-approved as Vyleesi.",
    mechanism: "Activates central melanocortin receptors (MC4R) involved in sexual response.",
    regulatory: {
      fda: "Approved — Vyleesi, for premenopausal women with acquired, generalized hypoactive sexual desire disorder (HSDD).",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "Two phase 3 RCTs (1,267 premenopausal women) found as-needed bremelanotide significantly improved sexual desire and reduced related distress versus placebo.", type: "RCT", pmid: "31599840" },
      { summary: "A 52-week open-label extension found continued symptom improvement and no new safety signals in HSDD.", type: "RCT", pmid: "31599847" },
    ],
    studiedDoses: "The approved product is a fixed as-needed subcutaneous dose. Not guidance.",
    safety: "Nausea and transient blood-pressure increases are common; not for people with uncontrolled hypertension or cardiovascular disease.",
    mayBeOffered: true,
    updated: "2026-10-27",
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    aka: ["Egrifta"],
    class: "GHRH analog",
    goals: ["Body composition"],
    grade: "B",
    tier: 2,
    oneLiner: "A growth-hormone-releasing-hormone analog approved to reduce excess abdominal fat in HIV.",
    mechanism: "Stimulates the pituitary to release growth hormone; studied for visceral fat reduction.",
    regulatory: {
      fda: "Approved — Egrifta, to reduce excess abdominal fat in HIV-associated lipodystrophy. Use for general body composition in healthy adults is off-label and not supported by trials.",
      wada: "WADA Prohibited List — S2 (growth-hormone-releasing factors).",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "In 412 HIV patients with excess abdominal fat, daily tesamorelin reduced visceral fat ~15% over 26 weeks while placebo increased it.", type: "RCT", pmid: "18057338" },
    ],
    studiedDoses: "Reported in the approved HIV indication only. Not guidance.",
    safety: "Raises the GH/IGF-1 axis; monitor glucose. Banned in sport (WADA S2). Evidence outside the HIV population is lacking.",
    mayBeOffered: true,
    updated: "2026-10-27",
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    class: "GHRH analog",
    goals: ["Hormones / vitality"],
    grade: "C",
    tier: 3,
    oneLiner: "A growth-hormone-releasing-hormone (1-29) analog; little modern adult outcome data.",
    mechanism: "Stimulates pituitary growth-hormone release in a more physiologic pulse than exogenous GH.",
    regulatory: {
      fda: "Historically approved (Geref) for pediatric growth-hormone-deficiency testing; later withdrawn from the market (not for safety). No current adult approval.",
      wada: "WADA Prohibited List — S2 (growth-hormone-releasing factors).",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A review argues sermorelin may be a more physiologic alternative to growth hormone in adult GH insufficiency, but presents no new trial data.", type: "review", pmid: "18046908" },
    ],
    studiedDoses: "No modern adult outcome trials establish dosing. Not guidance.",
    safety: "Raises the GH/IGF-1 axis; human adult safety/efficacy data are limited. Banned in sport (WADA S2).",
    mayBeOffered: true,
    updated: "2026-10-27",
  },
  {
    slug: "nad",
    name: "NAD+",
    aka: ["nicotinamide riboside", "NMN", "NAD precursors"],
    class: "Cellular metabolism",
    goals: ["Longevity / energy"],
    grade: "C",
    tier: 3,
    oneLiner: "A coenzyme (and its precursors) marketed for energy and healthy aging.",
    mechanism: "Central coenzyme in cellular energy metabolism; oral precursors (e.g. nicotinamide riboside) raise blood NAD+.",
    regulatory: {
      fda: "Not an approved drug; precursors are sold as dietary supplements. IV NAD+ is compounded/clinic-administered and not FDA-approved.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A randomized crossover trial in healthy middle-aged/older adults found nicotinamide riboside was well tolerated and raised blood NAD+ levels.", type: "RCT", pmid: "29599478" },
      { summary: "A 12-week RCT in obese, insulin-resistant men found nicotinamide riboside was safe but did NOT improve insulin sensitivity or glucose metabolism.", type: "RCT", pmid: "29992272" },
      { summary: "An RCT found nicotinamide riboside did not increase brown-fat activity or cold-induced thermogenesis in humans.", type: "RCT", pmid: "33524145" },
    ],
    studiedDoses: "Supplement trials used a range of oral doses; benefits beyond raising NAD+ are not established. Not guidance.",
    safety: "Oral precursors appear well tolerated short-term; the marketed metabolic/anti-aging benefits are largely unproven in humans.",
    mayBeOffered: true,
    updated: "2026-10-27",
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    class: "Antioxidant",
    goals: ["Longevity / energy", "Skin"],
    grade: "C",
    tier: 3,
    oneLiner: "The body's main intracellular antioxidant, marketed as an oral/IV supplement.",
    mechanism: "A tripeptide antioxidant; oral absorption is debated and clinical benefit is unclear.",
    regulatory: {
      fda: "Not an approved drug; sold as a supplement. IV glutathione is compounded and not FDA-approved for the marketed uses (including skin lightening, which the FDA has warned against).",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A 6-month RCT (54 adults) found high-dose (1,000 mg/day) oral glutathione raised body stores, with levels returning to baseline after washout.", type: "RCT", pmid: "24791752" },
      { summary: "A 4-week RCT (40 adults) found oral glutathione (500 mg twice daily) produced no significant change in oxidative-stress biomarkers.", type: "RCT", pmid: "21875351" },
    ],
    studiedDoses: "Small trials used oral doses up to ~1,000 mg/day; results are mixed. Not guidance.",
    safety: "Generally well tolerated orally; clinical benefits are inconsistent and oral absorption is debated.",
    mayBeOffered: true,
    updated: "2026-10-27",
  },
  {
    slug: "ss-31",
    name: "SS-31",
    aka: ["Elamipretide"],
    class: "Mitochondrial peptide",
    goals: ["Longevity / energy"],
    grade: "C",
    tier: 3,
    oneLiner: "A mitochondria-targeted peptide investigated for mitochondrial disease; largely negative trials.",
    mechanism: "Binds cardiolipin on the inner mitochondrial membrane to support energy production.",
    regulatory: {
      fda: "Not approved; investigational. A rolling submission in Barth syndrome is under review.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "The phase 3 MMPOWER-3 RCT (218 participants) found elamipretide did NOT improve the 6-minute walk test or fatigue in primary mitochondrial myopathy, though it was well tolerated.", type: "RCT", pmid: "37268435" },
      { summary: "A long-term open-label extension in Barth syndrome reported sustained functional and cardiac improvements, but in only ~10 patients.", type: "observational", pmid: "38602181" },
    ],
    studiedDoses: "Investigational dosing in trials only. Not guidance.",
    safety: "Generally tolerated in trials; efficacy for the marketed 'energy/anti-aging' uses is not established and the largest trial was negative.",
    updated: "2026-10-27",
  },
  {
    slug: "tb-500",
    name: "TB-500",
    aka: ["Thymosin beta-4 fragment"],
    class: "Healing / repair",
    goals: ["Recovery / injury"],
    grade: "D",
    tier: 3,
    oneLiner: "A fragment of thymosin β-4 promoted for recovery; no human efficacy trials exist.",
    mechanism: "Proposed actin-regulating / cell-migration effects; supporting data are preclinical.",
    regulatory: {
      fda: "Not approved.",
      wada: "WADA Prohibited List — S2 (growth factors affecting tissue repair).",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A review of thymosin β-4 summarizes its biology and early trials (eye injury, wounds, cardiac repair); most supporting evidence is preclinical, and human data are for the full-length peptide, not TB-500.", type: "review", pmid: "26096726" },
    ],
    studiedDoses: "No validated human dosing exists for TB-500.",
    safety: "Human safety is unknown; banned in sport (WADA S2). Claims rest on animal/lab work.",
    updated: "2026-10-27",
  },
  {
    slug: "ll-37",
    name: "LL-37",
    aka: ["cathelicidin"],
    class: "Antimicrobial peptide",
    goals: ["Immune / defense"],
    grade: "C",
    tier: 3,
    oneLiner: "A human antimicrobial peptide studied topically for chronic wounds, with mixed results.",
    mechanism: "A cathelicidin with antimicrobial and wound-modulating activity.",
    regulatory: {
      fda: "Not approved.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A first-in-human trial (34 patients) found topical LL-37 was safe and improved healing of hard-to-heal venous leg ulcers at lower doses.", type: "RCT", pmid: "25041740" },
      { summary: "A larger phase IIb RCT (148 patients) found no significant overall healing benefit versus placebo (benefit only in a post-hoc large-wound subgroup).", type: "RCT", pmid: "34687253" },
    ],
    studiedDoses: "Topical dosing in trials only; systemic use is not established. Not guidance.",
    safety: "Human experience is limited to topical wound studies with mixed results.",
    updated: "2026-10-27",
  },
  {
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    aka: ["Zadaxin", "Tα1"],
    class: "Immunomodulator",
    goals: ["Immune / defense"],
    grade: "C",
    tier: 3,
    oneLiner: "An immune-modulating peptide approved in some countries; the largest rigorous trial was neutral.",
    mechanism: "Modulates T-cell and innate immune responses.",
    regulatory: {
      fda: "Not approved in the US. Marketed in some other countries (Zadaxin) as an immunomodulator.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "The TESTS trial, the largest double-blind RCT (1,106 adults with sepsis), found no significant reduction in 28-day all-cause mortality with thymosin α1.", type: "RCT", pmid: "39814420" },
    ],
    studiedDoses: "Reported in trials/foreign labels only. Not guidance.",
    safety: "Generally tolerated in trials; the marketed sepsis/immune benefits are not confirmed by high-quality evidence.",
    updated: "2026-10-27",
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    class: "Mitochondrial peptide",
    goals: ["Longevity / energy", "Weight loss"],
    grade: "D",
    tier: 3,
    oneLiner: "A mitochondria-derived peptide studied in cells and rodents for metabolism; no human trials.",
    mechanism: "A mitochondrial-derived peptide that regulates metabolism via AMPK in preclinical models.",
    regulatory: {
      fda: "Not approved.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A review describes MOTS-c as a mitochondrial-derived peptide regulating muscle and fat metabolism via AMPK; the evidence is preclinical (cell and rodent models).", type: "review", pmid: "27216708" },
    ],
    studiedDoses: "No validated human dosing exists.",
    safety: "Human safety and efficacy are unknown; therapeutic claims come from preclinical work.",
    updated: "2026-10-27",
  },
  {
    slug: "igf-1-lr3",
    name: "IGF-1 LR3",
    class: "Growth factor",
    goals: ["Muscle / body composition"],
    grade: "D",
    tier: 3,
    oneLiner: "A long-acting IGF-1 analog with no human trials; approved IGF-1 exists only for a rare deficiency.",
    mechanism: "A modified, longer-acting insulin-like growth factor 1; the LR3 analog is unstudied in humans.",
    regulatory: {
      fda: "Not approved. Recombinant human IGF-1 (mecasermin) is approved only for severe primary IGF-1 deficiency in children — the LR3 analog is not that product.",
      wada: "WADA Prohibited List — S2 (growth factors).",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A review characterizes human IGF-1 deficiency states and argues IGF-1 therapy is best used as physiologic replacement, not supraphysiologic dosing.", type: "review", pmid: "23148873" },
    ],
    studiedDoses: "No human trials of the LR3 analog exist.",
    safety: "Human safety is unknown; supraphysiologic IGF-1 raises theoretical growth/cancer concerns. Banned in sport (WADA S2).",
    updated: "2026-10-27",
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    aka: ["Epithalon"],
    class: "Peptide bioregulator",
    goals: ["Longevity / energy"],
    grade: "D",
    tier: 3,
    oneLiner: "A pineal-derived tetrapeptide promoted for aging; evidence is weak and largely from one group.",
    mechanism: "Proposed telomerase and pineal/circadian effects; data are preclinical and low-quality.",
    regulatory: {
      fda: "Not approved.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A 2025 review summarizes epitalon's proposed telomerase/pineal effects and notes the evidence base is largely preclinical and of limited quality.", type: "review", pmid: "40141333" },
      { summary: "An older review reports geroprotective effects of the related pineal extract epithalamin in humans, but it is dated and from the originating research group.", type: "review", pmid: "12374906" },
    ],
    studiedDoses: "No rigorous human dosing is established.",
    safety: "Human safety and efficacy are poorly established; claims rest on small, older, single-group studies.",
    updated: "2026-10-27",
  },
  {
    slug: "kisspeptin",
    name: "Kisspeptin",
    aka: ["Kisspeptin-10"],
    class: "Reproductive neuropeptide",
    goals: ["Sexual health", "Hormones / vitality"],
    grade: "C",
    tier: 3,
    oneLiner: "A reproductive-axis neuropeptide in early human research for sexual function; no approved product.",
    mechanism: "Stimulates GnRH release and modulates sexual brain processing.",
    regulatory: {
      fda: "Not approved; investigational.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A randomized crossover trial (32 men with low sexual desire) found IV kisspeptin modulated sexual brain processing and increased penile response to sexual stimuli versus placebo.", type: "RCT", pmid: "36735255" },
      { summary: "A randomized crossover trial (32 women with low sexual desire) found IV kisspeptin altered brain activity during sexual/attraction tasks versus placebo.", type: "RCT", pmid: "36287566" },
    ],
    studiedDoses: "IV infusion in small mechanistic trials only. Not guidance.",
    safety: "Early-stage human data only; no large efficacy or safety trials and no approved product.",
    updated: "2026-10-27",
  },
  {
    slug: "dsip",
    name: "DSIP",
    aka: ["Delta Sleep-Inducing Peptide"],
    class: "Neuropeptide",
    goals: ["Sleep"],
    grade: "D",
    tier: 3,
    oneLiner: "A peptide named for sleep effects, but with sparse, inconsistent, and dated human data.",
    mechanism: "Proposed sleep/neuromodulatory effects; no established receptor or mechanism.",
    regulatory: {
      fda: "Not approved.",
      dea: "Not controlled.",
    },
    evidence: [
      { summary: "A review of delta-sleep-inducing peptide summarizes its proposed biology and the limited, inconsistent early human data; its sleep role is poorly established.", type: "review", pmid: "6145137" },
    ],
    studiedDoses: "No reliable modern human dosing exists.",
    safety: "Essentially no reliable modern human safety data; its sleep benefit is unproven.",
    updated: "2026-10-27",
  },
];

export function getCompound(slug: string): Compound | undefined {
  return COMPOUNDS.find((c) => c.slug === slug);
}

export function citationHref(c: Citation): string | undefined {
  return c.href ?? pubmed(c.pmid) ?? (c.doi ? `https://doi.org/${c.doi}` : undefined);
}

export function citationLabel(c: Citation): string {
  if (c.pmid) return `PMID ${c.pmid}`;
  if (c.nct) return c.nct;
  if (c.doi) return `doi:${c.doi}`;
  return "source";
}
