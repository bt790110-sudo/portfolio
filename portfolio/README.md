# Bikram Thapa — Portfolio

A fast, single-page developer portfolio built with React 19, Vite, and Tailwind CSS v4, designed to deploy cleanly to GitHub Pages.

**Live demo:** _add your GitHub Pages URL here after deploying_

![Portfolio preview](./public/og-image.png)

## Features

- **Single-page, scroll-based layout** — Home, About, Skills, Projects, Experience, Education, and Contact all live on one page with smooth-scroll anchor navigation. No router, no route-based bugs on static hosting.
- **Dark / light theme** with system-preference detection and `localStorage` persistence.
- **Animated hero** with a typing effect, an ambient network-graphic illustration, and a terminal-styled console card.
- **Filterable, searchable project grid** with category tags, tech stacks, and links to code/live demos.
- **Working contact form** — sends via [EmailJS](https://www.emailjs.com/) if configured, otherwise falls back to opening the visitor's email client.
- **One config file** (`src/data/portfolioData.js`) drives every piece of personal content: name, bio, skills, projects, experience, education, social links, and contact info.
- **Accessible** — semantic HTML, visible keyboard focus states, ARIA labels on icon-only buttons, and `prefers-reduced-motion` support.
- **SEO-ready** — meta description/keywords, Open Graph + Twitter Card tags, `robots.txt`, `sitemap.xml`, and a generated social preview image.
- **GitHub Pages ready out of the box** — relative asset base path, `.nojekyll`, custom `404.html`, and a one-command deploy script.

## Tech stack

| Layer      | Choice                                    |
| ---------- | ------------------------------------------ |
| Framework  | React 19 + Vite 8                          |
| Styling    | Tailwind CSS v4 (via `@tailwindcss/vite`)  |
| Animation  | Framer Motion, `react-type-animation`      |
| Icons      | `react-icons`                              |
| Contact form | `@emailjs/browser`                       |
| Fonts      | Space Grotesk, Inter, JetBrains Mono (self-hosted via `@fontsource`, no external font requests) |
| Deployment | `gh-pages`                                 |

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png        ← social preview image (replace with your own)
│   ├── resume.pdf          ← placeholder — replace with your real resume
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── .nojekyll
├── src/
│   ├── assets/
│   │   └── profile.png     ← your photo
│   ├── components/         ← one component per section/UI piece
│   ├── data/
│   │   └── portfolioData.js ← ALL editable content lives here
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useActiveSection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Visit the local URL Vite prints (usually `http://localhost:5173`).

### Build

```bash
npm run build
```

Outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Customize your content

Open `src/data/portfolioData.js` and edit:

- `profile` — name, title, tagline, location, email, phone, WhatsApp number, resume link
- `socialLinks` — GitHub, LinkedIn, Twitter/X, Facebook, Instagram URLs
- `about` — bio paragraphs, interest tags, stat cards
- `skills` — categorized skill groups
- `projects` — title, description, tech stack, features, GitHub/demo links, category, featured flag
- `experience` / `education` — work history and academic background
- `emailjsConfig` — your EmailJS service ID, template ID, and public key (see below)

Replace these files with your own:

- `src/assets/profile.png` — your photo
- `public/resume.pdf` — your real resume (same filename, so no code changes needed)
- `public/og-image.png` — your own social preview image (1200×630 recommended)
- `public/favicon.svg` — your own icon

### Enabling the contact form (EmailJS)

By default the contact form falls back to opening the visitor's email client. To send messages directly:

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an email service and a template with `name`, `email`, `subject`, and `message` variables.
3. Copy your Service ID, Template ID, and Public Key into `emailjsConfig` in `src/data/portfolioData.js`.

## Deploying to GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full step-by-step guide, including repository settings and common fixes. Short version:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main

npm run deploy
```

Then in your repo's **Settings → Pages**, set the source to the `gh-pages` branch.

## License

Free to use and adapt for your own portfolio.
