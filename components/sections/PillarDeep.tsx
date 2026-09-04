import PillarIcon from "@/components/ui/PillarIcon";
import Reveal from "@/components/ui/Reveal";
import { PILLARS } from "@/lib/pillars";
import { SYNERGIES } from "@/lib/synergies";
import { EDUCATION } from "@/lib/education";
import { DATA } from "@/lib/data";
import { TRAVEL } from "@/lib/travel";
import { ENERGY } from "@/lib/energy";

function LeafBullet() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0 mt-1">
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

function SynergyCallout({ slug }: { slug: string }) {
  const connected = SYNERGIES.filter(
    (s) => s.a === slug || s.b === slug
  );

  if (!connected.length) return null;

  return (
    <div className="bg-moss/10 border border-moss/20 rounded-lg p-5 flex flex-col gap-3">
      <p className="eyebrow text-moss">Intended connections</p>
      <ul className="flex flex-col gap-2">
        {connected.map((s) => {
          const other = s.a === slug ? s.b : s.a;
          return (
            <li key={`${s.a}-${s.b}`} className="flex flex-col">
              <span className="font-serif italic text-brown text-[15px]">
                {s.title}
              </span>
              <span className="font-sans text-body-sm text-ink-soft capitalize">
                with {other}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function EducationHomeExtras() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{EDUCATION.purpose.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {EDUCATION.purpose.body}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{EDUCATION.audience.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {EDUCATION.audience.body}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{EDUCATION.limits.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {EDUCATION.limits.body}
        </p>
        <ul className="flex flex-col gap-3" role="list">
          {EDUCATION.limits.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-moss">
              <LeafBullet />
              <span className="font-sans text-body-sm text-ink leading-[1.6]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="/education"
        className="inline-flex items-center gap-1.5 font-sans text-body-sm text-moss hover:text-moss-light transition-colors duration-200 focus-moss rounded w-fit"
      >
        Read the full Education page
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}


function DataHomeExtras() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{DATA.purpose.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {DATA.purpose.body}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{DATA.audience.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {DATA.audience.body}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{DATA.limits.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {DATA.limits.body}
        </p>
        <ul className="flex flex-col gap-3" role="list">
          {DATA.limits.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-moss">
              <LeafBullet />
              <span className="font-sans text-body-sm text-ink leading-[1.6]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="/data"
        className="inline-flex items-center gap-1.5 font-sans text-body-sm text-moss hover:text-moss-light transition-colors duration-200 focus-moss rounded w-fit"
      >
        Read the full Data & Technology page
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

function TravelHomeExtras() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{TRAVEL.purpose.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {TRAVEL.purpose.body}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{TRAVEL.audience.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {TRAVEL.audience.body}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{TRAVEL.limits.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {TRAVEL.limits.body}
        </p>
        <ul className="flex flex-col gap-3" role="list">
          {TRAVEL.limits.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-moss">
              <LeafBullet />
              <span className="font-sans text-body-sm text-ink leading-[1.6]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="/travel"
        className="inline-flex items-center gap-1.5 font-sans text-body-sm text-moss hover:text-moss-light transition-colors duration-200 focus-moss rounded w-fit"
      >
        Read the full Travel page
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

function EnergyHomeExtras() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{ENERGY.purpose.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {ENERGY.purpose.body}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{ENERGY.audience.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {ENERGY.audience.body}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-moss">{ENERGY.limits.heading}</p>
        <p className="font-sans text-body text-ink leading-[1.65]">
          {ENERGY.limits.body}
        </p>
        <ul className="flex flex-col gap-3" role="list">
          {ENERGY.limits.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-moss">
              <LeafBullet />
              <span className="font-sans text-body-sm text-ink leading-[1.6]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="/energy"
        className="inline-flex items-center gap-1.5 font-sans text-body-sm text-moss hover:text-moss-light transition-colors duration-200 focus-moss rounded w-fit"
      >
        Read the full Energy page
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default function PillarDeep() {
  return (
    <>
      {PILLARS.map((pillar, i) => {
        const isOdd = i % 2 !== 0;
        const bg = isOdd ? "bg-cream-soft" : "bg-cream";

        return (
          <section
            key={pillar.slug}
            id={pillar.slug}
            className={`${bg} py-20 lg:py-32 px-6 lg:px-12`}
            aria-labelledby={`deep-${pillar.slug}-heading`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Reveal>
                    <p className="eyebrow text-moss">Pillar {pillar.number}</p>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <span
                      className="font-serif font-light text-[120px] leading-none text-moss-pale select-none pointer-events-none block"
                      aria-hidden="true"
                    >
                      {pillar.number}
                    </span>
                  </Reveal>
                  <Reveal delay={0.1} className="text-green mt-2">
                    <PillarIcon icon={pillar.icon} />
                  </Reveal>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-8">
                  <Reveal>
                    <h2
                      id={`deep-${pillar.slug}-heading`}
                      className="font-serif-display font-semibold text-display-lg lg:text-[48px] lg:leading-[1.08] text-brown"
                    >
                      {pillar.name}
                    </h2>
                    <p className="font-serif italic text-[20px] text-ink-soft mt-2">
                      {pillar.tagline}
                    </p>
                  </Reveal>

                  <Reveal delay={0.1} className="flex flex-col gap-4">
                    <p className="font-sans text-body text-ink leading-[1.65]">
                      {pillar.summary}
                    </p>
                    <p className="font-sans text-body text-ink leading-[1.65]">
                      As this intended line takes shape, the goal is to become a recognisable name in South Africa — building trust through quality, community investment, and the advantage of sitting inside a family holding company that can share resources and resolve. That is an aim, not a present-tense claim that the line already trades.
                    </p>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <ul className="flex flex-col gap-3" role="list">
                      {pillar.deepBullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-moss">
                          <LeafBullet />
                          <span className="font-sans text-body text-ink leading-[1.6]">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  {pillar.slug === "education" && (
                    <Reveal delay={0.18}>
                      <EducationHomeExtras />
                    </Reveal>
                  )}

                  {pillar.slug === "data" && (
                    <Reveal delay={0.18}>
                      <DataHomeExtras />
                    </Reveal>
                  )}

                  {pillar.slug === "travel" && (
                    <Reveal delay={0.18}>
                      <TravelHomeExtras />
                    </Reveal>
                  )}

                  {pillar.slug === "energy" && (
                    <Reveal delay={0.18}>
                      <EnergyHomeExtras />
                    </Reveal>
                  )}

                  <Reveal delay={0.2}>
                    <SynergyCallout slug={pillar.slug} />
                  </Reveal>

                                  </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
