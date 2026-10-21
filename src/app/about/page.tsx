import type { Metadata } from "next";
import { Container, Section, Eyebrow, Button, ImageSlot } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "New Start MD is physician-guided peptide, weight-loss, hormone and recovery care — built for people who are done waiting to feel like themselves.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line glow">
        <Container className="py-16">
          <Eyebrow>About {SITE.name}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Medicine that meets you where you&apos;re <span className="text-volt">going.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-bone-soft">
            {SITE.name} exists for the person who&apos;s tired of waiting — for the
            appointment, for the energy, for the body they know is in there. We pair
            licensed providers with a modern pharmacy and a full line of therapies, and we
            deliver. No waiting room, no runaround.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ImageSlot mood="Alive" ratio="aspect-[5/4]" />
          <div className="space-y-5 text-bone-soft">
            <h2 className="text-2xl font-semibold text-bone">What we believe</h2>
            <p>
              Feeling strong, sharp and in control isn&apos;t vanity — it&apos;s the
              foundation everything else is built on. The science to support it has moved
              fast. Access hasn&apos;t kept up. We&apos;re closing that gap responsibly:
              real providers making real decisions, never a vending machine.
            </p>
            <p>
              We work with the people who already move the needle in their communities —
              gyms, trainers, coaches and creators — because the best start usually comes
              from someone you already trust.
            </p>
            <div className="pt-2">
              <Button href="/partners" variant="ghost">
                Partner with us →
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
