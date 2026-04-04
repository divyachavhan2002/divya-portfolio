# Divya Chavhan — Personal Portfolio

A modern, responsive personal portfolio website built with **Next.js 16**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

🔗 Live: [divya-portfolio.vercel.app](https://divya-portfolio.vercel.app)

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS + CSS Custom Properties |
| Animations | Framer Motion |
| Icons | React Icons |
| Contact Form | EmailJS |
| Deployment | Vercel |

---

## Sections

- **Hero** — Name, title, CTA buttons, social links
- **About** — Bio, highlights, contact chips
- **Skills** — Animated progress bars grouped by category
- **Experience** — Timeline layout with achievements
- **Education** — Degree, CGPA, coursework
- **Projects** — Hover-effect cards with tech tags and links
- **Certifications** — Certification cards
- **Contact** — EmailJS form with mailto fallback

---

## Project Structure

`
src/
├── app/             # Next.js App Router (layout, page, globals.css)
├── components/      # All section components + shared UI
├── context/         # ThemeContext (dark/light mode)
└── data/
    ├── resume.ts    # ← All personal data (edit this to update content)
    └── strings.ts   # All UI labels (localization-ready)
public/
├── resume/          # Place your resume PDF here
└── images/         # Project screenshots
`

---

## Getting Started

`ash
npm install
npm run dev
`

Open [http://localhost:3000](http://localhost:3000)

---

## Contact Form (EmailJS)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service + Template
3. Copy .env.local.example → .env.local and fill in your keys:

`
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
`

> Without EmailJS configured, the form falls back to a mailto: link.

---

## Deployment

Push to GitHub and import the repo on [vercel.com](https://vercel.com).
Add the EmailJS environment variables in Vercel Dashboard → Settings → Environment Variables.

---

## Customization

All personal data lives in **src/data/resume.ts** — edit this single file to update name, bio, skills, projects, experience, education and certifications.

---

## License

MIT