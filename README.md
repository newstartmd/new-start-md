# New Start MD — marketing + partner site

Direct-to-consumer storefront and partner-referral site for **New Start, LLC**
(brand: **New Start MD**). The louder, full-catalog sibling of FitClinicMD:
less educational, more direct sales, built to convert patients and to recruit
and credit gym / trainer / affiliate partners.

- **Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript
- **Host:** Vercel (its own team, so a vendor can be scoped to this project only)
- **Zone:** PHI-free. No pixels, no analytics, no health data — enforced in CI.
- **Backend:** hands leads off to the GEN Health-backed patient app with partner
  attribution intact. See `src/lib/genhealth.ts` and the shared client at
  `../fitclinicmd-genhealth-integration`.
- **Emergency contact:** security@rothandroth.net

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
npm run lint
```

## Structure

- `src/app/` — routes (home, products, partners, apply, how-it-works, about,
  faq, contact, start, legal, robots/sitemap/llms).
- `src/lib/site.ts` — site config + launch switches.
- `src/lib/products.ts` — the catalog (framework; final list + copy from Todd's
  approved source + clinical sign-off).
- `src/lib/partners.ts` — first-touch partner attribution (→ GEN Health
  `couponCode` / `tracking`).
- `src/lib/genhealth.ts` — backend handoff (blocked on GEN Health API key).
- `src/lib/legal*.ts` — disclaimers + placeholder legal pages (counsel to
  finalize before signups open).

## What's left to go fully live

1. **Hosting:** create the New Start MD Vercel team + project; set `VERCEL_TOKEN`
   and the org/project IDs in `.github/workflows/deploy.yml`.
2. **Gomega access:** invite the Gomega team scoped to this repo/project (they
   handle SEO + conversion; we own the build + integration).
3. **GEN Health:** add `GENHEALTH_API_KEY` once Chad provisions it; wire
   `handoffLeadToGenHealth` to the verified client calls.
4. **Content:** full product list + approved copy; real lifestyle photography
   into the `ImageSlot` slots (Gomega).
5. **Legal:** counsel finalizes `src/lib/legalDocs.ts`.
6. **Lead delivery:** set `CONTACT_WEBHOOK_URL` (or inbox) so forms notify.

## Standing rules (see repo `../../CLAUDE.md` and memories)

- PHI-free zone — never add analytics/ad pixels here.
- Usage-language only on products; no efficacy claims, no fabricated dosing.
- Partner pay is flat brand/content licensing + audience discount — never
  per-patient (EKRA).
- Real photos only in image slots — never AI/cartoon imagery.
