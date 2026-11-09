import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Disclaimer } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";
import { getPost, getPublishedPosts, renderMarkdown } from "@/lib/blog";

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Journal" };
  const title = post.metaTitle || post.title;
  return {
    title,
    description: post.description,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}`,
      ...(post.image ? { images: [{ url: post.image, alt: post.imageAlt || title }] } : {}),
    },
  };
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const html = renderMarkdown(post.body);

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author || SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    isAccessibleForFree: true,
  };

  return (
    <>
      <Section>
        <p className="text-sm text-slate-500">
          <Link href="/blog" className="font-semibold text-royal-600 hover:text-royal-700">
            Journal
          </Link>
          {post.date ? <span> · {formatDate(post.date)}</span> : null}
          {post.author ? <span> · {post.author}</span> : null}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-navy-950 sm:text-5xl">{post.title}</h1>
        {post.description ? <p className="mt-4 max-w-2xl text-lg text-slate-500">{post.description}</p> : null}
        <article
          className="blog-body mt-10 max-w-3xl text-navy-950/90 [&_a]:font-semibold [&_a]:text-royal-600 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-navy-950 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy-950 [&_li]:list-disc [&_li]:text-navy-950/90 [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:pl-5"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="mt-12 max-w-3xl border-t border-line-200 pt-6">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Section>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
    </>
  );
}
