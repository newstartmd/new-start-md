import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { COMPOUNDS } from "@/lib/evidence";
import { reviewSlugs } from "@/lib/fullReviews";
import { publishedArticles } from "@/lib/articles";
import { LEGAL_DOCS } from "@/lib/legalDocs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticPaths = [
    "",
    "/products",
    "/peptides",
    "/evidence",
    "/learn",
    "/partners",
    "/apply",
    "/how-it-works",
    "/dashboard",
    "/membership",
    "/about",
    "/faq",
    "/contact",
    "/start",
  ];

  const pages: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));

  for (const product of PRODUCTS) {
    pages.push({
      url: `${base}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Every /evidence page: graded compounds AND ported review overviews (deduped).
  const evidenceSlugs = new Set<string>([...COMPOUNDS.map((c) => c.slug), ...reviewSlugs()]);
  for (const slug of evidenceSlugs) {
    pages.push({
      url: `${base}/evidence/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const a of publishedArticles()) {
    pages.push({
      url: `${base}/learn/${a.slug}`,
      lastModified: a.updated ? new Date(a.updated) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const slug of Object.keys(LEGAL_DOCS)) {
    pages.push({ url: `${base}/legal/${slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.2 });
  }

  return pages;
}
