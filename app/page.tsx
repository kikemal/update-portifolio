import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Awards } from "@/components/sections/Awards";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Work />
      <Awards />
      <Resume />
      <Contact />
    </main>
  );
}
