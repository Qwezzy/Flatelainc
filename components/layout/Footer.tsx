import Image from "next/image";


const pillarLinks = [
  { label: "Property", href: "#property" },
  { label: "Data & Technology", href: "#data" },
  { label: "Retail", href: "#retail" },
  { label: "Travel", href: "#travel" },
  { label: "Energy", href: "#energy" },
  { label: "Education", href: "#education" },
];

const roadmapLinks = [
  { label: "Year 1 — Foundation", href: "#roadmap" },
  { label: "Year 2 — Scale & Synergy", href: "#roadmap" },
  { label: "Year 3 — Consolidation", href: "#roadmap" },
];

const legalLinks = [
  { label: "flatelainc.co.za", href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-forest-mid">
          <div className="lg:col-span-1">
            <Image
              src="/flatela_logo_dark.png"
              alt="Flatela Inc. — a tree of life with deep roots and a full canopy."
              width={160}
              height={80}
              className="mb-4"
            />
            <p className="font-manrope text-body-sm text-forest-pale leading-relaxed max-w-xs">
              A family-owned holding company building across six divisions in South Africa.
            </p>
          </div>

          <div>
            <p className="eyebrow text-bronze mb-4">Pillars</p>
            <ul className="flex flex-col gap-2.5">
              {pillarLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-manrope text-body-sm text-forest-pale hover:text-cream transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-bronze mb-4">Roadmap</p>
            <ul className="flex flex-col gap-2.5">
              {roadmapLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-manrope text-body-sm text-forest-pale hover:text-cream transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-bronze mb-4">Legal</p>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-manrope text-body-sm text-forest-pale hover:text-cream transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-manrope text-body-sm text-forest-pale mt-4">
              Gauteng, South Africa
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-manrope text-body-sm text-forest-pale">
            © 2026 Flatela Inc. (Pty) Ltd. All rights reserved.{" "}
            <span className="hidden sm:inline">·</span>{" "}
            <span className="sm:inline">flatelainc.co.za</span>
          </p>
          <p className="font-fraunces italic text-body-sm text-forest-leaf">
            Building something that will outlast us.
          </p>
        </div>
      </div>
    </footer>
  );
}
