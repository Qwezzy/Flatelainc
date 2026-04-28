# Changelog

## v1.0.0 — 2026-04-27

Initial release of the Flatela Inc. public website.

### Implemented

- Full single-page site following the §11 implementation order from the brief
- Navigation: scroll-aware sticky nav with transparent→cream transition, mobile slide-in drawer with olive leaf marks
- Hero: full-viewport with staggered entrance animation, decorative tree silhouette, grain texture
- Story: two-column desktop layout with large ornamental number, bronze pull-quote rule
- Six Pillars: responsive 1→2→3 column grid with hover-lift cards and custom SVG icons
- Pillar Deep Dives: six anchored sections with alternating cream/cream-soft backgrounds and synergy callouts
- Synergies: stacked cards on mobile; animated hexagonal diagram on desktop with hover-highlight connections
- Timeline: vertical bronze-rule layout on mobile; three-column phase layout on desktop with leaf-marked milestones
- Values: 1→3 column grid with large bronze Fraunces number ornaments
- Contact: dark `forest-deep` section with bronze leaf bullet points and mailto links
- Footer: dark section continuing from Contact with SVG logo, link columns, and italic tagline

### Design tokens

- Palette: cream/forest/earth/bronze from §5.1, no deviations
- Fonts: Fraunces (display, with opsz + SOFT axes) + Manrope (body)
- Animations: `cubic-bezier(0.16, 1, 0.3, 1)` easing throughout; all respect `prefers-reduced-motion`
- Accessibility: semantic HTML, correct heading hierarchy, skip-to-content link, focus rings, ARIA labels

### Pending before ship

- Replace SVG placeholder logos with actual `flatela_logo.jpg` / `flatela_logo.png` brand files
- Generate and add `og-image.png` to `/public/`
- Run Lighthouse audit and verify §12 quality checklist
