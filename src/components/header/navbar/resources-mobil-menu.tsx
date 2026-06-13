"use client";

import Link from "next/link";
import HoverBgTransform from "@/components/shared/hover-bg-transform";
import {
  FaqIcon,
  SupportIcon,
  ContactIcon,
  SuccessIcon,
  AboutIcon,
} from "@/components/shared/menu-icon";

interface MobileResourcesProps {
  onClose: () => void;
}

export default function MobileResources({ onClose }: MobileResourcesProps) {
  return (
    <nav className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
      <ul className="list-none m-0 p-0">
        <li>
          <Link
            href="/"
            onClick={onClose}
            className="group relative flex items-center gap-2 rounded-[10px] p-3"
          >
            <HoverBgTransform />
            <span className="relative z-10">
              <FaqIcon />
            </span>
            <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
              Home
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/deep-dives"
            onClick={onClose}
            className="group relative flex items-center gap-2 rounded-[10px] p-3"
          >
            <HoverBgTransform />
            <span className="relative z-10">
              <FaqIcon />
            </span>
            <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
              Deep Dive
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/services"
            onClick={onClose}
            className="group relative flex items-center gap-2 rounded-[10px] p-3"
          >
            <HoverBgTransform />
            <span className="relative z-10">
              <SupportIcon />
            </span>
            <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
              Services
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/team"
            onClick={onClose}
            className="group relative flex items-center gap-2 rounded-[10px] p-3"
          >
            <HoverBgTransform />
            <span className="relative z-10">
              <SuccessIcon />
            </span>
            <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
              Team Members
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            onClick={onClose}
            className="group relative flex items-center gap-2 rounded-[10px] p-3"
          >
            <HoverBgTransform />
            <span className="relative z-10">
              <AboutIcon />
            </span>
            <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
              About Us
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            onClick={onClose}
            className="group relative flex items-center gap-2 rounded-[10px] p-3"
          >
            <HoverBgTransform />
            <span className="relative z-10">
              <ContactIcon />
            </span>
            <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
