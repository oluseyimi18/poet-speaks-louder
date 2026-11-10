import EditorialPhoto from "./EditorialPhoto";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import type { GalleryCategory } from "@/lib/gallery";
import * as motion from "motion/react-client";

export default function Hero({ categories }: { categories: GalleryCategory[] }) {
  const lagos = categories.find((c) => c.slug === "lagos");
  const chicago = categories.find((c) => c.slug === "loud-and-clear");
  const newYork = categories.find((c) => c.slug === "new-york");

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#181613] text-[#f9f4eb]">
      <div className="pointer-events-none absolute right-[-8rem] top-[-9rem] h-[27rem] w-[27rem] rounded-full bg-[#f65b2a]/15 blur-[100px]" aria-hidden="true" />
      <div className="wrap relative grid min-h-[min(850px,100svh)] items-center gap-12 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        <div className="relative z-10">
          <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.65}} className="mb-7 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#f3a278]">
            <span className="h-px w-8 bg-[#f3a278]" /> A home for voices that carry light
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={{opacity:0,y:32}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.9,ease:[0.22,1,0.36,1]}}
            className="max-w-[12ch] !text-[clamp(4.2rem,9vw,9rem)] !leading-[0.88] !tracking-[-0.065em] text-[#f9f4eb]"
          >
            Poets <span className="block italic text-[#ff6c37]">Speak</span> Louder<span className="text-[#ff6c37]">.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}} className="mt-9 max-w-[43ch] text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed text-[#e4dbcf]">
            We create spaces where creative voices are discovered, nurtured, and fully expressed.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.3}} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#programmes" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff6c37] px-7 text-sm font-bold text-[#181613] transition-colors hover:bg-[#ff946e]">Discover our programmes <span aria-hidden="true" className="ml-3">↗</span></a>
            <a href={site.joinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center border-b border-[#f9f4eb]/60 px-1 text-sm font-semibold text-[#f9f4eb] hover:border-[#ff6c37]">Join our community <span aria-hidden="true" className="ml-3">↗</span></a>
          </motion.div>
          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-[#b6a99b]">Scroll to discover <span aria-hidden="true">↓</span></p>
        </div>

        <div className="relative mx-auto grid h-[min(78vw,620px)] w-full max-w-[590px] grid-cols-12 grid-rows-12 gap-3 lg:h-[620px]">
          <EditorialPhoto photo={lagos?.photos[12] ?? lagos?.photos[0]} alt="Creative voices gathering at a Poets Speak Louder event in Lagos" priority sizes="(min-width: 1024px) 32vw, 65vw" className="col-span-8 col-start-2 row-span-9 row-start-1 rotate-[-3deg] shadow-[0_24px_70px_rgba(0,0,0,.3)]" />
          <EditorialPhoto photo={chicago?.photos[12] ?? chicago?.photos[0]} alt="Young participants at the Loud and Clear event in Chicago" sizes="(min-width: 1024px) 17vw, 35vw" className="z-10 col-span-5 col-start-8 row-span-6 row-start-6 rotate-[5deg] border-[5px] border-[#181613] shadow-[0_18px_55px_rgba(0,0,0,.35)]" />
          <div className="z-20 col-span-5 col-start-1 row-span-2 row-start-10 flex -rotate-3 items-center justify-center bg-[#ff6c37] px-3 text-center font-display text-[clamp(1rem,2vw,2rem)] italic text-[#181613]">Every voice matters.</div>
          <div className="pointer-events-none absolute -right-2 top-8 flex h-24 w-24 rotate-12 items-center justify-center rounded-full border border-[#ff6c37] text-center text-[0.6rem] font-bold uppercase tracking-[0.13em] text-[#ff6c37] sm:h-32 sm:w-32">Write · Speak<br/> · Shine</div>
        </div>
      </div>
      <div className="border-t border-white/15 px-5 py-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#f3a278]">Poetry &nbsp; ✳ &nbsp; Spoken word &nbsp; ✳ &nbsp; Community &nbsp; ✳ &nbsp; Faith &nbsp; ✳ &nbsp; Creative expression</div>
    </section>
  );
}
