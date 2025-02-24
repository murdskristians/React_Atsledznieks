import { CatalogFilters } from "@/components/CatalogFilters";
import { ContentWrapper } from "@/components/ContentWrapper";
import { FixedCallButton } from "@/components/FixedCallButton";
import { ProductsList } from "@/components/ProductsList";
import { ALL_PRODUCTS } from "@/constants/products";

const MobileLine = () => (
  <div className="relative w-full md:hidden">
    <div className="relative w-full py-8">
      <div className="flex flex-row absolute -right-8 top-5 -left-8 -z-50">
        <div className="h-[1px] bg-slate-400 w-8 skew-y-[-40deg] origin-right mt-4" />
        <div className="h-[1px] bg-slate-400 w-full mt-4" />
        <div className="h-[1px] bg-slate-400 w-52 skew-y-[-40deg] origin-left mt-4" />
      </div>
    </div>
  </div>
);

export const CatalogPage = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <CatalogFilters />
      <br />
      <MobileLine />
      <br />
      <br />
      <br />
      <ContentWrapper>
        <ProductsList
          products={ALL_PRODUCTS}
          className="lg:grid-cols-3 xl:grid-cols-4"
        />
      </ContentWrapper>
      <div className="md:hidden">
        <FixedCallButton />
      </div>
    </div>
  );
};
