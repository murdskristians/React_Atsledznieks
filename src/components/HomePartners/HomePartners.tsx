import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";
import { PageSectionTitle } from "@/components/PageSectionTitle";
import { ContentWrapper } from "@/components/ContentWrapper";

export const HomePartners = () => {
  const t = useTranslations("HomePage");

  return (
    <ContentWrapper className="flex flex-row w-full justify-center">
      <div className="hidden md:block basis-1/3" />
      <div className="flex gap-16 flex-col md:flex-row items-center w-full">
        <div className="w-full md:w-auto">
          <PageSectionTitle>
            {t.rich("ourPartners", {
              br: () => <br />,
            })}
          </PageSectionTitle>
        </div>
        <ul className="grid lg:grid-cols-2 gap-8 md:gap-16 md:w-full">
          <li className="relative w-56 h-16 bg-white">
            <Image
              fill
              alt="Partner"
              src="/static/images/partners/1.png"
              style={{
                objectFit: "contain",
                filter: "grayscale(1)",
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 4,
                paddingBottom: 4,
              }}
            />
          </li>
          <li className="relative w-56 h-16 bg-white">
            <Image
              fill
              alt="Partner"
              src="/static/images/partners/2.png"
              style={{
                objectFit: "contain",
                filter: "grayscale(1)",
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 4,
                paddingBottom: 4,
              }}
            />
          </li>
          <li className="relative w-56 h-16 bg-white">
            <Image
              fill
              alt="Partner"
              src="/static/images/partners/3.png"
              style={{
                objectFit: "contain",
                filter: "grayscale(1)",
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 4,
                paddingBottom: 4,
              }}
            />
          </li>
          <li className="relative w-56 h-16 bg-white">
            <Image
              fill
              alt="Partner"
              src="/static/images/partners/4.png"
              style={{
                objectFit: "contain",
                filter: "grayscale(1)",
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 4,
                paddingBottom: 4,
              }}
            />
          </li>
        </ul>
      </div>
    </ContentWrapper>
  );
};
