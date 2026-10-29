import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, Disclaimer } from "@/components/ui";
import { ProgressRing, BiomarkerRangeBar } from "@/components/graphics";
import { signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Your dashboard",
  description:
    "Everything you're building in one place: your protocol, diet, training, wearable data and your coach — with ready-made and AI-assisted programs. The New Start MD member experience.",
};

// The modular system — mirrors the /start assessment functions. The compound is
// the core; diet, training, tracking and coaching are what you build around it.
const MODULES: {
  title: string;
  core?: boolean;
  blurb: string;
  points: string[];
  icon: "shield" | "flame" | "muscle" | "bolt" | "heart";
}[] = [
  {
    title: "Your protocol",
    core: true,
    icon: "shield",
    blurb: "The prescribed therapy your provider set, tracked to the day.",
    points: ["Your current compound and dose", "Next shipment and refills", "Adjustments from your provider"],
  },
  {
    title: "Diet & nutrition",
    icon: "flame",
    blurb: "A plan shaped to your food, built for your goal.",
    points: ["Meal plans that respect your likes and dislikes", "Generated with AI, refined by your coach", "Swap anything, any time"],
  },
  {
    title: "Training",
    icon: "muscle",
    blurb: "Workouts matched to your goal, space and schedule.",
    points: ["Programs from your own trainer", "Or AI-built in minutes", "Scales as you get stronger"],
  },
  {
    title: "Wearable tracking",
    icon: "bolt",
    blurb: "Connect what you already wear. Progress shows up on its own.",
    points: ["Steps, sleep, heart rate and recovery", "No manual logging", "See it next to your plan"],
  },
  {
    title: "Coaching",
    icon: "heart",
    blurb: "A human in your corner, checking in and adjusting.",
    points: ["Message your coach where your plan lives", "Their content, their encouragement", "Milestones that keep you showing up"],
  },
];

const DEVICES = ["Apple Watch", "Apple Health", "Fitbit", "Garmin", "Oura", "Whoop", "Google Fit", "Samsung Health", "Strava"];

