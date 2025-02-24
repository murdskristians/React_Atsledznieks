import { Metadata } from "next";
import { generateMetadataAlternatives } from "@/helpers/generateMetadataAlternatives";
import { getTranslations } from "next-intl/server";
import { LOCALE } from "@/constants/types";
import { URL } from "@/constants/navigation";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LOCALE };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "SafePage" });

  const title = t("metadataTitle");
  const description = t("metadataDesc");

  return {
    title,
    description,
    alternates: generateMetadataAlternatives(locale, URL.LOCK),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}
