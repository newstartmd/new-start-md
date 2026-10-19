"use server";

import { readAttribution } from "@/lib/attribution-server";
import { notify } from "@/lib/email";
import { handoffLeadToGenHealth } from "@/lib/genhealth";

export type StartState = { ok: boolean; message?: string } | null;

export async function startAction(_prev: StartState, formData: FormData): Promise<StartState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const state = String(formData.get("state") ?? "").trim();
  const goal = String(formData.get("goal") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();

  // Honeypot — bots fill hidden fields; humans don't.
  if (String(formData.get("company") ?? "").length > 0) {
    return { ok: true, message: "Thanks — we'll be in touch shortly." };
  }

  if (!name || !email || !goal) {
    return { ok: false, message: "Please add your name, email, and goal." };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { ok: false, message: "That email doesn't look right — please check it." };
  }

  const attribution = await readAttribution();
  const lead = { name, email, phone, state, goal, note, attribution };

  // Record first (notification), then attempt the backend handoff. Neither
  // failing loses the lead — the inbox path always records it.
  await notify({
    kind: "lead",
    subject: `New start request — ${goal}`,
    fields: {
      Name: name,
      Email: email,
      Phone: phone,
      State: state,
      Goal: goal,
      Note: note,
      Partner: attribution?.code,
      Source: attribution?.source,
      Campaign: attribution?.campaign,
    },
  });

  await handoffLeadToGenHealth(lead);

  return { ok: true, message: "Thanks — your request is in. We'll reach out to schedule your visit." };
}
