import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function Signoff() {
  return (
    <div className="grain bg-ink text-ink-foreground pt-[clamp(2.5rem,4vw+1.5rem,5rem)] pb-[calc(2rem+env(safe-area-inset-bottom,0px))]">
      <div className="wrap">
        <Reveal className="flex flex-col gap-8 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-amber mb-4">Keep the words going</p>
            <p className="font-display m-0 max-w-[13ch] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.04em]">
              Speak <em className="text-flame font-normal italic">louder</em> together.
            </p>
          </div>
          <a
            href={site.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "secondary", className: "self-start sm:mb-1 sm:self-auto" })}
          >
            Join the community
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>

        <RevealGroup className="border-ink-foreground/10 grid grid-cols-1 gap-8 border-t pt-9 sm:grid-cols-3">
          <RevealItem>
            <p className="eyebrow text-flame mb-2">Write to us</p>
            <a href={`mailto:${site.email}`} className="text-ink-foreground/70 hover:text-ink-foreground">
              {site.email}
            </a>
          </RevealItem>
          <RevealItem>
            <p className="eyebrow text-flame mb-2">Follow</p>
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
            <p className="eyebrow text-flame mb-2">Join</p>
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
