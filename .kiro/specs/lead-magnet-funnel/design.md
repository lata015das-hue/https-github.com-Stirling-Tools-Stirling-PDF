# Lead-Magnet Funnel — Design

## 1. Goal
Convert anonymous visitors landing on Stirling-PDF tool pages into opted-in leads by offering a high-utility, PDF-related lead magnet, then nurture them toward the paid/Pro features tier.

## 2. Funnel Stages

```
Awareness (SEO landing / tool page)
        │
        ▼
Lead magnet CTA  ───►  Email capture form  ───►  Confirmation page
        │                       │                         │
        │                       ▼                         ▼
        │             ESP webhook (double opt-in)   Asset delivery (signed URL)
        │                       │
        ▼                       ▼
Nurture sequence (5 emails)  ───►  Soft pitch (Pro / desktop / API)
                                          │
                                          ▼
                                Conversion event → CRM
```

## 3. Lead Magnets (v1 candidates)
- LM-A "PDF Power Pack": cheat-sheet PDF + ZIP of 10 ready-made PDF templates (invoice, NDA, resume, etc.).
- LM-B "Secure PDF Checklist": one-page checklist + redaction/signing how-to.
- LM-C "OCR Quick Start": step-by-step OCR guide using the OCR PDF tool, multi-language.

Pick **one** for v1 (recommendation: LM-A — broadest appeal, ties to most tools).

## 4. UX / Surfaces

### 4.1 Inline CTA on tool pages
- Slot below the tool's primary action.
- Headline ≤ 60 chars, sub ≤ 120 chars, single email field, one button.
- Persistent (not a popup).

### 4.2 Exit-intent modal (desktop) / scroll-50% (mobile)
- Same form, dismissable, 1 cookie-day suppression after dismiss.
- Disabled on category hubs and home — only on tool + article pages.

### 4.3 Dedicated landing page `/lead-magnet/<slug>.html`
- For paid/social traffic.
- Hero, 3 benefits, social proof, form, FAQ.

## 5. Form & Consent
- Fields: email (required), first name (optional).
- Honeypot field + time-trap (form must be visible ≥ 2s before submit).
- Explicit consent checkbox: "Email me the asset and occasional PDF tips. Unsubscribe anytime." — required, unchecked by default.
- GDPR: store consent timestamp, IP, source URL, lead-magnet id.

## 6. Integration
- ESP: pluggable. v1 target = one of {ConvertKit, Mailchimp, Resend+DB}. Decision deferred; design behind an interface.
- Submission flow:
  1. Frontend POST to `/api/leads` (thin proxy) — keeps ESP keys server-side.
  2. Proxy validates + forwards to ESP API to create subscriber + tag.
  3. ESP triggers double opt-in email.
  4. On confirm, ESP webhook → our `/api/leads/confirmed` → issues signed download URL (expires in 24h) and emits to CRM.
- No ESP keys in client code. No PII written to `localStorage`.

## 7. Asset Delivery
- Static asset hosted in the repo or object storage.
- Delivery via short-lived signed URL embedded in the confirmation email.
- Backup link on the on-site confirmation page.

## 8. Nurture Sequence (5 emails over 14 days)
1. Day 0 — Deliver asset + 1 quick win.
2. Day 2 — Tutorial: most-loved free tool (e.g., Merge PDFs) with link.
3. Day 5 — Security how-to (Add Password / Auto Redact).
4. Day 9 — Power-user post (OCR, Compress, Sanitize).
5. Day 14 — Soft pitch: Pro / desktop / API; clear single CTA.
- Each email: one CTA, plain-text-friendly HTML, unsubscribe footer.

## 9. Tracking
- Events: `lead_magnet_view`, `lead_magnet_submit`, `lead_magnet_confirm`, `lead_magnet_download`, `nurture_click_<n>`, `pro_cta_click`.
- Send to analytics (vendor TBD) with `source_page`, `lead_magnet_id`, `variant_id`.
- UTM passthrough preserved through the form into ESP custom fields.

## 10. A/B Testing Hooks
- Variant id stored in a first-party cookie at first impression.
- Variants for v1: headline (2), CTA copy (2), placement (inline vs exit-intent).
- Decision rule: keep variant if ≥ 95% confidence and ≥ 500 submissions; otherwise extend.

## 11. Compliance & Abuse
- reCAPTCHA v3 (or hCaptcha) on the form, score threshold tunable.
- Rate-limit `/api/leads` by IP (e.g., 5/min, 20/hour).
- Disposable-email blocklist on the proxy.
- Right-to-erasure: webhook from ESP when user unsubscribes/deletes — we drop CRM record.

## 12. Failure Modes
- ESP down → proxy queues submission (durable store) and retries; user still sees success state if email is syntactically valid.
- Signed URL expired → confirmation page offers "Resend" which re-issues a new signed URL.
- Bot flood → captcha threshold tightens automatically based on hourly anomaly.

## 13. Out of Scope (v1)
- SMS capture.
- Multi-language nurture (English only at launch).
- In-app paywall / billing — handled by the existing Stirling-PDF Pro flow.

## 14. Open Questions
- ESP vendor lock-in — decide before T2 of the build plan.
- Will the asset be hosted in this repo (small) or external storage (preferred for >5MB)?
- Do we gate the magnet behind double opt-in everywhere, or single opt-in for non-EU traffic? (Default: double opt-in everywhere for simplicity.)
