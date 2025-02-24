import { useTranslations } from "next-intl";
import { PageSectionTitle } from "@/components/PageSectionTitle";
import { ContentWrapper } from "@/components/ContentWrapper";
import { ServiceCard } from "@/components/ServiceCard";
import { Link } from "@/i18n/routing";
import { URL } from "@/constants/navigation";

import { DesktopLine } from "./DesktopLine";

export const HomeServices = () => {
  const headerT = useTranslations("Header");
  const homeT = useTranslations("HomePage");

  return (
    <ContentWrapper className="relative flex gap-16 flex-col md:flex-row">
      <PageSectionTitle className="md:basis-1/3">
        {homeT.rich("ourServices", {
          br: () => <br />,
        })}
      </PageSectionTitle>
      <div className="hidden md:block absolute left-14 top-14 md:top-28">
        <DesktopLine />
        <div className="h-[1px] bg-slate-400 w-[300%] absolute bottom-0 -left-[300%]" />
      </div>
      <ul className="grid gap-4 grid-cols-2 xl:grid-cols-2 md:pt-32">
        <li>
          <Link href={URL.LOCK}>
            <ServiceCard invert title={headerT("locks")} />
          </Link>
        </li>
        <li>
          <Link href={URL.ALARM}>
            <ServiceCard title={headerT("alarm")} />
          </Link>
        </li>
        <li>
          <Link href={URL.CCTV}>
            <ServiceCard title={headerT("cctv")} />
          </Link>
        </li>
        <li>
          <Link href={URL.ACCESS}>
            <ServiceCard invert title={headerT("access")} />
          </Link>
        </li>
        <li>
          <Link href={URL.SAFES}>
            <ServiceCard invert title={headerT("safes")} />
          </Link>
        </li>
        <li>
          <Link href={URL.CATALOG}>
            <ServiceCard title={headerT("catalog")} />
          </Link>
        </li>
      </ul>
    </ContentWrapper>
  );
};
