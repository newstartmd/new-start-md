import Link from "next/link";
import { Container, Section, Eyebrow, Button, Stat, ImageSlot, Disclaimer, PriceBand, PriceInline } from "@/components/ui";
import { GOALS } from "@/lib/products";
import { signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden glow">
        <div className="absolute inset-0 grid-texture opacity-50" aria-hidden />
        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow>Peptides · Weight loss · Hormones · Recovery</Eyebrow>
              <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] sm:text-7xl">
                Get this
                <br />
                <span className="text-volt">life.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-bone-soft">
                Leaner, stronger, sharper, back in the game. Physician-guided therapy —
                prescribed by licensed providers and delivered to your door.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={signupUrl}>Start now</Button>
                <Button href="/products" variant="ghost">
                  Browse products
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted">
                Programs <PriceInline /> — your exact plan is set with your provider.
              </p>
              <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
                <Stat value="40+" label="Therapies & blends" />
                <Stat value="100%" label="Physician-guided" />
                <Stat value="48hr" label="Typical reply" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ImageSlot mood="Strength" className="mt-8" />
              <ImageSlot mood="Nightlife" ratio="aspect-[4/5]" />
              <ImageSlot mood="Confidence" ratio="aspect-square" className="col-span-2" />
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- Goals */}
      <Section id="goals">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Shop by goal</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">What are you here to change?</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-volt hover:text-volt-deep">
            See all products →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GOALS.map((goal) => (
            <Link
              key={goal.slug}
              href={`/products?goal=${goal.slug}`}
              className="group relative overflow-hidden rounded-xl2 border border-line bg-surface p-6 transition hover:border-volt"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-volt/10 blur-2xl transition group-hover:bg-volt/20" aria-hidden />
              <h3 className="text-xl font-bold text-bone">{goal.label}</h3>
              <p className="mt-2 text-sm text-muted">{goal.tagline}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-volt opacity-0 transition group-hover:opacity-100">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------- Partner */}
      <section className="border-y border-line bg-surface">
        <Container className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>For gyms, trainers & affiliates</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Your people trust you. <span className="text-ember">Send them further.</span>
              </h2>
              <p className="mt-5 max-w-lg text-bone-soft">
                Partner with New Start MD and give your members, clients and followers a
                real path to the body and energy they train for — with a discount that is
                yours to offer. You build the trust; we handle the medicine, licensing and
                delivery.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-bone-soft">
                {[
                  "A branded code and link — set up in minutes, tracked automatically.",
                  "A standing discount for everyone you send.",
                  "Flat brand-and-content licensing — simple, transparent, compliant.",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-volt" aria-hidden />
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
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Three steps to a new start.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", h: "Tell us your goal", p: "A quick intake — weight, hormones, recovery, or all three. No clinic waiting room." },
            { n: "02", h: "Meet your provider", p: "A licensed provider reviews everything and builds a plan that fits you." },
            { n: "03", h: "Delivered to your door", p: "Your therapy ships discreetly, with guidance every step of the way." },
          ].map((step) => (
            <div key={step.n} className="rounded-xl2 border border-line bg-surface p-7">
              <div className="font-display text-3xl font-extrabold text-volt">{step.n}</div>
              <h3 className="mt-4 text-lg font-bold">{step.h}</h3>
              <p className="mt-2 text-sm text-muted">{step.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href={signupUrl}>Start now</Button>
        </div>
      </Section>

      {/* --------------------------------------------- Pricing & what's included */}
      <section className="border-t border-line bg-surface">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Pricing &amp; what&apos;s included</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                One plan, everything handled.
              </h2>
              <p className="mt-4 max-w-md text-bone-soft">
                No membership games, no surprise fees. Every program includes the care and
                the medicine — and your provider helps you choose what&apos;s right for you.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-bone-soft">
                {[
                  "A visit with a licensed provider",
                  "A plan personalized to your goal",
                  "Your therapy delivered to your door",
                  "Ongoing check-ins and dose adjustments",
                  "Message your care team whenever you need",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-volt" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <PriceBand />
              <div className="rounded-xl2 border border-line bg-surface p-6">
                <h3 className="text-base font-bold">Not sure what you need?</h3>
                <p className="mt-2 text-sm text-muted">
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

      {/* -------------------------------------------------------------- Closing */}
      <section className="border-t border-line glow">
        <Container className="py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold sm:text-5xl">
            This is the version of you that <span className="text-volt">shows up.</span>
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
