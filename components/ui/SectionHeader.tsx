"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  subhead?: string;
  ornament?: string;
  align?: "left" | "center";
  headlineClassName?: string;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subhead,
  ornament,
  align = "left",
  headlineClassName = "",
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };

  const centered = align === "center" ? "text-center items-center" : "";

  return (
    <motion.div
      className={`flex flex-col gap-4 ${centered}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.p
        variants={variants}
        transition={{ duration: 0.7, ease: EASE }}
        className="eyebrow text-bronze"
      >
        {eyebrow}
      </motion.p>

      <div className="relative">
        {ornament && (
          <span
            className="absolute -top-6 -left-4 font-fraunces font-light text-[96px] leading-none text-forest-pale select-none pointer-events-none opacity-40 hidden lg:block"
            aria-hidden="true"
          >
            {ornament}
          </span>
        )}
        <motion.h2
          variants={variants}
          transition={{ duration: 0.8, ease: EASE }}
          className={`font-fraunces font-light text-display-lg lg:text-[64px] lg:leading-[1.05] text-forest-deep text-balance relative z-10 ${headlineClassName}`}
        >
          {headline}
        </motion.h2>
      </div>

      {subhead && (
        <motion.p
          variants={variants}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-manrope text-body-lg text-ink-soft max-w-2xl"
        >
          {subhead}
        </motion.p>
      )}
    </motion.div>
  );
}
