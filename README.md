# ✈️ Flight Plan: GitHub Copilot Dev Day

> **"We forgot to build the leaderboard."**
>
> That's the premise. You have 4 hours. Your team's got Copilot.
> The leaderboard you build is the one tracking your score. *No pressure.*

A hackathon-driven workshop where teams learn GitHub Copilot by building — and competing on — the event's own live leaderboard. No death-by-slides. Every Copilot skill is earned under the clock.

---

## The Concept

The event organizers "forgot" to build the hackathon leaderboard. All they have is a terrible Express.js app written by a fictional intern — riddled with bugs, legacy patterns, and questionable life choices. Teams must rescue it, fix it, extend it, and transform it into something spectacular. **The leaderboard they build is the one tracking their own scores.**

```
  ┌──────────────────────────────────────────────────┐
  │  Phase 1: RESCUE        "Make it not crash"       │
  │  Phase 2: DEBUG         "Make it not lie"          │
  │  Phase 3: FEATURES      "Make it not boring"       │
  │  Phase 4: FINALS        "Make it unbelievable"     │
  └──────────────────────────────────────────────────┘
```

Each phase teaches real Copilot skills — ghost text, inline chat, prompt engineering, agent mode, testing — while teams race to earn points on the very board they're fixing.

---

## Repo Structure

```
flight-plan-copilot/
├── hackathon/
│   ├── HACKATHON-GUIDE.md          # Full 4-hour presenter script
│   ├── starter/                    # The intern's code (intentionally terrible)
│   │   ├── server.js               # Express server — var, require, bugs galore
│   │   ├── db.js                   # In-memory data store (mutable, unsorted)
│   │   ├── routes/teams.js         # Team CRUD — type bugs, splice bugs
│   │   ├── routes/leaderboard.js   # Scoring — no validation, type coercion
│   │   ├── views/dashboard.ejs     # HTML — no auto-refresh, no style
│   │   ├── public/style.css        # "Minimum viable styling"
│   │   └── package.json            # moment, lodash, body-parser (all wrong)
│   ├── challenges/                 # Phase-by-phase guides for teams
│   │   ├── phase-1-rescue.md       # Modernize and stabilize
│   │   ├── phase-2-debug.md        # Find and fix the 12+ bugs
│   │   ├── phase-3-features.md     # Add real-time, charts, themes
│   │   └── phase-4-finals.md       # Go wild — animations, sound, AI
│   ├── judging/
│   │   ├── RUBRIC.md               # Scoring breakdown (800 pts total)
│   │   └── scorecard.html          # Printable interactive scorecard
│   └── spectator/
│       ├── big-screen.html         # Projector-ready animated leaderboard
│       └── seed-scores.js          # Populate demo data for testing
├── docs/copilot-workshop/          # Workshop curriculum (14 modules)
├── demos/                          # Standalone Copilot demo suite
│   ├── 01-legacy-upgrade/          # Express modernization demo
│   ├── 02-webapp-to-containers/    # App Service → Container Apps
│   └── 03-quick-wins/              # Bug hunt, test gen, two-minute wow
└── setup.sh                        # One-command setup for everything
```

---

## Quick Start

```bash
# Clone and set up
git clone https://github.com/msfttoler/flight-plan-copilot.git
cd flight-plan-copilot
bash setup.sh

# Start the (broken) leaderboard
cd hackathon/starter
npm install
npm start
# → http://localhost:3000
```

Open in VS Code. Open Copilot Chat. Start fixing things. That's the whole event.

---

## How the Hackathon Works

### Phase 1 — Rescue Mission (45 min, 200 pts)

> *"The code runs… sort of. Your job: make it not crash."*

Teams use Copilot to modernize the intern's code — `var` → `const`/`let`, `require` → ES modules, remove deprecated deps. Copilot skills: **ghost text completions, inline chat, code modernization prompts.**

### Phase 2 — Bug Hunt (45 min, 200 pts)

> *"It runs. It just lies about everything."*

12+ deliberate bugs: ascending sort (last place on top), string/number type mismatches, forward-splice deletion, mutable state leaks, missing validation. Teams use Copilot to find and fix them all. Copilot skills: **`/fix`, targeted prompts, code reasoning.**

### Phase 3 — Feature Build (60 min, 200 pts)

> *"It works. Now make it not boring."*

Add auto-refresh, team color badges, score submission forms, charts, animations, dark/light themes. Copilot skills: **prompt engineering, multi-file edits, agent mode, test generation.**

### Phase 4 — The Finals (30 min, 200 pts)

> *"Make it something you'd be proud to demo."*

