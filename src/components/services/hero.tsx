import { executeQuery } from '@/lib/db';
import Link from 'next/link';
import ServicesCard from '../shared/card/services-card';
import { gridClasses, delays } from '@/lib/constants/services-Card';


interface ServiceFromDB {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export default async function ServicesHero() {
  
  const services = await executeQuery<ServiceFromDB[]>({
    query: "SELECT id, slug, title, description, icon FROM services ORDER BY id ASC"
  });
  return (
    <>
      <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
        <div className="main-container">
          <div className="space-y-14">
            <div className="space-y-3">
              <h2
                data-text-reveal
                id="solutions-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[703px] text-center font-normal tracking-[-2.4px]"
              >
                Smart solutions, tailored for you
              </h2>
              <p
                data-text-reveal
                data-delay="0.2"
                className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto max-w-[390px] text-center font-normal"
              >
                Empowering industries with AI-driven innovation to solve real-world challenges.
              </p>
            </div>

            <div
              className="grid grid-cols-12 items-center justify-center gap-4 lg:gap-2"
              role="list"
              aria-label="AI solutions"
            >
              {services.map((service, index) => {
                
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
          </div>
        </div>
      </section>
    </>
  );
}