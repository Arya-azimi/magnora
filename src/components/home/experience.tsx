import { ExCardInfoes } from "@/lib/constants/experience-card";
import ScaleIn from "../animation/ScaleIn";
import TextReveal from "../animation/TextReveal";
import LinkPrimary from "../shared/button/link-primary";
import ExCard from "../shared/card/experience-card";

export default function Experience() {
  return (
    <section
      className="overflow-hidden py-[80px] md:py-[120px] xl:py-[156px]"
      aria-labelledby="experience-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="main-container">
        <div className="space-y-19">
          {/* content  */}
          <div className="space-y-3">
            <TextReveal delay={0.2}>
                <h2
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal"
            >
              Experience AI in action
            </h2>
            </TextReveal>
            <TextReveal delay={0.4}>
              <p
              id="experience-description"
              className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto text-center font-normal"
              aria-describedby="experience-heading"
            >
              See how we've delivered measurable success to our clients.
            </p>
            </TextReveal>
          </div>

          {/* cards + btn */}
          <div className="space-y-14" role="list" aria-label="AI experience showcase cards">
            {/* card  */}
            <div
              data-delay="0.3"
              className="grid grid-cols-12 items-start gap-4 lg:gap-2"
            >
              {ExCardInfoes.map((card, index)=>(
                <ExCard
                key={index}
                name={card.Name}
                imagePath={card.imagePath}
                className={card.class}
                bffigcls={card.cardCls}
                />
              ))}
            </div>

            <div
            
              className="text-center"
              aria-label="Call to action"
            >
              <LinkPrimary
                    button-text="Try a live demo"
                    href="/contact"
                    aria-label="Try a live demo of our AI solutions" buttonText={"Contact Us"}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}