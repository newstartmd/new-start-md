import type { Metadata } from "next";
import { Container, Section, Eyebrow, Button, ImageSlot } from "@/components/ui";
import { PARTNER_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Partner program",
  description:
    "Gyms, trainers and affiliates: partner with New Start MD. A branded code, local events and giveaways for your community, and a simple, compliant licensing model.",
};

const STEPS = [
  { n: "01", h: "Apply & get approved", p: "Tell us about your business. Approved partners get a branded code and link in minutes." },
  { n: "02", h: "Share it", p: "Put your code on your site, your socials, your gym floor. Every visit it brings is tracked automatically." },
  { n: "03", h: "We show up for your crew", p: "We bring local events and giveaways — game and movie tickets, experiences, swag — so your community gets real value from the partnership." },
  { n: "04", h: "You're recognized", p: "A flat brand-and-content licensing arrangement, paid on a simple schedule. No per-patient math, ever." },
];

const FAQ = [
  {
    q: "How do I get paid?",
    a: "Through a flat brand-and-content licensing arrangement — a set fee for the content and brand collaboration we build together. On top of that, we invest in your community with local events and giveaways. You are never paid per patient, per order, or as a cut of what someone spends.",
  },
  {
    q: "Why is it structured that way?",
    a: "Because it's the right way to do it. Federal law (EKRA) and state rules restrict paying for patient referrals in healthcare — even cash-pay. A licensing model keeps you, and us, clean while still rewarding the real value you bring: your audience and your content.",
  },
  {
    q: "What do my people get?",
    a: "Physician-guided care and therapy delivered to their door — plus the local events and giveaways we run together with you. They start a visit, a licensed provider decides what's appropriate, and it ships.",
  },
  {
    q: "Who's a good fit?",
    a: "Gyms and studios, personal trainers and coaches, and creators or affiliates with an audience that cares about training, recovery, weight and longevity.",
  },
  {
    q: "What does it cost me?",
    a: "Nothing to join. Apply, get approved, and start sharing your code.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="border-b border-line glow">
        <Container className="py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>For gyms, trainers & affiliates</Eyebrow>
              <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] sm:text-6xl">
                You built the trust.
                <br />
                <span className="text-ember">Get the credit.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-bone-soft">
                New Start MD gives your people a real medical path to the results they
                train for — and gives you a clean, simple way to be recognized for sending
                them. You bring the audience. We bring the providers, the pharmacy, and the
                delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/apply">Apply to refer</Button>
                <Button href="#how" variant="ghost">
                  See how it pays
                </Button>
              </div>
            </div>
            <ImageSlot mood="Your crew" ratio="aspect-[5/4]" />
          </div>
        </Container>
      </section>

      {/* How it works */}
      <Section id="how">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Four steps, start to paid.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-xl2 border border-line bg-surface p-6">
              <div className="font-display text-3xl font-extrabold text-volt">{s.n}</div>
              <h3 className="mt-4 text-base font-bold">{s.h}</h3>
              <p className="mt-2 text-sm text-muted">{s.p}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl rounded-lg border border-line bg-surface p-4 text-xs text-muted">
          {PARTNER_DISCLAIMER}
        </p>
      </Section>

      {/* Why partners choose us */}
      <section className="border-y border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { h: "Full line", p: "The complete catalog — weight, hormones, recovery, longevity — not a thin starter menu." },
              { h: "Real medicine", p: "Licensed providers and a compounding pharmacy stand behind every order. You never touch the clinical side." },
              { h: "Set-and-forget tracking", p: "Your code is captured on first click and credited even if they book weeks later." },
            ].map((c) => (
              <div key={c.h}>
                <h3 className="text-xl font-bold text-volt">{c.h}</h3>
                <p className="mt-2 text-sm text-bone-soft">{c.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <Section id="faq">
        <Eyebrow>Partner FAQ</Eyebrow>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Straight answers.</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-bone [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-volt transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm text-bone-soft">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/apply">Apply to refer</Button>
        </div>
      </Section>
    </>
  );
}
