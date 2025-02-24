"use client";
import SVG from "react-inlinesvg";
import { useTranslations } from "@/hooks/useTranslations";
import { CallButton } from "@/components/CallButton";
import { IconButton } from "@/components/IconButton";
import { TELEGRAM_LINK, FB_MSG_LINK, WA_LINK } from "@/constants/general";

export const CallToActionButtons = () => {
  const t = useTranslations("CallToAction");

  const onClick = (url: string) => () => {
    window.open(url);
  };

  return (
    <div className="flex gap-8 md:gap-24 items-baseline flex-col sm:flex-row flex-wrap">
      <div>
        <p className="mb-4">
          <strong>24/7</strong>
          <br />
          {t("callAnyTime")}
        </p>
        <CallButton />
      </div>
      <div>
        <p className="mb-4 max-w-[130px]">{t("responseTime")}</p>
        <div className="flex gap-4">
          <IconButton onClick={onClick(WA_LINK)}>
            <SVG
              width={24}
              height={24}
              src="/static/images/icons/whatsapp-white.svg"
            />
          </IconButton>
          <IconButton onClick={onClick(TELEGRAM_LINK)}>
            <SVG
              width={24}
              height={24}
              src="/static/images/icons/telegram-white.svg"
            />
          </IconButton>
          <IconButton onClick={onClick(FB_MSG_LINK)}>
            <SVG
              width={24}
              height={24}
              fill="white"
              src="/static/images/icons/fb-msg.svg"
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
