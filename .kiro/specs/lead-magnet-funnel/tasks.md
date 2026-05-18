# Lead-Magnet Funnel — Tasks

Status legend: [ ] todo · [~] in progress · [x] done · [!] blocked

## Phase 1 — Decisions

- [!] T1.1 Pick ESP vendor. **Blocked on input.**
- [!] T1.2 Pick asset hosting (in-repo vs. object storage).
- [ ] T1.3 Pick the single launch lead magnet. Default per `design.md`:
  LM-A "PDF Power Pack".

## Phase 2 — Asset production

- [ ] T2.1 Write the asset (cheat-sheet PDF + 10 templates ZIP).
- [ ] T2.2 Set up signed-URL delivery from chosen storage.

## Phase 3 — Server proxy

- [ ] T3.1 Implement `/api/leads` (server-side; not part of this static
  frontend repo — coordinate with backend).
- [ ] T3.2 ESP integration behind an interface so vendor swaps are config
  changes.
- [ ] T3.3 Rate-limit + captcha + honeypot + time-trap.
- [ ] T3.4 Right-to-erasure webhook handler.

## Phase 4 — Form widget

- [ ] T4.1 Inline CTA component, ≤ 5 KB JS.
- [ ] T4.2 Exit-intent / scroll-50 % modal trigger.
- [ ] T4.3 Dedicated landing page route at `/lead-magnet/<slug>/`.
- [ ] T4.4 Accessibility: keyboard-nav, focus trap, ARIA labels.

## Phase 5 — Email sequence

- [ ] T5.1 Day-0 deliver email.
- [ ] T5.2 Day-2 / Day-5 / Day-9 / Day-14 nurture emails.
- [ ] T5.3 Click tracking via redirect tokens (consumed by
  `marketing-analytics`).

## Phase 6 — A/B infrastructure

- [ ] T6.1 First-party `stirling_ab` cookie set at first impression.
- [ ] T6.2 Variant id propagated to ESP custom field.
- [ ] T6.3 Minimum two variants for headline + CTA copy.

## Phase 7 — Compliance & monitoring

- [ ] T7.1 Consent copy reviewed (TODO input: legal review).
- [ ] T7.2 Privacy page updated to mention the magnet flow.
- [ ] T7.3 Daily monitoring: unusual signup rates, captcha failure rates.

## Inputs blocking everything

- TODO(input): ESP vendor.
- TODO(input): asset hosting.
- TODO(input): legal review of consent copy.
- TODO(input): production hostname (also blocks `technical-seo` T1).
