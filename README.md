# Junaid Lone Portfolio

A one-page personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Dark minimalist design with muted green accent
- Desktop sticky intro sidebar + mobile stacked layout
- Smooth scrolling section navigation with active-section highlight
- Framer Motion fade/slide section reveal animations
- Accessible semantic HTML and keyboard focus states
- SEO metadata configured in the app layout
- Optional projects placeholder included but hidden by default
- Ready to deploy on Vercel

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Quick Start

1. Install Node.js 20+.
2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Build and Run Production

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this folder to a Git repository.
2. Import the repository into Vercel.
3. Keep default Next.js build settings.
4. Deploy.

## Customize Content

Update your details and section content in:

- `src/data/portfolio.ts`

## Project Structure

```text
junaid-portfolio/
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ AnimatedSection.tsx
│  │  ├─ DesktopSidebar.tsx
│  │  ├─ ExperienceTimeline.tsx
│  │  ├─ MobileNav.tsx
│  │  └─ PortfolioPage.tsx
│  ├─ data/
│  │  └─ portfolio.ts
│  └─ types/
│     └─ portfolio.ts
├─ package.json
├─ tailwind.config.ts
└─ ...
```
