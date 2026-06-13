import Link from "next/link";
import HoverBgTransform from "@/components/shared/hover-bg-transform";

import {
  LoginIcon,
  SigninIcon,
  ReferralIcon,
  AffiliateIcon,
  AffiliatePolicy,
  TermsIcon,
  PrivacyIcon,
  RefundIcon,
  GdprIcon,
  LegalIcon,
} from "@/components/shared/menu-icon";

export default function PlanAndSupportMenu() {
  return (
    <div>
      <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full min-w-[952px] -translate-x-1/2 bg-transparent opacity-0"></div>
      <div
        id="product-mega-menu"
        className="dropdown-menu border-stroke-2/60 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 space-y-6 rounded-[20px] border bg-white p-4 opacity-0 transition-all duration-300 md:w-[952px]"
      >
        <div className="flex items-start gap-y-6 md:gap-x-6">
          <ul className="flex-1 space-y-2">
            <li>
              <Link
                href="/login"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <LoginIcon />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">Login</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Log into your dashboard</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <SigninIcon />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">Create Account</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Create your free account</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <ReferralIcon />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">Referral Program</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Share and earn together</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <AffiliateIcon />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">Affiliate Program</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Earn commissions as partner</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <AffiliatePolicy />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">Affiliate Policy</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Understand our policies</p>
                </div>
              </Link>
            </li>
          </ul>

          <ul className="flex-1 space-y-2">
            <li>
              <Link
                href="#"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <TermsIcon />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">Terms & Conditions</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Understand our terms</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <PrivacyIcon />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">Privacy Policy</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Understand data protection</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <RefundIcon />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">Refund Policy</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Review refund terms</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <GdprIcon />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">GDPR</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Review GDPR information</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
              >
                <HoverBgTransform />
                <div className="relative z-10 mt-1.5">
                  <LegalIcon />
                </div>
                <div className="relative z-10 space-y-0.5">
                  <p className="text-tagline-2 font-sora text-background-13 font-normal">Legal</p>
                  <p className="text-tagline-3 text-background-13/60 font-normal">Read legal policies</p>
                </div>
              </Link>
            </li>
          </ul>

          <figure className="w-full flex-1 space-y-3">
            <p className="text-tagline-3 font-sora text-background-13/60 font-medium">What's New</p>
            <Link href="#">
              <figure className="group relative min-h-[200px] w-full max-w-full overflow-hidden rounded-[14px]">
                <img
                  src="/images/opai-img-419.jpg"
                  alt="What's New"
                  className="h-full w-full rounded-[14px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 size-full space-y-1 transition-all duration-500 ease-in-out group-hover:top-5 group-hover:left-5">
                  <p className="text-tagline-2 font-sora font-medium text-white">Product changelog</p>
                  <p className="text-tagline-3 w-full max-w-[212px] font-normal text-white/60">
                    Access all your workflows, analytics, and integrations in one smart dashboard.
                  </p>
                </div>
              </figure>
            </Link>
          </figure>
        </div>
      </div>
    </div>
  );
}