# Flight Plan: GitHub Copilot Dev Day

> *"From Curious to Dangerous in Four Hours"*

A hands-on, keyboard-first workshop that takes developers from their first encounter with GitHub Copilot to confidently building real applications with AI-assisted development. No death-by-slides — this is live demos, hands-on challenges, and a team showdown.

This repo includes **both** the workshop curriculum **and** a ready-to-run demo suite with pre-built code for live presentations.

---

## Repo Structure

```
flight-plan-copilot/
├── .github/
│   ├── copilot-instructions.md  # Repo-wide Copilot config (flight theme, conventions)
│   └── skills/branch-first/     # Skill: always branch before editing
├── docs/
│   ├── copilot-workshop/        # Workshop curriculum (14 modules)
│   ├── CHEAT-SHEET.md           # Presenter single-page prompt reference
│   └── QUICK-REFERENCE.md       # Participant handout (shortcuts, CRAFT, tips)
├── demos/
│   ├── DEMO-SCRIPT.md           # Master presenter guide
│   ├── 01-legacy-upgrade/       # Express 4 → modern Node.js
│   ├── 02-webapp-to-containers/ # App Service → Azure Container Apps
│   └── 03-quick-wins/           # Bug hunt, test generation, two-minute wow
├── setup.sh                     # One-command environment setup
└── README.md
```

---

## Who Is This For?

Mixed audience — beginners through senior developers. No prior Copilot experience required. All you need is a GitHub account with Copilot enabled (the free tier works) and VS Code (or your preferred IDE).

---

## What You'll Walk Away With

- Fluency in all three Copilot interaction modes (ghost text, inline chat, chat panel)
- A personal prompt engineering toolkit (the CRAFT framework)
- Experience debugging, testing, and documenting code with AI assistance
- Hands-on time building a working application from scratch with Copilot
- Exposure to advanced features: Agent mode, Copilot CLI, custom instructions, and extensions

---

## Session Schedule

The workshop is 4 hours, broken into short teaching blocks followed immediately by hands-on work. Two breaks keep the energy up.

| Time | Section | Format | What Happens |
|------|---------|--------|--------------|
| **0:00** | **Opening & First Wow** | Demo + Talk | The hook — build a complete working app in ~2 minutes using only Copilot comments. Setup check for all attendees. |
| **0:20** | **Copilot Essentials** | Demo + Talk | Learn the three ways to interact: ghost text completions, inline chat, and the chat panel. Key shortcuts and when to use each mode. |
| **0:45** | **Challenge 1: Speed Round** | Hands-on | Five micro-tasks in 10 minutes — FizzBuzz, array deduplication, password validator, date formatter, retry wrapper. First taste of building with Copilot. |
| **1:00** | **Break** | ☕ | |
| **1:10** | **The Art of the Prompt** | Demo + Talk | The core skill. Bad vs. good prompts, context management, iterative refinement, `@workspace`, slash commands, and the CRAFT framework (Context, Role, Attributes, Format, Tests). |
| **1:35** | **Challenge 2: Bug Hunt** | Hands-on | Five buggy functions. Use Copilot to find and fix each one — off-by-one errors, shallow clones, missing assignments. |
| **1:50** | **Testing & Documentation** | Demo | Generate comprehensive test suites with `/tests`, create JSDoc/docstrings with `/doc`, scaffold a full README with `@workspace`. The two things devs hate doing, done in seconds. |
| **2:10** | **Break** | ☕ | |
| **2:20** | **Real-World Build** | Live Coding | Build a complete URL shortener with analytics — from zero to working API — live on stage. Scaffold, core logic, validation, rate limiting, error handling, and tests in 30 minutes. |
| **2:50** | **Challenge 3: Build It** | Hands-on | Pick a project (Markdown CLI, link checker, expense splitter, or quiz engine) and build a working prototype in 18 minutes using everything learned so far. |
| **3:10** | **Copilot Next Level** | Demo + Talk | Advanced features: Copilot CLI for terminal workflows, Agent/Edits mode for multi-file refactors, and custom instructions via `copilot-instructions.md`. |
| **3:35** | **Final Challenge: Showdown** | Team Challenge | Teams of 2–3. Ten minutes. Build the most impressive thing you can. Live demos. The room votes. A winner is crowned. |
| **3:50** | **Wrap-Up & Q&A** | Talk | The five things to remember, resource links, and open Q&A. |

