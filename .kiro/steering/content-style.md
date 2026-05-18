---
inclusion: fileMatch
fileMatchPattern: "content/**/*.mdx"
---

# Content style — voice, tone, formatting

Distinct from `seo-rules.md`, which covers SEO mechanics. This file is
about how the writing should *feel*. If a piece of copy passes the SEO
checks but reads like marketing fluff, it fails this file.

## Audience

The reader is a privacy-conscious developer, IT admin, or self-hoster.
They:

- Have read three other PDF tutorials before yours and are skeptical.
- Care more about "is this safe" and "do I have to upload my files" than
  about feature lists.
- Already know what a PDF is.

Write for that reader. Don't explain that PDFs are documents.

## Voice

- **Direct.** "To merge PDFs, do X." Not "Have you ever wondered how to
  merge PDFs? In this comprehensive guide…"
- **Specific.** Numbers, file sizes, time estimates, version numbers.
  Not "very fast", "high quality", "powerful".
- **Slightly skeptical of marketing claims, including our own.** If the
  Low compression setting cuts files 30–60%, say that. Don't say
  "dramatically reduces file size."
- **First-person plural sparingly.** "We" is fine for the project. "Our
  AI-powered solution" is not.
- **Active voice.** "Click Merge" not "the Merge button should be clicked."

## What to avoid

- Superlatives without evidence. No "best", "fastest", "most powerful",
  "industry-leading" unless followed by a measurement and a citation.
- Filler openings. No "In today's digital age…" / "In the modern world…"
  / "Did you know that…".
- "Powered by AI." We don't ship AI in the free tier; lying about it
  fails `seo-rules.md` §7 (Honesty).
- Marketing exclamation points. The exclamation budget per article is
  zero unless the tool literally says "Done!" in the UI and you're
  quoting the UI.
- "Easy", "simple", "just". They're either true (in which case the steps
  speak for themselves) or false (in which case you're lying).
- Calling external tools by name to disparage them. Compare on
  measurable axes (price, source, page limit, watermark) — not vibes.
- Em-dashes used as decoration. Use them when a parenthetical earns the
  punctuation, not as a substitute for a comma.

## Structure of a how-to

Every how-to follows this shape (also enforced by `_templates/howto.mdx`):

1. **One-sentence "Short answer"** at the top, in a blockquote, that
   actually answers the title. The reader who only reads this should
   leave knowing the answer.
2. **One paragraph of why this is a problem** — concrete scenario, not
   abstract. ("Three signed contracts and a cover sheet" not
   "various PDF documents".)
3. **What you'll need.** Bullet list. Real prerequisites, not a fake one.
4. **Step-by-step.** Imperative verbs. Numbered. Each step ≤ 2 sentences.
5. **Why this approach** — the tradeoff section. 2–4 sentences.
6. **Common pitfalls.** 3 bullets, each pointing at a real failure mode
   and how to avoid it.
7. **FAQ.** ≥ 5 Q/A in PAA order: what / how / cost / safety / compatibility.
8. **Wrap-up.** One sentence. CTA links to the relevant tool.

If the article doesn't fit this shape, ask whether it's actually a how-to
or whether it's a different content type (comparison, deep-dive, news).
The other types don't have a template yet — write the spec first.

## Headings

- Use sentence case for `##` and below: "How it works", not "How It Works".
- Use Title Case only for `# H1`.
- Headings are commands or questions, not nouns. "Add a watermark" not
  "Watermark addition". "Why scans are not searchable" not
  "Searchability of scans".

## Length

- 700–1500 words for how-to. Below 700 = too thin to rank, above 1500 = padding.
- Sentences average ≤ 22 words. Flesch ≥ 60 (English). Both are checked
  by `validate_articles.py`.
- Paragraphs ≤ 5 sentences. If you have 6, split.

## Code, commands, file paths

- Code in fenced blocks with a language hint, always.
  ` ```bash `, ` ```html `, ` ```json ` — never bare ` ``` `.
- Inline code (single backticks) for paths, identifiers, and exact UI
  labels. "Click **Merge**" — bold for UI verbs and buttons. "Open
  `/tools/merge-pdf`" — backticks for paths.
- File paths and URLs do not get smart quotes around them.

## Links

- Inline tool links go to the actual tool, not the home page. Use the
  link pattern already in the file: `/tools/<slug>` (static) or
  `/index.html#/tool/<id>` (SPA bridge). The SPA bridge is the current
  default; the static path is the future.
- The first inline tool link must appear in the first 200 words.
- Anchor text is the tool name or a verb phrase, never "click here" or
  "learn more".
- Outbound links are rare and earn their place. Default is no.

## Arabic content

When writing in Arabic, also follow `seo-rules.md` §8 (typography rules:
`«»` quotes, `،` and `؟` punctuation, `dir="ltr"` wrapper around code
blocks, parenthetical English gloss for tool names on first mention).
The voice rules above still apply — direct, specific, skeptical of
marketing language. The repo's reference Arabic article is
`content/blog/ar/merge-pdf-majanan.mdx`.

## What gets rejected in review

- Filler openings (see "What to avoid").
- Any superlative without a measurement nearby.
- Any claim about a feature the free tier doesn't actually have.
- Any fabricated user ("Sarah, a freelance designer, was struggling…").
  No personas. The reader is the protagonist.
- An exclamation point.
- An "in today's digital age".
