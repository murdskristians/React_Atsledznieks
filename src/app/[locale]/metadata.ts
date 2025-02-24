import { Metadata } from "next";
import { generateMetadataAlternatives } from "@/helpers/generateMetadataAlternatives";
import { getTranslations } from "next-intl/server";
import { LOCALE } from "@/constants/types";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LOCALE };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const title = t("title");
  const description = t("desc");

  return {
    title,
    description,
    alternates: generateMetadataAlternatives(locale),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}
