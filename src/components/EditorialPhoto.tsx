import Image from "next/image";
import type { GalleryPhoto } from "@/lib/gallery";

type Props = {
  photo?: GalleryPhoto;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  caption?: string;
};

/** Displays a real gallery image with a designed fallback if a category is empty. */
export default function EditorialPhoto({
  photo,
  alt,
  className = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  caption,
}: Props) {
  return (
    <figure className={`relative isolate m-0 overflow-hidden bg-[#dfc5a8] ${className}`}>
      {photo ? (
        <Image
          src={photo.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.035]"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#c5a17f,#f6e9d8)]" aria-hidden="true" />
      )}
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-5 pt-14 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
