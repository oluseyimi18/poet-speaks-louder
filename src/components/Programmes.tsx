import PhotoSlot from "./PhotoSlot";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { programmes } from "@/lib/content";

const programmePhotos = [
  { slot: "tile1", hint: "Community session" },
  { slot: "tile2", hint: "Spoken word training" },
  { slot: "tile3", hint: "Workshop and open mic" },
  { slot: "tile4", hint: "Young voices at the mic" },
];

export default function Programmes() {
  return (
    <section id="programmes" aria-labelledby="programmes-title" className="scroll-mt-20 section-py">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-clay">What we do</p>
          <h2 id="programmes-title" className="mt-5 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Room to grow. <em className="text-flame">Room to be heard.</em>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
            Every voice develops differently. Our programmes offer practical ways to learn, find community and share what matters.
          </p>
        </Reveal>
      </div>

      <RevealGroup className="mt-12">
        {programmes.map((p, index) => (
          <article key={p.id} className="border-border border-t">
            <RevealItem className="wrap grid gap-7 py-10 md:grid-cols-12 md:gap-10 md:py-16">
              <div className="md:col-span-1">
                <p className="font-display text-flame text-3xl italic">{p.roman}</p>
              </div>
              <div className="md:col-span-5">
                <PhotoSlot
                  slot={programmePhotos[index].slot}
                  alt={p.imageAlt}
                  label={p.title}
                  hint={programmePhotos[index].hint}
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="aspect-[5/4] w-full rounded-sm"
                />
                <p className="eyebrow text-muted-foreground mt-5">{p.tag}</p>
                <h3 className="mt-2 text-3xl leading-tight md:text-4xl">{p.title}</h3>
              </div>
              <div className="md:col-span-5 md:pt-12">
                <p className="text-foreground text-lg leading-relaxed">{p.text}</p>
                <p className="text-muted-foreground mt-5 leading-relaxed">{p.details}</p>
                {p.topics && (
                  <div className="mt-6">
                    <p className="eyebrow text-clay mb-3">Workshop themes</p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {p.topics.map((topic) => (
                        <li key={topic} className="border-border border-l-2 pl-3 text-sm leading-relaxed">{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="border-primary mt-7 border-l-2 pl-4 text-sm font-semibold">{p.fact}</p>
              </div>
            </RevealItem>
          </article>
        ))}
      </RevealGroup>
    </section>
  );
}
