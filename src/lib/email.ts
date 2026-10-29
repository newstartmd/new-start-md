// Lead / application notifications (server-only).
// ---------------------------------------------------------------------------
// Every captured lead, partner application and contact message is delivered
// here. Delivery is env-driven and attempts every configured transport, so a
// submission reaches you by whatever channel is wired — and is never dropped:
//
//   - RESEND_API_KEY     : email the notification via Resend (routed by kind).
//     (Configured in production 2026-10-29: RESEND_API_KEY + NOTIFY_FROM +
//      CONTACT_INBOX are set; newstartmd.com verified in Resend.)
//   - CONTACT_WEBHOOK_URL : POST the JSON payload (Slack / Zapier / n8n / Make).
//   - (neither)           : logged server-side so it stays recoverable.
//
// Destinations (first env that is set wins, else the site defaults):
//   contact            -> CONTACT_INBOX  || SITE.email
//   lead               -> LEADS_INBOX    || CONTACT_INBOX || SITE.email
//   partner-application -> PARTNER_INBOX || SITE.partnerEmail
//
// The user always gets a clean confirmation regardless of transport outcome;
// delivery failures are logged, never thrown back to the form.

import "server-only";
import { SITE } from "@/lib/site";

export type NotificationKind = "lead" | "partner-application" | "contact";

export type Notification = {
  kind: NotificationKind;
  subject: string;
  fields: Record<string, string | undefined>;
};

const FROM = process.env.NOTIFY_FROM ?? `New Start MD <noreply@${hostOf(SITE.url)}>`;

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "newstartmd.com";
  }
}

function destinationFor(kind: NotificationKind): string {
  switch (kind) {
    case "partner-application":
      return process.env.PARTNER_INBOX || SITE.partnerEmail;
    case "lead":
      return process.env.LEADS_INBOX || process.env.CONTACT_INBOX || SITE.email;
    case "contact":
    default:
      return process.env.CONTACT_INBOX || SITE.email;
  }
}

function renderText(n: Notification): string {
  const lines = [`[New Start MD] ${n.subject}`, ""];
  for (const [k, v] of Object.entries(n.fields)) {
    if (v) lines.push(`${k}: ${v}`);
  }
  return lines.join("\n");
}

function renderHtml(n: Notification): string {
  const rows = Object.entries(n.fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#536279;font:600 13px system-ui,sans-serif;vertical-align:top">${escapeHtml(
          k,
        )}</td><td style="padding:4px 0;color:#0a1a33;font:400 13px system-ui,sans-serif">${escapeHtml(
          String(v),
        )}</td></tr>`,
    )
    .join("");
  return `<div style="font:400 14px system-ui,sans-serif;color:#0a1a33"><p style="font:600 15px system-ui,sans-serif;margin:0 0 12px">${escapeHtml(
    n.subject,
  )}</p><table style="border-collapse:collapse">${rows}</table></div>`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
}

async function sendEmail(n: Notification): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const to = destinationFor(n.kind);
  if (!to) return false;
  const replyTo = n.fields.Email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(n.fields.Email) ? n.fields.Email : undefined;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [to],
        subject: `[New Start MD] ${n.subject}`,
        text: renderText(n),
        html: renderHtml(n),
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function sendWebhook(n: Notification): Promise<boolean> {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return false;
  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kind: n.kind, subject: n.subject, text: renderText(n), fields: n.fields }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Deliver a notification over every configured transport. Resolves ok:true if
 * any transport accepted it, or if none is configured (logged fallback) — the
 * form handler never needs to branch on delivery.
 */
export async function notify(n: Notification): Promise<{ ok: boolean; delivered: boolean }> {
  // Run configured transports in parallel; delivered if any succeeds.
  const results = await Promise.all([sendEmail(n), sendWebhook(n)]);
  const delivered = results.some(Boolean);

  if (!delivered) {
    // Nothing configured (or every transport failed). Log so it is recoverable.
    console.info("[new-start-md notify]\n" + renderText(n));
  }
  return { ok: true, delivered };
}
