"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

function DecorativeTree() {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 w-64 lg:w-96 translate-x-1/4 translate-y-1/4 pointer-events-none"
      aria-hidden="true"
    >
      <path
        d="M200 480V200M200 200C200 200 120 260 80 340C60 380 70 420 90 440M200 200C200 200 280 260 320 340C340 380 330 420 310 440"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M200 200C200 200 160 160 140 100C160 60 190 40 200 20C210 40 240 60 260 100C240 160 200 200 200 200Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M200 280C200 280 150 270 120 230C150 200 180 200 200 220C220 200 250 200 280 230C250 270 200 280 200 280Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M200 350C200 350 160 340 140 310C160 285 185 285 200 300C215 285 240 285 260 310C240 340 200 350 200 350Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M140 460H260"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center bg-cream overflow-hidden"
      aria-label="Hero"
    >
      <div className="grain-overlay" aria-hidden="true" />

      <motion.div
        className="text-forest-pale opacity-[0.08]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <DecorativeTree />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-3xl"
        >
          <motion.p variants={item} className="eyebrow text-ink-mute">
            A South African Family Enterprise &nbsp;·&nbsp; Est. 2024
          </motion.p>

          <motion.h1
            variants={item}
            className="font-fraunces font-light text-display-xl lg:text-[96px] lg:leading-[1.0] text-forest-deep text-balance"
          >
            Together, we are{" "}
            <em className="not-italic italic font-light">building</em>
            <br />
            something that will
            <br />
            outlast us.
          </motion.h1>

          <motion.p
            variants={item}
            className="font-manrope text-body-lg text-ink-soft max-w-2xl"
          >
            Flatela Inc. is a multi-generational family enterprise rooted in
            South Africa, built across six pillars — Property, Data, Retail,
            Travel, Energy, and Education. One family. Six divisions. A shared
            commitment to enduring impact.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-3 pt-2">
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 font-manrope font-medium text-body text-bronze hover:text-bronze-light transition-colors duration-200 focus-bronze rounded group"
            >
              Explore the six pillars
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <span className="font-manrope text-body-sm text-ink-mute tracking-wide">
              flatelainc.co.za
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
