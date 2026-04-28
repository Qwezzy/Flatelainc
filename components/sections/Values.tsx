import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { VALUES } from "@/lib/values";

export default function Values() {
  return (
    <section
      id="values"
      className="bg-cream py-20 lg:py-32 px-6 lg:px-12"
      aria-labelledby="values-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="05  ·  What We Stand For"
          headline="Six commitments that guide every decision."
          ornament="05"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {VALUES.map((value, i) => (
            <Reveal key={value.name} delay={(i % 3) * 0.08}>
              <article aria-labelledby={`value-${i}-name`} className="flex flex-col gap-3">
                <span
                  className="font-fraunces font-light text-[64px] leading-none text-bronze select-none"
                  aria-hidden="true"
                >
                  {value.number}
                </span>
                <h3
                  id={`value-${i}-name`}
                  className="font-fraunces font-semibold text-[24px] leading-tight text-forest-deep"
                >
                  {value.name}
                </h3>
                <p className="font-manrope text-body text-ink leading-[1.6]">
                  {value.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
