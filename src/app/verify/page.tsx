import type { Metadata } from "next";
import { Container, Section, Eyebrow, Disclaimer } from "@/components/ui";
import { SAMPLE_CHAIN, SAMPLE_CODES, verifyChain } from "@/lib/provenance";
import { getProvenanceStore } from "@/lib/provenanceStore";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";
import VerifyLookup from "./VerifyLookup";

export const metadata: Metadata = {
  title: "Verify your order",
  description:
    "Every New Start MD order is compounded and dispensed by a licensed U.S. pharmacy and recorded in a tamper-evident, hash-chained provenance log you can verify.",
};

// Read the provenance store on every request — otherwise Next prerenders this
// page at build time (frozen to the sample chain) and never reflects new
// webhook writes.
export const dynamic = "force-dynamic";

const STEPS = [
  {
    n: "01",
    h: "Compounded by a licensed U.S. pharmacy",
    p: "Your therapy is prepared and quality-checked by a licensed U.S. pharmacy — with a batch and Certificate of Analysis (potency, sterility, endotoxin).",
  },
  {
    n: "02",
    h: "Recorded, not just claimed",
    p: "Each order's provenance — the pharmacy, batch, COA and date — is written to an append-only log, with a verification code printed on your order.",
  },
  {
    n: "03",
    h: "Tamper-evident by cryptography",
    p: "Every entry is cryptographically linked to the one before it, so no record can be changed or back-dated without breaking the chain. You can verify it yourself, any time.",
  },
];

export default async function VerifyPage() {
  // Live provenance entries once the webhook is receiving events; sample data
  // (clearly labeled) until then so the page always demonstrates verification.
  const live = await getProvenanceStore().all();
  const isSample = live.length === 0;
  const chain = isSample ? SAMPLE_CHAIN : live;
  const codes = isSample ? SAMPLE_CODES : live.slice(-3).map((e) => e.code);
  const { ok } = verifyChain(chain);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line-200 glow">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Verified provenance</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] sm:text-6xl">
            Proof, <span className="italic text-royal-600">not promises.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-500">
            Every New Start MD order is compounded and dispensed by a licensed U.S. pharmacy — and
            recorded in a tamper-evident log you can check yourself. Enter your code and see exactly
            where your therapy came from.
          </p>
        </Container>
      </section>

      {/* Lookup */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold">Verify an order</h2>
          <p className="mt-2 text-sm text-slate-500">
            Enter the verification code from your order to see its pharmacy, batch and
            Certificate of Analysis — and confirm the record hasn&apos;t been altered.
          </p>
          <div className="mt-6">
            <VerifyLookup chain={chain} verified={ok} sampleCodes={codes} />
          </div>
          {isSample ? (
            <p className="mt-4 rounded-lg border border-line-200 bg-mist-50 p-3 text-xs text-slate-500">
              Preview with sample records. Once you place an order, your own verification code appears
              here, backed by the live provenance log.
            </p>
          ) : null}
        </div>
      </Section>

      {/* How it works */}
      <section className="bg-mist-50">
        <Container className="py-14 sm:py-20">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold">Trust you can check.</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl2 border border-line-200 bg-white p-6">
                <div className="font-mono text-sm font-medium text-royal-600">{s.n}</div>
                <h3 className="mt-3 text-base font-bold text-navy-950">{s.h}</h3>
                <p className="mt-2 text-sm text-slate-500">{s.p}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-slate-500">
            The provenance record attests to the licensed U.S. pharmacy that compounded and
            dispensed your order, its batch and Certificate of Analysis, and the date — the facts we
            can verify. It is a cryptographic, hash-chained record (tamper-evident logging), not a
            marketing badge.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <div className="mx-auto max-w-3xl">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Container>
    </>
  );
}
