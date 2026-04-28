"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Pillars", href: "#pillars" },
  { label: "Synergies", href: "#synergies" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];


function LeafMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 12V5M7 9C7 9 4 9 2 6C2 6 5 2 7 4M7 7C7 7 10 6 12 3C12 3 9 0 7 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-md border-b border-rule"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            className="flex items-center focus-bronze rounded-md"
            aria-label="Flatela Inc. — return to top"
          >
            <Image
              src="/flatela_logo_dark.png"
              alt="Flatela Inc."
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-manrope text-body-sm text-forest-deep hover:text-bronze transition-colors duration-200 focus-bronze rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2 text-forest-deep focus-bronze rounded"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <span className="block w-6 h-px bg-current" />
            <span className="block w-4 h-px bg-current ml-auto" />
            <span className="block w-6 h-px bg-current" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-forest-deep/30 backdrop-blur-sm lg:hidden"
              onClick={closeDrawer}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-cream flex flex-col px-8 pt-8 pb-12 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between mb-12">
                <Image
                  src="/flatela_logo_dark.png"
                  alt="Flatela Inc."
                  width={100}
                  height={36}
                  className="h-9 w-auto object-contain"
                />
                <button
                  onClick={closeDrawer}
                  className="p-2 text-forest-deep focus-bronze rounded"
                  aria-label="Close navigation menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <ul className="flex flex-col gap-6" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeDrawer}
                      className="flex items-center gap-3 font-fraunces font-light text-[32px] leading-none text-forest-deep hover:text-bronze transition-colors duration-200 focus-bronze rounded"
                    >
                      <span className="text-forest-leaf mt-1">
                        <LeafMark />
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
