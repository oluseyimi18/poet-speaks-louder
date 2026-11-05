import CountUp from "./CountUp";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { about, headlineStats } from "@/lib/content";

export default function QuoteStats() {
  return (
    <section aria-labelledby="purpose-title" className="section-py">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-clay">Why we exist</p>
          <h2 id="purpose-title" className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
            Creative voices can <em className="text-flame">change a room.</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealGroup className="grid gap-9 sm:grid-cols-2">
            <RevealItem>
              <p className="eyebrow text-flame">Our Vision</p>
              <p className="font-display mt-4 text-xl leading-snug md:text-2xl">{about.vision}</p>
            </RevealItem>
            <RevealItem>
              <p className="eyebrow text-flame">Our Mission</p>
              <p className="font-display mt-4 text-xl leading-snug md:text-2xl">{about.mission}</p>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="grid grid-cols-2 border-l border-border">
            {headlineStats.map((s, i) => (
              <RevealItem
                key={s.label}
                className={`p-5 sm:p-7 ${i % 2 === 0 ? "border-border border-r" : ""} ${i < 2 ? "border-border border-b" : ""}`}
              >
                <CountUp
                  value={Number(s.value)}
                  className="font-display text-flame block text-[clamp(2rem,5vw,3.2rem)] leading-none"
                />
                <span className="text-muted-foreground mt-2 block text-sm">{s.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
