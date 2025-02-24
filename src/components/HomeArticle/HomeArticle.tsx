import { useTranslations } from "@/hooks/useTranslations";
import { PageSectionTitle } from "@/components/PageSectionTitle";
import { ContentWrapper } from "@/components/ContentWrapper";
import { ClipRectContentWrapper } from "@/components/ClipRectContentWrapper";

export const HomeArticle = () => {
  const t = useTranslations("HomePage");

  return (
    <ClipRectContentWrapper>
      <ContentWrapper className="py-6 flex gap-16 flex-col md:flex-row">
        <PageSectionTitle>
          {t.rich("guarantee", {
            br: () => <br />,
          })}
        </PageSectionTitle>
        <div className="border border-stone-400 p-6 lg:p-10 rounded-2xl">
          {t.rich("guaranteeText", {
            p: (text) => <p className="mb-4">{text}</p>,
          })}
        </div>
        <div className="basis-1/3" />
      </ContentWrapper>
    </ClipRectContentWrapper>
  );
};
