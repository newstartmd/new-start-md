import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, Disclaimer, PriceInline } from "@/components/ui";
import { ProgressRing } from "@/components/graphics";
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
  { q: "Do I have to commit?", a: "No long contracts — you can cancel anytime. Annual billing simply saves you more if you know you're staying." },
  { q: "Are labs included?", a: "Signature includes quarterly labs. On other tiers, your provider orders labs where they're clinically helpful." },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line-200 glow">
        <Container className="py-16 sm:py-20">
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
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-royal-700">
              Save ~15% billed annually
            </span>
            <span className="text-xs text-slate-500">Your exact plan &amp; price are set with your provider.</span>
          </div>
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
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-6">
            <ProgressRing value={82} label="Protocol adherence" />
            <ProgressRing value={74} label="Energy score" />
            <ProgressRing value={65} label="Goal progress" />
          </div>
          <p className="mt-6 text-xs text-slate-500">Illustrative sample — your real dashboard reflects your own plan.</p>
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
