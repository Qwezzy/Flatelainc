import PillarIcon from "@/components/ui/PillarIcon";
import Reveal from "@/components/ui/Reveal";
import { PILLARS } from "@/lib/pillars";
import { SYNERGIES } from "@/lib/synergies";

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
    <div className="bg-bronze/10 border border-bronze/20 rounded-lg p-5 flex flex-col gap-3">
      <p className="eyebrow text-bronze">Cross-division connections</p>
      <ul className="flex flex-col gap-2">
        {connected.map((s) => {
          const other = s.a === slug ? s.b : s.a;
          return (
            <li key={`${s.a}-${s.b}`} className="flex flex-col">
              <span className="font-fraunces italic text-forest-deep text-[15px]">
                {s.title}
              </span>
              <span className="font-manrope text-body-sm text-ink-soft capitalize">
                with {other}
              </span>
            </li>
          );
        })}
      </ul>
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
                {/* Left */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Reveal>
                    <p className="eyebrow text-bronze">Pillar {pillar.number}</p>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <span
                      className="font-fraunces font-light text-[120px] leading-none text-forest-pale select-none pointer-events-none block"
                      aria-hidden="true"
                    >
                      {pillar.number}
                    </span>
                  </Reveal>
                  <Reveal delay={0.1} className="text-forest-leaf mt-2">
                    <PillarIcon icon={pillar.icon} />
                  </Reveal>
                </div>

                {/* Right */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                  <Reveal>
                    <h2
                      id={`deep-${pillar.slug}-heading`}
                      className="font-fraunces font-semibold text-display-lg lg:text-[48px] lg:leading-[1.08] text-forest-deep"
                    >
                      {pillar.name}
                    </h2>
                    <p className="font-fraunces italic text-[20px] text-ink-soft mt-2">
                      {pillar.tagline}
                    </p>
                  </Reveal>

                  <Reveal delay={0.1} className="flex flex-col gap-4">
                    <p className="font-manrope text-body text-ink leading-[1.65]">
                      {pillar.summary}
                    </p>
                    <p className="font-manrope text-body text-ink leading-[1.65]">
                      As we grow this division, our goal is to become a recognisable name in South Africa — building trust through quality service, genuine community investment, and the structural advantage of operating within a family enterprise that shares resources, relationships, and resolve.
                    </p>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <ul className="flex flex-col gap-3" role="list">
                      {pillar.deepBullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-bronze">
                          <LeafBullet />
                          <span className="font-manrope text-body text-ink leading-[1.6]">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>

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
