import ScaleIn from "@/components/animation/ScaleIn";
import TextReveal from "@/components/animation/TextReveal";
import Image from "next/image";
import Link from "next/link";

interface DeepDivesCardProp {
  slug: string;
  title: string;
  description: string;
  image: string;
  author: string;
  pos: string;
}

export default function DeepDivesCard({
  slug,
  title,
  description,
  image,
  author,
  pos,
}: DeepDivesCardProp) {
  // محدودسازی کاراکترهای توضیحات به ۱۱۰ کاراکتر برای تمیزی کادر
  const CHARACTER_LIMIT = 50;
  const truncatedDescription =
    description.length > CHARACTER_LIMIT
      ? description.substring(0, CHARACTER_LIMIT) + "..."
      : description;

  return (
    <div className="flex w-full flex-col group">
      <ScaleIn delay={0.4}>
        <Link href={`/deep-dives/${slug}`} className="block w-full">
          <figure className="h-66.25 w-full overflow-hidden rounded-t-3xl">
            <Image
              width={500}
              height={500}
              src={image}
              alt={title}
              className="size-full object-cover"
            />
          </figure>

          <div
            className="bg-background-7 flex h-66.25 flex-col items-start justify-between rounded-b-3xl p-8"
            aria-label={title}
          >
            <div className="space-y-2 w-full">
              <TextReveal delay={0.4}>
                <h3 className="font-sora text-lg md:text-xl font-medium tracking-tight text-black/70 line-clamp-2 leading-snug">
                  {title}
                </h3>
                <p className="font-inter-tight text-tagline-2 font-normal text-black/60 mt-1">
                  {truncatedDescription}
                </p>
              </TextReveal>
            </div>

            <div className="mt-4">
              <TextReveal delay={0.6}>
                <h4 className="font-sora text-sora-heading-7 font-normal text-black/70">
                  {author}
                </h4>
                <p className="font-inter-tight text-tagline-3 font-normal text-black/50">
                  {pos}
                </p>
              </TextReveal>
            </div>

            <div
              className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
              aria-hidden="true"
            >
              <span className="relative size-6 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute top-0 left-0 transition-all duration-450 ease-in-out group-hover:-top-6.5 group-hover:left-6.5"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute top-5 -left-6 transition-all duration-450 ease-in-out group-hover:top-0 group-hover:left-0"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </ScaleIn>
    </div>
  );
}
