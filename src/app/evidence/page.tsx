import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Disclaimer } from "@/components/ui";
import { COMPOUNDS, getCompound } from "@/lib/evidence";
import { reviewsWithoutCompound, reviewTitle } from "@/lib/fullReviews";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "The evidence",
  description:
    "Where every compound we offer actually stands with the research — graded honestly, with links to the primary studies. The proof behind New Start MD.",
};

const BANDS: { grade: string; title: string; blurb: string; tone: string }[] = [
  { grade: "A", title: "Strong human evidence", blurb: "Large randomized trials; FDA-approved for a clear use.", tone: "text-[#12805c]" },
  { grade: "B", title: "Moderate human evidence", blurb: "Real human data, often in a narrower population.", tone: "text-royal-700" },
  { grade: "C", title: "Limited or mixed", blurb: "Small or conflicting human trials — read closely.", tone: "text-gold-700" },
  { grade: "D", title: "Preclinical only", blurb: "No human efficacy trials yet — animal/lab work.", tone: "text-slate-500" },
];

export default function EvidenceIndex() {
  const byGrade = (g: string) =>
    COMPOUNDS.filter((c) => (c.grade[0]?.toUpperCase() ?? "") === g).sort((a, b) =>
      a.name.localeCompare(b.name),
    );

  // Ported reviews that have no graded entry — surfaced as educational overviews.
  const overviews = reviewsWithoutCompound((slug) => Boolean(getCompound(slug)));
  const singleOverviews = overviews
    .filter((r) => r.kind === "peptide")
    .sort((a, b) => reviewTitle(a).localeCompare(reviewTitle(b)));
  const blendOverviews = overviews
    .filter((r) => r.kind === "blend")
    .sort((a, b) => reviewTitle(a).localeCompare(reviewTitle(b)));

  return (
    <>
      <div className="glow border-b border-line-200">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <Eyebrow>The proof</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">
              The evidence, <span className="italic text-royal-600">graded honestly.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-500">
              Most sites make claims. We show you the research — what each compound is, what the
              studies actually found, and where it stands with the FDA. When the evidence is thin,
              we say so. Every citation links to the primary source so you can check it yourself.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <div className="space-y-12">
          {BANDS.map((band) => {
            const items = byGrade(band.grade);
            if (items.length === 0) return null;
            return (
              <div key={band.grade}>
                <div className="flex items-baseline gap-3">
                  <span className={`font-display text-3xl font-semibold ${band.tone}`}>Grade {band.grade}</span>
                  <span className="text-sm font-medium text-navy-950">{band.title}</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{band.blurb}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/evidence/${c.slug}`}
                      className="group rounded-xl2 border border-line-200 bg-white p-5 transition hover:border-royal-600 hover:shadow-card"
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-navy-950">{c.name}</h2>
                        <span className="text-xs text-slate-500">{c.evidence.length} {c.evidence.length === 1 ? "study" : "studies"}</span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-500">{c.oneLiner}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-royal-600 opacity-0 transition group-hover:opacity-100">
                        See the evidence →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational overviews — reviews we publish without a formal evidence
            grade (we don't have authoritative graded data, so we don't assign one). */}
        {(singleOverviews.length > 0 || blendOverviews.length > 0) && (
          <div className="mt-16 border-t border-line-200 pt-12">
            <h2 className="font-display text-3xl font-semibold text-navy-950">
              Also in the library
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Plain-English overviews for the rest of what we educate on — the compounds and
              blend formulas beyond the graded set. These are educational, not graded, and not a
              claim of effectiveness.
            </p>

            {singleOverviews.length > 0 && (
              <div className="mt-8">
                <span className="text-sm font-medium text-navy-950">More compounds</span>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {singleOverviews.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/evidence/${r.slug}`}
                      className="group rounded-xl2 border border-line-200 bg-white p-5 transition hover:border-royal-600 hover:shadow-card"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-navy-950">{reviewTitle(r)}</h3>
                        <span className="text-xs text-slate-500">Overview</span>
                      </div>
                      {r.standfirst ? (
                        <p className="mt-1 line-clamp-2 text-sm text-slate-500">{r.standfirst}</p>
                      ) : null}
                      <span className="mt-4 inline-block text-sm font-semibold text-royal-600 opacity-0 transition group-hover:opacity-100">
                        Read the overview →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {blendOverviews.length > 0 && (
              <div className="mt-10">
                <span className="text-sm font-medium text-navy-950">Blend formulas</span>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {blendOverviews.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/evidence/${r.slug}`}
                      className="group rounded-xl2 border border-line-200 bg-white p-5 transition hover:border-royal-600 hover:shadow-card"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-navy-950">{reviewTitle(r)}</h3>
                        <span className="text-xs text-slate-500">Formula</span>
                      </div>
                      {r.standfirst ? (
                        <p className="mt-1 line-clamp-2 text-sm text-slate-500">{r.standfirst}</p>
                      ) : null}
                      <span className="mt-4 inline-block text-sm font-semibold text-royal-600 opacity-0 transition group-hover:opacity-100">
                        Read the breakdown →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-14 max-w-3xl border-t border-line-200 pt-6">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Section>
    </>
  );
}
