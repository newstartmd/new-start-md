import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, Disclaimer, PriceInline, ImageSlot } from "@/components/ui";
import { ProgressRing } from "@/components/graphics";
import {
  SHIPPING_FLAT,
  SHIPPING_MONTHLY_YEAR,
  SHIPPING_QUARTERLY_YEAR,
  SHIPPING_QUARTERLY_SAVINGS,
  money,
} from "@/lib/pricing";
import { signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "One membership that includes the care and the medicine — from an everyday plan to a concierge new start, all set with your provider.",
};

type Tier = {
  name: string;
  pitch: string;
  features: string[];
  cta: string;
  variant: "base" | "popular" | "signature";
};

const TIERS: Tier[] = [
  {
    name: "Essential",
    pitch: "Everything you need to start and stay on track.",
    features: [
      "Licensed provider visit & plan",
      "Therapy delivered to your door",
      "Message your care team",
      "Dose adjustments as you progress",
    ],
    cta: "Choose Essential",
    variant: "base",
  },
  {
    name: "Performance",
    pitch: "For people chasing a real goal.",
    features: [
      "Everything in Essential",
      "Lab-informed protocol reviews",
      "Faster clinician response",
      "Progress tracking in your portal",
    ],
    cta: "Choose Performance",
    variant: "popular",
  },
  {
    name: "Signature",
    pitch: "A concierge new start, with your biology in focus.",
    features: [
      "Everything in Performance",
      "Same-day clinician messaging",
      "Quarterly labs",
      "Priority shipping & travel-ready kits",
    ],
    cta: "Start with Signature",
    variant: "signature",
  },
];

// Comparison matrix — feature × tier.
const MATRIX: { feature: string; tiers: [boolean, boolean, boolean] }[] = [
  { feature: "Licensed provider visit & plan", tiers: [true, true, true] },
  { feature: "Therapy delivered to your door", tiers: [true, true, true] },
  { feature: "Message your care team", tiers: [true, true, true] },
  { feature: "Lab-informed protocol reviews", tiers: [false, true, true] },
  { feature: "Progress tracking in your portal", tiers: [false, true, true] },
  { feature: "Same-day clinician messaging", tiers: [false, false, true] },
  { feature: "Quarterly labs", tiers: [false, false, true] },
  { feature: "Priority shipping & travel-ready kits", tiers: [false, false, true] },
];

