// Per-compound "where it works in the body" figure for a product page — a
// focused version of the /peptides body map that highlights only the system(s)
// a single compound acts in, with its usage description. Static (server) — no
// interactivity needed. Returns null when the compound isn't mapped to a system
// (e.g. blends, or compounds not in the education map), so the PDP degrades
// cleanly.

import {
  SYSTEMS,
  SYSTEM_ORDER,
  type SystemKey,
  type SystemPeptide,
} from "@/lib/peptideSystems";

function norm(s: string) {
  return s.toLowerCase().replace(/[\s+\-–]/g, "");
}

/** Systems a compound (by display name) acts in, plus the matching item. */
function matchSystems(name: string): { key: SystemKey; item: SystemPeptide }[] {
  const target = norm(name);
  const out: { key: SystemKey; item: SystemPeptide }[] = [];
  for (const key of SYSTEM_ORDER) {
    for (const item of SYSTEMS[key].items) {
      const n = norm(item.name);
      if (n === target || n.startsWith(target) || target.startsWith(n)) {
        out.push({ key, item });
        break; // one hit per system is enough
      }
    }
  }
  return out;
}

export default function CompoundSystems({ name }: { name: string }) {
  const matches = matchSystems(name);
  if (matches.length === 0) return null;

  const activeKeys = new Set(matches.map((m) => m.key));
  // Prefer the richest "use" sentence we found for this compound.
  const primaryUse = matches.map((m) => m.item.use).sort((a, b) => b.length - a.length)[0];

  return (
    <section className="mt-12 rounded-xl2 border border-line-200 bg-mist-50 p-6 sm:p-8">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-600">
        Where it works
      </span>
      <h2 className="mt-2 text-2xl font-semibold text-navy-950">
        {name} in the body
      </h2>

      <div className="mt-6 grid items-center gap-8 sm:grid-cols-[180px_1fr]">
        {/* Figure */}
        <div className="mx-auto w-full max-w-[180px]">
          <svg viewBox="0 0 240 470" className="h-auto w-full" role="img" aria-label={`Body systems ${name} acts in`}>
            <g fill="#e6effc" stroke="#c7d6ef" strokeWidth="1.5">
              <circle cx="120" cy="38" r="25" />
              <rect x="110" y="60" width="20" height="16" rx="7" />
              <path d="M86 78 q34 -10 68 0 l10 70 q-44 14 -88 0 Z" />
              <path d="M92 150 q28 10 56 0 l-6 60 q-22 8 -44 0 Z" />
              <rect x="51" y="86" width="17" height="86" rx="8" />
              <rect x="172" y="86" width="17" height="86" rx="8" />
              <rect x="97" y="212" width="18" height="118" rx="8" />
              <rect x="125" y="212" width="18" height="118" rx="8" />
            </g>
            {SYSTEM_ORDER.map((key) => {
              const n = SYSTEMS[key].node;
              const on = activeKeys.has(key);
              return (
                <g key={key}>
                  {on && <circle cx={n.x} cy={n.y} r="13" fill="#1f4fd1" opacity="0.14" />}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={on ? 7 : 4}
                    fill={on ? "#1f4fd1" : "#ffffff"}
                    stroke={on ? "#1f4fd1" : "#b8c4d6"}
                    strokeWidth="2"
                  />
                  {on && <circle cx={n.x} cy={n.y} r="2.5" fill="#ffffff" />}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Explanation */}
        <div>
          <p className="text-slate-500">{primaryUse}</p>
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Acts in {matches.length === 1 ? "this system" : "these systems"}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {matches.map((m) => (
                <span
                  key={m.key}
                  className="rounded-full border border-royal-600/40 bg-sky-100/60 px-3 py-1 text-xs font-medium text-royal-700"
                >
                  {SYSTEMS[m.key].label}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-slate-500">
            This is education, not a recommendation — a licensed provider decides whether{" "}
            {name} is appropriate for you. See the full map on the{" "}
            <a href="/peptides" className="font-medium text-royal-600 underline underline-offset-2">
              peptide library
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
