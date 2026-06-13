import LinkPrimaryV2 from "../shared/button/link-primary-v2";
import PricingButton from "../shared/button/pricing-button";
import CheckIcon from "../shared/checked-shadcs";
import ScaleIn from "../animation/ScaleIn";
import TextReveal from "../animation/TextReveal";

export default function PricingSec() {
  return (
    <>
      <section
          className="bg-[url('/images/opai-35.jpg')] bg-cover bg-center bg-no-repeat py-[80px] md:py-[120px] xl:py-[156px]"
          aria-labelledby="pricing-heading"
        >
          <div className="main-container">
            <div className="space-y-8 lg:space-y-2">
              <ScaleIn delay={0.2}>
                <div
                className="rounded-3xl bg-white/10 px-2 py-8 md:px-0 md:py-14"
              >
               <TextReveal delay={0.6}>
                 <h2
                  data-text-reveal
                  data-delay="0.2"
                  className="text-sora-heading-3 lg:text-sora-heading-2 font-sora mx-auto max-w-[400px] text-center font-normal text-white/90"
                >
                  Flexible plans that grow with you
                </h2>
               </TextReveal>
              </div>
              </ScaleIn>
        
              <div
                className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 lg:flex-nowrap lg:gap-y-0"
              >
                <div
                  className="flex h-[550px] w-full max-w-[425px] flex-col items-start justify-between rounded-3xl bg-white p-8"
                >
                  <div className="space-y-1">
                    <h3 className="font-sora text-sora-heading-4 text-background-13/80 font-normal">Starter</h3>
                    <p
                      className="font-inter-tight text-tagline-3 text-background-13/50 max-w-[150px] font-normal"
                    >
                      Perfect for getting started
                    </p>
                  </div>
        
                  <h4 className="font-inter-tight text-it-heading-4 h-10.5 font-normal text-black">
                    <span className="text-background-13/30" aria-hidden="true">$</span><span>49</span
                    ><span className="text-it-heading-6 text-background-13/30">/mo</span>
                  </h4>
        
                  <ul className="space-y-2" aria-label="Starter plan features">
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                        >Web-based editor</span
                      >
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        Access to 300+ AI voices</span
                      >
                    </li>
        
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                        >Basic audio export (MP3)</span
                      >
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                        >5 minutes of voiceover per month</span
                      >
                    </li>
                  </ul>
        
                  <div className="w-full">
                    <PricingButton href="#" buttonText="Start free"/>
                  </div>
                </div>
        
                <div
                  className="flex h-[550px] w-full max-w-[425px] flex-col items-start justify-between rounded-3xl bg-white p-8"
                >
                  <div className="space-y-1">
                    <h3 className="font-sora text-sora-heading-4 text-background-13/80 font-normal">Pro</h3>
                    <p
                      className="font-inter-tight text-tagline-3 text-background-13/50 max-w-[150px] font-normal"
                    >
                      Full suite access for growing businesses.
                    </p>
                  </div>
        
                  <h4 className="font-inter-tight text-it-heading-4 h-10.5 font-normal text-black">
                    <span className="text-background-13/30" aria-hidden="true">$</span><span>149</span
                    ><span className="text-it-heading-6 text-background-13/30">/mo</span>
                  </h4>
        
                  <ul className="space-y-2" aria-label="Pro plan features">
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        120 minutes of voiceover per month</span
                      >
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                        >2,000+ premium voices in 80+ languages</span
                      >
                    </li>
        
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                        >Background music & emotion control</span
                      >
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        Commercial usage rights</span
                      >
                    </li>
                  </ul>
        
                  <div className="w-full">
                    <LinkPrimaryV2 href="#" buttonText="Start free" className="bg-background-4"/>
                  </div>
                </div>
        
                <div
                  className="flex h-[550px] w-full max-w-[425px] flex-col items-start justify-between rounded-3xl bg-white p-8"
                >
                  <div className="space-y-1">
                    <h3 className="font-sora text-sora-heading-4 text-background-13/80 font-normal">
                      Enterprise
                    </h3>
                    <p className="font-inter-tight text-tagline-3 text-background-13/50 font-normal">
                      Custom Pricing <br />Tailored deployment and hands-on support.
                    </p>
                  </div>
        
                  <h4 className="font-inter-tight text-it-heading-4 h-10.5 font-normal text-black">
                    <span className="text-background-13/30" aria-hidden="true">$</span><span>179</span
                    ><span className="text-it-heading-6 text-background-13/30">/mo</span>
                  </h4>
        
                  <ul className="space-y-2" aria-label="Enterprise plan features">
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                        >600+ minutes monthly</span
                      >
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        Voice cloning (1 voice)</span
                      >
                    </li>
        
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        API access</span
                      >
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                        >HD video & audio exports (MP4/MP3)</span
                      >
                    </li>
        
                    <li className="flex items-center justify-start gap-x-3">
                      <span aria-hidden="true"> <CheckIcon/> </span>
                      <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                        >Priority support</span
                      >
                    </li>
                  </ul>
        
                  <div className="w-full">
                    <PricingButton href="#" buttonText="Start free"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>     
  )
}