import EditorialPhoto from "./EditorialPhoto";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { programmes } from "@/lib/content";
import type { GalleryCategory, GalleryPhoto } from "@/lib/gallery";
import { site } from "@/lib/site";

function selectPhoto(categories: GalleryCategory[], index: number): GalleryPhoto | undefined {
  const bySlug = (slug: string) => categories.find((c) => c.slug === slug)?.photos ?? [];
  const selections = [
    bySlug("lagos"),
    bySlug("new-york"),
    bySlug("lagos"),
    bySlug("loud-and-clear"),
  ];
  const photos = selections[index];
  return photos?.[index === 3 ? 7 : index === 2 ? 10 : index === 1 ? 5 : 2] ?? photos?.[0];
}

export default function Programmes({ categories }: { categories: GalleryCategory[] }) {
  return (
    <section id="programmes" aria-labelledby="programmes-title" className="scroll-mt-20 overflow-hidden bg-[#ede0d0] py-20 md:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-clay">02 / The work we do</p>
          <h2 id="programmes-title" className="mt-6 max-w-5xl !text-[clamp(3.5rem,8vw,8rem)] !leading-[0.94] !tracking-[-0.055em]">
            Every voice <em className="text-flame">has a story.</em>
          </h2>
          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-relaxed">
            From the first line on a page to the courage of standing before an audience, our programmes make room for creative growth.
          </p>
        </Reveal>
      </div>
      <div className="mt-14 md:mt-24">
        {programmes.map((p, index) => (
          <article key={p.id} className="border-t border-[#bba996]/70 py-14 md:py-24">
            <div className={`wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal className="relative">
                <EditorialPhoto
                  photo={selectPhoto(categories, index)}
                  alt={index === 3 ? "Young participants at the Loud and Clear workshop in Chicago" : index === 2 ? "A Poets Speak Louder creative workshop in Lagos" : index === 1 ? "Poets Speak Louder workshop event in New York" : "Poets Speak Louder creative community event in Lagos"}
                  caption={index === 3 ? "Loud & Clear / Chicago" : index === 2 ? "Workshop / Lagos" : index === 1 ? "Community moments / New York" : "Community moments / Lagos"}
                  className={`w-full ${index % 2 ? "aspect-[4/5]" : "aspect-[5/4]"}`}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <span className="absolute -bottom-5 right-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6c37] font-display text-3xl italic text-[#1a1714] md:h-28 md:w-28 md:text-5xl">{p.roman}</span>
              </Reveal>
              <Reveal className="lg:px-4">
                <p className="eyebrow text-[#a34226]">{p.tag}</p>
                <h3 className="mt-5 !text-[clamp(2.8rem,5vw,5rem)] !leading-[1] !tracking-[-0.045em]">{p.title}</h3>
                <p className="mt-7 font-display text-xl italic leading-snug text-[#a34226] md:text-2xl">{p.text}</p>
                <p className="text-muted-foreground mt-6 leading-[1.9]">{p.details}</p>
                {p.topics && (
                  <div className="mt-7">
                    <p className="eyebrow text-clay mb-3">What we explore</p>
                    <ul className="grid gap-2 text-sm leading-relaxed">
                      {p.topics.map((topic) => <li key={topic} className="border-l-2 border-[#e9693c] pl-4">{topic}</li>)}
                    </ul>
                  </div>
                )}
                <p className="mt-8 border-t border-[#bba996] pt-5 text-sm font-bold">{p.fact}</p>
                <a href={index === 3 ? `mailto:${site.email}?subject=The%20First%20Mic` : site.joinUrl} target={index === 3 ? undefined : "_blank"} rel={index === 3 ? undefined : "noopener noreferrer"} className="mt-6 inline-flex items-center gap-3 border-b border-[#b94725] pb-2 text-sm font-bold text-[#b94725] hover:text-[#772b18]">
                  {index === 3 ? "Bring this to your community" : "Connect with our community"} <span aria-hidden="true">↗</span>
                </a>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
