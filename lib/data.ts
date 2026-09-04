export const DATA = {
  slug: "data",
  number: "02",
  name: "Data & Technology",
  tagline: "Turning information into better decisions.",
  heroEyebrow: "Pillar 02  ·  Intended line",
  heroLead:
    "Data & Technology is an intended line of FLATELA (PTY) LTD. The public name is Flatela. It is planned, not a live processor, SaaS product, or trading division.",
  purpose: {
    heading: "Why this line exists",
    body: "The family holding company intends survey research, secure storage, machine learning, and data management work tailored to South African needs — one planned home for information work. That line is not trading today. Data & Technology is a line we mean to house — not a live SaaS shop or registered processor claim.",
  },
  audience: {
    heading: "Who it is for",
    body: "When the work begins, it is intended for organisations and projects that need survey fieldwork, careful storage, and decision tooling once the line exists. We do not publish named clients, case studies, or live product names.",
  },
  programmesHeading: "Intended offerings",
  programmesIntro:
    "Each offering below is a plan. None of them is running as a live service, processor registration, or contracted product on this site.",
  programmes: [
    {
      title: "Survey design, fieldwork, and reporting",
      body: "Survey work is intended so research design, fieldwork, and clear reporting can sit in one place when the line is real. That is a plan for how information gathering could be done — not a claim that fieldwork is booked today.",
      bullets: [
        "Intended: survey design tailored to South African contexts",
        "Intended: fieldwork and data collection when capacity exists",
        "Intended: reporting that supports decisions, not a live research brand",
      ],
    },
    {
      title: "Cloud and on-premise storage designed with POPIA in mind",
      body: "Storage is intended to be designed with POPIA in mind — an intention for how systems would be built, not a claim that Flatela is a registered POPIA operator or processor today. Cloud and on-premise options would be scoped only if the line is operating.",
      bullets: [
        "Intended: cloud and on-premise storage options once the line operates",
        "Intended: designs that take POPIA seriously as a design constraint",
        "Intended: no claim of live POPIA-processor or operator status today",
      ],
    },
    {
      title: "Machine learning for South African use cases",
      body: "Machine learning is intended for use cases that matter locally — not as a catalogue of live models or named products. Work would begin only with real problems and real capacity.",
      bullets: [
        "Intended: ML approaches scoped to South African use cases",
        "Intended: models and tooling only when a real brief and capacity exist",
        "Intended: no claim of live ML products shipping today",
      ],
    },
    {
      title: "Data pipelines, governance, and BI infrastructure",
      body: "Pipelines, governance, and business-intelligence infrastructure are intended so information can move carefully and be used well. That is holdco planning language — not a live platform or managed service.",
      bullets: [
        "Intended: data pipelines once there is real work to move",
        "Intended: governance practices appropriate to the line's scale",
        "Intended: BI infrastructure for decisions — not a claimed live stack",
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
        body: "If both lines exist, Data & Technology could build learner systems and dashboards for the Education Centre. That is a future systems conversation, not a live learner platform.",
      },
    ],
  },
  limits: {
    heading: "What we will not claim",
    body: "Honesty is part of the line. The following are not true of Data & Technology today, and this site will not imply otherwise.",
    bullets: [
      "We do not claim live POPIA-processor or operator status, and storage designed with POPIA in mind is an intention — not a present registration.",
      "We do not publish current contracts, named clients, or live ML products.",
      "We do not operate Flatela Verify, educator screening, or any live trading division under this name.",
      "75 Kanna Street, Northmead Ext 4, Benoni, 1501 is the company registered address — a holdco address, not a data centre or operations floor.",
    ],
  },
  yearOne: {
    heading: "Year-1 posture",
    body: "Year 1 is for scoping Data & Technology as an intended holdco line. A first contract belongs only if the line is actually operating. Until then, Data & Technology stays planned — not a live processor or SaaS shop.",
  },
  contact: {
    heading: "Contact",
    body: "Questions about this intended line can go to the Data address. We will not treat an email as a live service engagement.",
    email: "data@flatelainc.co.za",
  },
} as const;

export type DataProgramme = (typeof DATA.programmes)[number];
export type DataContent = typeof DATA;
