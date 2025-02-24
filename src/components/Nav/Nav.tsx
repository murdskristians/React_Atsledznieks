import { useTranslations } from "@/hooks/useTranslations";
import { Link } from "@/components/Link";
import clsx from "clsx";
import { URL } from "@/constants/navigation";

interface IProps {
  direction?: "row" | "column";
}

const NAV = [
  {
    labelId: "locks",
    href: URL.LOCK,
  },
  {
    labelId: "alarm",
    href: URL.ALARM,
  },
  {
    labelId: "cctv",
    href: URL.CCTV,
  },
  {
    labelId: "access",
    href: URL.ACCESS,
  },
  {
    labelId: "safes",
    href: URL.SAFES,
  },
  {
    labelId: "catalog",
    href: URL.CATALOG,
  },
];

export const Nav = (props: IProps) => {
  const t = useTranslations("Header");

  return (
    <nav className="grow">
      <ul
        className={clsx(
          "flex flex-row items-center gap-4",
          props.direction === "column" && "flex-col !items-start"
        )}
      >
        {NAV.map(({ labelId, href }) => (
          <li key={labelId}>
            <Link href={href} className="text-sm">
              {t(labelId)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
