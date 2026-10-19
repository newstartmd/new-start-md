"use client";

import { useActionState } from "react";
import { startAction, type StartState } from "./actions";
import { GOAL_OPTIONS } from "@/lib/site";

const field =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-bone placeholder:text-muted focus:border-volt focus:outline-none";
const label = "block text-sm font-medium text-bone-soft";

export default function StartForm() {
  const [state, action, pending] = useActionState<StartState, FormData>(startAction, null);

  if (state?.ok) {
    return (
      <div className="rounded-xl2 border border-volt/40 bg-surface p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-volt/15 text-volt">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-4 font-display text-xl font-bold">You&apos;re in.</p>
        <p className="mt-2 text-sm text-muted">{state.message}</p>
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
            Phone <span className="text-muted">(optional)</span>
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
          Anything we should know? <span className="text-muted">(optional)</span>
        </label>
        <textarea id="note" name="note" rows={3} className={`mt-1.5 ${field}`} placeholder="Current meds, questions, timing…" />
      </div>

      {state?.ok === false ? <p className="text-sm text-ember">{state.message}</p> : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-volt px-6 py-3 text-sm font-semibold text-volt-ink transition hover:bg-volt-deep disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Request my visit"}
      </button>
    </form>
  );
}
