"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { navItems } from "@/lib/content";
import { site } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const logo = (
    <Image src="/logo.png" alt={site.name} width={247} height={143} priority className="h-10 w-auto" />
  );

  return (
    <header className="bg-background/90 sticky top-0 z-40 pt-[env(safe-area-inset-top,0px)] backdrop-blur-sm">
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <a href="#top" aria-label={`${site.name}, back to top`} className="block leading-none">
          {logo}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/70 hover:text-foreground text-[0.82rem] font-bold tracking-[0.1em] uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#involved" className={buttonVariants({ className: "bg-ink border-ink hidden sm:inline-flex" })}>
            Give
          </a>
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            Menu
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          id="site-menu"
          side="top"
          aria-label="Site menu"
          className="h-dvh gap-0 overflow-y-auto rounded-none border-0 pt-[env(safe-area-inset-top,0px)] pb-8 sm:max-w-none"
        >
          <SheetTitle className="sr-only">Site menu</SheetTitle>
          <div className="wrap flex h-[72px] items-center justify-between">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              aria-label={`${site.name}, back to top`}
              className="block leading-none"
            >
              {logo}
            </a>
          </div>
          <nav aria-label="Main" className="wrap mt-7 grid gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:text-flame font-display text-[clamp(2rem,7vw,4.5rem)] leading-[1.15] no-underline hover:italic"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#involved"
              onClick={() => setOpen(false)}
              className="hover:text-flame font-display text-[clamp(2rem,7vw,4.5rem)] leading-[1.15] no-underline hover:italic"
            >
              Give
            </a>
          </nav>
          <p className="wrap text-muted-foreground mt-8 text-[0.95rem] break-words">
            Instagram{" "}
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="text-foreground">
              {site.instagram.handle}
            </a>
            {" · "}
            <a href={`mailto:${site.email}`} className="text-foreground">
              {site.email}
            </a>
          </p>
        </SheetContent>
      </Sheet>
    </header>
  );
}
