import Reveal from "@/components/ui/Reveal";

function LeafMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5 text-bronze">
      <path
        d="M7 12V5M7 8C7 8 4 8 2 5.5C4 2.5 6.5 2.5 7 5M7 7C7 7 10 6.5 12 4C10 1 7.5 2 7 5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const contacts = [
  { label: "General", value: "info@flatelainc.co.za", href: "mailto:info@flatelainc.co.za" },
  { label: "Partnerships", value: "partners@flatelainc.co.za", href: "mailto:partners@flatelainc.co.za" },
  { label: "Education", value: "education@flatelainc.co.za", href: "mailto:education@flatelainc.co.za" },
  { label: "Energy", value: "energy@flatelainc.co.za", href: "mailto:energy@flatelainc.co.za" },
  { label: "Property", value: "property@flatelainc.co.za", href: "mailto:property@flatelainc.co.za" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-forest-deep py-20 lg:py-32 px-6 lg:px-12"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <Reveal>
          <p className="eyebrow text-bronze">06  ·  Connect With Us</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="contact-heading"
            className="font-fraunces font-light text-display-lg lg:text-[64px] lg:leading-[1.05] text-cream text-balance"
          >
            Let&apos;s <em className="italic not-italic">talk</em> about
            <br />
            what we are building.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-manrope text-body-lg text-cream/70 max-w-xl leading-[1.6]">
            We are open to conversations with potential partners, funders,
            suppliers, and clients across all six divisions. If something here
            resonates with the work you are doing — get in touch.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col gap-4 mt-2">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-start gap-3">
                <LeafMark />
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-manrope text-body-sm text-cream/50 uppercase tracking-eyebrow w-28 shrink-0">
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    className="font-manrope text-body text-cream hover:text-bronze-light transition-colors duration-200 focus-bronze rounded"
                  >
                    {c.value}
                  </a>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3 mt-2">
              <LeafMark />
              <p className="font-manrope text-body text-cream/70">
                Based in Gauteng, South Africa
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
