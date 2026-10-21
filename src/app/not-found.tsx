import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center py-16">
      <div className="wrap">
        <p className="text-brand-deep m-0 mb-[1.1rem] block text-[0.78rem] font-bold tracking-[0.14em] uppercase">
          404
        </p>
        <h1 className="mb-4 text-[clamp(2.4rem,8vw,5rem)]">
          This page <em>went quiet</em>
        </h1>
        <p className="text-muted-foreground mb-7">We could not find what you were looking for.</p>
        <Link className={buttonVariants()} href="/">
          Back to the home page
        </Link>
      </div>
    </main>
  );
}
