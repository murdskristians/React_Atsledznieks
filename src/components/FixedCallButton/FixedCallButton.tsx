"use client";
import clsx from "clsx";
import { CallButton } from "@/components/CallButton";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export const FixedCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("CallToAction");

  const handleScroll = () => {
    if (window?.scrollY >= 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "transition-opacity ease-in fixed bottom-0 left-0 right-0 w-full p-4 pt-2 flex flex-col items-center justify-center bg-[--color-bg]/70 backdrop-blur-md",
        isVisible ? "opacity-100 z-40" : "opacity-0 -z-40"
      )}
    >
      <p className="mb-1">
        <strong>24/7</strong> {t("callAnyTime")}
      </p>
      <CallButton fullWidth />
    </div>
  );
};
