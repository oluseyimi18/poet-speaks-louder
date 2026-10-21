import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { site } from "@/lib/site";

export default function Signoff() {
  return (
    <div className="grain bg-ink text-ink-foreground pt-[clamp(2.5rem,4vw+1.5rem,5rem)] pb-[calc(2rem+env(safe-area-inset-bottom,0px))]">
      <div className="wrap">
        <Reveal>
          <p className="font-display m-0 max-w-[16ch] text-[clamp(2.2rem,8vw,6rem)] leading-[1.02] tracking-[-0.03em]">
            Speak <em className="text-flame font-normal italic">louder</em> than the dark.
          </p>
        </Reveal>

        <RevealGroup className="border-ink-foreground/10 mt-12 grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-3">
          <RevealItem>
            <p className="eyebrow text-gold mb-2">Write to us</p>
            <a href={`mailto:${site.email}`} className="text-ink-foreground/70 hover:text-ink-foreground">
              {site.email}
            </a>
          </RevealItem>
          <RevealItem>
            <p className="eyebrow text-gold mb-2">Follow</p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-foreground/70 hover:text-ink-foreground"
            >
              Instagram {site.instagram.handle}
            </a>
          </RevealItem>
          <RevealItem>
            <p className="eyebrow text-gold mb-2">Join</p>
            <a
              href={site.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-foreground/70 hover:text-ink-foreground"
            >
              PSL Global Community &rarr;
            </a>
          </RevealItem>
        </RevealGroup>

        <div className="border-ink-foreground/10 text-white mt-10 border-t pt-6 text-sm text-center">
          &copy; {new Date().getFullYear()} {site.name}
        </div>
      </div>
    </div>
  );
}
