import ScaleIn from "@/components/animation/ScaleIn";
import TextReveal from "@/components/animation/TextReveal";
import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  slug: string;
  image: string;
  name: string;
  role: string;
  className?: string;
}

export default function TeamCard({
  slug,
  image,
  name,
  role,
  className = "",
}: TeamCardProps) {
  return (
    <Link href={`/team/${slug}`}>
      <div
        className={`border-stroke-1/11 h-full w-full space-y-4 rounded-3xl border bg-white p-5 md:p-6 ${className}`}
      >
        <figure className="overflow-hidden rounded-xl">
          <TextReveal delay={0.2}>
            <Image
              src={image}
              width={500}
              height={500}
              alt={`${name} - ${role}`}
              className="aspect-square size-full object-cover"
            />
          </TextReveal>
        </figure>
        <div className="space-y-1">
          <TextReveal delay={0.4}>
            <h3 className="font-sora text-sora-heading-6 text-background-13 font-normal">
              {name}
            </h3>
          </TextReveal>
          <TextReveal delay={0.6}>
            <p className="font-inter-tight text-tagline-3 text-background-13/60 font-normal">
              {role}
            </p>
          </TextReveal>
        </div>
      </div>
    </Link>
  );
}
