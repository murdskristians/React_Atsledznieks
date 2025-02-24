import { HeroSection } from "@/components/HeroSection";
import { LockServices } from "@/components/LockServices";
import { ServiceRadius } from "@/components/ServiceRadius";
import { LockServiceProcess } from "@/components/LockServiceProcess";
import { useTranslations } from "@/hooks/useTranslations";
import { SocialCostCheck } from "@/components/SocialCostCheck";
import { ActualGoods } from "@/components/ActualGoods";
import { FixedCallButton } from "@/components/FixedCallButton";

const IMAGES: IImage[] = [
  {
    alt: "image",
    src: "/static/images/lock/hero-1.png",
  },
  {
    alt: "image",
    src: "/static/images/lock/hero-2.png",
  },
  {
    alt: "image",
    src: "/static/images/lock/hero-3.png",
  },
  {
    alt: "image",
    src: "/static/images/lock/hero-4.png",
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

export const LockPage = () => {
  const homePaget = useTranslations("HomePage");
  const lockPaget = useTranslations("LockPage");

  const handleScopeTraslation = ({
    titleId,
    subTitleId,
  }: (typeof HERO_SCOPE)[0]) => ({
    title: homePaget(titleId),
    subTitle: homePaget(subTitleId),
  });

  return (
    <div className="flex flex-col items-center gap-40">
      <HeroSection
        images={IMAGES}
        keyColor="#15803d"
        titleClassName="mt-10 md:mt-16"
        rectClassName="bg-gradient-to-r from-green-500 to-green-500/0"
        title={lockPaget("heroTitle")}
        scopes={HERO_SCOPE.map(handleScopeTraslation)}
        additionalSection={
          <>
            {lockPaget.rich("heroParag", {
              p: (text) => <p className="text-lg mb-4 md:text-2xl">{text}</p>,
            })}
          </>
        }
      />
      <LockServices />
      <ServiceRadius />
      <LockServiceProcess />
      <SocialCostCheck />
      <ActualGoods />
      <div className="md:hidden">
        <FixedCallButton />
      </div>
    </div>
  );
};
