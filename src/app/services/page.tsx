import TrackRecord from "@/components/home/track-record";
import Hero from "@/components/services/hero";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getPageMetadata("services");
}

export default function Services() {
  return (
    <>
      <Hero />
      <TrackRecord />
    </>
  );
}
