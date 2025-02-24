import { IconButton } from "@/components/IconButton";
import clsx from "clsx";

interface IProps {
  isOpen: boolean;
  toggleOpen: VoidFunction;
}

export const HamburgerIconButton = (props: IProps) => (
  <IconButton className="relative bg-transparent" onClick={props.toggleOpen}>
    <div className="abosulte top-1/2 -translate-y-1/2 w-6">
      <span
        className={clsx(
          "absolute top-1/2 right-0 w-full h-0.5 rounded bg-neutral-700 transition-transform -translate-y-2",
          {
            "rotate-45 !translate-y-0": props.isOpen,
          }
        )}
      />
      <span
        className={clsx(
          "absolute top-1/2 right-0 w-full h-0.5 rounded bg-neutral-700 transition-transform translate-y-2",
          {
            "-rotate-45 !translate-y-0": props.isOpen,
          }
        )}
      />
    </div>
  </IconButton>
);
