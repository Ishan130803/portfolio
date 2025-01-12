import { HeroSection } from "./component/HeroSection";
import { Navbar } from "./component/Navbar";
import { AboutSection } from "./component/AboutSection";
import { ProjectSection } from "./component/ProjectSection";
import { EmailSection } from "./component/EmailSection";
import { TechStackSection } from "./component/TechStackSection";
import { ProgrammingLanguagesSection } from "./component/ProgrammingLanguagesSection";
import { SkillsSection } from "./component/SkillsSection";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen max-w-[2160px] bg-[#121212]">
      <Navbar></Navbar>
      <div className="py-4 mt-28">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <div className="grid lg:grid-cols-2">
          <ProgrammingLanguagesSection />
          <TechStackSection />
        </div>
        <SkillsSection />
        <ProjectSection />
        <EmailSection></EmailSection>
      </div>
    </main>
  );
}
