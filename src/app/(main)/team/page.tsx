import CTA from "@/components/shared/cta";
import TeamHero from "@/components/team/hero";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getPageMetadata("team");
}

export default function Team() {
  return (
    <>
      <TeamHero />
      <CTA />
    </>
  );
}
