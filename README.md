# Sriram V — Portfolio

A minimal, system-monitor-themed portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The visual language borrows from object-detection UIs (bounding boxes, confidence scores, status badges) as a nod to the computer-vision work in the resume.

## Quick start (in VS Code)

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or GitHub Pages.

## Where to edit things

- **All your content** (name, bio, projects, skills, experience, certs, links) lives in one file: `src/data.js`. Edit that file first — most changes don't require touching any component.
- `src/components/Hero.jsx` — top section with your name and the animated detection box.
- `src/components/Experience.jsx` — work + education timeline.
- `src/components/Projects.jsx` — project cards (click to expand).
- `src/components/Stack.jsx` — skills + certifications.
- `src/components/Contact.jsx` — contact block + footer.
- `src/index.css` — global styles, fonts, custom scrollbar.
- `tailwind.config.js` — color palette, fonts, animations (design tokens).

## To personalize before deploying

1. In `src/data.js`, update `profile.links` with your real GitHub, LinkedIn, and LeetCode URLs.
2. Add a live `link` to each project in `src/data.js` once deployed (currently empty strings).
3. Swap `public/favicon.svg` if you want a different icon.
4. Update the page title in `index.html` if needed.

## Stack

React 19 · Vite · Tailwind CSS 3 · Framer Motion · lucide-react
