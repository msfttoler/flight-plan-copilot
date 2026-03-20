# GitHub Copilot — Quick Reference Card

> Keep this open during the workshop. Everything you need on one page.

---

## Three Ways to Talk to Copilot

| Mode | How to Open | Best For |
|------|------------|----------|
| **Ghost Text** | Just start typing | Code completions, pattern continuation, comment → code |
| **Inline Chat** | `Cmd+I` / `Ctrl+I` | Transform selected code, quick generation at cursor |
| **Chat Panel** | `Cmd+Shift+I` / `Ctrl+Shift+I` | Conversations, debugging, multi-step tasks |

## Essential Shortcuts

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Accept suggestion | `Tab` | `Tab` |
| Dismiss suggestion | `Esc` | `Esc` |
| Next suggestion | `Opt+]` | `Alt+]` |
| Previous suggestion | `Opt+[` | `Alt+[` |
| Inline chat | `Cmd+I` | `Ctrl+I` |
| Chat panel | `Cmd+Shift+I` | `Ctrl+Shift+I` |

## Slash Commands

| Command | What It Does |
|---------|-------------|
| `/tests` | Generate test suite for selected code |
| `/fix` | Fix bugs in selected code |
| `/doc` | Generate documentation for selected code |
| `/explain` | Explain what selected code does |

## Chat Participants

| Participant | What It Does |
|-------------|-------------|
| `@workspace` | Search your entire project for context |
| `@vscode` | Ask about VS Code settings and features |
| `@terminal` | Reference recent terminal output |

## The CRAFT Framework

Write better prompts by including all five elements:

| Letter | Element | Example |
|--------|---------|---------|
| **C** | Context | *"In this Express.js REST API…"* |
| **R** | Role / Result | *"Write a middleware that…"* |
| **A** | Attributes | *"…with rate limiting, logging, error handling…"* |
| **F** | Format | *"…as an ES module with JSDoc comments…"* |
| **T** | Tests / Tradeoffs | *"…including edge cases for concurrent requests"* |

## Tips That Make a Difference

1. **Open relevant files** before asking in chat — Copilot reads your open tabs
2. **Name functions well** — `calculateShippingCost` is a better prompt than `calc`
3. **Write the comment first**, then let Copilot write the code
4. **Iterate in conversation** — start rough, refine with follow-ups
5. **Always review** — Copilot is a first draft, you are the editor

## When to Use What

```
Know roughly what you want?  →  Ghost Text (just type)
Have code to transform?      →  Inline Chat (Cmd+I)
Need to think out loud?      →  Chat Panel (Cmd+Shift+I)
Want tests/docs/fixes?       →  Slash Commands (/tests, /doc, /fix)
Need project-wide context?   →  @workspace in Chat
```
