import { DOMAIN_URL } from "@/constants/general";
import { URL } from "@/constants/navigation";
import { LOCALE } from "@/constants/types";

export const generateCanonical = (locale: LOCALE, path?: URL) =>
  `${DOMAIN_URL}/${locale === "lv" ? "" : locale}${path ? "/" + path : ""}`;
