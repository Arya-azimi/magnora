import ScaleIn from "../animation/ScaleIn";
import TextReveal from "../animation/TextReveal";
import LinkPrimary from "../shared/button/link-primary";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[130px] pb-[86px] md:pt-[150px] lg:pt-[174px]"
      aria-labelledby="hero-heading"
    >
      <div className="main-container">
        <div className="relative">
          {/* content  */}
          <div className="space-y-14">
            {/* text  */}
            <div className="space-y-4">
              <TextReveal delay={0.2}>
                <h1
                  id="hero-heading"
                  data-text-reveal
                  className="font-sora text-sora-heading-3 md:text-sora-heading-2 lg:text-sora-heading-1 mx-auto max-w-[950px] text-center font-normal tracking-[-3.2px]"
                >
                  MAGNORA
                  <br />
                  Transforming Data into Industrial Dominance.
                </h1>
              </TextReveal>
              <TextReveal delay={0.6}>
                <p
                  data-delay="0.2"
                  className="text-tagline-1 text-background-13/60 mx-auto max-w-[650px] text-center font-normal"
                >
                  Harness the power of intelligent solutions to simplify
                  workflows, boost efficiency, and stay ahead of the
                  competition.
                </p>
              </TextReveal>
            </div>
            {/* btn  */}
            <div data-delay="0.3" data-instant className="text-center">
              <LinkPrimary
                button-text="Request a demo"
                href="#Smart-solutions"
                buttonText={"Start Monitoring"}
              />
            </div>
          </div>
          {/* img */}
          <figure
            data-delay="0.4"
            data-instant
            className="mx-auto md:size-[709px]"
          >
            <ScaleIn delay={0.2}>
              <img
                src="./images/main.webp"
                alt="AI technology transforming business operations"
                className="hero-img-animate size-full object-cover"
              />
            </ScaleIn>
          </figure>

          {/* card one (left) */}

          <div className="lp:left-[-2%] absolute top-[30%] left-[2%] hidden xl:block 2xl:left-[-7%]">
            <div className="relative h-[229px] w-[289px] rounded-3xl bg-white p-11">
              {/* slice one  */}
              <div
                className="bg-background-3 relative z-10 flex w-full max-w-[200px] rotate-6 items-center gap-x-4 rounded-xl p-2.5"
                aria-label="Team member card"
              >
                <figure className="size-11 overflow-hidden rounded-lg">
                  <img
                    src="./images/members/arya1.webp"
                    alt="Wade Warren, Marketing coordinator"
                    className="size-full object-cover"
                    itemProp="image"
                  />
                </figure>
                <div>
                  <p
                    className="text-tagline-2 font-sora tracking-[-0.48px] text-white"
                    itemProp="name"
                  >
                    Arya Azimi
                  </p>
                  <p
                    className="font-inter-tight text-tagline-4 text-white/60"
                    itemProp="jobTitle"
                  >
                    Co-Founder
                  </p>
                </div>
              </div>

              {/* slice two */}
              <div
                className="bg-background-3 absolute bottom-[52px] h-[62px] flex items-center w-full max-w-[200px] -rotate-8 rounded-xl p-2.5"
                aria-hidden="true"
              >
                <figure className="size-11 overflow-hidden rounded-lg">
                  <img
                    src="./images/members/ehsan1.webp"
                    alt="Wade Warren, Marketing coordinator"
                    className="size-full object-cover"
                    itemProp="image"
                  />
                </figure>
                <div>
                  <p
                    className="text-tagline-2 font-sora tracking-[-0.48px] text-white"
                    itemProp="name"
                  >
                    Ehsan Firouzbakht
                  </p>
                  <p
                    className="font-inter-tight text-tagline-4 text-white/60"
                    itemProp="jobTitle"
                  >
                    Co-Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* card two (right)  */}
          <div
            className="lp:right-[2%] absolute top-[77%] right-[1%] hidden md:inline-block lg:top-[40%] xl:right-[5%] 2xl:right-[-6%]"
            role="complementary"
            aria-label="Development team statistics"
          >
            <div className="w-[280px] space-y-6 rounded-3xl bg-white px-11 py-11 lg:py-14 xl:w-[323px]">
              <div className="space-y-[35px] text-end">
                <h2 className="font-sora text-sg-heading-6 text-background-3 font-normal tracking-[-0.6px]">
                  Dev team
                </h2>
                <div className="space-y-6 flex flex-row-reverse justify-between">
                  <div className="flex items-center justify-end -space-x-3">
                    <figure className="size-9 overflow-hidden rounded-md ring-1 ring-white xl:size-11">
                      <img
                        src="./images/members/arya1.webp"
                        alt="Development team member"
                        className="size-full object-cover"
                      />
                    </figure>
                    <figure className="size-9 overflow-hidden rounded-md ring-1 ring-white xl:size-11">
                      <img
                        src="./images/members/ehsan1.webp"
                        alt="Development team member"
                        className="size-full object-cover"
                      />
                    </figure>

                    <div
                      className="flex size-9 rotate-270 items-center justify-center overflow-hidden rounded-md bg-(image:--color-gradient-5) ring-1 ring-white xl:size-11"
                      role="img"
                      aria-label="Additional team members"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.75 12H20.25"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 3.75V20.25"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="text-left">
                      <p className="font-inter-tight text-tagline-2 text-background-3 font-normal">
                        Efficiency
                      </p>
                      <h3 className="font-sora text-sg-heading-5 xl:text-sg-heading-3 text-background-3 flex items-center justify-center font-normal tracking-[-1.6px]">
                        <span
                          data-counter
                          data-number="87"
                          data-speed="1400"
                          data-interval="200"
                          data-rooms="2"
                          data-height-space="2.1"
                        >
                          87{" "}
                        </span>
                        %
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card three  */}
          <figure className="lp:top-[60%] lp:left-[-2%] absolute top-[80%] left-[1%] hidden w-full max-w-[300px] overflow-hidden rounded-3xl md:inline-block lg:top-[60%] xl:max-w-[374px] 2xl:top-[56%] 2xl:left-[-3%]">
            <img
              src="./images/main2.webp"
              alt="AI technology showcase"
              className="size-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
