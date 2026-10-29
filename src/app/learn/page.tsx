import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, Disclaimer } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE, signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";
import { publishedArticles, plannedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Learn — plain answers about peptides & telehealth care",
  description:
    "Straightforward education on peptides, GLP-1 care, compounded medication, hormones, labs and what a telehealth visit involves. Plain answers, not marketing.",
  alternates: { canonical: `${SITE.url}/learn` },
  openGraph: {
    title: "Learn — plain answers about peptides & telehealth care",
    description:
      "Plain-English explanations of how peptide and telehealth care actually work — so you can judge any clinic on the merits.",
    url: `${SITE.url}/learn`,
  },
};

type ArticleGroup = { heading: string; blurb: ReactNode; slugs: readonly string[] };

const GROUPS: ArticleGroup[] = [
  {
    heading: "Compare & decide",
    blurb: (
      <>
        The guides most sites don&apos;t write: honest head-to-head comparisons, and how to judge
        the evidence on any peptide yourself. Start from the{" "}
        <Link href="/evidence" className="font-semibold text-royal-600 hover:text-royal-700">
          graded evidence
        </Link>{" "}
        whenever you want the primary sources.
      </>
    ),
    slugs: [
      "semaglutide-vs-tirzepatide",
      "growth-hormone-peptides-compared",
      "bpc-157-vs-tb-500",
      "how-to-read-peptide-evidence",
    ],
  },
  {
    heading: "Start with weight & metabolic health",
    blurb: (
      <>
        The foundations of weight and metabolic health. Browse the{" "}
        <Link href="/products?goal=weight-loss" className="font-semibold text-royal-600 hover:text-royal-700">
          weight-loss protocols
        </Link>
        , then read the{" "}
        <Link href="/evidence" className="font-semibold text-royal-600 hover:text-royal-700">
          graded evidence
        </Link>{" "}
        behind each one.
      </>
    ),
    slugs: ["understanding-obesity", "type-2-diabetes-basics", "how-glp-1-medicines-work", "why-results-vary"],
  },
  {
    heading: "Understand peptide therapy & the evidence",
    blurb: (
      <>
        How peptides, hormones, compounded medication and FDA oversight fit together. For the full
        field, browse the{" "}
        <Link href="/peptides" className="font-semibold text-royal-600 hover:text-royal-700">
          peptide library
        </Link>
        .
      </>
    ),
    slugs: [
      "compounded-medication-explained",
      "peptides-and-hormone-therapy",
      "mitochondrial-peptides-explained",
      "how-the-fda-sees-peptide-medicines",
      "why-peptides-are-given-by-injection",
      "hormones-signals-peptides",
    ],
  },
  {
    heading: "Prepare for a clinician-guided conversation",
    blurb: (
      <>
        What a telehealth visit and lab review involve, and how to handle medication safely. See{" "}
        <Link href="/how-it-works" className="font-semibold text-royal-600 hover:text-royal-700">
          how care works
        </Link>
        .
      </>
    ),
    slugs: [
      "what-a-telehealth-visit-involves",
      "why-your-labs-matter",
      "storing-your-peptide-medication",
      "glp-1-dosing-safety",
      "glp-1-shortage-and-compounding",
      "peptides-vs-research-chemicals",
    ],
  },
];

export default function LearnIndex() {
  const articles = publishedArticles();
  const planned = plannedArticles();

  return (
    <>
      {/* Hero */}
      <div className="glow border-b border-line-200">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl animate-rise">
            <Eyebrow>Learn</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium leading-[1.05] sm:text-5xl">
              Plain answers,
              <br />
              <span className="italic text-royal-600">not marketing.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-500">
              Straightforward explanations of how this kind of care actually works — peptides, GLP-1
              medicines, compounded medication, hormones and labs — so you can judge any clinic,
              including ours, on the merits.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <div className="space-y-14">
          {GROUPS.map((group) => {
            const items = group.slugs
              .map((slug) => articles.find((a) => a.slug === slug))
              .filter((a): a is NonNullable<typeof a> => Boolean(a));
            if (items.length === 0) return null;
            return (
              <section key={group.heading}>
                <h2 className="text-2xl font-semibold text-navy-950 sm:text-3xl">{group.heading}</h2>
                <p className="mt-3 max-w-3xl text-slate-500">{group.blurb}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {items.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/learn/${a.slug}`}
                      className="group flex flex-col rounded-xl2 border border-line-200 bg-white p-6 transition hover:border-royal-600 hover:shadow-card"
                    >
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-royal-600">{a.topic}</p>
                      <h3 className="mt-2 text-xl font-semibold text-navy-950">{a.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">{a.summary}</p>
                      <p className="mt-4 flex items-center gap-1.5 text-sm text-slate-500">
                        <span>{a.readMinutes} min read</span>
                        <span aria-hidden>·</span>
                        <span className="font-semibold text-royal-600 transition group-hover:gap-2">Read →</span>
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {planned.length > 0 && (
          <div className="mt-16 border-t border-line-200 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">More, in progress</p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {planned.map((a) => (
                <div key={a.slug} className="rounded-xl2 border border-dashed border-line-200 bg-mist-50 p-6 opacity-90">
                  <h3 className="text-lg font-semibold text-navy-950">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{a.summary}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">Coming soon</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Explore / CTA */}
        <div className="mt-16 overflow-hidden rounded-xl2 ocean px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ice-300">Keep going</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Ready to see what fits you?
              </h2>
              <p className="mt-3 max-w-xl text-ice-300">
                Browse the protocols, read the graded evidence behind each compound, or take the
                5-minute assessment and let a licensed provider decide what&apos;s appropriate.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-white">
                <Link href="/products" className="underline underline-offset-4 hover:text-ice-300">Protocols</Link>
                <Link href="/peptides" className="underline underline-offset-4 hover:text-ice-300">Peptide library</Link>
                <Link href="/evidence" className="underline underline-offset-4 hover:text-ice-300">The evidence</Link>
              </div>
            </div>
            <Link
              href={signupUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-navy-950 transition hover:bg-ice-300"
            >
              Start my assessment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 max-w-3xl border-t border-line-200 pt-6">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Learn", path: "/learn" },
        ])}
      />
    </>
  );
}
