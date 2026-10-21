import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "webp", "png", "avif"] as const;

/**
 * Looks for public/photos/<slot>.<ext> at build time.
 * Returns the public URL if a photo exists, otherwise null (the page shows a placeholder).
 */
export function findPhoto(slot: string): string | null {
  const dir = path.join(process.cwd(), "public", "photos");
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(dir, `${slot}.${ext}`))) return `/photos/${slot}.${ext}`;
  }
  return null;
}
