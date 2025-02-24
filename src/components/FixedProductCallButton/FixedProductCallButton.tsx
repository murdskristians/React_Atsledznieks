"use client";
import clsx from "clsx";
import { CallButton } from "@/components/CallButton";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface IProps {
  price: number;
}

export const FixedProductCallButton = (props: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("Catalog");

  const handleScroll = () => {
    if (window?.scrollY >= 800) {
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
        "transition-opacity ease-in fixed bottom-0 left-0 right-0 w-full p-4 flex flex-col justify-center bg-[--color-bg]/70 backdrop-blur-md",
        isVisible ? "opacity-100 z-40" : "opacity-0 -z-40"
      )}
    >
      <div className="flex flex-row items-center gap-8">
        <div className="flex flex-col justify-center gap-1 shrink-0">
          <p className="font-mono text-3xl">€{props.price}</p>
          <p>{t("callForOrder")}</p>
        </div>
        <CallButton fullWidth invert={false} />
      </div>
    </div>
  );
};
