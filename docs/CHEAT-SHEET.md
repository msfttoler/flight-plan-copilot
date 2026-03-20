# Presenter Cheat Sheet

> Print this single page. Every prompt you type during demos, in order.

---

## Opening Wow (2 min)

Create `flight-board.html`, type this comment, let Copilot generate everything:

```
// Create a live airport flight departure board with:
// - Retro split-flap display (dark background, yellow/green text)
// - Table: Flight, Destination, Gate, Time, Status
// - Status badges: On Time (green), Delayed (yellow), Cancelled (red), Boarding (blue)
// - Auto-refresh animation every 5 seconds that "flips" a random status
// - Clock in the header showing current time
// - All in a single HTML file with embedded CSS and JS
```

Open in browser. Done.

---

## Demo 1: Legacy Upgrade

**Open:** `demos/01-legacy-upgrade/legacy-app/server.js`

| Step | What to Do | Prompt to Type |
|------|-----------|----------------|
| 1 | Select all of `server.js` → Chat | `Review this file and list every modernization opportunity. Categorize as: security issues, deprecated patterns, performance, and code style. Don't fix yet — just list them.` |
| 2 | Same file → Chat | `Modernize this Express server: convert require() to ES module imports, replace var with const/let, remove body-parser (use express.json()), use template literals, fix the error handler to not leak stack traces in production, add proper CORS config, replace moment with native Date/Intl.` |
| 3 | Open `routes/flights.js`, select DELETE handler → Chat | `Find the bug in this DELETE handler. Hint: look at how bookings are removed by index.` |
| 4 | Open `routes/bookings.js`, select all → Inline (Cmd+I) | `Modernize: replace nested for loops with array methods, use template literals, convert to ES modules, use const/let.` |
| 5 | Open `utils.js`, select `calculateDistance` | `/tests` |

---

## Demo 2: Containerization

**Open:** `demos/02-webapp-to-containers/webapp/server.js`

| Step | What to Do | Prompt to Type |
|------|-----------|----------------|
| 1 | Show running app at `http://localhost:8080` | *(no prompt — just narrate)* |
| 2 | Chat | `I need to containerize this Node.js Express app for Azure Container Apps. Generate a production Dockerfile with: multi-stage build, non-root user, .dockerignore, health check, optimized layer caching.` |
| 3 | Chat | `Generate a docker-compose.yml for local development: build from Dockerfile, map port 8080, mount source for live reload, set NODE_ENV=development.` |
| 4 | Terminal | `docker build -t flight-dashboard . && docker run -p 8080:8080 flight-dashboard` |
| 5 | Chat | `Generate Azure Bicep to deploy to Container Apps: environment, container app from ACR, ACR resource, managed identity for ACR pull, external ingress on port 8080, health probes to /health, scale 0–5 with HTTP rule.` |

---

## Demo 3: Quick Wins

### Bug Hunt
**Open:** `demos/03-quick-wins/buggy-flights.js`

Select all → Chat:
```
Find all bugs in this code and explain each one.
```
Then:
```
Fix all the bugs you found.
```
Then:
```
Generate a test suite that would have caught these bugs.
```

### Test Generation
**Open:** `demos/03-quick-wins/pricing-engine.js`

Select `calculateFlightPrice` → `/tests`

Then: `What edge cases are missing from these tests?`

Then: Select function → `/doc`

---

## Key Shortcuts to Demo

| Action | Mac | Windows |
|--------|-----|---------|
| Accept suggestion | Tab | Tab |
| Dismiss | Esc | Esc |
| Cycle suggestions | Opt+] / Opt+[ | Alt+] / Alt+[ |
| Inline chat | Cmd+I | Ctrl+I |
| Chat panel | Cmd+Shift+I | Ctrl+Shift+I |

---

## If Something Goes Wrong

- **Copilot gives bad output →** *"See, this is why we always review. Let me refine the prompt."* (Teaching moment!)
- **App won't start →** Have a pre-running terminal in the background as backup.
- **Docker not installed →** Show the generated Dockerfile and talk through it.
- **Copilot is slow →** Fill time: *"While it thinks, let me explain what it's doing…"*
