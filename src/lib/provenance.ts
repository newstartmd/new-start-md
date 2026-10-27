// PROVENANCE — tamper-evident, hash-chained record of where each order was
// compounded and dispensed. Append-only: every entry hashes the entry before
// it (SHA-256 over the canonical record + the previous hash), so no record can
// be altered or back-dated without breaking every hash that follows. This is
// the same hash-chained evidence-log method used elsewhere in the firm's stack
// (method per U.S. Patent 8,760,299 B2).
//
// What it attests is only what we can actually verify: the LICENSED U.S.
// PHARMACY that compounded/dispensed the order, the batch/COA reference, and
// the date. It does NOT assert ingredient origin — do not log a "made in USA"
// claim here unless U.S.-origin ingredients are independently substantiated
// (FTC "Made in USA" standard). A tamper-evident false claim is still false.
//
// Live provenance entries are written by the order backend (GEN Health-backed
// app). The SAMPLE_CHAIN below is clearly-labeled demo data so the public
// /verify page can show how verification works before the live feed exists.

import { createHash } from "node:crypto";

export const GENESIS = "0".repeat(64);

/** The facts we record per order — all independently verifiable. */
export type ProvenanceRecord = {
  seq: number;
  /** Customer-facing verification code printed with the order. */
  code: string;
  product: string;
  /** Licensed U.S. pharmacy that compounded + dispensed. */
  pharmacy: string;
  pharmacyState: string;
  /** Batch / lot reference. */
  batch: string;
  /** Certificate of Analysis reference (potency, sterility, endotoxin). */
  coa: string;
  /** ISO date dispensed. */
  dispensedAt: string;
};

export type ChainEntry = ProvenanceRecord & {
  prevHash: string;
  hash: string;
};

/** Deterministic hash of a record linked to the previous entry's hash. */
export function hashRecord(rec: ProvenanceRecord, prevHash: string): string {
  const canonical = JSON.stringify([
    rec.seq,
    rec.code,
    rec.product,
    rec.pharmacy,
    rec.pharmacyState,
    rec.batch,
    rec.coa,
    rec.dispensedAt,
    prevHash,
  ]);
  return createHash("sha256").update(canonical).digest("hex");
}

/** Build an append-only chain from an ordered list of records. */
export function buildChain(records: ProvenanceRecord[]): ChainEntry[] {
  const chain: ChainEntry[] = [];
  let prev = GENESIS;
  for (const rec of records) {
    const hash = hashRecord(rec, prev);
    chain.push({ ...rec, prevHash: prev, hash });
    prev = hash;
  }
  return chain;
}

/** Recompute every hash and confirm each entry links to the one before it. */
export function verifyChain(chain: ChainEntry[]): { ok: boolean; brokenAtSeq?: number } {
  let prev = GENESIS;
  for (const e of chain) {
    if (e.prevHash !== prev) return { ok: false, brokenAtSeq: e.seq };
    const { prevHash: _p, hash: _h, ...rec } = e;
    if (hashRecord(rec, e.prevHash) !== e.hash) return { ok: false, brokenAtSeq: e.seq };
    prev = e.hash;
  }
  return { ok: true };
}

// ── Demo data (clearly labeled on the page; replaced by the live feed) ───────
const SAMPLE_RECORDS: ProvenanceRecord[] = [
  { seq: 1, code: "NS-7F3A-2K9D", product: "Tirzepatide", pharmacy: "Dirx-Hub Pharmacy", pharmacyState: "TX", batch: "DX-26-10418", coa: "COA-26-10418", dispensedAt: "2026-10-18" },
  { seq: 2, code: "NS-A1C8-5M2R", product: "BPC-157", pharmacy: "Dirx-Hub Pharmacy", pharmacyState: "TX", batch: "DX-26-10462", coa: "COA-26-10462", dispensedAt: "2026-10-20" },
  { seq: 3, code: "NS-9QE4-7T6B", product: "Semaglutide", pharmacy: "Dirx-Hub Pharmacy", pharmacyState: "TX", batch: "DX-26-10513", coa: "COA-26-10513", dispensedAt: "2026-10-22" },
];

export const SAMPLE_CHAIN: ChainEntry[] = buildChain(SAMPLE_RECORDS);
export const SAMPLE_CODES: string[] = SAMPLE_RECORDS.map((r) => r.code);

export function findByCode(chain: ChainEntry[], code: string): ChainEntry | undefined {
  const c = code.trim().toUpperCase();
  return chain.find((e) => e.code.toUpperCase() === c);
}
