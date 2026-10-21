"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const revealTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

type RevealProps = {
  /** Delay in ms before the animation starts. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/** Fades and rises an element each time it scrolls into view. */
export default function Reveal({ delay = 0, className, children }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={item}
      transition={{ ...revealTransition, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

type RevealGroupProps = {
  className?: string;
  children: ReactNode;
};

/** Wraps a list of RevealItem children, cascading them when scrolled into view. */
export function RevealGroup({ className, children }: RevealGroupProps) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={container}>
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  className?: string;
  children: ReactNode;
};

/** A single item inside a RevealGroup — inherits the cascade timing from its parent. */
export function RevealItem({ className, children }: RevealItemProps) {
  return (
    <motion.div className={className} variants={item} transition={revealTransition}>
      {children}
    </motion.div>
  );
}
