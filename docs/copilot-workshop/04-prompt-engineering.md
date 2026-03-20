# 04 — The Art of the Prompt

> ⏱️ 25 minutes | 🎯 The single most important skill for using Copilot effectively

---

## Why This Matters (2 min)

> "The difference between someone who thinks Copilot is 'meh' and someone who thinks it's magic? Prompting. Same tool, wildly different results. Let me show you."

---

## 🖥️ DEMO: Bad Prompt vs Good Prompt (8 min)

### Round 1: Vague vs Specific

**Bad prompt** (in chat):
> "make a function for users"

Show the result — it's generic, probably not what you wanted.

**Good prompt:**
> "Write a function `findInactiveUsers` that takes an array of user objects (with properties: id, name, email, lastLoginDate) and returns users who haven't logged in within the last 30 days, sorted by last login date ascending."

Show the result — it's exactly right.

**Talking point:** "Copilot isn't psychic. Specificity is kindness. Tell it what you want the way you'd tell a new teammate."

### Round 2: No Context vs Rich Context

Create an empty file `orderService.js`:

**Bad:** Type `function processOrder(` and hope for the best.

**Good:** Start with a descriptive header:

```javascript
// OrderService handles e-commerce order processing.
// Orders have: id, items[], customerId, status (pending|confirmed|shipped|delivered)
// Items have: productId, quantity, unitPrice
// Business rules:
//   - Orders over $100 get free shipping
//   - Max 50 items per order
//   - Must validate stock before confirming

function processOrder(order) {
```

Show how the implementation now includes all the business rules.

**Talking point:** "Comments aren't just for humans anymore. They're your steering wheel."

### Round 3: One-shot vs Iterative

Show that you can refine in chat:

1. "Write a rate limiter middleware for Express"
2. "Now make it use a sliding window instead of fixed window"
3. "Add support for different limits per route"
4. "Add a header that tells the client how many requests they have left"

**Talking point:** "You don't have to get it perfect in one prompt. Build it up in conversation, just like you would with a colleague."

---

## 🖥️ DEMO: Context Is King (8 min)

### What Copilot Can See

Show each context source:

1. **Current file** — "This is always included. It's the most important context."
2. **Open tabs** — "Copilot looks at other files you have open. Open relevant files before asking."
3. **Selection** — "If you select code before chatting, that's what it focuses on."
4. **`@workspace`** — In chat, type `@workspace` to let it search your whole project.

### Demo: Open tabs matter

1. Close all tabs. Open a blank file. Ask chat: "Add a function to get a user's orders"
   - Result: generic, makes up a schema
2. Now open `userModel.js` and `orderModel.js` (or create mock ones). Ask again.
   - Result: uses the actual schemas from your files

**Talking point:** "This is the most underrated Copilot trick: open the relevant files before you ask. It's like showing your teammate the codebase before asking for help."

### Demo: @workspace for project-wide questions

With a multi-file project open:
> "@workspace how is authentication handled in this project?"

> "@workspace where are API routes defined?"

> "@workspace what testing framework does this project use?"

**Talking point:** "This is your 'I just joined the team' superpower. Instead of grepping through code for an hour, just ask."

---

## 🖥️ DEMO: Slash Commands & Participants (5 min)

Quick-fire through the most useful ones:

| Command | What It Does | Demo |
|---------|-------------|------|
| `/explain` | Explain selected code | Select a complex function → `/explain` |
| `/fix` | Fix a bug in selected code | Introduce a typo → select → `/fix` |
| `/tests` | Generate tests for selected code | Select a function → `/tests` |
| `/doc` | Generate documentation | Select a function → `/doc` |

Participants (VS Code specific, mention alternatives for other IDEs):

| Participant | What It Does |
|-------------|-------------|
| `@workspace` | Searches entire project |
| `@vscode` | VS Code settings and features |
| `@terminal` | Recent terminal output |

**Talking point:** "Slash commands are shortcuts for common tasks. You'll use `/explain` and `/tests` the most."

---

## Prompt Cheat Sheet (2 min)

Put this on screen. Tell them to screenshot it.

**The CRAFT Framework:**

| Letter | Principle | Example |
|--------|-----------|---------|
| **C** | Context | "In this Express.js REST API..." |
| **R** | Role/Result | "Write a middleware that..." |
| **A** | Attributes | "...with rate limiting, logging, and error handling..." |
| **F** | Format | "...as a TypeScript function with JSDoc comments..." |
| **T** | Tests/Tradeoffs | "...and include edge cases for concurrent requests" |

> "You don't need all five every time. But when Copilot gives you garbage, run through this checklist and figure out what you didn't tell it."
