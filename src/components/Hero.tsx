import PhotoSlot from "./PhotoSlot";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <PhotoSlot
        slot="hero"
        src="/photos/gallery/lagos/013.jpg"
        alt="Poets Speak Louder members in conversation"
        label="hero"
        hint="Wide. A packed room or a poet mid-performance"
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full rounded-none shadow-none"
        imgClassName="object-[70%_center]"
      />
      <div className="from-ink via-ink/55 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent" />

      <div className="wrap relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-end pt-[clamp(6rem,14vw,8rem)] pb-14 sm:pb-20">
        {/* <p className="eyebrow text-gold mb-5">A faith-based non-profit · for the Word</p> */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-ink-foreground max-w-4xl text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] tracking-[-0.03em]"
        >
          Poets
          <br />
          speak <em>louder</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-ink-foreground/75 mt-6 max-w-[48ch] text-lg leading-relaxed"
        >
          We create spaces where creative voices are discovered, nurtured and fully expressed — so poets bring
          light, hope and healing louder than any darkness.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-3.5"
        >
          <a className={buttonVariants()} href="#gallery">
            View the gallery
          </a>
          <a
            className={buttonVariants({
              variant: "outline",
              className:
                "border-ink-foreground/70 bg-ink-foreground/10 text-ink-foreground backdrop-blur-sm hover:border-ink-foreground hover:bg-ink-foreground/20",
            })}
            href={site.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the community
          </a>
        </motion.div>
      </div>
    </section>
  );
}
