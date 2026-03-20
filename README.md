# Flight Plan: GitHub Copilot Dev Day

> *"From Curious to Dangerous in Four Hours"*

A 4-hour hackathon where participants learn GitHub Copilot by building a real hackathon leaderboard — the one tracking *their own scores*. No slides. No toy examples. You learn by rescuing legacy code, hunting bugs, shipping features, and demoing to the room.

**The Premise:** _"We're running a hackathon today... but we forgot to build the leaderboard. We found some code from last year's intern. Fix it. Improve it. Ship it. Best dashboard wins."_

---

## Repo Structure

```
flight-plan-copilot/
├── hackathon/                         ← THE MAIN EVENT
│   ├── HACKATHON-GUIDE.md             # Presenter master script (full 4-hour walkthrough)
│   ├── starter/                       # Legacy leaderboard code (intentionally terrible)
│   │   ├── package.json               #   Old deps: moment, body-parser, lodash
│   │   ├── server.js                  #   var, require, callbacks, error leak
│   │   ├── db.js                      #   In-memory store, sort bugs, mutable state
│   │   ├── routes/teams.js            #   Team CRUD, type bugs, splice bug
│   │   ├── routes/leaderboard.js      #   Score tracking, no validation
│   │   ├── views/dashboard.ejs        #   Basic table, no refresh, no colors
│   │   └── public/style.css           #   Bare minimum grey styling
│   ├── challenges/                    # Phase guides (one per round)
│   │   ├── phase-1-rescue.md          #   Modernize the legacy code
│   │   ├── phase-2-debug.md           #   Find and fix 12 bugs
│   │   ├── phase-3-features.md        #   Build from a feature menu
│   │   └── phase-4-finals.md          #   Polish, demo, judging
│   └── judging/                       # Scoring materials
│       ├── RUBRIC.md                  #   Detailed criteria per phase
│       └── scorecard.html             #   Printable per-team scorecard
├── demos/                             ← SUPPLEMENTARY DEMOS (original workshop materials)
│   ├── DEMO-SCRIPT.md
│   ├── 01-legacy-upgrade/
│   ├── 02-webapp-to-containers/
│   └── 03-quick-wins/
├── docs/
│   ├── copilot-workshop/              # Workshop curriculum (14 modules)
│   ├── CHEAT-SHEET.md                 # Presenter prompt reference
│   ├── QUICK-REFERENCE.md             # Participant handout
│   ├── quick-reference-card.html      # Full-page graphic reference card
│   ├── quick-reference-3x5.html       # 3×5 index card version
│   ├── quick-reference-4x6.html       # 4×6 print card
│   └── quick-reference-ultimate.html  # Ultra-dense single-page (sticker-ready)
├── .github/
│   ├── copilot-instructions.md        # Repo-wide Copilot behavior config
│   └── skills/branch-first/           # Skill: always branch before editing
├── setup.sh                           # One-command environment setup
└── README.md
```

---

## The Hackathon

### How It Works

Teams of 2-4 receive a broken, legacy Express.js leaderboard app. Over 4 phases, they use GitHub Copilot to rescue, debug, enhance, and ship it. Each phase teaches real Copilot skills while earning points on the very dashboard they're building.

### The Schedule

| Time | Phase | Duration | What Happens |
|------|-------|----------|--------------|
| 0:00 | **Opening** | 10 min | Welcome, the "oh no" reveal, team formation |
| 0:10 | **Copilot 101** | 15 min | Crash course: ghost text, inline chat, chat panel |
| 0:25 | **Phase 1 — Rescue** | 25 min | Modernize legacy code: var→const, require→import, kill moment/lodash/body-parser |
| 0:50 | **Scoring + Break** | 10 min | Score Phase 1 |
| 1:00 | **Prompt Engineering** | 15 min | CRAFT framework, slash commands, bad vs good prompts |
| 1:15 | **Phase 2 — Bug Hunt** | 30 min | Find and fix 12 bugs hiding in the leaderboard |
| 1:45 | **Scoring + Break** | 15 min | Score Phase 2 |
| 2:00 | **Feature Demo** | 10 min | Show what's possible — add auto-refresh in 30 seconds |
| 2:10 | **Phase 3 — Feature Frenzy** | 40 min | Build features from a tiered menu (20+ options) |
| 2:50 | **Scoring + Break** | 10 min | Score Phase 3 |
| 3:00 | **Advanced Tips** | 10 min | Copilot CLI, agent mode, custom instructions |
| 3:10 | **Phase 4 — Final Polish** | 15 min | Last touches before demos |
| 3:25 | **Demo Showcase** | 20 min | Each team demos their dashboard (2 min each) |
| 3:45 | **Voting + Awards** | 10 min | Audience votes, winner crowned |
| 3:55 | **Wrap-Up** | 5 min | Five things to remember |

### The Scoring

| Phase | Max Points | What's Measured |
|-------|-----------|-----------------|
| Phase 1 — Rescue | 100 | Code modernized, server runs, deps removed |
| Phase 2 — Bug Hunt | 150 | Bugs found and fixed (12 bugs total) |
| Phase 3 — Features | 200 | Features built from the menu (tiered points) |
| Phase 4 — Final Boss | 250 | Demo quality, code quality, audience vote, bonuses |
| **Grand Total** | **700** | + up to 140 bonus points |

### The Awards

| Award | For |
|-------|-----|
| 🏆 **Grand Champion** | Highest total score |
| 🎨 **Best Design** | Prettiest dashboard |
| 🐛 **Bug Slayer** | Most Phase 2 points |
| 🚀 **Feature Machine** | Most Phase 3 features |
| 💡 **Most Creative** | Wildest idea that actually worked |
| 🤝 **Team Player** | Helped other teams the most |

---

## The Starter Code

