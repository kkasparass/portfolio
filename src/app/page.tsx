import PageLayout from "../components/PageLayout/PageLayout";
import CareerSection from "../components/TitlePage/CareerSection";
import IntroductionSection from "../components/TitlePage/IntroductionSection";
import ProjectsSection from "../components/TitlePage/ProjectsSection";
import SkillsSection from "../components/TitlePage/SkillsSection";

export default function Home() {
  return (
    <PageLayout>
      <IntroductionSection />
      <SkillsSection />
      <ProjectsSection />
      <CareerSection />
    </PageLayout>
  );
}
