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
    summary: `An intended holding-company line for survey research, secure storage, machine learning, and data management tailored to South African needs. It is a planned area of work, not a live processor or trading division.`,
    deepBullets: [
      "Intended: survey design, fieldwork, and reporting",
      "Intended: cloud and on-premise storage designed with POPIA in mind",
      "Intended: machine learning for South African use cases",
      "Intended: data pipelines, governance, and BI infrastructure",
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
    summary: `An intended line for leisure, corporate, and educational travel. Packages for school excursions would be designed with the Education line if both are built. This is not a live travel agency and we do not claim IATA accreditation.`,
    deepBullets: [
      "Intended: flights, hotels, visas, insurance, and curated tours",
      "Intended: corporate travel management for South African businesses",
      "Intended: educational excursion packages for schools",
      "Intended: Career Expo logistics alongside Education",
    ],
  },
  {
    number: "05",
    slug: "energy",
    name: "Energy",
    tagline: "Cleaner, more reliable power for South African sites.",
    icon: "sun" as const,
    summary: `An intended line for residential and commercial solar PV, battery storage, and related energy work — answering a real national need. Near-term cash flow from this work, if it starts, could fund longer-horizon projects. Energy is not a live installation business on this site.`,
    deepBullets: [
      "Intended: grid-tied, off-grid, and hybrid solar PV systems",
      "Intended: battery storage for load-shedding resilience",
      "Intended: energy audits, installation, and monitoring",
      "Intended: a flagship installation if an Education Centre is built",
    ],
  },
  {
    number: "06",
    slug: "education",
    name: "Education",
    tagline: "Unlocking potential, one community at a time.",
    icon: "sprout" as const,
    summary: `An intended line for a community Education Centre — computer literacy, robotics and STEM, vocational training, and career expos. These are plans, not current programmes. We do not operate educator-screening products and have not applied for SETA or government funding.`,
    deepBullets: [
      "Intended: computer literacy and community internet access",
      "Intended: robotics, coding, and STEM workshops",
      "Intended: vocational training",
      "Intended: career expos with corporate partners",
    ],
  },
] as const;

export type PillarIcon = (typeof PILLARS)[number]["icon"];
export type Pillar = (typeof PILLARS)[number];