---

## Arc of the Day

```
Hook → Foundation → Craft → Apply → Stretch → Celebrate
 ↑        ↑          ↑       ↑        ↑          ↑
 Wow    Essentials  Prompts  Build   Advanced   Showdown
moment  + basics    + debug  feature  + agent    + prizes
```

The session starts with pure spectacle, then progressively hands the keyboard to the audience. By the end, *they're* the ones building impressive things.

---

## Live Demo Suite

Three pre-built demos with real code you run during the workshop. Each includes intentional problems for Copilot to solve live. Full walk-through scripts are in [`demos/DEMO-SCRIPT.md`](demos/DEMO-SCRIPT.md).

### Demo 1: Legacy Framework Upgrade (15–20 min)

**Folder:** `demos/01-legacy-upgrade/legacy-app/`

A flight tracking REST API written in deliberately outdated JavaScript. The presenter uses Copilot to modernize it live — and the audience watches years of tech debt disappear in minutes.

**What's intentionally wrong:**

| File | Problems |
|------|----------|
| `package.json` | `moment` (deprecated), `request` (deprecated), `body-parser` (redundant since Express 4.16) |
| `server.js` | `var` everywhere, `require()` instead of ES imports, string concatenation, error handler leaks full stack trace to client |
| `routes/flights.js` | `lodash` for native array operations, nested loops, **a real bug** in the DELETE handler (forward-iteration splice skips bookings) |
| `routes/bookings.js` | Nested `for` loops instead of `.find()`, HTML email body built with `+` concatenation, weak random confirmation codes |
| `utils.js` | Hand-rolled email regex (flawed), deeply nested seat-map generation loops, old-style exports |

**What you demo with Copilot:**
1. Select `server.js` → Chat: *"List every modernization opportunity — security, deprecated, performance, style"*
2. Ask Copilot to modernize: ES modules, `const`/`let`, `express.json()`, native `Intl.DateTimeFormat`, fix the stack-trace leak
3. Open the DELETE handler → *"Find the bug"* → Copilot spots the forward-splice issue
4. Select `bookings.js` → Inline chat: modernize nested loops to `.map()` + `.find()`
5. Select `calculateDistance` in `utils.js` → `/tests` → instant test suite

**Talking points:** Copilot knows `moment` is deprecated, spots the `body-parser` redundancy, and finds real bugs when asked. This is Copilot as code reviewer + modernization engine.

---

### Demo 2: Web App → Azure Container Apps (10–15 min)

**Folder:** `demos/02-webapp-to-containers/webapp/`

A working flight dashboard web app (Express + EJS + polished dark-theme CSS) that simulates an Azure App Service deployment. The presenter uses Copilot to containerize it and generate Azure Container Apps infrastructure — without changing a single line of application code.

**What's included:**
- `server.js` — Express server with EJS views, API endpoints, health check
- `views/dashboard.ejs` — Flight status table with status badges
- `public/style.css` — Dark airline-display theme
- `app-service-config.json` — Mimics App Service configuration (runtime, startup command, app settings)

**What you demo with Copilot:**
1. Run the app (`npm start`) → show the dashboard in a browser at `http://localhost:8080`
2. Ask Copilot to generate a production `Dockerfile` (multi-stage build, non-root user, health check, layer caching)
3. Ask for a `.dockerignore` and `docker-compose.yml` for local dev
4. Build and run in Docker → same app, now containerized
5. Ask Copilot to generate Azure Bicep for Container Apps: environment, container app, ACR, managed identity for ACR pull, ingress on port 8080, health probes, scale 0–5 with HTTP rule

**Talking points:** The application code is unchanged — only the infrastructure around it evolves. Copilot generates production Docker patterns and Azure Bicep with security best practices (managed identity, no admin creds on ACR, scale-to-zero).

---

### Demo 3: Quick Wins (5–10 min each)

**Folder:** `demos/03-quick-wins/`

Three standalone demos you can drop into any part of the workshop.

#### 3A: Two-Minute Wow — Flight Departure Board

