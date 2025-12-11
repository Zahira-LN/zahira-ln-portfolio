import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import {PersonalProjects} from "@/components/PersonalProjects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background ">
      <Header />
      <main className="flex flex-col gap-4">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <PersonalProjects />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
