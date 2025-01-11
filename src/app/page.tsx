import { HeroSection } from "./component/HeroSection";
import { Navbar } from "./component/Navbar";
import { AboutSection } from "./component/AboutSection";
import { ProjectSection } from "./component/ProjectSection";
import { EmailSection } from "./component/EmailSection";
import { TechStackSection } from "./component/TechStackSection";
import { ProgrammingLanguagesSection } from "./component/ProgrammingLanguagesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <div className="py-4 mt-28">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <div className="grid lg:grid-cols-2">
          <ProgrammingLanguagesSection />
          <TechStackSection />
        </div>
        <ProjectSection />
        <EmailSection></EmailSection>
      </div>
    </main>
  );
}
