import CopyButton from "./CopyButton";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { buttonVariants } from "@/components/ui/button";
import { firstMicMailto, site } from "@/lib/site";

export default function GetInvolved() {
  const g = site.giving;
  return (
    <section id="involved" aria-labelledby="involved-title" className="wrap scroll-mt-20 section-py">
      {/* <p className="eyebrow text-clay">Get involved</p> */}
      <Reveal>
        <h2 id="involved-title" className="mt-6 text-5xl leading-[0.95] md:text-7xl">
          Lend your voice. <em className="text-flame">Or your hands.</em>
        </h2>
      </Reveal>

      <RevealGroup className="bg-border mt-14 grid gap-px md:grid-cols-3">
        <RevealItem className="bg-background p-10">
          <p className="eyebrow text-clay">01 · Join</p>
          <h3 className="mt-4 text-3xl">PSL Global Community</h3>
          <p className="text-muted-foreground mt-4">
            Fill the form to join our WhatsApp community. Monthly programs and the annual Bootcamp are announced
            there and on Instagram.
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
          <p className="eyebrow text-clay">02 · Partner</p>
          <h3 className="mt-4 text-3xl">The First Mic</h3>
          <p className="text-muted-foreground mt-4">
            Schools, churches, ministries and community centers anywhere in the world — host a creative writing or
            public speaking workshop with us.
          </p>
          <a href={firstMicMailto} className={buttonVariants({ variant: "outline", className: "mt-8" })}>
            Email us
          </a>
        </RevealItem>

        <RevealItem className="grain bg-ink text-ink-foreground p-10">
          <p className="eyebrow text-gold">03 · Give</p>
          <h3 className="text-ink-foreground mt-4 text-3xl">Support the work</h3>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="border-ink-foreground/15 flex items-center justify-between gap-4 border-b pb-3">
              <dt className="text-ink-foreground/60">Account name</dt>
              <dd className="text-right font-medium">{g.accountName}</dd>
            </div>
            <div className="border-ink-foreground/15 flex items-center justify-between gap-4 border-b pb-3">
              <dt className="text-ink-foreground/60">Bank</dt>
              <dd className="text-right font-medium">{g.bank}</dd>
            </div>
            <div className="border-ink-foreground/15 flex items-center justify-between gap-4 border-b pb-3">
              <dt className="text-ink-foreground/60">Account no.</dt>
              <dd className="flex items-center gap-2 font-medium">
                {g.accountNumber}
                <CopyButton value={g.accountNumber} label="account number" tone="dark" />
              </dd>
            </div>
            <div className="border-ink-foreground/15 flex items-center justify-between gap-4 border-b pb-3">
              <dt className="text-ink-foreground/60">Routing no.</dt>
              <dd className="flex items-center gap-2 font-medium">
                {g.routingNumber}
                <CopyButton value={g.routingNumber} label="routing number" tone="dark" />
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-ink-foreground/60">Zelle</dt>
              <dd className="flex items-center gap-2 font-medium break-all">
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
