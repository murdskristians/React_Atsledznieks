import clsx from "clsx";
import { useId } from "react";

export function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & { label?: string }) {
  const id = useId();

  return (
    <div className="relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        className={clsx(
          "block w-full border border-neutral-400 bg-transparent px-6 py-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-800 focus:outline-none focus:ring-neutral-800/5 rounded-xl",
          props.className
        )}
      />
      {label && (
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          {label}
        </label>
      )}
    </div>
  );
}
