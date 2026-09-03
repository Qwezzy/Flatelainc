# Flatela Inc. — Website

Public marketing site for FLATELA (PTY) LTD trading as Flatela Inc — a South African holding company registered on 9 April 2026 (2026/291183/07). Wordmark and chrome use Flatela Inc. Footer and legal pages use the legal name first. The six pillars are intended lines, not live trading divisions.

## Design Philosophy

The aesthetic is **Heritage Editorial** — the weight of a refined African family publication, not a SaaS product. The palette is brown #533E2B, green #657D4F, moss #857D4E, and cream #F3F0E6. Typography uses interim webfonts: Source Serif 4 (optical-size display for H1-H2; regular optical size for smaller serif) and Source Sans 3 (body) via next/font/google. Every animation is restrained, slow-eased, and scroll-triggered.

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS v3 with custom design tokens
- **Animation:** Framer Motion (scroll-triggered reveals, staggered entrance)
- **Fonts:** Source Serif 4 + Source Sans 3 via `next/font/google` (interim webfonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo files

- `public/flatela_logo_light.jpg` — colour mark for light chrome (white is baked in; do not put on a dark footer)
- `public/flatela_logo_dark.png` — reverse mark for dark backgrounds
- `og-image.png` — Open Graph image (optional; 1200×630px)

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
    Values.tsx      Four values grid
    Contact.tsx     Dark contact section
  ui/
    SectionHeader.tsx  Eyebrow + headline + subhead pattern
    Reveal.tsx         Scroll-reveal wrapper
    PillarIcon.tsx     Custom SVG icons for each pillar

lib/
  pillars.ts        Pillar data (single source of truth)
  synergies.ts      Synergy connection data
  timeline.ts       Three-phase roadmap data
  values.ts         Integrity, Growth, Foundation, Sustainability

app/privacy/page.tsx and app/legal/page.tsx
public/flatela_logo_dark.png and public/flatela_logo_light.jpg
```

## Quality Checklist

Before declaring done, verify §12 of the brief: visual, content, mobile, performance, accessibility.
