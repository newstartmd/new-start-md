import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, ImageSlot, Disclaimer } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hormone Replacement Therapy | New Start MD",
  description:
    "Learn about provider-guided hormone replacement therapy and testosterone replacement therapy for adults 18+. Explore the telehealth starting process.",
  alternates: { canonical: "https://newstartmd.com/testosterone-replacement-therapy" },
};

const FAQ = [
  {
    q: "Is hormone replacement therapy right for everyone?",
    a: "No. Hormone therapy is not appropriate for every person or every situation. A licensed provider reviews your health history, symptoms, medications, goals, and appropriate testing before deciding whether a testosterone-focused pathway or another next step is appropriate.",
  },
  {
    q: "Can I start the process online?",
    a: "You can begin with New Start MD's online assessment. The assessment helps collect information for the starting process, but it is not a diagnosis and does not guarantee eligibility, treatment, or a prescription. A licensed provider decides the next step after reviewing the information that is available.",
  },
  {
    q: "What is the difference between HRT and TRT?",
    a: "Hormone replacement therapy is a broad category. Testosterone replacement therapy, or TRT, refers specifically to testosterone replacement. This page focuses on TRT for adults with clinically low testosterone, while recognizing that the right evaluation and care plan are individual and provider-led.",
  },
  {
    q: "Will I need testing?",
    a: "Your provider decides what information and testing are appropriate for your situation. Testing is considered alongside your history and symptoms rather than interpreted in isolation. Do not use an online page to interpret your own results, start a therapy, or change a prescribed plan.",
  },
  {
    q: "How do I ask a question before starting?",
    a: "Use the contact page to message the care team, or begin with the 5-minute assessment. The team and provider can explain the available path, what information is needed, and what next steps apply to your situation.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function TestosteroneReplacementTherapyPage() {
  return (
    <article className="pb-16">
      <section className="border-b border-line-200 glow">
        <Container className="py-12 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>Hormone therapy</Eyebrow>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] sm:text-6xl">
                Hormone Replacement Therapy for Adults
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-medium text-navy-950">
                Understand your options for hormone replacement therapy.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
                New Start MD provides educational information about testosterone replacement therapy (TRT) and a telehealth starting path for adults 18 and older. A licensed provider reviews your health history and any appropriate testing before deciding whether treatment is appropriate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/start">Take the 5-minute assessment</Button>
                <Button href="/contact" variant="ghost">Message our care team</Button>
              </div>
            </div>
            <ImageSlot
              src="/images/products/vial-blank-brand.jpg"
              alt="Testosterone therapy vial"
              ratio="aspect-[4/3]"
            />
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Start with understanding</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">What hormone replacement therapy means</h2>
            <p className="mt-5 text-slate-500">
              Hormone replacement therapy is a broad term for care that may address a clinically identified hormone deficiency or imbalance. On this page, the focus is testosterone replacement therapy for adults with clinically low testosterone. TRT is not a general wellness shortcut, and an online description of symptoms is not enough to determine whether it is appropriate.
            </p>
            <p className="mt-4 text-slate-500">
              A licensed provider reviews the full picture, including your health history, current medications, goals, symptoms, and any testing that is appropriate for your situation. The provider also considers whether another explanation or a different next step should be explored. A single number, symptom, or checklist should not be used to make a personal treatment decision.
            </p>
            <p className="mt-4 text-slate-500">
              This page is educational, not a diagnosis or a personal treatment recommendation. It is designed to help you understand the language, prepare useful questions, and see what a provider-guided telehealth pathway can involve.
            </p>
          </div>
          <ImageSlot
            src="/images/how-it-works.jpg"
            alt="Adult completing a telehealth visit at home"
            ratio="aspect-[4/3]"
          />
        </div>
      </Section>

      <section className="bg-mist-50">
        <Container className="py-16 sm:py-24">
          <Eyebrow>Prepare for a useful conversation</Eyebrow>
          <div className="mt-4 max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">What to bring to a provider visit</h2>
            <p className="mt-5 text-slate-500">
              A thoughtful visit starts with an accurate picture of your health. Be ready to describe the concerns that led you to seek information, when you first noticed them, and how they affect your day-to-day life. Share your current medications, relevant health history, and any questions you have about testing or follow-up. You do not need to diagnose yourself before speaking with a provider.
            </p>
            <p className="mt-4 text-slate-500">
              It can also help to write down what you want to understand: whether hormone replacement therapy is relevant to your situation, what information the provider needs, what alternatives may be considered, and how questions are handled after a visit. The provider, not this page, decides what evaluation and care are appropriate.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Eyebrow>A provider-guided path</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">What people often want to understand</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <InfoCard title="What is being evaluated?">
            Your provider considers the concerns you describe, your health history, medications, goals, symptoms, and appropriate testing. The conversation is broader than a single lab result or an online symptom list because context matters when deciding what to do next.
          </InfoCard>
          <InfoCard title="Is TRT the same as HRT?">
            TRT is one form of hormone replacement therapy. HRT can refer to a broader category of hormone-related care, while this page uses the terms together because it focuses on testosterone replacement for adults with clinically low testosterone.
          </InfoCard>
          <InfoCard title="Who makes the decision?">
            A licensed provider decides whether a prescribed therapy is appropriate for you. If a treatment plan is recommended, the provider explains the plan and the information you need to follow it. A page, assessment, or message cannot guarantee a prescription.
          </InfoCard>
          <InfoCard title="What happens after a visit?">
            If treatment is prescribed, your provider explains the next steps and any follow-up, messaging, or testing that applies to your plan. Timelines and care instructions vary by person, so use the available care path for questions rather than changing a plan on your own.
          </InfoCard>
        </div>
      </Section>

      <section className="border-y border-line-200 bg-white">
        <Container className="py-16 sm:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <ImageSlot
              src="/images/journey-3.jpg"
              alt="Person hitting a new stride outdoors"
              ratio="aspect-[4/3]"
            />
            <div>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Four steps to start</h2>
              <ol className="mt-8 space-y-6">
                <Step title="Take the 5-minute assessment.">Answer questions about your goals, health history, and reason for seeking information. This starts the information-gathering process; it does not guarantee eligibility or a prescription.</Step>
                <Step title="Meet your provider.">A licensed provider reviews the information you share, asks follow-up questions when needed, and decides what is appropriate for your situation.</Step>
                <Step title="Complete any appropriate testing.">Your provider explains whether testing or additional information is needed and how it fits into the evaluation. Do not interpret results or change medication based only on an online page.</Step>
                <Step title="Continue with the plan your provider explains.">If treatment is prescribed, follow the provider&apos;s instructions and use the available care and messaging path for questions, follow-up, or clarification.</Step>
              </ol>
              <p className="mt-6 text-sm text-slate-500">Timelines and next steps vary by person and plan. Eligibility and treatment decisions are made by the provider, and a consultation is the place to discuss personal questions.</p>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Eyebrow>Common questions</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">Questions about hormone replacement therapy</h2>
        <div className="mt-8 divide-y divide-line-200 rounded-xl2 border border-line-200 bg-white">
          {FAQ.map((item, index) => (
            <details key={item.q} open={index === 0} className="group p-5 sm:p-6">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-navy-950 marker:hidden">{item.q}</summary>
              <p className="mt-3 max-w-3xl text-slate-500">{index === 4 ? <>Use the <Link className="text-royal-600 underline" href="/contact">contact page</Link> to message the care team, or begin with the <Link className="text-royal-600 underline" href="/start">5-minute assessment</Link>. The team and provider can explain the available path, what information is needed, and what next steps apply to your situation.</> : item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-mist-50">
        <Container className="py-12 sm:py-16">
          <Eyebrow>Important information</Eyebrow>
          <div className="mt-5 max-w-3xl rounded-xl2 border border-line-200 bg-white p-6 sm:p-8">
            <Disclaimer>
              Products are available only by prescription after a consultation with a licensed provider, who decides whether treatment is appropriate. Many compounds described on this site are not FDA-approved medicines and have not been tested in people for the uses described. Information on this page is educational and is not medical advice.
            </Disclaimer>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">Do not start, stop, or change a prescription based on this page. Discuss your health history, medications, symptoms, and questions with your provider.</p>
          </div>
        </Container>
      </section>

      <section className="ocean">
        <Container className="py-14 text-white sm:py-20">
          <Eyebrow>Ready to learn more?</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Start with your questions.</h2>
          <p className="mt-4 max-w-2xl text-ice-100">Take the online assessment or message the New Start MD care team. A licensed provider decides whether a treatment pathway is appropriate for you.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/start" variant="light">Take the 5-minute assessment</Button>
            <Button href="/contact" className="bg-royal-600 text-white hover:bg-royal-700">Message our care team</Button>
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema([
        { name: "Treatments", path: "/products" },
        { name: "Hormone therapy", path: "/products?goal=hormone" },
        { name: "Hormone Replacement Therapy", path: "/testosterone-replacement-therapy" },
      ])} />
      <JsonLd data={faqSchema} />
    </article>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl2 border border-line-200 bg-mist-50 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">{children}</p>
    </div>
  );
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="relative border-l-2 border-royal-200 pl-5">
      <h3 className="text-lg font-semibold text-navy-950">{title}</h3>
      <p className="mt-2 text-slate-500">{children}</p>
    </li>
  );
}
