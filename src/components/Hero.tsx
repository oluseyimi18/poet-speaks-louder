"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";

const HERO_SLIDES = [
  "/photos/slider/002.jpg",
  "/photos/slider/002 copy.jpg",
  "/photos/slider/003.jpg",
  "/photos/slider/004.jpg",
  "/photos/slider/009.jpg",
  "/photos/slider/011.jpg",
  "/photos/slider/022.jpg",
  "/photos/slider/024.jpg",
  "/photos/slider/031.jpg",
  "/photos/slider/032.jpg",
  "/photos/slider/035.jpg",
  "/photos/slider/037.jpg",
  "/photos/slider/042.jpg",
  "/photos/slider/047.jpg",
  "/photos/slider/055.jpg",
  "/photos/slider/056.jpg",
  "/photos/slider/060.jpg",
  "/photos/slider/067.jpg",
  "/photos/slider/075.jpg",
  "/photos/slider/image.png",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const slideCount = HERO_SLIDES.length;
  const activeSlide = HERO_SLIDES[activeIndex] ?? HERO_SLIDES[0];

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion || slideCount < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slideCount);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPlaying, prefersReducedMotion, slideCount]);

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide}
              alt=""
              fill
              priority={activeIndex === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-r from-ink/85 via-ink/65 to-ink/45 md:from-ink/90 md:via-ink/45 md:to-transparent"
      />
      <div className="wrap relative z-10 flex min-h-[min(760px,100svh)] items-center py-14 md:py-20 lg:py-24">
        <div className="max-w-[58rem]">
          <p className="eyebrow mb-6 text-amber">
            A home for voices that carry light
          </p>
          <h1
            id="hero-title"
            className="max-w-[16ch] !text-[clamp(3rem,7vw,7rem)] !leading-[0.94] !tracking-[-0.06em] text-ink-foreground lg:max-w-none"
          >
            Poets <span className="italic text-flame">Speak</span>
            <br className="hidden lg:block" /> Louder
          </h1>
          <p className="mt-7 max-w-[43ch] text-base leading-relaxed text-ink-foreground/80 md:mt-8 md:text-lg">
            We create spaces where creative voices are discovered, nurtured, and fully expressed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#programmes"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-amber px-6 text-sm font-bold text-ink transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
            >
              Explore our programmes <span aria-hidden="true">↗</span>
            </a>
            <a
              href={site.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-ink-foreground/85 underline decoration-ink-foreground/40 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
            >
              Join the community <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* <div role="group" aria-label="Background slideshow controls" className="mt-8 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous background photo"
              onClick={() => setActiveIndex((index) => (index - 1 + slideCount) % slideCount)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/40 text-lg text-ink-foreground transition-colors hover:border-amber hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              <span aria-hidden="true">←</span>
            </button>
            <span aria-hidden="true" className="min-w-12 text-center text-xs font-semibold tabular-nums text-ink-foreground/80">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Next background photo"
              onClick={() => setActiveIndex((index) => (index + 1) % slideCount)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/40 text-lg text-ink-foreground transition-colors hover:border-amber hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              <span aria-hidden="true">→</span>
            </button>
            {!prefersReducedMotion && (
              <button
                type="button"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                onClick={() => setIsPlaying((playing) => !playing)}
                className="ml-2 min-h-10 rounded-full px-3 text-sm font-semibold text-ink-foreground/80 underline underline-offset-4 hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}