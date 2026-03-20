# 07 — Real-World Build

> ⏱️ 30 minutes | 🎯 Build a complete feature live, showing the real workflow

---

## Framing (2 min)

> "So far we've done toy examples. Let's build something real. I'm going to build a complete feature from scratch — start to finish — the way I actually work with Copilot. No tricks, no pre-written code. You tell me what to build."

**Audience interaction:** Poll the room for what to build. Pick one, or use the default below.

Suggested options (pick based on crowd energy):
- A URL shortener API with analytics
- A markdown-to-HTML converter CLI tool
- A task queue with workers and retry logic
- A real-time chat server (if audience is adventurous)

**Default: URL Shortener with Analytics** (good balance of interesting + achievable in 25 min)

---

## 🖥️ LIVE CODING: URL Shortener (25 min)

### Phase 1: Scaffold (5 min)

Open chat panel. Start the conversation:

> "I want to build a URL shortener in Node.js. It should:
> - Accept a long URL via POST /shorten and return a short code
> - Redirect GET /:code to the original URL
> - Track click analytics: total clicks, clicks by day, referrer
> - Use in-memory storage (no database)
> - Use Express.js
> - Include input validation and error handling
> 
> Give me the project structure first."

**Show:** Copilot lays out the file structure. Create the files.

Then: "Now generate the main server file"

**Narrate as you go:**
> "See how I started with the full picture, then drilled down? That's the workflow: big picture prompt → iterate on specifics."

### Phase 2: Core Logic (8 min)

Let Copilot generate the URL shortening logic. As it generates:

- **Accept good suggestions** with Tab
- **Reject bad ones** — "See, it suggested using `Math.random()` for the short code. That's fine for a demo but let's ask for something better."
- **Refine in chat:** "Use nanoid instead of Math.random for generating short codes"

Open a new file for the analytics module. Use a comment-driven approach:

```javascript
// Analytics tracker for URL shortener
// Tracks: total clicks, clicks per day, top referrers, geographic data (from headers)
// Methods: recordClick(code, referrer, headers), getAnalytics(code), getGlobalStats()
```

**Talking point as you code:** "Notice I'm bouncing between ghost text and chat. Ghost text for when I know roughly what I want. Chat for when I want to think out loud."

### Phase 3: Polish (5 min)

Now use Copilot to add the finishing touches:

1. **Input validation:** Select the POST handler → inline chat → "add URL validation — reject non-http URLs, URLs that are too long, and known spam domains"

2. **Error handling:** "Add a global error handler middleware with proper error responses"

3. **Rate limiting:** "Add rate limiting — 10 requests per minute per IP"

### Phase 4: Test It (5 min)

In the terminal:

```bash
node server.js
```

Use `curl` (or a REST client) to demo:

```bash
# Shorten a URL
curl -X POST http://localhost:3000/shorten \
  -H "Content-Type: application/json" \
  -d '{"url": "https://learn.microsoft.com/en-us/copilot/overview"}'

# Visit the short URL (shows redirect)
curl -L http://localhost:3000/abc123

# Check analytics
curl http://localhost:3000/analytics/abc123
```

**If something breaks** (and it probably will):
> "Perfect teaching moment. Let's ask Copilot to fix it."

Paste the error into chat: "I got this error when running the server: [paste error]. How do I fix it?"

**This is the most important moment of the demo** — showing that the fix loop with Copilot is fast and natural.

### Phase 5: Quick Tests (2 min)

> "Let's not forget tests. Select the main module, `/tests`, done."

Generate a test file in 30 seconds. Don't run them — just show the breadth of coverage.

---

## Debrief (3 min)

> "Let's recap what just happened. In 25 minutes we built:"

Count on your fingers:
1. A URL shortener with nanoid codes
2. Redirect handling
3. Click analytics with daily breakdowns
4. Input validation
5. Rate limiting
6. Error handling
7. Tests

> "That's a weekend project done in a lunch break. Not because Copilot wrote everything perfectly — but because the **iteration loop** is so fast. Write a prompt, review the code, refine, move on."

> "Now it's your turn to build something."
