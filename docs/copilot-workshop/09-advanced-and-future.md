# 09 — Copilot Next Level

> ⏱️ 25 minutes | 🚀 Features that change how you think about AI-assisted development

---

## Framing (1 min)

> "Everything so far has been about Copilot as a code assistant. Now let's talk about Copilot as an *agent* — something that can take actions, work across files, and even run commands for you."

---

## 🖥️ DEMO: Copilot CLI (7 min)

> "Copilot isn't just in your editor. It's in your terminal too."

### Install (if not already)

```bash
gh extension install github/gh-copilot
```

### Demo 1: Explain a command

```bash
gh copilot explain "find . -name '*.log' -mtime +7 -exec rm {} \;"
```

**Show:** It breaks down every flag and pipe in plain English.

**Talking point:** "Never Google a cryptic bash command again."

### Demo 2: Suggest a command

```bash
gh copilot suggest "find all JavaScript files larger than 1MB modified in the last week"
```

**Show:** It generates the correct `find` command with all the right flags.

```bash
gh copilot suggest "kill whatever is running on port 3000"
```

**Show:** `lsof -ti:3000 | xargs kill`

### Demo 3: Real workflow

```bash
gh copilot suggest "create a git alias that shows a pretty one-line log with graph"
```

```bash
gh copilot suggest "docker command to remove all stopped containers and unused images"
```

**Talking point:** "This is especially powerful for tools you use occasionally — Docker, git, awk, sed, find. You know *what* you want but not the exact syntax. This fills that gap instantly."

> "Note: `gh copilot` requires the GitHub CLI. It works on any OS and any terminal — it's completely separate from your IDE."

---

## 🖥️ DEMO: Copilot Edits / Agent Mode (10 min)

> "This is the big one. Instead of asking Copilot to edit one thing at a time, you can give it a high-level task and let it work across multiple files."

### How to access it

In VS Code: Open chat → switch to "Editing" mode (look for the mode selector), or use Copilot Edits panel. In the latest VS Code, you can switch to "Agent" mode for full autonomy.

### Demo 1: Multi-file refactor

Start with a messy single-file app (or use the URL shortener from earlier if it's all in one file).

In agent/edit mode:
> "Refactor this into separate modules: routes.js, analytics.js, storage.js, and server.js. Update all imports. Make sure the app still works."

**Show:** Copilot creates multiple files, moves code, updates imports — all in one operation. Review the diff.

**Talking point:** "This would take 15 minutes of careful copy-paste and import fixing. Copilot did it in one prompt."

### Demo 2: Add a feature across files

> "Add a simple API key authentication system. Create a middleware that checks for an `x-api-key` header. Store valid keys in a config file. Protect the POST /shorten and analytics endpoints. Leave the redirect endpoint public."

**Show:** It creates the middleware file, updates the routes, creates a config file, and adds documentation.

### Demo 3: Agent mode running commands

If using Agent mode (VS Code with latest Copilot):
> "Add a health check endpoint at GET /health that returns the server uptime and total URLs shortened. Then run the tests to make sure nothing is broken."

**Show:** Agent mode writes the code AND runs the tests in the terminal, then reports back.

**Talking point:** "Agent mode can run terminal commands — build, test, lint — and fix issues it finds. It's the closest thing to 'just do it for me' we have right now."

---

## 🖥️ DEMO: Custom Instructions (5 min)

> "What if you could give Copilot permanent context about your project? You can."

### Show .github/copilot-instructions.md

Create or show a `copilot-instructions.md`:

```markdown
# Copilot Instructions

## Conventions
- Use TypeScript strict mode for all new files
- Use Zod for runtime validation (v4 API, not v3)
- Error handling: always use custom AppError class from src/errors.ts
- Naming: camelCase for functions, PascalCase for classes and types
- All API responses follow { data, error, meta } envelope format

## Architecture
- This is an Express.js REST API
- Business logic lives in src/services/, routes in src/routes/
- All database access goes through src/repositories/
```

Now ask Copilot to generate a new endpoint. Show that it follows the conventions automatically — TypeScript, Zod validation, AppError, correct folder structure.

**Talking point:** "This is how you scale Copilot across a team. Everyone gets the same conventions without anyone having to remember them. We actually built this file for this repository earlier today."

---

## Talking Point: What's Available on Each Plan (2 min)

Quick overview so people know what to explore:

| Feature | Free | Pro | Enterprise |
|---------|------|-----|------------|
| Code completions | ✅ (2000/mo) | ✅ Unlimited | ✅ Unlimited |
| Chat | ✅ (50 msgs/mo) | ✅ Unlimited | ✅ Unlimited |
| CLI | ❌ | ✅ | ✅ |
| Agent mode | ❌ | ✅ | ✅ |
| Custom instructions | ✅ | ✅ | ✅ |
| Admin/policy controls | ❌ | ❌ | ✅ |

> "The free tier is genuinely useful. Pro unlocks the superpowers we just demoed. Check your company's plan — many organizations already have licenses."

*Note: verify these limits against [github.com/features/copilot](https://github.com/features/copilot) before presenting, as they update frequently.*
