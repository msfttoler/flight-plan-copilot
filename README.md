# Flight Plan: GitHub Copilot Dev Day

> *"From Curious to Dangerous in Four Hours"*

A hands-on, keyboard-first workshop that takes developers from their first encounter with GitHub Copilot to confidently building real applications with AI-assisted development. No death-by-slides — this is live demos, hands-on challenges, and a team showdown.

---

## Who Is This For?

Mixed audience — beginners through senior developers. No prior Copilot experience required. All you need is a GitHub account with Copilot enabled (the free tier works) and VS Code (or your preferred IDE).

---

## What You'll Walk Away With

- Fluency in all three Copilot interaction modes (ghost text, inline chat, chat panel)
- A personal prompt engineering toolkit (the CRAFT framework)
- Experience debugging, testing, and documenting code with AI assistance
- Hands-on time building a working application from scratch with Copilot
- Exposure to advanced features: Agent mode, Copilot CLI, custom instructions, and extensions

---

## Session Schedule

The workshop is 4 hours, broken into short teaching blocks followed immediately by hands-on work. Two breaks keep the energy up.

| Time | Section | Format | What Happens |
|------|---------|--------|--------------|
| **0:00** | **Opening & First Wow** | Demo + Talk | The hook — build a complete working app in ~2 minutes using only Copilot comments. Setup check for all attendees. |
| **0:20** | **Copilot Essentials** | Demo + Talk | Learn the three ways to interact: ghost text completions, inline chat, and the chat panel. Key shortcuts and when to use each mode. |
| **0:45** | **Challenge 1: Speed Round** | Hands-on | Five micro-tasks in 10 minutes — FizzBuzz, array deduplication, password validator, date formatter, retry wrapper. First taste of building with Copilot. |
| **1:00** | **Break** | ☕ | |
| **1:10** | **The Art of the Prompt** | Demo + Talk | The core skill. Bad vs. good prompts, context management, iterative refinement, `@workspace`, slash commands, and the CRAFT framework (Context, Role, Attributes, Format, Tests). |
| **1:35** | **Challenge 2: Bug Hunt** | Hands-on | Five buggy functions. Use Copilot to find and fix each one — off-by-one errors, shallow clones, missing assignments. |
| **1:50** | **Testing & Documentation** | Demo | Generate comprehensive test suites with `/tests`, create JSDoc/docstrings with `/doc`, scaffold a full README with `@workspace`. The two things devs hate doing, done in seconds. |
| **2:10** | **Break** | ☕ | |
| **2:20** | **Real-World Build** | Live Coding | Build a complete URL shortener with analytics — from zero to working API — live on stage. Scaffold, core logic, validation, rate limiting, error handling, and tests in 30 minutes. |
| **2:50** | **Challenge 3: Build It** | Hands-on | Pick a project (Markdown CLI, link checker, expense splitter, or quiz engine) and build a working prototype in 18 minutes using everything learned so far. |
| **3:10** | **Copilot Next Level** | Demo + Talk | Advanced features: Copilot CLI for terminal workflows, Agent/Edits mode for multi-file refactors, and custom instructions via `copilot-instructions.md`. |
| **3:35** | **Final Challenge: Showdown** | Team Challenge | Teams of 2–3. Ten minutes. Build the most impressive thing you can. Live demos. The room votes. A winner is crowned. |
| **3:50** | **Wrap-Up & Q&A** | Talk | The five things to remember, resource links, and open Q&A. |

---

## Arc of the Day

```
Hook → Foundation → Craft → Apply → Stretch → Celebrate
 ↑        ↑          ↑       ↑        ↑          ↑
 Wow    Essentials  Prompts  Build   Advanced   Showdown
moment  + basics    + debug  feature  + agent    + prizes
```

The session starts with pure spectacle, then progressively hands the keyboard to the audience. By the end, *they're* the ones building impressive things.

---

## Challenges at a Glance

