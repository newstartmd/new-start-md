import type { Metadata } from "next";
import { Container, Eyebrow, Disclaimer } from "@/components/ui";
import StartForm from "./StartForm";
import { MEDICAL_DISCLAIMER, TELEHEALTH_NOTE } from "@/lib/legal";
import { bookingConfigured } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start now",
  description:
    "Tell us your goal and a licensed New Start MD provider will reach out to schedule your visit.",
  robots: { index: true, follow: true },
};

export default function StartPage() {
  return (
    <section className="glow">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Start now</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
              One form. <span className="text-royal-600">New start.</span>
            </h1>
            <p className="mt-5 max-w-md text-slate-500">
              Tell us where you want to go. A licensed provider reviews your request and
              reaches out to schedule your visit — usually within two business days.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-500">
              {[
                "No clinic waiting room — it's all telehealth.",
                "A real provider decides what's right for you.",
                "Prescribed therapy delivered to your door.",
              ].map((l) => (
                <li key={l} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-royal-600" aria-hidden />
                  {l}
                </li>
              ))}
            </ul>
            {!bookingConfigured ? (
              <p className="mt-8 rounded-lg border border-line-200 bg-white p-4 text-xs text-slate-500">
                {TELEHEALTH_NOTE}
              </p>
            ) : null}
          </div>

          <div className="rounded-xl2 border border-line-200 bg-white/60 p-6 sm:p-8">
            <StartForm />
            <div className="mt-6">
              <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
