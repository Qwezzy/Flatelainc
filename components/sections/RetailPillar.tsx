import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import PillarIcon from "@/components/ui/PillarIcon";
import { RETAIL } from "@/lib/retail";

function LeafBullet() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-1"
    >
      <path
        d="M6 10V4M6 7C6 7 3.5 7 2 5C3.5 3 5.5 3 6 4.5M6 6C6 6 8.5 5.5 10 3C8.5 1 6 2 6 4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RetailPillar() {
  return (
    <>
      <section
        className="bg-cream pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 lg:px-12"
        aria-labelledby="retail-hero-heading"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Reveal>
              <p className="eyebrow text-moss">{RETAIL.heroEyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <span
                className="font-serif font-light text-[120px] leading-none text-moss-pale select-none pointer-events-none block"
                aria-hidden="true"
              >
                {RETAIL.number}
              </span>
            </Reveal>
            <Reveal delay={0.1} className="text-green mt-2">
              <PillarIcon icon="package" />
            </Reveal>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            <Reveal>
              <h1
                id="retail-hero-heading"
                className="font-serif-display font-light text-display-lg lg:text-[64px] lg:leading-[1.05] text-brown text-balance"
              >
                {RETAIL.name}
              </h1>
              <p className="font-serif italic text-[20px] lg:text-[24px] text-ink-soft mt-3">
                {RETAIL.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-body-lg text-ink leading-[1.65] max-w-2xl">
                {RETAIL.heroLead}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="bg-cream-soft py-20 lg:py-28 px-6 lg:px-12"
        aria-labelledby="retail-purpose-heading"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <h2
                id="retail-purpose-heading"
                className="font-serif-display font-semibold text-display-md text-brown"
              >
                {RETAIL.purpose.heading}
              </h2>
              <p className="font-sans text-body text-ink leading-[1.65] mt-4">
                {RETAIL.purpose.body}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif-display font-semibold text-display-md text-brown">
                {RETAIL.audience.heading}
              </h2>
              <p className="font-sans text-body text-ink leading-[1.65] mt-4">
                {RETAIL.audience.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="bg-cream py-20 lg:py-32 px-6 lg:px-12"
        aria-labelledby="retail-programmes-heading"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="Intended programmes"
            headline={RETAIL.programmesHeading}
            subhead={RETAIL.programmesIntro}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RETAIL.programmes.map((programme, i) => (
              <Reveal key={programme.title} delay={(i % 2) * 0.06}>
                <article className="h-full bg-cream-paper border border-rule rounded-lg p-8 lg:p-10 flex flex-col gap-4 shadow-card">
                  <p className="eyebrow text-moss">Intended</p>
                  <h3 className="font-serif font-semibold text-[24px] leading-tight text-brown">
                    {programme.title}
                  </h3>
                  <p className="font-sans text-body text-ink leading-[1.65]">
                    {programme.body}
                  </p>
                  <ul className="flex flex-col gap-3 mt-2" role="list">
                    {programme.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-moss">
                        <LeafBullet />
                        <span className="font-sans text-body-sm text-ink leading-[1.6]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-cream-soft py-20 lg:py-28 px-6 lg:px-12"
        aria-labelledby="retail-connections-heading"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <Reveal>
            <p className="eyebrow text-moss">Intended only</p>
            <h2
              id="retail-connections-heading"
              className="font-serif-display font-semibold text-display-md lg:text-display-lg text-brown mt-3"
            >
              {RETAIL.connections.heading}
            </h2>
            <p className="font-sans text-body text-ink leading-[1.65] mt-4 max-w-2xl">
              {RETAIL.connections.intro}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RETAIL.connections.items.map((item, i) => (
              <Reveal key={item.pillar} delay={i * 0.06}>
                <article className="bg-moss/10 border border-moss/20 rounded-lg p-6 flex flex-col gap-3 h-full">
                  <p className="eyebrow text-moss">With {item.pillar}</p>
                  <p className="font-sans text-body-sm text-ink leading-[1.65]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-cream py-20 lg:py-28 px-6 lg:px-12"
        aria-labelledby="retail-limits-heading"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <Reveal>
              <h2
                id="retail-limits-heading"
                className="font-serif-display font-semibold text-display-md text-brown"
              >
                {RETAIL.limits.heading}
              </h2>
              <p className="font-sans text-body text-ink leading-[1.65] mt-4">
                {RETAIL.limits.body}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="flex flex-col gap-3" role="list">
                {RETAIL.limits.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-moss">
                    <LeafBullet />
                    <span className="font-sans text-body text-ink leading-[1.6]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="bg-cream-paper border border-rule rounded-lg p-8 flex flex-col gap-3">
                <p className="eyebrow text-moss">Year 1</p>
                <h3 className="font-serif font-semibold text-[24px] text-brown">
                  {RETAIL.yearOne.heading}
                </h3>
                <p className="font-sans text-body text-ink leading-[1.65]">
                  {RETAIL.yearOne.body}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="bg-brown text-cream rounded-lg p-8 flex flex-col gap-3">
                <p className="eyebrow text-moss">{RETAIL.contact.heading}</p>
                <p className="font-sans text-body text-cream/80 leading-[1.65]">
                  {RETAIL.contact.body}
                </p>
                <a
                  href={`mailto:${RETAIL.contact.email}`}
                  className="font-sans text-body text-cream hover:text-moss-light transition-colors duration-200 focus-moss rounded w-fit"
                >
                  {RETAIL.contact.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
