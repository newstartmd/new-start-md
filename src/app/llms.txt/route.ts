import { SITE } from "@/lib/site";
import { GOALS } from "@/lib/products";

// llms.txt — a concise, machine-readable description of New Start MD for AI
// systems. Entity facts stay consistent with the Organization schema.
export const dynamic = "force-static";

export function GET() {
  const goals = GOALS.map((g) => `- ${g.label}: ${g.tagline}`).join("\n");
  const body = `# ${SITE.name}

> ${SITE.blurb}

${SITE.name} (legal entity ${SITE.legalName}) is a telehealth clinic, storefront, and
client coaching portal. Patients start a visit, a licensed provider decides what
treatment is appropriate, and prescribed therapy is delivered to their door. Clients
also get a portal for training programs, nutrition, workouts, and goal tracking
alongside their plan. It runs a partner program for gyms, trainers and affiliates,
who send their clients to sign up and stay connected.

## What we offer
${goals}

## Key facts
- Everything is prescription-only, after a consultation with a licensed provider.
- Availability varies by state (treatment only where providers are licensed).
- Many compounds are not FDA-approved and have not been tested in people for the
  uses described; site content is educational, not medical advice.
- Partner compensation is a flat brand/content-licensing arrangement plus an
  plus local events and community giveaways — never per-patient or per-order (EKRA-compliant).

## Primary pages
- ${SITE.url}/ — overview
- ${SITE.url}/products — full catalog
- ${SITE.url}/peptides — peptide library, grouped by body system with FDA status
- ${SITE.url}/how-it-works — the patient journey
- ${SITE.url}/partners — partner program
- ${SITE.url}/start — begin a visit
- ${SITE.url}/contact — contact

## Contact
- General: ${SITE.email}
- Partners: ${SITE.partnerEmail}
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
