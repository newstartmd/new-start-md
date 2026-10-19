import type { Metadata } from "next";
import { Container, Section, Eyebrow, Button, ImageSlot, Disclaimer } from "@/components/ui";
import { signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER, TELEHEALTH_NOTE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How New Start MD works: tell us your goal, meet a licensed provider by telehealth, and get prescribed therapy delivered to your door.",
};

const STEPS = [
  { n: "01", h: "Tell us your goal", p: "Start a quick intake — weight, hormones, recovery, longevity, or a mix. It takes a few minutes and there's no waiting room." },
  { n: "02", h: "Meet your provider", p: "A licensed provider reviews your intake and history, talks it through, and decides what (if anything) is appropriate for you." },
  { n: "03", h: "We prescribe & ship", p: "If you're a fit, your therapy is prepared by a compounding pharmacy and delivered to your door — discreetly, with clear guidance." },
  { n: "04", h: "We stay with you", p: "Check-ins, adjustments, and refills as you go. This isn't a one-and-done — it's a plan you can keep." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line glow">
        <Container className="py-16">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            From &ldquo;someday&rdquo; to <span className="text-volt">shipped.</span>
          </h1>
          <p className="mt-5 max-w-xl text-bone-soft">
            New Start MD is telehealth done properly: real licensed providers, real
            medicine, delivered. Here&apos;s the whole path.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ol className="space-y-5">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-5 rounded-xl2 border border-line bg-surface p-6">
                <div className="font-display text-2xl font-extrabold text-volt">{s.n}</div>
                <div>
                  <h2 className="text-lg font-bold">{s.h}</h2>
                  <p className="mt-2 text-sm text-muted">{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="space-y-4">
            <ImageSlot mood="The win" ratio="aspect-[4/5]" />
            <div className="rounded-xl2 border border-line bg-surface p-5">
              <p className="text-xs text-muted">{TELEHEALTH_NOTE}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={signupUrl}>Start now</Button>
          <Button href="/products" variant="ghost">
            Browse products
          </Button>
        </div>

        <div className="mt-12 max-w-3xl">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Section>
    </>
  );
}
