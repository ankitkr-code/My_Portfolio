# Ankit Kumar — Portfolio Website

A personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion** (scroll animations) and **Lucide** (icons).

## About

I'm a Computer Science Engineering student at Jharkhand University of Technology (graduating 2026), based in Bengaluru, working toward becoming a full-stack developer with AI integration skills.

## Projects

- **LocalBizMarket** — local-business discovery and virtual-investment platform. React.js, Node.js, Firebase, Tailwind CSS, Chart.js. [Code](https://github.com/ankitkr-code/LocalbizMarket)
- **E-Library Management System** — admin and student portals with registration approval and book issue tracking. Python, Flask, JavaScript. [Code](https://github.com/ankitkr-code/e-library)
- **CognitiveQuest** — image puzzle game for Alzheimer's patients. Java, Spring Boot, PostgreSQL. [Code](https://github.com/ankitkr-code/CognitiveQuestgame)
- **Susruta Samita Hospital** — online appointment booking site. HTML, CSS, JavaScript, Tailwind CSS. [Code](https://github.com/ankitkr-code/hospitalsite)

## Run it locally

```bash
cd portfolio-website
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The static site is output to `dist/`.

## Deployment

Deployed on **Vercel**. The Git repo is connected, so every push to the main branch redeploys automatically.

## Customizing

- All content lives in `src/data.js` — name, links, skills, experience, projects, education.
- The downloadable résumé is `public/Ankit-Kumar-Resume.pdf` — replace it with your latest PDF (keep the same filename so the navbar button keeps working).
- To add your photo: put it in `public/` (e.g. `public/photo.jpg`) and reference it as `/photo.jpg` from any component.

## Sections

Hero (with availability badge + stats) → About → Skills → Experience timeline → Projects → Education & Certifications → Contact (with copy-email button) → Footer.

## Contact

- Email: ankitm7250@gmail.com
- LinkedIn: https://linkedin.com/in/ankit-kumar-a34117311
- GitHub: https://github.com/ankitkr-code
