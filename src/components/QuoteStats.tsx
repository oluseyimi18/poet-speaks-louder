import CountUp from "./CountUp";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { headlineStats, quote } from "@/lib/content";

export default function QuoteStats() {
  return (
    <section aria-labelledby="quote-title" className="grain bg-ink py-16 text-ink-foreground sm:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="section-kicker mb-5 text-amber">Rooted in the Word</p>
          <blockquote
            id="quote-title"
            className="font-display m-0 max-w-[18ch] text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.12] tracking-[-0.025em]"
          >
            <span className="text-amber">{quote.lead}</span> {quote.rest}
          </blockquote>
          <p className="text-ink-foreground/55 mt-5 mb-0 text-sm">A creative calling. A community that carries it.</p>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 border-l border-t border-ink-foreground/15">
          {headlineStats.map((s, i) => (
            <RevealItem
              key={s.label}
              className={`p-5 sm:p-8 ${i % 2 === 0 ? "border-r border-ink-foreground/15" : ""} ${i < 2 ? "border-b border-ink-foreground/15" : ""}`}
            >
              <CountUp
                value={Number(s.value)}
                className="font-display block text-[clamp(2.25rem,5vw,3.8rem)] leading-none text-amber"
              />
              <span className="mt-2 block max-w-[18ch] text-sm leading-6 text-ink-foreground/65">{s.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
