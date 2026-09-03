export const TIMELINE = [
  {
    phase: "Year 1",
    months: "Months 1–12",
    title: "Foundation & first work",
    summary:
      "FLATELA (PTY) LTD is registered. Year 1 is about standing up the brand, opening conversations, and beginning the first intended lines — not claiming live divisions.",
    milestones: [
      "FLATELA (PTY) LTD registered (9 April 2026)",
      "Publish an accurate public site and legal pages",
      "Begin the first intended Energy and Property work if capacity allows",
      "Scope an Education Centre without treating it as open",
      "Scope Retail e-commerce without treating it as launched",
      "Scope Travel as an intended line — no IATA or host-agency claims",
      "Scope Data & Technology as an intended holdco line",
      "Build the Flatela brand with restraint",
    ],
  },
  {
    phase: "Year 2",
    months: "Months 13–24",
    title: "Scale & connection",
    summary:
      "If Year 1 work takes root, each intended pillar can start contributing. Cross-line connections are plans for compounding — not executed divisions.",
    milestones: [
      "Energy: expand toward commercial clients if residential work exists",
      "Property: consider a first rental asset if renovation work exists",
      "Retail: pursue supplier agreements if the line is active",
      "Travel: onboard first clients only if the line is operating",
      "Education: a first career expo only if the programme exists",
      "Vocational training scoped or launched only if the Centre exists",
      "Data: a first contract only if the line is operating",
      "STEM workshops only with real school partners",
    ],
  },
  {
    phase: "Year 3",
    months: "Months 25–36",
    title: "Consolidation & reach",
    summary:
      "A holding company with a proven foundation, and intended lines that have either begun or been honestly retired. National expansion is a possibility, not a present fact.",
    milestones: [
      "Review what is actually trading versus still intended",
      "Evaluate Data & Technology for productisation only if work exists",
      "Retail wholesale only if e-commerce is real",
      "AfCFTA export opportunities explored if Retail is active",
      "Governance that matches a single director and one company",
      "Partnerships or external funding evaluated without invented claims",
    ],
  },
] as const;

export type TimelinePhase = (typeof TIMELINE)[number];
