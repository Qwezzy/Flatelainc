import Reveal from "@/components/ui/Reveal";

function LeafMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5 text-moss">
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
  { label: "Data & Technology", value: "data@flatelainc.co.za", href: "mailto:data@flatelainc.co.za" },
  { label: "Travel", value: "travel@flatelainc.co.za", href: "mailto:travel@flatelainc.co.za" },
  { label: "Energy", value: "energy@flatelainc.co.za", href: "mailto:energy@flatelainc.co.za" },
  { label: "Property", value: "property@flatelainc.co.za", href: "mailto:property@flatelainc.co.za" },
  { label: "Retail", value: "retail@flatelainc.co.za", href: "mailto:retail@flatelainc.co.za" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-brown py-20 lg:py-32 px-6 lg:px-12"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Reveal>
            <p className="eyebrow text-moss">06  ·  Connect With Us</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="contact-heading"
              className="font-serif-display font-light text-display-lg lg:text-[64px] lg:leading-[1.05] text-cream text-balance"
            >
              Let&apos;s <em className="italic not-italic">talk</em> about what we are building.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-sans text-body-lg text-cream/70 max-w-xl leading-[1.6]">
              We are open to conversations with potential partners, funders,
              suppliers, and clients about the holding company and its intended
              lines. If something here resonates with the work you are doing —
              get in touch.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <LeafMark />
                  <div className="flex flex-col min-w-0">
                    <span className="font-sans text-body-sm text-cream/50 uppercase tracking-eyebrow">
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      className="font-sans text-body text-cream hover:text-moss-light transition-colors duration-200 focus-moss rounded break-all"
                    >
                      {c.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 mt-8 pt-6 border-t border-cream/15">
              <LeafMark />
              <p className="font-sans text-body text-cream/70">
                75 Kanna Street, Northmead Ext 4, Benoni, 1501
                <br />
                Gauteng, South Africa
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
