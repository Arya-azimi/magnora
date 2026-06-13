import LinkPrimary from "@/components/shared/button/link-primary";
import TextReveal from "../animation/TextReveal";
import ScaleIn from "../animation/ScaleIn";

export default function CTA() {
  return (
    <section className="py-[80px] lg:py-[112px]" aria-labelledby="cta-heading">
      <div className="main-container overflow-hidden">
        <div
          data-opai-animate
          data-delay="0.1"
          className="flex flex-col items-center justify-between gap-x-[22px] rounded-3xl bg-white px-8 pt-20 md:px-0 md:pl-[80px] lg:h-[496px] lg:flex-row lg:pt-0 xl:pl-[112px]"
        >
          {/* content */}
          <div className="space-y-12 text-center lg:text-left">
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h2
                data-text-reveal
                className="font-sora lg:text-sora-heading-2 text-sora-heading-3 text-background-13/90 w-full max-w-[567px] font-normal"
              >
                Elevate your business with intelligent solutions
              </h2>
              </TextReveal>
              <TextReveal delay={0.4}>
                <p
                data-text-reveal
                data-delay="0.2"
                className="font-inter-tight text-tagline-2 text-background-13/50 mx-auto max-w-[400px] font-normal lg:mx-0"
              >
                Connect with us to explore how Nexsas can solve your biggest challenges.
              </p>
              </TextReveal>
            </div>

            <div data-opai-animate data-delay="0.3">
              <TextReveal delay={0.6}>
                <LinkPrimary buttonText="Learn more" href="/services" />
              </TextReveal>
            </div>
          </div>

          <div
            className="mt-10 -mr-8 mx-auto w-full max-w-[550px] overflow-hidden rounded-b-2xl md:mr-0 lg:mr-auto xl:mt-0 xl:max-w-[589px]"
          >
            <ScaleIn delay={0.6}>
              <img
              src="/images/main5.webp"
              alt="Nexsas intelligent business solutions illustration"
              className="size-full object-cover"
              itemProp="image"
            />
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
}