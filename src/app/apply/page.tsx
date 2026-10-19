import type { Metadata } from "next";
import { Container, Eyebrow, Disclaimer } from "@/components/ui";
import ApplyForm from "./ApplyForm";
import { PARTNER_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Apply to refer",
  description:
    "Gyms, trainers and affiliates: apply to partner with New Start MD. A branded code, a discount for your people, and a simple licensing arrangement.",
  robots: { index: true, follow: true },
};

export default function ApplyPage() {
  return (
    <section className="glow">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Partner program</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Apply to <span className="text-ember">refer.</span>
            </h1>
            <p className="mt-5 max-w-md text-bone-soft">
              You already changed how your people move. Now give them the medical side of
              the equation — and get recognized for it. Tell us about your business and
              we&apos;ll set you up with a branded code and a discount to offer.
            </p>
            <p className="mt-8 rounded-lg border border-line bg-surface p-4 text-xs text-muted">
              {PARTNER_DISCLAIMER}
            </p>
          </div>
          <div className="rounded-xl2 border border-line bg-surface/60 p-6 sm:p-8">
            <ApplyForm />
            <div className="mt-6">
              <Disclaimer>
                By applying you agree we may contact you about the New Start MD partner program.
              </Disclaimer>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
