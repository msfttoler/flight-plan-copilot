# Copilot Instructions

## Project Context

This is a **workshop + hackathon repo** for "Flight Plan: GitHub Copilot Dev Day."
Participants learn Copilot by building a real hackathon leaderboard/dashboard over
4 hours. The repo contains curriculum docs, hackathon starter code, legacy demo code,
and presenter materials — all flight / dev-event themed.

## Conventions

When generating code in this repo:

- **Theme:** Hackathon leaderboard + airline / flight-tracking domain. Team names,
  scores, challenges, dashboards, flights, passengers, airports.
- **Language:** JavaScript / Node.js. Keep things simple — no TypeScript unless
  the user explicitly asks for it.
- **Style:** Use modern JavaScript (ES modules, `const`/`let`, arrow functions,
  template literals, async/await) for all *new* code. The hackathon starter code
  and legacy-upgrade demo intentionally use old patterns — don't modernize those
  files unless asked.
- **Dependencies:** Prefer zero or minimal dependencies. Use built-in Node.js APIs
  and native browser APIs where possible.
- **Error handling:** Use clear, descriptive error messages. Never expose stack traces
  to end users.

## Hackathon Code

Files under `hackathon/starter/` are **intentionally outdated, buggy, and ugly.**
They use `var`, `require()`, `moment`, `lodash`, `body-parser`, and contain
12+ deliberate bugs. Do NOT fix or modernize them unless the user explicitly asks —
they are the starting point for the hackathon.

## Demo Code

Files under `demos/01-legacy-upgrade/` are **intentionally outdated and buggy.**
Do not fix or modernize them unless the user explicitly asks you to.

Files under `demos/03-quick-wins/buggy-flights.js` contain **intentional bugs.**
Do not fix them unless asked.

## Documentation

Workshop docs in `docs/copilot-workshop/` are instructor-facing Markdown.
The hackathon guide is `hackathon/HACKATHON-GUIDE.md`.
Keep docs concise, scannable, and heavy on code examples. Use tables over prose
where possible.
