import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { findPhoto } from "@/lib/photos";

type Props = {
  /** File name (without extension) inside public/photos/ */
  slot: string;
  /** Use this exact public path instead of looking up `slot` — e.g. a photo already in public/photos/gallery/<city>/ */
  src?: string;
  alt: string;
  /** Label shown on the placeholder until a photo is added */
  label: string;
  hint?: string;
  className?: string;
  /** Extra classes for the <Image> itself — e.g. object-position to favor a part of the photo */
  imgClassName?: string;
  priority?: boolean;
  /** Tells the browser how wide the image will be, so it downloads the right size */
  sizes: string;
  children?: ReactNode;
};

/** A photo frame. Shows the real photo if public/photos/<slot>.* exists, otherwise a placeholder. */
export default function PhotoSlot({ slot, src: srcOverride, alt, label, hint, className, imgClassName, priority, sizes, children }: Props) {
  const src = srcOverride ?? findPhoto(slot);
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[1.125rem] bg-[linear-gradient(135deg,#ffebdf,#ffd9c2)] shadow-[0_1px_2px_rgba(38,35,34,0.04),0_12px_28px_-12px_rgba(38,35,34,0.22)]",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
      ) : (
        <div className="absolute inset-x-4 bottom-3.5 text-xs leading-snug font-medium tracking-wide text-[#8a4b2e] uppercase">
          <b className="mb-0.5 block font-bold text-[#5a2a14]">Photo slot: {label}</b>
          {hint}
        </div>
      )}
      {children}
    </div>
  );
}
