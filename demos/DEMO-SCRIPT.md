# Demo Script: GitHub Copilot in Action

> **Companion to the [Copilot Workshop](../docs/copilot-workshop/00-overview.md)**
> Pre-built code and step-by-step presenter scripts for three live demos.

---

## What's in the Box

| Demo | Folder | Duration | Highlights |
|------|--------|----------|------------|
| **1 — Legacy Upgrade** | `01-legacy-upgrade/` | 15–20 min | Modernize an Express 4 / CommonJS / `var` / `moment` app to modern Node.js |
| **2 — Web App → Container Apps** | `02-webapp-to-containers/` | 10–15 min | Take a classic Azure App Service web app and containerize it for Container Apps |
| **3 — Quick Wins** | `03-quick-wins/` | 5–10 min each | Bug hunt, test generation, "two-minute wow" flight board |

---

## Pre-Flight Checklist

- [ ] Node.js 18+ installed
- [ ] VS Code with GitHub Copilot extension
- [ ] Docker Desktop (for Demo 2)
- [ ] Run `cd demos/01-legacy-upgrade/legacy-app && npm install` 
- [ ] Run `cd demos/02-webapp-to-containers/webapp && npm install`
- [ ] Test both apps start: `npm start`

---

## Demo 1: Legacy Framework Upgrade

### The Story
> "Here's a flight tracking API that was written a few years ago. It works. But it's full of
> `var`, callbacks, string concatenation, `moment.js`, the deprecated `request` library,
> and has some real bugs. Let's use Copilot to modernize it — live."

### The Code (`01-legacy-upgrade/legacy-app/`)

| File | What's Wrong |
|------|-------------|
| `package.json` | Uses `moment` (deprecated), `request` (deprecated), `body-parser` (now built into Express) |
| `server.js` | All `var`, `require()`, string concatenation, error handler leaks stack traces |
| `routes/flights.js` | `lodash` for operations that are native now, `var`, nested loops, a bug in DELETE |
| `routes/bookings.js` | Nested `for` loops instead of `.find()`, HTML email built with string concatenation |
| `utils.js` | Old-style `module.exports`, `var`, hand-rolled email regex, deeply nested loops |
| `db.js` | Mutable shared state, `var`, old-style exports |

### Script: Walk-Through

#### Step 1: Show the Problem (2 min)
Open `server.js` in VS Code. Scroll through and narrate:
- "Notice `var` everywhere — no `const`/`let`"
- "Using `body-parser` as a separate package — Express 4.16+ has this built in"
- "The error handler sends the full stack trace to the client — security risk"
- "All `require()` — no ES modules"

#### Step 2: Ask Copilot to Assess (3 min)
In Copilot Chat, select all of `server.js` and ask:

```
Review this file and list every modernization opportunity.
Categorize as: security issues, deprecated patterns, performance,
and code style. Don't fix yet — just list them.
```

**What the audience sees:** Copilot produces a clear audit. This is the "Copilot as code reviewer" moment.

#### Step 3: Modernize server.js (4 min)
Ask Copilot:

```
Modernize this Express server:
- Convert require() to ES module imports
- Replace var with const/let
- Remove body-parser (use express.json() instead)
- Use template literals instead of string concatenation
- Fix the error handler to not leak stack traces in production
- Add a proper CORS configuration instead of wildcard
- Replace moment with native Date/Intl
```

Accept the changes. Show the diff. **Key moment:** This took Copilot about 10 seconds.

#### Step 4: Fix the Bug in flights.js (3 min)
Open `routes/flights.js`, select the DELETE handler, and ask:

```
Find the bug in this DELETE handler. Hint: look at how
bookings are removed by index.
```

**The bug:** Forward-iteration splice — removing by index in ascending order shifts subsequent indices, causing some bookings to be skipped.

Let Copilot fix it. Show the audience the fix (reverse iteration or filter).

#### Step 5: Modernize routes/bookings.js (3 min)
Select the entire file. Use inline chat (`Cmd+I`):

```
Modernize this file: replace nested for loops with array methods,
use template literals, convert to ES modules, use const/let.
```

