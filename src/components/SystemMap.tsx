"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SYSTEMS,
  SYSTEM_ORDER,
  STATUS_LABEL,
  type SystemKey,
  type PeptideStatus,
} from "@/lib/peptideSystems";
import { COMPOUNDS, citationHref, citationLabel, type Compound } from "@/lib/evidence";

// Match a body-map peptide (by display name) to its evidence entry, if one
// exists. Normalizes spacing/case/+/- so "Kisspeptin-10" ↔ "kisspeptin" etc.
function evidenceFor(name: string): Compound | undefined {
  const norm = (s: string) => s.toLowerCase().replace(/[\s+\-–]/g, "");
  const t = norm(name);
  return COMPOUNDS.find((c) => {
    const n = norm(c.name);
    return n === t || n.startsWith(t) || t.startsWith(n);
  });
}

// Status → chip colors. Kept inline (not Tailwind classes) so the four states
// read as one consistent legend wherever they appear, and so the meaning is
// carried by the data, not by a class name a future edit might drift.
const STATUS_CHIP: Record<PeptideStatus, { bg: string; fg: string }> = {
  ok: { bg: "#e4f3ec", fg: "#12805c" },
  compound: { bg: "#e6effc", fg: "#1a43b4" },
  trial: { bg: "#faf1dc", fg: "#8a6716" },
  research: { bg: "#eef2f8", fg: "#536279" },
};

const STATUS_ORDER: PeptideStatus[] = ["ok", "compound", "trial", "research"];

function StatusChip({ status }: { status: PeptideStatus }) {
  const c = STATUS_CHIP[status];
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide"
      style={{ backgroundColor: c.bg, color: c.fg }}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

export default function SystemMap() {
  const [active, setActive] = useState<SystemKey>("weight");
  const [openStudies, setOpenStudies] = useState<string | null>(null);
  const system = SYSTEMS[active];

  return (
    <div>
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {STATUS_ORDER.map((s) => (
          <span key={s} className="inline-flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: STATUS_CHIP[s].fg }}
              aria-hidden
            />
            <span className="text-xs text-slate-500">{STATUS_LABEL[s]}</span>
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-14">
        {/* Figure */}
        <div className="mx-auto w-full max-w-[320px]">
          <svg
            viewBox="0 0 240 470"
            className="h-auto w-full"
            role="img"
            aria-label="A body map. Select a region to see the peptides studied for that system."
          >
            {/* Silhouette */}
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

            {/* Nodes — a pointer-only enhancement. Keyboard users select every
                system from the labelled pills below, so these are not duplicate
                tab stops (which would also draw a boxy focus ring on the <g>). */}
            {SYSTEM_ORDER.map((key) => {
              const n = SYSTEMS[key].node;
              const isActive = key === active;
              return (
                <g
                  key={key}
                  aria-hidden
                  onClick={() => setActive(key)}
                  style={{ cursor: "pointer" }}
                >
                  {isActive && (
                    <circle cx={n.x} cy={n.y} r="14" fill="#1f4fd1" opacity="0.14">
                      <animate
                        attributeName="r"
                        values="11;15;11"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="7"
                    fill={isActive ? "#1f4fd1" : "#ffffff"}
                    stroke={isActive ? "#1f4fd1" : "#8aa2cc"}
                    strokeWidth="2"
                  />
                  <circle cx={n.x} cy={n.y} r="2.5" fill={isActive ? "#ffffff" : "#1f4fd1"} />
                </g>
              );
            })}
          </svg>

          {/* System pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {SYSTEM_ORDER.map((key) => {
              const isActive = key === active;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                    isActive
                      ? "border-royal-600 bg-royal-600 text-white"
                      : "border-line-200 text-slate-500 hover:border-royal-600 hover:text-royal-600"
                  }`}
                >
                  {SYSTEMS[key].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {system.landmark}
          </p>
          <h3 className="mt-2 text-3xl text-navy-950">{system.label}</h3>
          <p className="mt-2 max-w-xl text-slate-500">{system.blurb}</p>

          <ul className="mt-7 space-y-3">
            {system.items.map((p) => (
              <li
                key={`${p.name}-${p.use}`}
                className="rounded-xl2 border border-line-200 bg-white p-4 shadow-xs"
              >
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium text-navy-950">{p.name}</span>
                  {p.aka && <span className="text-xs text-slate-500">· {p.aka}</span>}
                  <span className="ml-auto">
                    <StatusChip status={p.status} />
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-slate-500">{p.use}</p>

                {/* Studies & evidence — expands to the real citations, matched
                    to this compound's evidence file. */}
                {(() => {
                  const ev = evidenceFor(p.name);
                  if (!ev) return null;
                  const key = `${active}:${p.name}`;
                  const open = openStudies === key;
                  return (
                    <div className="mt-2.5">
                      <button
                        type="button"
                        onClick={() => setOpenStudies(open ? null : key)}
                        aria-expanded={open}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-royal-600 hover:text-royal-700"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className={`transition ${open ? "rotate-90" : ""}`}>
                          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Studies &amp; evidence ({ev.evidence.length})
                        <span className="rounded-full bg-sky-100 px-1.5 py-0.5 text-[0.6rem] font-semibold text-royal-700">Grade {ev.grade}</span>
                      </button>
                      {open && (
                        <div className="mt-2 space-y-2 border-l-2 border-line-200 pl-3">
                          {ev.evidence.map((cite, i) => {
                            const href = citationHref(cite);
                            return (
                              <p key={i} className="text-xs leading-relaxed text-slate-500">
                                {cite.summary}{" "}
                                {href ? (
                                  <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-royal-600 underline underline-offset-2">
                                    {citationLabel(cite)} ↗
                                  </a>
                                ) : null}
                              </p>
                            );
                          })}
                          <Link
                            href={`/evidence/${ev.slug}`}
                            className="inline-block text-xs font-semibold text-royal-600 underline underline-offset-2 hover:text-royal-700"
                          >
                            Open the full evidence file →
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {p.also && p.also.length > 0 && (
                  <p className="mt-2 text-xs text-slate-500">
                    Also acts in:{" "}
                    {p.also.map((k, i) => (
                      <span key={k}>
                        {i > 0 && ", "}
                        <button
                          type="button"
                          onClick={() => setActive(k)}
                          className="font-medium text-royal-600 underline underline-offset-2 hover:text-royal-700"
                        >
                          {SYSTEMS[k].label}
                        </button>
                      </span>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            This map is education, not a recommendation. What a compound is studied
            for is not a promise it will work for you. A licensed provider decides
            whether anything here is appropriate — and how every order is sourced is
            recorded on our{" "}
            <Link href="/verify" className="font-medium text-royal-600 underline underline-offset-2">
              verification page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
