import TextReveal from "../animation/TextReveal";
import LinkPrimary from "../shared/button/link-primary";
import { CaseStuyCardInfoes } from "@/lib/constants/case-studies-infoes";
import DeepDivesCard from "../shared/card/deep-dives-card";
import { executeQuery } from "@/lib/db";

interface DeepDiveResult {
  id: number;
  slug: string;
  title: string;
  description: string;
  image_main: string;
  author: string;
}
export default async function TrackRecord() {
  const deepDives = await executeQuery<DeepDiveResult[]>({
    query:
      "SELECT id, slug, title, description, image_main, author FROM deep_dives ORDER BY created_at DESC",
    values: [],
  });

  return (
    <section
      className="py-20 md:py-30 xl:py-39"
      aria-labelledby="track-record-heading"
    >
      <div className="main-container">
        <div className="space-y-19">
          {/* content  */}

          <div className="space-y-3 text-center">
            <TextReveal delay={0.2}>
              <h2
                id="track-record-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal"
              >
                Our proven track record
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto text-center font-normal">
                See how we've delivered measurable success to our clients.
              </p>
            </TextReveal>
          </div>

          <div className="space-14 cursor-pointer">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {deepDives.slice(0, 3).map((project) => (
                <DeepDivesCard
                  key={project.id}
                  slug={project.slug}
                  title={project.title}
                  description={project.description}
                  image={project.image_main}
                  author={project.author}
                  pos="AI Engineer"
                />
              ))}
            </div>

            <div className="text-center mt-15">
              <LinkPrimary
                button-text="View all case studies"
                href="/deep-dives"
                buttonText={"View all case studies"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
