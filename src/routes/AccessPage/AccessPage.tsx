import { HeroSection } from "@/components/HeroSection";
import { useTranslations } from "@/hooks/useTranslations";
import { SocialCostCheck } from "@/components/SocialCostCheck";
import { ActualGoods } from "@/components/ActualGoods";
import { AccessServices } from "@/components/AccessServices";
import { FixedCallButton } from "@/components/FixedCallButton";

const IMAGES: IImage[] = [
  {
    alt: "image",
    src: "/static/images/access/hero-1.png",
  },
  {
    alt: "image",
    src: "/static/images/access/hero-2.png",
  },
  {
    alt: "image",
    src: "/static/images/access/hero-3.png",
  },
  {
    alt: "image",
    src: "/static/images/access/hero-4.png",
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

export const AccessPage = () => {
  const t = useTranslations("AccessPage");

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
        keyColor="#be185d"
        title={t.rich("heroTitle", {
          br: () => <br />,
        })}
        titleClassName="xl:top-24"
        rectClassName="bg-gradient-to-r from-pink-500 to-pink-500/0"
        scopes={HERO_SCOPE.map(handleScopeTraslation)}
        additionalSection={
          <>
            {t.rich("heroParag", {
              p: (text) => <p className="text-lg mb-4 md:text-2xl">{text}</p>,
            })}
          </>
        }
      />
      <AccessServices />
      <SocialCostCheck />
      <ActualGoods />
      <div className="md:hidden">
        <FixedCallButton />
      </div>
    </div>
  );
};
