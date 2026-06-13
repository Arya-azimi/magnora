import DeepDiveHero from "@/components/deep-dive/hero";
import CTA from "@/components/shared/cta";
import TeamHero from "@/components/team/hero";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getPageMetadata("deep-dives");
}

export default function DeepDives() {
  return (
    <>
      <DeepDiveHero />
      <TeamHero />
      <CTA />
    </>
  );
}
