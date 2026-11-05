import PhotoSlot from "./PhotoSlot";
import Reveal from "./Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="wrap scroll-mt-20 section-py">
      <Reveal>
        <p className="eyebrow text-clay">Who we are</p>
        <h2 id="about-title" className="mt-5 max-w-5xl text-5xl leading-[0.95] md:text-7xl">
          A home for voices that <em className="text-flame">carry light.</em>
        </h2>
        <p className="text-muted-foreground mt-8 max-w-3xl text-lg leading-relaxed">{about.intro}</p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <PhotoSlot
            slot="about"
            src="/photos/gallery/loud-and-clear/013.jpg"
            alt="The Poets Speak Louder team"
            label="about"
            hint="A group moment"
            sizes="(min-width: 768px) 58vw, 100vw"
            className="aspect-[4/3] md:col-span-7"
            imgClassName="object-top"
          />
          <div className="grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-1">
            <PhotoSlot
              slot="tile1"
              alt="Poets Speak Louder community gathering"
              label="community"
              hint="Community gathering"
              sizes="(min-width: 768px) 30vw, 50vw"
              className="aspect-square md:aspect-[5/3]"
            />
            <PhotoSlot
              slot="tile2"
              alt="A spoken-word artist sharing their work"
              label="spoken word"
              hint="A poet at the mic"
              sizes="(min-width: 768px) 30vw, 50vw"
              className="aspect-square md:aspect-[5/3]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