**Use during:** Module 01 (Opening & First Wow)

Create a new empty file, type one multi-line comment describing a retro airport departure board, and let Copilot generate the entire single-file HTML app — canvas, CSS, and JS. Open in browser for instant "wow."

A pre-built fallback is at `demos/03-quick-wins/flight-board.html` — dark split-flap display with color-coded status badges and live clock.

#### 3B: Bug Hunt — 7 Bugs in Flight Booking Code

**Use during:** Module 05 (Challenge: Bug Hunt)

Open `demos/03-quick-wins/buggy-flights.js`. Seven intentional bugs across flight-themed functions:

| # | Function | Bug |
|---|----------|-----|
| 1 | `assignBoardingGroup` | Rows 31+ return `undefined` — missing default case |
| 2 | `isFlightOnTime` | `=` (assignment) instead of `<=` (comparison) |
| 3 | `duplicateManifest` | Shallow copy — nested objects are still references |
| 4 | `bookFlight` | Catch block silently drops failures |
| 5 | `calculateFare` | `i <= passengers.length` — off-by-one past array end |
| 6 | `findAvailableGate` | Returns last empty gate not first, mutates during iteration |
| 7 | `isSeatAvailable` | Logic inverted — `true` means occupied |

Select the whole file → *"Find all bugs and explain each one"* → Copilot finds 6–7 in seconds. Then: *"Fix them all"* → *"Generate tests that would have caught these."*

#### 3C: Test Generation — Flight Pricing Engine

**Use during:** Module 06 (Testing & Documentation)

Open `demos/03-quick-wins/pricing-engine.js`. A rich `calculateFlightPrice` function with age-based discounts, cabin class multipliers, checked bag tiers, taxes/fees, and discount codes.

1. Select the function → `/tests` → Copilot generates 10-15 tests
2. Ask: *"What edge cases are missing?"* → gets boundary conditions (age exactly 2/12/65, all infants, negative prices, unknown discount codes)
3. Select the function → `/doc` → full JSDoc with `@param`, `@returns`, `@throws`, `@example`

---

## Challenges at a Glance

| # | Challenge | Format | Key Skill Practiced |
|---|-----------|--------|---------------------|
| 1 | **Speed Round** | Solo, 5 micro-tasks | Ghost text, comment-driven development |
| 2 | **Bug Hunt** | Solo, 5 buggy functions | Inline chat, `/fix`, code reasoning |
| 3 | **Build It** | Solo or pair, pick a project | Full workflow — plan, build, test |
| 4 | **Showdown** | Teams of 2–3, open-ended | Everything — most impressive demo wins |

---

## Extra Credit Modules

For groups that finish early or want to go deeper:

| Module | Duration | What It Covers |
|--------|----------|----------------|
| **Copilot CLI** | 15 min | Solve sysadmin and developer tasks using `gh copilot suggest` and `gh copilot explain` — git wizardry, process management, data wrangling. |
| **Build a Copilot Extension** | 20 min | Go from Copilot *user* to Copilot *builder* — create a custom Copilot Extension with the `@github/copilot-sdk` that does AI-powered code reviews with personality. |

---

## Prerequisites & Setup

### Every Attendee

