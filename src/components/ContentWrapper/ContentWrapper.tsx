import clsx from "clsx";

export const ContentWrapper = (
  props: React.PropsWithChildren<React.ComponentPropsWithoutRef<"section">>
) => (
  <section className={clsx("px-6 max-w-screen-xl w-full", props.className)}>
    {props.children}
  </section>
);