**Wow factor:** The nested loop that joins flights ↔ bookings becomes a clean `.map()` with `.find()`.

#### Step 6: Generate Tests (3 min)
Open `utils.js`, select `calculateDistance`, and type `/tests`:

```
Generate a test suite for calculateDistance using the built-in
Node.js test runner. Include: known airport pairs, unknown airports,
same origin/destination.
```

**Takeaway:** "We just modernized 5 files and added tests in under 15 minutes."

#### Talking Points
- Copilot knows that `moment` is deprecated and suggests native `Intl.DateTimeFormat`
- It spots the `body-parser` redundancy automatically
- The bug fix shows Copilot as a **debugging** partner, not just a code generator
- Test generation from existing code = "tests as documentation"

---

## Demo 2: Web App → Container Apps

### The Story
> "This flight dashboard runs on Azure App Service today — a traditional Node/Express
> web app with server-rendered views. Our team wants to move to Azure Container Apps
> for autoscaling and cheaper idle costs. Let's ask Copilot to help us containerize it."

### The Code (`02-webapp-to-containers/webapp/`)

A clean, working Node.js web app with:
- Express server with EJS templates
- Static file serving
- Health check endpoint
- API endpoints
- An `app-service-config.json` that mimics App Service configuration

**Run it first:** `cd demos/02-webapp-to-containers/webapp && npm install && npm start`
Open `http://localhost:8080` — the audience sees a polished flight dashboard.

### Script: Walk-Through

#### Step 1: Show What We Have (2 min)
- Open the browser → show the running dashboard
- Open `server.js` — "standard Express app, nothing fancy"
- Open `app-service-config.json` — "this is how it's configured on App Service today"

#### Step 2: Generate Dockerfile (3 min)
Open `server.js` and ask Copilot Chat:

```
I need to containerize this Node.js Express app for Azure Container Apps.
Generate a production Dockerfile with:
- Multi-stage build (build + production stages)
- Non-root user for security
- Proper .dockerignore
- Health check instruction
- Optimized layer caching (copy package*.json first)
```

**What Copilot generates:**
- A multi-stage `Dockerfile`
- A `.dockerignore`

Accept both. Show the audience the Dockerfile and explain multi-stage builds.

#### Step 3: Generate docker-compose for Local Dev (2 min)
```
Generate a docker-compose.yml for local development that:
- Builds from the Dockerfile
- Maps port 8080
- Mounts source code as a volume for live reload
- Sets NODE_ENV=development
```

#### Step 4: Build and Run in Docker (2 min)
```bash
docker build -t flight-dashboard .
docker run -p 8080:8080 flight-dashboard
```
Open `http://localhost:8080` — same app, now containerized. ✅

#### Step 5: Generate Container Apps Infrastructure (5 min)
This is the big moment. Ask Copilot:

```
Generate Azure Bicep infrastructure to deploy this containerized app
to Azure Container Apps. Include:
- Container Apps Environment
- Container App with the image from Azure Container Registry
- ACR (Azure Container Registry) resource
- Managed identity for ACR pull
- Ingress configuration (external, port 8080)
- Health probes pointing to /health
- Min 0 / Max 5 replicas with HTTP scaling rule
```

**What Copilot generates:** A complete Bicep file with `containerAppsEnvironment`, `containerApp`, `containerRegistry`, managed identity, and role assignment.

#### Step 6: Show the Migration Diff (2 min)
Narrate what changed:
- **Before:** App Service config, zip deploy, no container
- **After:** Dockerfile, container registry, Container Apps with autoscaling
- **What stayed the same:** The application code — zero changes to `server.js`

#### Talking Points
- "The app code didn't change at all — only the infrastructure around it"
- Copilot generated production-quality Docker patterns (non-root user, multi-stage, health check)
- The Bicep includes security best practices (managed identity, no admin credentials on ACR)
- Container Apps gives us scale-to-zero, which App Service Basic tier can't do

---

## Demo 3: Quick Wins

Three standalone demos you can drop into any part of the workshop.

