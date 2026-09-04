export const PROPERTY = {
  slug: "property",
  number: "01",
  name: "Property",
  tagline: "Spaces people are proud to call home.",
  heroEyebrow: "Pillar 01  ·  Intended line",
  heroLead:
    "Property is an intended line of FLATELA (PTY) LTD. The public name is Flatela. Planned residential renovation and managed rental work — not a live landlord.",
  purpose: {
    heading: "Why this line exists",
    body: "The family holding company intends residential renovation and managed rental portfolios — answering South Africa's need for quality, well-located housing. When the work begins, the plan is to acquire, renovate, furnish, and let properties. That is holdco planning language — not a claim of owned stock, live renovations, or tenants today. Property is a line we mean to house — not a live trading division.",
  },
  audience: {
    heading: "Who it is for",
    body: "When the work begins, it is intended for future tenants and investors once real assets and real work exist. We do not publish catchment claims, owned portfolios, tenant lists, or a current showroom.",
  },
  programmesHeading: "Intended programmes",
  programmesIntro:
    "Each programme below is a plan. None of them is published as a live renovation, owned asset, or let portfolio on this site.",
  programmes: [
    {
      title: "Residential renovations",
      body: "End-to-end residential renovations are intended so homes can be brought to a careful standard when the line is real. That is planned scope — not a claim that renovations are underway today.",
      bullets: [
        "Intended: end-to-end residential renovations once capacity exists",
        "Intended: quality finishes suited to well-located urban housing",
        "Intended: no claim of live renovation sites or completed stock today",
      ],
    },
    {
      title: "Buy-to-let portfolios",
      body: "Buy-to-let rental portfolios in urban nodes are intended so renovated homes can be let carefully when assets exist. We do not list owned units, yields, or tenant names.",
      bullets: [
        "Intended: buy-to-let portfolios in urban nodes",
        "Intended: careful letting only when real assets and capacity exist",
        "Intended: no claim of owned stock, yields, or tenant lists today",
      ],
    },
    {
      title: "Solar considered with Energy",
      body: "Solar is intended to be considered alongside Energy work on properties — an Energy quotation sitting with renovations as a planned connection. That is not a claim that solar is already installed on Flatela properties.",
      bullets: [
        "Intended: solar considered with Energy on renovations if both lines exist",
        "Intended: resilience and clearer energy costs for future tenants",
        "Intended: no claim that solar is installed on properties today",
      ],
    },
    {
      title: "Furnishing with Retail",
      body: "Furnishing is intended to be supported by Retail sourcing if both lines operate — homes fitted carefully from a shared catalogue. Planned, not stocked.",
      bullets: [
        "Intended: furnishing supported by Retail if both lines exist",
        "Intended: showcased homes only when Retail supply is real",
        "Intended: no claim of a live furniture warehouse or fitted units today",
      ],
    },
  ],
  connections: {
    heading: "How it connects",
    intro:
      "These connections are intended only. They describe how lines could share work if they are both built — not services on offer today.",
    items: [
      {
        pillar: "Energy",
        body: "If both lines are built, properties with solar can attract stronger tenants. An Energy quotation would sit alongside Property renovations as standard — an intended connection, not a live service.",
      },
      {
        pillar: "Retail",
        body: "If Retail imports furniture, it could furnish Property renovations at cost and serve as a showcase. That is how the lines are meant to feed each other.",
      },
    ],
  },
  limits: {
    heading: "What we will not claim",
    body: "Honesty is part of the line. The following are not true of Property today, and this site will not imply otherwise.",
    bullets: [
      "We do not publish live assets, renovations, or tenant lists, and we do not claim a current landlord book.",
      "We do not claim that solar is already installed on Flatela properties.",
      "We do not claim an estate-agent licence or that we act as a live estate agent.",
      "75 Kanna Street, Northmead Ext 4, Benoni, 1501 is the company registered address — a holdco address, not a showroom.",
    ],
  },
  yearOne: {
    heading: "Year-1 posture",
    body: "Year 1 is for beginning the first intended Property work if capacity allows — still scoped honestly as an intended holdco line. Until real work starts, Property stays planned — not a live landlord.",
  },
  contact: {
    heading: "Contact",
    body: "Questions about this intended line can go to the Property address. We will not treat an email as a live letting or acquisition request.",
    email: "property@flatelainc.co.za",
  },
} as const;

export type PropertyProgramme = (typeof PROPERTY.programmes)[number];
export type PropertyContent = typeof PROPERTY;
