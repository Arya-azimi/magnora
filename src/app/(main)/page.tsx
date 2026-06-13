import Hero from "@/components/home/hero";
import Experience from "@/components/home/experience";
import Solutions from "@/components/home/solutions";
import TrackRecord from "@/components/home/track-record";
import CTA from "@/components/shared/cta";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getPageMetadata("home");
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <TrackRecord />
      <Experience />
      <CTA />
    </>
  );
}
