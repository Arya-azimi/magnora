import Link from "next/link";
import HoverBgTransform from "@/components/shared/hover-bg-transform";
import {
  FaqIcon,
  SupportIcon,
  ContactIcon,
  SuccessIcon,
  AboutIcon,
} from "@/components/shared/menu-icon";

export default function ResourcesMenu() {
  return (
    <nav className="hidden items-center xl:flex">
      <ul className="flex items-center">
        <li>
          <Link
            href="/deep-dives"
            className="group relative flex items-center gap-2 rounded-[10px] p-3"
          >
            <HoverBgTransform />
            <span className="relative z-10">
              <FaqIcon />
            </span>
            <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
              Deep Dives
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/services"
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
            className="group relative flex items-center gap-2 rounded-[10px] p-3"
          >
            <HoverBgTransform />
            <span className="relative z-10">
              <SuccessIcon />
            </span>
            <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
              Team Memebers
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
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
