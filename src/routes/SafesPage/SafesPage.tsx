import { HeroSection } from "@/components/HeroSection";
import { useTranslations } from "@/hooks/useTranslations";
import { SocialCostCheck } from "@/components/SocialCostCheck";
import { ActualGoods } from "@/components/ActualGoods";
import { SafesServices } from "@/components/SafesServices";
import { FixedCallButton } from "@/components/FixedCallButton";

const IMAGES: IImage[] = [
  {
    alt: "image",
    src: "/static/images/safes/hero-1.png",
  },
  {
    alt: "image",
    src: "/static/images/safes/hero-2.png",
  },
  {
    alt: "image",
    src: "/static/images/safes/hero-3.png",
  },
  {
    alt: "image",
    src: "/static/images/safes/hero-4.png",
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

export const SafesPage = () => {
  const t = useTranslations("SafePage");

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
        keyColor="#0284c7"
        title={t.rich("heroTitle", {
          br: () => <br />,
        })}
        titleClassName="xl:top-24"
        rectClassName="bg-gradient-to-r from-sky-500 to-sky-500/0"
        scopes={HERO_SCOPE.map(handleScopeTraslation)}
        additionalSection={
          <>
            {t.rich("heroParag", {
              p: (text) => <p className="text-lg mb-4 md:text-2xl">{text}</p>,
            })}
          </>
        }
      />
      <SafesServices />
      <SocialCostCheck />
      <ActualGoods />
      <div className="md:hidden">
        <FixedCallButton />
      </div>
    </div>
  );
};
