import { executeQuery } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import LinkPrimary from "@/components/shared/button/link-primary";
import type { Metadata } from "next";
import {
  DeepDiveProject,
  PageProps,
} from "@/lib/constants/deep-dive-interefaces";
import TextReveal from "@/components/animation/TextReveal";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const projects = await executeQuery<DeepDiveProject[]>({
    query: "SELECT title, description FROM deep_dives WHERE slug = ? LIMIT 1",
    values: [slug],
  });

  const project = projects[0];

  if (!project) {
    return {
      title: "Project Not Found | Magnora",
    };
  }

  return {
    title: `${project.title} | Magnora`,
    description: project.description,
  };
}

export default async function DeepDiveDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const projects = await executeQuery<DeepDiveProject[]>({
    query: "SELECT * FROM deep_dives WHERE slug = ? LIMIT 1",
    values: [slug],
  });

  const project = projects[0];

  if (!project) {
    notFound();
  }

  return (
    <section className="lp:pb-44! pt-28 pb-20 md:pt-39 md:pb-25 lg:pb-30">
      <div className="main-container">
        <div className="space-y-8">
          <TextReveal delay={0.2}>
            <h2
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[1094px] text-center"
            >
              {project.title}
            </h2>
          </TextReveal>
          <div className="w-full flex justify-center items-center text-center">
            {project.github_url && (
              <LinkPrimary
                className=""
                buttonText="View On Github"
                href={project.github_url}
              />
            )}
          </div>

          <div className="bg-white space-y-2.5 overflow-hidden rounded-3xl p-2 pb-12">
            <div className="flex items-center justify-center p-3">
              <div className="w-full">
                <figure className="h-[250px] w-full overflow-hidden rounded-2xl md:h-[500px] xl:h-[710px]">
                  <Image
                    width={1200}
                    height={800}
                    src={project.image_main}
                    alt={`${project.title} main analysis`}
                    className="size-full object-cover"
                    priority
                  />
                </figure>
              </div>
            </div>

            <div
              className="case-study-markdown px-2 md:px-6"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />

            <div className="mt-[70px] space-y-4 px-2 md:px-6">
              <h3
                data-opai-animate
                data-delay="0.1"
                className="font-sora text-sora-heading-4 text-background-13/90"
              >
                Share this project
              </h3>

              <div data-opai-animate data-delay="0.2">
                <span className="text-sm text-background-13/60">
                  Authors: {project.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