Open-ended. Sound effects, confetti, real-time WebSockets, AI-generated team names, particle systems — anything goes. Teams demo live. Copilot skills: **everything.**

### Scoring

| Category | Points | Notes |
|----------|--------|-------|
| Phase 1: Rescue | 200 | Modernization, deps, no crashes |
| Phase 2: Debug | 200 | Bug fixes (verified by tests) |
| Phase 3: Features | 200 | Working features, code quality |
| Phase 4: Finals | 200 | Creativity, polish, wow factor |
| **Total** | **800** | |

**Bonus points** for test coverage, accessibility, documentation, and making the judges laugh.

Full rubric: [`hackathon/judging/RUBRIC.md`](hackathon/judging/RUBRIC.md)

---

## The Bug Catalog (Presenter Reference)

The starter code contains 12+ intentional bugs. Here's the hit list:

| # | File | Bug | Impact |
|---|------|-----|--------|
| 1 | `db.js` | `getLeaderboard()` sorts ascending — last place shows first | Scores are backwards |
| 2 | `db.js` | `getLeaderboard()` uses inner join — teams with 0 scores vanish | New teams invisible |
| 3 | `db.js` | `getTeams()` returns mutable reference — mutations leak | Shared state corruption |
| 4 | `db.js` | `addScore()` uses `new Date().toString()` — inconsistent format | Timestamps look random |
| 5 | `routes/teams.js` | `getTeam(req.params.id)` — string `"1"` vs number `1` | 404 on valid teams |
| 6 | `routes/teams.js` | DELETE forward-splice skips elements | Teams survive deletion |
| 7 | `routes/teams.js` | No input validation on POST | Empty/garbage teams |
| 8 | `routes/leaderboard.js` | `teamId` type coercion — string vs number | Scores attach to ghosts |
| 9 | `routes/leaderboard.js` | No max points validation | Submit 99999 points |
| 10 | `routes/leaderboard.js` | Negative points accepted | Sabotage other teams |
| 11 | `server.js` | Error handler leaks stack traces | Security vulnerability |
| 12 | `server.js` | Uses deprecated `body-parser` | Unnecessary dependency |
| 13 | `dashboard.ejs` | No auto-refresh | Page goes stale |
| 14 | `dashboard.ejs` | Team color never applied | All teams look identical |

---

## Spectator Mode (Big Screen)

Run the animated leaderboard on the venue projector:

1. Start the hackathon server: `cd hackathon/starter && npm start`
2. Open `hackathon/spectator/big-screen.html` in a browser
3. Full-screen it (F11) on the projector

**Features:** Animated score counters, rank-change transitions, phase timer with keyboard controls, confetti on lead changes, live activity feed, auto-refreshes every 3 seconds.

**Keyboard shortcuts:**
| Key | Action |
|-----|--------|
| `Space` | Start/pause phase timer |
| `→` | Next phase |
| `←` | Previous phase |
| `R` | Reset timer |

**Seed demo data** (to test before event):
```bash
cd hackathon/starter && npm start &
node hackathon/spectator/seed-scores.js
```

---

## Workshop Materials

The repo also includes a full instructor curriculum and standalone demo suite, usable independently of the hackathon:

| Resource | Path | Description |
|----------|------|-------------|
| Workshop Curriculum | `docs/copilot-workshop/` | 14 modules from basics to advanced |
| Demo 1: Legacy Upgrade | `demos/01-legacy-upgrade/` | Modernize an Express app live |
| Demo 2: Containerization | `demos/02-webapp-to-containers/` | App Service → Container Apps |
| Demo 3: Quick Wins | `demos/03-quick-wins/` | Bug hunt, test gen, two-minute wow |
| Cheat Sheet | `docs/CHEAT-SHEET.md` | Copilot shortcuts reference |
| Quick Reference | `docs/QUICK-REFERENCE.md` | One-page command guide |

---

## Prerequisites

### Every Participant

- GitHub account with Copilot enabled ([free tier](https://github.com/features/copilot) works)
- VS Code with GitHub Copilot + Copilot Chat extensions
- Node.js 18+ and npm
- Copilot Chat panel opens with `Ctrl+Shift+I` / `Cmd+Shift+I`

### Presenter / Facilitator

- Everything above, plus:
- Large display / projector for spectator mode
- 20pt+ editor font for visibility
- `setup.sh` run before the event
- Read [`hackathon/HACKATHON-GUIDE.md`](hackathon/HACKATHON-GUIDE.md) cover to cover

---

## Setup

```bash
# One command does it all
bash setup.sh
```

This checks tools, installs dependencies for both the hackathon starter and demo apps, and smoke-tests that everything runs.

---

## License

MIT. Use it, fork it, run your own Copilot Dev Day.
