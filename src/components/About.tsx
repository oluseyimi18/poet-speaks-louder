import PhotoSlot from "./PhotoSlot";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="wrap scroll-mt-20 section-py">
      <Reveal>
        <p className="section-kicker">A place to belong</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-14">
          <h2 id="about-title" className="max-w-[14ch] text-5xl leading-[0.98] md:text-7xl">
            Make room for words that <em>matter.</em>
          </h2>
          <p className="text-muted-foreground m-0 max-w-[48ch] text-base leading-8 sm:text-lg">
            {about.intro}
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <Reveal>
          <PhotoSlot
            slot="about"
            src="/photos/feature.jpg"
            alt="Poets Speak Louder members gathering after a workshop"
            label="about"
            hint="A poet sharing their voice"
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="group aspect-[1.15] w-full rounded-[1.25rem] sm:aspect-[1.5] lg:aspect-auto lg:h-full lg:min-h-[430px]"
            imgClassName="object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          >
            <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/25 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md sm:left-6 sm:top-6">
              Lagos, Nigeria
            </div>
          </PhotoSlot>
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <RevealItem className="rounded-[1.25rem] border border-border bg-card p-7 sm:p-8">
            <p className="section-kicker">Our vision</p>
            <p className="font-display mt-5 text-2xl leading-snug text-foreground sm:text-[1.75rem]">
              {about.vision}
            </p>
          </RevealItem>
          <RevealItem className="rounded-[1.25rem] border border-border bg-[#f4e6dc] p-7 sm:p-8">
            <p className="section-kicker">Our mission</p>
            <p className="font-display mt-5 text-2xl leading-snug text-foreground sm:text-[1.75rem]">
              {about.mission}
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
