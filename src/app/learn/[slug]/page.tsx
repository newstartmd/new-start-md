import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, Disclaimer } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { ARTICLES, getArticle, MEDICAL_REVIEW, reviewByline, type Block } from "@/lib/articles";
import { SITE, signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

// Only PUBLISHED articles are real pages. Planned ones live as cards on /learn.
export function generateStaticParams() {
  return ARTICLES.filter((a) => a.status === "PUBLISHED").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Learn" };
  return {
    title: a.title,
    description: a.summary,
    alternates: { canonical: `${SITE.url}/learn/${a.slug}` },
    openGraph: { title: a.title, description: a.summary, url: `${SITE.url}/learn/${a.slug}` },
  };
}

function renderLinkedText(text: string, links?: { text: string; href: string }[]) {
  if (!links?.length) return text;
  const parts: ReactNode[] = [];
  let cursor = 0;
  links.forEach((link, linkIndex) => {
    const start = text.indexOf(link.text, cursor);
    if (start === -1) return;
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(
      <Link
        key={`${link.href}-${linkIndex}`}
        href={link.href}
        className="font-semibold text-royal-600 underline underline-offset-4 hover:text-royal-700"
      >
        {link.text}
      </Link>,
    );
    cursor = start + link.text.length;
  });
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "p":
      return (
        <p key={i} className="mt-4 leading-relaxed text-navy-950/90">
          {renderLinkedText(b.text, b.links)}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="mt-10 text-2xl font-semibold text-navy-950">
          {b.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="mt-4 space-y-2 pl-5">
          {b.items.map((it, j) => (
            <li key={j} className="list-disc text-navy-950/90 marker:text-royal-600">
              {it}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p
          key={i}
          className="mt-6 rounded-xl2 border border-line-200 bg-mist-50 p-4 text-sm text-slate-500"
        >
          {b.text}
        </p>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a || a.status !== "PUBLISHED" || !a.body) notFound();

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    datePublished: a.updated,
    dateModified: a.updated,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    ...(MEDICAL_REVIEW && {
      reviewedBy:
        MEDICAL_REVIEW.kind === "person"
          ? {
              "@type": "Person",
              name: MEDICAL_REVIEW.name,
              ...(MEDICAL_REVIEW.title ? { jobTitle: MEDICAL_REVIEW.title } : {}),
              ...(MEDICAL_REVIEW.credentials ? { honorificSuffix: MEDICAL_REVIEW.credentials } : {}),
            }
          : { "@type": "Organization", name: MEDICAL_REVIEW.name },
      lastReviewed: (MEDICAL_REVIEW.kind === "person" && MEDICAL_REVIEW.reviewedOn) || a.updated,
    }),
    mainEntityOfPage: `${SITE.url}/learn/${a.slug}`,
    isAccessibleForFree: true,
  };

  return (
    <>
      {/* Header */}
      <div className="glow border-b border-line-200">
        <Container className="py-12 sm:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/learn" className="hover:text-royal-600">Learn</Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-navy-950">{a.topic}</span>
          </nav>
          <div className="mt-5">
            <Eyebrow>{a.topic}</Eyebrow>
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">{a.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">{a.summary}</p>
          <p className="mt-4 text-sm text-slate-500">
            {a.readMinutes} min read · Last updated {a.updated}
          </p>
          {MEDICAL_REVIEW && (
            <p className="mt-2 text-sm font-medium text-navy-950">
              Medically reviewed by {reviewByline(MEDICAL_REVIEW)}
            </p>
          )}
        </Container>
      </div>

      <Section>
        <article className="mx-auto max-w-2xl">
          {a.body.map(renderBlock)}

          {a.sources && a.sources.length > 0 && (
            <div className="mt-10 rounded-xl2 border border-line-200 bg-mist-50 p-5">
              <h2 className="text-base font-semibold text-navy-950">Sources</h2>
              <p className="mt-1 text-sm text-slate-500">
                The primary sources behind this article — so you can read them yourself.
              </p>
              <ul className="mt-3 space-y-2">
                {a.sources.map((s) => (
                  <li key={s.href} className="text-sm">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-royal-600 underline decoration-royal-600/30 underline-offset-2 hover:decoration-royal-600"
                    >
                      {s.title} <span aria-hidden>↗</span>
                    </a>
                    <span className="ml-1 text-slate-500">— {s.publisher}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 border-t border-line-200 pt-6">
            <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={signupUrl}>Start my assessment</Button>
            <Link href="/learn" className="text-sm font-semibold text-royal-600 hover:text-royal-700">
              ← More from Learn
            </Link>
          </div>
        </article>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Learn", path: "/learn" },
          { name: a.title, path: `/learn/${a.slug}` },
        ])}
      />
      <JsonLd data={articleSchema} />
    </>
  );
}
