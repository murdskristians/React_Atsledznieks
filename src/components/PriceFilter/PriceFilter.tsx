import { useTranslations } from "@/hooks/useTranslations";
import { TextInput } from "@/components/TextInput";

export const PriceFilter = () => {
  const t = useTranslations("Catalog");

  return (
    <div className="flex flex-row gap-6 items-center flex-wrap md:flex-nowrap">
      <h4 className="basis-full md:basis-auto font-mono text-2xl">
        {t("price")}
      </h4>
      <div className="flex flex-row gap-4 items-center">
        <p>{t("from")}</p>
        <TextInput type="number" className="max-w-20" />
        <p>{t("upTo")}</p>
        <TextInput type="number" className="max-w-20" />
        <p>€</p>
      </div>
    </div>
  );
};
