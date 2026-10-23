"use client";

import { useState } from "react";
import type { ChainEntry } from "@/lib/provenance";

export default function VerifyLookup({
  chain,
  verified,
  sampleCodes,
}: {
  chain: ChainEntry[];
  verified: boolean;
  sampleCodes: string[];
}) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<ChainEntry | null | "none">(null);

  function lookup(code: string) {
    const c = code.trim().toUpperCase();
    setQuery(code);
    if (!c) {
      setResult(null);
      return;
    }
    setResult(chain.find((e) => e.code.toUpperCase() === c) ?? "none");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          lookup(query);
        }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your order's verification code (e.g. NS-7F3A-2K9D)"
          aria-label="Verification code"
          className="w-full rounded-full border border-line-200 bg-white px-5 py-3 font-mono text-sm text-navy-950 placeholder:text-slate-500 focus:border-royal-600 focus:outline-none focus:ring-2 focus:ring-electric-500/40"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-royal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal-700"
        >
          Verify
        </button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="font-mono uppercase tracking-wide">Try a sample:</span>
        {sampleCodes.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => lookup(c)}
            className="rounded-full border border-line-200 px-2.5 py-1 font-mono text-[0.7rem] text-royal-700 transition hover:border-royal-600"
          >
            {c}
          </button>
        ))}
      </div>

      {result === "none" ? (
        <div className="mt-6 rounded-xl2 border border-line-200 bg-white p-6">
          <p className="text-sm font-semibold text-navy-950">No match for that code.</p>
          <p className="mt-1 text-sm text-slate-500">
            Check the code on your order, or{" "}
            <a href="/contact" className="font-semibold text-royal-600 hover:text-royal-700">message our care team</a>.
          </p>
        </div>
      ) : null}

      {result && result !== "none" ? (
        <div className="mt-6 overflow-hidden rounded-xl2 border border-line-200 bg-white shadow-card">
          <div className="flex items-center gap-3 border-b border-line-200 bg-success-600/10 px-6 py-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success-600 text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-success-600">Verified</p>
              <p className="text-xs text-slate-500">
                {verified
                  ? `Entry #${result.seq} in an intact tamper-evident chain of ${chain.length} records.`
                  : "Record found."}
              </p>
            </div>
          </div>
          <dl className="grid gap-x-8 gap-y-3 px-6 py-5 sm:grid-cols-2">
            <Field label="Product" value={result.product} />
            <Field label="Dispensed" value={result.dispensedAt} />
            <Field label="Licensed U.S. pharmacy" value={`${result.pharmacy} (${result.pharmacyState})`} />
            <Field label="Batch" value={result.batch} mono />
            <Field label="Certificate of Analysis" value={result.coa} mono />
            <Field label="Verification code" value={result.code} mono />
          </dl>
          <div className="border-t border-line-200 px-6 py-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">Chain hash</p>
            <p className="mt-1 break-all font-mono text-[0.7rem] text-navy-950">{result.hash}</p>
            <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">Links to previous</p>
            <p className="mt-1 break-all font-mono text-[0.7rem] text-slate-500">{result.prevHash}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Field({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">{label}</dt>
      <dd className={`mt-0.5 text-sm text-navy-950 ${mono ? "font-mono" : ""}`}>{value}</dd>
    </div>
  );
}
