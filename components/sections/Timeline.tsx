"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { TIMELINE } from "@/lib/timeline";

function LeafCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
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

const bgTones = ["bg-cream", "bg-cream-soft", "bg-cream"];

export default function Timeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="roadmap"
      className="bg-cream-soft py-20 lg:py-32 px-6 lg:px-12"
      aria-labelledby="roadmap-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="04  ·  The Roadmap"
          headline="Building deliberately, in phases."
          subhead="Three years of focused execution. Each phase compounds on the last."
          ornament="04"
        />

        {/* Mobile: vertical timeline */}
        <div className="flex flex-col gap-0 relative lg:hidden">
          <div className="absolute left-4 top-4 bottom-4 w-px">
            <motion.div
              className="h-full bg-bronze origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.2,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
            />
          </div>

          {TIMELINE.map((phase, i) => (
            <Reveal key={phase.phase} delay={i * 0.12} className="pl-12 pb-10 relative">
              <div className="absolute left-[10px] top-1 w-3 h-3 rounded-full bg-bronze border-2 border-cream-soft" />
              <article aria-labelledby={`phase-${i}-title`}>
                <p className="eyebrow text-bronze mb-2">{phase.phase} · {phase.months}</p>
                <h3 id={`phase-${i}-title`} className="font-fraunces font-semibold text-display-md text-forest-deep mb-2">
                  {phase.title}
                </h3>
                <p className="font-manrope text-body text-ink-soft leading-[1.6] mb-4">
                  {phase.summary}
                </p>
                <ul className="flex flex-col gap-2" role="list">
                  {phase.milestones.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-forest-leaf">
                      <LeafCheck />
                      <span className="font-manrope text-body-sm text-ink leading-[1.55]">{m}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Desktop: three columns */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-px bg-rule rounded-lg overflow-hidden">
          {TIMELINE.map((phase, i) => (
            <Reveal key={phase.phase} delay={i * 0.1}>
              <article
                className={`${bgTones[i]} p-10 h-full flex flex-col gap-6`}
                aria-labelledby={`phase-desk-${i}-title`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-bronze shrink-0" aria-hidden="true" />
                  <div>
                    <p className="eyebrow text-bronze">{phase.phase}</p>
                    <p className="font-manrope text-body-sm text-ink-mute">{phase.months}</p>
                  </div>
                </div>

                <div>
                  <h3
                    id={`phase-desk-${i}-title`}
                    className="font-fraunces font-semibold text-[32px] leading-tight text-forest-deep"
                  >
                    {phase.title}
                  </h3>
                  <p className="font-manrope text-body text-ink-soft mt-2 leading-[1.6]">
                    {phase.summary}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1" role="list">
                  {phase.milestones.map((m) => (
                    <li key={m} className="flex items-start gap-2.5 text-forest-leaf">
                      <LeafCheck />
                      <span className="font-manrope text-body-sm text-ink leading-[1.55]">{m}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
