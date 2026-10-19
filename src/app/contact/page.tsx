import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about New Start MD products, your visit, or the partner program? Get in touch.",
};

export default function ContactPage() {
  return (
    <section className="glow">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Talk to us.</h1>
            <p className="mt-5 max-w-md text-bone-soft">
              Product questions, help with your visit, or interested in the partner
              program — we read everything.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-muted">General</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`} className="text-bone-soft hover:text-volt">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Partners</dt>
                <dd>
                  <a href={`mailto:${SITE.partnerEmail}`} className="text-bone-soft hover:text-volt">
                    {SITE.partnerEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-xl2 border border-line bg-surface/60 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
