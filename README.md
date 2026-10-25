# Scroll-Driven Hero (React + GSAP + Tailwind)

A hero section where a car drives across the screen as you scroll, revealing the headline behind it and
stamping in four stat cards. Built with React (Vite), GSAP ScrollTrigger and Tailwind CSS.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
```bash
npm run deploy      # builds and pushes /dist to the gh-pages branch
```
Then on GitHub: Settings → Pages → Source: "Deploy from a branch" → branch `gh-pages` / root.

## Structure
- `src/components/Hero.jsx` – layout
- `src/hooks/useHeroAnimation.js` – all GSAP (intro + scroll timeline)
- `src/data/stats.js` – stat card content, colors, timing
- `src/components/Car.jsx` – the car (SVG; swap for the PNG if you have it)
