import CareerSection from "../components/TitlePage/CareerSection";
import IntroductionSection from "../components/TitlePage/IntroductionSection";
import SkillsSection from "../components/TitlePage/SkillsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-background">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-12 justify-between py-16 sm:py-32 px-8 sm:px-16 bg-white dark:bg-background sm:items-start">
        <IntroductionSection />
        <SkillsSection />
        <CareerSection />
      </main>
    </div>
  );
}
