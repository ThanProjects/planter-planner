#!/bin/bash
# push.sh — commit and push all local changes to GitHub
# Usage: bash push.sh "optional commit message"
set -e
cd "$(dirname "$0")"

# Clear any stale git lock files left by the sandbox
rm -f .git/index.lock .git/HEAD.lock .git/COMMIT_EDITMSG.lock 2>/dev/null || true

git add -A

if git diff --cached --quiet; then
  echo "Nothing to commit."
else
  MSG="${1:-update from Claude}"
  git commit -m "$MSG"
fi

# Pull remote changes (e.g. version-bump commits) before pushing
git stash 2>/dev/null || true
git pull --rebase origin main
git stash pop 2>/dev/null || true

git push origin main
echo "✓ Pushed. Vercel will deploy in ~30 seconds."
