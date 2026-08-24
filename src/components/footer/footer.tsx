import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background-8 pt-[80px] pb-7 md:pt-[120px] xl:pt-[156px]">
      <div className="main-container">
        <div className="bg-background-5 space-y-16 overflow-hidden rounded-[30px] p-9">
          <div>
            <Link href="/" className="block">
              <span className="sr-only">Neural Networks</span>
              <Image
                src="/images/logo/footer_logo.webp"
                width={166}
                height={40}
                alt="Logo"
                className="w-[166px] h-auto"
              />
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-y-8 lg:gap-0">
            {/* Links Columns */}
            <div className="col-span-12 grid grid-cols-12 gap-8 lg:col-span-8">
              {/* Column 1: Company */}
              <div className="col-span-12 sm:col-span-4 lg:pl-6">
                <div className="space-y-1">
                  <p className="text-tagline-2 font-semibold text-white/90">
                    Useful Pages
                  </p>
                  <ul>
                    <li className="py-2">
                      <Link
                        href="/deep-dives"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Deep Dives
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/services"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/deep-dives"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Team Members
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/about"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/contact"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 2: Platform */}
              <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                <div className="space-y-1">
                  <p className="text-tagline-2 font-semibold text-white/90">
                    Case Studies
                  </p>
                  <ul>
                    <li className="py-2">
                      <Link
                        href="/deep-dives/wce-colon-disease-classification-yolov8"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Colon Disease
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/deep-dives/global-sustainable-energy-intelligence-system"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Sustainable Energy Intelligence
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/deep-dives/brain-tumor-detection-cnn-medical-imaging"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Brain Tumor Detection
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/deep-dives/aerobms-aerospace-battery-management"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Aerospace Battery Capacity
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/deep-dives/ai-predictive-maintenance-system"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        End-to-End AI Predictive Maintenance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Resources */}
              <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                <div className="space-y-1">
                  <p className="text-tagline-2 font-semibold text-white/90">
                    Services
                  </p>
                  <ul>
                    <li className="py-2">
                      <Link
                        href="/services/deep-learning"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Deep Learning
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/services/computer-vision"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Computer Vision
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/services"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/services/nlp-transformers"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        NLP & Transformer Models
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/services/time-series-forecasting"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Time Series Forecasting
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div data-opai-animate data-delay="0.3" className="space-y-1">
                    <p className="text-tagline-2 text-background-11 font-semibold">
                      Address:
                    </p>
                    <p className="text-tagline-3 font-normal text-white/50">
                      Iran, Tehran
                    </p>
                  </div>
                  <div data-opai-animate data-delay="0.4">
                    <p className="text-tagline-2 text-background-11 mb-1 font-semibold">
                      Contact:
                    </p>
                    <p className="text-tagline-3 font-normal text-white/50">
                      +98 910 408 2056
                    </p>
                    <p className="text-tagline-3 font-normal text-white/50">
                      ai@magnora.tech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="border-stroke-1/10 flex flex-col items-center justify-between gap-2.5 border-y px-5 py-3.5 sm:flex-row sm:gap-0 lg:py-5">
            <p className="text-tagline-4 font-normal text-white/50">
              &copy; <span>{new Date().getFullYear()}</span> MAGNORA. All rights
              reserved.
              <Link href="https://www.linkedin.com/in/arya-azimi-862693416/">
                DESIGNED BY ARYA AZIMI
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <PackageLink /> */}
    </footer>
  );
}
