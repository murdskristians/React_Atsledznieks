import clsx from "clsx";

interface IProps {
  invert?: boolean;
  title: string;
  subTitle?: string;
  onClick?: VoidFunction;
}

export const ServiceCard = (props: IProps) => (
  <div
    className={clsx(
      "p-4 md:p-6 h-full min-h-40 rounded-2xl border border-stone-400 lg:p-8 min-h-52 md:min-h-72 overflow-hidden hover:bg-black/10 transition-all cursor-pointer",
      {
        "bg-black text-white hover:bg-black/80 ": props.invert,
      }
    )}
  >
    <p className="text-base md:text-2xl font-medium text-wrap truncate">
      {props.title}
    </p>
    {props.subTitle && (
      <p className="mt-4 text-sm opacity-80">{props.subTitle}</p>
    )}
  </div>
);
