#!/usr/bin/env bash
# ──────────────────────────────────────────────
#  Flight Plan: Copilot Dev Day — Setup Script
#  Run once before presenting. Installs deps,
#  verifies tools, and confirms apps start.
# ──────────────────────────────────────────────
set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

pass() { echo -e "  ${GREEN}✓${NC} $1"; }
warn() { echo -e "  ${YELLOW}⚠${NC} $1"; }
fail() { echo -e "  ${RED}✗${NC} $1"; }

echo ""
echo "✈  Flight Plan — Pre-Flight Check"
echo "──────────────────────────────────"

# ── 1. Required tools ──────────────────────
echo ""
echo "Checking tools…"

if command -v node &>/dev/null; then
  NODE_VER=$(node -v)
  pass "Node.js $NODE_VER"
else
  fail "Node.js not found — install 18+ from https://nodejs.org"
  exit 1
fi

if command -v npm &>/dev/null; then
  pass "npm $(npm -v)"
else
  fail "npm not found"
  exit 1
fi

if command -v docker &>/dev/null; then
  pass "Docker $(docker --version | awk '{print $3}' | tr -d ',')"
else
  warn "Docker not found — Demo 2 (containerization) will be talk-only"
fi

if command -v gh &>/dev/null; then
  if gh copilot --help &>/dev/null 2>&1; then
    pass "gh CLI + Copilot extension"
  else
    warn "gh CLI found but Copilot extension missing — run: gh extension install github/gh-copilot"
  fi
else
  warn "gh CLI not found — Copilot CLI demos will be talk-only"
fi

# ── 2. Install dependencies ────────────────
echo ""
echo "Installing demo dependencies…"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

cd "$SCRIPT_DIR/demos/01-legacy-upgrade/legacy-app"
npm install --silent 2>/dev/null
pass "Demo 1: Legacy Upgrade deps installed"

cd "$SCRIPT_DIR/demos/02-webapp-to-containers/webapp"
npm install --silent 2>/dev/null
pass "Demo 2: Web App deps installed"

# ── 3. Smoke-test both apps ────────────────
echo ""
echo "Smoke-testing apps…"

cd "$SCRIPT_DIR/demos/01-legacy-upgrade/legacy-app"
node -e "require('./server.js')" &
PID1=$!
sleep 2
if curl -sf http://localhost:3000/health > /dev/null 2>&1; then
  pass "Demo 1: Flight Tracker API responds on :3000"
else
  warn "Demo 1: Could not reach :3000 (port may be in use)"
fi
kill $PID1 2>/dev/null || true
wait $PID1 2>/dev/null || true

cd "$SCRIPT_DIR/demos/02-webapp-to-containers/webapp"
node -e "require('./server.js')" &
PID2=$!
sleep 2
if curl -sf http://localhost:8080/health > /dev/null 2>&1; then
  pass "Demo 2: Flight Dashboard responds on :8080"
else
  warn "Demo 2: Could not reach :8080 (port may be in use)"
fi
kill $PID2 2>/dev/null || true
wait $PID2 2>/dev/null || true

# ── 4. Summary ─────────────────────────────
echo ""
echo "──────────────────────────────────"
echo -e "${GREEN}✈  Pre-flight check complete.${NC}"
echo ""
echo "Quick start:"
echo "  Demo 1 → cd demos/01-legacy-upgrade/legacy-app && npm start"
echo "  Demo 2 → cd demos/02-webapp-to-containers/webapp && npm start"
echo "  Demo 3 → open demos/03-quick-wins/flight-board.html in browser"
echo ""
