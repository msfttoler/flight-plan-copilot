# Facilitator Cheat Sheet

> Quick reference for running the hackathon. Keep this open on your laptop.

---

## Pre-Event Checklist

- [ ] `bash setup.sh` — installs everything, smoke-tests apps
- [ ] `cd hackathon/starter && npm install && npm start` — confirm leaderboard runs on `:3000`
- [ ] Open `hackathon/spectator/big-screen.html` on projector browser
- [ ] Full-screen it (F11) — confirm it shows "No scores yet"
- [ ] Seed demo data: `node hackathon/spectator/seed-scores.js` — confirm board populates
- [ ] Reset for real event: restart the server (data is in-memory, restart = clean slate)
- [ ] Print scorecards: open `hackathon/judging/scorecard.html` in browser, print one per team

---

## API Quick Reference

Base URL: `http://localhost:3000`

### Register Teams

```bash
# Register a team (do this before the hackathon starts)
curl -X POST http://localhost:3000/api/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Bug Squashers", "members": ["Alice", "Bob"], "color": "#e74c3c"}'
```

Suggested team colors: `#e74c3c` (red), `#3498db` (blue), `#2ecc71` (green), `#f39c12` (orange), `#9b59b6` (purple), `#1abc9c` (teal)

### Submit Scores

```bash
# Award points to a team
curl -X POST http://localhost:3000/api/leaderboard/score \
  -H "Content-Type: application/json" \
  -d '{"teamId": 1, "challengeId": "phase1-modernize", "points": 50}'
```

### Check Standings

```bash
# View leaderboard
curl http://localhost:3000/api/leaderboard | python3 -m json.tool

# View all teams
curl http://localhost:3000/api/teams | python3 -m json.tool

# Motivation (Easter egg — show the crowd)
curl http://localhost:3000/api/motivation | python3 -m json.tool
```

### Dashboard

Open `http://localhost:3000` in a browser for the (ugly) dashboard.

---

## Phase Timing

| Phase | Duration | Start Announce | 5-Min Warning | Time's Up |
|-------|----------|---------------|---------------|-----------|
| 1: Rescue | 45 min | "Make it not crash" | "Wrap up modernization" | Score rescue tasks |
| 2: Debug | 45 min | "It runs. It lies." | "Last bugs!" | Score bug fixes |
| *Break* | 15 min | "Stretch. Hydrate." | — | — |
| 3: Features | 60 min | "Make it not boring" | "Polish what you have" | Score features |
| 4: Finals | 30 min | "Make it unbelievable" | "Finish your demo" | Live demos begin |

**Big-screen timer controls:** `Space` = start/pause, `→` = next phase, `←` = prev, `R` = reset

---

## Scoring Quick Guide

Each phase is worth **200 points**. Award in the moment as teams complete tasks.

### Phase 1 Scoring (Rescue — 200 pts)

| Task | Points | How to Verify |
|------|--------|---------------|
| var → const/let | 30 | Glance at code |
| require → ES modules | 40 | Check `import` statements |
| Remove body-parser | 20 | `package.json` check |
| Remove moment | 30 | Native date handling |
| Remove lodash | 30 | No `_.` calls |
| App starts without errors | 50 | `npm start` works |

### Phase 2 Scoring (Debug — 200 pts)

| Bug Fixed | Points |
|-----------|--------|
| Sort order (ascending → descending) | 25 |
| Teams with 0 scores vanishing | 25 |
| String vs number type mismatch (teams) | 20 |
| String vs number type mismatch (scores) | 20 |
| Forward-splice deletion bug | 25 |
| No input validation | 15 |
| Negative/overflow points | 15 |
| Stack trace leak | 20 |
| Mutable state return | 15 |
| Bonus: wrote tests that catch bugs | 20 |

### Phase 3 Scoring (Features — 200 pts)

| Feature | Points |
|---------|--------|
| Auto-refresh (any method) | 30 |
| Team colors displayed | 25 |
| Score submission form | 30 |
| Visual improvements (dark mode, animations, etc.) | 40 |
| Charts or visualizations | 35 |
| Responsive / mobile-friendly | 20 |
| Bonus: tests for new features | 20 |

### Phase 4 Scoring (Finals — 200 pts)

Subjective judging. Use the [scorecard](judging/scorecard.html):

| Criteria | Points |
|----------|--------|
| Wow factor | 50 |
| Technical ambition | 50 |
| Polish and attention to detail | 50 |
| Live demo quality | 50 |

---

## Common Issues & Fixes

| Problem | Fix |
|---------|-----|
| Server won't start | `npm install` first. Check port 3000 isn't in use: `lsof -i :3000` |
| "Cannot find module" | They probably switched to ES modules but didn't update `package.json` with `"type": "module"` |
| Spectator page blank | Server must be running. Check browser console for CORS or fetch errors |
| Scores not updating on big screen | The API sorts ascending (that's a bug!). Spectator page fixes this client-side |
| Teams disappearing | That's Bug #2 — inner join in `getLeaderboard()`. Teams with 0 scores vanish |
| Delete doesn't work | That's Bug #6 — forward-splice. Let them discover it |
| Score attached to wrong team | Type coercion bug — string "1" vs number 1 |

---

## Award Categories

Announce these at the start so teams can strategize:

| Award | For |
|-------|-----|
| **Grand Champion** | Highest total score |
| **Bug Bounty Hunter** | Most bugs found and fixed (with tests) |
| **Best in Show** | Best live demo in Phase 4 |
| **Clean Code Award** | Best code quality and architecture |
| **Crowd Favorite** | Audience vote after Phase 4 demos |
| **Rising Star** | Most improved from Phase 1 to Phase 4 |

---

## Emergency Resets

```bash
# Reset all data (restart the server — data is in-memory)
# Kill the server (Ctrl+C) and restart:
cd hackathon/starter && npm start

# If a team's repo is borked, they can re-clone the starter:
# (from the team's machine)
cp -r hackathon/starter hackathon/starter-backup
# Then restore from the backup if needed
```

---

## Key File Paths (for walking around helping teams)

| What | Where |
|------|-------|
| The sort bug | `hackathon/starter/db.js` → `getLeaderboard()` → `sort` function |
| The type bug | `hackathon/starter/routes/teams.js` → `GET /:id` → `req.params.id` |
| The splice bug | `hackathon/starter/routes/teams.js` → `DELETE /:id` → for loop |
| The validation gap | `hackathon/starter/routes/leaderboard.js` → `POST /score` |
| The stack trace leak | `hackathon/starter/server.js` → error handler at bottom |
| The ugly CSS | `hackathon/starter/public/style.css` — that's the whole thing |
| Dashboard template | `hackathon/starter/views/dashboard.ejs` |

---

*Print this. Tape it to the podium. You've got this.* ✈️
