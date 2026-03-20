# GitHub Copilot Dev Day — 4-Hour Workshop

> *"From Curious to Dangerous in Four Hours"*

## Format

4 hours, mixed audience (beginners through senior devs). Heavy on live demos and hands-on challenges. Light on slides — this is a **keyboard-first** session.

## Materials Needed

- Every attendee needs: GitHub account with Copilot enabled (free tier works), VS Code (recommended) or their preferred IDE
- Presenter needs: VS Code with Copilot Chat, a terminal, Node.js 18+, Python 3.10+ (for polyglot demos), `gh` CLI with Copilot extension
- Optional: a shared repo with challenge starter files (see challenge sections)
- Projector/screen share, good font size (20pt+ in editor)

## Free Tier Notes

The free Copilot plan includes code completions and limited chat messages per month. For a workshop setting:
- Warn attendees to **not** burn through chat quota before the session
- Pair up free-tier users during challenges if anyone hits limits
- All demos work on the free tier; completions are unlimited enough for a 4-hour session

---

## Agenda At a Glance

| Time | Section | Type | File |
|------|---------|------|------|
| 0:00 | Opening & First Wow | Demo + Talk | [01-opening-and-first-wow.md](01-opening-and-first-wow.md) |
| 0:20 | Copilot Essentials | Demo + Talk | [02-copilot-essentials.md](02-copilot-essentials.md) |
| 0:45 | Challenge 1: Speed Round | Hands-on | [03-challenge-speed-round.md](03-challenge-speed-round.md) |
| 1:00 | ☕ Break | | |
| 1:10 | The Art of the Prompt | Demo + Talk | [04-prompt-engineering.md](04-prompt-engineering.md) |
| 1:35 | Challenge 2: Bug Hunt | Hands-on | [05-challenge-bug-hunt.md](05-challenge-bug-hunt.md) |
| 1:50 | Testing & Documentation | Demo | [06-testing-and-docs.md](06-testing-and-docs.md) |
| 2:10 | ☕ Break | | |
| 2:20 | Real-World Build | Live Coding | [07-real-world-build.md](07-real-world-build.md) |
| 2:50 | Challenge 3: Build It | Hands-on | [08-challenge-build-it.md](08-challenge-build-it.md) |
| 3:10 | Copilot Next Level | Demo + Talk | [09-advanced-and-future.md](09-advanced-and-future.md) |
| 3:35 | Final Challenge: Showdown | Team Challenge | [10-final-challenge.md](10-final-challenge.md) |
| 3:50 | Wrap-Up & Q&A | Talk | [11-wrap-up.md](11-wrap-up.md) |

---

## Presenter Tips

- **Show your mistakes.** When Copilot gives bad suggestions, don't skip past them — use them as teaching moments. "See, it gave me X. That's wrong because... Let me refine the prompt."
- **Narrate your thinking.** Say out loud: "I'm going to write a comment first to give Copilot context..." This teaches prompt craft implicitly.
- **Keep the energy up.** After every lecture block, there's a hands-on block. If energy dips, skip ahead to the next challenge.
- **Poll the room.** Ask "Who's seen this before?" and "Who got a different suggestion?" frequently. Copilot gives different results — that's a feature, not a bug.
- **Use a timer.** Put a visible countdown on screen during challenges. Urgency makes it fun.

## Arc of the Day

```
Hook → Foundation → Craft → Apply → Stretch → Celebrate
 ↑        ↑          ↑       ↑        ↑          ↑
 Wow    Essentials  Prompts  Build   Advanced   Showdown
moment  + basics    + debug  feature  + agent    + prizes
```

The session starts with pure spectacle (you build something impressive in 2 minutes), then progressively hands the keyboard to the audience. By the end, *they're* the ones building impressive things.
