import { HeroSection } from "@/components/HeroSection";
import { AlarmServices } from "@/components/AlarmServices";
import { ServiceRadius } from "@/components/ServiceRadius";
import { AlarmServiceProcess } from "@/components/AlarmServiceProcess";
import { useTranslations } from "@/hooks/useTranslations";
import { SocialCostCheck } from "@/components/SocialCostCheck";
import { ActualGoods } from "@/components/ActualGoods";
import { FixedCallButton } from "@/components/FixedCallButton";

const IMAGES: IImage[] = [
  {
    alt: "image",
    src: "/static/images/alarm/hero-1.png",
  },
  {
    alt: "image",
    src: "/static/images/alarm/hero-2.png",
  },
  {
    alt: "image",
    src: "/static/images/alarm/hero-3.png",
  },
  {
    alt: "image",
    src: "/static/images/alarm/hero-4.png",
  },
];

const HERO_SCOPE = [
  {
    titleId: "20+",
    subTitleId: "years",
  },
  {
    titleId: "24on7",
    subTitleId: "support",
  },
  {
    titleId: "100km",
    subTitleId: "radius",
  },
];

export const AlarmPage = () => {
  const t = useTranslations("AlarmPage");

  const handleScopeTraslation = ({
    titleId,
    subTitleId,
  }: (typeof HERO_SCOPE)[0]) => ({
    title: t(titleId),
    subTitle: t(subTitleId),
  });

  return (
    <div className="flex flex-col items-center gap-40">
      <HeroSection
        images={IMAGES}
        keyColor="#ea580c"
        rectClassName="bg-gradient-to-r from-orange-500 to-orange-500/0"
        title={t("heroTitle")}
        scopes={HERO_SCOPE.map(handleScopeTraslation)}
        additionalSection={
          <>
            {t.rich("heroParag", {
              p: (text) => <p className="text-lg mb-4 md:text-2xl">{text}</p>,
            })}
          </>
        }
      />
      <AlarmServices />
      <ServiceRadius />
      <AlarmServiceProcess />
      <SocialCostCheck />
      <ActualGoods />
      <div className="md:hidden">
        <FixedCallButton />
      </div>
    </div>
  );
};
