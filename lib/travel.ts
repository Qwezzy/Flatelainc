export const TRAVEL = {
  slug: "travel",
  number: "04",
  name: "Travel",
  tagline: "Journeys remembered for a lifetime.",
  heroEyebrow: "Pillar 04  ·  Intended line",
  heroLead:
    "Travel is an intended line of FLATELA (PTY) LTD. The public name is Flatela. Planned agency work for leisure, corporate, and educational travel — not a live travel agency.",
  purpose: {
    heading: "Why this line exists",
    body: "The family holding company intends a travel line so leisure, corporate, and educational journeys can sit under one planned home. That line is not trading today. Travel is a line we mean to house — not a live agency, booking desk, or accredited intermediary.",
  },
  audience: {
    heading: "Who it is for",
    body: "When the work begins, it is intended for leisure travellers, South African businesses that need corporate travel management, and school groups via Education if both lines exist. We do not publish named clients, bookings, or a live agency roster.",
  },
  programmesHeading: "Intended programmes",
  programmesIntro:
    "Each programme below is a plan. None of them is running as a live agency service, and we do not claim IATA accreditation or host-agency status.",
  programmes: [
    {
      title: "Leisure packages",
      body: "Leisure packages are intended so flights, hotels, visas, insurance, and curated tours can be planned carefully when the line is real. That is holdco planning language — not a claim that bookings are live today.",
      bullets: [
        "Intended: flights, hotels, visas, insurance, and curated tours",
        "Intended: leisure packages only once the line is operating",
        "Intended: no claim of live bookings or agency ticketing today",
      ],
    },
    {
      title: "Corporate travel management",
      body: "Corporate travel management is intended for South African businesses that need careful trip planning once the line exists. We do not list named corporate clients or live management contracts.",
      bullets: [
        "Intended: corporate travel management for South African businesses",
        "Intended: policy-aware planning when real capacity and briefs exist",
        "Intended: no claim of current corporate accounts or SLAs",
      ],
    },
    {
      title: "Educational excursions with Education",
      body: "Educational excursion packages are intended alongside Education if both lines exist — school-group logistics planned together, not announced as a live school-travel product.",
      bullets: [
        "Intended: educational excursion packages for schools if Education exists",
        "Intended: end-to-end logistics only when both lines are real",
        "Intended: no claim of booked school trips or named campuses today",
      ],
    },
    {
      title: "Career Expo logistics with Education",
      body: "Career Expo logistics are intended alongside Education when an expo programme is real. Movement and accommodation would sit with Travel only if both lines operate — a hope, not a booking.",
      bullets: [
        "Intended: Career Expo logistics alongside Education",
        "Intended: transport and stay planning only with a real expo programme",
        "Intended: no claim that expo travel is contracted today",
      ],
    },
  ],
  connections: {
    heading: "How it connects",
    intro:
      "These connections are intended only. They describe how lines could share work if they are both built — not services on offer today.",
    items: [
      {
        pillar: "Education",
        body: "If Education organises school programmes and Travel is operating, Travel could manage educational excursion logistics and, later, career-expo movement. Shared relationships would be the point — when both exist.",
      },
      {
        pillar: "Retail",
        body: "If Travel and Retail are both active, sourcing missions to other markets could support Retail buying — efficient logistics for deliberately curated stock.",
      },
    ],
  },
  limits: {
    heading: "What we will not claim",
    body: "Honesty is part of the line. The following are not true of Travel today, and this site will not imply otherwise.",
    bullets: [
      "We do not claim IATA accreditation, and we do not claim host-agency status.",
      "We are not a live travel agency, and we do not offer live bookings on this site.",
      "There are no named clients, school trips, or expo contracts published as current.",
      "75 Kanna Street, Northmead Ext 4, Benoni, 1501 is the company registered address — a holdco address, not a travel branch.",
    ],
  },
  yearOne: {
    heading: "Year-1 posture",
    body: "Year 1 is for scoping Travel as an intended holdco line — with no IATA or host-agency claims. Clients belong only if the line is actually operating. Until then, Travel stays planned — not a live agency.",
  },
  contact: {
    heading: "Contact",
    body: "Questions about this intended line can go to the Travel address. We will not treat an email as a live booking request.",
    email: "travel@flatelainc.co.za",
  },
} as const;

export type TravelProgramme = (typeof TRAVEL.programmes)[number];
export type TravelContent = typeof TRAVEL;
