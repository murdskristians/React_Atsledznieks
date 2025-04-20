"use client";
import clsx from "clsx";

import { Logo } from "@/components/Logo";
import { CallToActionButtons } from "@/components/CallToActionButtons";
import { BottomNav } from "@/components/Nav";
// import { usePathname } from "@/i18n/routing";
// import { URL } from "@/constants/navigation";

import { FooterMiddleLine } from "./FooterMiddleLine";
import { FooterTopLine } from "./FooterTopLine";

export const Footer = () => {
  // const pathname = usePathname();

  // const isHomePage = pathname === URL.HOME;

  return (
    <div
      className={clsx(
        "relative w-full flex justify-center md:pt-24 pb-24 md:pb-0"
        // isHomePage && "pb-24 md:pb-0"
      )}
    >
      <div className="hidden sm:block">
        <FooterTopLine />
      </div>
      <footer className="relative px-6 pt-16 pb-8 xl:pb-32 max-w-screen-xl flex flex-col md:flex-row justify-center gap-12 xl:gap-24 w-full">
        <div>
          <Logo />
          <br />
          <br />
          <CallToActionButtons />
        </div>
        <div className="sm:hidden">
          <FooterMiddleLine />
        </div>
        <BottomNav direction="column" />
        <p className="self-end">© 2025. All rights reserved.</p>
      </footer>
    </div>
  );
};
