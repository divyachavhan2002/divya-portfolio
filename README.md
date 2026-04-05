# Divya Chavhan — Personal Portfolio

A modern, fully responsive personal portfolio website built with **Next.js 16**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**.

🔗 **Live:** [dc-dev-portfolio.vercel.app](https://dc-dev-portfolio.vercel.app)
📂 **Repo:** [github.com/divyachavhan2002/divya-portfolio](https://github.com/divyachavhan2002/divya-portfolio)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
| Animations | Framer Motion |
| Icons | React Icons |
| Contact Form | WhatsApp + Email (direct links) |
| Deployment | Vercel |

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, animated title, CTA buttons, social links |
| **Stats** | Animated counters (projects, experience, technologies) |
| **About** | Bio, highlights, contact chips |
| **Skills** | Animated progress bars grouped by category |
| **Experience** | Timeline layout with role, company, achievements |
| **Education** | Degree, CGPA, relevant coursework |
| **Projects** | Cards with tech tags, GitHub and live demo links |
| **Certifications** | Certification cards with skills and duration |
| **Languages** | Language proficiency bars |
| **Contact** | WhatsApp and email CTA cards, social links |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout — Navbar, Footer, ThemeProvider
│   ├── page.tsx          # Home page — all sections rendered here
│   └── globals.css       # Global styles, CSS variables, utility classes
├── components/           # Reusable UI components
│   ├── Navbar/           # Top navigation with active section tracking
│   ├── Footer/           # Footer with social links and back-to-top
│   ├── Particles/        # Animated canvas particle background
│   ├── ScrollReveal/     # Scroll-triggered entrance animation wrapper
│   ├── TextReveal/       # Animated cycling text (hero title)
│   └── AnimatedCounter/  # Count-up animation for stats
├── context/
│   └── ThemeContext.tsx  # Dark / light theme state
├── data/                 # Single source of truth for all app data
│   ├── resume.ts         # Edit this to update all portfolio content
│   ├── config.ts         # Site config, feature flags, animation constants
│   ├── index.ts          # Barrel export — components import from @/data
│   └── types.ts          # All TypeScript interfaces
├── locales/
│   └── en.json           # All UI strings (labels, headings, buttons)
└── sections/             # One folder per page section
    ├── Hero/ Stats/ About/ Skills/ Experience/
    ├── Education/ Projects/ Certifications/
    ├── Languages/ Contact/
public/
├── images/               # Avatar and project screenshots
└── resume/               # Resume PDF
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Updating Content

| What to update | File to edit |
|---|---|
| Name, bio, skills, projects, experience, education, certifications | `src/data/resume.ts` |
| Page headings, button labels, section subtitles | `src/locales/en.json` |
| SEO title, description, keywords, OG image | `src/data/config.ts` |
| Feature toggles (theme toggle, resume download, featured badge) | `src/data/config.ts` — featureFlags |

---

## Deployment (Vercel)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)

The `vercel.json` is pre-configured with the `bom1` (Mumbai) region for best performance.

---

## License

MIT
