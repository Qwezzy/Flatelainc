# Changelog

## Unreleased — Travel and Energy pillar pages

- Add dedicated `/travel` and `/energy` routes for intended holdco lines 04 and 05
- Expand Travel and Energy copy (purpose, audience, intended programmes, honest limits)
- Home `#travel` / `#energy` deep sections read from `lib/travel.ts` / `lib/energy.ts`; footer and cards link to `/travel` and `/energy`
- Contact lists `travel@flatelainc.co.za` alongside education@ / data@ / energy@

## Unreleased — Data & Technology pillar page

- Add dedicated `/data` route for intended holdco line 02
- Expand Data & Technology copy (purpose, audience, intended offerings, honest limits)
- Home `#data` deep section reads from `lib/data.ts`; footer and Data card link to `/data`
- Contact lists `data@flatelainc.co.za` alongside other pillar addresses

## Unreleased — Education pillar page

- Add dedicated `/education` route for intended holdco line 06
- Expand Education copy (purpose, audience, intended programmes, honest limits)
- Home `#education` deep section reads from `lib/education.ts`; footer and Education card link to `/education`

## Unreleased — legal and brand accuracy

- Present holding company FLATELA (PTY) LTD (2026/291183/07); public name Flatela; chrome uses legal name plus public name Flatela
- Six pillars rewritten as intended lines, not live divisions
- Values: Integrity, Growth, Foundation, Sustainability
- Remove IATA, POPIA-processor, SETA, Flatela Verify, and mixed legal-name claims
- Brand tokens: brown / green / moss / cream
- Interim fonts: Source Serif 4 + Source Sans 3
- Add /privacy and /legal


## v1.0.0 — 2026-04-27

Initial release of the Flatela public website.

### Implemented

- Full single-page site following the §11 implementation order from the brief
- Navigation: scroll-aware sticky nav with transparent→cream transition, mobile slide-in drawer with olive leaf marks
- Hero: full-viewport with staggered entrance animation, decorative tree silhouette, grain texture
- Story: two-column desktop layout with large ornamental number, moss pull-quote rule
- Six Pillars: responsive 1→2→3 column grid with hover-lift cards and custom SVG icons
- Pillar Deep Dives: six anchored sections with alternating cream/cream-soft backgrounds and synergy callouts
- Synergies: stacked cards on mobile; animated hexagonal diagram on desktop with hover-highlight connections
- Timeline: vertical moss-rule layout on mobile; three-column phase layout on desktop with leaf-marked milestones
- Values: 1→3 column grid with large moss Fraunces number ornaments
- Contact: dark brown section with moss leaf bullet points and mailto links
- Footer: dark section continuing from Contact with SVG logo, link columns, and italic tagline

### Design tokens

- Palette: cream/forest/earth/bronze in v1.0.0; later replaced by brown/green/moss/cream
- Fonts: Fraunces (display, with opsz + SOFT axes) + Manrope (body)
- Animations: `cubic-bezier(0.16, 1, 0.3, 1)` easing throughout; all respect `prefers-reduced-motion`
- Accessibility: semantic HTML, correct heading hierarchy, skip-to-content link, focus rings, ARIA labels

### Pending before ship

- Replace SVG placeholder logos with actual `flatela_logo.jpg` / `flatela_logo.png` brand files
- Generate and add `og-image.png` to `/public/`
- Run Lighthouse audit and verify §12 quality checklist
