import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Eyebrow, Button, Disclaimer } from "@/components/ui";
import {
  COMPOUNDS,
  getCompound,
  citationHref,
  citationLabel,
  type Citation,
} from "@/lib/evidence";
import { getProduct } from "@/lib/products";
import { getFullReview } from "@/lib/fullReviews";
import FullReviewBody from "@/components/FullReviewBody";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export function generateStaticParams() {
  return COMPOUNDS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompound(slug);
  if (!c) return { title: "Evidence not found" };
  return {
    title: `${c.name} — the evidence`,
    description: `What the research actually shows on ${c.name}: ${c.oneLiner} Primary sources, graded honestly.`,
  };
}

const GRADE_NOTE: Record<string, string> = {
  A: "Strong human evidence",
  B: "Moderate human evidence",
  C: "Limited or mixed human evidence",
  D: "Preclinical only — no human efficacy trials",
};

function gradeTone(grade: string): string {
  const g = grade[0]?.toUpperCase();
  if (g === "A") return "bg-[#e4f3ec] text-[#12805c]";
  if (g === "B") return "bg-sky-100 text-royal-700";
  if (g === "C") return "bg-[#faf1dc] text-gold-700";
  return "bg-[#eef2f8] text-slate-500";
}

const TYPE_LABEL: Record<Citation["type"], string> = {
  RCT: "Randomized trial",
  observational: "Observational",
  "case report": "Case report",
  "animal/lab": "Preclinical",
  review: "Review",
  regulatory: "Regulatory",
};

export default async function EvidencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompound(slug);
  if (!c) notFound();

  const review = getFullReview("peptide", slug);
  const product = getProduct(slug);
  const gradeLetter = c.grade[0]?.toUpperCase() ?? "";

  return (
    <article>
      {/* Header */}
      <div className="glow border-b border-line-200">
        <Container className="py-12">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/evidence" className="hover:text-royal-600">Evidence</Link>
            <span className="mx-2">/</span>
            <span className="text-navy-950">{c.name}</span>
          </nav>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Eyebrow>The evidence</Eyebrow>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${gradeTone(c.grade)}`}>
              Grade {c.grade} · {GRADE_NOTE[gradeLetter] ?? "Evidence graded"}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{c.name}</h1>
          {c.aka?.length ? (
            <p className="mt-2 text-sm text-slate-500">Also known as {c.aka.join(", ")}</p>
          ) : null}
          <p className="mt-4 max-w-2xl text-lg text-slate-500">{c.oneLiner}</p>
          {product ? (
            <div className="mt-6">
              <Button href={`/products/${product.slug}`} variant="ghost">
                See {c.name} in the catalog
              </Button>
            </div>
          ) : null}
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div>
            {/* Studies */}
            <h2 className="text-2xl font-semibold text-navy-950">What the studies found</h2>
            <p className="mt-2 text-sm text-slate-500">
              Each line is a plain-English summary of a real study. Follow the link to read the
              primary source yourself.
            </p>
            <ul className="mt-6 space-y-4">
              {c.evidence.map((cite, i) => {
                const href = citationHref(cite);
                return (
                  <li key={i} className="rounded-xl2 border border-line-200 bg-white p-5 shadow-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-royal-700">
                        {TYPE_LABEL[cite.type]}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto text-xs font-medium text-royal-600 underline underline-offset-2 hover:text-royal-700"
                        >
                          {citationLabel(cite)} ↗
                        </a>
                      ) : (
                        <span className="ml-auto text-xs text-slate-500">{citationLabel(cite)}</span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-navy-950">{cite.summary}</p>
                  </li>
                );
              })}
            </ul>

            {/* Mechanism */}
            <h2 className="mt-10 text-2xl font-semibold text-navy-950">How it works</h2>
            <p className="mt-3 text-slate-500">{c.mechanism}</p>

            {/* Doses + safety */}
            <h2 className="mt-10 text-2xl font-semibold text-navy-950">Doses & safety</h2>
            <p className="mt-3 text-sm text-slate-500">
              <span className="font-semibold text-navy-950">Studied doses. </span>
              {c.studiedDoses}
            </p>
            <p className="mt-3 text-sm text-slate-500">
              <span className="font-semibold text-navy-950">Safety. </span>
              {c.safety}
            </p>

            {/* Level 2 — the full plain-English review (ported network education). */}
            {review ? (
              <div className="mt-12 border-t border-line-200 pt-10">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-royal-600">Go deeper</p>
                <h2 className="mt-2 text-3xl font-semibold text-navy-950">The full picture</h2>
                <p className="mt-2 max-w-xl text-sm text-slate-500">
                  The complete, plain-English review — what it is, what people use it for, how it
                  works, what the research actually looked at, and who it&apos;s not for.
                </p>
                <FullReviewBody sections={review.sections} />
              </div>
            ) : null}
          </div>

          {/* Sidebar — regulatory status */}
          <aside className="rounded-xl2 border border-line-200 bg-mist-50 p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Where it stands</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-navy-950">FDA</dt>
                <dd className="mt-1 text-slate-500">{c.regulatory.fda}</dd>
              </div>
              {c.regulatory.compounding ? (
                <div>
                  <dt className="font-semibold text-navy-950">Compounding</dt>
                  <dd className="mt-1 text-slate-500">{c.regulatory.compounding}</dd>
                </div>
              ) : null}
              {c.regulatory.wada ? (
                <div>
                  <dt className="font-semibold text-navy-950">Sport (WADA)</dt>
                  <dd className="mt-1 text-slate-500">{c.regulatory.wada}</dd>
                </div>
              ) : null}
              {c.regulatory.dea ? (
                <div>
                  <dt className="font-semibold text-navy-950">Controlled status</dt>
                  <dd className="mt-1 text-slate-500">{c.regulatory.dea}</dd>
                </div>
              ) : null}
            </dl>
            <p className="mt-5 text-xs text-slate-500">Last reviewed {c.updated}.</p>
          </aside>
        </div>

        <div className="mt-12 max-w-3xl border-t border-line-200 pt-6">
          <p className="text-xs leading-relaxed text-slate-500">
            This page summarizes published research so you can read it yourself. It is education, not
            medical advice or a recommendation, and grades describe the <em>evidence</em>, not a
            promise of results. A licensed provider decides whether anything here is appropriate for
            you.
          </p>
          <div className="mt-4">
            <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
          </div>
        </div>
      </Container>
    </article>
  );
}
