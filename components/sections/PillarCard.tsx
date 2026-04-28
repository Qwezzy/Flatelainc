"use client";

import { motion } from "framer-motion";
import PillarIcon from "@/components/ui/PillarIcon";
import { Pillar } from "@/lib/pillars";

interface PillarCardProps {
  pillar: Pillar;
  index: number;
}

export default function PillarCard({ pillar, index }: PillarCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      whileHover={{ y: -4 }}
      className="group relative bg-cream-paper border border-rule rounded-lg p-8 lg:p-10 flex flex-col gap-4 shadow-card hover:shadow-card-lg transition-shadow duration-300"
      aria-labelledby={`pillar-${pillar.slug}-name`}
    >
      <div>
        <p className="eyebrow text-bronze mb-3">
          {pillar.number} · {pillar.name.toUpperCase()}
        </p>
        <div className="text-forest-leaf group-hover:text-bronze transition-colors duration-300">
          <PillarIcon icon={pillar.icon} />
        </div>
      </div>

      <div>
        <h3
          id={`pillar-${pillar.slug}-name`}
          className="font-fraunces font-semibold text-[28px] leading-tight text-forest-deep"
        >
          {pillar.name}
        </h3>
        <p className="font-fraunces italic text-[18px] text-ink-soft mt-1">
          {pillar.tagline}
        </p>
      </div>

      <p className="font-manrope text-body text-ink leading-[1.65] flex-1">
        {pillar.summary}
      </p>

      <a
        href={`#${pillar.slug}`}
        className="inline-flex items-center gap-1.5 font-manrope text-body-sm text-bronze hover:text-bronze-light transition-colors duration-200 mt-auto focus-bronze rounded group/link"
      >
        Read more
        <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
      </a>
    </motion.article>
  );
}
