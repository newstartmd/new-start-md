// Lead / application notifications (server-only).
// ---------------------------------------------------------------------------
// Every captured lead and partner application is recorded FIRST and notified
// SECOND, so a mail hiccup costs a notification, not a lead. This module owns
// the notification. Delivery is env-driven and degrades safely:
//   - CONTACT_WEBHOOK_URL  : POST the JSON payload (Slack/Zapier/n8n/Make).
//   - CONTACT_INBOX        : address to show/record as the destination.
// With neither set, we log server-side and return ok:true so the user still
// gets a clean confirmation and the submission is never dropped.

import "server-only";

export type Notification = {
  kind: "lead" | "partner-application" | "contact";
  subject: string;
  fields: Record<string, string | undefined>;
};

function render(n: Notification): string {
  const lines = [`[New Start MD] ${n.subject}`, ""];
  for (const [k, v] of Object.entries(n.fields)) {
    if (v) lines.push(`${k}: ${v}`);
  }
  return lines.join("\n");
}

export async function notify(n: Notification): Promise<{ ok: boolean }> {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const body = render(n);

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: n.kind, subject: n.subject, text: body, fields: n.fields }),
      });
      return { ok: res.ok };
    } catch {
      // fall through to logging — never throw back to the form handler
    }
  }

  // No transport configured (or webhook failed). Record it so it is recoverable
  // from logs and return ok — the lead is captured, not lost.
  console.info("[new-start-md notify]\n" + body);
  return { ok: true };
}
