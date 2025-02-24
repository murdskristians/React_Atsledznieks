import { ContentWrapper } from "@/components/ContentWrapper";
import { LeftSide } from "@/components/HeroSection/LeftSide";
import { useTranslations } from "next-intl";

export const NotFoundPage = () => {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="flex flex-row items-center justify-center">
      <ContentWrapper className="flex justify-center">
        <div className="max-w-3xl w-full">
          <LeftSide
            rectClassName="bg-gradient-to-r from-neutral-500 to-neutral-500/0"
            titleClassName="mt-10 md:mt-20"
            title={
              <>
                404
                <br />
                {t("notFound")}
              </>
            }
          />
        </div>
      </ContentWrapper>
    </div>
  );
};
