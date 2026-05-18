# Marketing Analytics — Tasks

Status legend: [ ] todo · [~] in progress · [x] done · [!] blocked

## Phase 1 — Decide the tool

- [!] T1.1 Pick analytics vendor. **Blocked on input** (default: Plausible
  self-hosted).
- [ ] T1.2 Pick consent strategy (banner / no banner / honor-DNT-only).
  Depends on jurisdiction the production host operates in.

## Phase 2 — Event taxonomy

- [ ] T2.1 Create `data/event-taxonomy.json` with the seed events from
  `design.md` §2.2.
- [ ] T2.2 Add `.kiro/scripts/audit_events.py` that walks the codebase for
  event-firing call sites and confirms each is defined in the taxonomy and
  vice versa.

## Phase 3 — Search Console export

- [ ] T3.1 Set up Search Console verified property for the production host.
  Blocked on `technical-seo` T1 (the production host).
- [ ] T3.2 Create a service account, store credentials as a GitHub secret.
- [ ] T3.3 Write the nightly export script. Output:
  `reports/search-console.json`, weekly aggregated.
- [ ] T3.4 Add a GitHub Action `analytics.yml` to run T3.3 on a schedule.

## Phase 4 — Client wiring

- [ ] T4.1 Add the analytics snippet to `index.html` (and to the future
  static pages from `tool-pages-seo`). Self-hosted endpoint, no third-party
  CDN.
- [ ] T4.2 Wire core events: page views, tool action_started,
  tool action_completed.
- [ ] T4.3 Wire A/B variant cookie + property propagation.

## Phase 5 — Lead-magnet integration

Coordinated with `lead-magnet-funnel`:

- [ ] T5.1 Server proxy at `/api/leads` emits server-side events for
  form_submitted and confirmed.
- [ ] T5.2 Nurture email click tracking via redirect-link tokenization.
- [ ] T5.3 Pro CTA click tracking.

## Phase 6 — Reporting

- [ ] T6.1 `reports/marketing-weekly.md` auto-generated from Search Console
  data + analytics export. Manual run first, automated weekly later.
- [ ] T6.2 Anomaly alerts (URLs that lost > 50 % week-over-week).

## Inputs blocking everything

- TODO(input): analytics vendor (default Plausible self-hosted). T1.1.
- TODO(input): production hostname (also blocks `technical-seo` T1).
- TODO(input): consent strategy.
- TODO(input): Search Console property + service account.
