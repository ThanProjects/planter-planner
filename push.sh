#!/bin/bash
# push.sh — commit and push all local changes to GitHub
# Usage: bash push.sh "optional commit message"
#        OR triggered automatically by the LaunchAgent when .push exists
set -e
cd "$(dirname "$0")"

# Clear any stale git lock files left by the sandbox
rm -f .git/index.lock .git/HEAD.lock .git/COMMIT_EDITMSG.lock 2>/dev/null || true

# Read commit message from .push trigger file if present
if [ -f .push ]; then
  MSG=$(cat .push)
  rm -f .push
fi
MSG="${MSG:-${1:-update from Claude}}"

git add -A

if git diff --cached --quiet; then
  echo "Nothing to commit."
  exit 0
fi

git commit -m "$MSG"

# Pull remote changes (e.g. version-bump commits) before pushing
git stash 2>/dev/null || true
git pull --rebase origin main
git stash pop 2>/dev/null || true

git push origin main
echo "✓ Pushed: $MSG"
