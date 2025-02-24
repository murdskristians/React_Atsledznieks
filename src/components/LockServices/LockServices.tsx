import { useTranslations } from "next-intl";
import { PageSectionTitle } from "@/components/PageSectionTitle";
import { ContentWrapper } from "@/components/ContentWrapper";
import { ServiceCard } from "@/components/ServiceCard";

import { DesktopLine } from "./DesktopLine";

export const LockServices = () => {
  const t = useTranslations("LockPage");

  return (
    <ContentWrapper className="relative flex flex-col flex-wrap lg:flex-row">
      <PageSectionTitle className="lg:basis-2/3 mb-20">
        {t("servicesTitle")}
      </PageSectionTitle>
      <div className="lg:basis-1/3" />
      <div className="hidden lg:block absolute left-24 top-64">
        <DesktopLine />
        <div className="h-[1px] bg-slate-400 w-[300%] absolute bottom-0 -left-[300%]" />
      </div>
      <div className="lg:basis-1/3" />
      <ul className="lg:basis-2/3 grid gap-4 grid-cols-1 lg:grid-cols-3 md:pt-16">
        <li>
          <ServiceCard
            invert
            title={t("serviceTitle1")}
            subTitle={t("serviceDesc1")}
          />
        </li>
        <li>
          <ServiceCard
            title={t("serviceTitle2")}
            subTitle={t("serviceDesc2")}
          />
        </li>
        <li>
          <ServiceCard
            invert
            title={t("serviceTitle3")}
            subTitle={t("serviceDesc3")}
          />
        </li>
      </ul>
    </ContentWrapper>
  );
};
