"use client";

import { useMemo, useState } from "react";
import { useActionState } from "react";
import { STEPS, type IconKey, type Step } from "@/lib/assessment";
import { startAction, type StartState } from "@/app/start/actions";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
];

function Icon({ k }: { k?: IconKey }) {
  if (!k) return null;
  const p: Record<IconKey, string> = {
    spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18",
    scale: "M12 3v18M5 7h14M7 7l-3 6a3 3 0 0 0 6 0L7 7zm10 0-3 6a3 3 0 0 0 6 0l-3-6z",
    muscle: "M4 13c3 0 4-2 6-2s3 2 3 4-2 3-5 3-5-2-5-4 .5-1 1-1zM13 6c1-2 4-3 6-1s1 5-2 6",
    clock: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    brain: "M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0V5a3 3 0 0 0-3-2zM15 6a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 5",
    heart: "M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9z",
    moon: "M20 14a8 8 0 1 1-9-10 6 6 0 0 0 9 10z",
    flame: "M12 3c1 3-2 4-2 7a2 2 0 0 0 4 0c0-1 0-1 .5-2 1 1.5 2 3 2 5a6 6 0 0 1-12 0c0-4 4-6 5-10z",
    shield: "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
    bolt: "M13 3 4 14h6l-1 7 9-11h-6l1-7z",
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d={p[k]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Answers = Record<string, string | string[]>;

export default function Assessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [state, action, pending] = useActionState<StartState, FormData>(startAction, null);

  const total = STEPS.length + 1; // +1 for the contact step
  const onContact = step === STEPS.length;
  const progress = Math.round(((step + (onContact ? 1 : 0)) / total) * 100);

  const note = useMemo(() => {
    const parts: string[] = [];
    const sex = answers.sex as string;
    const age = answers.age as string;
    const wins = answers.wins as string[] | undefined;
    const activity = answers.activity as string;
    if (sex) parts.push(`Sex: ${sex}`);
    if (age) parts.push(`Age: ${age}`);
    if (wins?.length) parts.push(`Wants: ${wins.join(", ")}`);
    if (activity) parts.push(`Activity: ${activity}`);
    return parts.join(" · ");
  }, [answers]);

  if (state?.ok) {
    return (
      <div className="rounded-xl2 border border-royal-600/40 bg-white p-8 text-center shadow-card">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-royal-600/15 text-royal-600">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-5 font-display text-2xl font-semibold">Your new start is in motion.</p>
        <p className="mt-2 text-sm text-slate-500">{state.message}</p>
        {state.handoffUrl ? (
          <a
            href={state.handoffUrl}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-royal-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-royal-700"
          >
            Continue your assessment
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ) : null}
      </div>
    );
  }

  const current = STEPS[step] as Step | undefined;

  function pickSingle(id: string, value: string) {
    setAnswers((a) => ({ ...a, [id]: value }));
    setStep((s) => s + 1);
  }
  function toggleMulti(id: string, value: string) {
    setAnswers((a) => {
      const cur = (a[id] as string[] | undefined) ?? [];
      return { ...a, [id]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value] };
    });
  }

  return (
    <div className="rounded-xl2 border border-line-200 bg-white/70 p-6 shadow-card sm:p-8">
      {/* progress */}
      <div className="mb-7 flex items-center gap-4">
        {step > 0 || onContact ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-royal-600"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
        ) : (
          <span />
        )}
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line-200">
          <div className="h-full rounded-full bg-royal-600 transition-all duration-500" style={{ width: `${Math.max(8, progress)}%` }} />
        </div>
        <span className="font-mono text-xs tabular-nums text-slate-500">
          {Math.min(step + 1, total)}/{total}
        </span>
      </div>

      {/* question steps */}
      {current ? (
        <div key={current.id} className="animate-rise">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-600">{current.eyebrow}</span>
          <h2 className="mt-3 text-2xl font-semibold text-navy-950 sm:text-3xl">{current.question}</h2>
          {current.sub ? <p className="mt-2 text-sm text-slate-500">{current.sub}</p> : null}

          {current.kind === "single" ? (
            <div className="mt-6 grid gap-3">
              {current.choices.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => pickSingle(current.id, c.value)}
                  className="group flex items-center gap-4 rounded-xl border border-line-200 bg-white p-4 text-left transition hover:border-royal-600 hover:shadow-card"
                >
                  {c.icon ? (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-royal-600 transition group-hover:bg-royal-600 group-hover:text-white">
                      <Icon k={c.icon} />
                    </span>
                  ) : null}
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium text-navy-950">{c.label}</span>
                    {c.hint ? <span className="block text-xs text-slate-500">{c.hint}</span> : null}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-line-200 transition group-hover:text-royal-600">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
          ) : (
            <>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.choices.map((c) => {
                  const on = ((answers[current.id] as string[] | undefined) ?? []).includes(c.value);
                  return (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => toggleMulti(current.id, c.value)}
                      aria-pressed={on}
                      className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                        on ? "border-royal-600 bg-sky-100/60 ring-1 ring-royal-600" : "border-line-200 bg-white hover:border-royal-600"
                      }`}
                    >
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${on ? "bg-royal-600 text-white" : "bg-sky-100 text-royal-600"}`}>
                        <Icon k={c.icon} />
                      </span>
                      <span className="font-medium text-navy-950">{c.label}</span>
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-royal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal-700 sm:w-auto"
              >
                Continue
              </button>
            </>
          )}
        </div>
      ) : (
        /* contact step — submits via the existing /start action */
        <form action={action} className="animate-rise space-y-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-600">Last step</span>
          <h2 className="mt-1 text-2xl font-semibold text-navy-950 sm:text-3xl">Where should your provider reach you?</h2>
          <p className="text-sm text-slate-500">
            A licensed provider reviews your answers and reaches out to schedule — usually within two business days.
          </p>

          {/* honeypot + hidden assessment payload */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <input type="hidden" name="goal" value={(answers.goal as string) ?? ""} />
          <input type="hidden" name="note" value={note} />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-500" htmlFor="a-name">First name</label>
              <input id="a-name" name="name" required placeholder="Jordan" className="mt-1.5 w-full rounded-lg border border-line-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-500 focus:border-royal-600 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-500" htmlFor="a-email">Email</label>
              <input id="a-email" name="email" type="email" required placeholder="you@email.com" className="mt-1.5 w-full rounded-lg border border-line-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-500 focus:border-royal-600 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-500" htmlFor="a-phone">Phone <span className="text-slate-500">(optional)</span></label>
              <input id="a-phone" name="phone" placeholder="(555) 555-5555" className="mt-1.5 w-full rounded-lg border border-line-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-500 focus:border-royal-600 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-500" htmlFor="a-state">State</label>
              <select id="a-state" name="state" required defaultValue="" className="mt-1.5 w-full rounded-lg border border-line-200 bg-white px-4 py-3 text-sm text-navy-950 focus:border-royal-600 focus:outline-none">
                <option value="" disabled>Choose…</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {state?.ok === false ? <p className="text-sm text-gold-700">{state.message}</p> : null}

          <button
            type="submit"
            disabled={pending}
            className="inline-flex w-full items-center justify-center rounded-full bg-royal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-royal-700 disabled:opacity-60"
          >
            {pending ? "Sending…" : "See my plan →"}
          </button>
          <p className="text-center text-xs text-slate-500">
            Takes about 5 minutes · No charge to start · A real provider decides what&apos;s right for you.
          </p>
        </form>
      )}
    </div>
  );
}
