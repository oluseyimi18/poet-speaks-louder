"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";
import { site } from "@/lib/site";
import type { GalleryCategory } from "@/lib/gallery";

/** Seconds for Lagos's photo loop — other cities scale to its per-photo pace. */
const LAGOS_LANE_DURATION = 130;
const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- entrance variants (replay when the section scrolls into view) ---------- */

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const tabIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* ---------- hover overlay variants (instant feedback) ---------- */

const tileImage: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.6, ease: EASE } },
};

const tileOverlay: Variants = {
  rest: { opacity: 0, transition: { duration: 0.2 } },
  hover: { opacity: 1, transition: { duration: 0.15 } },
};

const tileCaption: Variants = {
  rest: { y: 12, opacity: 0 },
  hover: { y: 0, opacity: 1, transition: { duration: 0.3, ease: EASE } },
};

export default function Gallery({ categories }: { categories: GalleryCategory[] }) {
  const [activeSlug, setActiveSlug] = useState(categories[0]?.slug);
  const active = categories.find((c) => c.slug === activeSlug) ?? categories[0];

  if (!active) return null;

  const count = active.photos.length;
  const lagosPhotoCount = categories.find((category) => category.slug === "lagos")?.photos.length;
  const laneDuration = lagosPhotoCount
    ? (LAGOS_LANE_DURATION * count) / lagosPhotoCount
    : LAGOS_LANE_DURATION;
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="grain bg-ink text-ink-foreground scroll-mt-20 section-py"
    >
      <motion.div
        className="wrap"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h2
          id="gallery-title"
          variants={rise}
          className="text-ink-foreground mt-4 text-5xl md:text-7xl"
        >
          Moments, <em className="text-flame">city by city</em>.
        </motion.h2>

        <motion.div
          role="tablist"
          aria-label="Photo galleries by city"
          variants={stagger}
          className="border-ink-foreground/15 mt-12 flex snap-x snap-mandatory gap-x-8 gap-y-4 overflow-x-auto border-b pb-px scrollbar-none sm:flex-wrap sm:snap-none sm:gap-x-10 sm:overflow-visible"
        >
          {categories.map((c) => {
            const selected = c.slug === active.slug;
            return (
              <motion.button
                key={c.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                variants={tabIn}
                onClick={() => setActiveSlug(c.slug)}
                className={`font-display relative -mb-px shrink-0 snap-start pb-4 text-3xl whitespace-nowrap transition-colors md:text-5xl ${
                  selected ? "text-flame italic" : "text-ink-foreground/50 hover:text-ink-foreground"
                }`}
              >
                {c.title}
                {selected && (
                  <motion.span
                    layoutId="gallery-tab-underline"
                    className="bg-primary absolute inset-x-0 bottom-0 h-0.5"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Details swap smoothly when the tab changes */}
        <motion.div variants={rise} className="mt-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div>
                <p className="eyebrow text-gold">
                  {active.program} · {active.date}
                </p>
                <p className="font-display mt-3 text-3xl">{active.heading}</p>
              </div>
              <p className="text-ink-foreground/70 leading-relaxed">{active.blurb}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {count ? (
              <Lane category={active} duration={laneDuration} />
            ) : (
              <div className="wrap">
                <div className="border-ink-foreground/15 flex min-h-[40vh] flex-col items-center justify-center rounded-sm border p-10 text-center">
                  <p className="eyebrow text-gold">Developing</p>
                  <p className="font-display mt-4 max-w-xl text-4xl">
                    The {active.title} photographs are on their way.
                  </p>
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow hover:text-gold mt-8"
                  >
                    See highlights on Instagram &rarr;
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Lane: continuous CSS marquee                                       */
/* ------------------------------------------------------------------ */

function Lane({ category, duration }: { category: GalleryCategory; duration: number }) {
  const photos = category.photos;
  const copies = 2;

  return (
    <div className="gallery-lane overflow-hidden">
      <div
        className="gallery-marquee flex w-max"
        style={{ "--mduration": `${duration}s` } as CSSProperties}
      >
        {Array.from({ length: copies }, (_, copyIndex) => (
          <div
            key={copyIndex}
            aria-hidden={copyIndex > 0 || undefined}
            className="flex shrink-0 gap-5 pr-5"
          >
            {photos.map((photo, i) => (
              <motion.div
                key={`${photo.src}-${i}`}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative block flex-none overflow-hidden rounded-sm"
              >
                <motion.div variants={tileImage}>
                  <Image
                    src={photo.src}
                    alt={copyIndex > 0 ? "" : photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 1024px) 40vw, 80vw"
                    loading={i < 4 ? "eager" : "lazy"}
                    className="h-72 w-auto object-cover sm:h-104 lg:h-128"
                  />
                </motion.div>

                <motion.div
                  variants={tileOverlay}
                  className="from-ink/85 pointer-events-none absolute inset-0 flex items-end bg-linear-to-t to-transparent p-4"
                >
                  <motion.div variants={tileCaption}>
                    <p className="font-display text-ink-foreground text-lg">{category.place}</p>
                    <p className="text-ink-foreground/70 text-xs">{category.program}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}