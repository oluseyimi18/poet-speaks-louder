import EditorialPhoto from "./EditorialPhoto";
import Reveal from "./Reveal";
import { about } from "@/lib/content";
import type { GalleryCategory } from "@/lib/gallery";

export default function About({ categories }: { categories: GalleryCategory[] }) {
  const lagos = categories.find((c) => c.slug === "lagos");
  const newYork = categories.find((c) => c.slug === "new-york");
  const chicago = categories.find((c) => c.slug === "loud-and-clear");

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 overflow-hidden bg-[#f7f0e6] py-20 md:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-clay">01 / The story behind the voices</p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
            <h2 id="about-title" className="!text-[clamp(3.2rem,7vw,7rem)] !leading-[0.96] !tracking-[-0.055em]">
              Not just a stage.<br /><em className="text-flame">A place to belong.</em>
            </h2>
            <div>
              <p className="font-display mb-5 text-2xl italic leading-tight text-[#b84c2a]">A home for voices that carry light.</p>
              <p className="text-muted-foreground max-w-[62ch] text-base leading-[1.9] md:text-lg">{about.intro}</p>
            </div>
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-12 gap-3 md:mt-20 md:gap-5">
          <EditorialPhoto photo={lagos?.photos[4] ?? lagos?.photos[0]} alt="Participants at a Poets Speak Louder workshop in Lagos" caption="Lagos, Nigeria" className="col-span-8 aspect-[4/5] md:col-span-6 md:aspect-[5/4]" sizes="(min-width: 768px) 50vw, 70vw" />
          <EditorialPhoto photo={newYork?.photos[2] ?? newYork?.photos[0]} alt="Poets Speak Louder creative workshop in New York" caption="New York, USA" className="col-span-4 aspect-[2/5] md:col-span-3 md:aspect-[3/4]" sizes="(min-width: 768px) 25vw, 35vw" />
          <EditorialPhoto photo={chicago?.photos[3] ?? chicago?.photos[0]} alt="Young people at the Loud and Clear workshop in Chicago" caption="Chicago, USA" className="col-span-12 aspect-[16/9] md:col-span-3 md:aspect-[3/4]" sizes="(min-width: 768px) 25vw, 100vw" />
        </div>
        <div className="mt-6 flex items-center justify-between gap-5 border-t border-[#c7b9a9] pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#73675c]">
          <span>Real people. Real stories. Real impact.</span>
          <a href="#gallery" className="text-[#c64a23] underline underline-offset-4">See our moments ↗</a>
        </div>
      </div>
    </section>
  );
}