function Icon({ k }: { k: "shield" | "flame" | "muscle" | "bolt" | "heart" }) {
  const p = {
    shield: "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
    flame: "M12 3c1 3-2 4-2 7a2 2 0 0 0 4 0c0-1 0-1 .5-2 1 1.5 2 3 2 5a6 6 0 0 1-12 0c0-4 4-6 5-10z",
    muscle: "M4 13c3 0 4-2 6-2s3 2 3 4-2 3-5 3-5-2-5-4 .5-1 1-1zM13 6c1-2 4-3 6-1s1 5-2 6",
    bolt: "M13 3 4 14h6l-1 7 9-11h-6l1-7z",
    heart: "M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9z",
  }[k];
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d={p} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <>
      {/* Hero */}
      <section className="glow">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow>Your dashboard</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium leading-[1.02] sm:text-6xl">
              Everything you&apos;re building, <span className="italic text-royal-600">in one place.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-500">
              Your protocol, your diet, your training, the data from your watch, and your coach — all
              living together, all moving toward the same goal. This is where your new start actually
              happens.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={signupUrl}>Build your plan</Button>
              <Link
                href="/how-it-works"
                className="inline-flex items-center rounded-full border border-line-200 px-5 py-2.5 text-sm font-medium text-navy-950 transition hover:border-royal-600 hover:text-royal-600"
              >
                How it works
              </Link>
            </div>
          </div>

          {/* Sample dashboard panel */}
          <div className="rounded-xl2 border border-line-200 bg-white p-6 shadow-lift sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">This week</p>
                <p className="mt-1 text-lg font-semibold text-navy-950">You&apos;re on track.</p>
              </div>
              <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-royal-700">
                Sample
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <ProgressRing value={82} label="Protocol adherence" />
              <ProgressRing value={74} label="Energy score" />
              <ProgressRing value={65} label="Goal progress" />
            </div>
            <div className="mt-6 border-t border-line-200 pt-5">
              <BiomarkerRangeBar
                name="Free Testosterone"
                unit="ng/dL"
                value={18}
                min={5}
                max={25}
                optimalMin={15}
                optimalMax={22}
                status="in"
              />
            </div>
            <div className="mt-5 flex items-center justify-between rounded-lg bg-mist-50 px-4 py-3 text-sm">
              <span className="text-slate-500">Next shipment</span>
              <span className="font-medium text-navy-950">Ships in 6 days</span>
            </div>
            <p className="mt-4 text-[0.7rem] leading-relaxed text-slate-500">
              Illustrative sample. Your real dashboard reflects your own plan and labs. Individual
              results vary.
            </p>
          </div>
        </Container>
      </section>

      {/* The modules */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>What&apos;s inside</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            One plan. <span className="italic text-royal-600">Every part of it.</span>
          </h2>
          <p className="mt-4 text-slate-500">
            Start with the prescribed therapy, then build the rest around it — only the parts you want.
            Everything you add lives in the same place, next to your care.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <div key={m.title} className="flex flex-col rounded-xl2 border border-line-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-royal-600">
                  <Icon k={m.icon} />
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-navy-950">{m.title}</h3>
                  {m.core ? (
                    <span className="rounded-full bg-royal-600/10 px-2 py-0.5 text-[0.55rem] font-medium uppercase tracking-wide text-royal-600">
                      Core
                    </span>
                  ) : null}
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-500">{m.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {m.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 shrink-0 text-royal-600">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* AI-assisted programs */}
      <section className="ocean">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ice-300">Programs, on demand</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                A full plan, <span className="italic text-ice-300">built in minutes.</span>
              </h2>
              <p className="mt-4 max-w-xl text-ice-300">
                Tell us your goal, your schedule and what you have to work with. Your dashboard builds
                a starting diet and training plan with AI in minutes — then your coach makes it yours.
                You are never staring at a blank page.
              </p>
              <div className="mt-7">
                <Button href={signupUrl} variant="light">Build your plan</Button>
              </div>
            </div>
            <div className="grid gap-3">
              {[
                { h: "Pick your goal", p: "Lose weight, build, recover, age well, feel sharp." },
                { h: "Generate a draft", p: "A diet and training plan shaped to you, in minutes." },
                { h: "Make it yours", p: "Your coach refines it; you swap anything you want." },
              ].map((s, i) => (
                <div key={s.h} className="flex items-start gap-4 rounded-xl2 border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <span className="font-mono text-lg font-medium text-gold-300">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-white">{s.h}</p>
                    <p className="mt-0.5 text-sm text-ice-300">{s.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Device sync */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Connect your world</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Wear what you already wear.
          </h2>
          <p className="mt-4 text-slate-500">
            Link your watch or ring and your activity, sleep and recovery flow in automatically —
            right next to your plan, with nothing to log by hand.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {DEVICES.map((d) => (
            <span
              key={d}
              className="inline-flex items-center gap-2 rounded-full border border-line-200 bg-white px-4 py-2 text-sm font-medium text-navy-950"
            >
              <span className="h-2 w-2 rounded-full bg-royal-600" aria-hidden />
              {d}
            </span>
          ))}
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-royal-700">
            + more as you connect them
          </span>
        </div>
      </Section>

      {/* Coach stays in it */}
      <section className="border-y border-line-200 bg-mist-50">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Your coach, still in your corner</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                You don&apos;t get handed off.
              </h2>
              <p className="mt-4 max-w-md text-slate-500">
                If a trainer, gym or coach sent you, they stay connected right here — pushing your
                workouts and diets, dropping their content, and keeping you moving while licensed
                providers handle the medicine.
              </p>
              <div className="mt-7">
                <Link href="/partners" className="inline-flex items-center gap-1 text-sm font-semibold text-royal-600 hover:text-royal-700">
                  For trainers &amp; partners <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { h: "Messages", p: "Check in without leaving your plan." },
                { h: "Their programs", p: "Your coach's workouts and diets, in your dashboard." },
                { h: "Their content", p: "Videos and podcasts that keep you learning." },
                { h: "Your wins", p: "Celebrate milestones, share them if you choose." },
              ].map((c) => (
                <div key={c.h} className="rounded-xl2 border border-line-200 bg-white p-5">
                  <h3 className="text-base font-bold text-navy-950">{c.h}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">{c.p}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="ocean">
        <Container className="py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
            Your whole plan, <span className="italic text-ice-300">in your hand.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ice-300">
            Start with the 5-minute assessment. A licensed provider decides what&apos;s right, and your
            dashboard is ready the day you begin.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={signupUrl} variant="light">Build your plan</Button>
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
