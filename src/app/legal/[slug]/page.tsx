import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section, Eyebrow } from "@/components/ui";
import { LEGAL_DOCS } from "@/lib/legalDocs";

export function generateStaticParams() {
  return Object.keys(LEGAL_DOCS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];
  if (!doc) return { title: "Not found" };
  return { title: doc.title, robots: { index: false, follow: true } };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];
  if (!doc) notFound();

  return (
    <Section>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{doc.title}</h1>
      <p className="mt-2 text-sm text-muted">Last updated: {doc.updated}</p>

      {doc.draft ? (
        <p className="mt-6 max-w-2xl rounded-lg border border-ember/40 bg-ember/10 p-4 text-sm text-bone-soft">
          This page is a plain-language summary and is being finalized. The binding version
          is provided when you begin a visit in the patient app.
        </p>
      ) : null}

      <p className="mt-6 max-w-2xl text-bone-soft">{doc.intro}</p>

      <div className="mt-8 max-w-2xl space-y-6">
        {doc.sections.map((s) => (
          <div key={s.h}>
            <h2 className="text-lg font-bold text-bone">{s.h}</h2>
            <p className="mt-2 text-sm text-bone-soft">{s.p}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
