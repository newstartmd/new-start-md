import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { LEGAL_DOCS } from "@/lib/legalDocs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticPaths = [
    "",
    "/products",
    "/peptides",
    "/partners",
    "/apply",
    "/how-it-works",
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

  for (const slug of Object.keys(LEGAL_DOCS)) {
    pages.push({ url: `${base}/legal/${slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.2 });
  }

  return pages;
}
