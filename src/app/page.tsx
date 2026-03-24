import CareerSection from "../components/TitlePage/CareerSection";
import IntroductionSection from "../components/TitlePage/IntroductionSection";
import ProjectsSection from "../components/TitlePage/ProjectsSection";
import SkillsSection from "../components/TitlePage/SkillsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-100 to-zinc-50 font-sans dark:from-sky-950/40 dark:to-background">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-12 justify-between py-16 sm:py-32 px-4 sm:px-16 bg-transparent sm:items-start">
        <IntroductionSection />
        <SkillsSection />
        <ProjectsSection />
        <CareerSection />
      </main>
    </div>
  );
}
