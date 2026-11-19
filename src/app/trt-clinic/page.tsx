import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, ImageSlot, Disclaimer } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Testosterone Replacement Therapy Clinics | New Start MD",
  description:
    "Looking for a TRT clinic? Learn how New Start MD's telehealth evaluation works for adults 18+ and what a provider reviews.",
  alternates: { canonical: "https://newstartmd.com/trt-clinic" },
};

const FAQ = [
  {
    q: "Is testosterone replacement therapy right for everyone?",
    a: "No. Hormone therapy is not appropriate for every person or every situation. A licensed provider reviews your health history, symptoms, medications, goals, and appropriate testing before deciding whether a testosterone-focused pathway or another next step is appropriate.",
  },
  {
    q: "Can I start the process online?",
    a: "You can begin with New Start MD's online assessment. The assessment helps collect information for the starting process, but it is not a diagnosis and does not guarantee eligibility, treatment, or a prescription. A licensed provider decides the next step after reviewing the information available.",
  },
  {
    q: "Will I need testing?",
    a: "Your provider decides what information and testing are appropriate for your situation. Testing is considered alongside your history and symptoms rather than interpreted in isolation. Do not use an online page to interpret your own results, start a therapy, or change a prescribed plan.",
  },
  {
    q: "How can I ask a question before starting?",
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

export default function TrtClinicPage() {
  return (
    <article className="pb-16">
      <section className="border-b border-line-200 glow">
        <Container className="py-12 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>TRT clinic online</Eyebrow>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] sm:text-6xl">
                What to Look for in a Testosterone Replacement Therapy Clinic
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-medium text-navy-950">
                Start with a provider-led evaluation, not a promise.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
                If you are comparing testosterone replacement therapy clinics, look for a process that begins with your health history, goals, medications, symptoms, and any testing a licensed provider considers appropriate. New Start MD offers a telehealth starting path for adults 18 and older. A provider reviews the information available and decides whether a testosterone-focused pathway or another next step is appropriate for your situation.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
                This page is educational. It is not a diagnosis, a personal treatment recommendation, or a guarantee that you qualify for TRT.
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
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A TRT clinic should start with an evaluation</h2>
            <p className="mt-5 text-slate-500">
              Testosterone replacement therapy is not a one-size-fits-all decision. A symptom, an online checklist, or one lab result is not enough to determine whether treatment is appropriate. A useful evaluation considers the broader picture and makes room for questions about your health and goals.
            </p>
            <p className="mt-4 text-slate-500">
              At New Start MD, the telehealth starting path is designed to collect information for a licensed provider to review. The provider considers your history, current medications, concerns, goals, symptoms, and any testing that is appropriate for your situation. Another explanation or a different next step may be considered.
            </p>
            <p className="mt-4 text-slate-500">
              For a broader explanation of hormone replacement therapy and the provider-led pathway, read the <Link className="text-royal-600 underline" href="/testosterone-replacement-therapy">hormone replacement therapy overview</Link>.
            </p>
            <p className="mt-4 text-slate-500">
              This page does not diagnose low testosterone or tell you whether TRT is right for you. That decision belongs to a licensed provider after an appropriate evaluation.
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
          <Eyebrow>A complete conversation</Eyebrow>
          <div className="mt-4 max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">What a provider may review</h2>
            <p className="mt-5 text-slate-500">
              A provider-led evaluation looks beyond a single search result or symptom list. The details below are areas to discuss, not a self-screening checklist or eligibility rule.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <InfoCard title="Your concerns and goals">Explain what led you to seek information, when you first noticed it, and what you hope to understand. Clear questions help make the conversation more useful.</InfoCard>
            <InfoCard title="Your health history and medications">Share relevant health history and current medications. This context helps a provider consider your situation rather than treating an isolated symptom or number.</InfoCard>
            <InfoCard title="Symptoms and context">Describe the concerns you have and how they affect your day-to-day life. You do not need to diagnose yourself before speaking with a provider.</InfoCard>
            <InfoCard title="Appropriate testing">Your provider decides whether testing or additional information is appropriate. Testing is considered alongside your history and symptoms, not interpreted in isolation.</InfoCard>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/start">Take the 5-minute assessment</Button>
            <Button href="/contact" variant="ghost">Message our care team</Button>
          </div>
        </Container>
      </section>

      <section className="border-y border-line-200 bg-white">
        <Container className="py-16 sm:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <ImageSlot
              src="/images/journey-3.jpg"
              alt="Person hitting a new stride outdoors"
              ratio="aspect-[4/3]"
            />
            <div>
              <Eyebrow>How the telehealth pathway works</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">How New Start MD&apos;s telehealth pathway works</h2>
              <ol className="mt-8 space-y-6">
                <Step title="Take the 5-minute assessment.">Answer questions about your goals, health history, and reason for seeking information. This starts the information-gathering process; it does not guarantee eligibility, treatment, or a prescription.</Step>
                <Step title="Meet your provider.">A licensed provider reviews the information you share and asks follow-up questions when needed. The provider decides what is appropriate for your situation.</Step>
                <Step title="Complete any appropriate testing.">Your provider explains whether testing or additional information is needed and how it fits into the evaluation. Do not interpret results or change medication based only on an online page.</Step>
                <Step title="Continue with the plan your provider explains.">If treatment is prescribed, follow the provider&apos;s instructions and use the available care and messaging path for questions, follow-up, or clarification.</Step>
              </ol>
              <p className="mt-6 text-sm text-slate-500">Timelines and next steps vary by person and plan. Eligibility and treatment decisions are made by the provider.</p>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Eyebrow>Common questions</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">Questions to ask before starting TRT</h2>
        <div className="mt-8 divide-y divide-line-200 rounded-xl2 border border-line-200 bg-white">
          {FAQ.map((item, index) => (
            <details key={item.q} open={index === 0} className="group p-5 sm:p-6">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-navy-950 marker:hidden">{item.q}</summary>
              <p className="mt-3 max-w-3xl text-slate-500">
                {index === 3 ? <>Use the <Link className="text-royal-600 underline" href="/contact">contact page to message the care team</Link>, or begin with the <Link className="text-royal-600 underline" href="/start">5-minute assessment</Link>. The team and provider can explain the available path, what information is needed, and what next steps apply to your situation.</> : item.a}
              </p>
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
        { name: "Testosterone Replacement Therapy Clinics", path: "/trt-clinic" },
      ])} />
      <JsonLd data={faqSchema} />
    </article>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl2 border border-line-200 bg-white p-6">
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
