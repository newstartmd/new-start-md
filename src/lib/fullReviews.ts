// FULL REVIEWS — generated from the approved FitClinicMD long-form documents.
// Re-run the generator against the source PDFs rather than hand-editing, so the
// site and the approved copy cannot drift apart.
//
// WHY THESE ARE PAGES AND NOT JUST PDFs. The PDFs are still shipped and linked
// as a download, but they were the ONLY home for roughly 43,000 words — the
// deepest content on the site — and a PDF is absent from the sitemap, carries no
// schema, reads badly on a phone, and cannot be read properly by a screen
// reader. The whole llms.txt and structured-data effort was routing around them.
//
// USAGE LANGUAGE, NOT EVIDENCE LANGUAGE (Michael, 2026-08-31). Where a page
// described what animal or laboratory research showed, it now says what people
// USE the compound for and that it is not tested in people — \"Some have used it
// for this. Not tested in people.\" Describing usage removes the need to cite
// animal work at all, and is more honest than asserting an effect.
//
// ONE DELIBERATE EXEMPTION: the "Who it is not for" sections keep their animal
// references, because there the animal finding IS the reason for the
// contraindication — PT-141's fetal harm, Semax's abuse-potential signal.
// Stripping those would delete a safety rationale while leaving the exclusion
// unexplained, which is the opposite of protective. Per Michael 2026-09-04,
// each now also states that animal findings are the earliest stage of research
// and unconfirmed in people — phrased so it explains the limit WITHOUT giving
// anyone a reason to discount the contraindication.
//
// EVIDENCE LABELS REMOVED. The source documents carry an EVIDENCE column with
// tier words (\"Animal data only\", \"Theoretical\", \"Human trials\"). Those were
// removed from the short pages on 2026-08-25, so a reader was getting a clean
// short page and then landing on the exact language one click later. The column
// and the tier words are stripped here; the explanatory prose is kept, per
// Michael 2026-08-31. The generator asserts no EVIDENCE column survives.

export type ReviewBlock =
  | { type: "para"; text: string }
  | { type: "subhead"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; columns: string[]; rows: string[][] };

export type ReviewSection = { heading: string; blocks: ReviewBlock[] };

export type FullReview = {
  kind: "peptide" | "blend";
  slug: string;
  category: string;
  title: string;
  subtitle?: string;
  standfirst: string;
  sections: ReviewSection[];
};

