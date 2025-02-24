import omit from "ramda/src/omit";
import { LOCALE } from "@/constants/types";
import { URL } from "@/constants/navigation";
import { generateCanonical } from "@/helpers/generateCanonical";

export const generateMetadataAlternatives = (locale: LOCALE, path?: URL) => ({
  canonical: generateCanonical(locale, path),
  languages: omit([locale], {
    en: generateCanonical(LOCALE.EN, path),
    ru: generateCanonical(LOCALE.RU, path),
    lv: generateCanonical(LOCALE.LV, path),
  }),
});
