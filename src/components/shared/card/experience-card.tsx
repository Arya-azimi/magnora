"use client";

import ScaleIn from "@/components/animation/ScaleIn";
import TextReveal from "@/components/animation/TextReveal";
import Image from "next/image";

export interface ExCardInfo {
  name: string;
  imagePath: string;
  className: string;
  bffigcls: string;
}

export default function ExCard({
  name,
  imagePath,
  className,
  bffigcls,
}: ExCardInfo) {
  return (
    <li
      className={`${className}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      <ScaleIn delay={0.2}>
        <div
          className={`flex flex-col gap-6 rounded-3xl bg-white p-6 xl:p-8 w-full ${bffigcls}`}
          aria-label={`${name} feature card`}
        >
          <TextReveal delay={0.2}>
            <figure className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden rounded-xl">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={imagePath}
                alt={`${name} showcase`}
                className="object-contain"
                itemProp="image"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </TextReveal>

          <div className="w-full">
            <TextReveal delay={0.4}>
              <h3
                className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px]"
                itemProp="name"
              >
                {name}
              </h3>
            </TextReveal>
          </div>
        </div>
      </ScaleIn>
    </li>
  );
}
