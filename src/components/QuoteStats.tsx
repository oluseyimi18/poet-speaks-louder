import CountUp from "./CountUp";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { headlineStats, quote } from "@/lib/content";

export default function QuoteStats() {
  return (
    <section aria-labelledby="quote-title" className="section-py">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p
            id="quote-title"
            className="font-display text-flame m-0 max-w-[20ch] text-[clamp(1.8rem,4.2vw,2.8rem)] leading-[1.15] tracking-[-0.02em]"
          >
            {quote.lead} <span className="text-black">{quote.rest}</span>
          </p>
        </Reveal>
        <RevealGroup className="grid grid-cols-2">
          {headlineStats.map((s, i) => (
            <RevealItem
              key={s.label}
              className={`p-6 sm:p-8 ${i % 2 === 0 ? "border-border border-r" : ""} ${i < 2 ? "border-border border-b" : ""}`}
            >
              <CountUp
                value={Number(s.value)}
                className="font-display text-flame block text-[clamp(2rem,5vw,3.2rem)] leading-none"
              />
              <span className="text-muted-foreground mt-1.5 block text-sm">{s.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
