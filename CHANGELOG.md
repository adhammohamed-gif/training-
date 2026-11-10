# Changelog

## 1.1.0 (2026-11-10)
- Added AI answers for typed questions (`api/ask.js`, Vercel AI Gateway): answers draw only on module content, combine sections and link to their sources; falls back to keyword search when unavailable.
- `content/modules.js` now also exports the content for the server function.

## 1.0.1 (2026-11-10)
- Published at https://oab-training.vercel.app via Vercel, auto-deploying from `main`.

## 1.0.0 (2026-11-10)
- First version: 11 sections covering OAB disease background, EAU guidelines, mirabegron pharmacology, 12 phase 3 trial summaries (SCORPIO, ARIES, CAPRICORN, pooled analysis, TAURUS, Japan, Asia, BEYOND, BESIDE, SYNERGY, SYNERGY II, paediatric NDO), supporting studies (PILLAR, DRAGON, BLOSSOM, SYMPHONY, MILAI II), safety and a final assessment.
- Chat-style navigation with follow-up chips, free-text topic search, quick-check quizzes and progress tracking.
- Content separated into `content/modules.js` for easier updates.
