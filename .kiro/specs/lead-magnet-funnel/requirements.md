# Lead-Magnet Funnel — Requirements

## 1. Purpose

Convert anonymous Stirling-PDF tool-page visitors into opted-in email leads
who can be nurtured toward Pro features, the desktop app, or the API. See
`design.md` for the funnel architecture; this file is the requirements
contract that justifies it.

## 2. Scope

### In scope

- A single lead magnet (one to start; "PDF Power Pack" is the default
  candidate).
- Inline + exit-intent CTAs on tool and article pages.
- Dedicated landing page for paid traffic.
- Email-capture form, double-opt-in, asset delivery via signed URL.
- 5-email nurture sequence over 14 days.
- A/B variant infrastructure.
- Server-side proxy at `/api/leads` so ESP keys never touch the client.
- Right-to-erasure honoring (GDPR).

### Out of scope

- Paid acquisition / ad spend planning.
- The Pro / desktop / API conversion *page* itself — handled by the
  existing Stirling-PDF Pro flow.
- Customer-data-platform integration → `marketing-analytics`.

## 3. User stories

- As a **visitor on a tool page**, I see a non-intrusive offer for a useful
  asset, give my email, and receive the asset within minutes.
- As an **operator**, I never see ESP keys in the client bundle.
- As an **EU visitor**, I'm given a clear consent step (double-opt-in) before
  I receive any nurture email.
- As a **subscriber who unsubscribes**, my data is fully removed from our
  system within the time window required by GDPR (30 days).

## 4. Functional requirements

- **FR-1 Single magnet:** one lead magnet at launch (LM-A "PDF Power Pack"
  per `design.md`). Multiple magnets are deferred.
- **FR-2 Surfaces:** inline CTA on tool + article pages; exit-intent
  modal (desktop) / scroll-50 % (mobile) on the same surfaces; dedicated
  landing page for paid traffic.
- **FR-3 Form fields:** email (required), first name (optional), explicit
  consent checkbox (unchecked by default), honeypot, time-trap.
- **FR-4 Server proxy:** `/api/leads` validates and forwards to ESP. ESP
  keys live only on the server.
- **FR-5 Double opt-in:** every signup requires email confirmation before
  the asset is delivered.
- **FR-6 Asset delivery:** signed URL with 24 h expiry. Backup link on the
  on-site confirmation page.
- **FR-7 Nurture sequence:** 5 emails over 14 days (Day 0/2/5/9/14). Each
  email has one CTA. Final email is the soft Pro pitch.
- **FR-8 A/B testing:** at minimum, headline + CTA copy variants. Variant
  id stored in first-party cookie at first impression, propagated to ESP
  custom field.
- **FR-9 Right-to-erasure:** ESP unsubscribe webhook triggers full deletion
  in our system.
- **FR-10 Rate limiting:** `/api/leads` enforces 5/min/IP and 20/hour/IP.
- **FR-11 Captcha:** reCAPTCHA v3 or hCaptcha on the form.

## 5. Non-functional requirements

- **NFR-1:** No PII in client-side analytics events (per
  `marketing-analytics`).
- **NFR-2:** Form submission has graceful failure: if ESP is down, queue and
  retry; user sees a successful confirmation if email is syntactically
  valid (FR-12 below).
- **NFR-3:** Performance: form widget adds ≤ 5 KB JS to a tool page. No
  heavy modal libraries.
- **NFR-4:** Accessibility: form is keyboard-navigable, error messages are
  associated with inputs via `aria-describedby`, modal traps focus.

- **FR-12 (NFR-leaning) Resilient submit:** the proxy queues failed
  forwards and retries; user-facing success is shown as long as the email
  is syntactically valid.

## 6. Success criteria

- Form submission rate ≥ 2 % of tool-page visitors.
- Confirmation rate (form → confirm) ≥ 50 %.
- Day-14 click-through on the Pro pitch ≥ 5 % among confirmed subscribers.
- Right-to-erasure SLA: deletion completes within 30 days of unsubscribe.

## 7. Risks & assumptions

- **Risk:** ESP vendor lock-in. Mitigation: the proxy abstracts the ESP
  behind an interface; switching is a config change, not a rewrite.
- **Risk:** Bot signups poison the list. Mitigation: captcha + honeypot +
  time-trap + double-opt-in. All four required.
- **Risk:** Asset hosting cost grows with subscribers. Mitigation: signed
  URLs from object storage, not direct downloads from origin.
- **Assumption:** A single lead magnet is enough to test the funnel
  hypothesis. Multiple magnets would dilute signal at this stage.

## 8. Inputs needed before tasks ship

- TODO(input): ESP vendor choice (ConvertKit / Mailchimp / Resend+DB).
- TODO(input): asset hosting (in-repo for v1 < 5 MB, object storage > 5 MB).
- TODO(input): legal review of consent copy for GDPR-applicable jurisdictions.
- TODO(input): production hostname (for asset-URL signing and email links).
