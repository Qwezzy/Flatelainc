import SectionHeader from "@/components/ui/SectionHeader";
import PillarCard from "@/components/sections/PillarCard";
import { PILLARS } from "@/lib/pillars";

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="bg-cream py-20 lg:py-32 px-6 lg:px-12"
      aria-labelledby="pillars-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="02  ·  Six intended pillars"
          headline="Six lines we intend to house. One holding company."
          subhead="Each pillar addresses a real need in the South African market. None of them is presented here as a live trading division."
          ornament="02"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.slug} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
