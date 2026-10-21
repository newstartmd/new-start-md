"use client";

import { useActionState } from "react";
import { applyAction, type ApplyState } from "./actions";

const field =
  "w-full rounded-lg border border-line-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-500 focus:border-royal-600 focus:outline-none";
const label = "block text-sm font-medium text-slate-500";

const PARTNER_TYPES = ["Gym / studio", "Personal trainer / coach", "Affiliate / creator", "Clinic / wellness", "Other"];

export default function ApplyForm() {
  const [state, action, pending] = useActionState<ApplyState, FormData>(applyAction, null);

  if (state?.ok) {
    return (
      <div className="rounded-xl2 border border-royal-600/40 bg-white p-8 text-center">
        <p className="font-display text-xl font-bold text-royal-600">Application received.</p>
        <p className="mt-2 text-sm text-slate-500">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Your name</label>
          <input id="name" name="name" required className={`mt-1.5 ${field}`} placeholder="Jordan Avery" />
        </div>
        <div>
          <label className={label} htmlFor="business">Business / brand</label>
          <input id="business" name="business" required className={`mt-1.5 ${field}`} placeholder="Ironplex Gym" />
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className={`mt-1.5 ${field}`} placeholder="you@email.com" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone <span className="text-slate-500">(optional)</span></label>
          <input id="phone" name="phone" className={`mt-1.5 ${field}`} placeholder="(555) 555-5555" />
        </div>
        <div>
          <label className={label} htmlFor="type">What are you?</label>
          <select id="type" name="type" className={`mt-1.5 ${field}`} defaultValue="">
            <option value="" disabled>Choose one…</option>
            {PARTNER_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="audience">Audience / members <span className="text-slate-500">(approx.)</span></label>
          <input id="audience" name="audience" className={`mt-1.5 ${field}`} placeholder="e.g. 1,200 members" />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="note">Tell us about your people <span className="text-slate-500">(optional)</span></label>
        <textarea id="note" name="note" rows={3} className={`mt-1.5 ${field}`} placeholder="Who do you serve, and what do they want?" />
      </div>

      {state?.ok === false ? <p className="text-sm text-gold-700">{state.message}</p> : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-royal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal-700 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Apply to refer"}
      </button>
    </form>
  );
}
