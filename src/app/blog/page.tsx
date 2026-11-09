import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, Disclaimer } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal — New Start MD",
  description:
    "Plain-language notes from New Start MD on physician-guided peptide, hormone, and metabolic care. Educational only, not medical advice.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "Journal — New Start MD",
    description:
      "Plain-language notes on physician-guided care. Educational only, not medical advice.",
    url: `${SITE.url}/blog`,
  },
};

function formatDate(iso: string): string {
  if (!iso) return "";
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Section>
        <Eyebrow>Journal</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-navy-950 sm:text-5xl">
          Notes on physician-guided care
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-500">
          Plain explanations of how this kind of care works. Nothing here promises a result, and a
          licensed provider decides whether any treatment is appropriate.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 max-w-2xl rounded-xl2 border border-dashed border-line-200 bg-mist-50 p-6 text-slate-500">
            New posts will appear here. Until then, the{" "}
            <Link href="/learn" className="font-semibold text-royal-600 hover:text-royal-700">
              Learn
            </Link>{" "}
            section has the education already on the site.
          </p>
        ) : (
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl2 border border-line-200 bg-white p-6 transition hover:border-royal-600 hover:shadow-card"
              >
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-royal-600">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-navy-950">{post.title}</h2>
                {post.description ? <p className="mt-2 text-sm text-slate-500">{post.description}</p> : null}
                <p className="mt-4 text-sm font-semibold text-royal-600">Read →</p>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 max-w-3xl border-t border-line-200 pt-6">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
        ])}
      />
    </>
  );
}
