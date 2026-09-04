export const ENERGY = {
  slug: "energy",
  number: "05",
  name: "Energy",
  tagline: "Cleaner, more reliable power for South African sites.",
  heroEyebrow: "Pillar 05  ·  Intended line",
  heroLead:
    "Energy is an intended line of FLATELA (PTY) LTD. The public name is Flatela. Planned residential and commercial energy work — not a live installation business.",
  purpose: {
    heading: "Why this line exists",
    body: "The family holding company intends residential and commercial solar PV, battery storage, and related energy work — answering a real national need. Near-term cash flow from this work, if it starts, could fund longer-horizon projects. That is a hope for how the holdco might fund itself, not a claim of revenue today. Energy is a line we mean to house — not a live installer.",
  },
  audience: {
    heading: "Who it is for",
    body: "When the work begins, it is intended for homes and commercial sites that need resilience during load-shedding and clearer energy costs. We do not publish named clients, live installs, or a current project list.",
  },
  programmesHeading: "Intended programmes",
  programmesIntro:
    "Each programme below is a plan. None of them is published as a live installation, contracted client job, or completed flagship site on this site.",
  programmes: [
    {
      title: "Solar PV systems",
      body: "Grid-tied, off-grid, and hybrid solar PV systems are intended so sites can generate power more reliably when the line is real. That is planned scope — not a claim that systems are being installed today.",
      bullets: [
        "Intended: grid-tied, off-grid, and hybrid solar PV systems",
        "Intended: residential and commercial scopes once capacity exists",
        "Intended: no claim of live installs or named sites today",
      ],
    },
    {
      title: "Battery storage",
      body: "Battery storage is intended for load-shedding resilience — so critical loads can keep running when the grid does not. Storage would be scoped only if the line is operating.",
      bullets: [
        "Intended: battery storage for load-shedding resilience",
        "Intended: storage paired with PV where a real brief exists",
        "Intended: no claim of live battery fleets or named clients",
      ],
    },
    {
      title: "Audits, installation, and monitoring",
      body: "Energy audits, installation, and monitoring are intended so work can be assessed carefully and kept healthy over time. That is holdco planning language — not a live O&M contract book.",
      bullets: [
        "Intended: energy audits before any build",
        "Intended: installation only when capacity and a real brief exist",
        "Intended: monitoring practices appropriate to the line's scale",
      ],
    },
    {
      title: "Flagship Education Centre install",
      body: "A flagship installation is intended if an Education Centre is built — more reliable learning during load-shedding, and a demonstration site. Planned, not installed.",
      bullets: [
        "Intended: a flagship installation if an Education Centre is built",
        "Intended: demonstration value for learners and visitors",
        "Intended: no claim that the Centre or its energy system exists today",
      ],
    },
  ],
  connections: {
    heading: "How it connects",
    intro:
      "These connections are intended only. They describe how lines could share work if they are both built — not services on offer today.",
    items: [
      {
        pillar: "Property",
        body: "If both lines are built, properties with solar can attract stronger tenants. An Energy quotation would sit alongside Property renovations as standard — an intended connection, not a live service.",
      },
      {
        pillar: "Education",
        body: "If an Education Centre is built, it could be powered by Energy work — uninterrupted learning during load-shedding, and a live demonstration. Planned, not installed.",
      },
    ],
  },
  limits: {
    heading: "What we will not claim",
    body: "Honesty is part of the line. The following are not true of Energy today, and this site will not imply otherwise.",
    bullets: [
      "We do not publish live installations, and we do not claim a current installer book.",
      "We do not name clients or claim revenue from Energy work today.",
      "A flagship Education Centre install is not installed — the Centre itself is not open.",
      "75 Kanna Street, Northmead Ext 4, Benoni, 1501 is the company registered address — a holdco address, not a depot or installer yard.",
    ],
  },
  yearOne: {
    heading: "Year-1 posture",
    body: "Year 1 is for beginning the first intended Energy work if capacity allows — still scoped honestly as an intended holdco line. Until real work starts, Energy stays planned — not a live installation business.",
  },
  contact: {
    heading: "Contact",
    body: "Questions about this intended line can go to the Energy address. We will not treat an email as a live installation booking.",
    email: "energy@flatelainc.co.za",
  },
} as const;

export type EnergyProgramme = (typeof ENERGY.programmes)[number];
export type EnergyContent = typeof ENERGY;
