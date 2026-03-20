# 05 — Challenge 2: Bug Hunt

> ⏱️ 15 minutes | 🐛 Use Copilot to find and fix bugs in broken code

---

## Setup (2 min)

> "I've got 5 buggy functions. Each has exactly one bug. Use Copilot — inline chat, chat panel, whatever — to find and fix each one. First person to fix all 5 wins bragging rights."

Have everyone create `bugs.js` and paste in the code below (share via chat, repo, or have them type along).

---

## The Bugs

Paste this entire block into a file:

```javascript
// BUG 1: This function should return the average of an array of numbers
function average(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// BUG 2: This should debounce a function call
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
    return timer;
  };
}

// BUG 3: This should deep clone an object
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    clone[key] = obj[key];
  }
  return clone;
}

// BUG 4: This should find the most frequent element in an array
function mostFrequent(arr) {
  const counts = {};
  let maxCount = 0;
  let maxItem = null;
  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
    if (counts[item] > maxCount) {
      maxCount = counts[item];
    }
  }
  return maxItem;
}

// BUG 5: This should retry a promise-returning function up to n times
async function retry(fn, maxRetries) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === maxRetries) throw err;
      await new Promise(r => setTimeout(r, 1000 * i));
    }
  }
}
```

---

## Answer Key (For the Presenter)

| # | Bug | Fix |
|---|-----|-----|
| 1 | Off-by-one: `i <= numbers.length` reads past end of array → `NaN` | Change to `i < numbers.length` |
| 2 | Debounce shouldn't return the timer — returning a value from debounced functions is unexpected and the "bug" is subtle. The real issue: it returns `timer` synchronously, which misleads callers into thinking it returns fn's result | Remove `return timer;` line |
| 3 | Shallow clone, not deep — `clone[key] = obj[key]` should recurse | Change to `clone[key] = deepClone(obj[key])` |
| 4 | Never assigns `maxItem` — `maxItem` stays `null` | Add `maxItem = item;` inside the `if` block |
| 5 | Off-by-one: `i === maxRetries` is never true because loop is `i < maxRetries` | Change to `i === maxRetries - 1` |

---

## How to Use Copilot for This

Suggest these approaches:

1. **Select a function → inline chat → "find the bug in this function"**
2. **Select a function → chat panel → "this function has a bug. what is it and how do I fix it?"**
3. **Select a function → `/fix`**
4. **Add a test case as a comment above the function, then ask Copilot why it fails**

---

## Debrief (3 min)

> "How did you find the bugs? Who used inline chat? Who used the panel? Who just read the code and found it themselves?"

**Key takeaway:**

> "Copilot is excellent at finding bugs when you tell it to look. The trick is: **select the right code and ask the right question.** 'Find the bug' works surprisingly well because Copilot can reason about code logic."

> "In real life, you won't know there's exactly one bug. A better prompt for production code is: 'Review this function for bugs, edge cases, and potential issues.' We'll see more of that later."
