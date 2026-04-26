# Harshit5555.github.io

Personal portfolio for Harshit Joshi. Vite + React + TypeScript, Tailwind, a single
`@react-three/fiber` scene in the hero, and a static GitHub Pages deploy.

## Local development

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to `http://localhost:5173`).

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the built site locally
```

## Deploy

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys
to GitHub Pages on every push to `main`. After the first push:

1. In the repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set the source to **GitHub Actions**.
3. The next push to `main` will publish the site at
   `https://harshit5555.github.io/`.

## Common edits

- **Repo rename / fork:** if you move this code to a project repo (e.g.
  `harshit-portfolio`), open `vite.config.ts` and set
  `base: '/harshit-portfolio/'`. For this user-page repo
  (`Harshit5555.github.io`), the base stays `'/'`.
- **GitHub project URLs:** the four project links in
  `src/sections/Projects.tsx` are placeholders pointing to
  `github.com/Harshit5555/<repo-name>`. Replace each `href` with the real repo.
- **Real CV:** drop a real PDF at `public/Harshit_Joshi_CV.pdf` (overwrite the
  placeholder). The top-bar `cv` link picks it up automatically.

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS (single warm-paper palette, no dark mode)
- `@react-three/fiber` + `@react-three/drei` (one extruded-text scene in the hero)
- Framer Motion (subtle fades only)
- Fraunces / Inter / JetBrains Mono via Google Fonts

## Structure

```
src/
  main.tsx
  App.tsx
  index.css
  sections/   # one file per page section
  three/      # the hero scene + mobile SVG fallback
  lib/        # motion variants, reduced-motion + viewport hooks
public/
  fonts/      # helvetiker typeface JSON for Text3D
  og.png      # 1200x630 social card
  favicon.svg
  Harshit_Joshi_CV.pdf
```

## Performance notes

- The 3D scene is dynamically imported and lazy-loaded after first paint.
- On screens under 768px the canvas is replaced with a static SVG.
- `prefers-reduced-motion` disables the float, pointer parallax, and section
  entrance animations.
