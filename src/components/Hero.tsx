import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mic2 } from "lucide-react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";

const intro: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

const introItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="wrap relative scroll-mt-20 pb-10 pt-8 sm:pb-14 sm:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          className="relative z-10 py-4 lg:py-12"
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={introItem} className="eyebrow mb-7 flex items-center gap-3 text-clay">
            <span className="flex size-9 items-center justify-center rounded-full bg-sand text-brand-deep">
              <Mic2 aria-hidden="true" size={17} strokeWidth={1.8} />
            </span>
            Faith · Poetry · Community
          </motion.p>
          <motion.h1
            variants={introItem}
            id="hero-title"
            className="max-w-[10ch] text-[clamp(4rem,8.5vw,7.8rem)] leading-[0.86] tracking-[-0.065em]"
          >
            Your voice was made to <em>speak.</em>
          </motion.h1>
          <motion.p variants={introItem} className="text-muted-foreground mt-7 max-w-[43ch] text-base leading-8 sm:text-lg">
            We help poets and creative voices grow in confidence, find their craft, and share words that bring
            light, hope and healing.
          </motion.p>
          <motion.div variants={introItem} className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={buttonVariants({ className: "gap-2" })}
              href={site.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find your community
              <ArrowUpRight aria-hidden="true" size={17} />
            </motion.a>
            <motion.a
              whileHover={{ x: 3 }}
              href="#about"
              className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Get to know us
              <ArrowDown aria-hidden="true" size={15} />
            </motion.a>
          </motion.div>
          <motion.div variants={introItem} className="mt-12 flex items-center gap-3 border-t border-border pt-5">
            <span className="size-2 rounded-full bg-flame" />
            <p className="m-0 text-sm font-medium text-muted-foreground">
              A global creative community rooted in the Word
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[620px] lg:ml-auto lg:max-w-none"
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group relative aspect-[0.94] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[1.18] lg:aspect-[0.94]">
            <Image
              src="/photos/gallery/lagos/013.jpg"
              alt="A poet shares his words at a Poets Speak Louder workshop"
              fill
              priority
              loading="eager"
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[67%_center] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-7 sm:bottom-7">
              <div>
                <p className="eyebrow mb-2 text-white/75">A room for every voice</p>
                <p className="m-0 font-display text-2xl sm:text-3xl">In the beginning was the Word</p>
              </div>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm">
                <Mic2 aria-hidden="true" size={18} />
              </span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-2 top-5 flex items-center gap-3 rounded-xl border border-border/70 bg-card px-4 py-3 shadow-[0_14px_38px_-22px_rgba(38,35,34,0.4)] sm:-left-8 sm:top-8 sm:px-5 sm:py-4"
          >
            <span className="font-display text-4xl leading-none text-flame">10</span>
            <span className="max-w-[10ch] text-xs leading-relaxed font-semibold text-muted-foreground">
              countries, one creative community
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
