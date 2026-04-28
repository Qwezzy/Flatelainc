import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Pillars from "@/components/sections/Pillars";
import PillarDeep from "@/components/sections/PillarDeep";
import Synergies from "@/components/sections/Synergies";
import Timeline from "@/components/sections/Timeline";
import Values from "@/components/sections/Values";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Story />
        <Pillars />
        <PillarDeep />
        <Synergies />
        <Timeline />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
