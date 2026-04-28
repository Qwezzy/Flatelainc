export const SYNERGIES = [
  {
    a: "property" as const,
    b: "energy" as const,
    title: "Solar built into every renovation.",
    body: "Properties with solar attract premium tenants and command higher rents. Every Property renovation includes an Energy quotation as standard.",
  },
  {
    a: "property" as const,
    b: "retail" as const,
    title: "Furnished from our own catalogue.",
    body: "Retail-imported furniture furnishes Property renovations and rentals at cost — a built-in showcase for the Retail division.",
  },
  {
    a: "education" as const,
    b: "travel" as const,
    title: "Educational excursions, end-to-end.",
    body: "Travel manages the logistics for school excursions and Career Expos that the Education division organises. Shared relationships, shared revenue.",
  },
  {
    a: "education" as const,
    b: "energy" as const,
    title: "A flagship solar installation.",
    body: "The Education Centre is powered by an Energy division installation — uninterrupted learning during load-shedding, and a live demo for community customers.",
  },
  {
    a: "education" as const,
    b: "data" as const,
    title: "Learner systems and dashboards.",
    body: "Data builds and runs the learner management systems, surveys, and outcome dashboards that the Education Centre needs.",
  },
  {
    a: "retail" as const,
    b: "travel" as const,
    title: "Sourcing trips become buying trips.",
    body: "Travel-managed sourcing missions to Asia and Europe support Retail buying — efficient logistics for deliberately curated stock.",
  },
] as const;

export type Synergy = (typeof SYNERGIES)[number];
