# New Start MD — the two-zone architecture

Decision (Michael, 2026-10-29): keep a hard wall between what outside vendors
(the marketing agency, Gomega) can touch and where New Start's real value lives.
This records that wall so it is deliberate and enforced, not accidental.

The short version: **GEN Health is the clinical plumbing; the engagement layer
is ours and is where New Start wins. We build it, and we keep it walled off.**

---

## Zone 1 — the open zone (marketing)

- **What:** `newstartmd.com` — the public site, SEO, landing pages, the
  education library. Built for reach.
- **Who has access:** **Gomega** (Saya / `lindsay@gomega.ai`) and any future
  marketing vendor. This is the ONLY zone they get into.
- **What it holds:** nothing proprietary, no patient data. It is PHI-free by
  design and CI-guarded (the "PHI-free zone guard" in this repo's CI).
- **Infra:** its own Vercel team (the one Gomega is a Member of), `newstartmd.com`
  DNS, Google Search Console for that property.

## Zone 2 — the walled zone (the apps and the IP)

- **What:**
  - the **partner portal** (repo `new-start-portal`, already built) — partner
    accounts, referral codes/attribution, content library;
  - the **patient portal + wearables** (next) — patients connect devices and see
    their progress;
  - the **training / programs / diets / coaching content and the AI-built
    programs** — New Start's IP and the engagement layer.
- **Who has access:** **Michael and the build only. Gomega never gets in.**
- **What it holds:** proprietary programs, partner and patient data, and (in the
  wearables phase) **PHI**.
- **Infra:** **separate repos, a separate Vercel team, separate domains**
  (`partners.newstartmd.com`, `app.newstartmd.com`), and a **separate,
  BAA-covered database**. The partner portal is already a standalone repo for
  exactly this reason.

---

## The rules that keep the wall up

1. **Vendor access is Zone 1 only.** When Gomega is added to Vercel, it is to the
   **marketing team**. The Zone-2 apps live in a **different Vercel team** that no
   vendor is a member of. Same for any future analytics/dev vendor.
2. **No account-wide credentials to vendors.** Do not hand out GoDaddy
   account-wide delegate access (that account also holds the law firm's and
   clients' domains). A vendor gets exactly the one property they work on:
   Search Console user access to `newstartmd.com` + specific DNS records added by
   us, never the portfolio.
3. **PHI lives only in Zone 2**, behind BAAs (database host, app host, and the
   wearable aggregator). It never touches Zone 1, and no vendor is inside the
   BAA boundary.
4. **The wall is one wall, two reasons:** IP protection (the agency can't see the
   programs or the data) and HIPAA isolation (PHI stays behind the BAAs). They
   coincide, which keeps it simple.

---

## How the upcoming work maps

- **Wearables (Phase 2):** Zone 2. Patient connects a device via a HIPAA-covered
  aggregator (Terra / Vital, BAA required); data lands in the Zone-2 database,
  never on the marketing site. Gated on the aggregator BAA + a BAA'd DB/host —
  see `REAL-INTEGRATION-BUILD-PLAN.md`.
- **Training / programs home:** Zone 2. The ready-made and AI-built programs are
  New Start IP; they live in the apps, not on the agency-managed marketing site.
- **Patient portal:** Zone 2. Patient identity federates with GEN (patients are
  GEN patients); the engagement layer (progress, wearables, programs) is ours.

---

_Related: [[REAL-INTEGRATION-BUILD-PLAN]] (marketing docs), the `new-start-portal`
repo, and the network memory on New Start platform direction._
_Last updated 2026-10-29._
