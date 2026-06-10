# Planter Planner — Claude Handoff

## What this project is
A mobile-first static web app cataloguing 6 DIY wood planter designs. Each design has an isometric SVG drawing, price estimate, lumber/supplies/tools list, cut list, step-by-step instructions, and a link to the original source plans. Live at **https://planter-planner-nine.vercel.app**.

---

## File structure
```
/Users/thandrage/Claude/Projects/Planter Planner/
├── index.html                  — app shell, links style.css + app.js
├── style.css                   — mobile-first CSS (2-col card grid, detail view)
├── app.js                      — all planter data + SVGs + render logic
├── images/
│   ├── classic-planter-thumb.png   — isometric photo from YellaWood PDF (card)
│   └── classic-planter-detail.png  — exploded parts view from PDF (detail page)
├── push.sh                     — commit + rebase + push in one shot
├── package.json                — version 1.x.x, scripts: { "push": "bash push.sh" }
├── vercel.json                 — SPA rewrite rule
├── .vercel/project.json        — projectId + orgId for Vercel MCP
├── .gitignore                  — ignores .push and .push.log
├── com.thanprojects.planterplanner.plist  — copy to ~/Library/LaunchAgents/ (see below)
└── .github/workflows/
    ├── version-bump.yml        — auto-bumps package.json patch on every push to main
    └── claude.yml              — @claude mention → Claude reads issue, opens PR
```

---

## GitHub & Vercel
- **Org**: ThanProjects
- **Repo**: https://github.com/ThanProjects/planter-planner
- **Vercel project ID**: `prj_7TEtwGDABKlh1mi0xmEkI3q4oFFh`
- **Vercel team ID**: `team_NcTpgXiRFCxvX2HQDK2yRYGB`
- **Live URL**: https://planter-planner-nine.vercel.app
- Vercel auto-deploys on push to `main` via GitHub integration (may need reconnecting after org transfer — check Settings → Git in Vercel dashboard if deploys stop working)

---

## How to deploy changes

### Automatic (preferred)
Write a `.push` file to the project root with the commit message as its content. The Mac LaunchAgent watches for this file and runs `push.sh` automatically.

```js
// Claude does this at the end of any change session:
Write({ file_path: '/Users/thandrage/Claude/Projects/Planter Planner/.push',
        content: 'feat: description of changes' })
```

The LaunchAgent plist is at `com.thanprojects.planterplanner.plist` in the project folder. It must be loaded once:
```bash
cp '/Users/thandrage/Claude/Projects/Planter Planner/com.thanprojects.planterplanner.plist' ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.thanprojects.planterplanner.plist
```
Push log is written to `.push.log` in the project folder.

### Manual fallback
```bash
bash '/Users/thandrage/Claude/Projects/Planter Planner/push.sh' "your message"
```
`push.sh` handles: lock file cleanup → git add -A → commit → stash → pull --rebase → stash pop → push.

---

## Sandbox constraints (important)
- **Cannot push to GitHub from bash** — the sandbox network blocks HTTPS to github.com. All git pushes must go through the Mac (via the LaunchAgent or manual push.sh).
- **git lock files** — the macOS-mounted filesystem returns EPERM when git tries to clean up `.git/index.lock`. `push.sh` pre-clears these with `rm -f`.
- **web_fetch CAN reach api.github.com** (GET only) — useful for reading repo state.
- **Vercel MCP tools available** — `deploy_to_vercel` only advises to run CLI, doesn't deploy directly from sandbox.

---

## app.js structure
```js
const planters = [ /* array of 6 planter objects */ ]

// Each planter object:
{
  id, name, skill,           // 'beginner' | 'intermediate'
  buildTime, priceMin, priceMax,
  description, dimensions,
  lumber[],                  // [{ item, qty }]
  supplies[],
  tools[],
  cutList[],                 // [{ label, desc, size, qty }]
  steps[],
  tip,                       // HTML string
  sourceUrl, sourceName,     // link shown at bottom of detail page
  thumbSvg,                  // optional — used for card thumbnail (Classic uses PNG img tag)
  svg,                       // isometric SVG or img tag for detail view
}
```

`renderCatalog()` uses `p.thumbSvg || p.svg` for cards.
`renderDetail(p)` uses `p.svg` for the detail drawing.

### The 6 planters
| id | Name | Skill | Source |
|----|------|-------|--------|
| `window-box` | Window Box | Beginner | YellaWood |
| `classic-planter` | Classic Planter Box | Beginner | YellaWood PDF (PNG images) |
| `elevated-planter` | Elevated Planter Box | Beginner | FreeWoodworkingPlan |
| `raised-bed` | Raised Garden Bed | Beginner | YellaWood |
| `tiered-planter` | Tiered Planter | Intermediate | CraftCamp |
| `trellis-planter` | Trellis Planter | Intermediate | Real Cedar |

---

## SVG drawing style
All drawings use true isometric projection (30° axes). Color palette:
- Front face: `#F2D000` (yellow)
- Right face: `#C8A800` (darker)
- Top face: `#DAB800` (medium)
- Posts/legs: `#B09000`
- Stroke: `#2A1800`, width 1.5
- Crosshatch overlay: `<pattern id="h">` diagonal lines at 45°, opacity 0.6

Classic Planter Box uses extracted PNGs from the YellaWood PDF instead of SVG.

---

## @claude GitHub Action
Workflow: `.github/workflows/claude.yml`  
Trigger: comment `@claude <instruction>` on any issue or PR.  
Requirements: `ANTHROPIC_API_KEY` secret set at org level (ThanProjects), Claude GitHub App installed on the org.  
Claude will read the repo, make changes, and open a PR automatically.

---

## Version bumping
GitHub Actions workflow bumps the patch version in `package.json` after every push to main. Commit message includes `[skip ci]` to avoid infinite loops. If a push is rejected with "fetch first", run `push.sh` — it does `pull --rebase` automatically.
