# Extra Credit B — Build a Copilot Extension

> ⏱️ 20 minutes | 🧩 Go from user to builder — create your own Copilot-powered tool

---

## Framing (2 min)

> "So far you've been *using* Copilot. Now you're going to *extend* it. GitHub Copilot Extensions let you build custom AI-powered tools that plug directly into the Copilot Chat experience — in the IDE, on GitHub.com, wherever Copilot lives."

> "By the end of this challenge, you'll have a working Copilot Extension running locally that you can chat with."

---

## What Are Copilot Extensions?

A Copilot Extension is a backend service that:
1. Receives chat messages from Copilot (user asks `@your-extension do something`)
2. Processes them however you want (call APIs, query databases, run logic)
3. Streams a response back using the Copilot SDK

It's a regular HTTP server with a specific protocol. The SDK handles the hard parts.

---

## The Challenge: Build a "Code Reviewer" Extension

### Step 1: Scaffold the project (3 min)

Create a new directory and initialize:

```bash
mkdir copilot-reviewer && cd copilot-reviewer
npm init -y
npm install @anthropic-ai/sdk @github/copilot-sdk express
```

> **Wait — we're going to use Copilot to build a Copilot Extension.** Open this project in your editor with Copilot enabled.

In Copilot Chat, ask:

> "I want to build a GitHub Copilot Extension using the @github/copilot-sdk npm package. It should be an Express server that:
> 1. Receives messages at POST /agent
> 2. Uses createAckEvent, createTextEvent, and createDoneEvent from the SDK
> 3. When a user sends code, responds with a humorous but useful code review
> 4. Streams the response back
>
> Generate the main server file."

### Step 2: Make it do something interesting (8 min)

The basic version just echoes. Now make it smart. Pick ONE of these personalities:

**Option A: "The Grumpy Senior Dev"**
> Reviews code sarcastically but accurately. Catches real issues but delivers feedback like a developer who's been burned by too many production incidents.

Prompt Copilot:
> "Update the agent so when it receives code, it plays the character of a grumpy senior developer doing a code review. It should find real issues (variable naming, error handling, edge cases) but deliver feedback in a sarcastic, world-weary tone. Still be helpful — just funny about it."

**Option B: "The Hype Engineer"**
> Unreasonably enthusiastic about everything. Even bugs get positive framing.

**Option C: "The Security Auditor"**
> Responds with a security-focused review — injection risks, secrets exposure, input validation, dependency concerns.

**Option D: "The Explainer"**
> Responds with a line-by-line explanation of the code, like a patient mentor teaching a junior developer.

### Step 3: Add the streaming response (5 min)

The key pattern with the Copilot SDK:

```javascript
// This is the shape — have Copilot fill in the details
app.post("/agent", async (req, res) => {
  const { messages } = req.body;
  const userMessage = messages[messages.length - 1].content;

  // 1. Acknowledge receipt
  res.write(createAckEvent());

  // 2. Stream your response
  const review = generateReview(userMessage); // your logic here
  res.write(createTextEvent(review));

  // 3. Signal done
  res.write(createDoneEvent());
  res.end();
});
```

Ask Copilot to help you fill in `generateReview()` based on your chosen personality.

### Step 4: Test it locally (2 min)

```bash
node server.js
```

Test with curl:
```bash
curl -X POST http://localhost:3000/agent \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [{
      "role": "user",
      "content": "Review this code:\n\nfunction login(user, pass) {\n  if (user == \"admin\" && pass == \"password123\") {\n    return true;\n  }\n  return false;\n}"
    }]
  }'
```

> "If your extension is roasting that login function, you're in business."

---

## Stretch Goals (If Time Permits)

### Connect to a real LLM

Instead of hardcoded responses, use the incoming request's token to call an LLM:

> "Update the extension to forward the user's message to an LLM API with a system prompt that sets the personality. Stream the LLM's response back token by token using createTextEvent."

### Register it on GitHub (post-workshop)

To make it available in real Copilot Chat:
1. Go to **GitHub Settings → Developer Settings → GitHub Apps → New GitHub App**
2. Set the Copilot agent URL to your deployed server
3. Install it on your account

Full guide: https://docs.github.com/copilot/building-copilot-extensions

---

## Debrief (2 min)

> "You just built a Copilot Extension. The same architecture powers every extension in the Copilot ecosystem — from Sentry to Docker to Datadog. The protocol is simple: receive messages, process, stream back. The SDK handles the wire format."

> "The interesting part isn't the plumbing — it's what you do with it. You could build an extension that queries your internal docs, runs database migrations, checks your CI pipeline, or translates between your team's microservices. Any API your company has can become a Copilot Extension."

**Key resources:**
| Resource | URL |
|----------|-----|
| Copilot Extensions Docs | https://docs.github.com/copilot/building-copilot-extensions |
| @github/copilot-sdk on npm | https://www.npmjs.com/package/@github/copilot-sdk |
| Extension Quickstart | https://docs.github.com/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/building-copilot-agents-with-the-copilot-sdk |
| Example Extensions | https://github.com/copilot-extensions |
