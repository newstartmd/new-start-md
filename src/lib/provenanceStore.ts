// PROVENANCE STORE — append entries to the hash chain and read them back, plus
// webhook idempotency (dedupe on event_id). The chain + dedupe logic lives
// behind an interface so the backend is swappable: the default MemoryStore is
// for local dev and a single instance only (NOT durable across serverless
// instances). In production, implement ProvenanceStore against a durable
// backend — Vercel KV / Upstash / Postgres, or the order-app DB — and the
// webhook + /verify code stays identical.

import "server-only";
import { GENESIS, hashRecord, type ChainEntry, type ProvenanceRecord } from "@/lib/provenance";

export interface ProvenanceStore {
  /** Append a record; the store assigns seq + links it to the previous hash. */
  append(rec: Omit<ProvenanceRecord, "seq">): Promise<ChainEntry>;
  all(): Promise<ChainEntry[]>;
  findByCode(code: string): Promise<ChainEntry | undefined>;
  hasSeen(eventId: string): Promise<boolean>;
  markSeen(eventId: string): Promise<void>;
}

class MemoryStore implements ProvenanceStore {
  private chain: ChainEntry[] = [];
  private seen = new Set<string>();

  async append(rec: Omit<ProvenanceRecord, "seq">): Promise<ChainEntry> {
    const seq = this.chain.length + 1;
    const prevHash = this.chain.length ? this.chain[this.chain.length - 1].hash : GENESIS;
    const full: ProvenanceRecord = { seq, ...rec };
    const hash = hashRecord(full, prevHash);
    const entry: ChainEntry = { ...full, prevHash, hash };
    this.chain.push(entry);
    return entry;
  }

  async all(): Promise<ChainEntry[]> {
    return [...this.chain];
  }

  async findByCode(code: string): Promise<ChainEntry | undefined> {
    const c = code.trim().toUpperCase();
    return this.chain.find((e) => e.code.toUpperCase() === c);
  }

  async hasSeen(eventId: string): Promise<boolean> {
    return this.seen.has(eventId);
  }

  async markSeen(eventId: string): Promise<void> {
    this.seen.add(eventId);
  }
}

// Pin the singleton to globalThis, not a module-scoped `let`. Next.js compiles
// route handlers and Server Components into separate module graphs, so a plain
// module variable is instantiated more than once in a single process — the
// webhook would write to one chain and /verify would read an empty other one.
// globalThis is shared across those graphs, so one process = one chain. (This
// still is not durable across serverless instances — see the file header.)
const GLOBAL_KEY = "__nsmd_provenanceStore__";
type GlobalWithStore = typeof globalThis & { [GLOBAL_KEY]?: ProvenanceStore };

/** The configured provenance store (MemoryStore until a durable one is wired). */
export function getProvenanceStore(): ProvenanceStore {
  const g = globalThis as GlobalWithStore;
  if (!g[GLOBAL_KEY]) g[GLOBAL_KEY] = new MemoryStore();
  return g[GLOBAL_KEY];
}
