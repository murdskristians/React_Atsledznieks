"use client";
import clsx from "clsx";

interface IProps {
  className?: string;
  isOpen: boolean;
  toogleOpen: VoidFunction;
}

export const Drawer = (props: React.PropsWithChildren<IProps>) => (
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="slide-over"
    className={clsx("relative overflow-hidden -mx-8", props.className)}
  >
    <div
      onClick={props.toogleOpen}
      className={clsx(
        "fixed inset-0 bg-gray-500 bg-opacity-75 transition-all top-60 z-40",
        {
          "opacity-100 duration-300 ease-in-out visible": props.isOpen,
        },
        { "opacity-0 duration-300 ease-in-out invisible": !props.isOpen }
      )}
    />
    <div
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      className={clsx(
        "pointer-events-auto relative w-full transform transition ease-in-out duration-300 bg-[--color-bg] p-8 z-50 overflow-y-scroll h-[calc(100dvh-80px)]",
        { "-translate-y-full": !props.isOpen },
        { "translate-y-0": props.isOpen }
      )}
    >
      {props.children}
    </div>
  </div>
);
