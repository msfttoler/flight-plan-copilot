# 02 — Copilot Essentials

> ⏱️ 25 minutes | 🎯 Teach the three interaction modes everyone needs

---

## The Three Ways to Talk to Copilot (2 min)

Frame it simply:

| Mode | What It Is | When to Use It |
|------|-----------|----------------|
| **Ghost Text** | Inline suggestions as you type | Writing new code, going fast |
| **Inline Chat** | Ask a question about selected code | Targeted edits, explanations |
| **Chat Panel** | Conversational AI sidebar | Planning, debugging, complex questions |

> "Think of it as three gears. Ghost text is cruise control. Inline chat is a tap on the shoulder. Chat panel is pulling over to look at the map."

---

## 🖥️ DEMO: Ghost Text / Code Completions (8 min)

Create a new file `utils.js` (or `utils.py` — presenter's choice).

### Demo 1: Function from name alone

Type just the function signature and pause:

```javascript
function calculateShippingCost(weight, distance, isExpress) {
```

**Show:** Copilot fills in a reasonable implementation. Accept it with Tab.

**Talking point:** "I gave it a descriptive name and parameters. That was enough context."

### Demo 2: Pattern continuation

Type a few lines of an object and let Copilot continue:

```javascript
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
```

**Show:** Copilot continues the pattern with 401, 403, 404, 500, etc.

**Talking point:** "It sees the pattern and continues it. This works with arrays, switch statements, if/else chains, anything repetitive."

### Demo 3: Comment-driven development

```javascript
// Parse a CSV string into an array of objects
// using the first row as headers
function parseCSV(csvString) {
```

**Show:** Full implementation appears.

**Talking point:** "This is the technique we used in the opening demo. Comments are prompts. More specific comments → better code."

### Demo 4: Saying "no"

Type something and get a bad suggestion. Show:
- **Esc** to dismiss
- **Alt+]** / **Option+]** to cycle to next suggestion
- Keep typing to narrow it down

**Talking point:** "You're not stuck with the first suggestion. Cycle through options or just keep typing and it'll adjust."

---

## 🖥️ DEMO: Inline Chat (7 min)

### Demo 1: Explain code

Paste in something gnarly (or use a file from the workshop repo):

```javascript
const r = (a, b = 2) => a.reduce((p, c, i) => 
  i % b === 0 ? [...p, a.slice(i, i + b)] : p, []);
```

Select it, trigger inline chat (Ctrl+I / Cmd+I), type: `explain this`

**Show:** Copilot explains it's a chunk/partition function.

Now ask: `rename variables to be descriptive`

**Show:** It rewrites with readable names.

**Talking point:** "This is your most powerful tool for understanding unfamiliar code. You don't have to figure it out alone anymore."

### Demo 2: Transform code

Write or paste a callback-style function:

```javascript
function getUser(id, callback) {
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
    if (err) callback(err);
    else callback(null, rows[0]);
  });
}
```

Select it, inline chat: `convert to async/await`

**Show:** Clean async version with try/catch.

### Demo 3: Quick generation

Put cursor in an empty spot. Inline chat: `add a function that validates an email address using regex`

**Show:** It generates and inserts right there.

---

## 🖥️ DEMO: Chat Panel (5 min)

Open the chat panel. Show these patterns quickly:

### Ask about the current file

With `utils.js` open:
> "What does this file do? Are there any bugs?"

### Ask a general question

> "What's the difference between `map` and `flatMap` in JavaScript?"

### Ask it to generate with context

> "Write a function that takes the output of `parseCSV` and filters rows where the 'status' column equals 'active'"

**Show:** It references the `parseCSV` function from the current file.

**Talking point:** "Chat sees your open files. It's not working in a vacuum — it's working *with* your codebase."

---

## Key Shortcuts Reference (3 min)

Put this on screen. Tell people to screenshot it.

| Action | VS Code | JetBrains |
|--------|---------|-----------|
| Accept suggestion | `Tab` | `Tab` |
| Dismiss suggestion | `Esc` | `Esc` |
| Next suggestion | `Alt+]` | `Alt+]` |
| Previous suggestion | `Alt+[` | `Alt+[` |
| Inline chat | `Ctrl+I` / `Cmd+I` | `Ctrl+Shift+I` |
| Open chat panel | `Ctrl+Shift+I` / `Cmd+Shift+I` | AI Assistant panel |
| Accept inline edit | `Ctrl+Enter` | `Tab` |

> "Don't memorize all of these. Just remember: Tab to accept, Esc to reject, Ctrl+I for inline chat. That gets you 90% of the value."
