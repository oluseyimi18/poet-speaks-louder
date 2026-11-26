import CopyButton from "./CopyButton";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { buttonVariants } from "@/components/ui/button";
import { firstMicMailto, site } from "@/lib/site";

export default function GetInvolved() {
  const g = site.giving;

  return (
    <section
      id="involved"
      aria-labelledby="involved-title"
      className="wrap scroll-mt-20 section-py"
    >
      <Reveal>
        <h2 id="involved-title" className="mt-6 text-5xl leading-[0.95] md:text-7xl">
          Lend your voice. <em className="text-flame">Or your hands.</em>
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-[0.85fr_0.85fr_1.3fr]">
        <RevealItem className="bg-background p-10">
          {/* <p className="eyebrow text-clay">01 · Join</p> */}
          <h3 className="mt-4 text-3xl">PSL Global Community</h3>
          <p className="mt-4 text-muted-foreground">
            Fill the form to join our WhatsApp community. Monthly programs and the annual Bootcamp are
            announced there and on Instagram.
          </p>
          <a
            href={site.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ className: "mt-8" })}
          >
            Join now
          </a>
        </RevealItem>

        <RevealItem className="bg-background p-10">
          {/* <p className="eyebrow text-clay">02 · Partner</p> */}
          <h3 className="mt-4 text-3xl">The First Mic</h3>
          <p className="mt-4 text-muted-foreground">
            Schools, churches, ministries and community centers anywhere in the world — host a creative
            writing or public speaking workshop with us.
          </p>
          <a
            href={firstMicMailto}
            className={buttonVariants({ variant: "outline", className: "mt-8" })}
          >
            Email us
          </a>
        </RevealItem>

        <RevealItem className="grain bg-ink p-6 text-ink-foreground md:col-span-2 md:p-8 xl:col-span-1">
          {/* <p className="eyebrow text-flame">03 · Give</p> */}
          <h3 className="text-3xl text-ink-foreground">Support the work</h3>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex items-center justify-between gap-4 border-b border-ink-foreground/15 pb-3">
              <dt className="text-ink-foreground/60">Account name</dt>
              <dd className="whitespace-nowrap text-right font-medium">{g.accountName}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-ink-foreground/15 pb-3">
              <dt className="text-ink-foreground/60">Bank</dt>
              <dd className="text-right font-medium">{g.bank}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-ink-foreground/15 pb-3">
              <dt className="text-ink-foreground/60">Account no.</dt>
              <dd className="flex items-center gap-2 font-medium">
                {g.accountNumber}
                <CopyButton value={g.accountNumber} label="account number" tone="dark" />
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-ink-foreground/15 pb-3">
              <dt className="text-ink-foreground/60">Routing no.</dt>
              <dd className="flex items-center gap-2 font-medium">
                {g.routingNumber}
                <CopyButton value={g.routingNumber} label="routing number" tone="dark" />
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-ink-foreground/60">Zelle</dt>
              <dd className="flex items-center gap-2 whitespace-nowrap font-medium">
                <span>{g.zelle}</span>
                <span className="shrink-0">
                  <CopyButton value={g.zelle} label="Zelle email" tone="dark" />
                </span>
              </dd>
            </div>
          </dl>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