- GitHub account with Copilot enabled ([free tier](https://github.com/features/copilot) works)
- VS Code (recommended) or their preferred IDE with Copilot extension installed
- Copilot Chat panel accessible (Ctrl+Shift+I / Cmd+Shift+I)

**Free tier note:** The free plan includes code completions and limited chat messages per month. Attendees should avoid burning through chat quota before the session.

### Presenter Pre-Flight

- VS Code with Copilot Chat, terminal, Node.js 18+, Python 3.10+
- `gh` CLI with Copilot extension (for CLI demos)
- Docker Desktop (for Demo 2: containerization)
- Projector/screen share, 20pt+ editor font
- Print the [Presenter Cheat Sheet](docs/CHEAT-SHEET.md) — every prompt you'll type, in order
- Share the [Quick Reference Card](docs/QUICK-REFERENCE.md) with attendees at the start

**One-command setup:**
```bash
chmod +x setup.sh && ./setup.sh
```

This checks tools (Node, Docker, gh CLI), installs demo dependencies, and smoke-tests both apps.

**Or manually:**
```bash
cd demos/01-legacy-upgrade/legacy-app && npm install && cd -
cd demos/02-webapp-to-containers/webapp && npm install && cd -
```

---

## The Five Things to Remember

1. **Comments are prompts.** Write what you want before you write how to do it.
2. **Context is king.** Open relevant files. Use `@workspace`. The more Copilot knows, the better it performs.
3. **Iterate, don't one-shot.** Start rough, refine in conversation.
4. **Always review.** Copilot is a draft machine. You are the editor.
5. **It gets better the more you use it.** Day 30 is dramatically better than day 1.

---

## Workshop Materials

All session content lives in [`docs/copilot-workshop/`](docs/copilot-workshop/):

| File | Section |
|------|---------|
| [00-overview.md](docs/copilot-workshop/00-overview.md) | Full agenda, presenter tips, format notes |
| [01-opening-and-first-wow.md](docs/copilot-workshop/01-opening-and-first-wow.md) | Opening demo & setup check |
| [02-copilot-essentials.md](docs/copilot-workshop/02-copilot-essentials.md) | Three interaction modes |
| [03-challenge-speed-round.md](docs/copilot-workshop/03-challenge-speed-round.md) | Challenge 1: Speed Round |
| [04-prompt-engineering.md](docs/copilot-workshop/04-prompt-engineering.md) | The Art of the Prompt & CRAFT framework |
| [05-challenge-bug-hunt.md](docs/copilot-workshop/05-challenge-bug-hunt.md) | Challenge 2: Bug Hunt |
| [06-testing-and-docs.md](docs/copilot-workshop/06-testing-and-docs.md) | Testing & Documentation |
| [07-real-world-build.md](docs/copilot-workshop/07-real-world-build.md) | Real-World Build (URL Shortener) |
| [08-challenge-build-it.md](docs/copilot-workshop/08-challenge-build-it.md) | Challenge 3: Build It |
| [09-advanced-and-future.md](docs/copilot-workshop/09-advanced-and-future.md) | Copilot Next Level (CLI, Agent, Custom Instructions) |
| [10-final-challenge.md](docs/copilot-workshop/10-final-challenge.md) | Final Challenge: Showdown |
| [11-wrap-up.md](docs/copilot-workshop/11-wrap-up.md) | Wrap-Up & Q&A |
| [extra-credit-a-copilot-cli.md](docs/copilot-workshop/extra-credit-a-copilot-cli.md) | Extra Credit: Copilot CLI |
| [extra-credit-b-copilot-sdk.md](docs/copilot-workshop/extra-credit-b-copilot-sdk.md) | Extra Credit: Build a Copilot Extension |

Presenter tools and participant handouts:

| Path | What It Is |
|------|-----------||
| [docs/CHEAT-SHEET.md](docs/CHEAT-SHEET.md) | Single-page presenter reference — every prompt in order |
| [docs/QUICK-REFERENCE.md](docs/QUICK-REFERENCE.md) | Participant handout — shortcuts, CRAFT framework, tips |
| [setup.sh](setup.sh) | One-command environment setup and smoke test |

Demo code and presenter walk-throughs live in [`demos/`](demos/):

| Path | What It Is |
|------|-----------|
| [DEMO-SCRIPT.md](demos/DEMO-SCRIPT.md) | Master presenter guide — step-by-step scripts for all three demos |
| [01-legacy-upgrade/legacy-app/](demos/01-legacy-upgrade/legacy-app/) | Intentionally outdated Express 4 flight tracker API |
| [02-webapp-to-containers/webapp/](demos/02-webapp-to-containers/webapp/) | Flight dashboard web app (App Service style, ready to containerize) |
| [03-quick-wins/buggy-flights.js](demos/03-quick-wins/buggy-flights.js) | 7 intentional bugs for the Bug Hunt demo |
| [03-quick-wins/pricing-engine.js](demos/03-quick-wins/pricing-engine.js) | Flight pricing engine for `/tests` and `/doc` demos |
| [03-quick-wins/flight-board.html](demos/03-quick-wins/flight-board.html) | Retro departure board — two-minute wow fallback |

---

## License

Internal workshop materials. Not for redistribution without permission.
