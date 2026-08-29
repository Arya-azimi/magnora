import AboutHero from "@/components/about/hero";
import VisionAndMission from "@/components/about/vision-and-mission";
import CTA from "@/components/shared/cta";
import TeamHero from "@/components/team/hero";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getPageMetadata("about");
}

export default function About() {
  return (
    <>
      <AboutHero />
      <VisionAndMission />
      <TeamHero />
      <CTA />
    </>
  );
}
