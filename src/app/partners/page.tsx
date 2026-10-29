import type { Metadata } from "next";
import { Container, Section, Eyebrow, Button, ImageSlot } from "@/components/ui";
import { PARTNER_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Partner program",
  description:
    "Gyms, trainers and affiliates: partner with New Start MD. It's more than a commission — a platform. Keep your clients in your own portal, hand them ready-made and AI-assisted programs, promote your own services, and get paid a simple flat rate.",
};

const STEPS = [
  { n: "01", h: "Apply & get approved", p: "Tell us about your business. Approved partners get a branded code, a link, and a portal in minutes." },
  { n: "02", h: "Share it", p: "Put your code on your site, your socials, your gym floor. Every visit it brings is tracked automatically." },
  { n: "03", h: "Coach them in your portal", p: "Stay in your clients' corner — push workouts, diets and content, and keep them motivated while we handle the medicine." },
  { n: "04", h: "You're on the platform", p: "A flat rate on a simple schedule — plus the platform itself: your portal, your programs, your audience. Never per patient, per order, or a cut of spend." },
];

const PORTAL = [
  { h: "Stay in contact", p: "Message and check in with your clients, right where their plan lives." },
  { h: "Ready-made & AI-built programs", p: "Hand clients proven, pre-built programs — or generate workout and diet plans with AI in minutes, then make them your own." },
  { h: "Upload your own workouts", p: "Push your training programs to your clients and update them as they progress." },
  { h: "Share diets & nutrition", p: "Meal plans and guidance that fit each client's goal." },
  { h: "Drop podcasts & content", p: "Your videos, your audio, your voice — keep them learning and motivated." },
  { h: "Promote your own services", p: "Your gym, your classes, your coaching — put what you offer in front of the people you send." },
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
    a: "It's much more than a commission — you're joining a platform. You're paid a flat rate on a simple schedule for the brand-and-content collaboration we build together: the workouts, diets and podcasts you bring, and your participation on the platform. On top of the pay, you get the platform itself — your portal, ready-made and AI-assisted programs to hand to clients, and a place to promote your own services. You are never paid per patient, per order, or as a cut of what someone spends.",
  },
  {
    q: "Why a flat rate instead of a commission?",
    a: "Because it's the right way to do it — and the compliant one. Federal law (EKRA) and state rules restrict paying for patient referrals in healthcare, even cash-pay. A flat rate tied to your content, brand and platform participation keeps you, and us, clean — while rewarding the real value you bring: your audience, your coaching and your content.",
  },
  {
    q: "What do my people get?",
    a: "Physician-guided care and therapy delivered to their door — plus you, still coaching them inside the platform, with your programs, your content and your encouragement. They start a visit, a licensed provider decides what's appropriate, and it ships.",
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

// Devices a client can connect; their activity/sleep/recovery flow into the plan.
const DEVICES = ["Apple Watch", "Apple Health", "Fitbit", "Oura", "Garmin", "Whoop", "Google Fit", "Samsung Health", "Strava"];

// Illustrative roster for the portal preview (no real people, no real data).
const CLIENTS = [
  { initials: "MR", name: "Marcus R.", goal: "Weight loss", device: "Oura", checkIn: "Checked in today", adherence: 92, trend: [60, 62, 61, 64, 66, 69, 72] },
  { initials: "JL", name: "Jamie L.", goal: "Hormones", device: "Apple Health", checkIn: "2 days ago", adherence: 78, trend: [40, 44, 43, 48, 52, 55, 58] },
  { initials: "DP", name: "Dana P.", goal: "Recovery", device: "Fitbit", checkIn: "Checked in today", adherence: 85, trend: [70, 68, 71, 73, 72, 75, 77] },
  { initials: "SW", name: "Sam W.", goal: "Longevity", device: "Garmin", checkIn: "Yesterday", adherence: 64, trend: [50, 52, 49, 51, 53, 52, 54] },
];

function Sparkline({ points, w = 72, h = 28 }: { points: number[]; w?: number; h?: number }) {
  const pad = 3;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const step = (w - pad * 2) / (points.length - 1);
  const d = points
    .map((p, i) => {
      const x = pad + i * step;
      const y = pad + (1 - (p - min) / span) * (h - pad * 2);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="shrink-0" aria-hidden>
      <path d={d} fill="none" stroke="#1F4FD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
                This is more than a commission — it&apos;s a platform. New Start MD gives your people a
                real medical path to the results they train for, and gives you a portal to keep
                coaching them: ready-made and AI-assisted programs, a place to promote your own
                services, and a simple flat rate. You bring the audience and the content; we bring
                the providers, the pharmacy, and the delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/apply">Apply to partner</Button>
                <Button href="#portal" variant="ghost">
                  See the partner portal
                </Button>
              </div>
            </div>
            <ImageSlot src="/images/family-outdoors.jpg" alt="An active family enjoying the outdoors together" mood="Your crew" ratio="aspect-[5/4]" />
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

            {/* Portal preview — what a partner actually sees */}
            <div>
              <div className="overflow-hidden rounded-xl2 border border-line-200 bg-white shadow-card">
                <div className="flex items-center justify-between border-b border-line-200 bg-mist-50 px-5 py-3">
                  <span className="text-sm font-semibold text-navy-950">Your clients</span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-wide text-slate-500">
                    4 active · synced live
                  </span>
                </div>
                <ul className="divide-y divide-line-200">
                  {CLIENTS.map((c) => (
                    <li key={c.name} className="flex items-center gap-3 px-5 py-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sky-100 text-xs font-semibold text-royal-700">
                        {c.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-sm font-semibold text-navy-950">{c.name}</span>
                          <span className="rounded-full bg-mist-50 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-wide text-slate-500 ring-1 ring-line-200">
                            {c.goal}
                          </span>
                        </div>
                        <p className="mt-0.5 truncate text-xs text-slate-500">
                          {c.device} synced · {c.checkIn}
                        </p>
                      </div>
                      <Sparkline points={c.trend} />
                      <div className="w-12 shrink-0 text-right">
                        <div className="font-mono text-sm font-semibold tabular-nums text-navy-950">{c.adherence}%</div>
                        <div className="text-[0.6rem] uppercase tracking-wide text-slate-400">adherence</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-line-200 bg-mist-50 px-5 py-3 text-xs text-slate-500">
                  Progress your clients choose to share — never their medical record.
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-slate-400">Illustrative preview</p>
            </div>
          </div>

          {/* What the portal does */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PORTAL.map((f) => (
              <div key={f.h} className="rounded-xl2 border border-line-200 bg-white p-5">
                <h3 className="text-base font-bold text-navy-950">{f.h}</h3>
                <p className="mt-2 text-sm text-slate-500">{f.p}</p>
              </div>
            ))}
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

      {/* Wearables / device integration */}
      <Section id="sync">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Wearables, built in</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Coach on real signals, <span className="italic text-royal-600">not guesswork.</span>
            </h2>
            <p className="mt-4 max-w-lg text-slate-500">
              Your clients connect the watch or ring they already wear, and their activity, sleep and
              recovery flow into their plan automatically. With their opt-in, you see the progress
              that matters — adherence, movement, momentum — so your check-ins land on real data
              instead of a guess. You never see their medical record; only what they choose to share.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {DEVICES.map((d) => (
                <span
                  key={d}
                  className="inline-flex items-center gap-2 rounded-full border border-line-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-950"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-royal-600" aria-hidden />
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Sample client signal card */}
          <div>
            <div className="rounded-xl2 border border-line-200 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-navy-950">Marcus R.</p>
                  <p className="text-xs text-slate-500">Synced from Oura · today</p>
                </div>
                <span className="rounded-full bg-[#e4f3ec] px-2.5 py-1 text-xs font-semibold text-[#12805c]">On track</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-line-200">
                {[
                  { k: "Steps", v: "8,420" },
                  { k: "Sleep", v: "7h 12m" },
                  { k: "Resting HR", v: "58 bpm" },
                  { k: "Readiness", v: "84" },
                ].map((m) => (
                  <div key={m.k} className="bg-white p-4">
                    <div className="font-mono text-lg font-semibold tabular-nums text-navy-950">{m.v}</div>
                    <div className="mt-0.5 text-[0.65rem] uppercase tracking-wide text-slate-500">{m.k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-lg border border-line-200 px-4 py-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">7-day activity</div>
                  <div className="mt-0.5 text-xs text-slate-400">trending up</div>
                </div>
                <Sparkline points={[60, 62, 61, 64, 66, 69, 72]} w={120} h={36} />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">Illustrative preview</p>
          </div>
        </div>
      </Section>

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

      {/* Lifestyle band — your people, your results */}
      <Section>
        <Eyebrow>Your people</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
          The members you send become the results you&apos;re known for.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <ImageSlot src="/images/everyday-sideline.jpg" alt="A coach courtside with a client" mood="On the sideline" ratio="aspect-[4/3]" />
          <ImageSlot src="/images/family-baseball.jpg" alt="A member back in the game with family" mood="Back in it" ratio="aspect-[4/3]" />
          <ImageSlot src="/images/valet-group.jpg" alt="A community showing up strong together" mood="Your crew" ratio="aspect-[4/3]" />
        </div>
      </Section>

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
