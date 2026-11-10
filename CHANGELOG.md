# Changelog

## 2.0.0 (2026-11-10)
- Added a home page linking all trainings; the OAB training moved to `/oab/` (old `/#section` links are forwarded).
- Added three standalone Datroway trainings: HR+/HER2− metastatic breast cancer, first-line metastatic TNBC (not IO candidates) and EGFR-mutated NSCLC, each with 11 sections, quizzes and AI answers.
- Shared engine for all trainings: pages generated from `tools/trainings.json`; AI endpoint answers from the content of the training the question was asked in.
- `content/modules.js` renamed to `content/oab.js`.

## 1.2.0 (2026-11-10)
- AI answers can now use the Claude API directly (`ANTHROPIC_API_KEY`, default model `claude-haiku-5-5`, with prompt caching); Vercel AI Gateway remains the fallback provider.

## 1.1.0 (2026-11-10)
- Added AI answers for typed questions (`api/ask.js`, Vercel AI Gateway): answers draw only on module content, combine sections and link to their sources; falls back to keyword search when unavailable.
- `content/modules.js` now also exports the content for the server function.

## 1.0.1 (2026-11-10)
- Published at https://oab-training.vercel.app via Vercel, auto-deploying from `main`.

## 1.0.0 (2026-11-10)
- First version: 11 sections covering OAB disease background, EAU guidelines, mirabegron pharmacology, 12 phase 3 trial summaries (SCORPIO, ARIES, CAPRICORN, pooled analysis, TAURUS, Japan, Asia, BEYOND, BESIDE, SYNERGY, SYNERGY II, paediatric NDO), supporting studies (PILLAR, DRAGON, BLOSSOM, SYMPHONY, MILAI II), safety and a final assessment.
- Chat-style navigation with follow-up chips, free-text topic search, quick-check quizzes and progress tracking.
- Content separated into `content/modules.js` for easier updates.
