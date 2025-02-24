import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALE } from "@/constants/types";

export const routing = defineRouting({
  locales: [LOCALE.EN, LOCALE.LV, LOCALE.RU],
  localePrefix: "as-needed",
  defaultLocale: LOCALE.LV,
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
