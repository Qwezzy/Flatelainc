export const PILLARS = [
  {
    number: "01",
    slug: "property",
    name: "Property",
    tagline: "Spaces people are proud to call home.",
    icon: "house" as const,
    summary: `An intended line for residential renovation and managed rental portfolios — addressing South Africa's need for quality, well-located housing. The work, when it begins, would be to acquire, renovate, furnish, and let properties. This is not a live trading division today.`,
    deepBullets: [
      "Intended: end-to-end residential renovations",
      "Intended: buy-to-let rental portfolios in urban nodes",
      "Intended: solar considered alongside Energy work",
      "Intended: furnishing supported by Retail sourcing",
    ],
  },
  {
    number: "02",
    slug: "data",
    name: "Data & Technology",
    tagline: "Turning information into better decisions.",
    icon: "circuit" as const,
    summary: `An intended line of FLATELA (PTY) LTD for survey research, secure storage, machine learning, and data management tailored to South African needs — one planned home for information work. It is not a live processor, SaaS shop, or trading division. Storage may be designed with POPIA in mind as an intention; we do not claim live POPIA-processor status.`,
    deepBullets: [
      "Purpose: an intended holdco line for survey, storage, ML, and data management — not a live processor",
      "Intended for: organisations and projects that need fieldwork, careful storage, and decision tooling once the line exists",
      "Intended later: learner systems and dashboards with Education if both lines exist",
      "Intended: survey design, fieldwork, and reporting",
      "Intended: cloud and on-premise storage designed with POPIA in mind",
      "Intended: machine learning for South African use cases",
      "Intended: data pipelines, governance, and BI infrastructure",
      "Limit: Benoni address is the holdco registered address, not a data centre",
    ],
  },
  {
    number: "03",
    slug: "retail",
    name: "Retail",
    tagline: "Bringing considered goods into South African homes.",
    icon: "package" as const,
    summary: `An intended line for direct importation of fashion goods and furniture, sold through e-commerce and wholesale channels. Furniture supply could later support Property renovations. Retail is not a live division today.`,
    deepBullets: [
      "Intended: fashion apparel, footwear, and accessories",
      "Intended: furniture and homeware from selected markets",
      "Intended: e-commerce and wholesale distribution",
      "Intended: supply into Property and Travel work as those lines start",
    ],
  },
  {
    number: "04",
    slug: "travel",
    name: "Travel",
    tagline: "Journeys remembered for a lifetime.",
    icon: "compass" as const,
    summary: `An intended line of FLATELA (PTY) LTD for leisure, corporate, and educational travel — planned agency work, not a live travel agency. Packages for school excursions would be designed with the Education line if both are built. We do not claim IATA accreditation or host-agency status.`,
    deepBullets: [
      "Purpose: an intended holdco line for leisure, corporate, and educational travel — not a live agency",
      "Intended for: leisure travellers, SA businesses, and school groups via Education if both lines exist",
      "Intended later: Career Expo logistics alongside Education if both lines exist",
      "Intended: flights, hotels, visas, insurance, and curated tours",
      "Intended: corporate travel management for South African businesses",
      "Intended: educational excursion packages for schools if Education exists",
      "Intended: Career Expo logistics alongside Education",
      "Limit: Benoni address is the holdco registered address, not a travel branch",
    ],
  },
  {
    number: "05",
    slug: "energy",
    name: "Energy",
    tagline: "Cleaner, more reliable power for South African sites.",
    icon: "sun" as const,
    summary: `An intended line of FLATELA (PTY) LTD for residential and commercial solar PV, battery storage, and related energy work — answering a real national need. Near-term cash flow from this work, if it starts, could fund longer-horizon projects. That is a hope, not revenue today. Energy is not a live installation business on this site.`,
    deepBullets: [
      "Purpose: an intended holdco line for solar PV, battery storage, and related energy work — not a live installer",
      "Intended for: homes and commercial sites needing resilience once the line exists",
      "Intended later: a flagship Education Centre install if the Centre is built",
      "Intended: grid-tied, off-grid, and hybrid solar PV systems",
      "Intended: battery storage for load-shedding resilience",
      "Intended: energy audits, installation, and monitoring",
      "Intended: a flagship installation if an Education Centre is built — planned, not installed",
      "Limit: Benoni address is the holdco registered address, not a depot",
    ],
  },
  {
    number: "06",
    slug: "education",
    name: "Education",
    tagline: "Unlocking potential, one community at a time.",
    icon: "sprout" as const,
    summary: `An intended line of FLATELA (PTY) LTD for a community Education Centre — so digital skills, vocational paths, and career visibility can sit in one planned place. The Centre is not open. These are plans, not current programmes. We do not operate educator-screening products and have not applied for SETA or government funding.`,
    deepBullets: [
      "Purpose: a planned community Education Centre, not a live school or campus",
      "Intended for: learners and families in communities the holdco can actually reach",
      "Intended later: school groups via Travel if both lines exist — no catchment or enrolment numbers",
      "Intended: computer literacy and community internet access",
      "Intended: robotics, coding, and STEM workshops",
      "Intended: vocational training",
      "Intended: career expos with corporate partners — partners are a hope, not bookings",
      "Limit: 75 Kanna Street is the company address, not an open campus",
    ],
  },
] as const;

export type PillarIcon = (typeof PILLARS)[number]["icon"];
export type Pillar = (typeof PILLARS)[number];

export function pillarMoreHref(slug: Pillar["slug"]) {
  if (slug === "education") return "/education";
  if (slug === "data") return "/data";
  if (slug === "travel") return "/travel";
  if (slug === "energy") return "/energy";
  return `/#${slug}`;
}
