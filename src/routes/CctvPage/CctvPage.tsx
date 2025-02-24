import { HeroSection } from "@/components/HeroSection";
import { useTranslations } from "@/hooks/useTranslations";
import { SocialCostCheck } from "@/components/SocialCostCheck";
import { ActualGoods } from "@/components/ActualGoods";
import { CctvServices } from "@/components/CctvServices";
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

export const CctvPage = () => {
  const t = useTranslations("CctvPage");

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
        keyColor="#6b21a8"
        rectClassName="bg-gradient-to-r from-purple-500 to-purple-500/0"
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
      <CctvServices />
      <SocialCostCheck />
      <ActualGoods />
      <div className="md:hidden">
        <FixedCallButton />
      </div>
    </div>
  );
};