### 3A: Two-Minute Wow — Flight Departure Board

**When to use:** Module 01 (Opening & First Wow)

1. Create a new empty file `flight-board.html`
2. Type this single comment at the top:

```
// Create a live airport flight departure board with:
// - Retro split-flap display aesthetic (dark background, yellow/green text)
// - Table showing: Flight, Destination, Gate, Time, Status
// - Status badges: On Time (green), Delayed (yellow), Cancelled (red), Boarding (blue)
// - Auto-refresh animation every 5 seconds that "flips" a random status
// - Clock in the header showing current time
// - All in a single HTML file with embedded CSS and JS
```

3. Let Copilot generate the entire file (Tab to accept)
4. Open in browser

**Fallback:** A pre-built version is at `03-quick-wins/flight-board.html`.

---

### 3B: Bug Hunt — Buggy Flight Booking System

**When to use:** Module 05 (Challenge: Bug Hunt)

Open `03-quick-wins/buggy-flights.js`. There are **7 intentional bugs**.

| # | Function | Bug |
|---|----------|-----|
| 1 | `assignBoardingGroup` | Rows 31+ return `undefined` (missing else/default) |
| 2 | `isFlightOnTime` | Uses `=` (assignment) instead of `<=` (comparison) |
| 3 | `duplicateManifest` | Spread creates shallow copy — nested objects are still references |
| 4 | `bookFlight` | Silently drops failures — catch block doesn't re-throw or record errors |
| 5 | `calculateFare` | Off-by-one: `i <= passengers.length` reads past array end |
| 6 | `findAvailableGate` | Returns last empty gate (not first), mutates during iteration |
| 7 | `isSeatAvailable` | Logic is inverted — `true` means occupied, but the function returns it as "available" |

**Demo flow:**
1. Show the file. "There are 7 bugs. Let's see how fast Copilot finds them."
2. Select the whole file → Copilot Chat: `"Find all bugs in this code and explain each one"`
3. Watch Copilot find 6-7 of them in seconds
4. Ask it to fix them: `"Fix all the bugs you found"`
5. Then: `"Generate a test suite that would have caught these bugs"`

---

### 3C: Test Generation — Flight Pricing Engine

**When to use:** Module 06 (Testing & Documentation)

Open `03-quick-wins/pricing-engine.js`.

1. Select `calculateFlightPrice` → type `/tests`
2. Copilot generates tests covering:
   - Normal adult booking
   - Child discount (75% of base)
   - Infant (free)
   - Senior discount (10% off)
   - Business/first class multipliers
   - Checked bag pricing tiers
   - Discount codes (FLY20, EARLYBIRD, COMPANION)
   - Empty passengers array (throws error)
   - Invalid flight data (throws error)

3. Then ask: `"What edge cases are missing from these tests?"` — Copilot suggests:
   - Negative prices
   - Passenger age exactly at thresholds (2, 12, 65)
   - More than 2 bags
   - Unknown discount codes
   - All passengers are infants ($0 total)

4. For docs: Select the function → type `/doc` → get full JSDoc with `@param`, `@returns`, `@throws`, `@example`

---

## Tips for Presenters

### Pacing
- **Demo 1** is the meatiest — use it when the audience is warmed up (around Module 04 or 07)
- **Demo 2** works great in Module 09 (Advanced) or as a standalone Azure-focused session
- **Demo 3** pieces are drop-in replacements for the workshop's built-in challenges

### When Things Go Wrong
- Copilot gives unexpected output? **This is a teaching moment.** Say: "See, this is why we always review. Let me refine the prompt."
- App doesn't start? Pre-cheat: have a terminal with the app already running in the background.
- Docker not installed? Skip the build step; show the generated Dockerfile and explain what it does.

### Customization Ideas
- Swap the flight theme for something relevant to your audience (e.g., an e-commerce catalog, a sports scores board)
- Add your company's naming conventions to a `.github/copilot-instructions.md` and show Copilot follow them
- If doing a Python-focused session, the same legacy-upgrade pattern works with Flask → FastAPI
