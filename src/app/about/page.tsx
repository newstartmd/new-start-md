import type { Metadata } from "next";
import { Container, Section, Eyebrow, Button, ImageSlot, Disclaimer, Reassurance } from "@/components/ui";
import { STANDARDS } from "@/lib/home";
import { SITE, signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "About",
  description:
    "New Start MD is physician-led, lab-informed care — weight loss, hormones, recovery and longevity — built for people who are done waiting to feel like themselves.",
};

const VALUES = [
  { h: "Precision", p: "Plans built on your biology and your labs — not averages or guesswork." },
  { h: "Integrity", p: "Real providers making real decisions. We tell you what you need, not what sells." },
  { h: "Concierge care", p: "Fast, human, and with you the whole way — not a one-and-done script." },
  { h: "Evidence", p: "We say what therapies are used for, honestly, and never promise what we can't." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line-200 glow">
        <Container className="py-16 sm:py-20">
          <Eyebrow>About {SITE.name}</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] sm:text-6xl">
            Physician-led. <span className="italic text-royal-600">Life-driven.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-500">
            {SITE.name} exists for the person who&apos;s tired of waiting — for the appointment,
            for the energy, for the body they know is in there. We pair licensed providers with
            licensed pharmacies and a full line of therapies, and we deliver. No waiting room, no
            runaround.
          </p>
        </Container>
      </section>

      {/* What we believe */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ImageSlot src="/images/about.jpg" alt="A vibrant, healthy person living well" mood="Alive" ratio="aspect-[5/4]" />
          <div className="space-y-5 text-slate-500">
            <Eyebrow>What we believe</Eyebrow>
            <p>
              Feeling strong, sharp and in control isn&apos;t vanity — it&apos;s the foundation
              everything else is built on. The science to support it has moved fast. Access
              hasn&apos;t kept up. We&apos;re closing that gap responsibly: real providers making
              real decisions, never a vending machine.
            </p>
            <p>
              We work with the people who already move the needle in their communities — gyms,
              trainers, coaches and creators — because the best start usually comes from someone
              you already trust.
            </p>
            <div className="pt-2">
              <Button href="/partners" variant="ghost">Partner with us →</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <section className="bg-mist-50">
        <Container className="py-14 sm:py-20">
          <Eyebrow>What drives us</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold">Four things we won&apos;t compromise.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.h} className="rounded-xl2 border border-line-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-royal-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-950">{v.h}</h3>
                <p className="mt-2 text-sm text-slate-500">{v.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Care team standards (no fabricated physicians) */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>The care team</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold">
            Designed by physicians, <span className="italic text-royal-600">built on standards.</span>
          </h2>
          <p className="mt-4 text-slate-500">
            Your plan is prescribed and monitored by a licensed U.S. clinician. Here&apos;s what
            that means in practice.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STANDARDS.map((s) => (
            <div key={s.title} className="rounded-xl2 border border-line-200 bg-white p-6">
              <h3 className="text-base font-bold text-navy-950">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">
          You&apos;ll see your provider and their credentials in your patient portal. Clinician
          availability varies by state.
        </p>
      </Section>

      {/* How we vet partners */}
      <section className="bg-mist-50">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Our partners</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold">How we choose who touches your care.</h2>
              <p className="mt-4 max-w-md text-slate-500">
                We work with an established provider group and licensed U.S. pharmacies — and we
                hold them to the same standard we&apos;d want for our own families.
              </p>
            </div>
            <Reassurance
              items={[
                "Licensed U.S. providers, credentialed and licensed by state",
                "Licensed U.S. pharmacies with batch quality checks (COAs)",
                "Cold-chain handling for therapies that need it",
                "A HIPAA-ready architecture — your data stays protected",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Lifestyle band */}
      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <ImageSlot
              src="/images/lifestyle-band.jpg"
              alt="People living full, active lives outdoors"
              mood="Why we do this"
              ratio="aspect-[16/10]"
            />
            <div>
              <Eyebrow>Why it matters</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                We measure success in <span className="italic text-royal-600">lives lived</span>, not vials shipped.
              </h2>
              <p className="mt-4 max-w-md text-slate-500">
                The medicine is the means. The point is the morning you wake up ready, the
                afternoon you keep up, and the evening you still have something left.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="ocean">
        <Container className="py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
            Your new start <span className="italic text-ice-300">begins here.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
