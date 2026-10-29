# New Start MD — Partner portal + live device integration: build plan

Status: planning. Author: Claude, 2026-10-29. Owner: Michael Roth.

This is the plan for the **functional** version of what the marketing site now
only shows as a preview (PR #40): a partner portal where partners coach the
clients they send, and live wearable integration where a patient's Fitbit /
Oura / Apple Health data flows into their plan and, with consent, into the
partner's view. It is deliberately a separate build from the marketing site.

---

## 0. The non-negotiable constraints

1. **This cannot live on newstartmd.com (the marketing site).** That site is
   PHI-free by design and CI-guarded. Wearable data tied to an identified
   patient under care is PHI. The real build is a separate, HIPAA-scoped app.
2. **The clinical system is GEN Health.** New Start hands patients to GEN for
   the visit, prescription, and EHR (the marketing handoff is a redirect, no
   PHI collected). The portal is a *product layer*, not a second EHR. See
   [[fitclinicmd-genhealth-ehr-pivot]], [[locumtele-provider-pharmacy-stack]].
3. **Partners seeing client data is a HIPAA disclosure.** A gym or trainer who
   can see a patient's progress is receiving PHI. That requires the patient's
   specific, revocable authorization AND a Business Associate Agreement with
   the partner, or a strictly limited, patient-authorized summary. This is the
   single biggest design and legal decision in the whole build.
4. **Comp stays flat-rate (EKRA).** The portal tracks attribution for the
   relationship, never to compute per-order or per-patient pay. Do not surface
   "you earned $X from this referral." See [[fitclinicmd-referral-fee-model]].
5. **Entity:** NewStartMD LLC (Michael 100% owner), kept fully separate from
   FitClinicMD. Separate infra, secrets, and BAAs, like aesmain is isolated.

---

## 1. The two subsystems

**A. Partner portal (partner-facing).** Partners log in, get their code/link,
upload and assign content (workouts, diets, podcasts), message clients, and —
gated behind consent — see opt-in progress for the clients they referred. Most
*partner* data (business profile, content) is not PHI; the *client progress*
they can see is.

**B. Wearable integration (patient-facing).** A patient connects the watch or
ring they already wear; activity, sleep and recovery flow into their plan. They
choose whether a summary is visible to their partner-coach.

---

## 2. Where it lives (decision #1)

Two viable shapes; confirm GEN's capabilities before choosing:

- **Option A — build on GEN.** If GEN Health already offers a patient portal,
  wearable connections, and a partner/coach role, we configure rather than
  build. Least work, but only if GEN actually supports partner-coaching and
  device sync. **Ask GEN directly.**
- **Option B — a New Start portal app (recommended default).** Our own app at
  `app.newstartmd.com`, HIPAA-configured, that federates patient identity with
  GEN via API and owns the partner-coaching + wearables + content layer GEN
  likely does not provide. More control, fits "New Start is its own company."

Recommendation: **confirm GEN first; assume Option B unless GEN covers it.**

---

## 3. Wearable data: use an aggregator, not 8 device APIs (decision #2)

Integrating Fitbit, Oura, Garmin, Whoop, Google Fit, Samsung, Strava and Apple
Health each directly is a maintenance sinkhole. Use one aggregator that covers
the list on the showcase, exposes webhooks, and **signs a BAA**:

- **Terra (tryterra.co)** and **Vital (tryvital.io)** are the two leading
  HIPAA-capable aggregators; both cover the showcased devices and sign BAAs.
  Pick on BAA terms, pricing (typically per connected active user / month),
  webhook quality, and Apple Health support.
- Others to price against: Spike API, Thryve, Rook.

**The Apple Health caveat (important).** Apple HealthKit data cannot be pulled
server-side with an OAuth redirect the way Fitbit / Oura / Garmin can. HealthKit
only exposes data to an app running on the user's iPhone. So "Apple Watch /
Apple Health" needs either a **New Start mobile app** or the aggregator's mobile
SDK in a wrapper. Everything else (Fitbit, Oura, Garmin, Whoop, Google Fit,
Strava) is cloud OAuth and ships first. **Decision: is a mobile app on the
roadmap?** If not, Apple Health is a later phase and the UI should say so.

---

## 4. HIPAA / compliance design (decision #3 — Michael / counsel owns this)

- **Wearable data is PHI** once tied to a patient under care. Encrypt at rest
  and in transit; BAAs with the aggregator, the host, the database, and any
  subprocessor; access logging and an audit trail; breach-notification process.
- **Partner visibility structure.** Choose one, with counsel:
  1. *Minimum-necessary authorized summary* (safest MVP): the patient signs a
     specific, revocable authorization to share a limited set (e.g. adherence %
     and an activity trend, not raw clinical data) with a named partner, and the
     partner signs a BAA. Partners never see the medical record.
  2. *Fuller access*: broader data to the partner, which raises the bar on
     authorization scope and the partner BAA.
- **Revocation and transparency.** The patient can see exactly what is shared,
  with whom, and turn it off instantly. This is both good law and good product.
- **EKRA.** Attribution tracking is for the relationship; pay stays flat-rate
  and is never computed from volume. Keep the two visibly separate in the UI.

---

## 5. Auth, identity, data model (sketch)

- **Auth:** partner accounts with email + password + MFA. Patient identity
  federated with GEN (don't mint a competing patient identity). Role-based
  access: a partner sees only clients who have an active consent grant to them.
- **Core tables (Option B):** `Partner`, `Client` (reference to the GEN patient,
  not a copy of their record), `ConsentGrant` (patient → partner, scope,
  granted/revoked timestamps), `WearableConnection` (provider, aggregator user
  id, token handling delegated to the aggregator), `MetricSnapshot` (cached,
  minimum-necessary summary for display), `Content` + `ContentAssignment`
  (workouts / diets / podcasts and who they're pushed to).
- **Never** copy GEN's clinical record into this app. Store only what the
  product needs, minimized.

---

## 6. Phased delivery (de-risks the PHI step)

- **Phase 0 — decisions & paperwork.** Confirm GEN's capabilities (Option A vs
  B); pick the aggregator and sign its BAA; counsel signs off on the partner-PHI
  structure (§4); decide mobile app yes/no (Apple Health); confirm host/DB BAAs.
- **Phase 1 — Partner portal MVP, no PHI.** Auth, partner profile, referral
  code/link + attribution, content upload and assignment. Ships first because
  it carries no patient health data. Immediately useful to partners.
- **Phase 2 — Wearables into the patient portal.** Cloud-OAuth devices (Fitbit,
  Oura, Garmin, Whoop, Google Fit, Strava) via the aggregator; the patient
  connects and sees *their own* data. Still no partner visibility.
- **Phase 3 — Consent + partner visibility.** Patient authorizes a
  minimum-necessary summary to a named partner; partner BAA in place; partner
  sees opt-in progress. The PHI-sensitive step, gated on Phase 0 sign-off.
- **Phase 4 — Apple Health + depth.** Mobile app / HealthKit, richer metrics,
  in-portal messaging, milestones.

The marketing showcase (PR #40) already sets the exact expectation this build
has to meet, so it doubles as the product spec.

---

## 7. Stack & rough cost

- **App:** Next.js at `app.newstartmd.com`, on a host that signs a BAA (Vercel
  Enterprise, or an alternative). Separate repo, separate secrets, HIPAA-isolated
  like aesmain.
- **DB:** Postgres with a BAA (e.g. Supabase or RDS; confirm Neon's BAA stance
  before using it for PHI).
- **Wearables:** Terra or Vital (webhooks + BAA).
- **Clinical/identity:** GEN Health API.
- **Order-of-magnitude cost:** aggregator priced per connected active user per
  month (tiered), plus host + DB, plus build time. Get quotes from Terra and
  Vital against the expected connected-user count before committing.

---

## 8. Open questions to resolve in Phase 0

1. **GEN:** Does GEN provide a patient portal, wearable connections, and a
   partner/coach role? If yes, how much of this is configuration vs. build?
2. **Counsel (Michael):** Which partner-visibility structure (§4), and the exact
   authorization + partner-BAA language.
3. **Mobile app:** Is one on the roadmap? It gates Apple Health.
4. **Aggregator:** Terra vs Vital — BAA terms, pricing, Apple Health path.
5. **Host/DB BAAs:** confirm before any PHI touches them.
6. **Todd / Medvora:** does any of this overlap FitClinicMD's build, and how do
   we keep them separate (per the "keep them fully separate" direction)?

---

_Related: [[new-start-md-platform-direction]], [[fitclinicmd-genhealth-ehr-pivot]],
[[locumtele-provider-pharmacy-stack]], [[fitclinicmd-referral-fee-model]]._
_Last updated 2026-10-29._
