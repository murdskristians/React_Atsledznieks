"use client";
import SVG from "react-inlinesvg";
import { Button } from "@/components/Button";
import { useTranslations } from "@/hooks/useTranslations";
import { ContentWrapper } from "@/components/ContentWrapper";
import { TELEGRAM_LINK, FB_MSG_LINK, WA_LINK } from "@/constants/general";

export const SocialCostCheck = () => {
  const t = useTranslations("HomePage");

  const onClick = (url: string) => () => {
    window.open(url);
  };

  return (
    <ContentWrapper className="flex gap-16 flex-col items-center">
      <p className="text-3xl md:text-4xl lg:text-5xl text-center max-w-3xl">
        {t("socialCostCheckText")}
      </p>
      <ul className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
        <li>
          <Button
            onClick={onClick(WA_LINK)}
            textWrapperClassName="!px-5 min-w-28"
            startIcon={
              <SVG
                width={24}
                height={24}
                src="/static/images/icons/whatsapp-black.svg"
              />
            }
          >
            WhatsApp
          </Button>
        </li>
        <li>
          <Button
            invert
            onClick={onClick(TELEGRAM_LINK)}
            textWrapperClassName="!px-5 min-w-28"
            startIcon={
              <SVG
                width={24}
                height={24}
                src="/static/images/icons/telegram-black.svg"
              />
            }
          >
            Telegram
          </Button>
        </li>
        <li>
          <Button
            invert
            onClick={onClick(FB_MSG_LINK)}
            textWrapperClassName="!px-5 min-w-28"
            startIcon={
              <SVG
                fill="black"
                width={24}
                height={24}
                src="/static/images/icons/fb-msg.svg"
              />
            }
          >
            Facebook
          </Button>
        </li>
      </ul>
    </ContentWrapper>
  );
};
