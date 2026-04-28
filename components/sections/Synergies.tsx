"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { SYNERGIES } from "@/lib/synergies";
import { PILLARS } from "@/lib/pillars";

function SynergyCard({ synergy, index }: { synergy: typeof SYNERGIES[number]; index: number }) {
  const pillarA = PILLARS.find((p) => p.slug === synergy.a)!;
  const pillarB = PILLARS.find((p) => p.slug === synergy.b)!;

  return (
    <Reveal delay={index * 0.07}>
      <article className="bg-cream-paper border border-rule rounded-lg p-6 flex flex-col gap-3 shadow-card">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-fraunces font-semibold text-forest-deep text-[16px]">
            {pillarA.name}
          </span>
          <span className="text-bronze font-light">—</span>
          <span className="font-fraunces font-semibold text-forest-deep text-[16px]">
            {pillarB.name}
          </span>
        </div>
        <p className="font-fraunces italic text-[17px] text-ink-soft leading-snug">
          {synergy.title}
        </p>
        <p className="font-manrope text-body-sm text-ink leading-[1.6]">
          {synergy.body}
        </p>
      </article>
    </Reveal>
  );
}

/* Hexagonal desktop layout */
const HEX_POSITIONS: Record<string, { x: number; y: number }> = {
  property: { x: 250, y: 80 },
  data:     { x: 430, y: 185 },
  retail:   { x: 430, y: 355 },
  travel:   { x: 250, y: 460 },
  energy:   { x: 70,  y: 355 },
  education:{ x: 70,  y: 185 },
};

function HexSynergies() {
  const [hovered, setHovered] = useState<string | null>(null);

  const isActive = (slug: string) => {
    if (!hovered) return false;
    return (
      SYNERGIES.some(
        (s) => (s.a === hovered || s.b === hovered) && (s.a === slug || s.b === slug)
      )
    );
  };

  return (
    <div className="hidden lg:block w-full max-w-lg mx-auto" aria-hidden="true">
      <svg viewBox="0 0 500 540" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Connection lines */}
        {SYNERGIES.map((s) => {
          const posA = HEX_POSITIONS[s.a];
          const posB = HEX_POSITIONS[s.b];
          const active =
            hovered === s.a || hovered === s.b;
          const midX = (posA.x + posB.x) / 2;
          const midY = (posA.y + posB.y) / 2;
          const cpX = midX + (posB.y - posA.y) * 0.25;
          const cpY = midY - (posB.x - posA.x) * 0.25;

          return (
            <motion.path
              key={`${s.a}-${s.b}`}
              d={`M${posA.x} ${posA.y} Q${cpX} ${cpY} ${posB.x} ${posB.y}`}
              stroke={active ? "var(--bronze)" : "var(--rule)"}
              strokeWidth={active ? 1.5 : 1}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            />
          );
        })}

        {/* Pillar nodes */}
        {PILLARS.map((pillar) => {
          const pos = HEX_POSITIONS[pillar.slug];
          const active = hovered === pillar.slug || isActive(pillar.slug);
          return (
            <g
              key={pillar.slug}
              onMouseEnter={() => setHovered(pillar.slug)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "default" }}
            >
              <circle
                cx={pos.x}
                cy={pos.y}
                r={active ? 38 : 34}
                fill={active ? "var(--bronze)" : "var(--bg-paper)"}
                stroke={active ? "var(--bronze)" : "var(--rule)"}
                strokeWidth="1.5"
                style={{ transition: "all 0.25s ease" }}
              />
              <text
                x={pos.x}
                y={pos.y - 6}
                textAnchor="middle"
                fill={active ? "var(--bg-cream)" : "var(--forest-deep)"}
                fontFamily="var(--font-manrope)"
                fontSize="10"
                fontWeight="600"
                letterSpacing="1"
                style={{ transition: "fill 0.25s ease", textTransform: "uppercase" }}
              >
                {pillar.name.split(" ")[0]}
              </text>
              <text
                x={pos.x}
                y={pos.y + 8}
                textAnchor="middle"
                fill={active ? "var(--bg-cream)" : "var(--ink-mute)"}
                fontFamily="var(--font-manrope)"
                fontSize="9"
                style={{ transition: "fill 0.25s ease" }}
              >
                {pillar.number}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Synergies() {
  return (
    <section
      id="synergies"
      className="bg-cream py-20 lg:py-32 px-6 lg:px-12"
      aria-labelledby="synergies-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="03  ·  How The Pillars Connect"
          headline="Stronger together than apart."
          subhead="The real power of Flatela is in how the divisions feed one another. Each connection is a real, executed synergy — not a marketing line."
          ornament="03"
        />

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {SYNERGIES.map((s, i) => (
              <SynergyCard key={`${s.a}-${s.b}`} synergy={s} index={i} />
            ))}
          </div>

          <HexSynergies />
        </div>
      </div>
    </section>
  );
}
