# Ankit Kumar — Portfolio Website

A personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion** (scroll animations) and **Lucide** (icons).

## Run it locally

```bash
cd portfolio-website
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

The static site is output to `dist/` — deploy it anywhere:

- **Netlify / Vercel**: drag the `dist` folder in, or connect the Git repo.
- **GitHub Pages**: push to a repo and serve from `dist`.

## Customizing

- All content lives in `src/data.js` — name, links, skills, experience, projects, education.
- The downloadable résumé is `public/Ankit-Kumar-Resume.pdf` — replace it with your latest PDF (keep the same filename so the navbar button keeps working).
- To add your photo: put it in `public/` (e.g. `public/photo.jpg`) and reference it as `/photo.jpg` from any component.

## Sections

Hero (with availability badge + stats) → About → Skills → Experience timeline → Projects → Education & Certifications → Contact (with copy-email button) → Footer.
