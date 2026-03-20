# Extra Credit A — Copilot CLI Challenge

> ⏱️ 15 minutes | 💻 Never leave the terminal, never open a browser

---

## Setup (2 min)

> "This challenge is for the terminal lovers. You're going to solve real-world sysadmin and developer tasks using *only* `gh copilot` — no Googling, no Stack Overflow, no man pages. Just you and your AI copilot in the terminal."

### Prerequisites

```bash
# Install GitHub CLI (if not already)
# macOS
brew install gh

# Then install the Copilot extension
gh auth login          # if not already authenticated
gh extension install github/gh-copilot
```

Verify it works:
```bash
gh copilot suggest "list files"
```

> "Two commands to know: `gh copilot suggest` generates a command for you. `gh copilot explain` breaks down a command you don't understand. That's it. Let's go."

---

## The Challenges

### Round 1: Warm-up (2 min)

Use `gh copilot suggest` to generate commands for these. **Run each one** to verify it works.

1. "Find all `.js` files in the current directory tree that were modified in the last 24 hours"
2. "Show disk usage for the current directory, sorted by size, human-readable, top 10 only"
3. "Count the total lines of code in all TypeScript files in this project"

---

### Round 2: Git Wizardry (3 min)

4. "Show me all commits from the last week that touched files in the `src/` directory, one line per commit"
5. "Create a git alias called `recent` that shows the last 10 branches I worked on, sorted by most recent commit"
6. "Find all files in this repo that have merge conflict markers still in them"

---

### Round 3: Process & Network (3 min)

7. "Show all processes listening on network ports, sorted by port number"
8. "Find and kill whatever process is using port 8080"
9. "Watch a log file in real-time but only show lines containing 'ERROR' or 'WARN', with color highlighting"

---

### Round 4: Data Wrangling (3 min)

10. "Download a CSV from this URL and show only rows where the third column is greater than 100, sorted descending"
    - Use any public CSV, or: `https://raw.githubusercontent.com/datasets/gdp/master/data/gdp.csv`
11. "Find all unique email addresses mentioned in any file in the current directory tree"
12. "Generate a JSON file with 10 fake users (name, email, age, city) — no external tools, just shell commands"

---

### Round 5: The Boss Level (2 min)

13. Use `gh copilot explain` on this command. Then modify it to only match TypeScript files:
    ```
    find . -name '*.js' -not -path '*/node_modules/*' -exec grep -l 'TODO\|FIXME\|HACK' {} \; | xargs wc -l | sort -rn | head -20
    ```

14. Combine `suggest` and `explain` in a chain: ask Copilot to suggest a complex command, then immediately ask it to explain what it generated. Did it get it right?

---

## Debrief (2 min)

> "Show of hands: who learned a new CLI trick today? Who found a command they're going to actually use at work?"

> "The CLI is the underrated Copilot feature. It's available on any machine with `gh` installed — no IDE needed. For ops work, debugging, and scripting, it's invaluable."

**Power user tip:**
```bash
# Add to your .bashrc/.zshrc for quick access
alias '?'='gh copilot suggest'
alias '??'='gh copilot explain'
```

> "Now you can just type `? 'find large log files'` from anywhere."
