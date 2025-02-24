import SVG from "react-inlinesvg";

import { useTranslations } from "@/hooks/useTranslations";
import { ContentWrapper } from "@/components/ContentWrapper";
import { PageSectionTitle } from "@/components/PageSectionTitle";

const ITEMS = [
  {
    titleKey: "safe",
    descKey: "safeDesc",
    iconUrl: "/static/images/icons/safe.svg",
  },
  {
    titleKey: "alart",
    descKey: "alartDesc",
    iconUrl: "/static/images/icons/bell.svg",
  },
  {
    titleKey: "smartLock",
    descKey: "smartLockDesc",
    iconUrl: "/static/images/icons/smart-lock.svg",
  },
  {
    titleKey: "cctv",
    descKey: "cctvDesc",
    iconUrl: "/static/images/icons/cctv.svg",
  },
  {
    titleKey: "lock",
    descKey: "lockDesc",
    iconUrl: "/static/images/icons/lock.svg",
  },
];

const ListItem = ({
  title,
  description,
  iconUrl,
}: {
  title: string;
  description: string;
  iconUrl: string;
}) => (
  <div className="flex flex-col gap-6 border border-stone-400 p-6 rounded-2xl min-h-72">
    <div className="flex items-center gap-6">
      <SVG width={56} height={56} src={iconUrl} />
      <h3 className="text-3xl font-mono font-light">{title}</h3>
    </div>
    <p>{description}</p>
  </div>
);

export const SafeHouse = () => {
  const t = useTranslations("HomePage");

  return (
    <ContentWrapper>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <li className="pb-16 flex items-center">
          <PageSectionTitle>
            {t.rich("safeHouse", {
              br: () => <br />,
            })}
          </PageSectionTitle>
        </li>
        {ITEMS.map((item) => (
          <li key={item.titleKey}>
            <ListItem
              iconUrl={item.iconUrl}
              title={t(item.titleKey)}
              description={t(item.descKey)}
            />
          </li>
        ))}
      </ul>
    </ContentWrapper>
  );
};
