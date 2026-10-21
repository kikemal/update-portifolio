import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Awards } from "@/components/sections/Awards";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Work />
      <Awards />
      <Resume />
      <Contact />
    </main>
  );
}
