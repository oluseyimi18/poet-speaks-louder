# Poets Speak Louder: website

Next.js 16 (App Router) · React 19 · TypeScript · no UI framework. Fully static, fast and SEO-ready.

## Quick start

```bash
npm install
cp .env.example .env.local     # then edit NEXT_PUBLIC_SITE_URL
npm run dev                    # http://localhost:3000
```

| Command             | What it does                              |
|---------------------|-------------------------------------------|
| `npm run dev`       | Development server with hot reload        |
| `npm run build`     | Production build                          |
| `npm start`         | Serve the production build                |
| `npm run typecheck` | TypeScript check                          |
| `npm run lint`      | ESLint (Next.js core-web-vitals rules)    |

Requires Node.js 20.9 or newer.

## Project layout

```
public/
  logo.png                 logo
  photos/                  PUT PHOTOS HERE (see below)
    gallery/                 Lagos / New York / Loud & Clear galleries (generated, see below)
src/
  app/
    layout.tsx             site-wide SEO metadata, fonts, viewport
    page.tsx               the home page (assembles the sections)
    globals.css            all styles (brand colours + breakpoints at the top)
    sitemap.ts             /sitemap.xml
    robots.ts              /robots.txt
    opengraph-image.tsx    the preview picture used when the site is shared
    twitter-image.tsx      same picture for X/Twitter
    icon.png, apple-icon.png   favicon and home-screen icon
    not-found.tsx          404 page
  assets/                  original, full-size event photos (source for the gallery script)
  components/              one file per section (Hero, About, Programmes, ...)
  lib/
    site.ts                name, URL, email, links, bank details  <- edit facts here
    content.ts             programmes, numbers, timeline, nav     <- edit wording here
    photos.ts              finds photos in public/photos
    gallery.ts             lists public/photos/gallery/<category> for the Gallery section
scripts/
  build-gallery-photos.mjs  resizes src/assets/* into public/photos/gallery/*
```

## Add photos

Every slot below already has a real photo (copied from the event galleries). To swap one
out, save a new photo into `public/photos/` using the file name below and rebuild
(`npm run build`, or just push to GitHub and Vercel rebuilds). `.jpg`, `.jpeg`,
`.webp`, `.png` and `.avif` all work. A slot with no file falls back to a peach placeholder.

| File name   | Where it appears                       | Best shape            |
|-------------|----------------------------------------|-----------------------|
| `hero`      | Top of the page                        | Vertical or landscape |
| `about`     | "Who we are" portrait                  | Vertical              |
| `tile1`     | PSL Global Community card              | Vertical              |
| `tile2`     | Spoken Word Bootcamp card              | Vertical              |
| `tile3`     | In the Beginning was the Word card     | Vertical              |
| `tile4`     | The First Mic card                     | Vertical              |
| `feature`   | Loud & Clear (Chicago)                 | Landscape or square   |
| `give`      | Give section                           | Vertical              |

Next.js automatically resizes and converts every photo to AVIF/WebP for each screen size,
so you can upload the originals (up to roughly 3000 px wide is plenty). Describe each
photo for screen readers and Google Images by editing the `photoAlt` text in
`src/lib/content.ts` (programme cards) and the `alt` props in the section components.

## Galleries (Lagos / New York / Loud & Clear)

There isn't one combined "Gallery" section — each location gets its own section
(`src/components/GallerySection.tsx`), and the three are spread out between the other
sections instead of stacked together:

```
Hero → About → Lagos gallery → Programmes → New York gallery
→ Numbers → Feature → Loud & Clear gallery → Give → Timeline → Join → Signoff
```

Each one is a mosaic (one large photo, four smaller, repeating) built with
`src/components/LocationGallery.tsx`; clicking a photo opens a full-screen viewer with
previous/next and keyboard arrow navigation. To reorder or re-place a gallery, move its
`<GallerySection slug="..." .../>` line in `src/app/page.tsx`. The first one (Lagos) carries
`id="gallery"` so the nav link still works.

Each section reads whatever is in `public/photos/gallery/<category>/`
(`src/lib/gallery.ts`) — add a new `CATEGORY_META` entry there plus a matching
`<GallerySection>` in `page.tsx` to add a fourth location.

The originals live in `src/assets/<category>/` (large camera/phone files, not deployed as-is).
To regenerate the web-sized copies after adding or changing photos there:

```bash
npm run photos:build
```

This resizes each photo to a 2200px-long-edge JPEG and writes it into
`public/photos/gallery/<category>/001.jpg`, `002.jpg`, ... — that's what actually ships.
Edit the category titles and blurbs in `CATEGORY_META` in `src/lib/gallery.ts`.

## SEO: what is built in, and what to do at launch

Built in:
- Title, description, canonical URL, Open Graph and Twitter cards, `robots` directives
- JSON-LD structured data (NGO and WebSite) in `src/components/JsonLd.tsx`
- `/sitemap.xml` and `/robots.txt`
- A generated 1200x630 share image (`/opengraph-image`) for WhatsApp, Facebook, X, LinkedIn
- One `<h1>`, a logical heading order, landmarks, skip link, alt text on every image
- Statically generated HTML, optimised images and self-hosted fonts for fast loading

At launch:
1. Set `NEXT_PUBLIC_SITE_URL` to the real domain (here and in Vercel, Settings, Environment
   Variables). Until you do, canonical links, the sitemap and share previews point at a placeholder.
2. Add the site to Google Search Console and submit `https://YOUR-DOMAIN/sitemap.xml`.
   For the meta-tag verification method, put the token in `GOOGLE_SITE_VERIFICATION`.
3. Add real photos and check the share preview with the Facebook Sharing Debugger.
4. Replace the keyword list in `src/app/layout.tsx` if her focus changes.

## Responsive design

Mobile-first and tested from 320 px phones to 4K screens, including phones held sideways,
tablets in both orientations and laptops. Fluid type and spacing, no horizontal scrolling,
44 px touch targets, notch/safe-area support, larger text on big screens, reduced-motion
and print styles. Breakpoints are at the bottom of `src/app/globals.css`.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose Add New, Project, and import it. Framework preset: Next.js (detected).
3. Add the environment variable `NEXT_PUBLIC_SITE_URL`.
4. Deploy, then add the custom domain under Settings, Domains.

## Confirm with the client before launch

- **Bank details.** The Give section shows the full account number, routing number and Zelle
  email (`site.giving` in `src/lib/site.ts`). Confirm she is happy for these to be public, or
  replace the block with a "contact us for giving details" button.
- **Domain, email and links** in `src/lib/site.ts`.
- **Testimonials.** None are included because none were supplied. Add a section once she has
  real quotes from members.
- **Logo file.** `public/logo.png` is small. Ask for an SVG or a large PNG for sharper results
  on big and high-density screens, and for a proper square icon to replace `src/app/icon.png`.
