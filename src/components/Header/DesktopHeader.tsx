"use client";
import { Nav } from "@/components/Nav";
// import { Button } from "@/components/Button";
import { useTranslations } from "@/hooks/useTranslations";
import { LanguageSelect } from "@/components/LanguageSelect";
import { Logo } from "@/components/Logo";
import { Link } from "@/i18n/routing";
import { URL } from "@/constants/navigation";
// import { PHONE_NUMBER } from "@/constants/general";

export const DesktopHeader = () => {
  const t = useTranslations("Header");

  // const onClick = () => {
  //   window.open(`tel:+${PHONE_NUMBER}`);
  // };

  return (
    <div className="relative flex gap-10 items-center justify-between h-full max-w-screen-xl">
      <Link href={URL.HOME}>
        <Logo />
      </Link>
      <Nav />
      <LanguageSelect />
      {/* <Button onClick={onClick}>{t("contactUs")}</Button> */}
    </div>
  );
};
