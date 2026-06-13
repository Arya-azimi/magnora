import { executeQuery } from "@/lib/db";
import TextReveal from "../animation/TextReveal";
import TeamCard from "../shared/card/team-card";

interface TeamMemberPreview {
  id: number;
  slug: string;
  name: string;
  role: string;
  image: string;
}

export default async function TeamHero() {
  // واکشی اطلاعات کارت اعضای تیم از دیتابیس
  const members = await executeQuery<TeamMemberPreview[]>({
    query:
      "SELECT id, slug, name, role, image FROM team_members ORDER BY id ASC",
    values: [],
  });

  return (
    <>
      <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
        <div className="main-container">
          <div className="space-y-19">
            <div className="space-y-3 text-center">
              <TextReveal delay={0.2}>
                <h2
                  data-text-reveal
                  className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
                >
                  The minds Behind Magnora
                </h2>
              </TextReveal>
              <TextReveal delay={0.4}>
                <p
                  data-text-reveal
                  data-delay="0.2"
                  className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[500px] font-normal"
                >
                  Our team brings together deep expertise in AI, design, and
                  technology to build tools that empower your creativity and
                  productivity.
                </p>
              </TextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-2 gap-y-4 md:gap-y-2">
              {members.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  slug={member.slug}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
