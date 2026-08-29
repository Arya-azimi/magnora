"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import MobileMenu from "../shared/mobile-menu";
import LinkPrimary from "../shared/button/link-primary";
import ResourcesMenu from "./navbar/resources-menu";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");

    const handleMouseEnter = (e: Event) => {
      const item = e.currentTarget as HTMLElement;
      item.classList.add("active");

      const menuId = item.getAttribute("data-menu");
      if (menuId) {
        document.getElementById(menuId)?.classList.add("active");
      }
    };

    const handleMouseLeave = (e: Event) => {
      const item = e.currentTarget as HTMLElement;
      item.classList.remove("active");

      const menuId = item.getAttribute("data-menu");
      if (menuId) {
        document.getElementById(menuId)?.classList.remove("active");
      }
    };

    navItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <header>
      <div
        className={`header-one lp:max-w-[1290px]! ${className} shadow shadow-cyan-50 md:mb-5 fixed top-5 left-1/2 z-50 mx-auto flex w-full max-w-[350px] -translate-x-1/2 items-center justify-between rounded-2xl bg-white px-2.5 py-2.5 backdrop-blur-[25px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0`}
      >
        <div>
          <Link href="/" className="block w-[150px]">
            <span className="sr-only">Home</span>
            <Image
              src="/images/logo/Logo.webp"
              width={150}
              height={100}
              alt="Logo"
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>

        <ResourcesMenu />

        <div className="hidden items-center m-2 justify-center xl:flex">
          <LinkPrimary href="09104082056" buttonText="Call Us !" />
        </div>

        <div className="block xl:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="nav-hamburger bg-background-4 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full"
          >
            <span className="sr-only">Menu</span>
            <span className="block h-0.5 w-6 bg-white/80"></span>
            <span className="block h-0.5 w-6 bg-white/80"></span>
            <span className="block h-0.5 w-6 bg-white/80"></span>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
