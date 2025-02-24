"use client";
import { useEffect, useState } from "react";
import not from "ramda/src/not";
import { Logo } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import { Drawer } from "@/components/Drawer";
import { CallToActionButtons } from "@/components/CallToActionButtons";
import { LanguageSelect } from "@/components/LanguageSelect";
import { Link, usePathname } from "@/i18n/routing";
import { URL } from "@/constants/navigation";

import { HamburgerIconButton } from "./HamburgerIconButton";

export const MobileHeader = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(not);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="flex gap-1 items-center h-full w-full bg-[--color-bg]">
        <div className="grow">
          <Link href={URL.HOME}>
            <Logo />
          </Link>
        </div>
        <HamburgerIconButton isOpen={isOpen} toggleOpen={toggleOpen} />
      </div>
      <Drawer isOpen={isOpen} toogleOpen={toggleOpen}>
        <CallToActionButtons />
        <div className="relative w-full py-8">
          <div className="flex flex-row absolute -right-8 top-5 -left-8 -z-50">
            <div className="h-[1px] bg-slate-400 w-8 skew-y-[-40deg] origin-right mt-4" />
            <div className="h-[1px] bg-slate-400 w-full mt-4" />
            <div className="h-[1px] bg-slate-400 w-52 skew-y-[-40deg] origin-left mt-4" />
          </div>
        </div>
        <Nav direction="column" />
        <div className="h-[1px] bg-slate-400 w-full my-5" />
        <LanguageSelect />
      </Drawer>
    </>
  );
};
