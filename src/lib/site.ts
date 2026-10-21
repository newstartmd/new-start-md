// Site-wide configuration for the New Start MD storefront + partner zone.
//
// New Start MD is the full-catalog, direct-to-consumer and partner-driven
// sibling of FitClinicMD. Where FitClinicMD is LegitScript-limited and
// educational, New Start carries the complete product line and is built to
// convert: shop/consult for patients, and a referral program for gyms,
// trainers, and affiliates who send us their people.

import { brand } from "@/config/brand";

export const SITE = {
  name: brand.name,
  legalName: brand.legalEntity,
  tagline: brand.tagline,
  shortTagline: brand.shortTagline,
  blurb:
    "Physician-guided peptides, weight loss, hormone therapy and recovery — prescribed by licensed providers and delivered to your door.",
  // Primary domain (Gomega SEO confirming). newstartco.com is also owned and
  // 301s here. Override per-environment with NEXT_PUBLIC_SITE_URL.
  url: brand.url,
  // The patient app / checkout — a separate zone on a separate host, backed by
  // GEN Health. CTAs hand off here and never carry health context in the URL.
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.newstartmd.com",
  email: "hello@newstartmd.com",
  partnerEmail: "partners@newstartmd.com",
} as const;

// Is the patient app / checkout live and accepting signups? Until it is, the
// app host does not resolve, so pointing CTAs at it produces dead links.
// Pre-launch we route "Start" to the capture page as a request-access action
// and hide "Sign in" (there are no accounts yet). Flip on with
// NEXT_PUBLIC_APP_LIVE=true once the GEN Health-backed app is deployed.
export const APP_LIVE = process.env.NEXT_PUBLIC_APP_LIVE === "true";

export const signupUrl = APP_LIVE ? `${SITE.appUrl}/signup` : "/start";
export const loginUrl = `${SITE.appUrl}/login`;
export const showSignIn = APP_LIVE || process.env.NEXT_PUBLIC_SHOW_SIGN_IN === "true";

// External booking calendar (LocumTele) the capture step hands off to once a
// lead is recorded. Until NEXT_PUBLIC_BOOKING_URL is set, /start still captures
// the lead (with partner attribution) and shows a "we'll be in touch" notice,
// so no lead — and no referral credit — is ever lost pre-launch.
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
export const bookingConfigured = bookingUrl.length > 0;

// Goals a visitor can express interest in — shared by the capture step and the
// request-information form so the labels handed to the backend stay consistent.
export const GOAL_OPTIONS = [
  "Weight loss (GLP-1)",
  "Peptide therapy",
  "Hormone therapy / TRT",
  "Recovery & performance",
  "Not sure yet",
] as const;

export const NAV = [
  { href: "/products", label: "Treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/membership", label: "Membership" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
] as const;

export const FOOTER_NAV = [
  {
    heading: "Shop",
    links: [
      { href: "/products?goal=weight-loss", label: "Weight loss" },
      { href: "/products?goal=hormone", label: "Hormone therapy" },
      { href: "/products?goal=recovery", label: "Recovery & performance" },
      { href: "/products?goal=wellness", label: "Longevity & wellness" },
      { href: "/products", label: "All products" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { href: "/partners", label: "Partner program" },
      { href: "/partners#how", label: "How it pays" },
      { href: "/apply", label: "Apply to refer" },
      { href: "/partners#faq", label: "Partner FAQ" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/telehealth-consent", label: "Telehealth Consent" },
    ],
  },
] as const;
