import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Explicitly welcome AI citation crawlers alongside the general crawlers — the
// network standard (see CLAUDE.md §6). No disallowed paths on this PHI-free
// marketing zone; the patient app lives on a separate host.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
