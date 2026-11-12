import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Disclaimer } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";
import { getPost, getPublishedPosts, parseMarkdown, type InlinePart } from "@/lib/blog";

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

function Inline({ parts }: { parts: InlinePart[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (part.type === "link") {
          return (
            <a
              key={index}
              href={part.href}
              className="font-semibold text-royal-600 underline underline-offset-4 hover:text-royal-700"
              rel="noopener noreferrer"
            >
              {part.text}
            </a>
          );
        }
        if (part.type === "strong") return <strong key={index}>{part.text}</strong>;
        if (part.type === "em") return <em key={index}>{part.text}</em>;
        return <span key={index}>{part.text}</span>;
      })}
    </>
  );
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
  const blocks = parseMarkdown(post.body);

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
        <article className="mt-10 max-w-3xl">
          {blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="mt-10 text-2xl font-semibold text-navy-950">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3 key={index} className="mt-8 text-xl font-semibold text-navy-950">
                  {block.text}
                </h3>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="mt-4 space-y-2 pl-5">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="list-disc text-navy-950/90 marker:text-royal-600">
                      <Inline parts={item} />
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="mt-4 leading-relaxed text-navy-950/90">
                <Inline parts={block.parts} />
              </p>
            );
          })}
        </article>
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
