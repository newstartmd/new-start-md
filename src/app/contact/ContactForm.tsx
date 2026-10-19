"use client";

import { useActionState } from "react";
import { contactAction, type ContactState } from "./actions";

const field =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-bone placeholder:text-muted focus:border-volt focus:outline-none";
const label = "block text-sm font-medium text-bone-soft";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(contactAction, null);

  if (state?.ok) {
    return (
      <div className="rounded-xl2 border border-volt/40 bg-surface p-8 text-center">
        <p className="font-display text-xl font-bold text-volt">Message sent.</p>
        <p className="mt-2 text-sm text-muted">{state.message}</p>
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
      {state?.ok === false ? <p className="text-sm text-ember">{state.message}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-volt px-6 py-3 text-sm font-semibold text-volt-ink transition hover:bg-volt-deep disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
