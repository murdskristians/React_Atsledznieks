import { ContentWrapper } from "@/components/ContentWrapper";

import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export interface IProps {
  title: any;
  additionalSection?: React.ReactNode;
  images: IImage[];
  scopes: IHeroScope[];
  rectClassName?: string;
  keyColor?: string;
  titleClassName?: string;
}

export const HeroSection = (props: IProps) => (
  <ContentWrapper className="flex flex-col md:flex-row gap-24 justify-center items-start">
    <div className="w-full md:basis-3/4">
      <LeftSide
        title={props.title}
        keyColor={props.keyColor}
        rectClassName={props.rectClassName}
        titleClassName={props.titleClassName}
        additionalSection={props.additionalSection}
      />
    </div>
    <RightSide images={props.images} scopes={props.scopes} />
  </ContentWrapper>
);
