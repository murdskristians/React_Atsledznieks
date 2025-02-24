import { useTranslations } from "@/hooks/useTranslations";
import { PageSectionTitle } from "@/components/PageSectionTitle";
import { ContentWrapper } from "@/components/ContentWrapper";
import { ClipRectContentWrapper } from "@/components/ClipRectContentWrapper";

const ProcessItem = (props: { desc: string; idx: number }) => (
  <div className="flex flex-row gap-8 items-center">
    <div className="flex items-center justify-center rounded-full min-w-16 min-h-16 border-2 border-neutral-400 text-xl">
      {props.idx}
    </div>
    <p className="text-md">{props.desc}</p>
  </div>
);

export const LockServiceProcess = () => {
  const t = useTranslations("LockPage");

  return (
    <ClipRectContentWrapper>
      <ContentWrapper className="py-6 flex gap-16 flex-col md:flex-row">
        <PageSectionTitle>{t("serviceProcessTitle")}</PageSectionTitle>
        <ul className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <li>
            <ProcessItem idx={1} desc={t("serviceProcessStep1")} />
          </li>
          <li>
            <ProcessItem idx={2} desc={t("serviceProcessStep2")} />
          </li>
          <li>
            <ProcessItem idx={3} desc={t("serviceProcessStep3")} />
          </li>
          <li>
            <ProcessItem idx={4} desc={t("serviceProcessStep4")} />
          </li>
        </ul>
      </ContentWrapper>
    </ClipRectContentWrapper>
  );
};