The `hackathon/starter/` directory is an Express.js leaderboard app written in deliberately outdated, buggy JavaScript. It:

- Uses `var`, `require()`, callbacks (not `const`/`let`, `import`, `async/await`)
- Depends on `moment` (deprecated), `body-parser` (redundant), `lodash` (unnecessary)
- Contains **12 intentional bugs** including wrong sort order, type mismatches, mutable shared state, missing validation, forward-splice during iteration, stack trace leaks
- Has a bare-minimum grey stylesheet with no dark mode, no animations, no team colors
- Shows only 3 of 6 teams (the join is broken)
- Never auto-refreshes
- Has no score submission UI (judges have to use `curl`)

**This is the canvas.** Teams transform it into something worth putting on the big screen.

### Quick Start

```bash
cd hackathon/starter
npm install
node server.js
# Open http://localhost:3000
```

---

## The Bug Catalog (Presenter Reference)

| # | Bug | File | Fix |
|---|-----|------|-----|
| 1 | Sort ascending (lowest first) | `db.js`, `server.js` | `b.totalScore - a.totalScore` |
| 2 | Teams 4-6 missing from dashboard | `server.js` root route | Use `db.getLeaderboard()` or fix the join |
| 3 | `GET /api/teams/1` returns 404 | `routes/teams.js` | `parseInt(req.params.id)` |
| 4 | `GET /api/leaderboard/team/1` empty | `routes/leaderboard.js` | `parseInt(req.params.teamId)` |
| 5 | Score POST type mismatch | `routes/leaderboard.js` | Parse teamId to number |
| 6 | Accepts 99999 pts for a 100-pt challenge | `routes/leaderboard.js` | Validate `points <= challenge.maxPoints` |
| 7 | lastUpdated shows wrong timestamp | `db.js` | Take most recent, not first |
| 8 | Delete forward-splice skips entries | `routes/teams.js` | Use `findIndex` + single splice |
| 9 | `getTeams()` returns mutable reference | `db.js` | Return a copy |
| 10 | Dashboard never refreshes | `views/dashboard.ejs` | Add meta-refresh or JS polling |
| 11 | Team colors not displayed | `views/dashboard.ejs` | Apply color as style |
| 12 | Error handler leaks stack traces | `server.js` | Conditional on NODE_ENV |

---

## Prerequisites

### Every Participant
- GitHub account with Copilot enabled ([free tier](https://github.com/features/copilot) works)
- VS Code with the GitHub Copilot extension
- Node.js 18+

### Presenter
- All of the above, plus:
- Print scorecards: `hackathon/judging/scorecard.html` (one per team)
- Print or project phase guides: `hackathon/challenges/phase-*.md`
- Read the full presenter script: `hackathon/HACKATHON-GUIDE.md`
- Test the starter code: `cd hackathon/starter && npm install && node server.js`

---

## The Five Things to Remember

1. **Copilot is a multiplier, not a replacement** — you made every decision today
2. **Prompt quality = output quality** — CRAFT works (Context, Role, Attributes, Format, Tests)
3. **Start rough, iterate fast** — don't agonize over the first prompt
4. **Context is king** — open files, comments, custom instructions all feed Copilot
5. **You built a full-stack app in 4 hours** — with a tool that's getting better every month

---

## Workshop Materials

### Hackathon (Primary)

| Path | What It Is |
|------|-----------|
| [HACKATHON-GUIDE.md](hackathon/HACKATHON-GUIDE.md) | Presenter master script — full 4-hour walkthrough with talking points |
| [phase-1-rescue.md](hackathon/challenges/phase-1-rescue.md) | Phase 1 guide — modernize the legacy code |
| [phase-2-debug.md](hackathon/challenges/phase-2-debug.md) | Phase 2 guide — find and fix 12 bugs |
| [phase-3-features.md](hackathon/challenges/phase-3-features.md) | Phase 3 guide — build features from tiered menu |
| [phase-4-finals.md](hackathon/challenges/phase-4-finals.md) | Phase 4 guide — polish, demo, judging |
| [RUBRIC.md](hackathon/judging/RUBRIC.md) | Detailed judging criteria per phase |
| [scorecard.html](hackathon/judging/scorecard.html) | Printable per-team scorecard |

### Participant Handouts

| Path | What It Is |
|------|-----------|
| [QUICK-REFERENCE.md](docs/QUICK-REFERENCE.md) | Copilot shortcuts, CRAFT framework, tips |
| [quick-reference-ultimate.html](docs/quick-reference-ultimate.html) | Ultra-dense single-page print card (~80 items) |
| [quick-reference-4x6.html](docs/quick-reference-4x6.html) | 4×6 print card |
| [quick-reference-3x5.html](docs/quick-reference-3x5.html) | 3×5 index card |
| [quick-reference-card.html](docs/quick-reference-card.html) | Full-page graphic (great for screen share) |

### Supplementary Demo Materials

The original workshop demos are still available for standalone use or as presenter references:

| Path | What It Is |
|------|-----------|
| [DEMO-SCRIPT.md](demos/DEMO-SCRIPT.md) | Demo presenter guide |
| [01-legacy-upgrade/](demos/01-legacy-upgrade/legacy-app/) | Legacy Express 4 flight tracker API |
| [02-webapp-to-containers/](demos/02-webapp-to-containers/webapp/) | Flight dashboard → Container Apps |
| [03-quick-wins/](demos/03-quick-wins/) | Bug hunt, pricing engine, departure board |

### Curriculum Reference

Full workshop curriculum (14 modules) in [`docs/copilot-workshop/`](docs/copilot-workshop/) — covers Copilot essentials, prompt engineering, testing, documentation, and advanced features in detail.

---

## License

Internal workshop materials. Not for redistribution without permission.
