import type { Metadata } from "next";
import { Container, Section, Eyebrow, Button, ImageSlot } from "@/components/ui";
import { PARTNER_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Partner program",
  description:
    "Gyms, trainers and affiliates: partner with New Start MD. Stay connected to your clients in your own portal — upload workouts, diets and podcasts — plus local events, giveaways, and a simple, compliant licensing model.",
};

const STEPS = [
  { n: "01", h: "Apply & get approved", p: "Tell us about your business. Approved partners get a branded code, a link, and a portal in minutes." },
  { n: "02", h: "Share it", p: "Put your code on your site, your socials, your gym floor. Every visit it brings is tracked automatically." },
  { n: "03", h: "Coach them in your portal", p: "Stay in your clients' corner — push workouts, diets and content, and keep them motivated while we handle the medicine." },
  { n: "04", h: "You're recognized", p: "A flat brand-and-content licensing arrangement, paid on a simple schedule. No per-patient math, ever." },
];

const PORTAL = [
  { h: "Stay in contact", p: "Message and check in with your clients, right where their plan lives." },
  { h: "Upload workouts", p: "Push training programs to your clients and update them as they progress." },
  { h: "Share diets & nutrition", p: "Meal plans and guidance that fit each client's goal." },
  { h: "Drop podcasts & content", p: "Your videos, your audio, your voice — keep them learning and motivated." },
  { h: "Keep them motivated", p: "Milestones, nudges and encouragement that keep people showing up." },
  { h: "Share the wins — opt-in", p: "With a client's permission, celebrate their success with the wider community." },
];

const FAQ = [
  {
    q: "What's the partner portal?",
    a: "It's where you stay connected to the clients you send us. You can message them, upload workouts, diets, podcasts and other content, and keep them motivated — all right next to their care. When a client opts in, you can also share their wins with the wider community. Your content lives in one place and reaches the people you coach.",
  },
  {
    q: "Can I share my clients' results?",
    a: "Only when they opt in. Clients choose whether to share their progress, and their medical information is never shown to anyone. Opt-in success stories are about motivation and community — nothing more.",
  },
  {
    q: "How do I get paid?",
    a: "Through a flat brand-and-content licensing arrangement — a set fee for the content and brand collaboration we build together, including the workouts, diets and podcasts you create for the portal. On top of that, we invest in your community with local events and giveaways. You are never paid per patient, per order, or as a cut of what someone spends.",
  },
  {
    q: "Why is it structured that way?",
    a: "Because it's the right way to do it. Federal law (EKRA) and state rules restrict paying for patient referrals in healthcare — even cash-pay. A licensing model keeps you, and us, clean while still rewarding the real value you bring: your audience and your content.",
  },
  {
    q: "What do my people get?",
    a: "Physician-guided care and therapy delivered to their door — plus you, still coaching them, and the local events and giveaways we run together. They start a visit, a licensed provider decides what's appropriate, and it ships.",
  },
  {
    q: "Who's a good fit?",
    a: "Gyms and studios, personal trainers and coaches, and creators or affiliates with an audience that cares about training, recovery, weight and longevity.",
  },
  {
    q: "What does it cost me?",
    a: "Nothing to join. Apply, get approved, and start coaching and sharing your code.",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line-200 glow">
        <Container className="py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>For gyms, trainers &amp; affiliates</Eyebrow>
              <h1 className="mt-5 text-5xl font-medium leading-[0.98] sm:text-6xl">
                You built the trust.
                <br />
                <span className="italic text-royal-600">Stay in their corner.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-slate-500">
                New Start MD gives your people a real medical path to the results they train for —
                and gives you a portal to keep coaching them the whole way. You bring the audience
                and the content. We bring the providers, the pharmacy, and the delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/apply">Apply to partner</Button>
                <Button href="#portal" variant="ghost">
                  See the partner portal
                </Button>
              </div>
            </div>
            <ImageSlot mood="Your crew" ratio="aspect-[5/4]" />
          </div>
        </Container>
      </section>

      {/* Partner portal */}
      <section id="portal" className="bg-mist-50">
        <Container className="py-16 sm:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-24">
              <Eyebrow>The partner portal</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                You don&apos;t hand them off. <span className="italic text-royal-600">You stay their coach.</span>
              </h2>
              <p className="mt-4 max-w-md text-slate-500">
                When you send someone to New Start, they don&apos;t disappear into a clinic. Your
                portal keeps you connected — your workouts, your diets, your podcasts and your
                encouragement, right alongside their care.
              </p>
              <div className="mt-8">
                <Button href="/apply">Get your portal</Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {PORTAL.map((f) => (
                <div key={f.h} className="rounded-xl2 border border-line-200 bg-white p-5">
                  <h3 className="text-base font-bold text-navy-950">{f.h}</h3>
                  <p className="mt-2 text-sm text-slate-500">{f.p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Opt-in success sharing */}
          <div className="mt-10 overflow-hidden rounded-xl2 ocean">
            <div className="grid items-center gap-6 p-8 sm:grid-cols-[1fr_auto]">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-ice-300">Opt-in only</span>
                <h3 className="mt-2 text-2xl font-semibold text-white">Success is contagious.</h3>
                <p className="mt-2 max-w-2xl text-sm text-ice-300">
                  When your clients choose to share their wins, you can celebrate them with the
                  wider New Start community — real motivation for everyone else. It only ever
                  happens with the client&apos;s say-so, and their health information is never shared.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <Section id="how">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Four steps, start to coaching.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-xl2 border border-line-200 bg-white p-6">
              <div className="font-mono text-2xl font-medium text-royal-600">{s.n}</div>
              <h3 className="mt-4 text-base font-bold">{s.h}</h3>
              <p className="mt-2 text-sm text-slate-500">{s.p}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl rounded-lg border border-line-200 bg-white p-4 text-xs text-slate-500">
          {PARTNER_DISCLAIMER}
        </p>
      </Section>

      {/* Why partners choose us */}
      <section className="border-y border-line-200 bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { h: "Full line", p: "The complete catalog — weight, hormones, recovery, longevity — not a thin starter menu." },
              { h: "Real medicine", p: "Licensed providers and licensed U.S. pharmacies stand behind every order. You never touch the clinical side." },
              { h: "Set-and-forget tracking", p: "Your code is captured on first click and credited even if they book weeks later." },
            ].map((c) => (
              <div key={c.h}>
                <h3 className="text-xl font-bold text-royal-600">{c.h}</h3>
                <p className="mt-2 text-sm text-slate-500">{c.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <Section id="faq">
        <Eyebrow>Partner FAQ</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Straight answers.</h2>
        <div className="mt-8 divide-y divide-line-200 border-y border-line-200">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-royal-600 transition group-open:rotate-45">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/apply">Apply to partner</Button>
        </div>
      </Section>
    </>
  );
}
