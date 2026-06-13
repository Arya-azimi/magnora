"use client";

import Link from "next/link";
import MobileResources from "../header/navbar/resources-mobil-menu";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <aside
      className={`sidebar scroll-bar border-stroke-3/18 fixed top-0 right-0 z-9999 h-screen w-full border-l bg-white transition-all duration-300 sm:w-1/2 sm:rounded-l-xl xl:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={onClose}>
            <span className="sr-only">Home</span>
            <Image
              src="/images/logo/Logo.webp"
              width={150}
              height={100}
              alt="Logo"
              priority
              style={{ width: "150px", height: "auto" }}
            />
          </Link>

          <button
            onClick={onClose}
            className="nav-hamburger-close bg-background-13/10 hover:bg-background-13/20 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-colors duration-200"
          >
            <span className="sr-only">Close Menu</span>
            <span className="bg-background-13 absolute block h-0.5 w-4 rotate-45"></span>
            <span className="bg-background-13 absolute block h-0.5 w-4 -rotate-45"></span>
          </button>
        </div>

        <MobileResources onClose={onClose} />
      </div>
    </aside>
  );
}
