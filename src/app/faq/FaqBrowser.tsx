"use client";

import { useMemo, useState } from "react";
import { FAQ_CATEGORIES, type FaqItem } from "@/lib/faq";

export default function FaqBrowser({ items }: { items: FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((it) => {
      const inCat = cat === "All" || it.category === cat;
      const inQuery = !q || it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [items, query, cat]);

  const chips = ["All", ...FAQ_CATEGORIES];

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          aria-label="Search questions"
          className="w-full rounded-full border border-line-200 bg-white py-3 pl-11 pr-4 text-sm text-navy-950 placeholder:text-slate-500 focus:border-royal-600 focus:outline-none focus:ring-2 focus:ring-electric-500/40"
        />
      </div>

      {/* Category chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((c) => {
          const active = cat === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                active
                  ? "border-royal-600 bg-royal-600 text-white"
                  : "border-line-200 text-slate-500 hover:border-royal-600 hover:text-royal-600"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Results */}
      <div className="mt-8 divide-y divide-line-200 border-y border-line-200">
        {filtered.length === 0 ? (
          <p className="py-8 text-sm text-slate-500">
            No questions match that. Try a different word, or{" "}
            <a href="/contact" className="font-semibold text-royal-600 hover:text-royal-700">
              message our care team
            </a>
            .
          </p>
        ) : (
          filtered.map((it) => {
            const isOpen = open === it.q;
            return (
              <div key={it.q} className="py-1">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : it.q)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[0.6rem] uppercase tracking-wide text-slate-500">
                      {it.category}
                    </span>
                    <span className="text-base font-semibold text-navy-950">{it.q}</span>
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className={`shrink-0 text-royal-600 transition ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen ? (
                  <p className="max-w-2xl pb-4 text-sm leading-relaxed text-slate-500">{it.a}</p>
                ) : null}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
