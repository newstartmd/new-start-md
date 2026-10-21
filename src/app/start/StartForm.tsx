"use client";

import { useActionState } from "react";
import { startAction, type StartState } from "./actions";
import { GOAL_OPTIONS } from "@/lib/site";

const field =
  "w-full rounded-lg border border-line-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-500 focus:border-royal-600 focus:outline-none";
const label = "block text-sm font-medium text-slate-500";

export default function StartForm() {
  const [state, action, pending] = useActionState<StartState, FormData>(startAction, null);

  if (state?.ok) {
    return (
      <div className="rounded-xl2 border border-royal-600/40 bg-white p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-royal-600/15 text-royal-600">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-4 font-display text-xl font-bold">You&apos;re in.</p>
        <p className="mt-2 text-sm text-slate-500">{state.message}</p>
        {state.handoffUrl ? (
          <a
            href={state.handoffUrl}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-royal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal-700"
          >
            Continue to your assessment
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={`mt-1.5 ${field}`} placeholder="Jordan Avery" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={`mt-1.5 ${field}`} placeholder="you@email.com" />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone <span className="text-slate-500">(optional)</span>
          </label>
          <input id="phone" name="phone" className={`mt-1.5 ${field}`} placeholder="(555) 555-5555" />
        </div>
        <div>
          <label className={label} htmlFor="state">
            State
          </label>
          <input id="state" name="state" className={`mt-1.5 ${field}`} placeholder="AZ" />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="goal">
          What&apos;s your goal?
        </label>
        <select id="goal" name="goal" required className={`mt-1.5 ${field}`} defaultValue="">
          <option value="" disabled>
            Choose one…
          </option>
          {GOAL_OPTIONS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={label} htmlFor="note">
          Anything we should know? <span className="text-slate-500">(optional)</span>
        </label>
        <textarea id="note" name="note" rows={3} className={`mt-1.5 ${field}`} placeholder="Current meds, questions, timing…" />
      </div>

      {state?.ok === false ? <p className="text-sm text-gold-700">{state.message}</p> : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-royal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal-700 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Request my visit"}
      </button>
    </form>
  );
}
