"use client";

import { useActionState } from "react";
import { contactAction, type ContactState } from "./actions";

const field =
  "w-full rounded-lg border border-line-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-500 focus:border-royal-600 focus:outline-none";
const label = "block text-sm font-medium text-slate-500";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(contactAction, null);

  if (state?.ok) {
    return (
      <div className="rounded-xl2 border border-royal-600/40 bg-white p-8 text-center">
        <p className="font-display text-xl font-bold text-royal-600">Message sent.</p>
        <p className="mt-2 text-sm text-slate-500">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div>
        <label className={label} htmlFor="name">Name</label>
        <input id="name" name="name" required className={`mt-1.5 ${field}`} placeholder="Jordan Avery" />
      </div>
      <div>
        <label className={label} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className={`mt-1.5 ${field}`} placeholder="you@email.com" />
      </div>
      <div>
        <label className={label} htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required className={`mt-1.5 ${field}`} placeholder="How can we help?" />
      </div>
      {state?.ok === false ? <p className="text-sm text-gold-700">{state.message}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-royal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal-700 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
