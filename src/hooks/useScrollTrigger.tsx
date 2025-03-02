import { useEffect, useState } from "react";

interface Options {
  disableHysteresis?: boolean;
  target?: Node | Window | null;
  threshold?: number;
}

export const useScrollTrigger = (options: Options = {}) => {
  const { disableHysteresis = false, target, threshold = 100 } = options;

  const [trigger, setTrigger] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    let previousScrollTop = scrollTop;
    
    const getTrigger = (newScrollTop: number) => {
      if (disableHysteresis) {
        return newScrollTop > threshold;
      }

      if (newScrollTop < threshold) {
        return false;
      }

      if (previousScrollTop > newScrollTop) {
        return false;
      }

      return true;
    };

    const handleScroll = () => {
      const targetNode = target || window;
      let newScrollTop = 0;
      if (targetNode === window) {
        newScrollTop = window.scrollY;
      } else if (targetNode && "scrollTop" in targetNode) {
        // This is casting the targetNode to Element to access scrollTop
        newScrollTop = (targetNode as Element).scrollTop;
      }

      // Check if newScrollTop is a valid number
      if (typeof newScrollTop === "number") {
        const update = getTrigger(newScrollTop);
        previousScrollTop = newScrollTop; // Update for next scroll event
        setScrollTop(newScrollTop);
        setTrigger(update);
      }
    };

    const targetNode = target || window;
    targetNode.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize

    return () => {
      targetNode.removeEventListener("scroll", handleScroll);
    };
  }, [disableHysteresis, target, threshold, scrollTop]);

  return trigger;
};
