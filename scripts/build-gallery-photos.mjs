// Resizes and compresses the source event photos in src/assets/* down to
// web-friendly sizes, writing the results into public/photos/gallery/<category>/.
// Run again any time new photos are added to src/assets.
//
// Usage: node scripts/build-gallery-photos.mjs

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(import.meta.dirname, "..");
const MAX_EDGE = 2200;
const QUALITY = 82;
const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

const CATEGORIES = [
  { src: "src/assets/lagos", dest: "public/photos/gallery/lagos" },
  { src: "src/assets/newYork", dest: "public/photos/gallery/new-york" },
  { src: "src/assets/loude&clear", dest: "public/photos/gallery/loud-and-clear" },
];

async function run() {
  for (const { src, dest } of CATEGORIES) {
    const srcDir = path.join(ROOT, src);
    const destDir = path.join(ROOT, dest);
    fs.mkdirSync(destDir, { recursive: true });

    const files = fs
      .readdirSync(srcDir)
      .filter((f) => IMAGE_RE.test(f))
      .sort((a, b) => a.localeCompare(b));

    console.log(`\n${src} -> ${dest} (${files.length} photos)`);

    let i = 0;
    for (const file of files) {
      i += 1;
      const outName = `${String(i).padStart(3, "0")}.jpg`;
      const inPath = path.join(srcDir, file);
      const outPath = path.join(destDir, outName);

      await sharp(inPath)
        .rotate() // auto-orient from EXIF, then the metadata is dropped below
        .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(outPath);

      process.stdout.write(`  ${file} -> ${outName}\r`);
    }
    console.log(`  done: ${files.length} photos written.`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
