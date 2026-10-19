import { existsSync } from "fs";
import path from "path";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Approach } from "@/components/sections/Approach";
import { Awards } from "@/components/sections/Awards";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  const cvAvailable = existsSync(
    path.join(process.cwd(), "public/files/kidist-kemal-cv.png"),
  );

  return (
    <main id="main">
      <Hero />
      <Work />
      <About />
      <Approach />
      <Awards />
      <Resume cvAvailable={cvAvailable} />
      <Contact />
    </main>
  );
}
