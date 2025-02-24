import clsx from "clsx";

import styles from "./ClipRectContentWrapper.module.css";

export const ClipRectContentWrapper = (props: React.PropsWithChildren) => (
  <div className="relative w-full flex justify-center overflow-hidden rounded-2xl p-6 xl:py-20">
    <div
      className={clsx(
        styles.rect,
        "absolute top-0 left-0 right-0 bottom-0 bg-neutral-300 py-20 -z-10"
      )}
    />
    {props.children}
  </div>
);
