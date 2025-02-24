import clsx from "clsx";
import { CallToActionButtons } from "@/components/CallToActionButtons";

import { KeyRect } from "./KeyRect";
import { MobileLine } from "./MobileLine";
import { IProps } from "./HeroSection";

export const LeftSide = (
  props: Pick<
    IProps,
    | "title"
    | "additionalSection"
    | "rectClassName"
    | "keyColor"
    | "titleClassName"
  >
) => (
  <div className="relative flex flex-col gap-10 sm:gap-20">
    <div className="relative mb-10 order-1">
      <div
        className={clsx(
          `h-[133px] sm:h-[160px] md:h-[200px] lg:h-[270px] w-full rounded-2xl`,
          props.rectClassName
        )}
      />
      <div className="absolute top-8 xl:top-12 left-4 right-4 xl:left-8 xl:right-8 h-[147px] sm:h-[180px] md:h-[220px] lg:h-[350px]">
        <KeyRect fill={props.keyColor} />
      </div>
      <h1
        className={clsx(
          "font-mono font-light text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white absolute top-5 md:top-2 left-8 right-8 xl:left-16 xl:right-16 !leading-tight",
          props.titleClassName
        )}
      >
        {props.title}
      </h1>
    </div>
    {!!props.additionalSection && (
      <div className="order-2 md:order-3">{props.additionalSection}</div>
    )}
    <div className="order-3 md:order-2 md:mt-20">
      <CallToActionButtons />
    </div>
    <div className="absolute -bottom-40 -left-[8%] right-0 sm:hidden -z-50">
      <MobileLine />
    </div>
  </div>
);
