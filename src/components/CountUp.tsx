"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  value: number;
  className?: string;
};

/** Counts up from 0 to value each time it scrolls into view. */
export default function CountUp({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!isInView || !node) return;
    if (reduceMotion) {
      node.textContent = value.toString();
      return;
    }

    node.textContent = "0";
    const controls = animate(0, value, {
      duration: 2.5,
      delay: 0.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = Math.round(latest).toString();
      },
    });
    return () => controls.stop();
  }, [isInView, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      2
    </span>
  );
}
