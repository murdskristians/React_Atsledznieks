import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import { ContentWrapper } from "@/components/ContentWrapper";

export const ServiceRadius = () => {
  const t = useTranslations("LockPage");

  return (
    <ContentWrapper className="relative flex gap-20 flex-col lg:flex-row items-center">
      <div className="hidden lg:block basis-2/3" />
      <h2 className="text-center text-2xl lg:text-left lg:text-3xl">
        {t.rich("serviceRadiusTitle", {
          strong: (text) => <strong> {text} </strong>,
        })}
      </h2>
      <div className="relative w-full h-52">
        <Image
          src="/static/images/lock/riga-radius.png"
          alt="image"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </ContentWrapper>
  );
};
