import Link from "next/link";
import { Container, Section, Eyebrow, Button, Stat, ImageSlot, ProductImageSlot, Disclaimer, PriceBand, PriceInline } from "@/components/ui";
import { BiomarkerRangeBar, TrendSparkline } from "@/components/graphics";
import { GOALS, productsByGoal, getProduct } from "@/lib/products";
import { priceFor } from "@/lib/catalogPricing";
import { CHAPTERS, TIERS, STANDARDS, TESTIMONIALS, COMPARE, HOME_FAQ } from "@/lib/home";
import { signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

const FEATURED = ["semaglutide", "testosterone", "bpc-157", "sermorelin", "nad", "pt-141"];

const TRUST = [
  "Board-certified clinicians",
  "Licensed U.S. pharmacies",
  "Lab-informed protocols",
  "Private & HIPAA-ready",
  "Cancel anytime",
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden glow">
        <div className="absolute inset-0 grid-texture opacity-50" aria-hidden />
        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow>Physician-led · 100% online</Eyebrow>
              <h1 className="mt-6 text-6xl font-medium leading-[0.98] sm:text-8xl">
                You too can
                <br />
                have it all.
              </h1>
              <p className="mt-6 max-w-md text-xl italic text-royal-600">
                It all starts with your health.
              </p>
              <p className="mt-5 max-w-md text-lg text-slate-500">
                Your new start, guided by board-certified clinicians and delivered to your
                door — with the energy for everything you love.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={signupUrl}>Take the 5-minute assessment</Button>
                <Button href="/products" variant="ghost">
                  Explore treatments
                </Button>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Programs <PriceInline /> — your exact plan is set with your provider.
              </p>
              <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
                <Stat value="40+" label="States licensed" />
                <Stat value="24h" label="Clinician response" />
                <Stat value="Free" label="2-day delivery" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ImageSlot mood="Radiance" className="mt-8" />
              <ImageSlot mood="Effortless" ratio="aspect-[4/5]" />
              <ImageSlot mood="The good life" ratio="aspect-square" className="col-span-2" />
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------- Trust strip */}
      <section className="border-y border-line-200 bg-white">
        <Container className="py-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
            {TRUST.map((t) => (
              <li key={t} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="text-royal-600">
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------------ Journey strip */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>The new start</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            From everyday life to <span className="italic text-royal-600">all you can be.</span>
          </h2>
          <p className="mt-4 text-slate-500">
            It&apos;s not about changing who you are. It&apos;s about having the energy for
            everything you love — and a little more of the life you&apos;re already building.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { k: "Where you are", mood: "Everyday · real life", p: "A good life already — just a little tired, a little stretched." },
            { k: "Your new start", mood: "The turn · first steps", p: "A provider, a plan, and the first steps that actually fit your week." },
            { k: "All you can be", mood: "Elevated · full energy", p: "The same life, with the energy and drive to meet all of it." },
          ].map((f, i) => (
            <div key={f.k} className="relative overflow-hidden rounded-xl2 border border-line-200">
              <ImageSlot mood={f.mood} ratio="aspect-[4/3]" />
              <div className="p-5">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold-700">
                  {String(i + 1).padStart(2, "0")} · {f.k}
                </span>
                <p className="mt-2 text-sm text-slate-500">{f.p}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ Lab-informed precision */}
      <section className="bg-mist-50">
        <Container className="py-16 sm:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-24">
              <Eyebrow>Lab-informed precision</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Your biology, <span className="italic text-royal-600">in focus.</span>
              </h2>
              <p className="mt-4 max-w-md text-slate-500">
                We don&apos;t guess. Your provider reads your labs, sets your optimal range, and
                adjusts your protocol as your numbers move — so your plan is built on evidence,
                not averages.
              </p>
              <div className="mt-8">
                <Button href="/how-it-works" variant="ghost">
                  How we use your labs
                </Button>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                  Sample data
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <BiomarkerRangeBar name="Free Testosterone" unit="ng/dL" value={18} min={5} max={25} optimalMin={15} optimalMax={22} status="in" />
                <BiomarkerRangeBar name="hs-CRP" unit="mg/L" value={0.8} min={0} max={3} optimalMin={0} optimalMax={1} status="in" />
                <BiomarkerRangeBar name="HbA1c" unit="%" value={5.9} min={4} max={8} optimalMin={4} optimalMax={5.6} status="monitor" />
                <TrendSparkline label="Free T — 6 months" unit="ng/dL" points={[9, 11, 13, 15, 17, 18]} />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Illustrative sample data for layout only — not a real patient and not a medical
                claim. Individual results vary. Lab testing is arranged where clinically appropriate.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- Goals */}
      <Section id="goals">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Shop by goal</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">What are you here to change?</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-royal-600 hover:text-royal-700">
            See all products →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GOALS.map((goal) => (
            <Link
              key={goal.slug}
              href={`/products?goal=${goal.slug}`}
              className="group relative overflow-hidden rounded-xl2 border border-line-200 bg-white p-6 transition hover:border-royal-600"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-royal-600/10 blur-2xl transition group-hover:bg-royal-600/20" aria-hidden />
              <h3 className="text-xl font-bold text-navy-950">{goal.label}</h3>
              <p className="mt-2 text-sm text-slate-500">{goal.tagline}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-royal-600 opacity-0 transition group-hover:opacity-100">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------- Treatment chapters */}
      <div>
        {CHAPTERS.map((ch, i) => {
          const count = productsByGoal(ch.goal).length;
          const flip = i % 2 === 1;
          return (
            <section key={ch.goal} className={flip ? "bg-white" : "bg-mist-50"}>
              <Container className="py-16 sm:py-24">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                  <div className={flip ? "lg:order-2" : ""}>
                    <Eyebrow>{ch.kicker}</Eyebrow>
                    <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                      {ch.headline} <span className="italic text-royal-600">{ch.accent}</span>
                    </h2>
                    <p className="mt-4 max-w-md text-slate-500">{ch.blurb}</p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-500">
                      {ch.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-royal-600" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center gap-5">
                      <Button href={`/products?goal=${ch.goal}`}>See if I qualify</Button>
                      <span className="font-mono text-xs uppercase tracking-wide text-slate-500">
                        {count} therapies
                      </span>
                    </div>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <ImageSlot mood={ch.mood} ratio="aspect-[5/4]" />
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- Portal */}
      <Section id="portal">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-24">
            <Eyebrow>Your portal</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              More than medicine — your whole plan in one place.
            </h2>
            <p className="mt-4 max-w-md text-slate-500">
              New Start isn&apos;t just where you get your therapy. It&apos;s your home base:
              your training, your nutrition, your workouts and your goals, right alongside
              your plan — and the trainer who sent you stays in the loop.
            </p>
            <div className="mt-8">
              <Button href={signupUrl}>Start now</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { h: "Training programs", p: "Built around your goals and updated as you progress." },
              { h: "Nutrition & food", p: "Simple meal guidance that fits your plan and your life." },
              { h: "Workouts", p: "Follow-along sessions you can log and track." },
              { h: "Goals & progress", p: "Set targets, track results, and see how far you've come." },
              { h: "Your therapy", p: "Your products and your provider, in the same place." },
              { h: "Your trainer", p: "The coach who sent you stays connected to your journey." },
            ].map((f) => (
              <div key={f.h} className="rounded-xl2 border border-line-200 bg-white p-5">
                <h3 className="text-base font-bold text-navy-950">{f.h}</h3>
                <p className="mt-2 text-sm text-slate-500">{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------- Partner */}
      <section className="border-y border-line-200 bg-white">
        <Container className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>For gyms, trainers & affiliates</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Your people trust you. <span className="text-gold-700">Send them further.</span>
              </h2>
              <p className="mt-5 max-w-lg text-slate-500">
                Partner with New Start MD and give your members, clients and followers a
                real path to the body and energy they train for — and we show up for your
                community with local events and giveaways. You build the trust; we handle the
                medicine, licensing and delivery.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-500">
                {[
                  "A branded code and link — set up in minutes, tracked automatically.",
                  "Local events, giveaways and brand experiences for your community.",
                  "Flat brand-and-content licensing — simple, transparent, compliant.",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-royal-600" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/partners">How the program works</Button>
                <Button href="/apply" variant="ghost">
                  Apply to refer
                </Button>
              </div>
            </div>
            <ImageSlot mood="The gym floor" ratio="aspect-[5/4]" />
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------- How it works */}
      <Section>
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Four steps to a new start.</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", h: "Online assessment", p: "Five minutes on your goals and medical history — no clinic waiting room." },
            { n: "02", h: "Clinician review", p: "A licensed provider reviews everything, with labs where clinically appropriate." },
            { n: "03", h: "Licensed pharmacy", p: "Your therapy is prepared and quality-checked by a licensed U.S. pharmacy." },
            { n: "04", h: "Delivered & tracked", p: "It arrives discreetly, with messaging, dose adjustments and re-testing." },
          ].map((step) => (
            <div key={step.n} className="rounded-xl2 border border-line-200 bg-white p-7">
              <div className="font-mono text-2xl font-medium text-royal-600">{step.n}</div>
              <h3 className="mt-4 text-lg font-bold">{step.h}</h3>
              <p className="mt-2 text-sm text-slate-500">{step.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href={signupUrl}>Start your assessment</Button>
        </div>
      </Section>

      {/* -------------------------------------------------- Featured treatments */}
      <section className="bg-mist-50">
        <Container className="py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Featured treatments</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Popular ways to start.</h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-royal-600 hover:text-royal-700">
              View all treatments →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((slug) => {
              const p = getProduct(slug);
              if (!p) return null;
              const goal = GOALS.find((g) => g.slug === p.goal);
              return (
                <Link
                  key={slug}
                  href={`/products/${p.slug}`}
                  className="group overflow-hidden rounded-xl2 border border-line-200 bg-white shadow-card transition hover:shadow-lift"
                >
                  <ProductImageSlot name={p.name} ratio="aspect-[4/3]" />
                  <div className="p-5">
                    <span className="font-mono text-xs uppercase tracking-wide text-slate-500">
                      {goal?.label}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{p.usedFor}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-mono text-sm font-medium text-navy-950">{priceFor(p.slug).short}</span>
                      <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-royal-700">
                        Rx · Clinician approval
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------- Membership */}
      <section className="ocean">
        <Container className="py-16 sm:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Membership</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Membership with a <span className="italic text-ice-300">concierge touch.</span>
            </h2>
            <p className="mt-4 text-ice-300">
              One simple plan that includes the care and the medicine — or step up to a
              concierge experience built around your labs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl2 p-7 ${
                  tier.signature
                    ? "bg-navy-800 ring-1 ring-gold-500/40"
                    : "bg-white/5 ring-1 ring-white/15 backdrop-blur"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  {tier.signature ? (
                    <span className="rounded-full border border-gold-500/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-gold-300">
                      Signature
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-ice-300">{tier.pitch}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-white/90">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className={tier.signature ? "mt-0.5 shrink-0 text-gold-300" : "mt-0.5 shrink-0 text-ice-300"}>
                        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  {tier.signature ? (
                    <Button href={signupUrl} variant="light">Start with Signature</Button>
                  ) : (
                    <Button href={signupUrl} variant="light">Choose Essential</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ice-300/80">
            Your exact plan and price are set with your provider. Cancel anytime.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------- Physician standards */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Physician-led</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Designed by physicians, <span className="italic text-royal-600">built on standards.</span>
          </h2>
          <p className="mt-4 text-slate-500">
            Not a vending machine — a licensed care team and the standards that protect you.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STANDARDS.map((v) => (
            <div key={v.title} className="rounded-xl2 border border-line-200 bg-white p-6">
              <h3 className="text-base font-bold text-navy-950">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{v.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Your care team and their credentials are shown in your patient portal. Clinician
          availability varies by state.
        </p>
      </Section>

      {/* -------------------------------------------------------- Testimonials */}
      <section className="bg-mist-50">
        <Container className="py-16 sm:py-24">
          <Eyebrow>Member stories</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">In their words.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="rounded-xl2 border border-dashed border-line-200 bg-white p-6">
                <div className="flex gap-1 text-gold-500" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-xl italic text-navy-950/70">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-slate-500">
                  {t.name}
                  {t.placeholder ? (
                    <span className="ml-2 rounded-full border border-line-200 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide">
                      placeholder
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Real, consented member stories with typical-results context replace these before
            launch. Individual results vary.
          </p>
        </Container>
      </section>

      {/* ---------------------------------------------------------- Comparison */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Why New Start</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            New Start MD vs. a <span className="italic text-royal-600">typical clinic.</span>
          </h2>
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr>
                <th className="py-3 pr-4 font-medium text-slate-500">What you get</th>
                <th className="rounded-t-lg bg-sky-100 px-4 py-3 text-center font-semibold text-navy-950">
                  New Start MD
                </th>
                <th className="px-4 py-3 text-center font-medium text-slate-500">Typical clinic</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={row.feature}>
                  <td className="border-t border-line-200 py-3 pr-4 text-navy-950">{row.feature}</td>
                  <td className={`border-t border-line-200 bg-sky-100/60 px-4 py-3 text-center ${i === COMPARE.length - 1 ? "rounded-b-lg" : ""}`}>
                    {row.us ? (
                      <span className="inline-flex text-success-600" aria-label="yes">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    ) : (
                      <span className="text-slate-300" aria-label="no">—</span>
                    )}
                  </td>
                  <td className="border-t border-line-200 px-4 py-3 text-center">
                    {row.them ? (
                      <span className="inline-flex text-slate-500" aria-label="yes">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    ) : (
                      <span className="text-slate-300" aria-label="no">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* --------------------------------------------- Pricing & what's included */}
      <section className="border-t border-line-200 bg-white">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Pricing &amp; what&apos;s included</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                One plan, everything handled.
              </h2>
              <p className="mt-4 max-w-md text-slate-500">
                No membership games, no surprise fees. Every program includes the care and
                the medicine — and your provider helps you choose what&apos;s right for you.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-500">
                {[
                  "A visit with a licensed provider",
                  "A plan personalized to your goal",
                  "Your therapy delivered to your door",
                  "Ongoing check-ins and dose adjustments",
                  "Message your care team whenever you need",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-royal-600" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <PriceBand />
              <div className="rounded-xl2 border border-line-200 bg-white p-6">
                <h3 className="text-base font-bold">Not sure what you need?</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Talk it through with our team — no pressure, and no cost to ask.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button href={signupUrl}>Start now</Button>
                  <Button href="/contact" variant="ghost">
                    Ask a question
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------- FAQ */}
      <section className="border-t border-line-200 bg-white">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-24">
              <Eyebrow>Questions</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Good to know.</h2>
              <p className="mt-4 max-w-sm text-slate-500">
                Still have questions? <Link href="/contact" className="font-semibold text-royal-600 hover:text-royal-700">Message our care team</Link>.
              </p>
            </div>
            <div className="divide-y divide-line-200 border-y border-line-200">
              {HOME_FAQ.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-royal-600 transition group-open:rotate-45">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------- Closing */}
      <section className="border-t border-line-200 glow">
        <Container className="py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold sm:text-5xl">
            Every great chapter <span className="italic text-royal-600">starts with a new start.</span>
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button href={signupUrl}>Start now</Button>
            <Button href="/products" variant="ghost">
              Browse products
            </Button>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
          </div>
        </Container>
      </section>
    </>
  );
}
