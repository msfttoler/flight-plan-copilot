# 01 — Opening & First Wow

> ⏱️ 20 minutes | 🎯 Hook the room, set the tone

---

## Talking Points (2 min)

Welcome everyone. Quick logistics:
- Wi-Fi, bathrooms, breaks at the 1-hour and 2-hour marks
- "This is a hands-on session. If your laptop lid is closed, you're doing it wrong."
- Ask for a quick show of hands: "Who has used Copilot before? Who has used it *today*?"

Set expectations:
> "By the end of this session, you'll go from 'that's neat' to 'I can't code without this.' We're going to build real things, break things, and race each other. Let's start with something ridiculous."

---

## 🖥️ DEMO: "Two-Minute App" (8 min)

**Goal:** Build a working app in ~2 minutes using only Copilot. The audience should gasp at least once.

### Option A: Snake Game (Visual, Fun)

Open a brand new file `snake.html`. Type this comment and let Copilot do the rest:

```html
<!-- 
  Complete Snake game with:
  - Canvas-based rendering
  - Arrow key controls
  - Score counter
  - Game over detection and restart
  - Retro green-on-black styling
-->
```

Accept the suggestion. Open in browser. Play it live on the projector.

**Talking point:** "I typed 6 lines of comments. Copilot wrote a complete game. Let's see if I can beat my high score... okay probably not live on stage."

### Option B: CLI Weather Tool (More Developer-y)

```javascript
// weather.js
// CLI tool that takes a city name as argument,
// fetches weather from wttr.in API (no key needed),
// and displays a formatted forecast with emoji
// for temperature, wind, and conditions
```

Run it: `node weather.js Seattle`

**Talking point:** "From comment to working CLI tool. No Stack Overflow. No docs. Just intent."

### Option C: REST API (Enterprise Audience)

```python
# app.py
# FastAPI server with:
# - GET /items - list all items
# - POST /items - create an item (name, price, quantity)
# - GET /items/{id} - get one item
# - DELETE /items/{id} - delete an item
# - In-memory storage, Pydantic models, proper error handling
```

Run it: `pip install fastapi uvicorn && uvicorn app:app --reload`
Hit it: `curl localhost:8000/items`

Pick whichever option fits your audience best. Option A is the most universally impressive.

---

## Talking Points: What Just Happened (5 min)

Walk through what Copilot did:
1. **It read your intent** — the comment described *what*, not *how*
2. **It knew the ecosystem** — correct APIs, correct syntax, correct patterns
3. **It wrote idiomatic code** — not just "working" but "how a human would write it"

Key framing for the day:
> "Copilot is not autocomplete. It's not a search engine. It's a **pair programmer** that has read most of the public code on the internet. Your job today is to learn how to communicate with it effectively."

Acknowledge the elephant in the room:
> "Is it always right? No. We'll see it be wrong today. That's fine — your job is still to be the pilot. Copilot is the copilot. You make the decisions."

---

## Quick Setup Check (5 min)

Have everyone verify their setup:

1. Open VS Code (or their IDE)
2. Open the Copilot Chat panel (Ctrl+Shift+I / Cmd+Shift+I in VS Code, or the chat icon)
3. Type: "Hello, are you there?"
4. If they get a response, they're good

**Troubleshooting on the fly:**
- "I don't see Copilot" → Check extensions, sign in to GitHub
- "It says I don't have access" → Check github.com/settings/copilot
- "I'm using a different IDE" → JetBrains, Neovim, etc. all work; chat features may differ. Pair them with a VS Code user for chat-specific demos.

> "Everyone working? Great. Let's learn how to actually drive this thing."
