import { HeroSection } from "./component/HeroSection";
import { Navbar } from "./component/Navbar";
import { AboutSection } from "./component/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <div className="container mx-auto px-12 py-4 mt-28">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
      </div>
    </main>
  );
}
