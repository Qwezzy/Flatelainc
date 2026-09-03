export const EDUCATION = {
  slug: "education",
  number: "06",
  name: "Education",
  tagline: "Unlocking potential, one community at a time.",
  heroEyebrow: "Pillar 06  ·  Intended line",
  heroLead:
    "Education is an intended line of FLATELA (PTY) LTD. The public name is Flatela. A community Education Centre is planned, not open.",
  purpose: {
    heading: "Why this line exists",
    body: "The family holding company intends a community Education Centre so digital skills, vocational paths, and career visibility can sit in one planned place. That centre is not open today. Education is a line we mean to house — not a live school, campus, or enrolment product.",
  },
  audience: {
    heading: "Who it is for",
    body: "When the work begins, it is intended for learners and families in communities the holding company can actually reach. Later, school groups could travel with the Travel line if both lines exist. We do not publish a catchment, a campus roster, or enrolment numbers.",
  },
  programmesHeading: "Intended programmes",
  programmesIntro:
    "Each programme below is a plan. None of them is running, accredited, or funded as a live offering.",
  programmes: [
    {
      title: "Computer literacy and community internet access",
      body: "A planned place for people to learn everyday digital skills and to use the internet without treating a home connection as a given. Intended as community access and teaching, not a commercial ISP.",
      bullets: [
        "Intended: introductory computer literacy for learners and families",
        "Intended: shared internet access at a future Education Centre",
        "Intended: practical skills for study, work search, and daily administration",
      ],
    },
    {
      title: "Robotics, coding, and STEM workshops",
      body: "Hands-on workshops in robotics, coding, and related STEM work are intended once a real programme and real partners exist. We do not list schools, labs, or kits as booked.",
      bullets: [
        "Intended: coding and robotics workshops for learners",
        "Intended: STEM sessions only with a real programme and real partners",
        "Intended: short-format workshops rather than a claimed curriculum brand",
      ],
    },
    {
      title: "Vocational training",
      body: "Vocational training is intended so practical paths sit beside digital skills — trades and work-ready skills scoped with the Centre, not announced as a live college.",
      bullets: [
        "Intended: vocational pathways hosted at a future Education Centre",
        "Intended: skills that can sit next to computer literacy and STEM",
        "Intended: no claim of a current intake, campus, or qualification register",
      ],
    },
    {
      title: "Career expos with corporate partners",
      body: "Career expos are hoped-for gatherings where learners can see work that exists beyond the classroom. Corporate partners are a hope, not bookings. An expo would run only if a real programme and real partners exist.",
      bullets: [
        "Intended: career visibility for learners and families",
        "Intended: corporate partners invited when a programme is real — none are booked",
        "Intended: logistics that could later sit with Travel if both lines exist",
      ],
    },
  ],
  connections: {
    heading: "How it connects",
    intro:
      "These connections are intended only. They describe how lines could share work if they are both built — not services on offer today.",
    items: [
      {
        pillar: "Travel",
        body: "If both lines exist, Travel could handle educational excursion logistics for school groups and, later, career-expo movement. Shared relationships would be the point — when both exist.",
      },
      {
        pillar: "Energy",
        body: "If an Education Centre is built, Energy work could power it — more reliable learning during load-shedding, and a demonstration installation. Planned, not installed.",
      },
      {
        pillar: "Data & Technology",
        body: "If both lines exist, Data could build learner systems and dashboards for the Centre. That is a future systems conversation, not a live learner platform.",
      },
    ],
  },
  limits: {
    heading: "What we will not claim",
    body: "Honesty is part of the line. The following are not true of Education today, and this site will not imply otherwise.",
    bullets: [
      "We have not applied for SETA or government funding, and we do not claim Department of Education accreditation.",
      "We do not operate an educator-screening product, and we do not offer Flatela Verify.",
      "There are no live programmes, enrolments, or named partners booked.",
      "75 Kanna Street, Northmead Ext 4, Benoni, 1501 is the company registered address — a holdco address, not an open campus.",
    ],
  },
  yearOne: {
    heading: "Year-1 posture",
    body: "Year 1 is for scoping the Education Centre without treating it as open. A career expo or STEM workshop belongs only if a real programme and real partners exist. Until then, Education stays an intended holdco line.",
  },
  contact: {
    heading: "Contact",
    body: "Questions about this intended line can go to the Education address. We will not treat an email as an enrolment.",
    email: "education@flatelainc.co.za",
  },
} as const;

export type EducationProgramme = (typeof EDUCATION.programmes)[number];
export type EducationContent = typeof EDUCATION;
