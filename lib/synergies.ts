export const SYNERGIES = [
  {
    a: "property" as const,
    b: "energy" as const,
    title: "Solar considered in every renovation.",
    body: "If both lines are built, properties with solar can attract stronger tenants. An Energy quotation would sit alongside Property renovations as standard — an intended connection, not a live service.",
  },
  {
    a: "property" as const,
    b: "retail" as const,
    title: "Furnished from a shared catalogue.",
    body: "If Retail imports furniture, it could furnish Property renovations at cost and serve as a showcase. That is how the lines are meant to feed each other.",
  },
  {
    a: "education" as const,
    b: "travel" as const,
    title: "Educational excursions, end-to-end.",
    body: "If Education organises school programmes and Travel is operating, Travel could manage the logistics. Shared relationships would be the point — when both exist.",
  },
  {
    a: "education" as const,
    b: "energy" as const,
    title: "A flagship solar installation.",
    body: "If an Education Centre is built, it could be powered by Energy work — uninterrupted learning during load-shedding, and a live demonstration. Planned, not installed.",
  },
  {
    a: "education" as const,
    b: "data" as const,
    title: "Learner systems and dashboards.",
    body: "If both lines operate, Data & Technology could build learner systems, surveys, and outcome dashboards for the Education Centre.",
  },
  {
    a: "retail" as const,
    b: "travel" as const,
    title: "Sourcing trips become buying trips.",
    body: "If Travel and Retail are both active, sourcing missions to other markets could support Retail buying — efficient logistics for deliberately curated stock.",
  },
] as const;

export type Synergy = (typeof SYNERGIES)[number];
