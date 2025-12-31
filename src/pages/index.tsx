import { PageContainer } from "@/components/layouts/PageContainer";
import { AboutMe } from "@/features/AboutMeComponent";
import { BannerComponent } from "@/features/BannerComponent";
import ContactComponent from "@/features/ContactComponent";
import { ProjectsComponent } from "@/features/ProjectsComponent";
import { WorkExperienceComponent } from "@/features/WorksExperienceComponent";

export default function Home() {
  return (
    <PageContainer withHeader={true}>
      <BannerComponent />
      <AboutMe />
      <WorkExperienceComponent />
      <ProjectsComponent />
      <ContactComponent />
    </PageContainer>
  );
}
