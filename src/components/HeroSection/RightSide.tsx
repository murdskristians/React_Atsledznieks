import Image from "next/image";
import clsx from "clsx";

import { IProps } from "./HeroSection";

const Scope = (props: {
  title: string;
  subtitle: string;
  className?: string;
}) => (
  <div
    className={clsx(
      "flex flex-col p-5 bg-white/70 rounded-2xl drop-shadow-2xl backdrop-blur-xl z-10",
      props.className
    )}
  >
    <p className="font-bold text-2xl">{props.title}</p>
    <p>{props.subtitle}</p>
  </div>
);

export const RightSide = (props: Pick<IProps, "images" | "scopes">) => (
  <div className="relative grid grid-cols-2 gap-4">
    <Scope
      title={props.scopes[0].title}
      subtitle={props.scopes[0].subTitle}
      className="absolute top-0 left-[50%] w-30 -ml-16 -mt-4"
    />
    <div className="flex justify-end items-end">
      <div className="relative w-[180px] h-[228px] mt-16">
        <Image
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-2xl"
          src={props.images[0].src}
          alt={props.images[0].alt}
        />
      </div>
    </div>
    <Scope
      title={props.scopes[1].title}
      subtitle={props.scopes[1].subTitle}
      className="absolute top-[50%] left-[5%] w-28 -mt-14"
    />
    <div className="flex justify-start items-end">
      <div className="relative h-[297px] w-[180px]">
        <Image
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-2xl"
          src={props.images[1].src}
          alt={props.images[1].alt}
        />
      </div>
    </div>
    <div className="flex justify-end items-start">
      <div className="relative w-[180px] h-[297px]">
        <Image
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-2xl"
          src={props.images[2].src}
          alt={props.images[2].alt}
        />
      </div>
    </div>
    <Scope
      title={props.scopes[2].title}
      subtitle={props.scopes[2].subTitle}
      className="absolute -bottom-10 left-[50%] w-48 -ml-24"
    />
    <div className="flex justify-start items-start">
      <div className="relative w-[180px] h-[228px]">
        <Image
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-2xl"
          src={props.images[3].src}
          alt={props.images[3].alt}
        />
      </div>
    </div>
  </div>
);
