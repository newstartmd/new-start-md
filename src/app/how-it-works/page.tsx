import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, ImageSlot, Disclaimer, Reassurance } from "@/components/ui";
import { signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Your new start in four simple steps: a 5-minute assessment, a licensed provider, a licensed pharmacy, and your therapy plus your whole plan in one portal.",
};

const STEPS = [
  {
    n: "01",
    h: "Take the 5-minute assessment",
    p: "Answer a few questions about your goals and health history — right from your phone. No clinic, no waiting room. If a trainer or coach sent you, their code comes along automatically.",
    vignette: "Assessment · on your phone",
  },
  {
    n: "02",
    h: "Meet your provider",
    p: "A licensed provider from our medical group reviews your intake — by message or video — and orders at-home labs where it helps. They decide what, if anything, is right for you.",
    vignette: "Clinician review · online",
  },
  {
    n: "03",
    h: "Prepared by a licensed pharmacy",
    p: "If you're a fit, your therapy is prepared and quality-checked by our licensed U.S. pharmacy partners — then packed for you.",
    vignette: "Licensed U.S. pharmacy",
  },
  {
    n: "04",
    h: "Delivered, with ongoing care",
    p: "It ships discreetly to your door with tracking. From there it's messaging, dose adjustments, refills and re-testing — plus your whole plan in your portal.",
    vignette: "Delivered & tracked",
  },
];

const PORTAL = [
  { h: "Your therapy", p: "Your prescriptions, refills and provider — all in one place." },
  { h: "Training programs", p: "Built around your goals and updated as you progress." },
  { h: "Nutrition & food", p: "Simple meal guidance that fits your plan and your life." },
  { h: "Workouts", p: "Follow-along sessions you can log and track." },
  { h: "Goals & progress", p: "Set targets, track results, and see how far you've come." },
  { h: "Your trainer", p: "The coach who sent you stays connected to your journey." },
];

const FAQ = [
  {
    q: "How fast can I start?",
    a: "The assessment takes about five minutes, and a provider typically reviews it within one to two business days. Once you're approved, your therapy ships to your door.",
  },
  {
    q: "Do I need labs?",
    a: "Not always. Your provider may order simple at-home labs where they help guide or monitor your plan — and will tell you if they're needed before anything is prescribed.",
  },
  {
    q: "Is this legitimate and licensed?",
    a: "Yes. Every plan is prescribed by a licensed U.S. provider after a visit and prepared by licensed U.S. pharmacies. Prescription therapies ship only after clinician approval.",
  },
  {
    q: "My trainer referred me — what do they see?",
    a: "They see that you joined through their code and anything you choose to share about your progress. They never see your medical records or health information — that stays private between you and your care team.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line-200 glow">
        <Container className="py-16 sm:py-20">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] sm:text-6xl">
            Your new start, <span className="italic text-royal-600">in four simple steps.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-500">
            It&apos;s quick: a short assessment, a licensed provider, and your therapy delivered —
            plus the training, nutrition and goals that help you get the most from it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={signupUrl}>Take the 5-minute assessment</Button>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-success-600" aria-hidden />
              About 5 minutes to start
            </span>
          </div>
        </Container>
      </section>

      {/* Referral band */}
      <section className="ocean">
        <Container className="py-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ice-300">Sent by a trainer or coach?</span>
              <p className="mt-2 text-lg text-white">
                You&apos;re in the right place. Start the same way — their code travels with you, and
                nothing about your care changes. You just get the people in your corner, together.
              </p>
            </div>
            <Button href={signupUrl} variant="light">Start now</Button>
          </div>
        </Container>
      </section>

      {/* StepTimeline */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>The path</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              From your phone to your door.
            </h2>
            <p className="mt-4 max-w-sm text-slate-500">
              Every step is online, guided, and handled by licensed professionals — so starting
              is simple and staying on track is simpler.
            </p>
            <ImageSlot src="/images/how-it-works.jpg" alt="A person completing a telehealth visit easily from home" mood="The win" ratio="aspect-[4/5]" className="mt-8 max-w-sm" />
          </div>

          <ol className="relative space-y-6 before:absolute before:left-[1.35rem] before:top-4 before:bottom-4 before:w-px before:bg-line-200">
            {STEPS.map((s) => (
              <li key={s.n} className="relative flex gap-5">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-200 bg-white font-mono text-sm font-medium text-royal-600 shadow-xs">
                  {s.n}
                </div>
                <div className="flex-1 rounded-xl2 border border-line-200 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-bold text-navy-950">{s.h}</h3>
                  <p className="mt-2 text-sm text-slate-500">{s.p}</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-royal-600" aria-hidden />
                    <span className="font-mono text-[0.65rem] uppercase tracking-wide text-royal-700">{s.vignette}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* What you need */}
      <section className="bg-mist-50">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>What you need</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold">Ready in a few minutes.</h2>
              <p className="mt-4 max-w-md text-slate-500">
                No paperwork to print, no appointment to schedule around. If you have your phone,
                you have everything you need to start.
              </p>
            </div>
            <Reassurance
              items={[
                "About five minutes and your phone",
                "Your goals and a basic health history",
                "A valid government ID for your provider",
                "That's it — labs, if needed, are arranged for you",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Portal — FitClinicMD parity */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-24">
            <Eyebrow>Your portal</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Your whole plan, <span className="italic text-royal-600">in one place.</span>
            </h2>
            <p className="mt-4 max-w-md text-slate-500">
              New Start isn&apos;t just where you get your therapy. It&apos;s your home base — the
              same portal and tools, with your training, nutrition, workouts and goals right
              next to your care, and the trainer who sent you still in your corner.
            </p>
            <div className="mt-8">
              <Button href={signupUrl}>Start now</Button>
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
      </Section>

      {/* Lifestyle band — the point of making it easy */}
      <section className="border-t border-line-200 bg-white">
        <Container className="py-14 sm:py-20">
          <Eyebrow>The payoff</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            The easy part is starting. The good part is everything after.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <ImageSlot src="/images/journey-3.jpg" alt="Hitting a new stride" mood="Momentum" ratio="aspect-[4/3]" />
            <ImageSlot src="/images/snowboard.jpg" alt="Back to doing what you love" mood="All in" ratio="aspect-[4/3]" />
            <ImageSlot src="/images/lux-car.jpg" alt="Showing up as your best self" mood="Arrived" ratio="aspect-[4/3]" />
          </div>
        </Container>
      </section>

      {/* Privacy */}
      <section className="bg-mist-50">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-royal-600">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">Private by design.</h2>
              <p className="mt-3 text-slate-500">
                New Start MD is built on a HIPAA-ready architecture. Your health information stays
                between you and your care team — it&apos;s never used for advertising, and your
                trainer never sees your medical records.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-24">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Before you start.</h2>
            <p className="mt-4 max-w-sm text-slate-500">
              Still unsure? <Link href="/contact" className="font-semibold text-royal-600 hover:text-royal-700">Message our care team</Link>.
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
      </Section>

      {/* Closing CTA */}
      <section className="border-t border-line-200 glow">
        <Container className="py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold sm:text-5xl">
            Your best life <span className="italic text-royal-600">starts here.</span>
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button href={signupUrl}>Take the 5-minute assessment</Button>
            <Button href="/products" variant="ghost">Explore treatments</Button>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
          </div>
        </Container>
      </section>
    </>
  );
}
