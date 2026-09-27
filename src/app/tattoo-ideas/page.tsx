import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { tattooIdeas } from "@/data/tattooIdeas";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, Compass, ShieldCheck, ArrowRight, Heart, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: `${tattooIdeas.length}+ Tattoo Ideas, Designs & Meanings (2026 Guide) | TattooWorlds`,
  description: `Browse ${tattooIdeas.length}+ curated tattoo design ideas, symbolic meanings, pain ratings, and placement guides created by master artists at TattooWorlds.`,
  alternates: {
    canonical: "https://tattooworlds.com/tattoo-ideas",
  },
  openGraph: {
    title: `${tattooIdeas.length}+ Tattoo Ideas & Aesthetic Designs | TattooWorlds`,
    description: `Find your next tattoo from our directory of ${tattooIdeas.length}+ curated design ideas, placement tips, and meanings.`,
    url: "https://tattooworlds.com/tattoo-ideas",
    siteName: "TattooWorlds",
    type: "website",
  },
};

export default function TattooIdeasDirectory() {
  const categories = [
    "All",
    "Motifs & Animals",
    "Body Placements",
    "Meanings & Memorials"
  ];

  return (
    <div className="min-h-screen bg-charcoal text-white flex flex-col selection:bg-accent-gold/30 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs uppercase tracking-widest font-mono">
            <Sparkles size={14} />
            <span>Curated Design Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
            {tattooIdeas.length}+ Tattoo <span className="text-accent-gold">Design Ideas</span> & Meanings
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Find your next piece of ink. Explore over {tattooIdeas.length} comprehensive tattoo guides covering animal symbolism, anatomical placements, pain levels, and master artist advice.
          </p>
        </header>

        {/* Categories Overview Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-charcoal-light/70 border border-white/10 text-gray-300 hover:border-accent-gold/40 hover:text-accent-gold transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Tattoo Ideas Grid */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2.5">
              <Compass size={22} className="text-accent-gold" />
              <span>All {tattooIdeas.length} Tattoo Design Inspirations</span>
            </h2>
            <span className="text-xs font-mono text-accent-gold">{tattooIdeas.length} Pages Available</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tattooIdeas.map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col bg-charcoal-light/40 border border-white/10 rounded-xl overflow-hidden hover:border-accent-gold/40 hover:bg-charcoal-light/70 transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                <Link href={`/tattoo-ideas/${item.slug}`} className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-charcoal/90 backdrop-blur-md text-accent-gold text-[10px] font-mono px-2 py-0.5 rounded border border-accent-gold/30">
                    {item.category}
                  </div>
                </Link>

                <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                      <span>Pain: {item.painLevel.split(" ")[0]}</span>
                      <span>#{item.id}</span>
                    </div>

                    <h3 className="text-base font-heading font-bold text-white group-hover:text-accent-gold transition-colors line-clamp-1">
                      <Link href={`/tattoo-ideas/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {item.meaning}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-mono">
                      {item.bestPlacements[0]}
                    </span>

                    <Link
                      href={`/tattoo-ideas/${item.slug}`}
                      className="text-xs font-semibold text-accent-gold flex items-center gap-1 hover:underline"
                    >
                      <span>Explore</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="mt-20 rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-accent-gold/20 via-charcoal-light to-charcoal border border-accent-gold/30 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Found a Design You Love?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Bring any of our {tattooIdeas.length} design ideas to our studio. Our master tattoo artists will custom-draw an original piece tailored specifically for you.
            </p>
          </div>
          <Link
            href="mailto:hello@tattooworlds.com"
            className="shrink-0 px-6 py-3.5 rounded-lg bg-accent-gold text-charcoal font-bold hover:bg-white transition-colors duration-300 shadow-lg text-sm sm:text-base flex items-center gap-2"
          >
            <span>Book Custom Tattoo</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
