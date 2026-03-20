# Copilot Instructions

## Project Context

This is a **workshop repo** for "Flight Plan: GitHub Copilot Dev Day." It contains
teaching materials, live demo code, and hands-on challenges — all flight-themed.

## Conventions

When generating code in this repo:

- **Theme:** All examples use an airline / flight-tracking domain (flights, bookings,
  passengers, airports, gates, boarding groups). Stay on theme.
- **Language:** JavaScript / Node.js for demos. Keep things simple — no TypeScript
  unless the user explicitly asks for it.
- **Style:** Use modern JavaScript (ES modules, `const`/`let`, arrow functions,
  template literals, async/await) for all *new* code. The legacy-upgrade demo
  intentionally uses old patterns — don't modernize those files unless asked.
- **Dependencies:** Prefer zero or minimal dependencies. Use built-in Node.js APIs
  and native browser APIs where possible.
- **Error handling:** Use clear, descriptive error messages. Never expose stack traces
  to end users.

## Demo Code

Files under `demos/01-legacy-upgrade/` are **intentionally outdated and buggy.**
Do not fix or modernize them unless the user explicitly asks you to — they exist
for live demo purposes.

Files under `demos/03-quick-wins/buggy-flights.js` contain **intentional bugs.**
Do not fix them unless asked.

## Documentation

Workshop docs in `docs/copilot-workshop/` are instructor-facing Markdown.
Keep them concise, scannable, and heavy on code examples. Use tables over prose
where possible.
