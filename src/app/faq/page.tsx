import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, Disclaimer } from "@/components/ui";
import { JsonLd } from "@/lib/schema";
import { FAQ_ITEMS } from "@/lib/faq";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";
import { signupUrl } from "@/lib/site";
import FaqBrowser from "./FaqBrowser";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about New Start MD — getting started, treatments, clinicians, pharmacy and shipping, billing, and privacy.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-line-200 glow">
        <Container className="py-16">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Questions, <span className="italic text-royal-600">answered.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-500">
            Everything about getting started, your care, and how it all works. Search it, or
            browse by topic.
          </p>
        </Container>
      </section>

      <Section>
        <FaqBrowser items={FAQ_ITEMS} />

        {/* Still have questions */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl2 bg-mist-50 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Still have questions?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our care team is happy to help — no pressure, no cost to ask.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href="/contact">Message our care team</Button>
            <Button href={signupUrl} variant="ghost">
              Take the assessment
            </Button>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Section>

      <JsonLd data={faqSchema} />
    </>
  );
}
