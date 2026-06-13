import { TeamCardInfoes } from "@/lib/constants/team-card";
import TeamCard from "../shared/card/team-card";
import TextReveal from "../animation/TextReveal";
import Image from "next/image";
import ScaleIn from "../animation/ScaleIn";

export default function AboutHero(){
    return(
        <>
           <section className="lp:pb-44! pt-28 pb-20 md:pt-32 md:pb-25 lg:pb-30">
              <div className="main-container">
                <div className="space-y-[60px] md:space-y-[72px]">
                  {/* هدر سکشن */}
                  <div className="space-y-3 text-center">
                    <TextReveal delay={0.2}>
                      <h2
                      data-text-reveal
                      className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
                    >
                      How Magnora began
                    </h2>
                    </TextReveal>
                    <TextReveal delay={0.4}>
                      <p
                      data-text-reveal
                      data-delay="0.2"
                      className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[490px] font-normal"
                    >
                      Magnora was founded to turn AI into practical solutions for real business challenges,
                      intuitive tools that make a lasting impact.
                    </p>
                    </TextReveal>
                  </div>
                
                  {/* گرید اصلی: در موبایل تک‌ستون، در تبلت دو ستون، در دسکتاپ سه‌ستون */}
                  <div className="relativ grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex lg:justify-center lg:items-stretch xl:gap-x-14">
                    
                    {/* بخش اول: تصویر ربات */}
                    <ScaleIn delay={0.2}>

                      <figure className="relative mx-auto h-[450px] w-full max-w-[340px] overflow-hidden rounded-lg md:mx-0 md:max-w-full md:h-full lg:h-[564px] lg:w-[380px] xl:h-[500px] flex-shrink-0">
                          <Image 
                          fill 
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                          src="/images/about.webp" 
                          alt="about-hero-img" 
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-[linear-gradient(180deg,rgba(17,20,29,0.04)_0%,rgba(17,20,29,0.04)_100%)] pointer-events-none"></div>
                      </figure>
                    </ScaleIn>

                
                    {/* بخش دوم: محتوای متنی و کارت آماری */}
                    <div className="flex flex-col justify-between gap-y-8 w-full max-w-[400px] mx-auto md:mx-0 md:max-w-full lg:max-w-[380px] xl:max-w-none xl:flex-row xl:items-end xl:gap-x-8">
                      
                      {/* لیست اهداف */}
                      <div data-delay="0.4" className="space-y-6 md:space-y-8 flex-1">
                        <TextReveal delay={0.2}>
                          <h3 className="font-sora text-sora-heading-4 md:text-sora-heading-3 text-background-13/90 font-normal px-2">
                          Goals ...
                        </h3>
                        </TextReveal>
                
                        <ul className="space-y-4 px-2">
                         <TextReveal delay={0.4}>
                           <li className="font-inter-tight text-tagline-1 text-background-13/60 flex items-center gap-x-2 font-normal">
                            <span className="text-sm hidden md:block">✦</span> Pioneering AI for large-scale business.
                          </li>
                          <li className="font-inter-tight text-tagline-1 text-background-13/60 flex items-center gap-x-2 font-normal">
                            <span className="text-sm hidden md:block">✦</span> Reinventing workflows with smart automation.
                          </li>
                          <li className="font-inter-tight text-tagline-1 text-background-13/60 flex items-center gap-x-2 font-normal">
                            <span className="text-sm hidden md:block">✦</span> Shaping the future of digital products.
                          </li>
                          <li className="font-inter-tight text-tagline-1 text-background-13/60 flex items-center gap-x-2 font-normal">
                            <span className="text-sm hidden md:block">✦</span> Turning complex data into smart decisions.
                          </li>
                         </TextReveal>
                        </ul>
                      </div>
                
                      {/* کارت مشکی آمار */}
                      <ScaleIn delay={0.2}>
                        <div className="bg-background-5 relative w-full space-y-10 overflow-hidden rounded-lg p-6 md:p-8 flex-1 xl:max-w-[320px] self-stretch flex flex-col justify-end min-h-[220px]">
                        <figure className="pointer-events-none absolute top-[-90%] right-[-40%] h-[250px] w-[280px] select-none opacity-40">
                          <img src="./images/opai-1.png" alt="about-hero-img" />
                        </figure>
                        
                        <span className="ns-shape-23 inline-block text-[44px] text-white/90"> </span>
                        
                        <div className="relative z-10 space-y-2">
                          <p className="font-inter-tight text-tagline-1 font-normal text-white/80">
                            Average models Accuracy rate
                          </p>
                          <h3 className="font-sora text-sora-heading-4 md:text-sora-heading-3 flex items-center text-white/90 font-semibold">
                            <span>95</span>%
                          </h3>
                        </div>
                      </div>
                      </ScaleIn>

                    </div>

                  </div>
                </div>
              </div>
            </section>
        </>
    )
}