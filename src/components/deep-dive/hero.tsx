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

export default async function DeepDivesHero() {
  // گرفتن اطلاعات پروژه‌ها از جدول جدید
  const deepDives = await executeQuery<DeepDiveResult[]>({
    query:
      "SELECT id, slug, title, description, image_main, author FROM deep_dives ORDER BY created_at DESC",
    values: [],
  });

  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-3">
            <h2
              data-text-reveal
              id="solutions-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[703px] text-center font-normal tracking-[-2.4px]"
            >
              Deep Dives & Projects
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto max-w-[390px] text-center font-normal"
            >
              Explore the engineering and architecture behind my core AI
              solutions.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            role="list"
            aria-label="Deep Dives"
          >
            {deepDives.map((project) => (
              <DeepDivesCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                description={project.description}
                image={project.image_main}
                author={project.author}
                pos="AI Engineer" // این رو دستی دادیم چون توی دیتابیس فعلاً نیست
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
