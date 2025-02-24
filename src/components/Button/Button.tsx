"use client";
import clsx from "clsx";

import styles from "./Button.module.css";

export interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  startIcon?: React.ReactNode;
  rectangle?: boolean;
  fullWidth?: boolean;
  size?: "lg" | "md";
  invert?: boolean;
  textWrapperClassName?: string;
}

const iconWrapperSizes = {
  lg: "w-24 h-16",
  md: "w-20 h-12",
};

const textWrapperSizes = {
  lg: "py-5",
  md: "px-6 py-3 text-sm",
};

export const Button = ({
  size = "md",
  invert = false,
  fullWidth = false,
  ...props
}: IProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "flex items-center bg-black text-white rounded-md hover:opacity-70 transition-[opacity] relative",
        !props.rectangle && styles.clip,
        fullWidth && "w-full",
        invert && "!bg-white !text-black",
        props.className
      )}
      onClick={props.onClick}
    >
      {!!props.startIcon && (
        <div
          className={clsx(
            "bg-neutral-800 flex items-center justify-center rounded-s-md",
            iconWrapperSizes[size],
            invert && "!bg-slate-100"
          )}
        >
          {props.startIcon}
        </div>
      )}
      {props.children && (
        <div
          className={clsx(
            "px-6",
            !!props.startIcon && "text-center w-full",
            textWrapperSizes[size],
            props.textWrapperClassName
          )}
        >
          {props.children}
        </div>
      )}
    </button>
  );
};
