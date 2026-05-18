# Marketing Analytics — Design

## 1. Architecture

```
              Browser
       │            │
       ▼            ▼
   /api/leads   <analytics endpoint>
       │            │
       ▼            ▼
    ESP          Plausible / etc.
       │            │
       ▼            ▼
   CRM          Reports
       │            │
       └── joined ──┘
                │
                ▼
   reports/marketing-weekly.md
```

## 2. Components

### 2.1 Analytics tool (TBD; default Plausible self-hosted)

Plausible is the default because:
- Single small JS snippet, no third-party cookies.
- Self-hostable on the same infra Stirling-PDF runs on.
- Doesn't break Lighthouse `third-party:count = 0` (when self-hosted on the
  same origin).

Alternatives considered:
- Fathom: similar to Plausible, SaaS-only. Privacy-friendly but cross-origin.
- PostHog: more features, heavier client. Worth it only if product analytics
  matter (event funnels, session recordings).
- Matomo: full-featured but heavier than Plausible.

The decision is deferred; this design treats the analytics endpoint as an
abstraction.

### 2.2 Event taxonomy (`data/event-taxonomy.json`)

A flat list of event definitions, schema:

```json
[
  {
    "name": "tool.merge-pdfs.action_started",
    "description": "User clicked the primary CTA on the merge-pdf landing page",
    "where": "src/routes/tools/merge-pdf.tsx — primary CTA",
    "properties": {
      "variant_id": "string, optional, A/B variant",
      "lang": "en | ar"
    }
  },
  ...
]
```

A script (`.kiro/scripts/audit_events.py`, future) audits that every fired
event has a definition here and that no definition is unused.

### 2.3 Search Console export

A nightly GitHub Action runs a Python script that hits the Search Console API,
fetches the last 28 days of data per URL and per query, and commits the result
to `reports/search-console.json`.

Tradeoff: committing daily-changing data to git produces a lot of churn. Two
mitigations:
- Aggregate to weekly granularity in the committed file, daily granularity in
  a separate gitignored cache.
- Or use GitHub Pages / a reports bucket and skip git entirely.

Default: weekly aggregation, committed. Revisit if the noise is bad.

### 2.4 A/B variant tracking

Cookie name: `stirling_ab` (first-party, `SameSite=Lax`, no domain).
Value: variant id string.
Cookie set on first impression. Read on every event. Sent as a custom event
property.

### 2.5 Server-side lead-magnet proxy

Defined in `lead-magnet-funnel` (§6 Integration). Marketing-analytics consumes
the resulting events: `magnet.<slug>.form_submitted`,
`magnet.<slug>.confirmed`, `nurture.email_<n>.clicked`, `pro_cta.clicked`.

## 3. Privacy

- No third-party cookies.
- No PII in event properties.
- URLs sent to analytics are stripped of UTM parameters and query strings.
- Honor `Do-Not-Track` header (Plausible already does).
- A consent banner is needed only if the production host is in a
  jurisdiction that requires it. TODO(input).

## 4. Reporting

`reports/marketing-weekly.md` — auto-generated from the analytics + Search
Console data. Sections:

- Top 10 URLs by clicks (last 7 days vs. previous 7 days).
- Top 10 queries by impressions (last 7 days vs. previous 7 days).
- Tool starts per article (which articles drove tool starts).
- Lead-magnet conversion: form_submit → confirm by variant.
- Anomalies: any URL that lost > 50 % of clicks week-over-week.

## 5. Open questions

- Whether to collect *any* client-side analytics in this iteration, or wait
  until `tool-pages-seo` ships static pages worth measuring. Default: wait.
- Whether to commit `reports/search-console.json` to git or store separately.
  Default: weekly-aggregated commit; revisit on noise.
