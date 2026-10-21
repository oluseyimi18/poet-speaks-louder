import About from "@/components/About";
import CityTicker from "@/components/CityTicker";
import Gallery from "@/components/Gallery";
import GetInvolved from "@/components/GetInvolved";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Programmes from "@/components/Programmes";
import QuoteStats from "@/components/QuoteStats";
import SiteHeader from "@/components/SiteHeader";
import Signoff from "@/components/Signoff";
import { getGalleryCategories } from "@/lib/gallery";

export default async function HomePage() {
  const categories = await getGalleryCategories();

  return (
    <>
      <a
        href="#main"
        className="bg-flame fixed top-[-4rem] left-4 z-[100] rounded-lg px-[1.1rem] py-[0.7rem] font-semibold text-white no-underline transition-[top] duration-150 focus:top-[calc(env(safe-area-inset-top,0px)+0.8rem)]"
      >
        Skip to main content
      </a>
      <div id="top" />
      <SiteHeader />
      <main id="main">
        <Hero />
        {/* <CityTicker /> */}
        <QuoteStats />
        <About />
        <Programmes />
        <Gallery categories={categories} />
        <GetInvolved />
        <Signoff />
      </main>
      <JsonLd />
    </>
  );
}
