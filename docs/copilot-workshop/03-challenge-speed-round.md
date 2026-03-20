# 03 — Challenge 1: Speed Round

> ⏱️ 15 minutes | ⚡ First hands-on — quick wins to build confidence

---

## Setup (2 min)

> "Alright, your turn. We're going to do 5 micro-tasks. You have **2 minutes per task**. Use any Copilot feature you want — ghost text, inline chat, chat panel. The goal is *speed*. Go."

Everyone creates a new file: `challenge1.js` (or `.py`, `.ts` — their choice of language).

Put a visible countdown timer on screen (2 minutes per task).

---

## The Tasks

### Task 1: FizzBuzz (Warm-up)

> "Write a function that returns 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for both, and the number as a string otherwise. Call it with 1–20 and print the results."

**What they'll discover:** A comment or function name is enough. Copilot has seen FizzBuzz ten million times.

---

### Task 2: Array Deduplication

> "Write a function that removes duplicate objects from an array based on a specific property. Example: deduplicate a list of users by email."

**What they'll discover:** Describing the *intent* clearly ("deduplicate by a key") gets a better result than describing the algorithm ("use a Set to track seen values").

---

### Task 3: Password Validator

> "Write a function that validates a password with these rules: minimum 8 characters, at least one uppercase, one lowercase, one number, one special character. Return an object with `valid: boolean` and `errors: string[]`."

**What they'll discover:** Detailed specs in comments produce detailed implementations.

---

### Task 4: Date Formatter

> "Write a function that takes a Date and a format string like 'YYYY-MM-DD' or 'MM/DD/YYYY' or 'DD Mon YYYY' and returns the formatted date. No external libraries."

**What they'll discover:** Copilot handles string manipulation and date logic well when the format is specified.

---

### Task 5: Retry Wrapper

> "Write a higher-order function that wraps any async function with retry logic. Configurable max retries, delay between retries with exponential backoff, and an optional `shouldRetry` predicate."

**What they'll discover:** Copilot can write sophisticated utility functions. This is the kind of thing that would take 15 minutes to write and test manually.

---

## Debrief (3 min)

Quick show of hands after each:
- "Who got Task 1 in under 30 seconds?" (should be almost everyone)
- "Who got Task 5 working?" (fewer — this is deliberately harder)

Pick 1-2 volunteers to share their screen for 30 seconds each. Celebrate different approaches.

**Key takeaway:**

> "Notice what worked: clear descriptions, specific constraints, good function names. That's prompt engineering — and we're about to go deeper on that."

**If someone is struggling:**
> "That's totally normal. Copilot has a learning curve just like any tool. The next section is specifically about how to communicate with it better."
