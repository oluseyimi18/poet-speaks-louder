import type { CSSProperties } from "react";
import { cities } from "@/lib/content";

export default function CityTicker() {
  const items = [...cities, ...cities];
  return (
    <div aria-hidden="true" className="grain bg-ink motion-reduce:overflow-x-auto overflow-hidden py-5">
      <div
        className="animate-marquee flex w-max items-center gap-10"
        style={{ "--mduration": "38s" } as CSSProperties}
      >
        {items.map((city, i) => (
          <span key={`${city}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-ink-foreground text-2xl italic">{city}</span>
            <span className="text-flame text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
