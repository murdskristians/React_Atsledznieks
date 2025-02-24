import clsx from "clsx";

interface IProps {
  className?: string;
}

export const PageSectionTitle = (props: React.PropsWithChildren<IProps>) => (
  <h2
    className={clsx(
      "text-4xl md:text-5xl font-mono font-light tracking-tighter",
      props.className
    )}
  >
    {props.children}
  </h2>
);
