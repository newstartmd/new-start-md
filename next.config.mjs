// Security headers for the public marketing zone. New Start MD is a PHI-free
// storefront + partner-program site: it captures interest and partner
// applications and hands off to the GEN Health-backed patient app and the
// LocumTele booking calendar. No health information is collected here, and no
// ad/analytics pixels load here (enforced by the PHI-free guard in CI).
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=(), payment=(), interest-cohort=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // This repo sits inside a larger working tree with other lockfiles; pin the
  // tracing root to this project so Vercel traces the right files.
  outputFileTracingRoot: import.meta.dirname,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Short vanity paths that show up in partner/hand-off material, pointed at
      // the real hubs so they never dead-end.
      { source: "/refer", destination: "/partners", permanent: true },
      { source: "/affiliate", destination: "/partners", permanent: true },
      { source: "/affiliates", destination: "/partners", permanent: true },
      { source: "/gyms", destination: "/partners", permanent: true },
      { source: "/trainers", destination: "/partners", permanent: true },
      { source: "/shop", destination: "/products", permanent: true },
      { source: "/book", destination: "/start", permanent: false },
    ];
  },
};

export default nextConfig;
