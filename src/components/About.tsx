import PhotoSlot from "./PhotoSlot";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="wrap scroll-mt-20 section-py">
      {/* <p className="eyebrow text-clay">Who we are</p> */}
      <Reveal>
        <h2 id="about-title" className="mt-6 max-w-5xl text-5xl leading-[0.95] md:text-7xl">
          A home for voices that <em className="text-flame">carry light.</em>
        </h2>
        <p className="text-muted-foreground mt-8 max-w-2xl text-lg leading-relaxed">{about.intro}</p>
      </Reveal>

      <Reveal delay={120}>
        <PhotoSlot
          slot="about"
          src="/photos/gallery/loud-and-clear/013.jpg"
          alt="The Poets Speak Louder team"
          label="about"
          hint="Ultra-wide. A group moment"
          sizes="100vw"
          className="mt-14 aspect-3/3 w-full rounded-sm sm:aspect-4/3 lg:aspect-video"
          imgClassName="object-top"
        />
      </Reveal>

      <RevealGroup className="mt-16 grid gap-16 md:grid-cols-2">
        <RevealItem>
          <p className="eyebrow text-clay">Our Vision</p>
          <p className="font-display mt-5 text-2xl leading-snug md:text-3xl">{about.vision}</p>
        </RevealItem>
        <RevealItem>
          <p className="eyebrow text-clay">Our Mission</p>
          <p className="font-display mt-5 text-2xl leading-snug md:text-3xl">{about.mission}</p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