const FAQ = [
  { q: "What's included in the price?", a: "Every membership includes your provider visit, your plan and your prescribed therapy — the care and the medicine together. Your exact plan and price are set with your provider." },
  { q: "Can I change tiers later?", a: "Yes. You can move up or down with your care team as your goals change, and changes take effect on your next cycle." },
  { q: "Do I have to commit?", a: "No long contracts — you can cancel anytime. The savings come from how you ship: bundling your therapies into one box and moving to 90-day boxes lowers your shipping, since it's a flat fee per order." },
  { q: "How does shipping work?", a: "Shipping is a flat $40 per order, no matter how many therapies are in the box. That's why stacking everything into one shipment and ordering quarterly saves you the most." },
  { q: "Are labs included?", a: "Signature includes quarterly labs. On other tiers, your provider orders labs where they're clinically helpful." },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line-200 glow">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Membership</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] sm:text-6xl">
              Membership that <span className="italic text-royal-600">moves with your life.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-500">
              One simple plan that includes the care and the medicine — from an everyday start to a
              concierge experience built around your labs.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <span className="font-mono text-sm font-medium text-navy-950">
                Programs <PriceInline />
              </span>
              <a
                href="#savings"
                className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-royal-700 transition hover:bg-sky-100/70"
              >
                Save ~{money(SHIPPING_QUARTERLY_SAVINGS)}/yr with quarterly boxes →
              </a>
              <span className="text-xs text-slate-500">Your exact plan &amp; price are set with your provider.</span>
            </div>
          </div>
          <ImageSlot
            src="/images/pool-lounge.jpg"
            alt="A person relaxing poolside, at ease"
            mood="Membership life"
            ratio="aspect-[4/5]"
          />
        </Container>
      </section>

      {/* Tiers */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => {
            const signature = tier.variant === "signature";
            const popular = tier.variant === "popular";
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl2 p-7 ${
                  signature
                    ? "bg-navy-800 text-white shadow-gold ring-1 ring-gold-500/50"
                    : popular
                      ? "bg-white ring-2 ring-royal-600"
                      : "border border-line-200 bg-white"
                }`}
              >
                {popular ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-royal-600 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                ) : null}
                {signature ? (
                  <span className="absolute -top-3 left-7 rounded-full border border-gold-500 bg-navy-950 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-gold-300">
                    Signature
                  </span>
                ) : null}

                <h2 className={`text-2xl font-semibold ${signature ? "text-white" : "text-navy-950"}`}>{tier.name}</h2>
                <p className={`mt-2 text-sm ${signature ? "text-ice-300" : "text-slate-500"}`}>{tier.pitch}</p>

                <ul className={`mt-6 flex-1 space-y-2.5 text-sm ${signature ? "text-white/90" : "text-slate-500"}`}>
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className={`mt-0.5 shrink-0 ${signature ? "text-gold-300" : "text-royal-600"}`}>
                        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button href={signupUrl} variant={signature ? "light" : "primary"} className="w-full">
                    {tier.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Tiers differ by service level, not by the safety of your care — every plan is prescribed
          and monitored by a licensed provider. Exact tier pricing is set with your provider.
        </p>
      </Section>

      {/* How it saves you */}
      <section id="savings" className="scroll-mt-24">
        <Container className="py-14 sm:py-20">
          <div className="max-w-2xl">
            <Eyebrow>How it saves you</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Smart by design, <span className="italic text-royal-600">not by coupon.</span>
            </h2>
            <p className="mt-4 text-slate-500">
              No gimmick discounts. The savings are built into how we ship and dose — real money,
              every month you&apos;re with us.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Levers */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl2 border border-line-200 bg-white p-6">
                <div className="font-mono text-sm font-medium text-royal-600">01</div>
                <h3 className="mt-3 text-base font-bold text-navy-950">One box, one shipping</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Shipping is a flat {money(SHIPPING_FLAT)} per order — not per item. Stack your
                  therapies into a single box and you pay it once, not every time.
                </p>
              </div>
              <div className="rounded-xl2 border border-line-200 bg-white p-6">
                <div className="font-mono text-sm font-medium text-royal-600">02</div>
                <h3 className="mt-3 text-base font-bold text-navy-950">Quarterly boxes</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Move to 90-day boxes and your shipping drops from {money(SHIPPING_MONTHLY_YEAR)} a
                  year to {money(SHIPPING_QUARTERLY_YEAR)} — about {money(SHIPPING_QUARTERLY_SAVINGS)}{" "}
                  saved, every year.
                </p>
              </div>
              <div className="rounded-xl2 border border-line-200 bg-white p-6 sm:col-span-2">
                <div className="font-mono text-sm font-medium text-royal-600">03</div>
                <h3 className="mt-3 text-base font-bold text-navy-950">Start low, pay low</h3>
                <p className="mt-2 text-sm text-slate-500">
                  GLP-1 programs are priced by dose step, so while you titrate up you only pay for
                  the dose you&apos;re on — never the top price before you&apos;re there.
                </p>
              </div>
            </div>

            {/* Shipping math */}
            <div className="flex flex-col justify-center rounded-xl2 ocean p-7 text-white">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ice-300">The shipping math</span>
              <div className="mt-5 space-y-3">
                <div className="flex items-baseline justify-between border-b border-white/15 pb-3">
                  <span className="text-sm text-ice-300">Ship monthly (12 × {money(SHIPPING_FLAT)})</span>
                  <span className="font-mono text-lg font-medium tabular-nums">{money(SHIPPING_MONTHLY_YEAR)}/yr</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/15 pb-3">
                  <span className="text-sm text-ice-300">Ship quarterly (4 × {money(SHIPPING_FLAT)})</span>
                  <span className="font-mono text-lg font-medium tabular-nums">{money(SHIPPING_QUARTERLY_YEAR)}/yr</span>
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-sm font-semibold text-white">You save</span>
                  <span className="font-mono text-2xl font-semibold tabular-nums text-gold-300">
                    ~{money(SHIPPING_QUARTERLY_SAVINGS)}/yr
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Button href={signupUrl} variant="light" className="w-full">Build my plan</Button>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            Shipping is a flat {money(SHIPPING_FLAT)} per order. Figures shown are program prices and
            don&apos;t include any labs your provider orders. Your exact plan, cadence and price are
            set with your licensed provider.
          </p>
        </Container>
      </section>

      {/* Plan at a glance */}
      <section className="bg-mist-50">
        <Container className="py-14 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Eyebrow>Your plan at a glance</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold">Everything in one dashboard.</h2>
              <p className="mt-3 max-w-md text-slate-500">
                Your membership lives in your portal — your plan, your progress and your care team,
                right next to your training and goals.
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Sample</span>
          </div>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="grid max-w-xl grid-cols-3 gap-6">
                <ProgressRing value={82} label="Protocol adherence" />
                <ProgressRing value={74} label="Energy score" />
                <ProgressRing value={65} label="Goal progress" />
              </div>
              <p className="mt-6 text-xs text-slate-500">Illustrative sample — your real dashboard reflects your own plan.</p>
            </div>
            <ImageSlot
              src="/images/lux-office.jpg"
              alt="Checking progress from a bright, modern space"
              mood="In your corner"
              ratio="aspect-[4/3]"
            />
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <Section>
        <Eyebrow>Compare</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold">What&apos;s included.</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr>
                <th className="py-3 pr-4 font-medium text-slate-500">Feature</th>
                {TIERS.map((t, i) => (
                  <th
                    key={t.name}
                    className={`px-4 py-3 text-center font-semibold ${
                      t.variant === "popular" ? "rounded-t-lg bg-sky-100 text-navy-950" : "text-navy-950"
                    }`}
                  >
                    {t.name}
                    {t.variant === "popular" ? (
                      <span className="ml-1 align-middle text-[0.6rem] font-medium uppercase text-royal-700">★</span>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row, ri) => (
                <tr key={row.feature}>
                  <td className="border-t border-line-200 py-3 pr-4 text-navy-950">{row.feature}</td>
                  {row.tiers.map((on, ti) => (
                    <td
                      key={ti}
                      className={`border-t border-line-200 px-4 py-3 text-center ${
                        TIERS[ti].variant === "popular" ? "bg-sky-100/60" : ""
                      } ${ri === MATRIX.length - 1 && TIERS[ti].variant === "popular" ? "rounded-b-lg" : ""}`}
                    >
                      {on ? (
                        <span className="inline-flex text-success-600" aria-label="included">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      ) : (
                        <span className="text-slate-300" aria-label="not included">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          HSA/FSA eligibility varies by plan and employer — we&apos;ll confirm what applies to you
          before you&apos;re charged. <span className="italic">(Details finalized before launch.)</span>
        </p>
      </Section>

      {/* FAQ */}
      <section className="bg-mist-50">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-24">
              <Eyebrow>Questions</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold">Membership, explained.</h2>
              <p className="mt-4 max-w-sm text-slate-500">
                More questions? <Link href="/contact" className="font-semibold text-royal-600 hover:text-royal-700">Message our care team</Link>.
              </p>
            </div>
            <div className="divide-y divide-line-200 border-y border-line-200">
              {FAQ.map((item) => (
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

      {/* Lifestyle band — what membership is really for */}
      <section className="border-t border-line-200 bg-white">
        <Container className="py-14 sm:py-20">
          <Eyebrow>What it&apos;s for</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Not the plan. The life the plan is for.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <ImageSlot src="/images/surf.jpg" alt="Catching a wave at sunrise" mood="Capable" ratio="aspect-[4/5]" />
            <ImageSlot src="/images/family-soccer.jpg" alt="Keeping up with the kids on the field" mood="Present" ratio="aspect-[4/5]" />
            <ImageSlot src="/images/ocean-bar.jpg" alt="An easy evening by the water" mood="Unhurried" ratio="aspect-[4/5]" />
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="ocean">
        <Container className="py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
            Start your new start <span className="italic text-ice-300">today.</span>
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button href={signupUrl} variant="light">Take the 5-minute assessment</Button>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <Disclaimer>
              <span className="text-slate-300">{MEDICAL_DISCLAIMER}</span>
            </Disclaimer>
          </div>
        </Container>
      </section>
    </>
  );
}
