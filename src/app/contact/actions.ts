"use server";

import { readAttribution } from "@/lib/attribution-server";
import { notify } from "@/lib/email";

export type ContactState = { ok: boolean; message?: string } | null;

export async function contactAction(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (String(formData.get("company") ?? "").length > 0) {
    return { ok: true, message: "Thanks — we'll be in touch." };
  }
  if (!name || !email || !message) {
    return { ok: false, message: "Please add your name, email, and a message." };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { ok: false, message: "That email doesn't look right — please check it." };
  }

  const attribution = await readAttribution();
  await notify({
    kind: "contact",
    subject: `Contact form — ${name}`,
    fields: { Name: name, Email: email, Message: message, Partner: attribution?.code },
  });

  return { ok: true, message: "Thanks — we'll get back to you soon." };
}
