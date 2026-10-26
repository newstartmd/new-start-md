// ─────────────────────────────────────────────────────────────────────────
// BRAND — the single source of truth for the brand's identity.
// Per the NewStartMD Design & Build Guide (§9.3): rename the brand HERE only.
// Everything else (site.ts, schema, metadata) reads from this object, so a
// rebrand is a one-file change.
// ─────────────────────────────────────────────────────────────────────────

export const brand = {
  // Readable brand name as it appears in copy, titles and JSON-LD. The guide's
  // compact "NewStartMD" is a wordmark style, not the legal/prose name; swap
  // either here in one place if the brand direction changes.
  name: "New Start MD",
  // Display wordmark: "New Start" in Cormorant 500 navy-950 + "MD" in Inter 600 gold.
  wordmark: { lead: "New Start", suffix: "MD" },
  domain: "newstartmd.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://newstartmd.com",
  tagline: "You too can have it all — but it all starts with your health.",
  shortTagline: "Your new start begins here.",
  supportEmail: "care@newstartmd.com",
  // Formed 2026-10-26 as a New Mexico LLC (formation docs on file; Todd/Medvora).
  legalEntity: "NewStartMD LLC",
} as const;

export type Brand = typeof brand;
