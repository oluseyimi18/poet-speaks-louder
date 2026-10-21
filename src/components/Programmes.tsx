import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { programmes } from "@/lib/content";

export default function Programmes() {
  return (
    <section id="programmes" aria-labelledby="programmes-title" className="wrap scroll-mt-20 section-py">
      {/* <p className="eyebrow text-clay">Our programs</p> */}
      <Reveal>
        <h2 id="programmes-title" className="mt-6 text-5xl leading-[0.95] md:text-7xl">
          Four rooms. <em className="text-flame">One Word.</em>
        </h2>
      </Reveal>

      <RevealGroup className="mt-14">
        {programmes.map((p) => (
          <article key={p.id} className="border-border border-t">
            <RevealItem className="grid gap-6 py-12 md:grid-cols-12">
              <p className="font-display text-flame text-5xl italic md:col-span-2">{p.roman}</p>
              <div className="md:col-span-5">
                <p className="eyebrow text-muted-foreground">{p.tag}</p>
                <h3 className="mt-3 text-3xl md:text-4xl">{p.title}</h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                <p className="border-primary mt-5 border-l-2 pl-4 text-sm font-medium">{p.fact}</p>
              </div>
            </RevealItem>
          </article>
        ))}
      </RevealGroup>
    </section>
  );
}
