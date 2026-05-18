# Marketing Analytics — Requirements

## 1. Purpose

Measure whether the SEO and content investments in `tool-pages-seo`,
`seo-blog-engine`, `content-pipeline`, and `lead-magnet-funnel` are working.
Produce decision-grade signal, not vanity metrics.

## 2. Scope

### In scope

- Web analytics (page views, sessions, source/medium, country, device).
- Search performance (impressions, clicks, position) via Search Console.
- Conversion events: tool-action started, tool-action completed,
  lead-magnet form submitted, lead-magnet confirmed, nurture-email click,
  Pro CTA click.
- A/B-test variant tracking (cookie-based; consumed by lead-magnet-funnel).
- Self-hosted-friendly: no third-party JS in `<head>` that would break
  the Lighthouse `third-party:count = 0` budget.

### Out of scope

- Customer Data Platform / CRM integration → handled by `lead-magnet-funnel`.
- Funnel-attribution modeling beyond simple last-touch. Probabilistic /
  Markov / Shapley attribution is a deferred conversation.
- Server-side request logging for SEO purposes (different concern, owned by
  ops).

## 3. User stories

- As an **SEO owner**, I see weekly impressions/clicks/position per URL and
  per query, with a 4-week trend, without logging into Search Console.
- As a **product owner**, I see a funnel: lands on `/tools/merge-pdf` →
  clicks "Open the tool" → completes merge → returns within 7 days.
- As a **GDPR-conscious operator**, the analytics pipeline does not set
  third-party cookies in default mode and respects `Do-Not-Track`.
- As a **developer**, adding a new event takes editing one config file, not
  touching every page.

## 4. Functional requirements

- **FR-1 Analytics tool:** chosen with two constraints: self-hostable (or
  privacy-friendly SaaS like Plausible / Fathom), and zero impact on the
  Lighthouse third-party budget. **Default candidate: Plausible
  self-hosted.** Vendor choice is a TODO input.
- **FR-2 Event taxonomy:** events are namespaced and documented in one place
  (`data/event-taxonomy.json`).
  Examples: `tool.<tool-id>.action_started`, `tool.<tool-id>.action_completed`,
  `magnet.<slug>.form_submitted`, `nurture.email_<n>.clicked`.
- **FR-3 Search Console export:** a scheduled job (daily) pulls Search
  Console data for the canonical host into `reports/search-console.json` so
  it's queryable offline. Job is implementation-dependent (GitHub Action
  using a service-account key, or local cron).
- **FR-4 Privacy compliance:** no PII in events. URLs in events are
  canonicalized (no UTM tracking parameters, no referrer query strings).
- **FR-5 Server-side proxying for sensitive events:** lead-magnet form
  submissions go through `/api/leads` (defined in `lead-magnet-funnel`),
  not directly to a SaaS endpoint, so ESP keys and PII never touch the
  client.
- **FR-6 No `<head>` impact today:** until the analytics tool ships, no
  script tags get added to `index.html` head. This protects Lighthouse.
- **FR-7 A/B variant tracking:** when a user is bucketed into a variant,
  the variant id is stored in a first-party cookie and surfaced as a
  custom property on every event for that user.

## 5. Non-functional requirements

- **NFR-1:** No fabricated data. If a metric source is broken, the report
  shows "no data" not zero.
- **NFR-2:** All events are tested with at least one synthetic firing
  before being claimed to work in production.
- **NFR-3:** All scheduled jobs have a "last successful run" timestamp
  stored in `reports/`. Stale data ages out after 7 days with a warning.

## 6. Success criteria

- Weekly review meeting can answer: which articles drove the most tool
  starts last week? — from a single dashboard or report file.
- Lead-magnet conversion rate (form-submit → confirm) is measured per
  variant.
- A/B test results are decided with confidence intervals, not vibes.

## 7. Inputs needed before tasks ship

- TODO(input): analytics vendor choice (default: Plausible self-hosted).
  Plausible vs. Fathom vs. PostHog vs. self-hosted Matomo trade-offs are
  all viable; the design treats this as deferred.
- TODO(input): Search Console access (verified property + service-account
  credentials).
- TODO(input): privacy / consent banner requirement (depends on jurisdiction
  the production host operates in).
