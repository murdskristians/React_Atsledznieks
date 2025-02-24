import clsx from "clsx";

import styles from "./Select.module.css";

export const Select = (props: React.ComponentPropsWithoutRef<"select">) => (
  <div className="flex relative">
    <select
      {...props}
      className={clsx(
        styles.select,
        props.className,
        "appearance-none bg-transparent text-sm"
      )}
    />
    <i className={styles.icon} />
  </div>
);
