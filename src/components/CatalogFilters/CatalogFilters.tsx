import { useTranslations } from "next-intl";

import { PageSectionTitle } from "@/components/PageSectionTitle";
import { ContentWrapper } from "@/components/ContentWrapper";
import { PriceFilter } from "@/components/PriceFilter";

import { CategoryCard } from "./CategoryCard";
import { DesktopLine } from "./DesktopLine";

const CATEGORIES = [
  {
    titleId: "locks",
    imageUrl: "/static/images/lock/hero-2.png",
  },
  {
    titleId: "alarms",
    imageUrl: "/static/images/alarm/hero-1.png",
  },
  {
    titleId: "cctv",
    imageUrl: "/static/images/alarm/hero-3.png",
  },
  {
    titleId: "access",
    imageUrl: "/static/images/access/hero-3.png",
  },
  {
    titleId: "safes",
    imageUrl: "/static/images/safes/hero-1.png",
  },
];

export const CatalogFilters = () => {
  const t = useTranslations("Catalog");

  const handleScopeTraslation = ({
    titleId,
    ...other
  }: (typeof CATEGORIES)[0]) => ({
    title: t(titleId),
    ...other,
  });

  const categories = CATEGORIES.map(handleScopeTraslation);

  return (
    <ContentWrapper className="relative flex flex-col flex-wrap md:flex-row">
      <PageSectionTitle className="mb-8 md:basis-2/3">
        {t("catalog")}
      </PageSectionTitle>
      <div className="hidden md:block md:basis-1/3">
        <PriceFilter />
      </div>
      <div className="relative hidden md:block md:basis-1/3">
        <DesktopLine />
        <div className="h-[1px] bg-slate-400 w-[300%] absolute bottom-0 -left-[300%]" />
      </div>
      <ul className="md:basis-2/3 grid grid-cols-3 gap-4 mb-8 md:mt-20 place-content-start">
        {categories.map(({ title, imageUrl }) => (
          <li key={title}>
            <CategoryCard title={title} imageUrl={imageUrl} />
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <br />
        <PriceFilter />
      </div>
    </ContentWrapper>
  );
};
