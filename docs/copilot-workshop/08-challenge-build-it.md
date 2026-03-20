# 08 — Challenge 3: Build It

> ⏱️ 20 minutes | 🔨 Build a working mini-app from requirements

---

## Setup (2 min)

> "Pick ONE of these projects. You have 18 minutes. The goal isn't perfection — it's a working prototype. Use everything you've learned: comments as prompts, chat for planning, ghost text for speed, `/tests` for tests."

> "Work solo or pair up — your call. If you pair up, one person drives, one person prompts."

---

## Pick Your Project

### Option A: Markdown Note-Taking CLI 📝

Build a command-line tool that:
- `notes add "my note here"` — saves a timestamped note to a JSON file
- `notes list` — shows all notes, most recent first
- `notes search "keyword"` — searches notes by content
- `notes delete <id>` — removes a note
- Notes persist in `~/.notes.json`

**Stretch goal:** Add tags (`notes add "deploy fix" --tags bug,deploy`) and filter by tag.

### Option B: Link Health Checker 🔗

Build a tool that:
- Takes a URL as input
- Fetches the page and extracts all links
- Checks each link (is it alive? redirect? broken?)
- Outputs a color-coded report: ✅ 200, 🔀 redirect, ❌ broken
- Handles timeouts gracefully

**Stretch goal:** Accept a `--recursive` flag to crawl one level deep.

### Option C: Expense Splitter API 💰

Build a REST API that:
- POST /groups — create a group of people
- POST /groups/:id/expenses — add an expense (who paid, amount, split between whom)
- GET /groups/:id/balances — show who owes whom and how much
- Calculate minimum number of transactions to settle up

**Stretch goal:** Support uneven splits (percentages or exact amounts).

### Option D: Quiz Game Engine 🎮

Build an interactive quiz that:
- Reads questions from a JSON file (generate the questions with Copilot too)
- Presents multiple-choice questions one at a time
- Tracks score and time per question
- Shows a summary at the end with correct/incorrect breakdown
- Works in the terminal (no browser needed)

**Stretch goal:** Add difficulty levels and a high score leaderboard (file-based).

---

## Tips for Participants

1. **Start in chat:** "I want to build [project]. Give me the project structure and main file."
2. **Build incrementally:** Get the basic version working first, then add features.
3. **Use `/tests` at the end:** Generate tests for the core logic before time runs out.
4. **If stuck, ask Copilot:** "I'm trying to [goal] but I'm getting [error]. Here's my code: [paste]. What's wrong?"

---

## Debrief (3 min)

> "Time! Who's got something working? Let's see some demos."

Pick 2-3 volunteers to screen-share their app for 60 seconds each. Ask:
- "What project did you pick?"
- "Show it working"
- "What was the hardest part?"
- "What Copilot trick saved you the most time?"

**Celebrate all of them.** The point isn't polish — it's velocity.

> "Look around the room. Everyone just built a working application in 18 minutes. Some of you had never used Copilot before today. That's the point."
