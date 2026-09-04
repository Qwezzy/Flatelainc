import Image from "next/image";

const pillarLinks = [
  { label: "Property", href: "/#property" },
  { label: "Data & Technology", href: "/data" },
  { label: "Retail", href: "/#retail" },
  { label: "Travel", href: "/travel" },
  { label: "Energy", href: "/energy" },
  { label: "Education", href: "/education" },
];

const roadmapLinks = [
  { label: "Year 1 — Foundation", href: "/#roadmap" },
  { label: "Year 2 — Scale & connection", href: "/#roadmap" },
  { label: "Year 3 — Consolidation", href: "/#roadmap" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Legal", href: "/legal" },
];

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-green">
          <div className="lg:col-span-1">
            <Image
              src="/flatela_logo_dark.png"
              alt="Flatela"
              width={160}
              height={80}
              className="mb-4 mix-blend-screen"
            />
            <p className="font-sans text-body-sm text-moss-pale leading-relaxed max-w-xs">
              FLATELA (PTY) LTD is a holding company registered in 2026. It will
              house intended pillar projects. The six names below are intended
              lines, not live divisions.
            </p>
          </div>

          <div>
            <p className="eyebrow text-moss mb-4">Intended pillars</p>
            <ul className="flex flex-col gap-2.5">
              {pillarLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-body-sm text-moss-pale hover:text-cream transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-moss mb-4">Roadmap</p>
            <ul className="flex flex-col gap-2.5">
              {roadmapLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-sans text-body-sm text-moss-pale hover:text-cream transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-moss mb-4">Legal</p>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-sans text-body-sm text-moss-pale hover:text-cream transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-sans text-body-sm text-moss-pale mt-4">
              75 Kanna Street, Northmead Ext 4
              <br />
              Benoni, 1501
              <br />
              Gauteng, South Africa
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-sans text-body-sm text-moss-pale">
            © 2026 FLATELA (PTY) LTD · 2026/291183/07 · Gauteng, South Africa
          </p>
          <p className="font-serif italic text-body-sm text-green">
            Building something that will outlast us.
          </p>
        </div>
      </div>
    </footer>
  );
}
