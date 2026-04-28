# Flatela Inc. — Website

The public-facing marketing website for Flatela Inc., a South African family-owned holding company operating across six divisions: Property, Data & Technology, Retail, Travel, Energy, and Education.

## Design Philosophy

The aesthetic is **Heritage Editorial** — the weight of a refined African family publication, not a SaaS product. The palette is derived directly from the tree-of-life logo (earthy creams, deep forest greens, warm bronze). Typography is Fraunces (display) + Manrope (body). Every animation is restrained, slow-eased, and scroll-triggered.

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS v3 with custom design tokens
- **Animation:** Framer Motion (scroll-triggered reveals, staggered entrance)
- **Fonts:** Fraunces + Manrope via `next/font/google`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo Files

Place the following files in `/public/` before deploying:

- `flatela_logo.jpg` — Dark bronze on white (for light backgrounds, including the nav)
- `flatela_logo.png` — Olive on black (for dark backgrounds, including the footer)
- `og-image.png` — Open Graph image (1200×630px)

SVG placeholder logos are currently in place. Replace with the actual brand files.

## Deployment

Deploy to **Vercel** (recommended) or **Netlify**:

**Vercel:**

```bash
npx vercel
```

**Netlify:** Push to GitHub and connect via the Netlify dashboard. The `npm run build` output directory is `.next`.

Set the following environment variables if needed:

- None required for v1 (no analytics, no external services)

## Project Structure

```text
app/
  layout.tsx        Root layout (fonts, metadata, skip-link)
  page.tsx          Single-page composition
  globals.css       CSS variables + Tailwind

components/
  layout/
    Navigation.tsx  Scroll-aware sticky nav + mobile drawer
    Footer.tsx      Dark footer with link columns
  sections/
    Hero.tsx        Full-viewport hero with entrance animation
    Story.tsx       Origin story with pull-quote
    Pillars.tsx     Six-pillar overview grid
    PillarCard.tsx  Individual pillar card with hover lift
    PillarDeep.tsx  Six deep-dive sections (alternating tone)
    Synergies.tsx   Connection cards + desktop hex diagram
    Timeline.tsx    Three-phase roadmap (mobile vertical / desktop columns)
    Values.tsx      Six core values grid
    Contact.tsx     Dark contact section
  ui/
    SectionHeader.tsx  Eyebrow + headline + subhead pattern
    Reveal.tsx         Scroll-reveal wrapper
    PillarIcon.tsx     Custom SVG icons for each pillar

lib/
  pillars.ts        Pillar data (single source of truth)
  synergies.ts      Synergy connection data
  timeline.ts       Three-phase roadmap data
  values.ts         Six core values

public/
  flatela_logo_dark.svg   Placeholder logo (olive on dark)
  flatela_logo_light.svg  Placeholder logo (bronze on cream)
```

## Quality Checklist

Before declaring done, verify §12 of the brief: visual, content, mobile, performance, accessibility.
