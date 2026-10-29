# newstartmd.com email — Google Workspace setup runbook

Decision (Michael, 2026-10-29): **separate Google Workspace tenant** for newstartmd.com
(not a secondary domain inside the rothandroth.net firm Workspace). This keeps the
New Start venture and Todd's account cleanly separate from the law firm, with its own
billing and ownership.

Who does what: the tenant creation, seat purchase, alias/group setup, and DKIM key
generation all happen inside **your** Google Workspace admin console (behind your
login, 2FA, and payment), so those steps are yours. The DNS values to paste into
GoDaddy are spelled out exactly below.

---

## 0. What already exists — DO NOT DELETE

newstartmd.com DNS lives in **your GoDaddy** (`domaincontrol.com` nameservers).
These records power the site's outbound form email via **Resend** and must stay:

| Host | Type | Keep because |
|---|---|---|
| `send` | MX → `send.forge.rmta.net` (10 `feedback.forge.rmta.net`) | Resend bounce/Return-Path |
| `send` | TXT `v=spf1 ip4:52.3.252.119 ip4:44.222.39.36 ip4:199.249.231.0/24 ~all` | Resend SPF (subdomain) |
| `resend._domainkey` | TXT `p=MIGf...` | Resend DKIM |

Because Resend sends from the **`send.` subdomain** and Google will send from the
**root domain**, the two never collide. Adding Workspace does not touch Resend, and
the three lead forms keep delivering throughout.

Current state: **root MX is empty** (no mail received today), and a **DMARC record
already exists** at the root: `v=DMARC1; p=quarantine; adkim=r; aspf=r;
rua=mailto:dmarc_rua@onsecureserver.net` (GoDaddy default).

---

## 1. Create the tenant (Google admin console)

1. Go to https://workspace.google.com/ → **Start Free Trial** (or Business Starter,
   ~$7/user/mo). This creates a **new, separate** Workspace account — do not add the
   domain to the rothandroth.net organization.
2. Business name: **New Start MD**. Use `newstartmd.com` as the domain you already own.
3. Create the first admin user: **`mroth@newstartmd.com`**.
4. Google gives you a **domain-verification TXT** record — add it in GoDaddy (step 3),
   then click **Verify**.

## 2. Create the two real mailboxes (seats — billed)

In **admin.google.com → Directory → Users → Add new user**:
- **`mroth@newstartmd.com`** — you (created at signup)
- **`td@newstartmd.com`** — Todd

## 3. Create the role addresses (free — no extra seats)

Aliases on a user, and one Group for the shared partner inbox:

| Address | How | Lands where |
|---|---|---|
| `info@newstartmd.com` | Alias on `mroth@` (Users → mroth → Add alternate email) | you |
| `hello@newstartmd.com` | Alias on `mroth@` | you (the site currently uses `hello@`) |
| `leads@newstartmd.com` | Alias on `mroth@` | you |
| `support@newstartmd.com` | Alias on `mroth@` | you |
| `noreply@newstartmd.com` | Alias on `mroth@` | catches stray replies to the form sender |
| `partners@newstartmd.com` | **Group** (Groups → Create group) with members `mroth@` + `td@` | both of you |
| `security@newstartmd.com` | Alias on `mroth@`, or forward to `security@rothandroth.net` | matches network security contact |

Google allows up to 30 aliases per user, so every role address above is free on top
of the two seats (~$14/mo total).

> Making `partners@newstartmd.com` a real (Group) address **auto-fixes** the /apply
> form: the site already routes partner applications there (`SITE.partnerEmail`), so
> they begin delivering with no code change the moment the Group exists.

## 4. DNS to paste into GoDaddy

GoDaddy → newstartmd.com → **DNS → Manage Zones**. **Add** these; do not remove the
`send.*` or `resend._domainkey` records from section 0.

**A. Receiving (MX).** Root MX is empty, so this is a clean add:

```
Type: MX   Host: @   Points to: smtp.google.com   Priority: 1   TTL: 1 hour
```

(If your GoDaddy UI rejects the single-record form, use Google's classic 5-record set
instead: ASPMX.L.GOOGLE.COM (1), ALT1/ALT2.ASPMX.L.GOOGLE.COM (5),
ALT3/ALT4.ASPMX.L.GOOGLE.COM (10).)

**B. Sending authorization (SPF) at the root.** No root SPF exists today:

```
Type: TXT   Host: @   Value: v=spf1 include:_spf.google.com ~all   TTL: 1 hour
```

**C. DKIM.** In admin.google.com → **Apps → Google Workspace → Gmail → Authenticate
email**, click **Generate new record** (2048-bit). Google gives you a host of
`google._domainkey` and a long `v=DKIM1; k=rsa; p=...` value. Add it in GoDaddy:

```
Type: TXT   Host: google._domainkey   Value: <paste the key Google generated>   TTL: 1 hour
```

Then return to the console and click **Start authentication**.

**D. DMARC.** A record already exists at `p=quarantine`. Once SPF (B) and DKIM (C) are
live, Google-sent mail aligns and passes, so **you can leave it as is**. Optional, to
match the network's centralized reporting: change its `rua` to
`security@rothandroth.net` — this also requires an authorization record published on
the firm domain: at **rothandroth.net** add TXT host `newstartmd.com._report._dmarc`
value `v=DMARC1;`. Do not tighten past `p=quarantine` until DKIM is confirmed on all
resolvers.

## 5. Verify (after ~15–60 min propagation)

- `dig +short MX newstartmd.com` → shows `smtp.google.com`
- Send a test to `info@newstartmd.com` and `partners@newstartmd.com`; confirm receipt.
- Submit the site `/apply` form; confirm it now lands in the partners Group.
- Check Gmail → message → **Show original**: SPF **pass**, DKIM **pass**, DMARC **pass**.

## 6. Optional site follow-ups (code, separate PR)

- Repoint `/contact` + `/start` lead notifications from `mroth@rothandroth.net` to a
  `newstartmd.com` address (env `CONTACT_INBOX` / `LEADS_INBOX`) — optional; current
  routing already works.
- Reconcile `info@` vs the site's current `hello@` (both can be aliases on the same
  box, so no urgency).

---

_Last updated 2026-10-29._
