import type { Metadata } from "next";
import { Container, Section, Eyebrow, Button } from "@/components/ui";
import { JsonLd } from "@/lib/schema";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about New Start MD — how it works, what we carry, states, and the partner program.",
};

const FAQ = [
  { q: "What is New Start MD?", a: "A telehealth clinic and storefront for physician-guided peptide, weight-loss, hormone and recovery therapy. You start a visit, a licensed provider decides what's appropriate, and prescribed therapy ships to your door." },
  { q: "Is this a prescription?", a: "Yes. Everything we carry is available only by prescription, after a consultation with a licensed provider. Nothing is sold over the counter, and the provider decides whether treatment is right for you." },
  { q: "Which states do you serve?", a: "We treat where our providers are licensed, and availability varies by state. Start a visit and we'll tell you right away whether we can treat you where you are." },
  { q: "What do you carry?", a: "The full line — weight loss (GLP-1), hormone therapy and TRT, recovery and performance peptides, and longevity and wellness compounds. Browse the products page to see the catalog." },
  { q: "How fast will I hear back?", a: "Typically within two business days of starting a visit." },
  { q: "I run a gym or train clients — can I refer people?", a: "Yes — that's the partner program. You get a branded code and a simple, compliant licensing arrangement, and we help activate your community with local events and giveaways. See the Partners page." },
  { q: "Are these FDA-approved medicines?", a: "Some are FDA-approved; many are compounded and are not FDA-approved for the uses described, and have not been tested in people for those uses. Your provider will explain what applies to your plan." },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <section className="border-b border-line-200 glow">
        <Container className="py-16">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Questions, answered.</h1>
        </Container>
      </section>

      <Section>
        <div className="divide-y divide-line border-y border-line-200">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-royal-600 transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm text-slate-500">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs text-slate-500">{MEDICAL_DISCLAIMER}</p>
        <div className="mt-8">
          <Button href="/start">Start now</Button>
        </div>
      </Section>

      <JsonLd data={faqSchema} />
    </>
  );
}
