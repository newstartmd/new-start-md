import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, ImageSlot, Disclaimer } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Online Testosterone Replacement Therapy",
  description:
    "Learn about online testosterone replacement therapy for adults 18+, including provider-guided evaluation, telehealth steps, and questions to ask.",
  alternates: { canonical: "https://newstartmd.com/online-testosterone-replacement-therapy" },
};

const FAQ = [
  {
    q: "Can I start the process online?",
    a: "You can begin with New Start MD's online assessment. The assessment helps collect information for the starting process, but it is not a diagnosis and does not guarantee eligibility, treatment, or a prescription. A licensed provider decides the next step after reviewing the information that is available.",
  },
  {
    q: "Is online testosterone replacement therapy right for everyone?",
    a: "No. Hormone therapy is not appropriate for every person or every situation. A licensed provider reviews your health history, symptoms, medications, goals, and appropriate testing before deciding whether a testosterone-focused pathway or another next step is appropriate.",
  },
  {
    q: "Will I need testing?",
    a: "Your provider decides what information and testing are appropriate for your situation. Testing is considered alongside your history and symptoms rather than interpreted in isolation.",
  },
  {
    q: "Is TRT the same as hormone replacement therapy?",
    a: "TRT refers specifically to testosterone replacement, while hormone replacement therapy can describe a broader category of hormone-related care. The right evaluation and care plan are individual and provider-led.",
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

export default function OnlineTestosteroneReplacementTherapyPage() {
  return (
    <article className="pb-16">
      <section className="border-b border-line-200 glow">
        <Container className="py-12 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>Online hormone therapy</Eyebrow>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] sm:text-6xl">
                Online Testosterone Replacement Therapy for Adults
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-medium text-navy-950">
                Understand the online path before you start.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
                New Start MD provides educational information about testosterone replacement therapy (TRT) and an online starting path for adults 18 and older. A licensed provider reviews your health history, symptoms, goals, medications, and any appropriate testing before deciding whether treatment is appropriate for your situation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/start">Take the 5-minute assessment</Button>
                <Button href="/contact" variant="ghost">Message our care team</Button>
              </div>
            </div>
            <ImageSlot
              src="/images/chapter-hormone.jpg"
              alt="Adult considering a provider-guided hormone therapy path"
              ratio="aspect-[4/3]"
            />
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Start with understanding</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">What online testosterone replacement therapy involves</h2>
            <p className="mt-5 text-slate-500">
              Online testosterone replacement therapy is not a diagnosis made by a web page or a checklist. It is a provider-guided process that can begin online, with a licensed provider reviewing the information available about your situation and explaining what should happen next.
            </p>
            <p className="mt-4 text-slate-500">
              TRT refers specifically to testosterone replacement. Hormone replacement therapy can describe a broader category of hormone-related care. The right evaluation and care plan are individual, and a provider decides whether a testosterone-focused pathway or another next step is appropriate.
            </p>
            <p className="mt-4 text-slate-500">
              This page is educational. It cannot interpret your results, guarantee eligibility or treatment, or replace a conversation with a qualified provider. For broader background, read the <Link className="text-royal-600 underline" href="/testosterone-replacement-therapy">hormone replacement therapy overview</Link>.
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
          <Eyebrow>A complete picture</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">What a provider evaluates</h2>
          <p className="mt-5 max-w-3xl text-slate-500">A useful evaluation starts with context rather than one symptom or one number. Your provider decides what information and testing are appropriate for your situation.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <InfoCard title="Your health history">Share relevant health history, current medications, and concerns that led you to seek information. You do not need to diagnose yourself before speaking with a provider.</InfoCard>
            <InfoCard title="Your symptoms and goals">Explain when you noticed your concerns, how they affect day-to-day life, and what you want to understand. Goals help frame the conversation; they do not determine eligibility or guarantee a treatment.</InfoCard>
            <InfoCard title="Appropriate testing">Your provider may decide that testing or additional information is appropriate. Testing is considered alongside your history and symptoms rather than interpreted in isolation.</InfoCard>
            <InfoCard title="Your questions and next steps">Ask what the information means for your situation, what alternatives may be considered, and how questions or follow-up are handled. The provider, not this page, decides what care is appropriate.</InfoCard>
          </div>
        </Container>
      </section>

      <section className="border-y border-line-200 bg-white">
        <Container className="py-16 sm:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <ImageSlot
              src="/images/journey-3.jpg"
              alt="Adult moving through a new health-care step outdoors"
              ratio="aspect-[4/3]"
            />
            <div>
              <Eyebrow>A provider-guided path</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">How the online process works</h2>
              <p className="mt-5 text-slate-500">Read more about the general <Link className="text-royal-600 underline" href="/how-it-works">New Start MD starting process</Link>. For this hormone-therapy page, the path is described in four steps:</p>
              <ol className="mt-8 space-y-6">
                <Step title="Start with the 5-minute assessment">Answer questions about your goals, health history, and reason for seeking information. The assessment starts the information-gathering process; it does not guarantee eligibility, treatment, or a prescription.</Step>
                <Step title="Meet your provider">A licensed provider reviews the information you share and asks follow-up questions when needed. The provider decides what is appropriate for your situation.</Step>
                <Step title="Discuss testing and options">Your provider explains whether testing or additional information is needed and how it fits into the evaluation. Do not interpret results or change medication based only on an online page.</Step>
                <Step title="Follow the plan your provider explains">If treatment is prescribed, follow the provider&apos;s instructions and use the available care and messaging path for questions, follow-up, or clarification. Timelines and next steps vary by person and plan.</Step>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Eyebrow>Prepare for a useful conversation</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">Questions to ask before starting</h2>
        <div className="mt-5 max-w-3xl text-slate-500">
          <p>You may want to ask what information the provider needs, whether testing is appropriate for your situation, what alternatives may be considered, and how questions are handled after a visit. Bring an accurate medication list and describe your concerns in your own words.</p>
          <p className="mt-4">Do not use an online symptom list to diagnose yourself, start a therapy, or change a prescribed plan. If you have a question before starting, <Link className="text-royal-600 underline" href="/contact">message the New Start MD care team</Link> or begin with the assessment.</p>
        </div>
      </Section>

      <Section>
        <Eyebrow>Common questions about online TRT</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">Common questions about online TRT</h2>
        <div className="mt-8 divide-y divide-line-200 rounded-xl2 border border-line-200 bg-white">
          {FAQ.map((item, index) => (
            <details key={item.q} open={index === 0} className="group p-5 sm:p-6">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-navy-950 marker:hidden">{item.q}</summary>
              <p className="mt-3 max-w-3xl text-slate-500">
                {index === 0 ? <>You can begin with New Start MD&apos;s <Link className="text-royal-600 underline" href="/start">online assessment</Link>. The assessment helps collect information for the starting process, but it is not a diagnosis and does not guarantee eligibility, treatment, or a prescription. A licensed provider decides the next step after reviewing the information that is available.</> : index === 4 ? <>Use the <Link className="text-royal-600 underline" href="/contact">contact page</Link> to message the care team, or begin with the <Link className="text-royal-600 underline" href="/start">5-minute assessment</Link>. The team and provider can explain the available path, what information is needed, and what next steps apply to your situation.</> : item.a}
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
            <Eyebrow>Ready to learn more?</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Start with your questions.</h2>
            <p className="mt-4 max-w-2xl text-slate-500">Take the online assessment or message the New Start MD care team. A licensed provider decides whether a treatment pathway is appropriate for you.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/start">Take the 5-minute assessment</Button>
              <Button href="/contact" variant="ghost">Message our care team</Button>
            </div>
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema([
        { name: "Treatments", path: "/products" },
        { name: "Hormone therapy", path: "/products?goal=hormone" },
        { name: "Online Testosterone Replacement Therapy", path: "/online-testosterone-replacement-therapy" },
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
