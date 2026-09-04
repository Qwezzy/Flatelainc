export const RETAIL = {
  slug: "retail",
  number: "03",
  name: "Retail",
  tagline: "Bringing considered goods into South African homes.",
  heroEyebrow: "Pillar 03  ·  Intended line",
  heroLead:
    "Retail is an intended line of FLATELA (PTY) LTD. The public name is Flatela. Planned importer and shop work for fashion and furniture — not a live e-commerce or wholesale division.",
  purpose: {
    heading: "Why this line exists",
    body: "The family holding company intends direct importation of fashion goods and furniture, sold through e-commerce and wholesale channels when the line is real. Furniture supply could later support Property renovations. That is holdco planning language — not a claim of live stock, live shopfronts, or wholesale contracts today. Retail is a line we mean to house — not a live trading division.",
  },
  audience: {
    heading: "Who it is for",
    body: "When the work begins, it is intended for buyers who want considered goods into South African homes — once the line exists. We do not name brands as stocked, publish SKU counts, or claim a live shop open today.",
  },
  programmesHeading: "Intended programmes",
  programmesIntro:
    "Each programme below is a plan. None of them is published as a live shop, wholesale book, or stocked catalogue on this site.",
  programmes: [
    {
      title: "Fashion apparel, footwear, and accessories",
      body: "Fashion apparel, footwear, and accessories are intended so considered clothing and related goods can sit under one planned import path. That is planned scope — not a claim that brands are stocked or orders are shipping today.",
      bullets: [
        "Intended: fashion apparel, footwear, and accessories",
        "Intended: curated imports only once the line is operating",
        "Intended: no claim of named brands as stocked stock today",
      ],
    },
    {
      title: "Furniture and homeware",
      body: "Furniture and homeware from selected markets are intended so homes can be furnished carefully when supply exists. We do not publish warehouse counts or live catalogues.",
      bullets: [
        "Intended: furniture and homeware from selected markets",
        "Intended: home goods scoped only when real capacity exists",
        "Intended: no claim of stock on hand or a public warehouse today",
      ],
    },
    {
      title: "E-commerce and wholesale",
      body: "E-commerce and wholesale distribution are intended channels for when Retail is operating. Year 1 scopes e-commerce without treating it as launched.",
      bullets: [
        "Intended: e-commerce once the line is real",
        "Intended: wholesale distribution if supplier capacity exists",
        "Intended: no claim of a live shop, SKU counts, or wholesale contracts today",
      ],
    },
    {
      title: "Supply into Property and Travel",
      body: "Supply into Property and Travel is intended if those lines start — furniture for renovations, and sourcing trips that support buying. Planned connections, not present supply agreements.",
      bullets: [
        "Intended: furniture supply into Property if both lines exist",
        "Intended: sourcing support with Travel if both lines are active",
        "Intended: no claim of live supply contracts into other pillars today",
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
        body: "If Retail imports furniture, it could furnish Property renovations at cost and serve as a showcase. That is how the lines are meant to feed each other.",
      },
      {
        pillar: "Travel",
        body: "If Travel and Retail are both active, sourcing missions to other markets could support Retail buying — efficient logistics for deliberately curated stock.",
      },
    ],
  },
  limits: {
    heading: "What we will not claim",
    body: "Honesty is part of the line. The following are not true of Retail today, and this site will not imply otherwise.",
    bullets: [
      "We do not publish a live shop, SKU counts, or stock on hand, and we do not claim live wholesale contracts.",
      "We do not name brands as currently stocked.",
      "AfCFTA export is not a present fact — it is something to explore only if Retail is active.",
      "75 Kanna Street, Northmead Ext 4, Benoni, 1501 is the company registered address — a holdco address, not a warehouse open to the public.",
    ],
  },
  yearOne: {
    heading: "Year-1 posture",
    body: "Year 1 is for scoping Retail e-commerce without treating it as launched — still an intended holdco line. Until real work starts, Retail stays planned — not a live importer or shop.",
  },
  contact: {
    heading: "Contact",
    body: "Questions about this intended line can go to the Retail address. We will not treat an email as a live wholesale or shop order.",
    email: "retail@flatelainc.co.za",
  },
} as const;

export type RetailProgramme = (typeof RETAIL.programmes)[number];
export type RetailContent = typeof RETAIL;
