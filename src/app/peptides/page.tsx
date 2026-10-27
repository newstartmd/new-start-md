import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, Disclaimer } from "@/components/ui";
import SystemMap from "@/components/SystemMap";
import { SITE } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Peptide library — start with your body",
  description:
    "A plain map of the peptides people ask about, grouped by the body system they act in and marked by where each one actually stands with the FDA. Education only.",
  alternates: { canonical: `${SITE.url}/peptides` },
  openGraph: {
    title: "Peptide library — start with your body",
    description:
      "Peptides grouped by the body system they act in, each marked by where it stands with the FDA.",
    url: `${SITE.url}/peptides`,
  },
};

export default function PeptidesPage() {
  return (
    <>
      {/* Hero */}
      <div className="glow border-b border-line-200">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl animate-rise">
            <Eyebrow>Peptide library</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium leading-[1.05] sm:text-5xl">
              Start with your body,
              <br />
              <span className="italic text-royal-600">not a product name.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-500">
              Most peptide sites hand you an alphabet of acronyms. Pick the part of the
              body you care about, and see which compounds are studied there, what
              people use each one for, and where it really stands with the FDA.
            </p>
          </div>
        </Container>
      </div>

      {/* The map */}
      <Section>
        <SystemMap />
      </Section>

      {/* What makes ours different */}
      <Section className="border-t border-line-200 bg-mist-50">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,360px)] lg:items-center">
          <div className="max-w-xl">
            <Eyebrow>Why ours reads differently</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">We show the evidence, not just the hype.</h2>
            <p className="mt-4 text-slate-500">
              Every profile tells you plainly whether a compound is FDA-approved, made
              by a licensed compounding pharmacy, still in clinical trials, or only in
              early research. When something has never been tested in people, we say so
              instead of softening it. That honesty is the point: the compounds here
              are prescribed only when a licensed provider decides they fit you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/products">Browse treatments</Button>
              <Button href="/how-it-works" variant="ghost">
                How care works
              </Button>
            </div>
          </div>

          {/* Provenance / verify callout */}
          <div className="rounded-xl2 border border-line-200 bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Where your medicine comes from
            </p>
            <h3 className="mt-2 text-2xl text-navy-950">Every order, traceable.</h3>
            <p className="mt-3 text-sm text-slate-500">
              When a prescription is filled, the pharmacy, lot, and ship date are written
              to a tamper-evident record you can look up yourself — so you never have to
              take &ldquo;it&apos;s legit&rdquo; on faith.
            </p>
            <Link
              href="/verify"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal-600 hover:text-royal-700"
            >
              Verify an order <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 max-w-3xl border-t border-line-200 pt-6">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Section>
    </>
  );
}
