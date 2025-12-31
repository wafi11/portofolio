import { PageContainer } from "@/components/layouts/PageContainer";
import { AboutMe } from "@/features/AboutMeComponent";
import { BannerComponent } from "@/features/BannerComponent";

export default function Home() {
  return (
    <PageContainer withHeader={true}>
      <BannerComponent />
      <AboutMe />
    </PageContainer>
  );
}
