export const TIMELINE = [
  {
    phase: "Year 1",
    months: "Months 1–12",
    title: "Foundation & First Revenue",
    summary:
      "Establishing the legal foundation, launching the cash-flow divisions, and beginning the Education Centre.",
    milestones: [
      "Register Flatela Inc. (Pty) Ltd and divisional entities",
      "Launch Energy division — first residential solar installations",
      "Begin Property renovation services",
      "Open the Education Centre — Computer Literacy and Internet Cafe",
      "Submit first government and SETA funding applications",
      "Launch Retail e-commerce platform",
      "Register Travel division with host IATA agency",
      "Register Data division as POPIA-compliant processor",
      "Build the Flatela Inc. brand across all platforms",
    ],
  },
  {
    phase: "Year 2",
    months: "Months 13–24",
    title: "Scale & Synergy",
    summary:
      "Each pillar starts contributing revenue. The cross-divisional synergies start delivering compounding returns.",
    milestones: [
      "Energy expansion to commercial clients; flagship install at Education Centre",
      "Acquire first rental property asset",
      "International fashion and furniture supplier agreements signed",
      "First corporate travel clients onboarded",
      "First Career Expo hosted with corporate CSI sponsorship",
      "Locksmith vocational training programme launched",
      "First machine learning or data management contract delivered",
      "Flatela Verify approaches Department of Education",
      "Robotics & STEM programme launched in partner schools",
    ],
  },
  {
    phase: "Year 3",
    months: "Months 25–36",
    title: "Consolidation & Reach",
    summary:
      "A diversified family enterprise generating meaningful revenue across all six pillars, with a proven foundation for national expansion.",
    milestones: [
      "Combined revenue target of R10M+ across all divisions",
      "Data division evaluated for SaaS productisation",
      "Retail expansion into wholesale distribution",
      "AfCFTA export opportunities explored",
      "Flatela Verify scaled nationally beyond Gauteng",
      "Formalised governance with divisional directors",
      "Strategic partnerships, franchise models, or external funding evaluated",
    ],
  },
] as const;

export type TimelinePhase = (typeof TIMELINE)[number];