| # | Challenge | Format | Key Skill Practiced |
|---|-----------|--------|---------------------|
| 1 | **Speed Round** | Solo, 5 micro-tasks | Ghost text, comment-driven development |
| 2 | **Bug Hunt** | Solo, 5 buggy functions | Inline chat, `/fix`, code reasoning |
| 3 | **Build It** | Solo or pair, pick a project | Full workflow — plan, build, test |
| 4 | **Showdown** | Teams of 2–3, open-ended | Everything — most impressive demo wins |

---

## Extra Credit Modules

For groups that finish early or want to go deeper:

| Module | Duration | What It Covers |
|--------|----------|----------------|
| **Copilot CLI** | 15 min | Solve sysadmin and developer tasks using `gh copilot suggest` and `gh copilot explain` — git wizardry, process management, data wrangling. |
| **Build a Copilot Extension** | 20 min | Go from Copilot *user* to Copilot *builder* — create a custom Copilot Extension with the `@github/copilot-sdk` that does AI-powered code reviews with personality. |

---

## Prerequisites

**Every attendee needs:**
- GitHub account with Copilot enabled ([free tier](https://github.com/features/copilot) works)
- VS Code (recommended) or their preferred IDE with Copilot extension installed
- Copilot Chat panel accessible (Ctrl+Shift+I / Cmd+Shift+I)

**Presenter needs:**
- VS Code with Copilot Chat
- A terminal, Node.js 18+, Python 3.10+ (for polyglot demos)
- `gh` CLI with Copilot extension (for CLI demos)
- Projector/screen share, 20pt+ editor font

**Free tier note:** The free plan includes code completions and limited chat messages per month. Attendees should avoid burning through chat quota before the session.

---

## The Five Things to Remember

1. **Comments are prompts.** Write what you want before you write how to do it.
2. **Context is king.** Open relevant files. Use `@workspace`. The more Copilot knows, the better it performs.
3. **Iterate, don't one-shot.** Start rough, refine in conversation.
4. **Always review.** Copilot is a draft machine. You are the editor.
5. **It gets better the more you use it.** Day 30 is dramatically better than day 1.

---

## Workshop Materials

All session content lives in [`docs/copilot-workshop/`](docs/copilot-workshop/):

| File | Section |
|------|---------|
| [00-overview.md](docs/copilot-workshop/00-overview.md) | Full agenda, presenter tips, format notes |
| [01-opening-and-first-wow.md](docs/copilot-workshop/01-opening-and-first-wow.md) | Opening demo & setup check |
| [02-copilot-essentials.md](docs/copilot-workshop/02-copilot-essentials.md) | Three interaction modes |
| [03-challenge-speed-round.md](docs/copilot-workshop/03-challenge-speed-round.md) | Challenge 1: Speed Round |
| [04-prompt-engineering.md](docs/copilot-workshop/04-prompt-engineering.md) | The Art of the Prompt & CRAFT framework |
| [05-challenge-bug-hunt.md](docs/copilot-workshop/05-challenge-bug-hunt.md) | Challenge 2: Bug Hunt |
| [06-testing-and-docs.md](docs/copilot-workshop/06-testing-and-docs.md) | Testing & Documentation |
| [07-real-world-build.md](docs/copilot-workshop/07-real-world-build.md) | Real-World Build (URL Shortener) |
| [08-challenge-build-it.md](docs/copilot-workshop/08-challenge-build-it.md) | Challenge 3: Build It |
| [09-advanced-and-future.md](docs/copilot-workshop/09-advanced-and-future.md) | Copilot Next Level (CLI, Agent, Custom Instructions) |
| [10-final-challenge.md](docs/copilot-workshop/10-final-challenge.md) | Final Challenge: Showdown |
| [11-wrap-up.md](docs/copilot-workshop/11-wrap-up.md) | Wrap-Up & Q&A |
| [extra-credit-a-copilot-cli.md](docs/copilot-workshop/extra-credit-a-copilot-cli.md) | Extra Credit: Copilot CLI |
| [extra-credit-b-copilot-sdk.md](docs/copilot-workshop/extra-credit-b-copilot-sdk.md) | Extra Credit: Build a Copilot Extension |

---

## License

Internal workshop materials. Not for redistribution without permission.
