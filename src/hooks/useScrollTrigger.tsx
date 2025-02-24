import { MutableRefObject, useEffect, useRef, useState } from "react";
import mergeRight from "ramda/src/mergeRight";

function getTrigger(
  ref: MutableRefObject<number>,
  options: {
    disableHysteresis?: boolean;
    threshold?: number;
    target?: any;
  }
) {
  const { disableHysteresis = false, threshold = 100, target } = options;
  const previous = ref.current;
  if (target) {
    ref.current =
      target.scrollY !== undefined ? target.scrollY : target.scrollTop;
  }
  if (!disableHysteresis && previous !== undefined) {
    if (ref?.current < previous) {
      return false;
    }
  }
  return ref.current > threshold;
}

const defaultTarget = typeof window !== "undefined" ? window : null;

export default function useScrollTrigger({
  target = defaultTarget,
  ...other
} = {}) {
  const ref = useRef<number>(0);
  const [trigger, setTrigger] = useState(() => getTrigger(ref, other));

  useEffect(() => {
    const handleScroll = () => {
      setTrigger(
        getTrigger(
          ref,
          mergeRight(other, {
            target,
          })
        )
      );
    };

    handleScroll();

    target?.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      target?.removeEventListener("scroll", handleScroll, {
        passive: true,
      } as any);
    };
  }, [target, getTrigger, JSON.stringify(other)]);

  return trigger;
}
