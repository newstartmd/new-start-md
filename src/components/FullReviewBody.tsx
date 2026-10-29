import type { ReviewSection } from "@/lib/fullReviews";

/** Renders the long-form two-level review (ported from the approved
 *  FitClinicMD source so the education reads identically across the network).
 *  New Start brand tokens: navy/royal/slate. */
export default function FullReviewBody({ sections }: { sections: ReviewSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-2xl font-semibold text-navy-950">{s.heading}</h2>
          {s.blocks.map((b, i) => {
            if (b.type === "para") {
              return (
                <p key={i} className="mt-4 leading-relaxed text-slate-600">
                  {b.text}
                </p>
              );
            }
            if (b.type === "subhead") {
              return (
                <h3 key={i} className="mt-8 text-lg font-semibold text-navy-950">
                  {b.text}
                </h3>
              );
            }
            if (b.type === "list") {
              return (
                <ul key={i} className="mt-4 space-y-3">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-slate-600">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-royal-600"
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            // Tables carry their own scroll container so the page body never
            // scrolls sideways on a phone.
            return (
              <div key={i} className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                  <thead>
                    <tr>
                      {b.columns.map((c) => (
                        <th
                          key={c}
                          className="border-b border-line-200 py-2 pr-4 text-xs font-semibold uppercase tracking-wide text-slate-500"
                        >
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, ri) => (
                      <tr key={ri}>
                        {r.map((c, ci) => (
                          <td
                            key={ci}
                            className={`border-b border-line-200 py-3 pr-4 align-top leading-relaxed ${
                              ci === 0 ? "font-semibold text-navy-950" : "text-slate-600"
                            }`}
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </section>
      ))}
    </>
  );
}