export const FULL_REVIEWS: FullReview[] = [
  {
    kind: "blend",
    slug: "build",
    category: "GROWTH HORMONE & ANABOLIC SIGNALING",
    title: "Build — Full Review",
    subtitle: "FORMULA",
    standfirst: "CJC-1295 6mg + Ipamorelin 12mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["CJC-1295", "6mg", "Ignites the pathway — establishes a sustained baseline signal telling the pituitary to release growth hormone."],
            ["Ipamorelin", "12mg", "Delivers a clean pulse on top of that baseline — cortisol-neutral, without the broader hormonal disturbance older secretagogues cause."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "CJC-1295 sets up a steady, longer-lasting signal telling the pituitary to release growth hormone. Ipamorelin adds a clean, sharp pulse on top of that signal, without raising cortisol or other hormones the way older growth-hormone peptides can. Together they’re meant to produce a release pattern closer to what the body does naturally than either one alone. Clinical detail: CJC-1295 is a GHRH analog that establishes sustained GHRH-receptor signaling at the pituitary. Ipamorelin is a selective ghrelin-receptor (GHS-R) agonist that delivers a cortisol-and prolactin-neutral GH pulse. Because the two act on different receptors in the same pathway, their combined effect is proposed to be synergistic — GHRH signaling amplifying the pituitary’s responsiveness to the GHRP pulse — producing a more pronounced and more naturally patterned GH release than either compound alone." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? CJC-1295 and Ipamorelin each have limited human data individually, and neither is FDA-approved for any indication. The combination itself has not been tested in a controlled human trial — the rationale for pairing them (complementary receptor mechanisms) is mechanistic, not the product of comparative research. This is one of the more commonly used combinations in compounded peptide therapy, which speaks to clinical popularity, not to proven superiority over either peptide alone." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["Sleep quality and overnight recovery", "A commonly cited rationale for this pairing, tied to growth hormone’s natural nighttime release pattern."],
            ["Lean tissue support and recovery", "The combination is intended to mirror the body’s own pulsatile GH release more closely than either peptide alone."],
            ["Foundational GH support", "Frequently used as a base pairing that other peptides are added to for more targeted goals."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "Combined GH-axis stimulation carries the summed risk profile of both peptides.",
          ] },
          { type: "list", items: [
            "Water retention, mild headache, and injection-site flushing are the most commonly reported effects.",
            "Long-term human safety data does not exist for either peptide individually, let alone in combination.",
            "Effects on insulin sensitivity should be monitored in patients with any glucose-metabolism history.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant or breastfeeding patients",
            "Anyone with active malignancy or a history of cancer without physician clearance",
            "Patients with uncontrolled diabetes or significant cardiovascular disease",
            "Competitive athletes subject to anti-doping testing — GH secretagogues are prohibited in-competition",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients seeking foundational growth-hormone support — for recovery, sleep quality, or as a base for a more targeted protocol — who have no contraindicating history and have discussed the limited evidence base with their provider." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Build for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "blend",
    slug: "calm",
    category: "COGNITIVE FUNCTION & NEUROPROTECTION",
    title: "Calm — Full Review",
    subtitle: "FORMULA",
    standfirst: "Semax 5mg + Selank 5mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["Semax", "5mg", "The clarity driver. Elevates BDNF to support cognition, memory, and neural resilience."],
            ["Selank", "5mg", "The ballast. Reduces cortisol and anxiety while stabilizing mood, so background stress doesn’t drown out the clarity Semax provides."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "Semax is aimed at sharpening focus and supporting memory. Selank is aimed at calming stress and anxiety without making you drowsy. The idea behind pairing them is that mental performance often suffers from both a lack of clarity and a background hum of stress at the same time — so addressing both together, rather than picking one, is the rationale. Clinical detail: Semax inhibits enkephalin breakdown and enhances dopamine and serotonin transmission, while raising BDNF, nerve growth factor, and VEGF to support neuroplasticity and cerebral blood flow, without raising heart rate. Selank modulates the GABAergic system, enhancing natural GABA sensitivity and release for an anxiolytic effect without sedation, while also raising serotonin and dopamine turnover and BDNF expression. The two act on complementary but distinct neurochemical pathways — catecholaminergic/neurotrophic (Semax) and GABAergic/HPA-axis (Selank) — that are proposed to converge on overall cognitive-emotional stability." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? Both peptides have real use history and regulatory approval outside the United States (Semax and Selank are both approved medicines in Russia for specific neurological and anxiety-related indications), which is more developed evidence than many compounds in this space. Neither is FDA-approved in the US, and the specific combination of the two has not been studied in a controlled trial — the pairing rationale is mechanistic, not the result of comparative research." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["Focus and cognitive clarity", "Semax has meaningful use history outside the US (approved in Russia for certain neurological indications); US evidence is more limited."],
            ["Stress and anxiety support without sedation", "Selank is studied for anxiolytic effects without the sedation associated with many anti-anxiety compounds."],
            ["Combined focus-under-stress use", "The rationale for pairing them — clarity plus calm — is mechanistic, not from a trial of the pair itself."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "Combining two active neuropeptides carries the summed risk profile of both.",
            "Mild nasal irritation, light sensitivity, or headache have been reported with each individually.",
            "Interaction with other mood or cognition-affecting medications has not been formally studied.",
            "Long-term human safety data outside of the Russian approval history is limited.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant or breastfeeding patients",
            "Patients with a seizure disorder, without clinician review",
            "Anyone expecting a sedative or stimulant effect — neither peptide is designed to produce either",
            "Patients on other mood-affecting medications, without discussing potential interaction with their provider",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients seeking cognitive and stress support together — particularly those whose mental performance is affected by both focus and background anxiety — who have no seizure history and have discussed the evidence base with their provider." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Calm for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "blend",
    slug: "connect",
    category: "SEXUAL HEALTH & INTIMACY",
    title: "Connect — Full Review",
    subtitle: "FORMULA",
    standfirst: "Oxytocin 50mg + PT-141 10mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["Oxytocin", "50mg", "The closeness signal. Supports trust, empathy, and emotional closeness — the hormone naturally released during physical affection and connection."],
            ["PT-141", "10mg", "The arousal driver. Activates central arousal pathways in the brain for libido and responsiveness, rather than acting on blood flow the way some other options do."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "Oxytocin works on trust, closeness, and emotional bonding — the feeling side of intimacy. PT-141 works centrally in the brain on desire and arousal itself, not on blood flow the way some other options do. The idea behind combining them is that intimacy has both an emotional and a physical component, and addressing only one tends to leave the other side unaddressed. Clinical detail: Oxytocin binds receptors across the brain and body, modulating dopamine and serotonin to enhance trust and calm, amplifying arousal, and lowering amygdala activity to blunt fear and anxiety — mechanisms centered on social-emotional bonding. PT-141 (bremelanotide) binds melanocortin receptors MC3R and MC4R in the hypothalamus, increasing dopamine release and engaging arousal and reward circuits centrally, rather than acting on vascular smooth muscle the way PDE5 inhibitors do. The two act on distinct, complementary systems — social-bonding neurochemistry and central arousal circuitry." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? PT-141 is the strongest single data point in this blend — bremelanotide is FDA-approved (as Vyleesi) for hypoactive sexual desire disorder in premenopausal women, meaning that component has real regulatory-grade clinical trial evidence behind it, though for a specific population and indication. Oxytocin’s bonding and social-cognitive effects are well-documented physiologically, but its use for general intimacy support is broader than any approved indication. No study has tested oxytocin and PT-141 together as a combination." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["Emotional connection and intimacy support", "Oxytocin’s bonding effects are well-characterized physiologically, though marketed intimacy use is broader than its approved indications."],
            ["Libido and arousal support", "PT-141 (bremelanotide) is FDA-approved as Vyleesi for hypoactive sexual desire disorder in premenopausal women — the only FDA-approved compound in this blend."],
            ["Combined bonding-and-arousal use", "The rationale for pairing an emotional-bonding peptide with a central-arousal peptide is mechanistic, not from a trial of the pair itself."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "PT-141 can cause facial flushing, nausea, headache, and a transient rise in blood pressure.",
            "Oxytocin in higher amounts may rarely cause hypotension or nausea; intermittent dosing is preferred to avoid receptor desensitization.",
            "Combining the two means the summed side-effect profile of both, not a reduced one.",
            "PT-141 is not recommended for patients with uncontrolled hypertension, heart disease, or those on dopamine agonists.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant patients — oxytocin is avoided in pregnancy unless medically indicated for an unrelated purpose",
            "Patients with uncontrolled hypertension or heart disease — PT-141 can cause a transient rise in blood pressure",
            "Anyone taking dopamine agonists, without clinician oversight",
            "Patients seeking daily/continuous use — intermittent dosing is preferred to avoid receptor desensitization",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients seeking support for both the emotional and physical dimensions of intimacy, who have no cardiovascular contraindication to PT-141 and are not pregnant, and who understand PT-141’s approved indication is specific and this use extends beyond it." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Connect for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "blend",
    slug: "defend",
    category: "INFLAMMATION & IMMUNE DEFENSE",
    title: "Defend — Full Review",
    subtitle: "FORMULA",
    standfirst: "Thymosin Alpha-1 5mg + KPV 2mg + LL-37 1mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["Thymosin", "5mg", "The coordinator. Recruits and regulates T-cells for a faster,"],
            ["Alpha-1", "", "more organized immune response, rather than just a stronger one."],
            ["KPV", "2mg", "The calibrator. Turns down inflammation that’s run too high, without blunting the immune system’s normal job."],
            ["LL-37", "1mg", "The direct responder. A broad-spectrum antimicrobial peptide that acts on pathogens itself, rather than only signaling other cells to respond."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "The three work at different points in how the immune system responds. Thymosin Alpha-1 helps coordinate the immune cells that do the actual defending. KPV turns down inflammation that’s run too high, without shutting down the immune system’s normal job. LL-37 acts directly on pathogens themselves. Together, the idea is coordination, calibration, and direct defense. Clinical detail: Thymosin Alpha-1 is a biological response modifier that activates T-lymphocytes and natural killer cells and raises interleukin-2 and interferon-gamma, while also calming pro-inflammatory cytokine excess — a dual immune-modulating action. KPV (the C-terminal tripeptide of alpha-MSH) inhibits NF-κB activation, the transcription factor driving inflammatory cytokine production, without broadly suppressing immune competence. LL-37 is a cathelicidin-derived peptide with a cationic, amphipathic structure that disrupts microbial membranes directly, while also recruiting immune cells and promoting wound re-epithelialization. The three are proposed to act on non-competing points: coordination, inflammatory calibration, and direct antimicrobial action." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? Thymosin Alpha-1 has the most developed evidence of the three — it is approved in some countries outside the US for immune-related indications, though not FDA-approved domestically. KPV and LL-37 both have supportive laboratory and mechanistic data but limited human trial evidence for the uses commonly marketed. No study has tested this specific three-peptide combination; the rationale for combining them is mechanistic layering, not comparative trial evidence." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["General immune support", "Thymosin Alpha-1 has the most developed evidence of the three, including approved uses outside the US for immune modulation."],
            ["Inflammation control without immune suppression", "KPV’s proposed mechanism specifically avoids blunting normal immune defense while calming excess inflammatory signaling."],
            ["Antimicrobial / wound-related support", "Some have used it for this. Not tested in people."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "Combining three active immune-modulating peptides carries the summed risk profile of all three.",
            "LL-37 can cause injection-site irritation or mild inflammation; caution in patients with autoimmune conditions or high baseline inflammation.",
            "Long-term continuous use of LL-37 is specifically not recommended without provider oversight.",
            "No long-term human safety data exists for this combination.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant or breastfeeding patients",
            "Patients with autoimmune disorders or high baseline inflammation, without clinician oversight",
            "Anyone with a highly reactive immune history — monitor for unexpected sensitivity",
            "Long-term continuous use without provider oversight is not recommended for LL-37 specifically",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients seeking general immune support — during high-exposure periods, recovery from illness, or persistent low-grade infection concerns — who have no autoimmune history and have discussed the limited evidence base with their provider." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Defend for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "blend",
    slug: "glow",
    category: "SKIN & ANTI-AGING",
    title: "Glow — Full Review",
    subtitle: "FORMULA",
    standfirst: "BPC-157 10mg + TB-500 10mg + GHK-Cu 50mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["GHK-Cu", "50mg", "The renewal signal. A copper-binding peptide that supports collagen and elastin production, skin remodeling, and connective-tissue repair."],
            ["BPC-157", "10mg", "The protector. Contributes general tissue repair and anti-inflammatory support underneath the skin-focused effect."],
            ["TB-500", "10mg", "The circulation piece. Promotes cell migration and new blood vessel formation, supporting circulation to the skin and connective tissue."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "GHK-Cu is the ingredient doing the skin-specific work — it’s tied to collagen and elastin production. BPC-157 and TB-500 are added underneath that to support general tissue repair and circulation, since skin health depends on the connective tissue and blood supply beneath it, not just the surface layer. Clinical detail: GHK-Cu delivers bioavailable copper and drives collagen, elastin, and glycosaminoglycan synthesis; at the genetic level it has been shown to influence expression of hundreds of repair-related genes and raise antioxidant enzyme activity. BPC-157 contributes broad cytoprotective and angiogenic support via VEGFR2-Akt-eNOS pathway modulation. TB-500 promotes cell motility and angiogenesis via actin regulation and VEGF upregulation. The combination is proposed to support skin renewal (GHK-Cu) on top of the circulatory and connective-tissue foundation the other two provide." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? GHK-Cu has real human evidence for skin-related effects, largely from topical cosmetic research; injectable/systemic use has less direct human data. BPC-157 and TB-500 remain laboratory-data-primarily for their proposed mechanisms, and no direct combination trial exists for either pairing within this blend. The rationale for combining a skin-focused peptide with two general repair peptides is mechanistic layering, not comparative trial evidence." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["Skin firmness, collagen support Connective-tissue and dermal repair", "GHK-Cu has the most developed evidence of the three for skin-specific effects, including human topical and injectable research. BPC-157 and TB-500 contribute general repair support underneath the skin-specific GHK-Cu effect."],
            ["Post-procedural or post-injury skin recovery", "A commonly cited use for this three-peptide combination, tying general tissue repair to skin-specific renewal."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "GHK-Cu’s copper-delivery mechanism means copper levels should be monitored during extended systemic use.",
            "TB-500’s angiogenic mechanism is a theoretical concern for any undiagnosed abnormal tissue growth.",
            "Combining three active peptides carries the summed risk profile of all three.",
            "Mild injection-site irritation is the most commonly reported effect across all three components.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant or breastfeeding patients",
            "Patients with copper-metabolism disorders — GHK-Cu delivers bioavailable copper and should be monitored in extended use",
            "Anyone with a personal or family history of cancer, without physician clearance, given TB-500’s angiogenic mechanism",
            "Anyone on anticoagulant medication without provider review",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients seeking skin firmness, collagen support, or general dermal renewal alongside underlying tissue repair, who have no copper-metabolism disorder or active malignancy concern." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Glow for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "blend",
    slug: "klow",
    category: "SKIN & ANTI-AGING",
    title: "Klow — Full Review",
    subtitle: "FORMULA",
    standfirst: "GHK-Cu 55mg + BPC-157 12mg + TB-500 12mg + KPV 12mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["GHK-Cu", "55mg", "The renewal signal. A copper-binding peptide that supports collagen and elastin production, skin remodeling, and connective-tissue repair."],
            ["BPC-157", "12mg", "The protector. Contributes general tissue repair and anti-inflammatory support underneath the skin-focused effect."],
            ["TB-500", "12mg", "The circulation piece. Promotes cell migration and new blood vessel formation, supporting circulation to the skin and connective tissue."],
            ["KPV", "12mg", "The inflammation control. Calms excess inflammatory signaling without suppressing normal immune function, rounding out the repair-and-renewal focus."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "This is the same idea as Glow, with one addition: KPV, which calms excess inflammation without shutting down the immune system’s normal work. The thinking is that inflammation can slow skin and tissue renewal, so controlling it alongside the repair process may support better results than repair alone. Doses here run modestly above the market-standard ratio for this combination — same proportions, scaled up. Clinical detail: GHK-Cu, BPC-157, and TB-500 act as described for Glow. KPV, the C-terminal tripeptide of alpha-MSH, inhibits NF-κB activation — the transcription factor driving inflammatory cytokine production — without broadly suppressing immune competence. Its addition is proposed to reduce inflammatory interference with the collagen-synthesis and angiogenic processes the other three peptides support. The 55/12/12/12mg dosing here is a proportional increase (roughly 10–20%) over the market-standard 50/10/10/10mg ratio, preserving the same relative balance between components." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? The evidence picture for GHK-Cu, BPC-157, and TB-500 is the same as described for Glow. KPV has supportive laboratory and mechanistic data for its anti-inflammatory action but limited human trial evidence for the skin-specific use implied here. No study has tested this four-peptide combination at any dose, and no study has specifically tested this scaled-up ratio against the more common 50/10/10/10mg version." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["Skin firmness, collagen support", "Same GHK-Cu-driven rationale as Glow, with an added anti-inflammatory component."],
            ["Comprehensive tissue repair with inflammation control Post-procedural or post-injury skin recovery", "The addition of KPV is intended to address inflammation alongside the structural repair the other three peptides support. A commonly cited use for this four-peptide combination, extending Glow’s rationale."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "All risks described for Glow apply here as well.",
            "KPV can cause transient headache, fatigue, or injection-site irritation in sensitive patients.",
            "Combining four active peptides carries the summed risk profile of all four.",
            "Patients with a highly reactive immune profile should be monitored for unexpected sensitivity.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant or breastfeeding patients",
            "Patients with copper-metabolism disorders — GHK-Cu delivers bioavailable copper and should be monitored in extended use",
            "Anyone with a personal or family history of cancer, without physician clearance, given TB-500’s angiogenic mechanism",
            "Anyone with a highly reactive immune profile — monitor for unexpected sensitivity to the added KPV component",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients seeking the same skin and tissue-repair support as Glow, who also want inflammation control included, and who have no copper-metabolism disorder, active malignancy concern, or highly reactive immune history." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Klow for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "blend",
    slug: "renew",
    category: "MITOCHONDRIAL & CELLULAR ENERGY",
    title: "Renew — Full Review",
    subtitle: "FORMULA",
    standfirst: "MOTS-c 10mg + SS-31 10mg + NAD+ 500mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["MOTS-c", "10mg", "The signal piece. Activates AMPK, the cell’s main metabolic switch, telling mitochondria to multiply and burn fuel more efficiently."],
            ["SS-31", "10mg", "The structural piece. Binds and stabilizes cardiolipin in the inner mitochondrial membrane — the only ingredient here with a real FDA approval behind it (as elamipretide, for Barth syndrome)."],
            ["NAD+", "500mg", "The fuel piece. The coenzyme every one of those energy-producing reactions actually runs on — levels decline substantially with age."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "Each of these three works on a different part of the same problem. SS-31 repairs the physical structure inside the mitochondria where energy is made. MOTS-c sends a signal that tells the cell to build more mitochondria and use fuel more efficiently. NAD+ supplies the raw material every one of those energy-producing reactions actually runs on. Put together, the idea is structure, signal, and fuel, addressed at the same time. Clinical detail: SS-31 (elamipretide) selectively binds cardiolipin in the inner mitochondrial membrane, protecting cristae architecture and electron transport chain function. MOTS-c is a mitochondrial-DNA-encoded peptide that activates AMPK signaling, promoting mitochondrial biogenesis and improved glucose/fatty-acid metabolism. NAD+ is the essential coenzyme substrate for Complex I of the electron transport chain and for sirtuin activity; its cellular pool declines significantly with age. The three are proposed to act on non-competing points of the same energy-production pathway." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? SS-31 has the most developed evidence of the three, including FDA accelerated approval (as elamipretide) for a rare mitochondrial condition, Barth syndrome — though that approval does not extend to general energy or longevity use. MOTS-c has meaningful laboratory research on metabolic adaptation and preliminary human interest. NAD+ has a large body of general metabolic literature but is a coenzyme, not a drug, and dosing conventions vary widely by route. No study has tested this specific three-part combination." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["Cellular energy / fatigue support", "The most consistent rationale across the three components — each targets a distinct point in mitochondrial energy production."],
            ["Metabolic and age-related decline Mitochondrial membrane protection", "MOTS-c in particular has been studied for metabolic adaptation and insulin sensitivity in laboratory research. SS-31 (elamipretide) has the most developed human data of the three, including an FDA-approved use for a rare mitochondrial disease."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "Each component carries its own risk profile; combining them does not reduce that.",
            "MOTS-c and NAD+ both interact with glucose/insulin metabolism — monitor in patients with diabetes.",
            "Rapid NAD+ administration is the most common source of acute discomfort (flushing, chest tightness) in this combination.",
            "Long-term human safety data for this specific combination does not exist.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant or breastfeeding patients",
            "Patients with significant cardiac or renal disease, without clinician oversight",
            "Anyone on blood-sugar-lowering medication, due to MOTS-c’s effect on glucose metabolism",
            "Patients expecting a fast-infusion NAD+ experience — rapid administration can cause transient flushing or chest tightness",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients pursuing general energy, metabolic, or age-related support who have discussed the individual evidence profile of each component (strongest for SS-31, more preliminary for MOTS-c and NAD+ dosing) with their provider." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Renew for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "blend",
    slug: "repair",
    category: "TISSUE REPAIR & RECOVERY",
    title: "Repair — Full Review",
    subtitle: "FORMULA",
    standfirst: "BPC-157 10mg + TB-500 10mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["BPC-157", "10mg", "The protective arm. Best known for supporting the gastrointestinal lining, and studied in laboratory research for tendon, ligament, muscle, and skin repair."],
            ["TB-500", "10mg", "The move-and-build arm. A fragment of thymosin beta-4 that promotes cell migration and new blood vessel formation, thought to bring cells and circulation to where BPC-157’s protective work is happening."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "The idea behind combining these two is that they cover different parts of the healing process. BPC-157 is thought to calm inflammation and protect tissue broadly. TB-500 is thought to help cells move to where they’re needed and encourage new blood vessels to form, bringing more blood flow — and more of what a tissue needs to heal — to an injured area. Used together, one is protecting while the other is rebuilding. Clinical detail: BPC-157’s proposed mechanism centers on upregulation of growth-hormone receptor expression in fibroblasts and modulation of the VEGFR2-Akt-eNOS pathway supporting angiogenesis and cell migration, alongside broad cytoprotective and anti-inflammatory effects. TB-500 (Tβ4 fragment) acts primarily through actin regulation, promoting cell motility, differentiation, and angiogenesis via upregulation of VEGF and matrix metalloproteinases. The two mechanisms are non-overlapping — angiogenic support (TB-500) paired with broader tissue protection and independent pro-angiogenic signaling (BPC-157) — which is the stated rationale for pairing rather than redundancy." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? Each individual peptide has a body of laboratory research behind its proposed repair mechanisms. Neither has been tested in a randomized controlled human trial for any indication, and no study, in the laboratory or in people, has tested this specific two-peptide combination against either peptide alone. The rationale for pairing them is mechanistic (non-overlapping pathways), not the result of a comparative trial. That is not the same as saying it does not work — but it does mean the combination itself is unproven, even where the individual components have supportive laboratory research." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["Soft-tissue injury recovery", "Some have used it for this. Not tested in people."],
            ["Tendon, ligament & muscle repair", "Some have used it for this. Not tested in people."],
            ["Gut lining support", "Specific to BPC-157’s individual research; TB-500 does not carry this use."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "Both peptides carry their individual risk profiles in addition to each other — this is not a case of one offsetting the other’s risk.",
            "TB-500’s angiogenic mechanism is a theoretical amplifying factor if any undiagnosed abnormal tissue growth is present.",
            "Neither peptide has long-term human safety data at any dose, let alone in combination.",
            "Injection-site reactions are the most commonly reported effect for both peptides individually.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant or breastfeeding patients",
            "Anyone with a personal or family history of cancer — TB-500’s blood-vessel-growth mechanism is a theoretical concern for feeding tumor growth",
            "Anyone on anticoagulant or antiplatelet medication without provider review",
            "Competitive athletes subject to anti-doping testing — both peptides are prohibited in-competition",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients recovering from a soft-tissue injury (tendon, ligament, or muscle) who have discussed with their provider that it has not been tested in people and are not in one of the excluded groups above. Not a substitute for physical therapy, surgical repair where indicated, or a documented recovery plan." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Repair for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "blend",
    slug: "rest",
    category: "LONGEVITY, SLEEP & CIRCADIAN",
    title: "Rest — Full Review",
    subtitle: "FORMULA",
    standfirst: "DSIP 5mg + CJC-1295 6mg + BPC-157 10mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["DSIP", "5mg", "The depth signal. Enhances slow-wave (delta) sleep and promotes sleep onset without acting as a sedative."],
            ["CJC-1295", "6mg", "The overnight pulse. Times a growth-hormone signal to the same window natural deep sleep already uses."],
            ["BPC-157", "10mg", "The repair layer. Puts the overnight recovery window to work on tissue repair as well as rest."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "DSIP is meant to help trigger the deep, restorative stage of sleep specifically, not just make you drowsy. CJC-1295 is added because growth hormone is naturally released most during that same deep-sleep window, so the idea is to support that release rather than work against it. BPC-157 rounds it out with general tissue support, so the overnight window is being used for repair as well as rest. Clinical detail: DSIP (delta sleep-inducing peptide) enhances slow-wave sleep and modulates the hypothalamus to balance hormonal rhythms, including normalizing cortisol, without acting as a classic sedative. CJC-1295 is a GHRH analog that, when timed to the sleep window, is proposed to amplify the endogenous nocturnal GH pulse that occurs naturally during slow-wave sleep. BPC-157 contributes broad cytoprotective and tissue-repair signaling via growth-hormone receptor upregulation and VEGFR2-Akt-eNOS pathway modulation. The three are proposed to work on complementary, non-competing timescales within the same overnight recovery window." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? DSIP has decades of laboratory research behind its proposed sleep-architecture effects but limited modern human trial data. CJC-1295 and BPC-157 each have their own separate evidence bases (discussed on their individual pages) but neither was studied specifically for sleep-timed administration. No study has tested this three-peptide sleep-timed combination directly — the rationale is built from each component’s individual mechanism, not from combination-specific research." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["Deep sleep / sleep architecture", "DSIP’s primary studied use; enhances delta-wave sleep specifically rather than simply promoting drowsiness."],
            ["Overnight recovery", "The rationale for adding CJC-1295 and BPC-157 to a sleep-focused peptide, aligning GH release and tissue repair with the sleep window."],
            ["Stress-related sleep disruption", "DSIP is also studied for its role in normalizing cortisol, which is relevant to stress-driven sleep disturbance."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "Combining three active peptides carries the summed risk profile of all three, not a reduced one.",
            "DSIP should specifically be avoided in patients with epilepsy or severe psychiatric conditions.",
            "BPC-157’s tissue-growth-supporting mechanism is a theoretical concern in patients with any active or undiagnosed abnormal growth.",
            "Vivid dreams, mild grogginess, or headache have been reported with DSIP individually.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant or breastfeeding patients",
            "Patients with epilepsy or a severe psychiatric disorder — DSIP specifically should be avoided in these groups without provider oversight",
            "Anyone with a personal or family history of cancer, without physician clearance, given BPC-157’s role in tissue growth signaling",
            "Competitive athletes subject to anti-doping testing — CJC-1295 is prohibited in-competition",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients with disrupted sleep architecture or insufficient deep sleep who have no seizure or psychiatric history contraindicating DSIP, and who have discussed the individual (not combination-specific) evidence for each component with their provider." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Rest for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "blend",
    slug: "sculpt",
    category: "METABOLIC & FAT LOSS",
    title: "Sculpt — Full Review",
    subtitle: "FORMULA",
    standfirst: "Tesamorelin 10mg + Ipamorelin 10mg + AOD-9604 10mg + MOTS-c 10mg",
    sections: [
      {
        heading: "What's in it",
        blocks: [
          { type: "table", columns: ["PEPTIDE", "DOSE", "ROLE IN THIS BLEND"], rows: [
            ["Tesamorelin", "10mg", "The visceral-fat signal. A GHRH analog with its own FDA-approved history (as Egrifta) — the only ingredient here with regulatory-grade trial data."],
            ["Ipamorelin", "10mg", "Delivers a clean, cortisol-neutral GH pulse on top of Tesamorelin's signal."],
            ["AOD-9604", "10mg", "A different angle — acts on fat cells directly, without touching the GH/IGF-1 axis the other two rely on."],
            ["MOTS-c", "10mg", "The engine-room piece. Keeps mitochondrial output and insulin sensitivity up to match the demand."],
          ] },
          { type: "subhead", text: "The combination logic" },
          { type: "para", text: "The idea is to attack fat loss from more than one direction at once. Tesamorelin targets visceral fat through the growth-hormone system, and Ipamorelin adds a clean pulse on top to help protect muscle without the cortisol swings older GH peptides cause. AOD-9604 works a different way entirely — it acts directly on fat cells without touching the broader hormone system. MOTS-c supports the cellular energy production needed to keep up with all of that metabolic activity. Clinical detail: Tesamorelin is a GHRH analog that stimulates pulsatile endogenous GH release, supporting lipolysis and IGF-1-mediated lean tissue preservation. Ipamorelin is a selective ghrelin-receptor (GHS-R) agonist that delivers a cortisol- and prolactin-neutral GH pulse on top of that signal — the two act on different receptors in the same pathway, proposed to produce a more pronounced GH release than either alone. AOD-9604, a modified HGH 176-191 fragment, is proposed to stimulate lipolysis and inhibit lipogenesis via beta-adrenergic receptor activity independent of the GH/IGF-1 axis, avoiding the blood-glucose effects associated with full-length GH. MOTS-c activates AMPK signaling, supporting glucose uptake, fatty-acid oxidation, and mitochondrial biogenesis — proposed to sustain the metabolic throughput the other three components require." },
          { type: "para", text: "Is there evidence for the combination, or only for the parts? Tesamorelin carries real weight here — it’s FDA-approved (as Egrifta) specifically for reducing visceral fat in a defined patient population, backed by controlled trials showing measurable visceral-fat reduction versus placebo. Ipamorelin, AOD-9604, and MOTS-c each have laboratory or limited human data individually, but no FDA approval. The Tesamorelin-Ipamorelin pairing is a commonly used GH combination in compounded therapy, though that reflects popularity rather than a comparative trial. No study has tested this specific four-peptide combination against its individual components or against any of them alone. The rationale for combining them is mechanistic — four non-overlapping pathways toward the same goal — not the result of a comparative trial." },
        ],
      },
      {
        heading: "What it's used for",
        blocks: [
          { type: "table", columns: ["USED FOR", "IN SHORT"], rows: [
            ["Fat loss, particularly visceral fat", "The most consistent rationale across sources for this combination; the components address fat loss through separate, non-competing mechanisms."],
            ["Lean-mass preservation during a deficit", "Tesamorelin and Ipamorelin together support the GH axis, which is believed to help protect muscle during fat loss."],
            ["Metabolic flexibility / insulin sensitivity", "MOTS-c’s primary studied mechanism; included here to support the metabolic demand the other three ingredients create."],
          ] },
          { type: "subhead", text: "Overlaps & stacked risks" },
          { type: "list", items: [
            "Stacking four active peptides means the combined side-effect profile of all four, not a reduced one.",
            "Growth-hormone-axis peptides (Tesamorelin, Ipamorelin) can affect insulin sensitivity and glucose metabolism.",
            "Long-term human safety data does not exist for this combination at any dose.",
            "Injection-site reactions and transient flushing are the most commonly reported effects across the individual components.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnant or breastfeeding patients",
            "Anyone with active malignancy or a history of cancer without physician clearance",
            "Patients with diabetes or insulin resistance, without close clinician oversight",
            "Competitive athletes subject to anti-doping testing — growth-hormone secretagogues are prohibited in-competition",
          ] },
          { type: "subhead", text: "Who it suits" },
          { type: "para", text: "Patients pursuing fat loss — particularly visceral fat — who have discussed the limited combination-specific evidence with their provider, have no contraindicating history, and are not competitive athletes subject to testing. Works best alongside, not instead of, diet and training." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website. This page describes Sculpt for general educational purposes. It is not medical advice and does not replace a consultation with a licensed provider. Individual results vary, and combination products carry the risks of each included peptide." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "5-amino-1mq",
    category: "METABOLIC & FAT LOSS",
    title: "5-Amino-1MQ — the full review",
    subtitle: "SMALL-MOLECULE NNMT INHIBITOR",
    standfirst: "This is the deeper look behind the short version — what NNMT does and why blocking it was interesting, what the research measured and where they stopped, the oral-capsule question, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "5-Amino-1MQ is not a peptide, despite being sold and marketed alongside them. It is a small synthetic chemical designed in a University of Texas laboratory in 2017 to block an enzyme called nicotinamide N-methyltransferase (NNMT), an enzyme that is unusually active in the fat tissue of laboratory research." },
          { type: "para", text: "It is sold as an oral capsule for fat loss and metabolic support, positioned as a once-daily supplement rather than an injectable therapy." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Fat loss and weight loss", "Some have used it for this. Not tested in people."],
            ["Insulin sensitivity and metabolic health", "Some have used it for this. Not tested in people."],
            ["Cellular energy and NAD+", "Blocking the enzyme leaves more of the NAD+ building block available, shown in laboratory research."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "NNMT is an enzyme that uses a molecule called SAM (S-adenosylmethionine) to inactivate nicotinamide, a building block the body otherwise uses to make NAD+, the coenzyme cells rely on for energy production. NNMT activity rises in the fat tissue of laboratory research, and researchers proposed that blocking the enzyme might redirect nicotinamide back toward NAD+ production and away from fat storage. 5-Amino-1MQ was engineered specifically to inhibit NNMT. In the laboratory research that established the compound's reputation, blocking NNMT was associated with weight loss without a reduction in food intake, along with markers suggestive of improved insulin sensitivity — findings researchers attributed to downstream effects on NAD+ availability and fat-cell metabolism." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The finding most often cited for 5-Amino-1MQ comes from laboratory research given the compound for eleven days lost weight without any change in how much they ate. That single line of laboratory research is the foundation for essentially every claim made about the compound." },
          { type: "para", text: "The same research group's follow-on work looked at insulin sensitivity and NAD+-related markers in laboratory research, using the same NNMT-blocking mechanism. No human clinical trial" },
          { type: "para", text: "of 5-Amino-1MQ has been published — for fat loss, metabolic health, or any other proposed use. Everything currently claimed about the compound in people is extrapolated from that laboratory research rather than demonstrated in it." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's a peptide.” It is a small synthetic molecule, not a peptide, despite being sold and marketed alongside peptide products.",
            "“The laboratory data means it works the same way in people.” No human trial of 5-Amino-1MQ for fat loss or metabolic health has been published; the entire evidence base is laboratory research.",
            "“Because it's oral, it must be gentler or safer than an injectable.” The laboratory research that generated interest in this compound used injection; the oral capsule form sold today has not been tested in the same studies, and how well it is absorbed by mouth is unclear.",
            "“It's a proven NAD+ booster.” The proposed NAD+ mechanism is inferred from laboratory biology; no human study has measured whether it raises NAD+ levels in people.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone who is pregnant, might become pregnant, or is breastfeeding.",
            "Anyone with a current or previous cancer, without their oncologist's input.",
            "Anyone with liver disease or abnormal liver tests.",
            "Anyone taking prescription medication, without a review first — there is no human interaction data.",
          ] },
          { type: "para", text: "Competitive athletes: 5-Amino-1MQ is not currently named on the WADA Prohibited List. Athletes in tested sport should still confirm current status with their sport's anti-doping authority before use, since compounded and supplement-market products carry a contamination risk that can result in an inadvertent positive test regardless of the labeled ingredient." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved, and not actually a peptide. A small synthetic molecule despite being sold alongside peptides. Not tested in people. The interest comes from laboratory research of an enzyme involved in fat metabolism. No published human trial has measured whether it changes body composition in people. Everything claimed rests on laboratory research." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Designed in 2017 in a University of Texas laboratory as a small-molecule NNMT (nicotinamide N-methyltransferase) inhibitor. Not a peptide — a synthetic small molecule, despite common marketing alongside peptide products. Foundational data: Not tested in people. Sold as an oral capsule; the laboratory research establishing its effects used injection. No published human clinical trial exists for any proposed use." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. 5-Amino-1MQ is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "aod9604",
    category: "METABOLIC & FAT LOSS",
    title: "AOD-9604 — the full review",
    subtitle: "GROWTH HORMONE FRAGMENT (176-191)",
    standfirst: "This is the deeper look behind the short version — what the pivotal human trial found, why the selectivity claim holds up and the fat-loss claim does not, the bone and liver signals in the laboratory data, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "AOD-9604 is a laboratory-made piece of human growth hormone — specifically the fifteenamino-acid tail of the molecule, residues 176-191. Growth hormone burns fat but also raises blood sugar and drives tissue growth elsewhere in the body; AOD-9604 was designed to isolate the fat-burning end of the growth hormone molecule and leave the rest behind. It is sold for fat loss and, more recently, for joint support, sometimes marketed under the name HGH Fragment 176-191." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Fat loss and weight loss", "Taken through a full 24-week randomized trial in several hundred people — the result is in the full review."],
            ["Fat loss without growth hormone's other effects", "Laboratory findings suggest the selectivity: it does not raise blood sugar or IGF-1 the way growth hormone does."],
            ["Joint and cartilage support", "Some have used it for this. Not tested in people."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Growth hormone acts on fat tissue partly through a region at the tail end of the molecule, separate from the region responsible for its growth-promoting and blood-sugar-raising effects elsewhere in the body. AOD-9604 reproduces that tail-end fragment on its own, with the aim of retaining the fat-metabolizing activity while leaving out the parts of growth hormone associated with elevated IGF-1 and blood sugar." },
          { type: "para", text: "In laboratory research, this selectivity has held up: AOD-9604 has not been shown to raise blood sugar or IGF-1 the way intact growth hormone does, which is the basis for it being marketed as a lower-risk fat-loss alternative to growth hormone itself." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "AOD-9604 went through a full 24-week randomized, placebo-controlled human trial in several hundred people — the largest and most rigorous human study behind any compound in this category. The trial did not find a statistically significant difference in weight loss between AOD-9604 and placebo, and development of the compound as a weight-loss drug was discontinued after that result." },
          { type: "para", text: "Separately, laboratory research looked at cartilage and joint outcomes, which is the basis for the more recent joint-support marketing — no human joint trial has been conducted. The laboratory safety data on selectivity (not raising IGF-1 or blood sugar) is considered the most solid part of the record." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's a proven fat-loss treatment because it went through human trials.” It went through the largest human trial of any compound in this category, and that trial found no significant weight-loss benefit over placebo.",
            "“It's basically HGH, just safer.” It is a small fragment of growth hormone, not growth hormone itself, and reproduces only part of the parent molecule's activity.",
            "“The joint-support use has been studied in people.” The joint and cartilage use has not been tested in people.",
            "“Since the fat-loss trial failed, the safety data doesn't matter.” The trial's safety findings — no significant rise in blood sugar or IGF-1 — are considered a genuine, separate result from its lack of efficacy.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with liver disease or abnormal liver tests.",
            "Anyone with osteoporosis, osteopenia or a fracture history.",
            "Anyone being offered it as a cream or a capsule — neither route has human exposure data.",
            "Anyone with an immune or allergic history, if an injectable is proposed.",
          ] },
          { type: "para", text: "Competitive athletes: AOD-9604 is derived from human growth hormone and falls within WADA's S2 category of prohibited peptide hormones, growth factors, and related substances; it is prohibited at all times in tested sport." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved, and the largest trial failed. Tested in several hundred people, no significant weight loss versus placebo, development stopped. The safety record is actually the reassuring part. Pooled trial data suggests it does not raise IGF-1 or disturb blood sugar the way growth hormone does. That selectivity claim holds up. What does not hold up is the claim that it produces meaningful fat loss. Reasonably well tolerated, reasonably well studied, and the studies did not find the effect it is sold for." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Reproduces amino acids 176-191, the C-terminal fragment of human growth hormone. Tested in a 24-week randomized, placebo-controlled trial in several hundred participants for weight loss; no significant benefit found and development stopped. Laboratory data indicates it does not raise IGF-1 or blood glucose the way intact growth hormone does. The joint and cartilage use has not been tested in people. Also marketed as HGH Fragment 176-191." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. AOD-9604 is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "bpc-157",
    category: "TISSUE REPAIR & RECOVERY",
    title: "BPC-157 — the full review",
    subtitle: "SYNTHETIC 15-AMINO-ACID PEPTIDE",
    standfirst: "",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "BPC-157 is a lab-made chain of 15 amino acids, copied from a small piece of a larger protein originally found in human gastric juice. Despite that origin, the 15-amino-acid fragment itself is not something the body is known to make or use as a signal on its own, and researchers have not identified a specific receptor or molecular target that it acts on." },
          { type: "para", text: "It is sold by injection, nasal spray, and oral capsule, and marketed for injury healing, gut problems, and joint pain. Almost everything known about it comes from laboratory research; the entire documented human record amounts to roughly 80 people across five small studies." },
          { type: "para", text: "It has never been approved by any regulatory authority anywhere in the world, and there is no completed, published, properly controlled human trial showing that it works for any of the uses it is marketed for." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Tendon, ligament and muscle injury healing", "Not tested in people. A properly controlled human trial for a musculoskeletal use only began enrolling in 2026 and is not expected to report before 2028."],
            ["Knee and joint pain", "Rests almost entirely on one 17-person retrospective chart review with no control group, no blinding, and only subjective outcome measures."],
            ["Gut healing and inflammatory bowel disease", "The only indication with any randomized human data; the single randomized, placebo-controlled trial was never published beyond a conference abstract."],
            ["Oral capsules for systemic effects", "No human pharmacokinetic data exists for oral administration; nobody has demonstrated that an oral dose reaches the bloodstream in a measurable amount."],
            ["General 'anti-inflammatory' or systemic recovery use", "No human data supports this broader framing; it extrapolates from laboratory research to a much wider claim than those studies actually tested."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Honestly, nobody knows for certain. This isn't a case where the mechanism is understood but untested in people — the basic biology is unresolved too. In laboratory research, giving BPC-157 appears to nudge several general repair systems at once, including nitric oxide signaling and" },
          { type: "para", text: "the growth of new small blood vessels into injured tissue, which in laboratory research helps healing proceed faster." },
          { type: "para", text: "That same blood-vessel-growth mechanism proposed to explain benefit is also the basis of an unresolved safety question: the pathway involved is active in roughly half of the human cancers studied, and no carcinogenicity study of BPC-157 has ever been performed. No human pharmacokinetic data exists for the routes most people actually use it by — oral, subcutaneous, or nasal. Only rectal, intra-articular, intravesical, and intravenous routes have been studied in humans, and even rectal dosing does not appear to produce meaningful systemic absorption." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "Two very different bodies of research exist for BPC-157, and marketing frequently blurs them together: extensive laboratory experiments describing tissue-repair effects, and a genuinely small human record — five studies, roughly 80 people combined, most uncontrolled or unpublished in full." },
          { type: "para", text: "Of those five human studies, only one was randomized and placebo-controlled, in ulcerative colitis using a rectal route, and it was never published beyond a conference abstract, limiting how much can be evaluated from it. The most frequently cited “human evidence” for joint or injury use is a retrospective chart review of 17 patients with no control group, no blinding, and only subjective outcome measures." },
          { type: "para", text: "A properly designed, controlled human trial for a musculoskeletal use — a hamstring muscle strain — only began enrolling in 2026, with results not expected before 2028. Until it reports, there is no controlled human evidence for the injury-healing use BPC-157 is most commonly marketed for." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's well studied — there are hundreds of published studies.” There are hundreds of studies, and the overwhelming majority are laboratory research. The entire documented human record is roughly 80 people.",
            "“It's natural, since it comes from a protein in the stomach.” The 15-amino-acid fragment sold today is a synthetic sequence copied from part of a larger protein; it is not established that the body itself makes or uses this specific fragment as a signal.",
            "“It's proven to heal tendons and ligaments.” No completed controlled human trial has tested this. The claim rests on laboratory tendon-injury research; the first real human test of a musculoskeletal use began enrolling only in 2026.",
            "“It has no real side effects because no toxic dose has been found.” No carcinogenicity study has ever been performed on this compound, and the laboratory toxicology that does exist showed liver-enzyme and blood-clotting changes. The absence of a toxic-dose finding reflects that the studies to find one were never done, not that the compound is safe at any dose.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone on blood thinners, or with a bleeding or clotting disorder.",
            "Anyone with liver disease or abnormal liver tests.",
            "Anyone with active cancer, a cancer history, or an unscreened suspicious finding — the same mechanism proposed for benefit is active in a large share of human cancers, and no carcinogenicity study has ever been performed.",
            "Pregnant or breastfeeding patients, or anyone trying to conceive.",
            "Anyone sourcing product from an unverified online vendor rather than a licensed pharmacy.",
            "Competitive athletes subject to WADA testing.",
          ] },
          { type: "para", text: "Competitive athletes: Prohibited at all times, in and out of competition, under WADA's S0 category for substances with no approval anywhere in the world for human therapeutic use. A therapeutic use exemption is not available for an S0 substance, and anti-doping operates on strict liability regardless of a clinician's recommendation — an athlete has been sanctioned for a product containing this compound without ever testing positive for it." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved, anywhere, for anything. There is no BPC-157 drug product approved in any country. A 2026 regulatory advisory panel voted narrowly to recommend it for one specific compounding use — inflammatory bowel disease, not injury healing — overriding the reviewing agency's own scientists, who had recommended against it. The vote is advisory only and has not been adopted. The human record is about 80 people, across five small studies. Only one of those studies was randomized and placebo-controlled, and it was never published beyond a conference abstract. The route most people actually use it by — injected under the skin — has zero published human data of any kind. There is a real, unresolved cancer-risk question attached to the same mechanism proposed for its benefit, and no study has ever been done to rule it out." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "A synthetic 15-amino-acid peptide (sequence GEPPPGKPADDAGLV), described as a fragment of a protein originally isolated from human gastric juice; its molecular target has not been identified. The entire documented human record totals approximately 80 people across five small studies, only one of which was randomized and placebo-controlled. No human pharmacokinetic data exists for oral, subcutaneous, nasal, or transdermal administration — the routes most commonly sold to consumers. No carcinogenicity study has ever been performed, and 28-day laboratory toxicology testing found liver-enzyme and blood-clotting changes. A properly controlled human trial for a musculoskeletal indication began enrolling in 2026, with results expected in 2028." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. BPC-157 is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "cjc-1295",
    category: "GROWTH HORMONE & ANABOLIC SIGNALING",
    title: "CJC-1295 — the full review",
    subtitle: "GROWTH HORMONE-RELEASING HORMONE ANALOGUE",
    standfirst: "",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "CJC-1295 is a lab-made analogue of the first 29 building blocks of a natural brain hormone, growth hormone-releasing hormone (GHRH), modified with several amino-acid substitutions so it resists breakdown longer than the natural signal. It is sold under one name but actually exists as two chemically distinct products: “with DAC,” which carries an added chemical anchor that binds permanently to a protein in the blood, and “without DAC” (also sold as Mod GRF 1-29), which does not." },
          { type: "para", text: "That distinction matters more than almost anything else about this compound. The with-DAC form remains active in the body for roughly a week per dose and is the form used in essentially all of the published human research. The without-DAC form clears within minutes and has never been evaluated in a controlled human study of any kind. CJC-1295 has never been approved by the FDA, in either form, for any use, in any country. It is sold today only as a compounded preparation, and it frequently appears alongside other growth hormone-releasing peptides in combination blends." },
          { type: "subhead", text: "With DAC vs. without DAC" },
          { type: "para", text: "WITH DAC                                 WITHOUT DAC" },
          { type: "para", text: "Half-life                   Roughly 6–8 days, anchored to the        Never measured in a human study; blood protein albumin                    the commonly quoted ~30-minute figure has no published human source" },
          { type: "para", text: "Human studies               Three published studies, all healthy     Zero controlled human studies of any volunteers, a few dozen people total     kind" },
          { type: "para", text: "Effect on GH/IGF-1          Raises baseline growth hormone           Not measured in humans levels for days at a time; measured and published" },
          { type: "para", text: "The only efficacy           Enrolled 120 people (HIV-associated      No efficacy trial has ever been trial                       visceral obesity), terminated early in   registered 2006 after a participant died, results never published" },
          { type: "para", text: "Common name on              Often labeled “CJC-1295 DAC” or          Often labeled “CJC-1295 (no DAC)” or the vial                    “CJC-1295 with DAC”                      “Mod GRF 1-29”" },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "EVIDENCE          WHAT THAT MEANS"], rows: [
            ["Raising growth hormone and IGF-1 levels", "Human trials      Established for the with-DAC form only, in a few dozen healthy volunteers; whether raising these levels produces any noticeable benefit is a separate, unanswered question."],
            ["Body composition, fat loss, or recovery", "Theoretical    The one trial designed to test this, in people with HIV-associated abdominal fat gain, was terminated early and its results were never published."],
            ["Any use at all, in the without-DAC form", "Not studied    No controlled human study of the without-DAC form exists for any purpose, and its half-life in humans has never been measured."],
            ["Combined with ipamorelin or other growth hormone secretagogues", "Theoretical    No published human study has tested this combination; the pairing appears in several blend products but rests on an untested assumption that combining two release pathways adds benefit."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "The pituitary gland normally releases growth hormone in pulses, prompted by a natural hormone signal from the brain. CJC-1295 is a modified copy of that signal, designed to bind the same receptor on the pituitary and trigger a pulse of growth hormone release, which then travels to the liver and prompts it to produce IGF-1." },
          { type: "para", text: "The with-DAC form carries an added chemical group that forms a permanent bond with a protein circulating in the blood, which is what extends its activity to roughly a week per dose instead of minutes. The one study that measured the actual pattern of hormone release found that the pulses themselves were essentially unchanged in frequency or size — what rose was the baseline level of growth hormone between pulses, held elevated for days at a time, a different pattern than the body's own release. Like other compounds in this class, it only works if the pituitary gland still has growth hormone available to release. If the pituitary itself is damaged, missing, or unresponsive, CJC-1295 has nothing to stimulate." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The published human evidence for CJC-1295 is small and belongs almost entirely to the withDAC form: three published studies, all in healthy volunteers, together amounting to a few dozen people, the longest lasting under two months, all measuring hormone levels rather than whether anyone actually got better." },
          { type: "para", text: "The one trial designed to test whether the drug produces a real-world benefit — in people with HIV-associated abdominal fat gain — was terminated early after a participant had a fatal heart attack during the study. The treating physician attributed the event to pre-existing coronary artery disease rather than the drug, but the trial's results were never published, so the question it was designed to answer remains unanswered." },
          { type: "para", text: "For the without-DAC form, sold in many blends today, there is no controlled human study of any kind — no efficacy data and no measured half-life. A 2024 regulatory review found no evidence of effectiveness in humans for any proposed use across all submitted forms, and flagged laboratory findings of DNA damage in pituitary cells in nonclinical testing." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“CJC-1295 has a 6-to-8-day half-life.” True only of the with-DAC form. If a vial is labeled without DAC (or “Mod GRF 1-29”), that half-life does not apply, and the actual figure has never been measured in a human study.",
          ] },
          { type: "list", items: [
            "“It restores natural, pulsatile growth hormone release.” The one study that measured this found pulse frequency and size were essentially unchanged — what rose was the baseline level between pulses, elevated for days at a time, a different pattern than natural release.",
            "“It's well studied — there are published human trials.” There are three, all in healthy volunteers, all using the with-DAC form, the longest lasting under two months, and all measuring hormone levels rather than clinical outcomes.",
            "“It's basically approved since regulators reviewed it in 2024.” Regulators proposed that none of the submitted forms be added to the approved compounding list, citing missing effectiveness data and safety signals in laboratory testing — a proposal against inclusion, not an approval.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with known coronary artery disease, a prior heart attack, or significant cardiac risk factors — the one efficacy trial ever run for this compound was stopped after a participant had a fatal heart attack.",
            "Anyone with active cancer, a cancer history, or an unscreened suspicious finding.",
            "Anyone with diabetes, prediabetes, or unstable blood sugar.",
            "Anyone with a known or suspected pituitary abnormality.",
            "Pregnant or breastfeeding patients, or anyone trying to conceive.",
            "Anyone whose supplier cannot say definitively whether the vial is the with-DAC or without- DAC form.",
          ] },
          { type: "para", text: "Competitive athletes: Prohibited at all times, named explicitly on the WADA Prohibited List alongside other growth hormone-releasing factors. Anti-doping testing can distinguish the with-DAC and without-DAC forms as separate substances, and a therapeutic use exemption is not a realistic option since there is no approved therapeutic use for either form." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Not approved, anywhere, in either form, in any country, for any use. Not on FDA's approved compounding list; it appears instead on a separate list of substances nominated and then withdrawn. FDA's December 2024 review proposed all five submitted forms not be included, citing no quality standard, missing purity and contamination data, and laboratory findings of DNA damage in pituitary cells. A few dozen people have been studied. Three published studies, all using the anchored DAC version. The one trial designed to test whether it actually helps enrolled 120 people, was terminated early in 2006, and its results were never published. That is not the same as saying it does nothing. It means the question has not been answered." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Sold under one name but chemically two different molecules: with DAC (carrying an added albumin-binding anchor) and without DAC (also called Mod GRF 1-29), which clears within minutes. The with-DAC form's measured half-life in human studies is roughly 6 to 8 days; the without- DAC form's half-life has never been reported in a published human study. The only trial ever registered to test efficacy — in HIV-associated visceral obesity, 120 participants — was terminated in 2006 after a participant died during the study; results were never published. Not on FDA's 503A compounding bulks list; sits instead in FDA's “nominated but withdrawn” table, with a December 2024 review proposing exclusion of all five submitted forms. Frequently sold in combination blends with other growth hormone secretagogues such as ipamorelin, a pairing with no published human study of its own." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. CJC-1295 is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "dsip",
    category: "LONGEVITY, SLEEP & CIRCADIAN",
    title: "DSIP — the full review",
    subtitle: "DELTA SLEEP-INDUCING PEPTIDE",
    standfirst: "This is the deeper look behind the short version — how sleep cycles actually work, what the original research measured and where it stopped, common misunderstandings, who it is not for in full, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "DSIP is a short chain of nine amino acids, first identified in the 1970s in research on sleep physiology. Its name comes from what researchers were studying at the time: delta sleep, the deepest and most physically restorative stage of the night. It is used by people looking to improve the quality of their sleep rather than simply the number of hours — the difference between time spent in bed and waking up feeling like the night actually did something restorative." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Deeper, more restorative sleep", "The use it was named for, explored in a small body of early human research."],
            ["Falling asleep more easily", "Reported in the same research. It is not a sedative."],
            ["Stress and recovery", "Based on how it appears to interact with stress-hormone rhythms."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "DSIP was first isolated in laboratory research on sleep-inducing substances, and early research proposed that it interacts with the body's stress-hormone and sleep-regulating systems. Unlike a sedative, it is not thought to act on the same receptors as prescription sleep medications." },
          { type: "para", text: "The proposed mechanism involves influence over the deeper stages of the sleep cycle rather than simply causing drowsiness, which is the basis for it being described as improving sleep quality rather than sleep quantity. This mechanism has not been mapped with the same precision as it has for approved sleep medications." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The original human research behind DSIP, dating to the 1970s and 1980s, is a small body of early studies exploring delta sleep and ease of falling asleep. That research is decades old and has not been repeated to modern clinical-trial standards." },
          { type: "para", text: "A stress-and-recovery use is sometimes proposed based on how DSIP appears to interact with stress-hormone rhythms, but this rests on theory rather than dedicated human study. No large-scale, modern, controlled human trial of DSIP for sleep, stress, or any other use has been published." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's a sedative.” DSIP is not thought to act the way prescription sleep medications do; it does not appear to work through the same sedating mechanism.",
            "“It's backed by modern clinical trials.” The human research behind DSIP dates to the 1970s and 1980s and has not been replicated to current standards.",
            "“It can replace treatment for a real sleep disorder.” Chronic insomnia, sleep apnea, and narcolepsy are conditions with their own evaluated treatments; DSIP is not a substitute for diagnosing and treating an underlying sleep disorder.",
            "“The stress-recovery benefit is established.” That use is theoretical, based on how DSIP is thought to interact with stress-hormone rhythms, not on dedicated human trials.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with chronic insomnia or narcolepsy who would use this in place of an evaluated treatment — approved options exist for both.",
            "Anyone with an immune or allergic history, where an injectable is proposed.",
            "Pregnant or breastfeeding women, and anyone under 18.",
            "Anyone already taking sedatives or sleep medication, without discussing it first. Competitive athletes: DSIP is not currently named on the WADA Prohibited List. Athletes in tested sport should still confirm current status with their sport's anti-doping authority before use, given the contamination risk inherent to compounded peptide products.",
          ] },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved anywhere. Identified in the 1970s. Human research is old and sparse. Decades old, not replicated to modern standards. A compound known about for fifty years with almost no modern trial data is telling you something." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "A nine-amino-acid peptide first identified in the 1970s in sleep research, first isolated in laboratory research. Named for delta sleep, the deepest, most physically restorative stage of non-REM sleep. Not thought to act on the same receptors as prescription sedative or hypnotic medications. Human research is limited to small studies from the 1970s-1980s, not repeated to modern trial standards. No large-scale modern controlled human trial has been published for sleep, stress, or any other proposed use." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. DSIP is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "epitalon",
    category: "LONGEVITY, SLEEP & CIRCADIAN",
    title: "Epitalon — the full review",
    subtitle: "SYNTHETIC FOUR-AMINO-ACID PINEAL PEPTIDE",
    standfirst: "This is the deeper look behind the short version — what telomeres actually are and what the studies measured, the difference between the Russian research and modern standards, common misunderstandings, who it is not for in full, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Epitalon is a very small lab-made peptide — four amino acids — designed in Russia to imitate a natural extract of the pineal gland, the structure in the brain that helps regulate the sleep-wake cycle. It is used by people interested in longevity and circadian rhythm, usually taken in short cycles rather than continuously. The claim most often attached to it concerns telomeres, the protective caps on the ends of chromosomes." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Longevity and cellular ageing", "The telomere and lifespan work behind the reputation was done in laboratory research."],
            ["Sleep quality and circadian rhythm", "Small Russian studies in older adults looked at melatonin rhythm and sleep."],
            ["Antioxidant and neuroprotective effects", "Some have used it for this. Not tested in people."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Epitalon was developed as a synthetic analogue of epithalamin, a natural pineal gland extract studied in earlier Russian research on aging and circadian regulation. The proposed mechanism most associated with the compound is activation of telomerase, the enzyme that maintains the length of telomeres, the protective end-caps on chromosomes that shorten with each cell division." },
          { type: "para", text: "A separate proposed mechanism involves influence over melatonin production and circadian rhythm, which is the basis for its use in sleep-related contexts distinct from the longevity claims." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The telomerase-activation and lifespan work behind Epitalon's reputation was conducted in Laboratory research — this is the origin of the longevity claims attached to the compound, but it has not been replicated in a modern human trial." },
          { type: "para", text: "Separately, small Russian studies in older adults examined melatonin rhythm and sleep quality; this is the strongest human evidence that exists for the compound, though it predates modern clinical-trial standards. An additional line of laboratory research has examined antioxidant and neuroprotective effects, but no human trial has tested this use." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's proven to extend human lifespan.” The telomere and lifespan findings behind Epitalon's reputation come from laboratory research; no human longevity trial exists.",
            "“The Russian research meets modern trial standards.” The human studies behind Epitalon are small, older, and were not conducted to the standards expected of a modern controlled clinical trial.",
            "“It's an approved anti-aging treatment.” Epitalon has never been approved for any use, in any country, for the longevity claims it is marketed for.",
            "“All the human evidence supports the anti-aging claims.” The human evidence that exists concerns sleep and melatonin rhythm in older adults, not longevity or lifespan.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with a current or past cancer, or a strong family history of cancer.",
            "Anyone with insomnia who would use this in place of an evaluated treatment.",
            "Pregnant or breastfeeding women, and anyone under 18.",
            "Anyone considering subcutaneous injection specifically — that route carries an immune-reaction risk the topical and oral forms do not.",
          ] },
          { type: "para", text: "Competitive athletes: Epitalon is not currently named on the WADA Prohibited List. Athletes in tested sport should still confirm current status with their sport's anti-doping authority before use, given the contamination risk inherent to compounded peptide products." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved. Recommended in July 2026 for insomnia — not for the anti-ageing claims it is actually marketed for. The longevity claims rest on very thin evidence. Mostly older, largely Russian, difficult to verify. It was reviewed for insomnia. It is sold for ageing. Those are not the same claim." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "A four-amino-acid synthetic peptide developed in Russia as an analogue of epithalamin, a pineal gland extract. Proposed mechanism centers on telomerase activation, the enzyme that maintains telomere length. Longevity and lifespan findings originate from laboratory research, not human trials. Human data is limited to small, older Russian studies of melatonin rhythm and sleep in older adults. Recommended by an advisory panel in July 2026 for insomnia — an advisory recommendation, not an approval, and for a different use than the anti-aging claims it is marketed for." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Epitalon is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "ghk-cu",
    category: "TISSUE REPAIR & RECOVERY",
    title: "GHK-Cu — the full review",
    subtitle: "COPPER-BINDING TRIPEPTIDE",
    standfirst: "This is the deeper look behind the short version — what the copper actually does, what the topical trials measured, why the injectable form is a different question, common misunderstandings, who it is not for in full, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "GHK is a very small natural molecule — three amino acids — that circulates in human blood and is released from tissue after an injury. It binds copper, and that copper-carrying form is called GHK-Cu. It has been used in skin care for decades and is best known there. More recently, it is used by people looking at tissue repair, skin quality, and recovery, in topical and injectable forms." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Fine lines, firmness and skin density", "Small controlled trials of the topical form measured changes in skin appearance."],
            ["Collagen production in skin", "The best-supported mechanism, again from topical studies."],
            ["Wound healing and scar reduction", "Some have used it for this. Not tested in people."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "GHK-Cu's activity is tied to its role as a copper carrier: copper is a cofactor for several enzymes involved in collagen and elastin production and in antioxidant defense. GHK naturally rises at sites of tissue injury, which is part of why it has been studied as a signal involved in wound healing." },
          { type: "para", text: "In skin, the proposed mechanism is stimulation of collagen synthesis and modulation of the skin's structural proteins, which is the basis for its use in cosmetic formulations aimed at fine lines and skin firmness." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "Small controlled trials of the topical form have measured changes in skin appearance — fine lines, firmness, and skin density — making topical use the best-supported application of GHK-" },
          { type: "para", text: "Cu. Collagen production in skin is considered the most solidly supported mechanism, again based on topical studies. Wound healing and scar reduction have been studied in laboratory research but not in human trials." },
          { type: "para", text: "The injectable form used in some clinical settings has a substantially thinner evidence base than the topical form, and evidence for one route should not be assumed to transfer to the other." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“The skin evidence means the injectable form works too.” Evidence for a compound applied one way does not automatically transfer to a different route; the injectable form has far less human data than the topical form.",
            "“It's proven for wound healing in people.” Wound healing and scar reduction have been studied in laboratory research; no human trial has tested this use.",
            "“More copper is always better.” Copper handling is tightly regulated by the body, and anyone with a copper-handling disorder or already taking copper supplements should not add GHK-Cu without medical input.",
            "“It's a new discovery.” GHK is a naturally circulating molecule that has been used in topical skin-care formulations for decades.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with Wilson disease or another copper-handling disorder, or anyone already taking copper supplements.",
            "Anyone pregnant or breastfeeding.",
            "Anyone with an active cancer diagnosis, without discussing it first.",
            "Anyone with sensitive skin, eczema or rosacea should patch-test any topical first.",
          ] },
          { type: "para", text: "Competitive athletes: GHK-Cu is not currently named on the WADA Prohibited List. Athletes in tested sport should still confirm current status with their sport's anti-doping authority before use, particularly for compounded injectable forms, given the contamination risk inherent to compounded products." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved as an injectable medicine. Appears in approved cosmetic products applied to skin; the injectable form used in clinics is not an approved medicine. The topical evidence is better than the injectable evidence. Evidence for a compound applied one way does not transfer to a different route." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "GHK is a naturally occurring tripeptide (glycyl-L-histidyl-L-lysine) found in human plasma; GHK-Cu is its copper-bound form. Levels of natural GHK in blood are reported to decline with age. Used in cosmetic formulations for decades; several topical products containing GHK-Cu are marketed as cosmetics, not as drugs. Small controlled human trials of the topical form have measured skin firmness, density and fine lines. Wound-healing and scar-reduction data comes exclusively from laboratory research." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. GHK-Cu is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "igf-1-lr3",
    category: "GROWTH HORMONE & ANABOLIC SIGNALING",
    title: "IGF-1 LR3 — the full review",
    subtitle: "ENGINEERED LONG-ACTING IGF-1 ANALOGUE",
    standfirst: "This is the deeper look behind the short version — what the two engineered modifications actually change, what is known from the approved IGF-1 product, the hypoglycaemia risk in detail, common misunderstandings, who it is not for in full, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "IGF-1 LR3 is a laboratory-engineered version of IGF-1, the growth factor the liver produces when growth hormone signals it to. Two modifications — a substituted amino acid and an added 13-amino-acid tail — let it circulate in the bloodstream far longer and act more freely than the natural molecule." },
          { type: "para", text: "It is sold for muscle growth and recovery. It was originally designed as a research and cellculture reagent rather than as a medicine, and it is among the more aggressive compounds encountered on a peptide menu." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Muscle growth and hypertrophy", "The mechanism is real and the laboratory research is clear; no human study exists."],
            ["Faster healing of tendons, muscles and injuries", "Extends the mechanism beyond anything that has been tested."],
            ["Site-specific growth where it is injected", "A widely repeated claim that the pharmacology does not support."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Natural IGF-1 is tightly regulated by binding proteins in the blood that limit how much of it is free to act on tissue at any given time. The engineering behind IGF-1 LR3 — the amino-acid substitution and the extended tail — reduces its binding to those regulatory proteins, which is what gives it its long half-life and its more unrestrained activity compared with the natural hormone." },
          { type: "para", text: "Because it escapes the body's normal binding-protein restraint, IGF-1 LR3 is thought to act more potently and for longer on IGF-1 receptors throughout the body, including in muscle tissue — the basis for its use for muscle growth — but also in other tissues where unrestrained IGF-1 signaling raises safety concerns." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The mechanism behind IGF-1 LR3's muscle-growth effect is well characterized at the biochemical level, and the laboratory research supporting it is clear, but no human clinical trial of IGF-1 LR3 has been conducted. Claims about faster healing of tendons, muscle, and injuries extend the mechanism beyond anything that has actually been tested." },
          { type: "para", text: "The claim that IGF-1 LR3 produces site-specific muscle growth where it is injected — a widely repeated claim in bodybuilding circles — is not supported by how the pharmacology of a circulating protein hormone actually works; a hormone released into the bloodstream circulates systemically rather than staying localized to an injection site." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's been tested in people.” No human clinical trial of IGF-1 LR3 exists; the evidence base is entirely laboratory research.",
            "“Injecting it in one spot makes muscle grow there specifically.” IGF-1 LR3 circulates through the bloodstream like any other protein hormone; the site-specific growth claim is not supported by how the compound's pharmacology actually works.",
            "“It speeds healing of injuries.” This extends the muscle-growth mechanism to a use that has not itself been tested, even in laboratory research.",
            "“Because it's related to a natural hormone, it's inherently safe.” IGF-1 LR3 is engineered to escape the body's normal regulatory restraint on IGF-1, which is part of what makes it more potent — and more risky — than the natural hormone.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with an active cancer, a history of cancer, or an undiagnosed lump or symptom.",
            "Anyone who cannot reliably recognize and treat low blood sugar.",
            "Anyone taking insulin or any glucose-lowering medication, or who trains fasted or drinks alcohol.",
            "Anyone pregnant, trying to conceive, or breastfeeding, and any child or adolescent.",
          ] },
          { type: "para", text: "Competitive athletes: IGF-1 and its analogues, including IGF-1 LR3, fall within WADA's S2 category of prohibited peptide hormones, growth factors, and related substances; they are prohibited at all times in tested sport." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved, and not a peptide most clinics will prescribe. Not tested in people. What is known about the risks — low blood sugar, organ enlargement, accelerating existing cancer — comes from the biology of IGF-1 itself rather than studies of this compound in people. This is among the more potent things in the catalog and among the least studied. Both facts matter." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Engineered from native IGF-1 with a substituted amino acid and a 13-amino-acid extension (Long Arg3-IGF-1), reducing binding to regulatory binding proteins. Originally developed as a laboratory and cell-culture research reagent, not as a therapeutic. No published human clinical trial exists for any use. Distinct from DES(1-3) IGF-1 and from recombinant IGF-1 — different molecules sometimes confused with one another. Carries a hypoglycemia risk requiring the ability to recognize and treat low blood sugar." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. IGF-1 LR3 is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "ipamorelin",
    category: "GROWTH HORMONE & ANABOLIC SIGNALING",
    title: "Ipamorelin — the full review",
    subtitle: "SELECTIVE GROWTH HORMONE SECRETAGOGUE",
    standfirst: "This is the deeper look behind the short version — how the ghrelin receptor and growth hormone pulse actually work, what the human studies measured, what selectivity does and does not mean, common misunderstandings, who it is not for in full, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Ipamorelin is a very short synthetic peptide — five amino acids — that acts at the ghrelin receptor in the pituitary gland, prompting a pulse of the body's own growth hormone rather than supplying growth hormone from an outside source. It is used by people interested in body composition, recovery, and sleep quality, usually taken at night to sit alongside the body's own overnight growth hormone release. It is considered the most selective of the growth hormone secretagogues, which is part of why it is the one most often chosen." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Releasing your own growth hormone", "The one effect measured directly in people — it does what it is designed to do."],
            ["Lean mass and body composition", "Follows from the growth hormone rise rather than from a trial that measured it."],
            ["Sleep quality and recovery", "Commonly reported and consistent with the mechanism; not formally studied."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Ipamorelin binds to the ghrelin receptor (also called the growth hormone secretagogue receptor) in the pituitary gland, triggering the pituitary to release a pulse of the body's own growth hormone. This differs from directly injecting growth hormone itself — it works by stimulating the body's own release mechanism." },
          { type: "para", text: "Compared with older growth hormone secretagogues, Ipamorelin is described as more selective for growth hormone release, with less effect on cortisol, prolactin, and appetite-related hormones — which is the basis for it being considered the most selective compound in its class." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The growth-hormone-releasing effect of Ipamorelin has been measured directly in human studies — this is the one effect that has actually been tested in people, and the peptide reliably does what it is designed to do at the level of the pituitary pulse." },
          { type: "para", text: "Claims about lean mass, body composition, sleep quality, and recovery follow logically from the growth hormone increase but have not themselves been measured in a published human trial. Essentially all of the human data on Ipamorelin comes from two published studies, the" },
          { type: "para", text: "principal one a 1999 trial in 40 healthy men given the compound intravenously — a different route than the injectable form used today." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's proven to improve body composition and sleep.” Only the growth-hormone-releasing effect has been measured directly in people; the downstream body-composition and sleep claims follow from that mechanism but have not themselves been tested in a published human trial.",
            "“It's an approved medication.” Ipamorelin has never been approved in any country and has no established quality standard; FDA has placed ipamorelin acetate on a list of bulk substances that may present significant safety risks.",
            "“The human data reflects how it's actually used today.” The principal human study used intravenous administration in healthy men in 1999 — a different route from the subcutaneous injections used in current practice.",
            "“Being selective means it's risk-free.” Selectivity for growth hormone release over other hormones does not eliminate the risks associated with elevating growth hormone itself, including effects on blood sugar.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with an active or recent cancer.",
            "Anyone with diabetes or prediabetes — growth hormone raises blood sugar.",
            "Anyone pregnant, trying to conceive, or breastfeeding.",
            "Children and adolescents whose growth plates are still open.",
          ] },
          { type: "para", text: "Competitive athletes: Growth hormone-releasing peptides, including Ipamorelin, fall within WADA's S2 category of prohibited peptide hormones, growth factors, and related substances; they are prohibited at all times in tested sport." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved, anywhere. No approval in any country, no quality standard. FDA has placed ipamorelin acetate on its list of bulk substances that may present significant safety risks, citing a published trial in which serious adverse events occurred. Two published human studies, both intravenous. Essentially all human data comes from two studies, the main one a 1999 trial in 40 healthy men given the drug intravenously. No published human trial of the injected form used today has measured body composition, recovery or sleep. It does reliably raise growth hormone — that part is measured. Whether raising it produces the outcomes people are after has not been studied in people." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "A five-amino-acid synthetic peptide acting as a selective agonist at the ghrelin (growth hormone secretagogue) receptor. Considered the most selective growth hormone secretagogue in its class, with minimal reported effect on cortisol and prolactin relative to older secretagogues. Principal human study: a 1999 trial in 40 healthy men, administered intravenously. FDA has listed ipamorelin acetate among bulk substances that may present significant safety risks, citing a published trial with serious adverse events. No published human trial of the subcutaneous form used in current practice has measured body composition, recovery, or sleep outcomes." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Ipamorelin is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "kisspeptin",
    category: "SEXUAL & REPRODUCTIVE HEALTH",
    title: "Kisspeptin — the full review",
    subtitle: "REPRODUCTIVE SIGNALING PEPTIDE (KISSPEPTIN-10)",
    standfirst: "This is the deeper look behind the short version — how the reproductive hormone chain works, what the Imperial College trials measured, why kisspeptin-10 and kisspeptin-54 are not interchangeable, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Kisspeptin is a natural signaling peptide made in the hypothalamus that sits at the top of the reproductive hormone chain — it tells the brain to release GnRH (gonadotropin-releasing hormone), which sets the rest of the hormonal sequence in motion down to testosterone and estrogen. It is used by people interested in libido, sexual desire, and reproductive hormone signaling." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Low sexual desire", "Hospital studies at Imperial College London measured brain response to sexual stimuli."],
            ["Fertility support and ovulation triggering", "The strongest evidence, from IVF trials — using a longer form given intravenously."],
            ["Testosterone and reproductive hormone support", "Kisspeptin reliably raises LH; whether that translates to a durable testosterone effect is less settled."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Kisspeptin neurons in the hypothalamus are now understood to be the master regulator that triggers GnRH release, which in turn stimulates the pituitary to release luteinizing hormone (LH) and follicle-stimulating hormone (FSH) — the hormones that drive testosterone production in men and the ovulatory cycle in women. This places kisspeptin upstream of the entire reproductive hormone axis. Because of this position at the top of the hormonal chain, kisspeptin has also been studied for its direct effects on brain regions involved in sexual arousal and desire, separate from its role in the downstream hormone cascade." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "Hospital studies at Imperial College London have measured brain response to sexual stimuli in people given kisspeptin, providing limited but real human evidence for a role in sexual desire." },
          { type: "para", text: "Kisspeptin reliably raises LH in these studies, but whether that translates into a durable testosterone or reproductive hormone effect is less settled. The strongest evidence for kisspeptin comes from fertility and IVF trials, where a longer-acting form given intravenously has been used to trigger ovulation — a different form and route from what is typically offered for libido or hormone-support use, and a distinction worth keeping in mind when interpreting the evidence." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“All the kisspeptin evidence applies to any form of the peptide.” The strongest fertility evidence comes from IVF trials using a longer form (kisspeptin-54) given intravenously — not the same as kisspeptin-10, which is what is typically offered outside a fertility clinic; kisspeptin-10 and kisspeptin-54 are not interchangeable.",
            "“It's a proven testosterone booster.” Kisspeptin reliably raises LH in studies, but whether that produces a durable testosterone benefit is less settled.",
            "“It's approved for libido or fertility use.” Kisspeptin has never been approved for any use, in any country.",
            "“It has nothing to do with anti-doping rules.” Kisspeptin is named on the WADA Prohibited List, which is a real consideration for anyone in tested sport.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with a hormone-sensitive cancer — prostate, breast, ovarian or endometrial.",
            "Anyone being treated with a GnRH agonist or antagonist, for any reason.",
            "Anyone trying to conceive or on fertility treatment who is not under the care of a fertility specialist.",
            "Anyone with a hormone or pituitary disorder, and anyone in tested sport.",
          ] },
          { type: "para", text: "Competitive athletes: Kisspeptin is named on the WADA Prohibited List. Anyone in tested sport should treat this as disqualifying for use, regardless of the intended purpose." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved anywhere. The human research is real but early. Mostly in controlled research settings. Being studied by serious researchers is not the same as being established as a treatment." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Kisspeptin-10 is the fragment most often used outside fertility-clinic settings; kisspeptin-54 is a longer-acting form used in IVF protocols. Sits upstream of GnRH in the reproductive hormone cascade, making it the regulator that initiates the entire downstream hormone sequence. Human brain-imaging and sexual-response studies conducted at Imperial College London. Longer-acting kisspeptin-54, given intravenously, has been used in IVF trials to trigger ovulation. Named on the WADA Prohibited List." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Kisspeptin is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "kpv",
    category: "INFLAMMATION & IMMUNE DEFENSE",
    title: "KPV — the full review",
    subtitle: "TRIPEPTIDE FRAGMENT OF ALPHA-MSH",
    standfirst: "This is the deeper look behind the short version — how alpha-MSH signalling works, what the research actually showed, the difference between capsule, injection and cream, common misunderstandings, who it is not for in full, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "KPV is a three-amino-acid piece of alpha-melanocyte-stimulating hormone (alpha-MSH), a natural hormone the body uses in part to help keep inflammation in check. It is the smallest active fragment of that larger molecule." },
          { type: "para", text: "It is used by people dealing with gut inflammation, inflammatory skin conditions, and general inflammatory load, and is supplied as capsules, injections, or creams depending on the target." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Gut inflammation and colitis", "Some have used it for this. Not tested in people."],
            ["Inflammatory skin conditions", "Some have used it for this. Not tested in people."],
            ["General anti-inflammatory support", "Extends the mechanism beyond what has been tested."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Alpha-MSH has anti-inflammatory activity separate from its better-known role in skin pigmentation, and KPV represents the smallest fragment of the molecule shown to retain that anti-inflammatory activity in laboratory and laboratory research, without the pigmentation-related effects of the full hormone." },
          { type: "para", text: "The proposed mechanism involves modulating immune-cell activity and inflammatory signaling pathways, which is the basis for its use in both gut and skin inflammatory contexts — different tissues, but the same underlying immune-modulation concept." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The main line of evidence for KPV comes from laboratory research into inflammatory bowel disease, where it has been studied as a potential anti-inflammatory agent for gut conditions. Inflammatory skin conditions have similarly been studied in laboratory research." },
          { type: "para", text: "A broader use for general anti-inflammatory support is sometimes proposed, but this extends the mechanism beyond what has actually been tested — no human clinical trial of KPV, for any use, has been published." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's been shown to work in people with IBD.” The gut-inflammation evidence comes from laboratory research into inflammatory bowel disease; no human trial of KPV for gut inflammation has been published.",
            "“It's the same as alpha-MSH, just weaker.” KPV is the smallest fragment shown to retain alpha-MSH's anti-inflammatory activity in laboratory models, without triggering the pigmentation effects of the full hormone.",
            "“A July 2026 advisory vote means it's approved.” An advisory committee recommendation for a compounding list is advisory only; it does not change what is known about whether KPV works in people, and it is not an approval.",
            "“It can be used broadly for any inflammatory condition.” The tested uses are specific — gut and skin inflammation in laboratory research — and a general anti-inflammatory claim extends beyond what has actually been studied.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone pregnant, breastfeeding or trying to conceive.",
            "Anyone with an active cancer diagnosis.",
            "Anyone with an autoimmune or immune-mediated condition — the mechanism is immune modulation.",
            "Anyone who would delay or replace a proven treatment for inflammatory bowel disease or a skin condition. Competitive athletes: KPV is not currently named on the WADA Prohibited List. Athletes in tested sport should still confirm current status with their sport's anti-doping authority before use, given the contamination risk inherent to compounded peptide products.",
          ] },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved. Recommended by an advisory panel in July 2026 for wound healing and inflammatory conditions; advisory, not approval. Not tested in people. The July vote does not change what is known about whether it works in people." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "A three-amino-acid fragment (lysine-proline-valine) derived from the C-terminal end of alpha-melanocyte-stimulating hormone (alpha-MSH). Retains alpha-MSH's anti-inflammatory activity in laboratory models without the pigmentation effects of the full hormone. Primary evidence: laboratory research into inflammatory bowel disease. Recommended by an advisory committee in July 2026 for a compounding list, for wound healing and inflammatory conditions — an advisory recommendation, not an approval. No published human clinical trial exists for any proposed use." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. KPV is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "ll-37",
    category: "INFLAMMATION & IMMUNE DEFENSE",
    title: "LL-37 — the full review",
    subtitle: "CATHELICIDIN ANTIMICROBIAL PEPTIDE",
    standfirst: "This is the deeper look behind the short version — where LL-37 comes from in the body, why researchers are now studying ways to block it rather than add more of it in some skin conditions, what the wound-healing trials actually found, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "LL-37 is the only cathelicidin-family antimicrobial peptide the human body makes. It starts out as a larger precursor protein, packaged inside immune cells called neutrophils and also produced by skin cells and the lining of the airway, gut, and urinary tract. When needed, an enzyme clips off the active 37-amino-acid piece — LL-37 — as part of the body's fast-acting, first-line immune defense. What is sold today under the name LL-37 is a synthetic replica of that natural peptide, offered as an injectable vial or, less often, a compounded topical cream, marketed for wound healing, immune support, and general skin health. None of this is FDA-reviewed, and the skin-condition marketing in particular runs against a substantial body of research pointing the other way." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Wound healing (venous leg ulcers, diabetic foot ulcers)", "The only use with real controlled human data; the largest trial missed its main endpoint, with benefit limited to a smaller subgroup."],
            ["Antimicrobial and immune defense support", "Well demonstrated in test-tube studies; no human trial shows it reduces infection risk or treats an active infection."],
            ["Skin conditions — psoriasis, rosacea, atopic dermatitis", "The research literature links elevated, not deficient, LL-37 to these conditions; researchers are studying ways to block it, not add more."],
            ["General immune support or wellness", "No human trial supports this framing; rests on extrapolating from LL-37's normal immune role."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "LL-37's antimicrobial action comes from its structure: a positively charged shape that lets it insert into and destabilize the membranes of bacteria, fungi, and some viruses, causing them to break down. It is also chemotactic — it recruits immune cells to a site of infection or injury and promotes new blood vessel growth and skin-cell migration, the proposed basis for a wound-healing effect." },
          { type: "para", text: "A separate, less-marketed mechanism matters just as much: LL-37 binds fragments of the body's own DNA and RNA released from damaged cells, and those complexes can trigger a strong inflammatory immune response. This is the same pathway implicated in driving, not resolving, several inflammatory and autoimmune skin conditions — a mechanism worth understanding before treating LL-37 as a simple immune booster." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The body's own, naturally produced LL-37 is very well studied — a large, decades-deep literature on its role in immune defense, wound biology, psoriasis, rosacea, atopic dermatitis, lupus, and other conditions. That is legitimate science, but it is research on a peptide the body already regulates tightly, not evidence that giving someone additional, externally administered LL-37 is beneficial." },
          { type: "para", text: "Administered synthetic LL-37 in humans has been tested in a small, narrow set of controlled trials — essentially four, all in wound care, totaling roughly 200 people. The largest and most rigorous of these, a 149-person trial of topical LL-37 for venous leg ulcers, did not meet its primary healing endpoint in the overall study population; a benefit only appeared in a smaller, post-hoc subgroup of larger wounds. Two smaller trials showed modest, inconsistent positive signals. No trial has tested LL-37 for immune support, antimicrobial defense, or any skin condition beyond wound care." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's natural, so my body already makes it, and more must be safe.” The clearest human disease evidence shows elevated, dysregulated LL-37 driving inflammation in psoriasis, rosacea, and lupus — closer to a case of too much than too little.",
            "“It helps psoriasis and rosacea.” The evidence points the other way: both conditions show abnormally high LL-37 activity in affected skin, and researchers are pursuing ways to block its signaling as a treatment direction.",
            "“There's strong clinical proof it heals wounds.” The largest, most rigorous trial did not meet its primary healing endpoint in the overall study population; the positive signal that exists is limited to a smaller subgroup.",
            "“It's a cancer-fighting immune peptide.” The research literature describes genuinely mixed, tissue-specific effects — appearing to promote tumor growth in some cancer types while suppressing it in others.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with an autoimmune or autoinflammatory condition, including psoriasis, lupus, or rosacea.",
            "Anyone with a personal or strong family history of cancer, or an undiagnosed mass.",
            "Pregnant or breastfeeding patients, or anyone trying to conceive.",
            "Anyone with an active infection who needs established antimicrobial treatment rather than an unproven alternative.",
            "Anyone sourcing product from an unverified research-use-only vendor.",
            "Competitive athletes subject to WADA testing. Competitive athletes: LL-37 is not currently named specifically on the WADA Prohibited List, but",
          ] },
          { type: "para", text: "WADA's S0 category (\"Non-Approved Substances\") prohibits, at all times, any substance without current approval by a governmental health authority for human therapeutic use — a category that has been applied to other unapproved peptides. Athletes in tested sport should confirm current status with their sport's anti-doping authority before use." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved, and its compounding status is unsettled. Not on FDA's active compounding lists — it sits in a withdrawn-nomination limbo, and a future FDA advisory review is reportedly expected before early 2027. The human trial record is small, and its flagship trial missed its goal. Roughly 200 people studied across four small wound-care trials; the largest, most rigorous one did not meet its primary endpoint in the overall population. For skin conditions specifically, the research points toward blocking LL-37, not adding more of it." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "The only human cathelicidin, cleaved from precursor protein hCAP-18 by proteinase 3 in neutrophils; also expressed by skin and epithelial cells. Sits in FDA's \"nominated but withdrawn\" table for 503A bulk compounding substances; not on the active Category 2 significant-safety-risk list either. Industry trackers report FDA-identified concerns from an earlier nomination review: limited human safety data, possible immunogenicity, reproductive findings in nonclinical research, and a tumor-promotion signal — not independently confirmed against a primary FDA document in this research pass. The largest controlled human trial (topical, venous leg ulcers, n=149) did not meet its primary efficacy endpoint in the full study population. Peer-reviewed research links elevated (not deficient) LL-37 to the pathology of psoriasis and rosacea, and describes tissue-specific pro-and anti-tumor effects across different cancer types." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. LL-37 is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "nad",
    category: "MITOCHONDRIAL & CELLULAR ENERGY",
    title: "NAD+ — the full review",
    subtitle: "CELLULAR ENERGY COENZYME",
    standfirst: "This is the deeper look behind the short version — what the human trials of injected NAD+ actually show, why infusion speed matters, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "NAD+ (nicotinamide adenine dinucleotide) is not a peptide or a novel compound — it is a coenzyme every cell already makes and uses constantly, central to how a cell converts food into usable energy and required by enzymes that repair damaged DNA and regulate cell-aging processes. The body builds it from dietary vitamin B3 and related precursor molecules, as part of that vitamin's core biological job." },
          { type: "para", text: "What is offered clinically is the injected or IV form — a compounded preparation held to a different regulatory standard than an over-the-counter oral supplement such as nicotinamide riboside or nicotinamide mononucleotide. NAD+ levels measured in some tissues do appear to fall with age and with poor sleep, alcohol use, and chronic illness, which is the basis of a large, genuinely active field of aging biology — but a large 2026 analysis of blood NAD+ across seven cohorts found the molecule \"surprisingly stable\" and did not consistently fall with age the way the popular narrative assumes, a newer, unsettled finding that complicates the simple \"NAD+ declines, so replace it\" premise." },
          { type: "para", text: "Human trials of the injected form are limited, and infusion speed matters — going too fast is the most common reason people feel uncomfortable during a session, which is why infusions are typically given slowly, over several hours." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Energy and general vitality", "Solid underlying cell biology, but few controlled human trials exist of the injected form specifically."],
            ["Cognitive clarity", "One small peer-reviewed trial reported a benefit — a real but genuinely limited, unreplicated finding."],
            ["Anti-aging and longevity", "No controlled human trial of the injected form has tested this outcome, and the underlying premise that NAD+ reliably declines with age has itself been challenged by newer research."],
            ["Addiction and withdrawal support", "The most substantial human dataset for injected NAD+ of any use, but built on an uncontrolled, multi-ingredient chart review with low follow-up response."],
            ["Exercise performance or recovery", "No controlled human trial of IV or injected NAD+ for this use has been identified; promotional material traces to clinic marketing, not published research."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "NAD+ and its reduced partner, NADH, form the cell's central electron shuttle: in every mitochondrion, this pair cycles constantly to move electrons through the chain that generates" },
          { type: "para", text: "ATP, the cell's energy currency. NAD+ is also consumed as a substrate by two enzyme families tied to DNA repair and cell regulation — sirtuins, studied heavily in longevity research, and PARPs, which detect and help repair damaged DNA, using up NAD+ each time they act." },
          { type: "para", text: "Chronic DNA damage or metabolic stress can drive PARP activity up, one proposed mechanism for age-or stress-related decline in some tissues." },
          { type: "para", text: "The gap between this real biology and the infusion claim is where the marketing gets ahead of the evidence. NAD+ is a large, charged molecule not expected to cross an intact cell membrane on its own, and no clear, established transporter moves whole extracellular NAD+ into human cells at meaningful scale; a small pilot pharmacokinetic study found plasma clearance patterns consistent with NAD+ being broken down outside cells before it would ever reach the inside of one. A 2026 randomized pilot trial found that IV nicotinamide riboside, a precursor, reliably raised measured blood NAD+, while IV NAD+ itself, unexpectedly, did not show the same clear elevation — a finding that directly cuts against the logic used to justify infusing the finished molecule rather than a precursor." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "FDA's own review of nominated indications located only five qualifying human studies of injected or oral NAD across nearly six decades, from 1961 to 2019: 124 patients given IV NAD for addiction, 12 given oral NADH for chronic fatigue, and a handful more for Parkinson's disease — a genuinely small evidence base for a widely marketed treatment." },
          { type: "para", text: "The most-cited human data, for addiction and withdrawal support, comes from a retrospective chart review of about 60 patients given IV NAD+ as one part of a multi-ingredient protocol — not randomized, not blinded, with no control group, and only 45% survey follow-up at 12 to 20 months. A statistically significant drop in withdrawal scores by day 5 was reported, but because NAD+ was one part of a larger protocol, its individual contribution was never isolated." },
          { type: "para", text: "A 2026 systematic review of 113 NAD+ studies found zero controlled human trials of IV NAD+ for anti-aging purposes. One small, peer-reviewed study reported IV NAD+ improved measures of cognitive performance in human subjects — a genuine but single, unreplicated finding that should be read as preliminary rather than established." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“IV NAD+ is proven to slow or reverse aging.” No controlled human trial of IV NAD+ has ever tested an anti-aging outcome — a 2026 systematic review of 113 NAD+ studies found zero. The premise that NAD+ reliably declines with age was itself challenged by a large 2026 cross-cohort blood analysis finding levels \"surprisingly stable.\"",
            "“It's basically a vitamin-related molecule, so it's safe at any dose or infusion speed.” FDA's own review specifically flags that IV NAD+ must be given slowly, over 6 to 8 hours, because a fast infusion produces chest tightness, stomach cramping, headache, and shortness of breath; separately, FDA has received adverse event reports of severe chills, shaking, vomiting, and fatigue tied to contaminated product.",
            "“The oral NAD+ research proves the IV version works, since it's the same molecule.” Oral precursor research and IV NAD+ research are different literatures studying different products, bioavailability, and endpoints. The mechanism used to justify IV NAD+ — direct cellular restocking — is itself in question: NAD+ is a large polar molecule not expected to cross cell membranes intact, and a 2026 pilot trial found IV NR raised measured blood NAD+ more reliably than IV NAD+ itself did.",
            "“It's a prescription-grade, quality-controlled treatment because a clinic administers it.” FDA has directly warned that some compounders have used food-grade NAD+, material intended for supplements rather than sterile injection, to make IV products",
          ] },
          { type: "para", text: "— and has documented real consequences, including a warning letter after patients developed adverse reactions to product later found to contain high bacterial endotoxin levels." },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone unable to tolerate a slow, multi-hour infusion — going too fast is the most common reason people experience chest tightness, cramping, or headache during a session.",
            "Pregnancy or breastfeeding — no adequate human safety data exists for the injected or IV form.",
            "Cardiac history without prior discussion, or claustrophobia or limited time that makes a prolonged, symptomatic infusion risky.",
            "Anyone whose pharmacy cannot produce a current Certificate of Analysis for sterility and endotoxin testing on the specific lot being administered.",
            "Anyone being offered it specifically as an anti-aging or cognitive \"cure,\" rather than as an unproven adjunct.",
            "Anyone expecting established dosing, frequency, or long-term safety data for repeated infusions — these have not been systematically studied.",
          ] },
          { type: "para", text: "Competitive athletes: NAD+ does not appear on the WADA Prohibited List and is not treated as a banned or monitored substance by USADA. The practical caveats for a competing athlete are not doping-status ones: contamination or mislabeling risk from an unregulated compounded product is real, and any multi-ingredient NAD+ IV formula should be checked against the current Prohibited List ingredient-by-ingredient, since NAD+'s own clean status doesn't extend to whatever else is in the bag." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Not an approved medicine. FDA has twice declined to add it to a compounding bulks list on stability and toxicology grounds. Human outcome evidence for the injected form is limited. There is real science on NAD+ biology, far less on whether infusing it changes energy, cognition, ageing, or recovery — and a January 2026 warning letter documented three patients sickened by a contaminated infusion. Infusion speed matters: going too fast is the most common reason people feel unwell during a session, which is why infusions are given slowly." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "FDA has formally evaluated NAD+ for both the 503A and 503B compounding bulk-substance lists and declined both times, citing stability (pyrophosphate-linkage hydrolysis) and toxicology gaps; it currently sits in 503B \"Category 1 — Under Evaluation.\" A January 2026 FDA warning letter to a compounding firm documented three patients with adverse reactions to an NAD+ infusion later found to contain bacterial endotoxin at 3,360 EU/mL, following the company's own Class I recall months earlier. FDA has separately warned the compounding industry generally that some compounders have used food-grade NAD+ — material intended for supplements, not sterile injection — to make IV products. Oral NAD+ precursors, such as nicotinamide riboside and nicotinamide mononucleotide, are regulated as dietary supplements under a different framework than the injected or IV form, which sits in the compounding-drug lane FDA has twice reviewed unfavorably." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. NAD+ is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "oxytocin",
    category: "SEXUAL & REPRODUCTIVE HEALTH",
    title: "Oxytocin — the full review",
    subtitle: "NONAPEPTIDE NEUROHORMONE",
    standfirst: "This is the deeper look behind the short version — how the hospital use and the wellness use differ, what the trust and bonding research actually found, including a major replication failure, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Oxytocin is a hormone the body already makes — produced in the hypothalamus and released from the pituitary gland, most powerfully during labor, delivery, and breastfeeding, and in smaller pulses during touch, closeness, and orgasm, which has earned it the nickname \"the bonding hormone.\" As an FDA-approved hospital drug (brand names Pitocin and Syntocinon), it has one well-established job: given by IV or IM in a hospital, it causes the uterus to contract, which is why it's used to induce or strengthen labor and to control bleeding after delivery. What's offered at many wellness and peptide clinics today is a different product for a different purpose: a compounded nasal spray or subcutaneous injection, most often used for mood, social connection, or intimacy. It is the same molecule, but the dose, the route, and the reason for taking it have nothing to do with the FDA-approved hospital use — the approved use and the wellness use should not be assumed to carry the same evidence or the same safety record." },
          { type: "para", text: "The research behind the wellness use is real but considerably newer and more mixed than the decades of hospital experience behind the approved drug, a distinction worth understanding upfront, since \"FDA-approved\" as a hospital drug does not extend to a compounded product sold for an unrelated purpose." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "EVIDENCE       WHAT THAT MEANS"], rows: [
            ["Induction or augmentation of labor with a medical indication", "FDA-approved   A core approved indication, IV only, in a hospital setting, backed by decades of clinical use. Not approved for elective induction."],
            ["Control of postpartum bleeding", "FDA-approved   The other core approved indication, given by IV infusion or a single IM dose after delivery of the placenta; standard of care."],
            ["Core social-communication symptoms in autism spectrum disorder", "Human trials   The most heavily studied wellness-adjacent use. Small early trials showed modest positive signals, but the largest, best-powered trial found no significant benefit over placebo."],
            ["Bonding, trust, and social connection", "Limited        An early trust finding has since failed a rigorous, human data     well-powered replication; meta-analyses find only small, inconsistent effects."],
            ["Anxiety and stress calming", "Limited        Small individual trials exist, but a pooled analysis human data     found no significant combined effect for this indication specifically."],
            ["Romantic or sexual intimacy", "Theoretical    The underlying research used lab tasks like trust games and emotion-recognition tests with strangers, not romantic or sexual outcomes."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "As the approved obstetric drug, oxytocin works peripherally: it binds receptors on uterine smooth muscle — which becomes far more receptor-dense near term — to trigger contraction, and it acts on cells around the milk ducts to trigger letdown during breastfeeding. None of that requires the drug to reach the brain." },
          { type: "para", text: "The wellness use depends on a different, mechanistically shakier bet: reaching brain circuits involved in social behavior. Oxytocin doesn't cross an intact blood-brain barrier in meaningful amounts from ordinary circulating blood, which is why wellness use is delivered intranasally, on the idea that it can travel to the brain along the olfactory and trigeminal nerves. There is real evidence this pathway exists — laboratory tracer research found labeled oxytocin given intranasally does reach the brain, and a human study measuring blood and cerebrospinal fluid together after an intranasal dose found brain-fluid oxytocin rose, but slowly, with no correlation to blood levels. But reaching the brain in a measurable, unusual way is not the same as reaching it in amounts large enough, reliably enough, to change behavior, and the dose-response relationship is not a simple more-is-better curve — some studies find an effect at one dose but not clearly at doses in between." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "Obstetric use is one of the most established interventions in modern medicine: standard hospital practice for decades, recommended by the World Health Organization as a first-line uterotonic, with dosing, contraindications, and major risks well characterized from large-scale clinical experience. The social and bonding literature is a large academic field, launched substantially by a highly influential 2005 trust-game study reporting that a single intranasal dose sharply increased trust in a financial game. That field has an unusually well-documented replication problem: a well-powered, pre-registered direct replication of the original finding found no effect on trusting behavior; two separate attempted replications of another widely cited trust paradigm both came back null; and a 2013 meta-analysis found effect sizes more modest than popular coverage suggests, with only the autism subgroup reaching significance among clinical populations." },
          { type: "para", text: "The single largest, best-powered trial ever run on this question — 290 children and adolescents with autism, over 24 weeks, published in the New England Journal of Medicine — found no significant difference from placebo on its primary outcome, despite autism being the subgroup where earlier, smaller studies had shown the field's best signal. That doesn't mean every effect is zero; meta-analyses still find small positive signals in aggregate. It does mean the certainty implied by wellness-clinic marketing outruns the actual state of the science." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's the same approved drug just for a different purpose.” The molecule is the same, but the FDA approval covers only IV/IM administration for labor and postpartum bleeding control, in a hospital, under medical supervision. Intranasal or subcutaneous use for mood or bonding is a different route, dose range, population, and outcome measure entirely.",
            "“It's the 'love hormone,' so a nasal spray will make you bond with your partner.” The 2005 study that popularized this idea used a laboratory trust game with strangers, not romantic bonding, and its central finding failed to replicate in a large, wellpowered, pre-registered 2020 study. Meta-analyses find effects that do exist are small and depend heavily on context and individual history.",
          ] },
          { type: "list", items: [
            "“It's a natural hormone the body already makes, so it's safe to use however you want.” The FDA label for the approved drug carries real, well-documented risks even at approved doses — uterine hyperstimulation and rupture with improper administration, and water intoxication from oxytocin's antidiuretic effect. Compounded wellness formulations have no FDA-reviewed dosing.",
            "“A nasal spray gets oxytocin straight into the brain, so it works better than a shot.” There is genuine evidence for a direct nose-to-brain pathway, but the amount reaching the brain this way is small, the timing is unusual, and the dose-response relationship is not a simple more-equals-more curve. Getting into the brain and reliably changing behavior are two different claims, and only the first has solid support.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone hoping to self-induce or speed up labor at home or outside a hospital — the approved drug must be given IV with continuous medical supervision.",
            "Significant cephalopelvic disproportion, unfavorable fetal position, placenta previa, vasa previa, cord presentation, or another condition where vaginal delivery itself is contraindicated.",
            "Replacing established, evidence-based treatment for anxiety, depression, or relationship difficulties.",
            "Heart, kidney, or fluid-balance conditions, given the drug's antidiuretic effect, particularly at higher or prolonged doses.",
            "Known hypersensitivity to oxytocin.",
            "Pregnancy outside obstetric care, or sourcing product from an unlicensed seller rather than a licensed pharmacy.",
          ] },
          { type: "para", text: "Competitive athletes: Oxytocin does not appear to be named on the WADA Prohibited List and does not fit the biology of WADA's peptide-hormone category, which targets growth-hormone-axis and gonadotropin-related substances rather than oxytocin. This is a \"not found\" rather than a definitively confirmed clearance, since the current list could not be checked line-by-line for this review; a competing athlete should verify current status directly with USADA or Global DRO before use." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Approved products exist, for childbirth, not for wellness. Approved for decades for obstetric use, IV/IM only, in a hospital. The wellness uses are a different thing entirely. The foundational 2005 trust-game finding failed a large, well-powered 2020 replication, and the best-powered confirmatory trial, 290 children with autism, found no significant benefit on its primary outcome. The same molecule being approved for one purpose says nothing about a completely different one — and here, the newer purpose has already had its founding result challenged." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Oxytocin injection carries current, active FDA-approved labeling under both a generic product (NDA 018248) and the brand Pitocin (NDA 018261), for IV/IM obstetric use only. The label is explicit that oxytocin is not indicated for elective labor induction — only for medically indicated induction, augmentation, or postpartum bleeding control. Because oxytocin is a component of an already-FDA-approved drug, it is compounding-eligible in a way several other compounds in this catalog are not — a genuinely different regulatory posture, though one that does not extend FDA review to a compounded product's dose, route, or claimed use. A separate trust paradigm with an original reported effect size far larger than typical also failed replication in two independent 2015 studies, reinforcing the pattern seen with the founding 2005 result. No FDA warning letter reviewed for this catalog named oxytocin specifically, unlike several other compounds here — likely reflecting its approval history as a lower enforcement priority rather than an endorsement of the wellness use." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Oxytocin is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "selank",
    category: "COGNITIVE FUNCTION & NEUROPROTECTION",
    title: "Selank — the full review",
    subtitle: "TUFTSIN-DERIVED SYNTHETIC PEPTIDE",
    standfirst: "This is the deeper look behind the short version — what the Russian anxiety trials actually show, how that evidence compares to FDA-standard trials, common misunderstandings, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Selank is a synthetic seven-amino-acid peptide engineered in Russia in the 1990s as a chemically stabilized analog of tuftsin, a naturally occurring fragment of the antibody protein" },
          { type: "para", text: "IgG involved in normal immune signaling. It was designed to resist the enzymes that break down natural tuftsin quickly, extending its activity in the body. It is most often used as an intranasal spray for calm and stress resilience, marketed as a non-sedating alternative to a benzodiazepine, though gray-market vendors also sell injectable versions." },
          { type: "para", text: "Selank is a licensed prescription medicine in Russia, developed and studied through Russian government-affiliated pharmacology institutes, though it has never been reviewed by the FDA and carries no approval, in any form, in the United States. It sits in FDA's \"nominated but withdrawn\" compounding-substance table, where FDA states it lacks important information regarding safety issues raised by Selank administered to humans." },
          { type: "para", text: "The human research behind it is real but modest — a handful of small Russian trials, developed and tested almost entirely by the same government-affiliated institutions that created the compound, published mostly in Russian-language journals, without independent replication in the West." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "EVIDENCE       WHAT THAT MEANS"], rows: [
            ["Anxiety, including generalized anxiety", "Human trials   Small Russian trials report relief over 2-4 weeks, with no outside replication."],
            ["Stress resilience", "Limited        Overlapping data from the same trial programs human data     touches on stress symptoms, but no dedicated trial isolates this as a primary endpoint."],
            ["Cognitive focus", "Some have used it for this. Not tested in people."],
            ["Immune modulation", "Some have used it for this. Not tested in people."],
            ["Addiction and withdrawal support", "Some have used it for this. Not tested in people."],
            ["Depression", "Theoretical       Occasionally marketed on the strength of its BDNF and serotonergic hypotheses, but no dedicated human depression trial exists."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Selank's proposed mechanisms are derived almost entirely from laboratory research, not human mechanistic research. The longest-standing claim is that it inhibits enzymes that break down the body's own opioid-like enkephalins, prolonging their activity, proposed as distinct from how a benzodiazepine binds its receptor. In-vitro and laboratory research also report Selank alters GABA-related gene expression and interacts with serotonin signaling, and laboratory research report it regulates brain-derived neurotrophic factor (BDNF) in regions tied to memory and stress. As a tuftsin analog, laboratory research also report immune and antiviral effects." },
          { type: "para", text: "How well-established this is matters for setting expectations: not very, by the standard patients should expect elsewhere in this catalog. There is no human-confirmed mechanism — these hypotheses come from a small, overlapping set of Russian labs, have not been confirmed with human neuroimaging or receptor studies, and are at points in tension with each other. This should be described as a proposed, laboratory-supported story, not settled pharmacology." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "Total human exposure is small and narrow. Core trials are Russian studies of generalized anxiety and related conditions, typically a few dozen patients each — one frequently cited trial enrolled 20 patients over about two weeks. Cumulative published human subjects across all" },
          { type: "para", text: "Selank trials appears to be in the low hundreds at most, nearly all recruited in Russia, with follow-up almost always days to a few weeks. Virtually all research traces to a tight cluster of Russian, government-affiliated institutions that both developed the compound and ran the trials evaluating it — a structural independence concern. Human trials are generally small, open-label or loosely controlled, some comparing" },
          { type: "para", text: "Selank to an active comparator rather than placebo, published mainly in Russian-language journals with details not consistently auditable by outside reviewers." },
          { type: "para", text: "No independent Western replication has been identified. The broader English-language literature shows essentially no non-Russian trials of Selank, and no FDA, EMA, or other major regulator has conducted a clinical review of its efficacy data." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's approved and used safely in Russia, so it's proven.” Selank is approved only in Russia, by Russia's regulator, based on trials run almost entirely by the same government-affiliated institutions that developed it, published mostly in Russian, without independent outside replication — a fundamentally different bar than FDA or EMA approval.",
            "“It's non-addictive with no withdrawal, unlike benzodiazepines.” Overstated. It's true Selank doesn't bind the same receptor complex as a benzodiazepine, and no formal physical-dependence syndrome has been documented — but that rests on short trials of days to a few weeks, with no long-term human discontinuation data.",
            "“It's basically a benzodiazepine alternative with no downsides.” Its mechanism isn't well-established, its human safety database is thin — FDA itself says it lacks important human safety information — and because it's unapproved and unregulated in the US, purity and dosing accuracy aren't guaranteed.",
            "“Because it's a natural peptide fragment, it's inherently gentle and safe.” Being structurally related to a naturally occurring immune peptide doesn't exempt a synthetic,",
          ] },
          { type: "para", text: "chemically modified analog from needing its own safety evaluation; FDA specifically flags immunogenicity and peptide-related impurity risk for compounded Selank." },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone seeking a substitute for established anxiety treatment or psychotherapy.",
            "Pregnancy or breastfeeding, or trying to conceive.",
            "Children and adolescents — no pediatric safety or efficacy data exists.",
            "Anyone with a known or suspected autoimmune condition, given its immune-signaling mechanism and FDA's flagged immunogenicity concern.",
            "Anyone relying on it as a substance-use-disorder treatment — no human evidence supports this use.",
            "Competitive athletes subject to WADA or USADA testing.",
          ] },
          { type: "para", text: "Competitive athletes: Selank is not individually named on the WADA Prohibited List, but it is reasonably treated as falling under WADA's S0 (\"Non-Approved Substances\") category — prohibited at all times — because its only marketing approval is in Russia, not a regulator recognized for this purpose by most WADA-signatory countries. Athletes should check Global DRO or contact USADA directly and assume prohibited status by default rather than assuming permissibility from an absent name-specific listing." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Approved in Russia, never reviewed by FDA. A licensed anxiety medicine there, developed and tested almost entirely by the same government-affiliated institutions, without independent Western replication. The best human evidence supports anxiety relief specifically. The cognitive-enhancement and stress-resilience marketing outruns what's actually been tested, which rests on laboratory research. Approved somewhere is not the same as proven by the standard this practice otherwise holds itself to." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Selank is a stabilized synthetic analog of tuftsin, a naturally occurring immune-signaling fragment of the antibody IgG, developed at Russia's Institute of Molecular Genetics. It is licensed by Russia's regulator, Roszdravnadzor, as a prescription intranasal anxiolytic and studied mainly through the V.V. Zakusov Research Institute of Pharmacology. FDA's compounding-substance review flags a specific concern: potential immunogenicity and peptide-related impurities for compounded Selank, alongside a lack of human safety information. No formal physical-dependence syndrome has been documented in the short, days-to-weeks trials available, though this has not been studied systematically over longer use." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Selank is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "semaglutide",
    category: "METABOLIC & FAT LOSS",
    title: "Semaglutide — the full review",
    subtitle: "GLP-1 RECEPTOR AGONIST",
    standfirst: "",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Semaglutide is a lab-made copy of a natural gut hormone called GLP-1, which the body releases after eating. It has been chemically modified — including an amino acid substitution and a fatty-acid side chain that binds to albumin in the blood — so that it remains active for about a week instead of being broken down within minutes. It lowers blood sugar, slows how quickly the stomach empties, and signals appetite centers in the brain." },
          { type: "para", text: "It is a fully FDA-approved prescription medicine, marketed under several brand names, with an initial US approval in 2017. It has since been evaluated in randomized trials involving tens of thousands of people, including several trials of thousands of participants followed for three to four years — a scale of evidence well beyond most compounds discussed on this site." },
          { type: "para", text: "Semaglutide is also available as a separate compounded preparation. The shortage that once justified widespread compounding was declared resolved in 2025, and the compounding enforcement-discretion window has since closed; what a patient actually receives — the FDA-approved product or a compounded version — depends on which pathway a clinic or pharmacy is offering." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Type 2 diabetes", "One of the approved uses, studied in large placebo-controlled trials; a meaningful reduction in HbA1c is typically seen alongside weight loss."],
            ["Long-term weight management", "Approved for adults with obesity, or overweight plus a weight-related condition, and separately for adolescents 12 and older with obesity; the effect is smaller in people who also have type 2 diabetes."],
            ["Reducing cardiovascular events", "Shown to lower the combined rate of heart attack, stroke, and cardiovascular death in a large, multi-year outcome trial in adults with cardiovascular disease and obesity or overweight."],
            ["Slowing chronic kidney disease progression in adults with type 2 diabetes", "A dedicated outcome trial found a reduced rate of major kidney-disease progression; this indication does not extend to patients without type 2 diabetes."],
            ["Knee osteoarthritis pain in people with obesity", "One randomized trial found reduced knee pain alongside weight loss; it remains unclear how much of the benefit is a specific drug effect versus a general consequence of losing weight off a weight-bearing joint. Not an approved indication."],
            ["Reducing alcohol craving and heavy drinking", "A small randomized trial in people not seeking treatment for alcohol use found reduced craving and fewer heavy-drinking days over nine weeks at the lowest clinical dose. The investigators described the finding as preliminary. Not an approved indication."],
            ["Slowing Alzheimer's disease or cognitive decline", "Tested at scale in more than 3,800 people with mild cognitive impairment or early Alzheimer's disease; the trials improved certain disease-related biomarkers but did not meet their primary endpoint of delaying disease progression."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "The intestine naturally releases GLP-1 whenever food arrives. GLP-1 does three things at once: it tells the pancreas to release insulin, but only when blood sugar is actually high; it tells the pancreas to stop releasing the hormone that pushes blood sugar up; and it tells the stomach to empty more slowly and the brain that the body is full." },
          { type: "para", text: "Natural GLP-1 breaks down within minutes. Semaglutide is that same signal rebuilt so the body cannot clear it quickly — one weekly injection (or a daily tablet, co-formulated with an absorption enhancer) keeps the fullness and blood-sugar signal active for roughly a week at a time." },
          { type: "para", text: "The effect lasts only as long as the medicine is taken — it functions as an ongoing treatment for a chronic condition rather than a one-time reset. Most common side effects, such as nausea and constipation, are the same mechanism turned up too high, which is why dosing is increased gradually over months." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "Semaglutide has one of the largest clinical trial evidence bases of any compound discussed on this site: FDA approval across several indications rests on separate randomized, controlled trial programs that together randomized tens of thousands of people, including multi-year outcome trials that measured hard endpoints such as cardiovascular events and kidney disease progression, not just weight or blood sugar. Effectiveness varies meaningfully by population. Weight-loss results reported in trials of people with type 2 diabetes have been smaller than in trials of people without diabetes, and some approvals — including a 2025 approval for a form of fatty liver disease — rest on an accelerated pathway using a biomarker endpoint, with confirmatory long-term outcome data still pending. None of this trial evidence transfers to compounded semaglutide, which by definition is not the specific product that was studied. Some other investigated uses have far thinner evidence, ranging from a single small trial to no dedicated trial at all, and a large randomized trial specifically testing semaglutide for slowing Alzheimer's disease did not meet its primary endpoint, despite improving certain disease-related biomarkers." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“Compounded semaglutide is the same drug as the approved product, just cheaper.” FDA has stated this claim is false and has taken enforcement action against sellers making it. Compounded versions are made by a pharmacy from bulk material and",
          ] },
          { type: "para", text: "have not been reviewed by FDA, and some formulations use different salt forms than the approved drug." },
          { type: "list", items: [
            "“If it worked in the trials, that proves the compounded version works too.” None of the tens of thousands of people randomized in semaglutide trials received a compounded product — every efficacy figure belongs to the FDA-approved product made under approved manufacturing controls.",
            "“Microdosing gives the same benefits with fewer side effects.” There is no trial of sub-therapeutic semaglutide dosing in metabolically healthy people; every efficacy result comes from full-titration dosing in people who met specific trial entry criteria.",
            "“It's approved to prevent or slow Alzheimer's disease.” A large randomized trial tested semaglutide for this specific purpose and did not meet its primary endpoint, despite improving certain disease-related biomarkers.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with a personal or family history of medullary thyroid cancer, or MEN 2 — an absolute contraindication.",
            "Anyone with a serious allergic reaction to semaglutide or its ingredients.",
            "Pregnant or breastfeeding patients, or anyone trying to conceive — the long half-life means it should be stopped well before a planned pregnancy.",
            "Anyone with a history of pancreatitis or gallbladder disease, without discussing it first.",
            "Anyone scheduled for a procedure requiring general anesthesia or sedation, without informing the anesthesia team in advance.",
            "Anyone sourcing product from an unverified online seller rather than a licensed pharmacy.",
          ] },
          { type: "para", text: "Competitive athletes: GLP-1 medicines including semaglutide are not currently prohibited in sport, and a therapeutic use exemption is not required to use an FDA-approved product as prescribed. Semaglutide has, however, been placed on WADA's Monitoring Program, meaning testing laboratories track its use even though it is not a violation — and the more practical risk for athletes lies in sourcing an unapproved or compounded product of uncertain content rather than in the approved medicine itself." },
          { type: "para", text: "Approved product, or a compounded preparation — and the difference matters" },
          { type: "para", text: "This is an FDA-approved medicine. It is available as the manufacturer's own approved product, and — separately — as a compounded preparation. Which one is being offered is always stated plainly. If the approved product is right, that is what gets prescribed:" },
          { type: "list", items: [
            "The manufacturer's pen or vial. Reviewed by the FDA for safety, effectiveness and quality, exactly as labeled.",
            "Filled at a licensed pharmacy. Dispensed from your prescription like any other approved medicine. If a compounded preparation is clinically appropriate instead, it is prepared by a licensed 503A compounding pharmacy:",
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not itself an FDA-approved product — but it is still made under a licensed pharmacy's enforceable standards, not an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "A fully FDA-approved medicine with an unusually large evidence base. Approved across several indications including type 2 diabetes, weight management, and cardiovascular risk reduction, semaglutide has been studied in randomized trials involving tens of thousands of people, including multi-year outcome trials — a scale of evidence well beyond most compounds in this category. Compounded semaglutide is a separate, unapproved product. The compounding shortage was declared resolved in 2025 and the enforcement-discretion window has since closed. FDA has issued warning letters to sellers claiming a compounded version is the same as the approved drug. Ask whether you are being offered the approved product or a compounded preparation, and if compounded, why." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Approved under several brand names, with an initial US approval in 2017; indications now include type 2 diabetes, chronic weight management, cardiovascular risk reduction, chronic kidney disease progression, and, under an accelerated approval, a form of fatty liver disease. Structurally modified from natural GLP-1 with an amino acid substitution and a fatty-acid side chain that binds albumin, extending its activity to roughly a week and enabling once-weekly injection; a once-daily oral formulation, co-formulated with an absorption enhancer, also exists. Development and post-approval trials have randomized tens of thousands of people, including outcome trials following participants for three to four years. The compounding shortage was declared resolved in 2025, after which the legal basis for routine compounding narrowed considerably. A large randomized trial testing semaglutide specifically for slowing Alzheimer's disease did not meet its primary endpoint despite improvements on certain disease biomarkers — a notable example of biomarker change not translating into clinical benefit." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Semaglutide is FDA-approved for the uses described as approved above. Off-label uses discussed here are not FDA-approved uses. A compounded preparation, where used instead of the approved product, is not itself an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any unapproved purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "semax",
    category: "COGNITIVE FUNCTION & NEUROPROTECTION",
    title: "Semax — the full review",
    subtitle: "ACTH-DERIVED SYNTHETIC PEPTIDE",
    standfirst: "This is the deeper look behind the short version — what the Russian stroke-recovery trials actually show, why that is a different claim than cognitive enhancement, common misunderstandings, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Semax is a lab-made chain of seven amino acids copied from a small fragment of ACTH (adrenocorticotropic hormone), the hormone the pituitary gland normally releases to trigger cortisol production. It was modified to retain some of ACTH's effects on the brain and nervous system while losing ACTH's hormonal effects on the adrenal glands, so it is not expected to raise cortisol the way natural ACTH does." },
          { type: "para", text: "In Russia, Semax is a licensed prescription nasal-drop medicine, approved in 2011 and placed on Russia's List of Vital & Essential Drugs, used mainly for people recovering from ischemic stroke and for certain other neurological conditions. In the US wellness market it is sold very differently — almost always as a nasal spray, sometimes for injection — and marketed as a nootropic for focus, memory, and mental performance in otherwise healthy people. That US marketing use is not the use it was studied or approved for in Russia, and it has never been evaluated by FDA for any purpose." },
          { type: "para", text: "Fewer than 50 healthy adults have ever been studied taking Semax, in short dose-finding studies that did not measure focus or memory as an outcome — a meaningful gap between the stroke-recovery evidence that exists and the cognitive-enhancement claim that drives most current sales." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Recovery after ischemic stroke (the Russian-approved use)", "Real trials exist since the 1990s, but they are small and have never been replicated outside Russia."],
            ["Cognitive focus or memory in healthy adults", "Fewer than 50 healthy adults have been studied, in studies that did not measure cognition."],
            ["Memory or focus enhancement specifically", "No identified human trial measured memory or focus as an outcome in healthy people; the mechanistic story is drawn from laboratory research."],
            ["ADHD-like focus or attention claims", "Some have used it for this. Not tested in people."],
            ["General neuroprotection beyond stroke", "Supported by laboratory research in stroke models; no human data exists outside the stroke trials."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "The proposed mechanism centers on raising BDNF and related neurotrophic signals, affecting serotonin and dopamine signaling systems, and shifting which genes get switched on in brain tissue after injury in laboratory research stroke models. FDA's 2026 review describes Semax's mechanism as working through \"poorly understood mechanisms of action.\"" },
          { type: "para", text: "A notable laboratory finding deserves mention: Semax potentiated amphetamine-induced dopamine release and locomotor activity in laboratory research. FDA flagged this as concerning, since increased dopaminergic tone in this brain region is a response typically induced by drugs of abuse, and no study has tested whether Semax itself has reinforcing or addictive properties." },
          { type: "para", text: "One small Russian human study examined BDNF levels alongside motor recovery in stroke patients — the closest thing to human mechanistic confirmation, though it is a single, small trial." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "FDA's own 2026 review counts roughly 550 documented human exposures across Semax's entire history: 33 to 47 healthy adults in short dose-finding pharmacology studies that did not measure cognitive performance, 69 adults with diagnosed neurological conditions such as chronic ischemic brain disease, migraine, and trigeminal neuralgia, and 451 children treated in Russian clinical settings for depression or tics — by far the largest population studied, and one with little bearing on the healthy-adult cognitive-enhancement claim Semax is sold on in the US." },
          { type: "para", text: "Two claims need to be kept separate, because marketing blurs them. Post-stroke neuroprotection and recovery — the actual Russian-approved use — rests on real human trials in a real patient population spanning decades, though limited to a single Russian research lineage, small samples, and no independent Western replication. Cognitive enhancement in healthy people — the claim actually driving US sales — has essentially no dedicated evidence; controlled trials for this specific use in healthy adults essentially do not exist." },
          { type: "para", text: "Tellingly, when FDA's own reviewers examined largely this same body of Russian clinical evidence in 2026, they concluded it showed \"insufficient evidence of effectiveness\" — even for the narrower, disease-specific indications actually nominated, a materially lower bar than the healthy-adult cognitive-enhancement claim driving US sales." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's an approved smart drug.” Semax is a government-approved prescription drug in Russia — but for ischemic stroke and related neurological conditions in a diagnosed patient population, not for cognitive enhancement in healthy people, and not by FDA or any Western regulator.",
            "“The stroke research proves it works as a nootropic.” These are not the same claim. The stroke-recovery evidence is about restoring function after a diagnosed brain injury. It says nothing about whether an otherwise-healthy adult will think faster, remember more, or focus better.",
            "“It has no side effects.” FDA's adverse-event system logged a direct consumer report of ocular pain and eye burning after intranasal Semax purchased online, with hospitalization and symptoms still unresolved a year later; nasal irritation with chronic use is commonly reported, and whether Semax has abuse potential has never been formally studied.",
            "“It's just a natural hormone fragment, so it's basically safe.” Semax is a synthetic, lab-modified peptide engineered specifically to strip out ACTH's normal hormonal activity while keeping other central-nervous-system effects — it is not something the body produces on its own, and FDA additionally found it \"not well-characterized\" as a compounding ingredient.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Pregnancy or breastfeeding, or trying to conceive — no reproductive or developmental toxicity data were identified.",
            "Active psychosis or significant psychiatric instability, given Semax's direct effects on dopaminergic and serotonergic signaling.",
            "A personal or family history of substance-use disorder, or stimulant sensitivity — Semax potentiates amphetamine-induced dopamine release in animal studies, and no abuse-potential study in people exists. Animal findings are the earliest stage of research and no human study has confirmed them; an unmeasured abuse signal is reason enough to exclude rather than wait.",
            "Significant nasal mucosal disease or recent nasal surgery — nasal irritation is the most consistently reported effect of the intranasal form.",
            "Subcutaneous injection use — every published human study used the intranasal route; no human data exists for injection.",
            "Substituting for emergency stroke care.",
            "Competitive athletes under WADA Code without first checking current status.",
          ] },
          { type: "para", text: "Competitive athletes: Semax is not explicitly named on the WADA Prohibited List. Because it does have current government approval — Russia's — its fit under WADA's S0 (\"Non-Approved Substances\") catch-all is genuinely unresolved rather than settled, and no confirmed sanction case specific to Semax was located. Status should be treated as unresolved and high-risk, not cleared, and a competing athlete should check Global DRO or their national anti-doping organization before use." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Approved in Russia, for a different use than it's sold for here. A licensed stroke-recovery medicine there, never reviewed by FDA. The July 2026 advisory committee separately voted 8-5 to recommend it for a compounding list, for cerebral ischemia, migraine, and trigeminal neuralgia — not for the cognitive-enhancement claim driving US sales. Fewer than 50 healthy adults have ever been studied. The human evidence base overwhelmingly concerns stroke patients, not people seeking a cognitive edge. The stroke-recovery evidence and the smart-drug marketing are not the same claim, and only one of them has been tested." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Semax was first described in the Russian scientific literature in 1991 and formally approved by the Russian government on December 7, 2011. It was re-nominated and formally reviewed at the July 23–24, 2026 FDA Pharmacy Compounding Advisory Committee meeting, for cerebral ischemia, migraine, and trigeminal neuralgia — not for cognitive enhancement; FDA staff recommended against inclusion, and the committee voted 8-5, with one abstention, to recommend it anyway. The vote is non-binding and has not been adopted. FDA's adverse-event system logged a direct consumer report of ocular pain and eye burning after intranasal Semax purchased online, with hospitalization and unresolved symptoms a year later. The largest identified Russian stroke trial enrolled just 30 patients in the acute phase of hemispheric ischemic stroke." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Semax is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "sermorelin",
    category: "GROWTH HORMONE & ANABOLIC SIGNALING",
    title: "Sermorelin — the full review",
    subtitle: "GROWTH HORMONE-RELEASING HORMONE ANALOGUE",
    standfirst: "",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Sermorelin is a lab-made copy of the first 29 building blocks of a natural brain hormone, growth hormone-releasing hormone (GHRH), which signals the pituitary gland to release its own growth hormone in short bursts rather than delivering growth hormone directly." },
          { type: "para", text: "A version was once sold in the United States under the brand name Geref — first as a singledose diagnostic test of pituitary function, later as a nightly injection for children with diagnosed growth hormone deficiency. Both approvals were withdrawn in 2009 when the manufacturer discontinued the product for business reasons." },
          { type: "para", text: "What is available today is a compounded preparation made from bulk sermorelin powder; it has not itself been reviewed by the FDA for safety, effectiveness, or quality, and it only works if the pituitary gland still has growth hormone available to release." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Growth failure in children with diagnosed GH deficiency", "The one use that ever carried FDA approval — since withdrawn in 2009 for business reasons, not safety."],
            ["Adult GH optimization, body composition", "A six-month study found modest fat and lean-mass changes, but no improvement in strength or fitness."],
            ["Recovery, sleep, libido, athletic performance", "No human trial has tested sermorelin for any of these uses."],
            ["Cognitive function", "Rests on a single six-month, 89-person trial from 2006 using surrogate cognitive tests; never replicated."],
            ["Combined with ipamorelin, CJC-1295, or other growth hormone secretagogues", "Regulatory review found few human studies examining these combinations; the 'synergy' claim comes from practitioner reports, not trial data."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "A hormone from the hypothalamus, GHRH, is the natural “go” signal that prompts the pituitary gland to release growth hormone. Sermorelin is a shortened synthetic copy of that signal; injected under the skin, typically at bedtime, it prompts a pulse of growth hormone release, which then travels to the liver and prompts it to produce IGF-1. Because sermorelin acts upstream of growth hormone itself, it only works if the pituitary still has growth hormone available to release — if the pituitary is damaged, missing, or unresponsive, sermorelin has nothing to stimulate. It also clears from the body within minutes, producing a short, pulse-like effect rather than a steady elevation." },
          { type: "para", text: "The idea that this makes it inherently safer than growth hormone itself — because the body's own feedback loops limit how much can be released — is a plausible mechanism, not a finding confirmed by a study that directly compared the two in adults." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The pediatric approval rested on a 12-month, open-label trial without a placebo or comparison group, in previously untreated children with diagnosed growth hormone deficiency; a later review of the pediatric literature found sermorelin's growth effect less pronounced than that of growth hormone itself. In adults — the population being sold sermorelin today — the published record is small: roughly 130 adults total across a handful of studies, the largest around 90 people, none longer than six months. One six-month study found a measurable rise in IGF-1 and modest shifts in body composition, but no improvement in strength, aerobic fitness, or physical function. No adult trial has tested sermorelin for fat loss, athletic performance, injury recovery, sleep, libido, or longevity as a primary outcome. The larger and more heavily studied growth hormone literature, which sermorelin's own mechanism depends on, has similarly found no strength or functional benefit from raising growth hormone in healthy older adults." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“Sermorelin is FDA-approved.” Two sermorelin products were approved, in 1990 and 1997, and both approvals were withdrawn in 2009. Nothing containing sermorelin is currently an approved, marketed drug.",
            "“It was withdrawn for business reasons, so regulators consider it safe.” That determination only established that the withdrawal wasn't a safety action — it says nothing about the safety of a compounded, unapproved product at adult doses used for years.",
            "“It's a safer, more natural alternative to growth hormone because the body's own feedback loop prevents overdose.” This is a plausible-sounding mechanism, not a finding from a study — no adult trial has directly compared sermorelin to growth hormone on safety outcomes.",
            "“It builds muscle, increases strength, and improves recovery.” The one relevant six-month adult study found no improvement in strength or aerobic fitness despite a real gain in lean mass, and the much larger growth hormone literature found the same pattern.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone whose growth hormone deficiency originates at the pituitary itself, or from a known or suspected pituitary lesion — there is nothing for sermorelin to stimulate, and imaging should come first.",
            "Anyone with prediabetes, diabetes, or insulin resistance.",
            "Anyone with active cancer or a recent cancer history.",
            "Pregnant or breastfeeding patients, or anyone trying to conceive.",
            "Children and adolescents outside a diagnosed, specialist-managed growth hormone deficiency.",
            "Anyone unwilling or unable to attend monitoring visits and lab draws.",
          ] },
          { type: "para", text: "Competitive athletes: Prohibited at all times, in and out of competition, under the WADA category covering growth hormone-releasing factors. A therapeutic use exemption is considered highly unlikely to be approved, since there is no FDA-approved product or indication to support one for adult use." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Once approved, now withdrawn — for business reasons, not safety. Two sermorelin products held FDA approval, in 1990 and 1997. Both approvals were withdrawn in 2009 after the manufacturer stopped making the ingredient; regulators later noted the withdrawal wasn't a safety or effectiveness finding, but that determination doesn't extend to today's compounded, unapproved product at adult doses. Fewer than about 130 adults have ever been studied, and no trial ran longer than six months. The one relevant body-composition study found a rise in IGF-1 and a lean-mass shift, but no improvement in strength, aerobic fitness, or physical function — a pattern that matches the much larger growth hormone literature. It only works if the pituitary still has growth hormone to release — a mechanism-level limit, not a study finding." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Held two FDA approvals — Geref Diagnostic (1990) for a single-dose pituitary function test, and Geref (1997) for growth failure in children with diagnosed growth hormone deficiency; both were formally withdrawn in June 2009 after the manufacturer discontinued the product. Acts at the GHRH receptor on pituitary somatotrophs, prompting pulsatile release of the body's own growth hormone rather than delivering growth hormone directly. Does not appear on FDA's 503A bulk-substance category lists, unlike ipamorelin, which is flagged as a Category 2 safety-risk substance — a comparatively more favorable regulatory position within this catalog. The pediatric approval trial was open-label and uncontrolled; a later review found sermorelin's growth effect less pronounced than growth hormone itself. The largest published adult trial enrolled roughly 90 people over six months; no adult sermorelin trial has run longer." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Sermorelin is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "tb-500",
    category: "TISSUE REPAIR & RECOVERY",
    title: "TB-500 — the full review",
    subtitle: "SYNTHETIC FRAGMENT OF THYMOSIN BETA-4",
    standfirst: "This is the deeper look behind the short version — why the related-protein research doesn't carry over to TB-500 itself, what the one direct test of the molecule actually found, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "TB-500 is a lab-made chain of seven amino acids, built to copy one small stretch — positions 17 through 23 — of a much larger, naturally occurring 43-amino-acid protein called thymosin beta-4, a protein the body already makes in nearly every cell type, especially at sites of injury and inflammation. TB-500 carries an added acetyl chemical group on the front end of the chain, a modification FDA's own reviewers state \"irreversibly alters\" the molecule's charge, size, and behavior. TB-500 is not simply a piece of thymosin beta-4 — it is a chemically modified piece, and its activity in the body cannot be assumed to match either the unmodified natural fragment or the full parent protein." },
          { type: "para", text: "TB-500 is sold almost exclusively as a self-administered subcutaneous or intramuscular injection, most often through online \"research use only\" vendors, and is most often used for tendon, ligament, and muscle injury recovery, general wound healing, and vascular support. It is most often used for those recovery goals, and the evidence commonly cited for that use comes mainly from studies of the related, unmodified natural protein rather than from TB-500 itself." },
          { type: "para", text: "TB-500 should not be confused with two other \"thymosin\"-family names that circulate in wellness marketing. Thymosin alpha-1 is a structurally unrelated peptide, approved in more than 30 countries for hepatitis and as cancer-treatment support (though not in the US), that works through a different immune-activating mechanism. Thymalin is a different substance again. The shared \"thymosin\" name reflects a shared origin in 1960s–70s thymus-tissue research, not a shared mechanism or safety record." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Tendon, ligament, and muscle injury recovery", "Some have used it for this. Not tested in people."],
            ["General wound and skin healing", "Supporting studies used a related, unmodified protein in laboratory research. When TB-500 itself was directly tested in a 2024 laboratory assay, it did not induce wound healing at the tested concentration."],
            ["Cardiac tissue repair after heart attack", "A published study associated naturally elevated blood levels of the parent protein with improved outcomes after stem-cell therapy — a correlational biomarker finding, not a trial of administered TB-500."],
            ["Hair growth", "Some have used it for this. Not tested in people."],
            ["Vascular support and general recovery", "Some have used it for this. Not tested in people."],
            ["Post-surgical or preventive use in healthy people", "No study of any kind has evaluated TB-500 for prophylactic or general-wellness use in people without an existing injury. This use exists in marketing only."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "The proposed mechanism starts from real, well-established cell biology: a six-amino-acid core within TB-500's sequence is known as the \"actin-binding region\" of thymosin beta-4, and the parent protein does bind actin as part of normal cell function. Actin filaments are the internal scaffolding cells use to change shape and move, so a molecule that influences actin dynamics is mechanistically plausible as an influence on the cell migration involved in wound repair. Marketing extends that story further, to new blood vessel formation and general tissue repair." },
          { type: "para", text: "The complication is that essentially none of the underlying research demonstrating actinbinding, cell migration, or wound-healing effects was performed on TB-500 itself. The most frequently cited supporting study tested topical full-length thymosin beta-4 and the plain, non-acetylated fragment in laboratory research — not TB-500. FDA's reviewers are explicit that \"the pharmacological profile of the non-acetylated heptapeptide LKKTETQ cannot be directly extrapolated to the N-acetylated heptapeptide TB-500.\"" },
          { type: "para", text: "When TB-500 itself was actually tested — a 2024 study using confluent fibroblast cultures — it did not induce wound healing at the tested concentration. One of TB-500's own breakdown products did show wound-healing activity in the same experiment, an unresolved finding suggesting the molecule sold and injected as \"TB-500\" may not be the active agent at all, and that whatever it breaks down into inside the body has not itself been fully characterized." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "This is where TB-500 diverges most sharply from other compounds in this catalog: the honest number of documented human subjects is zero. FDA's July 2026 review states plainly that \"the nomination did not include, and FDA did not find any information in the medical literature where, TB-500 was administered to patients to treat any disease or condition\" — no human has ever been studied taking TB-500, by any route, for any indication, published anywhere. By comparison, BPC-157 — a related but distinct compound in this same catalog — has roughly 81 documented human subjects across its published literature; TB-500's record is meaningfully thinner still. No formal toxicology of any kind exists either: no acute, repeat-dose, genotoxicity, reproductive, or carcinogenicity studies have been conducted in any species. Laboratory pharmacokinetic data is also thin and off-route — the only data identified comes from horses given a subcutaneous dose, not the intramuscular route TB-500 is marketed for, with blood levels so low they were undetectable within hours." },
          { type: "para", text: "A 2026 scoping review that mapped 80 studies across the entire thymosin beta-4 and TB-500 literature found that only one study tested TB-500 itself directly — the same 2024 laboratory metabolite experiment described above — and identified \"no human interventional studies of" },
          { type: "para", text: "administered TB4 or TB-500\" in tendon, ligament, muscle, bone, cartilage, fat-graft, or spine categories, which covers essentially every musculoskeletal use TB-500 is actually marketed for." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“TB-500 is the same thing as thymosin beta-4.” It is not. TB-500 is a synthetic, chemically modified 7-amino-acid fragment of the 43-amino-acid parent protein, and FDA's own reviewers state the pharmacology of the related, unmodified fragment \"cannot be directly extrapolated to\" TB-500.",
            "“There's a large, credible research base behind TB-500.” There is a large research base behind the full-length parent protein. There is essentially no research base behind TB-500 the fragment — a comprehensive 2026 literature mapping found exactly one study, out of 80 in the broader field, that tested TB-500 directly.",
            "“The FDA is about to approve TB-500 for compounding.” FDA's own scientists formally recommended against adding TB-500 to the compounding bulks list, citing zero efficacy evidence and zero human safety data. An advisory committee then voted 8-6, with one abstention, to recommend it anyway — a non-binding vote FDA has not adopted. TB-500 remains off the compounding bulks list.",
            "“It's part of the same 'thymosin' family as approved drugs, so it's basically proven safe.” Thymosin alpha-1 and thymosin beta-4/TB-500 are structurally and functionally unrelated peptides that happen to share a name from a shared 1960s–70s thymus-tissue origin, not a shared mechanism or safety record.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Active cancer, a cancer history, an undiagnosed mass, or overdue cancer screening — no carcinogenicity studies of TB-500 have ever been performed, in any species.",
            "Autoimmune disease or a history of drug hypersensitivity reactions — FDA specifically flags immunogenicity risk for injectable peptides like this one.",
            "Pregnancy, breastfeeding, or trying to conceive — no reproductive or developmental toxicity study has been conducted in any species.",
            "Anyone relying on it in place of a proven treatment — physical therapy, an approved medication, image-guided injection, or surgery — for a condition with an actual evidence-based option.",
            "Anyone sourcing it outside a licensed, regulated pathway — TB-500 is not currently on the 503A Bulks List, so no legal compounding pathway exists for it today.",
            "Competitive athletes subject to WADA-code testing.",
          ] },
          { type: "para", text: "Competitive athletes: TB-500 is explicitly named and prohibited at all times, in and out of competition, under WADA category S2.3, which lists \"Thymosin-β4 and its derivatives e.g. TB-500.\" Anti-doping testing operates on strict liability, and WADA has funded detection methods targeting TB-500's metabolites since 2013, so a clinician's recommendation or a compounding label offers no protection once it is detected." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved, and there is no human exposure data at all. FDA's own July 2026 review found no record of TB-500 ever being given to a documented human being. An advisory committee voted 8-6, with one abstention, to recommend it for wound healing; advisory only, not adopted. What's sold is a chemically modified fragment, not the full natural protein. The acetylated 7-amino-acid piece is distinct enough from full-length thymosin beta-4 that FDA states findings on one cannot be assumed to carry over to the other. Everything claimed rests on laboratory research of a related, but different, molecule." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "TB-500 is the acetylated 7-amino-acid fragment (Ac-LKKTETQ) copying positions 17–23 of the 43-amino-acid parent protein thymosin beta-4. FDA's July 2026 review found no record of TB-500 ever being administered to a documented human being, by any route, for any condition. A July 23–24, 2026 Pharmacy Compounding Advisory Committee voted 8-6, with one abstention, to recommend TB-500 for the 503A Bulks List, overruling FDA staff's recommendation against inclusion; the vote is advisory only and has not been adopted. No confirmed FDA warning letter names TB-500 specifically, unlike several other compounds in this catalog. A structurally different, full-length version of the parent protein is in real FDA-regulated drug development under three separate programs, none yet approved for any use." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. TB-500 is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "tesamorelin",
    category: "GROWTH HORMONE & ANABOLIC SIGNALING",
    title: "Tesamorelin — the full review",
    subtitle: "GROWTH HORMONE-RELEASING HORMONE ANALOGUE",
    standfirst: "This is the deeper look behind the short version — the two large trials that supported approval, why tesamorelin's compounding status is actually stricter than Sermorelin's rather than looser, what the smaller non-HIV and cognition trials found, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Tesamorelin is a lab-made copy of a 44-amino-acid natural brain hormone, growth hormonereleasing hormone (GHRH), with one chemical addition that slows how quickly the body breaks it down. Like Sermorelin and CJC-1295 in this catalog, it prompts the pituitary gland to release the body's own growth hormone. What sets it apart from both: it is the one FDA-approved medicine in this specific family, marketed as Egrifta, for a single, narrow use — reducing excess abdominal fat in HIV-associated lipodystrophy." },
          { type: "para", text: "Because tesamorelin keeps nearly the entire 44-amino-acid GHRH sequence — longer than Sermorelin's shortened 29-amino-acid fragment or CJC-1295's similar-length backbone — it crossed a regulatory threshold in 2020 that reclassified it as a licensed biologic rather than an ordinary drug. That reclassification matters more than it sounds: it changes which compounding rules can legally apply to it, in a stricter direction, not a looser one." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Excess visceral fat in HIV-associated lipodystrophy", "Roughly 800 people studied across two Phase 3 trials; visceral fat down 11-15% versus placebo, subcutaneous fat unchanged."],
            ["Liver fat in HIV patients with fatty liver disease", "A dedicated trial found reduced liver fat and slowed fibrosis progression — real evidence, but still within the HIV population and not an approved use."],
            ["General visceral fat reduction in adults without HIV", "One 12-month trial in 60 people with reduced growth hormone secretion found a benefit; never replicated and not the same population as general obesity."],
            ["Cognitive function", "One 152-person trial found improved cognition scores over 20 weeks, alongside a rise in fasting insulin in a subgroup; a single, unreplicated finding."],
            ["General weight loss or body composition", "The FDA label explicitly states tesamorelin is not intended for general weight-loss management; trials found no change in subcutaneous fat."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Tesamorelin binds the GHRH receptor on pituitary cells, triggering a pulse of the body's own growth hormone, which prompts the liver to produce IGF-1 — roughly doubling it in the pivotal trials. Growth hormone preferentially drives fat loss from visceral fat, the more metabolically active fat around the organs, rather than subcutaneous fat just under the skin, which is the basis for its approved, narrowly targeted use and for the label's explicit statement that it is not intended for general weight loss." },
          { type: "para", text: "Like other compounds in this family, it only works if the pituitary gland still has growth hormone available to release — it has nothing to stimulate if the pituitary itself is damaged, missing, or unresponsive." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The FDA approval rests on real, sizable Phase 3 evidence: two randomized, placebo-controlled trials in HIV-associated lipodystrophy, together studying roughly 800 people, over 26 weeks (one extended to 52 weeks). Visceral fat fell by roughly 11 to 15 percent more than placebo, while subcutaneous fat was essentially unchanged — a considerably larger and more rigorous evidence base than most compounds in this category, though FDA's own reviewers noted that visceral-fat reduction is a validated but surrogate measure, and the exact clinical benefit of that degree of reduction is less certain." },
          { type: "para", text: "Evidence outside the approved population is real but much thinner. A 12-month trial in 60 nonHIV obese adults with reduced growth hormone secretion found a similar visceral-fat benefit, but it has never been replicated and applies to a pre-selected subgroup, not general obesity. A separate 152-person trial in older adults, including some with mild cognitive impairment, found improved composite cognition and executive function scores over 20 weeks — a genuine but single, unreplicated finding that also showed a rise in fasting insulin in the cognitively impaired subgroup." },
          { type: "para", text: "Because tesamorelin is now a licensed biologic rather than an ordinary unapproved drug, it does not appear on FDA's 503A or 503B compounding bulk-substance lists at all — not because it was reviewed and cleared, but because those lists govern drugs, and current FDA guidance states that licensed biologics are not eligible for the standard compounding exemptions available to unapproved peptides. Compounded \"tesamorelin\" sold for general anti-aging or weight-loss use sits in a more legally uncertain position than compounds like Sermorelin, not a more permissive one." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“FDA-approved means it's endorsed for weight loss generally.” The approval is narrow — HIV-associated lipodystrophy only — and the label explicitly excludes general weight-loss management.",
            "“Compounded tesamorelin is the same kind of gray area as compounded Sermorelin.” It is not, and it is arguably stricter. Because tesamorelin became a licensed biologic in 2020, current FDA guidance states such products are not eligible for the standard compounding exemptions at all.",
            "“The cognition study proves growth-hormone peptides sharpen the mind.” That trial is tesamorelin's own data, from a single 20-week study using surrogate cognitive measures, never replicated, and it showed a meaningful rise in fasting insulin in part of the study group.",
            "“It works like a GLP-1 drug for fat loss.” Trials show a selective effect on visceral fat specifically, with no change in subcutaneous fat — a different pattern than the broad weight loss seen with GLP-1 medicines, and the reason the label excludes general weight-loss use.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with disruption of the pituitary gland or its signaling — from prior pituitary surgery, tumor, head irradiation, or head trauma.",
          ] },
          { type: "list", items: [
            "Anyone with active cancer or a cancer history — the label carries a warning about increased neoplasm risk observed in treated patients.",
            "Pregnant patients, or anyone with a known hypersensitivity to the medicine.",
            "Anyone with diabetes or unstable blood sugar, without discussing it first — glucose intolerance is a labeled risk.",
            "Anyone expecting a general weight-loss effect — the label explicitly excludes this use, and trials found no change in subcutaneous fat. Competitive athletes: Tesamorelin is named specifically on the WADA Prohibited List, in the same growth-hormone-releasing-hormone category as CJC-1295 and Sermorelin; it is prohibited at all times, in and out of competition, including use of the approved product without a documented therapeutic use exemption.",
          ] },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "An approved medicine exists, for one narrow population. Roughly 800 people studied across two Phase 3 trials supporting approval for excess visceral fat in HIV-associated lipodystrophy specifically — not general weight loss. Compounded tesamorelin sits on stricter legal footing than it might appear. Since becoming a licensed biologic in 2020, current FDA guidance holds that it is not eligible for the standard compounding exemptions available to unapproved peptides — a different, tighter regulatory posture than most compounds in this catalog. Ask specifically whether what's being offered is the approved product or a compounded preparation, and for what population it was actually studied." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "A 44-amino-acid stabilized GHRH analogue; FDA-approved as Egrifta/Egrifta SV/Egrifta WR (NDA 022505, approved November 2010) for excess abdominal fat in HIV-associated lipodystrophy. Reclassified from an approved drug to a licensed biologic on March 23, 2020, under the biologics-deeming provision, because it exceeds the 40-amino-acid length threshold that distinguishes a \"protein\" biologic from an ordinary drug. Current FDA guidance states licensed biologics are not eligible for the standard 503A/503B compounding exemptions — consistent with tesamorelin's absence from both bulk-substance lists. Pivotal approval trials: two randomized, placebo-controlled studies (n=412 and n=404) in HIV-associated lipodystrophy, 26 weeks each, one extended to 52 weeks. Label explicitly states tesamorelin is not intended for general weight-loss management, and long-term cardiovascular safety has not been established." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Tesamorelin is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "thymosin-alpha-1",
    category: "INFLAMMATION & IMMUNE DEFENSE",
    title: "Thymosin Alpha-1 — the full review",
    subtitle: "SYNTHETIC THYMIC PEPTIDE (THYMALFASIN)",
    standfirst: "This is the deeper look behind the short version — how thymic signalling works, what the hepatitis and sepsis trials measured, its approval status country by country, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Thymosin alpha-1 is a small protein fragment that the thymus gland naturally produces. The thymus is where T cells — the immune system's coordinating cells — are trained, and this peptide is part of that signaling process." },
          { type: "para", text: "A synthetic copy, known generically as thymalfasin, has been given to patients outside the United States for more than three decades, making it one of the most extensively studied compounds in this category." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Chronic hepatitis B", "Randomized trials support this use; it is approved for it in several countries outside the US."],
            ["Vaccine response in people who respond poorly", "Trials in dialysis and immunocompromised patients measured antibody response."],
            ["Sepsis and severe infection", "Studied in hospital trials as an add-on to standard care."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Thymosin alpha-1 is thought to act on the immune system by promoting T-cell maturation and modulating the activity of dendritic cells and other components of both innate and adaptive immunity. This immune-modulating activity is the basis for its use in conditions where the immune system needs support responding to infection or a poor vaccine response." },
          { type: "para", text: "Because the mechanism is immune activation rather than simple immune suppression, its effects have been studied specifically in defined clinical contexts — chronic viral infection, immunocompromise, and severe infection — rather than as a general-purpose immune booster." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "Randomized human trials support its use in chronic hepatitis B, and it is approved for that indication in several countries outside the United States. Trials in dialysis and immunocompromised patients have also measured antibody response to vaccination, supporting its use in people who respond poorly to standard vaccination." },
          { type: "para", text: "Thymosin alpha-1 has also been studied in hospital trials as an add-on to standard care for sepsis and severe infection. Across these three use areas, the trial evidence is real and human, though results were mixed in some of the studies, and the largely favorable results are" },
          { type: "para", text: "concentrated in the specific patient groups actually studied, not a general immune-enhancement population." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's approved by the FDA.” Thymosin alpha-1 is approved in a number of countries outside the United States, mostly for hepatitis B, but it has never been approved by the FDA.",
            "“The trial evidence supports general immune enhancement.” The trial evidence concerns specific conditions — hepatitis B, poor vaccine response, and sepsis — not general-purpose immune boosting in healthy people.",
            "“It's a new, untested compound.” A synthetic copy has been given to patients outside the United States for more than three decades, making it one of the most studied compounds in this category.",
            "“It's safe for anyone with immune-related conditions.” Because its mechanism is immune activation, it is not appropriate for transplant recipients, people on immunosuppressive therapy, or people with autoimmune conditions.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Organ transplant recipients and anyone on immunosuppressive medication.",
            "Stem-cell or bone-marrow transplant patients.",
            "Anyone with an autoimmune condition — the mechanism is immune activation.",
            "Anyone pregnant or breastfeeding, and anyone with a known hypersensitivity to it.",
          ] },
          { type: "para", text: "Competitive athletes: Thymosin alpha-1 is a distinct molecule from thymosin beta-4 and its fragments (such as TB-500), which are the thymosin-family peptides specifically named on WADA's Prohibited List. It is not currently named on the WADA Prohibited List, though athletes in tested sport should confirm current status with their sport's anti-doping authority before use." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Approved in other countries, not in the United States. Approved in a number of countries mostly for hepatitis B and as an adjunct in specific settings. Never approved by FDA. It has the strongest clinical record in this category. A multi-decade record of human trials, concerning the conditions it was studied for, not general immune enhancement. Approved elsewhere is not approved here, and studied for one thing is not evidence for another." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Generic name thymalfasin; a synthetic copy of a peptide naturally produced by the thymus gland. Approved in a number of countries outside the United States, primarily for chronic hepatitis B; never approved by the FDA. More than three decades of international human clinical use and trial data. Studied as an adjunct for improving vaccine antibody response in dialysis and immunocompromised patients. Studied in hospital trials as an add-on to standard care for sepsis and severe infection." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Thymosin Alpha-1 is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "tirzepatide",
    category: "METABOLIC & FAT LOSS",
    title: "Tirzepatide — the full review",
    subtitle: "DUAL GIP AND GLP-1 RECEPTOR AGONIST",
    standfirst: "",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Tirzepatide is a lab-made molecule that copies two natural gut hormones released after eating," },
          { type: "para", text: "GLP-1 and GIP, engineered to remain active in the body for about a week between doses rather than being broken down within minutes the way the natural hormones are. It is a fully FDA-approved medicine, marketed under two brand names, and is also available separately as a compounded preparation." },
          { type: "para", text: "Its clinical development involved more than 24,000 people, and it carries three separate FDA approvals — for type 2 diabetes, for chronic weight management, and, more recently, for moderate-to-severe obstructive sleep apnea in adults with obesity. Each of those approvals reflects its own period of study and its own FDA review rather than one blanket approval covering every use." },
          { type: "para", text: "Because tirzepatide is dual-path, what a given patient actually receives depends on which pathway a clinic or pharmacy is offering: the FDA-approved product, or a separate compounded version made by a pharmacy from bulk material. That distinction is worth confirming before starting, since only one of the two has been reviewed by FDA for safety, effectiveness, and quality." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Type 2 diabetes", "One of three approved uses, supported by randomized trials as part of the overall clinical development program; glycemic control is assessed alongside standard diabetes care."],
            ["Chronic weight management", "Approved for adults with obesity, or with overweight plus a weight-related condition, as an adjunct to diet and physical activity."],
            ["Moderate-to-severe obstructive sleep apnea", "The newest approved use, in adults with obesity; studied alongside weight management rather than as a standalone sleep intervention."],
            ["Off-label weight-related or metabolic uses outside the approved criteria", "Extrapolated from the same GIP/GLP-1 mechanism studied in the approved indications, but not independently tested for these specific off-label purposes in the trial programs that supported approval."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Tirzepatide activates two different gut-hormone receptors at once — GIP and GLP-1 — rather than the single GLP-1 pathway most other drugs in this category act on. Both hormones are normally released after eating; together they prompt the pancreas to release insulin when blood sugar is high, slow how quickly the stomach empties, and signal appetite centers in the brain that the body is full." },
          { type: "para", text: "The molecule is structurally modified with a fatty-acid chain that binds to albumin, a protein circulating in the blood. That binding is what extends its activity to roughly a week per dose, allowing once-weekly injection instead of the minutes-long natural hormone signal." },
          { type: "para", text: "The mechanism behind the sleep apnea approval is understood mainly through its connection to weight loss — reducing fat around the upper airway is thought to be the main driver — rather than through a separate, independently studied action on sleep physiology itself." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "FDA approval for each of tirzepatide's three indications rested on its own independently reviewed set of randomized trials, together involving more than 24,000 people across the overall clinical development program — a considerably larger evidence base than most compounds discussed on this site." },
          { type: "para", text: "Compounded tirzepatide is a separate question from the approved product. The compounding shortage that once justified widespread pharmacy compounding was declared resolved, and the enforcement-discretion window for compounding tirzepatide closed on 18 February 2025 for 503A pharmacies and 19 March 2025 for 503B facilities — roughly two months earlier than the equivalent deadlines for semaglutide. FDA has since issued warning letters to telehealth sellers of compounded GLP-1 and GIP/GLP-1 products." },
          { type: "para", text: "Uses outside the three approved indications are extrapolated from the same receptor biology studied in the approved trials, but have not themselves been independently tested for those specific off-label purposes in a comparable randomized trial program." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's basically the same as semaglutide, just stronger.” Tirzepatide activates two different gut-hormone receptors, GIP and GLP-1, rather than one; the two drugs are chemically distinct molecules with separate approval programs, not a stronger version of the same thing.",
            "“Compounded tirzepatide is the same product as the approved medicine.” A compounded preparation is made by a pharmacy from bulk material and has not itself been reviewed by FDA for safety, effectiveness, or quality, even when intended to contain the same active ingredient.",
            "“Since it's approved for weight loss, it's approved for anyone who wants to lose weight.” The weight-management approval applies specifically to adults with obesity, or with overweight plus a weight-related condition, not to weight loss in general.",
            "“The sleep apnea approval means it treats sleep apnea directly.” It is approved for moderate-to-severe obstructive sleep apnea specifically in adults with obesity, and was studied alongside weight management rather than as an independent sleep therapy.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with a personal or family history of medullary thyroid cancer, or MEN 2 — an absolute contraindication.",
            "Anyone with a serious allergic reaction to tirzepatide or any ingredient in the product.",
            "Anyone being offered it as a cream, capsule, or other unapproved route — none of these has human exposure data.",
            "Anyone taking an oral birth control pill, without discussing it first — reliability may be reduced, particularly during dose escalation.",
            "Pregnant or breastfeeding patients, or anyone actively trying to conceive.",
            "Anyone with a history of pancreatitis or significant gastrointestinal disease, without discussing it first.",
          ] },
          { type: "para", text: "Competitive athletes: Not currently listed as a prohibited substance by WADA or USADA; GLP-1pathway medicines as a class are not prohibited in sport, and a therapeutic use exemption is not" },
          { type: "para", text: "required to use the FDA-approved product as prescribed. A related compound in this same drug class, semaglutide, has been placed on WADA's Monitoring Program, and the practical risk for athletes lies mainly in sourcing an unapproved or compounded product of uncertain content rather than in the approved medicine itself." },
          { type: "para", text: "Approved product, or a compounded preparation — and the difference matters" },
          { type: "para", text: "This is an FDA-approved medicine. It is available as the manufacturer's own approved product, and — separately — as a compounded preparation. Which one is being offered is always stated plainly. If the approved product is right, that is what gets prescribed:" },
          { type: "list", items: [
            "The manufacturer's pen or vial. Reviewed by the FDA for safety, effectiveness and quality, exactly as labeled.",
            "Filled at a licensed pharmacy. Dispensed from your prescription like any other approved medicine. If a compounded preparation is clinically appropriate instead, it is prepared by a licensed 503A compounding pharmacy:",
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not itself an FDA-approved product — but it is still made under a licensed pharmacy's enforceable standards, not an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Approved medicines exist, tested in more than 24,000 people. Approved under two brand names for type 2 diabetes, long-term weight management, and, uniquely among approved GLP-1-class drugs, moderate-to-severe obstructive sleep apnea in adults with obesity. Compounded tirzepatide is a separate question. The shortage was declared resolved in December 2024 and the enforcement-discretion window closed in early 2025, about two months earlier than semaglutide's. FDA has since issued warning letters to telehealth sellers. Ask whether it is the approved product or a compounded preparation. On this compound the answer changes what you are taking." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Approved under two brand names — one for type 2 diabetes, the other for chronic weight management and moderate-to-severe obstructive sleep apnea in adults with obesity. A dual GIP and GLP-1 receptor agonist, structurally engineered with a fatty-acid chain that binds albumin and extends its activity to about a week, enabling once-weekly dosing. Clinical development involved more than 24,000 people across the trial programs supporting its approvals. The compounding enforcement-discretion window closed 18 February 2025 for 503A pharmacies and 19 March 2025 for 503B facilities, roughly two months earlier than semaglutide's corresponding deadlines. Carries three separate FDA approvals, each supported by its own independently reviewed trial data rather than one approval covering every use." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Tirzepatide is FDA-approved for the uses described as approved above. Off-label uses discussed here are not FDA-approved uses. A compounded preparation, where used instead of the approved product, is not itself an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any unapproved purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "testosterone",
    category: "Hormone & Vitality",
    title: "Testosterone (TRT)",
    subtitle: "Testosterone replacement therapy",
    standfirst:
      "An FDA-approved hormone replacement for men with diagnosed low testosterone. It restores the body's own hormone to a normal range under lab monitoring — not a performance or anti-aging shortcut.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Testosterone is the primary male sex hormone. It drives the development of male characteristics and, in adults, supports libido, mood, energy, bone density, red-blood-cell production, and muscle mass. Levels fall gradually with age, and some men have levels low enough — with symptoms — to meet the definition of hypogonadism." },
          { type: "para", text: "Testosterone replacement therapy (TRT) is the FDA-approved treatment for that condition: replacing the hormone to bring a man with a confirmed deficiency back into a normal physiologic range. It is a long-established therapy, prescribed and monitored by a licensed clinician, and it comes in several forms:" },
          { type: "list", items: [
            "Injectable esters — testosterone cypionate or enanthate, given weekly or every two weeks, the most common form.",
            "Transdermal gels and solutions — applied daily to the skin.",
            "Subcutaneous pellets — implanted and released slowly over months.",
            "A nasal gel — dosed several times a day.",
          ] },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "para", text: "The approved use is male hypogonadism: a confirmed low testosterone level together with symptoms. When those two things line up, replacement can improve:" },
          { type: "list", items: [
            "Low libido and sexual function.",
            "Fatigue and low energy.",
            "Depressed or flat mood.",
            "Loss of muscle mass and strength.",
            "Reduced bone density.",
          ] },
          { type: "para", text: "The benefits are most reliable when the symptoms genuinely trace back to a measured deficiency. In men whose levels are already normal, adding testosterone does not reliably improve any of these — and carries the same risks without the upside." },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Testosterone binds the androgen receptor throughout the body; restoring a deficient level brings those tissues back toward normal function. There is an important trade-off built into the biology: supplying testosterone from outside suppresses the brain's own LH and FSH signals, which tells the testes to make less of their own. Over time that can shrink testicular size and lower sperm production. This is the main reason TRT and trying to conceive do not mix well — and why a fertility-sparing alternative exists for men who want children." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The TRAVERSE trial — 5,246 middle-aged and older men with low testosterone and high cardiovascular risk — found that testosterone gel was non-inferior to placebo for major adverse cardiovascular events, addressing a long-standing safety question. It studied safety, not a promise of benefit." },
          { type: "para", text: "The Testosterone Trials — 790 men aged 65 and older with low levels — found small-to-moderate improvements in sexual function and mood, but no improvement in vitality or walking distance. The consistent theme across the good evidence: benefits are real but modest, and they track with correcting a true deficiency, not with pushing levels above normal." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "\"More is better.\" No — the goal is a normal physiologic range. Higher levels add risk (thickened blood, acne, mood swings) without added benefit.",
            "\"It's an anti-aging drug.\" It is not approved for the normal decline that comes with age in men whose levels remain normal, and the evidence does not support that use.",
            "\"You just start it.\" It is a Schedule III controlled substance, banned in sport, and prescribed only after an evaluation and lab confirmation.",
            "\"One low reading means you need it.\" Diagnosis requires two separate low morning measurements plus symptoms — a single number is not enough.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Men with untreated prostate or breast cancer.",
            "Men with an elevated hematocrit (thickened blood) until that is addressed.",
            "Men with severe untreated sleep apnea or uncontrolled heart failure.",
            "Men actively trying to conceive — TRT suppresses fertility; a fertility-sparing option should be discussed first.",
            "Men with normal testosterone levels and no diagnosed deficiency.",
          ] },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "FDA-approved for male hypogonadism. A Schedule III controlled substance. On the WADA Prohibited List (S1, anabolic agents). It requires ongoing monitoring — testosterone level, hematocrit, PSA and symptoms — rather than a set-and-forget prescription." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Diagnosis rests on two separate morning total-testosterone measurements below the reference range, together with consistent symptoms; a single reading is not enough. Your clinician chooses the form and dose, targets a physiologic range, and rechecks labs — commonly around 6 to 12 weeks after starting or adjusting, then periodically." },
          { type: "para", text: "For men who want to preserve fertility, enclomiphene is offered inside the TRT program as an alternative: rather than replacing the hormone, it nudges the brain's own signaling so the body makes more of its own testosterone, which protects sperm production. Your clinician decides whether it fits your goals and your labs." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and not a recommendation for any treatment. Testosterone is FDA-approved for the use described above; it is not approved for men with normal levels or for anti-aging. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "glutathione",
    category: "MITOCHONDRIAL & CELLULAR ENERGY",
    title: "Glutathione — the full review",
    subtitle: "ENDOGENOUS TRIPEPTIDE ANTIOXIDANT",
    standfirst: "This is the deeper look behind the short version — what glutathione does in the body, why the oral form is a poor route, what the skin-lightening and Parkinson's studies actually measured, the safety record in detail, who it is not for in full, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "Glutathione is a tiny protein of three amino acids that every cell in the body manufactures for itself. It is the body's main internal antioxidant and its principal tool for neutralizing reactive by-products of metabolism, including in the liver. Levels fall with illness and with age, which is part of why it is used for skin tone, oxidative stress, and general recovery. Swallowed glutathione is broken down before it can be absorbed intact, which is the reason it is given by injection, IV, or nebulizer instead of as an oral supplement." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["General antioxidant and oxidative stress", "Small human studies measured blood markers rather than outcomes."],
            ["Skin tone and brightening", "The most-marketed use; the trials behind it are small and mixed."],
            ["Chemotherapy side effects and neuropathy", "Studied as an add-on in oncology, with results that need an oncologist's input."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "As the body's primary intracellular antioxidant, glutathione works by donating electrons to neutralize reactive oxygen species and other reactive by-products of normal metabolism, and it plays a central role in liver detoxification pathways. Because oral glutathione is largely broken down by digestion before it can be absorbed intact, routes that bypass the digestive system — injection, intravenous infusion, or nebulized inhalation — are used instead." },
          { type: "para", text: "The proposed skin-brightening effect is thought to work through glutathione's influence on melanin production, shifting pigment production toward a lighter form of melanin, though the underlying biochemistry is better established in laboratory settings than confirmed in controlled human skin studies." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "Small human studies of glutathione have generally measured blood markers of oxidative stress rather than direct clinical outcomes. Skin tone and brightening is the most heavily marketed use, but the trials behind it are small and their results are mixed." },
          { type: "para", text: "Glutathione has also been studied as an add-on therapy for chemotherapy side effects and chemotherapy-induced neuropathy in oncology settings, where results require interpretation" },
          { type: "para", text: "alongside a patient's oncologist. Across all these uses, the human evidence base is limited in size and consistency relative to how widely the compound is marketed." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“Oral glutathione supplements raise your levels the way an infusion does.” Swallowed glutathione is largely broken down during digestion before it can be absorbed intact, which is why injectable, IV, and nebulized forms are used instead.",
            "“It's a proven skin-lightening treatment.” The trials behind the skin-brightening use are small and their results are mixed, not a settled, consistent finding.",
            "“It's approved for detoxification or wellness use.” No form of glutathione is FDA-approved for skin brightening, detoxification, or general wellness use.",
            "“It's risk-free because it's a substance the body already makes.” Naturally occurring does not mean risk-free by injection; reactions, and contamination in compounded product, are real considerations.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone with asthma or reactive airways, where an inhaled or nebulised form is proposed.",
            "Anyone with a history of anaphylaxis or severe drug allergy.",
            "Anyone with liver disease or abnormal liver tests.",
            "Pregnant or breastfeeding patients, and anyone on chemotherapy without involving their oncologist.",
          ] },
          { type: "para", text: "Competitive athletes: Glutathione itself is not prohibited by WADA. Athletes in tested sport should be aware that WADA's M2 category restricts large-volume intravenous infusions (generally above 100 mL within a 12-hour period) except under specific permitted circumstances, which can affect how an infusion is administered rather than whether glutathione itself is allowed." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Not approved for the uses it is marketed for. Injectable and IV glutathione is widely offered for skin brightening, detoxification and wellness. None is an FDA-approved use. Human outcome evidence is limited. Regulators in several countries have warned about injectable skin-lightening products specifically. Well tolerated is not the same as effective. Both need to be true." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "A tripeptide (glutamate-cysteine-glycine) synthesized endogenously in every human cell; the body's principal intracellular antioxidant. Levels decline with illness and age. Oral bioavailability is poor; clinical and wellness use relies on injection, IV infusion, or nebulization. Studied as an oncology add-on for chemotherapy-induced neuropathy and other side effects. Contamination and sterility issues have been a recurring problem in compounded glutathione products." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. Glutathione is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "mots-c",
    category: "MITOCHONDRIAL & CELLULAR ENERGY",
    title: "MOTS-c — the full review",
    subtitle: "MITOCHONDRIAL-DERIVED PEPTIDE",
    standfirst: "This is the deeper look behind the short version — where this peptide's blueprint actually comes from, what the exercise study found and what it didn't, the difference between the peptide itself and the analog that was actually tested in people, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "MOTS-c is a small, lab-synthesized chain of 16 amino acids. What makes it scientifically unusual is where its blueprint comes from: almost everything a cell makes is encoded by nuclear DNA, but MOTS-c's instructions sit inside a short stretch of the mitochondrial genome — the DNA carried by mitochondria, the structures inside cells that generate energy. For decades, mitochondrial DNA was assumed to code only for a handful of energy-machinery proteins; MOTS-c is one of a small, only recently recognized family of \"mitochondrial-derived peptides\" that appear to let mitochondria send signals elsewhere in the cell and body. It was discovered in 2015 by researchers at the USC Leonard Davis School of Gerontology, through a bioinformatic screen of previously overlooked mitochondrial coding regions, published in Cell Metabolism. It is sold today as a subcutaneous injectable, through compounding pharmacies and online research-chemical vendors, marketed for metabolic health, weight loss, exercise performance, and general longevity — none of which is an FDA-recognized indication, and almost none of which has actually been tested by giving the peptide to a person." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Metabolic health and insulin sensitivity", "Some have used it for this. Not tested in people."],
            ["Weight loss and fat metabolism", "Some have used it for this. Not tested in people."],
            ["Exercise performance", "Some have used it for this. Not tested in people."],
            ["Longevity and anti-aging", "Based on aging-laboratory research; human data is limited to correlational studies, which does not establish that supplementing it affects human aging or lifespan."],
            ["Mitochondrial health generally", "A plausible extension of MOTS-c's role as a mitochondrial-signaling molecule, but not a validated clinical endpoint tested in any human trial of this peptide."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "The leading proposed mechanism is that MOTS-c activates AMPK (AMP-activated protein kinase), a master cellular fuel-sensing enzyme that also switches on with exercise, calorie restriction, and drugs like metformin. In laboratory studies, MOTS-c-driven AMPK activation is linked to increased glucose uptake into muscle, increased fat burning, and suppressed glucose output from the liver. A second, AMPK-independent pathway has also been proposed, in which MOTS-c moves into the cell nucleus under metabolic stress and interacts with stress-response genes." },
          { type: "para", text: "The \"exercise mimetic\" reputation comes from a 2021 laboratory study in which giving MOTS-c to Laboratory research reported roughly doubled treadmill running duration versus untreated controls. The same paper found that a bout of exercise raises a person's own MOTS-c — roughly twelve-fold in skeletal muscle tissue and about 1.5 to 1.6-fold in circulating blood, in a small ten-person sample. That is a different kind of evidence than an injection working: it shows exercise triggers a rise in the body's own MOTS-c, not that injecting MOTS-c reproduces what exercise does. No human study has tested whether administering the peptide improves running capacity, VO2 max, strength, or any other performance measure." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "Two very different bodies of research exist for MOTS-c, and marketing routinely blurs them together. The first is observational human research measuring people's own natural circulating" },
          { type: "para", text: "MOTS-c: several published cohort studies have linked lower blood MOTS-c to higher fasting insulin and worse insulin resistance, reported reduced levels in type 2 diabetes, and correlated levels with muscle mass and physical performance in older adults. A 2025 study of 169 people testing MOTS-c as a brain-aging biomarker found at best a weak, inconsistent signal, explicitly describing \"poor discriminatory power.\" None of this involves giving anyone MOTS-c — it is blood-level correlation research, not evidence that adding more of it produces a benefit. The second body of research — actually administering MOTS-c to people — is extremely thin, bordering on nonexistent for the peptide people are being sold. FDA's own review states it has \"not identified any human exposure data on drug products containing MOTs-C administered via any route of administration.\" The only related interventional human data comes from CB4211, a chemically modified analog of MOTS-c — a different molecule, not MOTS-c itself — which went through a Phase 1a/1b randomized, placebo-controlled trial of roughly 88 people. It was reasonably well tolerated but was temporarily paused for injection-site reactions, showed modest liver-enzyme reductions but no significant difference in liver fat versus placebo, and the company developing it subsequently dissolved and discontinued the program." },
          { type: "para", text: "For the actual native peptide, the first real controlled human efficacy trial — a Phase 2a randomized, double-blind, placebo-controlled study testing MOTS-c by subcutaneous injection in roughly 120 adults with prediabetes and overweight or obesity — only began recruiting in February 2026, with an estimated completion date of May 2028. It has reported nothing yet, which means interventional human evidence for the peptide actually sold under this name is, as of now, essentially zero completed studies." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's an exercise-in-a-shot, proven in humans.” The dramatic exercise-capacity finding is a laboratory result. The human data runs the opposite direction: exercising raises a person's own MOTS-c — it does not show that injecting it gives you the effects of exercise.",
            "“Because the body makes it naturally, it must be safe to inject at any dose.” FDA's own conclusion is the opposite: it has not identified any human exposure data on drug products containing MOTS-c administered by any route.",
            "“There's a ton of research on this, it's well established.” The overwhelming majority is laboratory mechanism work, plus human studies that only measure existing blood MOTS-c levels — essentially none involves administering MOTS-c to a person.",
            "“The 2026 advisory vote means MOTS-c is basically approved now.” That vote was non-binding, passed narrowly over FDA staff's explicit objection, and only concerned whether pharmacies may compound with it — not whether it works or is safe.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone expecting an established human safety profile — none exists at any dose.",
            "Pregnant or breastfeeding patients, or anyone trying to conceive.",
            "Anyone with active cancer, a cancer history, or an undiagnosed mass — the mechanism touches cell-growth signaling pathways not fully characterized in humans, and no carcinogenicity studies exist.",
            "Anyone on metformin or another AMPK-pathway-active medication — a shared mechanism raises an unstudied interaction concern.",
            "Anyone sourcing product from an unverified research-use-only vendor.",
            "Competitive athletes subject to WADA-code testing.",
          ] },
          { type: "para", text: "Competitive athletes: MOTS-c is prohibited at all times, in and out of competition, under WADA category S4 (Hormone and Metabolic Modulators), listed as an AMPK activator. A therapeutic use exemption is not a realistic path around this, since a TUE requires an approved therapeutic use and MOTS-c has none. Anti-doping operates on strict liability regardless of a clinician's recommendation or the fact that the substance is naturally produced by the body." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "Never approved, and the human record is essentially empty. FDA states it has no human exposure data for MOTS-c administered by any route. An advisory committee voted narrowly (7-5, two abstentions) in July 2026 to recommend it for a compounding list, for obesity and osteoporosis — advisory, not acted on, not approval. The one real human trial just started. A controlled trial of the actual peptide began enrolling in February 2026 and has not reported. Everything else is laboratory work, or blood-level correlation studies that never administered the peptide at all. The exercise-mimetic story is usually told backwards — the human finding is that exercise raises your own MOTS-c, not that injecting it replicates exercise." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "A 16-amino-acid peptide encoded within the mitochondrial genome, discovered in 2015 through a bioinformatic screen of overlooked mitochondrial coding regions, published in Cell Metabolism. Proposed mechanism centers on AMPK activation, the same fuel-sensing pathway engaged by exercise, calorie restriction, and metformin. FDA states it has not identified any human exposure data on drug products containing MOTS-c administered via any route of administration. The only related interventional human data comes from CB4211, a chemically distinct analog, not native MOTS-c; its Phase 1a/1b trial found no significant difference in liver fat versus placebo, and the program was discontinued. The first controlled human efficacy trial of the native peptide (NCT07505745, ~120 adults with prediabetes/overweight-obesity) began recruiting February 2026, with results not expected before 2028." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. MOTS-c is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "pt-141",
    category: "SEXUAL & REPRODUCTIVE HEALTH",
    title: "PT-141 — the full review",
    subtitle: "MELANOCORTIN RECEPTOR AGONIST (BREMELANOTIDE)",
    standfirst: "This is the deeper look behind the short version — the real numbers behind the approved trials, how the approved product and a compounded preparation differ, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "PT-141, also known by its chemical name bremelanotide, is a lab-made, seven-amino-acid cyclic peptide built to mimic a natural hormone called alpha-melanocyte-stimulating hormone (α-MSH). As Vyleesi, it is FDA-approved for one specific population: premenopausal women with hypoactive sexual desire disorder (HSDD), where low desire causes marked distress and isn't better explained by another medical or psychiatric condition, a relationship problem, or a medication. Separately from Vyleesi, the same molecule is available as a compounded preparation, sold under its research name PT-141, used off-label for other patients — notably men, for whom no FDA-approved option currently exists for this purpose." },
          { type: "para", text: "It is most often described alongside PDE5 inhibitors like sildenafil, but the two work in essentially different places in the body. PDE5 inhibitors act locally, relaxing blood vessels in the penis, and only amplify arousal that is already present. Bremelanotide acts further upstream, on receptors in the brain and central nervous system involved in the desire and arousal pathway itself, independent of local blood flow — which is why it is taken as a single as-needed injection well before activity rather than \"on demand,\" and why its side-effect pattern looks nothing like a PDE5 inhibitor's." },
          { type: "para", text: "The approved product and the compounded product are not interchangeable. Vyleesi is a single, standardized 1.75 mg subcutaneous auto-injector dose with FDA-reviewed manufacturing controls. Compounded or gray-market \"PT-141\" — including nasal sprays and higher-dose vials — is not reviewed by FDA for identity, purity, potency, or sterility, and the nasal route it commonly uses is the same route an earlier FDA safety review flagged strongly enough to end that entire development program in 2007." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Low sexual desire in premenopausal women (the approved use)", "Two large trials showed a real, statistically significant but modest benefit on desire and distress scores; no significant improvement was seen in satisfying sexual events. Nausea and flushing are common side effects."],
            ["Male erectile dysfunction, off-label", "Based on an older, FDA safety-halted program; its largest supporting trial (342 men) carries an unresolved 2023 journal integrity notice."],
            ["Male low libido without diagnosed ED", "The male trials that exist measured erectile response, not a validated low-desire outcome; any libido-specific benefit is extrapolated rather than directly demonstrated."],
            ["Female use outside the approved population", "The label explicitly excludes postmenopausal women; the pivotal trials enrolled premenopausal women only, and no dedicated trial for other populations was identified."],
            ["Higher-dose or intranasal protocols sold online", "This is the specific route an earlier FDA review flagged for a blood-pressure signal strong enough to end the intranasal development program; no modern trial of these doses exists."],
            ["General desire or performance enhancement", "Not tested in any population without a diagnosed condition; extrapolated from the drug's proposed brain mechanism, not a demonstrated human effect."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Bremelanotide is a melanocortin receptor (MCR) agonist — it nonselectively activates several receptor subtypes, most consequentially MC4R, found on central-nervous-system neurons implicated in laboratory research of sexual desire and arousal circuits, and MC1R, found on melanocytes, activation of which is the mechanistic explanation for the drug's hyperpigmentation side effect. The FDA label is direct that the underlying story stops there: \"The mechanism of action of bremelanotide for the treatment of hypoactive sexual desire disorder is unknown.\" What is documented is receptor pharmacology and the downstream effects — blood pressure and heart rate changes, nausea, pigmentation — that follow from activating multiple melanocortin receptor subtypes at once, not a validated causal chain explaining exactly how that translates into increased desire in a given patient." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The approved indication rests on two identical Phase 3, randomized, placebo-controlled trials (the RECONNECT program) enrolling 1,247 premenopausal women over 24 weeks. Both co-primary endpoints — a validated desire-domain score and a distress score — showed statistically significant improvement over placebo, though the effect sizes were modest by conventional standards (roughly 0.27 to 0.39 on the standard scale). On the secondary endpoint that arguably matters most to a patient — the number of satisfying sexual events — there was no statistically significant difference from placebo. Nausea occurred in 40% of participants (versus 1.3% on placebo) and flushing in 20% (versus 0.3%); 18% of the treatment group discontinued the trial, 8% specifically for nausea. The off-label male-use literature is considerably thinner and older, tracing almost entirely to the original 1990s–2000s intranasal PT-141 program that FDA safety concerns ended in 2007– 2008, before it reached approval. The most-cited controlled study — 342 men who had not responded to sildenafil — reported a \"positive clinical response\" in 33.5% of the bremelanotide group versus 8.5% on placebo, but this specific paper carries a formal, unresolved 2023 journal Expression of Concern. No trial has tested the doses or routes sold today, and no dedicated trial exists for postmenopausal women or for general enhancement use in people without a diagnosed condition." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“It's basically like Viagra.” Mechanistically these work in close to opposite places. PDE5 inhibitors act peripherally on blood vessels and only amplify arousal already present; bremelanotide acts centrally, in brain pathways linked to desire, independent of local blood flow — which is also why the side-effect profiles look nothing alike.",
          ] },
          { type: "list", items: [
            "“It's approved for everyone — women, men, general enhancement.” The label is narrow and explicit: approved only for premenopausal women with a specific diagnosed form of low desire. It states outright that it is not indicated for postmenopausal women, not indicated for men, and not indicated for sexual performance enhancement.",
            "“Nausea and flushing are rare side effects.” They are the opposite of rare. Nausea occurred in 40% of trial participants (versus 1.3% on placebo) and flushing in 20% (versus 0.3%) — common enough that 18% of the treatment group left the trial early.",
            "“The PT-141 sold online or through a compounding pharmacy is the same product, at the same dose, as Vyleesi.” It generally is not. Vyleesi is a single, standardized, FDA-reviewed dose; compounded or gray-market \"PT-141\" — including nasal sprays and higher-dose vials — is unregulated for identity, purity, potency, and sterility.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Uncontrolled hypertension or known cardiovascular disease — an explicit label contraindication, since bremelanotide causes transient blood pressure and heart rate changes after each dose.",
            "Pregnancy, or trying to conceive without reliable contraception — animal studies showed fetal harm at exposures well above the maximum recommended human dose. Animal findings are the earliest stage of research and no human study has confirmed them; where the possible harm is to a pregnancy, that signal is reason enough to exclude rather than wait.",
            "Low desire caused by another medical condition, psychiatric condition, relationship problem, or medication — the approved trials specifically excluded these causes.",
            "Postmenopausal women — excluded from the pivotal trials and explicitly outside the label's indication.",
            "Repeated or frequent dosing beyond label guidance, particularly for anyone at higher risk of visible pigmentation change.",
            "Anyone sourcing \"PT-141\" from an unregulated online vendor.",
            "More than one dose in 24 hours, or more than about 8 doses a month — both exceed the tested and labeled regimen.",
          ] },
          { type: "para", text: "Competitive athletes: The terms \"melanocortin,\" \"bremelanotide,\" \"PT-141,\" and \"melanotan\" do not appear on the current WADA Prohibited List, and no anti-doping sanction case involving it was identified — likely reflecting that bremelanotide's FDA approval (Vyleesi) keeps it out of WADA's catch-all category for substances with no approval anywhere. This should be read as \"not found,\" not as a guaranteed clearance; a competing athlete should independently confirm current status through Global DRO or their national anti-doping agency, and should know that an unregulated compounded or gray-market vial carries its own contamination risk that could trigger a positive test for an unrelated substance." },
          { type: "para", text: "Approved product, or a compounded preparation — and the difference matters" },
          { type: "para", text: "This is an FDA-approved medicine. It is available as the manufacturer's own approved product, and — separately — as a compounded preparation. Which one is being offered is always stated plainly. If the approved product is right, that is what gets prescribed:" },
          { type: "list", items: [
            "The manufacturer's pen or vial. Reviewed by the FDA for safety, effectiveness and quality, exactly as labeled.",
            "Filled at a licensed pharmacy. Dispensed from your prescription like any other approved medicine. If a compounded preparation is clinically appropriate instead, it is prepared by a licensed 503A compounding pharmacy:",
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not itself an FDA-approved product — but it is still made under a licensed pharmacy's enforceable standards, not an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "There is an approved product, for one specific use. Bremelanotide approved as VYLEESI for acquired generalised hypoactive sexual desire disorder in premenopausal women — a real, statistically significant but modest benefit, with nausea (40%) and flushing (20%) common. Use outside that group is off-label. That includes men, postmenopausal women, and general enhancement — all resting on an older program FDA safety-halted in 2007, whose largest supporting trial carries an unresolved 2023 journal integrity notice. An approval for one population, on one outcome measure, is not evidence for another population or a different claim." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "Bremelanotide descends from melanotan II, a 1980s University of Arizona sunless-tanning candidate; an unplanned erection during self-experimentation redirected research toward sexual-dysfunction use. FDA halted the original intranasal PT-141 development program in 2007 over blood-pressure increases; the subsequently reformulated subcutaneous version, focused on premenopausal HSDD, became Vyleesi, approved June 21, 2019 (NDA 210557). Vyleesi was only the second female-libido medication FDA has ever approved, after flibanserin (Addyi) in 2015. Neither \"bremelanotide\" nor \"PT-141\" currently appears on FDA's active 503A Bulks List, the nominated-but-withdrawn table, or the Category 2 significant-safety-risk table. A 2020 FDA warning letter to a compounding pharmacy named \"Bremelanotide (PT-141)\" directly among substances used outside the exemptions available to 503A compounders." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. PT-141 is FDA-approved for the uses described as approved above. Off-label uses discussed here are not FDA-approved uses. A compounded preparation, where used instead of the approved product, is not itself an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any unapproved purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
  {
    kind: "peptide",
    slug: "ss-31",
    category: "MITOCHONDRIAL & CELLULAR ENERGY",
    title: "SS-31 — the full review",
    subtitle: "CARDIOLIPIN-TARGETING TETRAPEPTIDE (ELAMIPRETIDE)",
    standfirst: "This is the deeper look behind the short version — the approval history, including an earlier rejection, the two large trials that failed to hit their main goals, why the one approval that exists is a narrow, conditional one, and what your consultation covers.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          { type: "para", text: "SS-31, known by its drug development name elamipretide, is a four-amino-acid peptide engineered to be drawn specifically into the inner membrane of mitochondria, the structures inside cells that generate energy. It works differently from most compounds in this catalog: rather than acting on a hormone receptor, it binds a molecule called cardiolipin, found almost exclusively in that inner mitochondrial membrane, which organizes the machinery that produces cellular energy." },
          { type: "para", text: "Under the brand name Forzinity, elamipretide is FDA-approved — the only compound in this catalog that can say that — but only for one ultra-rare, genetic, pediatric-onset disease called" },
          { type: "para", text: "Barth syndrome, and only after an earlier rejection. What is sold through compounding pharmacies and peptide vendors as \"SS-31\" for general longevity or mitochondrial-health use is a different, untested product, aimed at a population and use the approved drug's trials never studied." },
        ],
      },
      {
        heading: "What people use it for",
        blocks: [
          { type: "table", columns: ["USED FOR", "WHAT THAT MEANS"], rows: [
            ["Barth syndrome — muscle strength", "Approved in 2025 through an accelerated pathway, based on a muscle-strength surrogate, after an earlier rejection; the required confirmatory trial is due in 2030 and approval could be withdrawn if it fails."],
            ["Age-related vision loss (geographic atrophy)", "The pivotal 176-person trial missed both of its main measures; a secondary anatomical finding is being tested in an ongoing, larger trial. Not an approved use."],
            ["Primary mitochondrial myopathy", "The pivotal 218-person trial failed both of its main measures; only an unreplicated subgroup showed benefit. Not an approved use."],
            ["Heart failure", "A small trial found no meaningful benefit; the use does not appear to be in active further development."],
            ["General mitochondrial health, longevity, or anti-aging", "No controlled human trial has tested this use in healthy adults; this is the population and goal the compounded product is actually sold for."],
          ] },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          { type: "para", text: "Cardiolipin folds the inner mitochondrial membrane into the folds that organize the electron transport chain, the machinery that produces ATP, the cell's energy currency. When cardiolipin is damaged — by oxidative stress, aging, or disease — that folded structure collapses, the electron transport chain leaks more cell-damaging byproducts, and that damages more cardiolipin, a self-reinforcing decline implicated in rare mitochondrial diseases and, more broadly, in general age-and disease-related mitochondrial dysfunction." },
          { type: "para", text: "SS-31 binds cardiolipin directly, without disrupting the membrane itself, and is proposed to stabilize that folded structure, better organize the electron transport chain, reduce the leakage of damaging byproducts, and support ATP production. This mechanism is well characterized at the biochemical level — but as the research below shows, that has not reliably translated into positive results in the largest human trials that have tested it." },
        ],
      },
      {
        heading: "What the research actually looked at",
        blocks: [
          { type: "para", text: "The one approval that exists — for Barth syndrome, a rare genetic disease affecting heart and skeletal muscle — followed a difficult path: an original application was rejected by the FDA in 2025 after a lengthy review, and the drug was ultimately approved later that year only under an accelerated pathway, based on a muscle-strength measurement used as a surrogate for benefit, from a small 12-person trial whose blinded phase did not show a significant effect on its original primary measures. The confirmatory trial FDA required as a condition of approval only began in early 2026, with results not due until 2030, and the approval can be withdrawn if that trial fails." },
          { type: "para", text: "In two other serious diseases, elamipretide's largest, most rigorous trials did not succeed. A 218-person Phase 3 trial in a genetic muscle disease called primary mitochondrial myopathy failed both of its main measures, with only an unreplicated subgroup finding a benefit. A separate 176-person Phase 2 trial in a form of age-related vision loss (geographic atrophy) also missed both of its main measures, though a secondary anatomical signal is being tested further in an ongoing, larger trial. A small heart-failure trial found no meaningful benefit, and elamipretide no longer appears in the company's stated development pipeline for that use. None of this trial history — in any of these diseases — was conducted in healthy adults, or with a longevity or general-wellness goal. That evidence base, for the way SS-31 is actually marketed through compounding today, does not exist." },
        ],
      },
      {
        heading: "Common misunderstandings",
        blocks: [
          { type: "list", items: [
            "“FDA-approved means broadly proven safe and effective.” It is approved for one muscle-strength measurement in one ultra-rare pediatric genetic disease, through an accelerated pathway, after an earlier outright rejection — that says nothing about a healthy adult using it for a different goal.",
            "“The mitochondrial mechanism is proven, so the clinical benefit must be too.” The underlying biochemistry is well documented, but the largest controlled trials in two separate serious diseases — a muscle disease and an eye disease — both failed to meet their main goals.",
            "“Compounded SS-31 is basically the same as the approved drug.” The approved product is a specific formulation, at a specific dose, for a specific disease; compounded \"SS-31\" is a different, untested product, and compounding a near-copy of a drug that already has an approved version sits on uncertain legal footing.",
            "“It's basically proven for wellness because it has so much trial history.” It has more human trial data than almost anything else in this catalog, but that data comes from specific serious diseases, much of it endpoint-negative — not from the healthy-adult, longevity-focused use it is actually marketed for.",
          ] },
        ],
      },
      {
        heading: "Who it is not for",
        blocks: [
          { type: "list", items: [
            "Anyone extrapolating the Barth syndrome approval, or any of the disease-specific trial results, to general wellness or longevity use — an untested population and goal.",
            "Pregnant or breastfeeding patients, or anyone trying to conceive — no human pregnancy or lactation data exists.",
            "Anyone with a known hypersensitivity — reactions including rash, facial swelling, and respiratory symptoms have been reported.",
            "Anyone treating the failed-endpoint trials (muscle disease, eye disease, heart failure) as evidence of proven benefit.",
            "Anyone sourcing product from an unverified compounder or vendor with no confirmed dose, purity, or sterility.",
            "Competitive athletes — status has changed recently with the new approval, so current WADA/USADA status should be independently verified.",
          ] },
          { type: "para", text: "Competitive athletes: SS-31 does not currently appear by name on the WADA Prohibited List, and now that it holds an FDA approval for Barth syndrome, it may no longer clearly fit the catch-all category applied to unapproved substances. This is a recent, still-settling status rather than a firm, permanent clearance — competitive athletes should verify current status with their sport's anti-doping authority before use." },
        ],
      },
      {
        heading: "Who makes this, and under what rules",
        blocks: [
          { type: "para", text: "Everything dispensed here is prepared by a licensed 503A compounding pharmacy — not bought from a supplier and repackaged, and not sourced from an online seller. That designation carries specific, enforceable obligations:" },
          { type: "list", items: [
            "A prescription in your name. Compounded from a prescription for one identified patient, after an evaluation.",
            "Licensed and inspected. A state license, subject to inspection by the state board of pharmacy.",
            "Sterile preparation to a published standard. USP standards.",
            "A paper trail. A lot number and beyond-use date on every preparation.",
          ] },
          { type: "para", text: "A compounded preparation is not an FDA-approved medicine — but it is the difference between a licensed pharmacy working to a standard and an unregulated website." },
        ],
      },
      {
        heading: "Where this stands",
        blocks: [
          { type: "para", text: "One narrow approval exists, reached only after an earlier rejection. Approved in 2025 for muscle strength in Barth syndrome specifically, through an accelerated pathway with a required confirmatory trial due in 2030 — not a clean, first-pass approval. The largest trials in two other serious diseases both fell short. A 218-person muscle-disease trial and a 176-person eye-disease trial each failed to meet their main measures. Real human trial history exists here, more than for most compounds in this catalog — but almost none of it is in the healthy-adult, longevity-focused population the compounded product is sold to." },
        ],
      },
      {
        heading: "Clinical detail",
        blocks: [
          { type: "para", text: "A four-amino-acid peptide (elamipretide, formerly Bendavia/MTP-131) that binds cardiolipin in the inner mitochondrial membrane. FDA-approved as Forzinity (elamipretide hydrochloride) in September 2025 for muscle strength in Barth syndrome, in patients 30 kg and over, via accelerated approval, after an earlier Complete Response Letter in May 2025. Confirmatory trial (4TAZPower) began dosing in early 2026; results due 2030, with approval revocable if the trial fails. Phase 3 trial in primary mitochondrial myopathy (n=218) failed both co-primary endpoints; Phase 2 trial in geographic atrophy (n=176) failed both co-primary endpoints, with a secondary signal under further study. Not on FDA's 503A or 503B compounding bulk-substance lists or the July 2026 PCAC review docket; compounding a near-copy of an already-approved drug carries its own distinct legal restriction." },
          { type: "para", text: "The information on this page is general education. It is not medical advice and it is not a recommendation for any treatment. SS-31 is not an FDA-approved medicine for the uses described here. A compounded preparation is not an FDA-approved product and has not been reviewed by the FDA for safety, effectiveness or quality. Descriptions of what this is used for reflect how it is commonly used and discussed. They are not claims that it is effective for any purpose. Any prescription follows an individual evaluation by a licensed provider and is issued only where that provider judges it clinically appropriate. A prescription is never guaranteed." },
        ],
      },
    ],
  },
];

export function getFullReview(kind: "peptide" | "blend", slug: string) {
  return FULL_REVIEWS.find((r) => r.kind === kind && r.slug === slug);
}

/** The approved PDF, still shipped and linked as a download from each page. */
export function reviewPdfUrl(kind: "peptide" | "blend", slug: string) {
  return kind === "peptide"
    ? `/education/peptides/${slug}.pdf`
    : `/education/blends/${slug}.pdf`;
}
