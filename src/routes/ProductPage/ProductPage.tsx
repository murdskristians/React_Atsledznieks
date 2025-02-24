import Image from "next/image";
import { ContentWrapper } from "@/components/ContentWrapper";
import { PageSectionTitle } from "@/components/PageSectionTitle";
import { useTranslations } from "@/hooks/useTranslations";
import { CallButton } from "@/components/CallButton";
import { FixedProductCallButton } from "@/components/FixedProductCallButton";

interface IProps {
  product: IProduct;
}

export const ProductPage = (props: IProps) => {
  const t = useTranslations("Catalog");

  return (
    <>
      <ContentWrapper className="flex flex-col md:flex-row flex-wrap">
        <PageSectionTitle className="mb-10 md:mb-20 md:basis-full">
          {props.product.title}
        </PageSectionTitle>
        <div className="relative w-full h-96 md:h-[514px] md:basis-1/2 md:order-2">
          <Image
            fill
            src={props.product.imageUrl}
            alt={props.product.title}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="md:basis-1/2 md:pr-20 md:order-1">
          <div className="flex flex-row items-center gap-8 mt-10">
            <div className="flex flex-col justify-center gap-1 grow md:grow-0">
              <p className="font-mono text-3xl">€{props.product.price}</p>
              <p>{t("callForOrder")}</p>
            </div>
            <CallButton invert={false} />
          </div>
          <h2 className="font-mono text-2xl mt-10 mb-5 md:mt-20 font-light">
            {t("description")}
          </h2>
          <p>{props.product.description}</p>
        </div>
      </ContentWrapper>
      <div className="md:hidden">
        <FixedProductCallButton price={props.product.price} />
      </div>
    </>
  );
};
