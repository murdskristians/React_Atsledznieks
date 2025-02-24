import { HeroSection } from "@/components/HeroSection";
import { HomeServices } from "@/components/HomeServices";
import { HomeArticle } from "@/components/HomeArticle";
import { HomePartners } from "@/components/HomePartners";
import { SocialCostCheck } from "@/components/SocialCostCheck";
import { SafeHouse } from "@/components/SafeHouse";
import { useTranslations } from "@/hooks/useTranslations";
import { FixedCallButton } from "@/components/FixedCallButton";

const IMAGES: IImage[] = [
  {
    alt: "image",
    src: "/static/images/hero/hero-1.png",
  },
  {
    alt: "image",
    src: "/static/images/hero/hero-2.png",
  },
  {
    alt: "image",
    src: "/static/images/hero/hero-3.png",
  },
  {
    alt: "image",
    src: "/static/images/hero/hero-4.png",
  },
];

const HERO_SCOPE = [
  {
    titleId: "20+",
    subTitleId: "years",
  },
  {
    titleId: "100%",
    subTitleId: "results",
  },
  {
    titleId: "100km",
    subTitleId: "radius",
  },
];

export const HomePage = () => {
  const t = useTranslations("HomePage");

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
        title={t("heroTitle")}
        scopes={HERO_SCOPE.map(handleScopeTraslation)}
        rectClassName="bg-gradient-to-r from-blue-800 to-blue-800/0"
      />
      <HomeServices />
      <HomePartners />
      <HomeArticle />
      <SocialCostCheck />
      <SafeHouse />
      <div className="md:hidden">
        <FixedCallButton />
      </div>
    </div>
  );
};
