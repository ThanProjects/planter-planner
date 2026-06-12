# Planter Planner

A mobile-first web app with a catalog of 6 DIY wood planter designs. Each design includes a scaled drawing, price estimate, lumber/supplies list, cut list, and step-by-step build instructions.

## Designs included

| Design | Skill | Est. Cost | Build Time |
|---|---|---|---|
| Stacked Cedar Planter | Beginner | $60–$85 | 2–4 hrs |
| Legged Planter Box | Beginner | $45–$65 | 4–5 hrs |
| Modular Patio Planter | Beginner | $30–$45 | 1–2 hrs |
| Cedar Wall Planter | Beginner | $30–$45 | 2–3 hrs |
| Tall Slatted Planter | Beginner | $45–$60 | 2–3 hrs |
| Tall Privacy Planter | Intermediate | $90–$120 | 4–6 hrs |

## Files

```
index.html   — app shell
style.css    — mobile-first styles
app.js       — planter data, SVG drawings, render logic
```

No build step, no dependencies. Pure HTML/CSS/JS.

## Run locally

```bash
# Any static file server works, e.g.:
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

> **Note:** Opening `index.html` directly as a `file://` URL works fine — no server needed.

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects a static site.

### Option B — GitHub + Vercel dashboard

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Leave all settings at defaults (Framework: Other, output directory: `.`).
4. Click **Deploy**. Done — Vercel gives you a public URL.

### Option C — Drag and drop

1. Go to [vercel.com/new](https://vercel.com/new).
2. Drag this project folder onto the page.
3. Click **Deploy**.

## Deploy to GitHub Pages

1. Push to a GitHub repo.
2. Go to **Settings → Pages**.
3. Source: `Deploy from a branch` → branch: `main`, folder: `/ (root)`.
4. Save. Your app will be live at `https://<username>.github.io/<repo-name>`.

## Customizing

All planter data lives in the `planters` array at the top of `app.js`. Each planter object contains:

- `name`, `skill`, `buildTime`, `priceMin`, `priceMax`
- `description`, `dimensions`
- `lumber[]`, `supplies[]`, `tools[]`
- `cutList[]` — labeled parts with sizes and quantities
- `steps[]` — ordered build instructions
- `tip` — optional highlighted tip
- `svg` — inline SVG diagram (viewBox 400×280 or 400×290)

To add a new design, copy an existing planter object and edit its fields.

## Price estimates

Prices reflect approximate US retail lumber costs (cedar/pine) as of 2024–2025. Actual prices vary by region and supplier. The estimates include lumber and basic hardware but not tools, soil, or finish.
