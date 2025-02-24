import clsx from "clsx";
import { LinkProps } from "next/link";
import { Link as RouteLink } from "@/i18n/routing";

import styles from "./Link.module.css";

interface IProps extends LinkProps {
  locale?: any;
  className?: string;
}

export const Link = (props: React.PropsWithChildren<IProps>) => (
  <RouteLink {...props} className={clsx(props.className, styles.root)} />
);
