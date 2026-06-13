import ServicesCard from "../shared/card/services-card";
import LinkPrimary from "../shared/button/link-primary";
import TextReveal from "../animation/TextReveal";
import Link from "next/link";
import { executeQuery } from "@/lib/db";
import { gridClasses , delays} from "@/lib/constants/services-Card";

interface ServiceFromDB {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export default async function Solutions() {
  const services = await executeQuery<ServiceFromDB[]>({
      query: "SELECT id, slug, title, description, icon FROM services ORDER BY id ASC"
    });

  return (
    <section className="py-[80px] md:py-[120px] xl:py-[156px]" aria-labelledby="solutions-heading">
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-3">
            <TextReveal delay={0.2}>
              <h2
              id="Smart-solutions"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[703px] text-center font-normal"
            >
              Our Services
            </h2>
            </TextReveal>
            <TextReveal delay={0.4}>

            <p
              className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto max-w-[390px] text-center font-normal"
            >
              Empowering industries with AI-driven innovation to solve real-world challenges.
            </p>
            </TextReveal>
          </div>

          <div
            className="grid grid-cols-12 items-center justify-center gap-4 *:col-span-12 md:*:col-span-6 lg:gap-2 lg:*:col-start-auto md:[&>*:last-child]:col-span-12 lg:[&>*:nth-child(5n+1)]:col-span-4 lg:[&>*:nth-child(5n+2)]:col-span-4 lg:[&>*:nth-child(5n+3)]:col-span-4 lg:[&>*:nth-child(5n+4)]:col-span-6 lg:[&>*:nth-child(5n+5)]:col-span-6"
            aria-label="AI solutions"
          >
              {services.slice(0, 5).map((service, index) => {
              const currentGridClass = gridClasses[index % gridClasses.length];
              const currentDelay = delays[index % delays.length];
                          
              return (
                <div
                  key={service.id} 
                  data-opai-animate
                  data-delay={Number(currentDelay)}
                  className={currentGridClass}
                  role="listitem"
                >
                  <Link href={`/services/${service.slug}`}>
                    <ServicesCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    />
                  </Link>
                </div>
              );
            })}

          </div>

          <div
            className="text-center"
            aria-label="Call to action"
          >
            <LinkPrimary
                button-text="Discover our services"
                href="/services" buttonText={"more services"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}