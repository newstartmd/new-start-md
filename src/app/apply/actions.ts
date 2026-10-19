"use server";

import { readAttribution } from "@/lib/attribution-server";
import { notify } from "@/lib/email";

export type ApplyState = { ok: boolean; message?: string } | null;

export async function applyAction(_prev: ApplyState, formData: FormData): Promise<ApplyState> {
  const name = String(formData.get("name") ?? "").trim();
  const business = String(formData.get("business") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const type = String(formData.get("type") ?? "").trim();
  const audience = String(formData.get("audience") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();

  if (String(formData.get("company") ?? "").length > 0) {
    return { ok: true, message: "Thanks — we'll review and reach out." };
  }
  if (!name || !email || !business) {
    return { ok: false, message: "Please add your name, business, and email." };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { ok: false, message: "That email doesn't look right — please check it." };
  }

  const attribution = await readAttribution();

  await notify({
    kind: "partner-application",
    subject: `Partner application — ${business}`,
    fields: {
      Name: name,
      Business: business,
      Email: email,
      Phone: phone,
      Type: type,
      "Audience size": audience,
      Note: note,
      "Referred by": attribution?.code,
    },
  });

  return { ok: true, message: "Application received. Our partnerships team will reach out shortly." };
}
