import CopyButton from "./CopyButton";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { buttonVariants } from "@/components/ui/button";
import { firstMicMailto, site } from "@/lib/site";

export default function GetInvolved() {
  const g = site.giving;
  return (
    <section id="involved" aria-labelledby="involved-title" className="wrap scroll-mt-20 section-py">
      <Reveal>
        <p className="section-kicker">Make a difference</p>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="involved-title" className="max-w-[14ch] text-5xl leading-[0.98] md:text-7xl">
            Be part of <em>what comes next.</em>
          </h2>
          <p className="text-muted-foreground mb-1 max-w-[39ch] text-base leading-8 sm:text-lg">
            Join the community, bring a workshop to your space, or help more voices find their first mic.
          </p>
        </div>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-4 lg:grid-cols-3">
        <RevealItem className="flex flex-col rounded-[1.15rem] border border-border bg-card p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-flame/35 hover:shadow-[0_20px_50px_-30px_rgba(38,35,34,0.35)] motion-reduce:transform-none sm:p-8">
          <p className="eyebrow text-flame">01 · Join</p>
          <h3 className="mt-4 text-2xl sm:text-3xl">PSL Global Community</h3>
          <p className="text-muted-foreground mt-4">
            Fill the form to join our WhatsApp community. Monthly programs and the annual Bootcamp are announced
            there and on Instagram.
          </p>
          <a
            href={site.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ className: "mt-auto self-start" })}
          >
            Join the community
          </a>
        </RevealItem>

        <RevealItem className="flex flex-col rounded-[1.15rem] border border-border bg-card p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-flame/35 hover:shadow-[0_20px_50px_-30px_rgba(38,35,34,0.35)] motion-reduce:transform-none sm:p-8">
          <p className="eyebrow text-flame">02 · Partner</p>
          <h3 className="mt-4 text-2xl sm:text-3xl">The First Mic</h3>
          <p className="text-muted-foreground mt-4">
            Schools, churches, ministries and community centers anywhere in the world — host a creative writing or
            public speaking workshop with us.
          </p>
          <a href={firstMicMailto} className={buttonVariants({ variant: "outline", className: "mt-auto self-start" })}>
            Host a workshop
          </a>
        </RevealItem>

        <RevealItem className="grain flex flex-col rounded-[1.15rem] bg-ink p-7 text-ink-foreground transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none sm:p-8">
          <p className="eyebrow text-flame">03 · Give</p>
          <h3 className="text-ink-foreground mt-4 text-2xl sm:text-3xl">Support the work</h3>
          <dl className="mt-6 space-y-3 text-[0.8rem] sm:text-sm">
            <div className="border-ink-foreground/15 flex items-start justify-between gap-3 border-b pb-3">
              <dt className="text-ink-foreground/60">Account name</dt>
              <dd className="m-0 max-w-[58%] text-right font-medium">{g.accountName}</dd>
            </div>
            <div className="border-ink-foreground/15 flex items-start justify-between gap-3 border-b pb-3">
              <dt className="text-ink-foreground/60">Bank</dt>
              <dd className="m-0 text-right font-medium">{g.bank}</dd>
            </div>
            <div className="border-ink-foreground/15 flex items-center justify-between gap-3 border-b pb-3">
              <dt className="text-ink-foreground/60">Account no.</dt>
              <dd className="m-0 flex items-center gap-2 font-medium">
                {g.accountNumber}
                <CopyButton value={g.accountNumber} label="account number" tone="dark" />
              </dd>
            </div>
            <div className="border-ink-foreground/15 flex items-center justify-between gap-3 border-b pb-3">
              <dt className="text-ink-foreground/60">Routing no.</dt>
              <dd className="m-0 flex items-center gap-2 font-medium">
                {g.routingNumber}
                <CopyButton value={g.routingNumber} label="routing number" tone="dark" />
              </dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-ink-foreground/60">Zelle</dt>
              <dd className="m-0 flex items-center gap-2 font-medium break-all">
                {g.zelle}
                <CopyButton value={g.zelle} label="Zelle email" tone="dark" />
              </dd>
            </div>
          </dl>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
