import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { programmes } from "@/lib/content";

export default function Programmes() {
  return (
    <section
      id="programmes"
      aria-labelledby="programmes-title"
      className="scroll-mt-20 border-y border-border/70 bg-[#f1ece5] py-20 sm:py-24"
    >
      <div className="wrap">
        <Reveal>
          <p className="section-kicker">Grow in your gift</p>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:gap-12">
            <h2 id="programmes-title" className="max-w-[14ch] text-5xl leading-[0.98] md:text-7xl">
              A space to find <em>your voice.</em>
            </h2>
            <p className="text-muted-foreground m-0 max-w-[43ch] text-base leading-8 sm:text-lg">
              Whether you are picking up a pen for the first time or finding your feet on stage, there is a place
              for you here.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-4 md:grid-cols-2">
          {programmes.map((programme) => (
            <RevealItem key={programme.id}>
              <article className="group flex h-full flex-col rounded-[1.15rem] border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flame/35 hover:shadow-[0_20px_50px_-30px_rgba(38,35,34,0.35)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-3xl italic text-flame">{programme.roman}</span>
                  <span className="rounded-full bg-muted px-3 py-1.5 text-[0.68rem] font-bold tracking-[0.08em] text-muted-foreground uppercase">
                    {programme.tag}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl leading-tight sm:text-3xl">{programme.title}</h3>
                <p className="text-muted-foreground mt-3 mb-0 leading-7">{programme.text}</p>
                <div className="mt-auto pt-6">
                  <p className="m-0 border-t border-border pt-4 text-sm leading-6 font-medium text-foreground/80">
                    {programme.fact}
                  </p>
                  <span className="mt-5 block h-px w-9 bg-flame/70 transition-all duration-300 group-hover:w-14" />
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
