# 06 — Testing & Documentation

> ⏱️ 20 minutes | 🎯 The two things developers hate doing, now done in seconds

---

## Framing (2 min)

> "Pop quiz: what's the most skipped part of any PR? Tests and docs. Not because developers are lazy — because writing them is tedious. Let's make it not tedious."

---

## 🖥️ DEMO: Generate a Test Suite (8 min)

### Step 1: Start with real code

Use a function from the earlier challenges, or paste this:

```javascript
// cart.js
export function calculateTotal(items, taxRate = 0, discountCode = null) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Cart cannot be empty');
  }

  let subtotal = items.reduce((sum, item) => {
    if (item.quantity < 1) throw new Error(`Invalid quantity for ${item.name}`);
    return sum + (item.price * item.quantity);
  }, 0);

  if (discountCode === 'SAVE10') subtotal *= 0.9;
  if (discountCode === 'SAVE20') subtotal *= 0.8;

  const tax = subtotal * taxRate;
  return {
    subtotal: Math.round(subtotal * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    total: Math.round((subtotal + tax) * 100) / 100,
  };
}
```

### Step 2: Generate tests with /tests

Select the function. Use `/tests` or ask in chat:

> "Generate comprehensive tests for this function using the test framework of your choice. Cover happy paths, edge cases, error cases, and boundary conditions."

**Show:** Copilot generates 10-15 tests covering:
- Normal calculation
- Empty cart error
- Invalid quantity error
- SAVE10 and SAVE20 discounts
- Invalid discount code (no discount applied)
- Tax calculation
- Rounding behavior
- Single item, multiple items

### Step 3: Iterate

> "Add tests for: what happens with negative prices? What about extremely large quantities? What about a taxRate of 1.0 (100% tax)?"

**Show:** It adds exactly those edge cases.

**Talking point:** "Did you notice it knew about edge cases you probably wouldn't have thought of? It suggested testing with zero tax, zero items, and rounding issues — those are the bugs that ship to production."

---

## 🖥️ DEMO: Tests for Existing Code You Didn't Write (5 min)

Open any unfamiliar file (from a library, an open source project, or code a colleague wrote). Select a function.

In chat:
> "I didn't write this code. Generate tests that help me understand what it does and verify its behavior."

**Show:** The tests act as living documentation — each test name explains a behavior.

**Talking point:** "This is my favorite use case. Tests-as-documentation for code you inherited. Now you can refactor with confidence."

---

## 🖥️ DEMO: Documentation Generation (5 min)

### JSDoc / Docstrings

Select a function. Use `/doc` or ask:
> "Add comprehensive JSDoc documentation including parameter descriptions, return type, throws, and a usage example"

**Show:** Full JSDoc with `@param`, `@returns`, `@throws`, `@example`.

### README Generation

In chat:
> "@workspace Generate a README.md for this project. Include: what it does, how to install, how to use it, API reference for the exported functions, and examples."

**Show:** A complete README that actually reflects the codebase.

### API Documentation

If you have a REST API:
> "Generate OpenAPI/Swagger documentation for the routes in this file"

**Talking point:** "This isn't perfect documentation — you'll want to review and refine it. But going from zero to a solid first draft in 10 seconds? That's the productivity win."

---

## The Real Talk (2 min)

> "I want to be honest with you: Copilot-generated tests are a starting point, not a finish line. You should:"

1. **Review every generated test** — make sure it actually tests what it claims
2. **Run the tests** — generated tests sometimes have typos or wrong assertions
3. **Add the edge cases only you know about** — business logic that isn't in the code
4. **Use generated tests as a scaffold** — they give you structure, you add substance

> "But here's the thing: going from 0 tests to 15 tests with Copilot, then reviewing and fixing 2 of them, is *way* faster than writing 15 tests from scratch. And now you actually have tests."
