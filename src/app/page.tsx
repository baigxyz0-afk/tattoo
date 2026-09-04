import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TattooStyles } from "@/components/sections/TattooStyles";
import { Artists } from "@/components/sections/Artists";
import { Portfolio } from "@/components/sections/Portfolio";
import { TattooInspirationHub } from "@/components/sections/TattooInspirationHub";
import { Process } from "@/components/sections/Process";
import { AiOverviewEntities } from "@/components/sections/AiOverviewEntities";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TattooStyles />
      <Artists />
      <Portfolio />
      <TattooInspirationHub />
      <Process />
      <AiOverviewEntities />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
