import type { Metadata } from "next";
import { Container, Eyebrow, Disclaimer, ImageSlot } from "@/components/ui";
import Assessment from "@/components/Assessment";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Take the 5-minute assessment",
  description:
    "Answer a few questions about your goals — right from your phone. A licensed New Start MD provider reviews your assessment and reaches out to schedule your visit.",
  robots: { index: true, follow: true },
};

export default function StartPage() {
  return (
    <section className="glow">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <Eyebrow>Your new start</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">
              Take the <span className="text-royal-600">5-minute assessment.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-slate-500">
              Answer a few questions about your goals and health history — right from your
              phone. No clinic, no waiting room. If a trainer or coach sent you, their code
              comes along automatically.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-500">
              {[
                "100% online — it's all telehealth.",
                "A real licensed provider decides what's right for you.",
                "Prescribed therapy delivered to your door.",
                "Your detailed medical history is taken later, privately, in your secure portal.",
              ].map((l) => (
                <li key={l} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-royal-600" aria-hidden />
                  {l}
                </li>
              ))}
            </ul>
            <ImageSlot
              src="/images/journey-2.jpg"
              alt="Someone starting their day with new energy"
              mood="Your turn"
              ratio="aspect-[5/4]"
              className="mt-8 hidden max-w-sm lg:block"
            />
            <div className="mt-8 max-w-md">
              <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
            </div>
          </div>

          <Assessment />
        </div>
      </Container>
    </section>
  );
}
