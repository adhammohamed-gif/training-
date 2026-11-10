# OAB & Mirabegron: Guided Training Module

An interactive, chat-style training module on overactive bladder (OAB) and mirabegron. Trainees open a section, read a short summary, then follow ready-made questions and quick checks to work through the whole programme.

**Sections:** Pathophysiology · Epidemiology & burden · Symptoms · Diagnostic tools · Patient journey · Treatment options · EAU guidelines · Mirabegron mechanism & pharmacology · Phase 3 clinical trials · Safety & tolerability · Final knowledge check

## How to view it

**Live site:** https://oab-training.vercel.app (hosted on Vercel; every change pushed to `main` is published automatically within about a minute).

To view locally, open `index.html` in any modern browser. It needs no build step or server and works offline, except for the Google Fonts it loads; if those are blocked, the page falls back to system fonts.

You can link straight to a section with a hash, for example `index.html#trials` or `index.html#tr-beyond`.

## Project structure

```
index.html            Page shell: layout and script/style links only
api/ask.js            "Ask" box: AI answers built only from the module content (Vercel Function)
assets/styles.css     Visual design (colour tokens, light and dark themes)
assets/app.js         Chat behaviour, navigation, search, quizzes, progress
content/modules.js    ALL training content: edit this file for updates
README.md             This file
CHANGELOG.md          Record of content and code changes
```

## Updating content

All text, tables, trial data, quizzes and sources live in `content/modules.js`. Each module is one object:

| Field   | Purpose |
|---------|---------|
| `id`    | Unique slug, also used as the page link (`#id`) |
| `part`  | Sidebar group heading |
| `title` | Sidebar and chip label |
| `intro` | HTML summary shown when the module opens |
| `qa`    | Follow-up questions: `{ id, q, keys, a, tag }` |
| `quiz`  | Quick checks: `{ q, o: [options], c: correctIndex, e: explanation }` |
| `src`   | Sources line shown under the summary |

To add a new trial, add an entry to the `qa` array of the `trials` module, giving it a unique `id` and a short `tag`. It then appears automatically in the sidebar trial list and in search.

After any edit:
1. Open `index.html` locally and click through the changed section.
2. Add a line to `CHANGELOG.md` (date, what changed, reference used).
3. Have medical/regulatory review confirm the change before release.

## AI answers to typed questions

When a trainee types a question, `api/ask.js` sends it with the full module text to an AI model through **Vercel AI Gateway**. The model answers only from that text, keeps figures exactly as written, and returns the section ids it used, which appear as "Source" chips under the answer.

- **Authentication:** the Vercel project's OIDC token is used automatically; no API key is stored. To use an AI Gateway API key instead, add `AI_GATEWAY_API_KEY` in Vercel → Project → Settings → Environment Variables.
- **Model:** defaults to `anthropic/claude-haiku-4.5`. To change it, set `AI_GATEWAY_MODEL` to another model ID from the AI Gateway model list.
- **Cost:** each question sends about 13,000 tokens of training content. AI Gateway's monthly free credit covers light use. Check usage and set a budget in Vercel → AI Gateway.
- **Fallback:** if the AI service is unavailable (out of credit, offline, or the page is opened as a local file), the box falls back to keyword topic search.
- **Updating:** AI answers read `content/modules.js`, so content updates apply to both the guided path and the AI answers.
- **Review:** AI answers can still misstate or omit details. Trainees are told to check key figures in the linked source sections.

## Migrating to a website later

- **Static hosting** (company web server, Netlify, GitHub Pages, SharePoint): upload the folder as-is; `index.html` is the entry point. The guided content works everywhere; the AI answer box needs a server that can run `api/ask.js` (Vercel does this automatically), otherwise it falls back to topic search.
- **LMS (Moodle, Cornerstone, etc.):** zip the folder and upload it as a web package. It is not SCORM-wrapped yet; add a SCORM wrapper if completion tracking in the LMS is required.
- **CMS or app rebuild:** `content/modules.js` is plain structured data and can be converted to JSON or imported into a CMS without touching the design.

Progress and quiz scores are stored in the viewer's own browser (localStorage). They are not shared or sent anywhere. Central tracking would need a backend or an LMS.

## Content status and disclaimer

- Content version 1.0, November 2026.
- Sources: published phase 3 trial reports, pooled analyses, EAU Guidelines on Non-neurogenic Female LUTS (2025 limited update) and Non-neurogenic Male LUTS (2025).
- Dosing, contraindications and interactions are summarised from the EU SmPC. **Check the locally approved (SFDA) prescribing information before use with healthcare professionals.**
- For internal scientific training only. Not promotional material. Requires medical/regulatory review before release.
