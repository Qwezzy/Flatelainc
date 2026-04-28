import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function Story() {
  return (
    <section
      id="story"
      className="bg-cream-soft py-20 lg:py-32 px-6 lg:px-12"
      aria-labelledby="story-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: ornament */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-start pt-4">
            <span
              className="font-fraunces font-light text-[200px] leading-none text-forest-pale select-none pointer-events-none"
              aria-hidden="true"
            >
              01
            </span>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <SectionHeader
              eyebrow="01  ·  Our Story"
              headline="Flatela began in a family conversation, not a boardroom."
            />

            <Reveal delay={0.1} className="flex flex-col gap-5">
              <p className="font-manrope text-body text-ink leading-[1.65]">
                In 2024, our family came together with a simple question: what would
                it look like if we pooled our talents, our networks, and our
                determination into something we could grow together — and pass on?
              </p>
              <p className="font-manrope text-body text-ink leading-[1.65]">
                The answer was Flatela Inc. A family-owned holding company structured
                around the work we already understand: building homes, working with
                data, sourcing goods, planning travel, generating clean energy, and
                growing our communities through education.
              </p>
              <p className="font-manrope text-body text-ink leading-[1.65]">
                This company is the direct output of that conversation. Every division
                traces back to a real instinct, a real need, and a real commitment
                from inside our family. That is our foundation, and it is our
                advantage.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="border-l-2 border-bronze pl-6 py-1">
                <p className="font-fraunces font-light italic text-display-md text-forest-deep leading-[1.2]">
                  &ldquo;Together, the Flatela family can build something that endures
                  across generations.&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
