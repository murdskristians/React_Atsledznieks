import { useTranslations } from "next-intl";

import { ContentWrapper } from "@/components/ContentWrapper";
import { PageSectionTitle } from "@/components/PageSectionTitle";
import { Button } from "@/components/Button";
import { ProductsList } from "@/components/ProductsList";

import { DesktopLine } from "./DesktopLine";
import { ALL_PRODUCTS } from "@/constants/products";

export const ActualGoods = () => {
  const t = useTranslations("Catalog");

  return (
    <ContentWrapper className="relative flex flex-col flex-wrap lg:flex-row">
      <div className="relative lg:basis-1/2">
        <PageSectionTitle className="mb-20">
          {t.rich("actualGoods", {
            br: () => <br />,
          })}
        </PageSectionTitle>
        <div className="hidden lg:block mt-20 flex justify-center flex-row w-full">
          <Button>{t("viewAllProducts")}</Button>
        </div>
        <div className="hidden md:block absolute -left-1/3 bottom-40 right-20">
          <div className="h-[2px] bg-[#A5A5A6] w-[300%] absolute top-0 -left-[300%]" />
          <DesktopLine />
        </div>
      </div>
      <ProductsList products={ALL_PRODUCTS} className="lg:basis-1/2" />
      <div className="lg:hidden mt-20 flex justify-center flex-row w-full">
        <Button>{t("viewAllProducts")}</Button>
      </div>
    </ContentWrapper>
  );
};
