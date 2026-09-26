import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, User, ArrowRight, Sparkles, Tag, BookOpen, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Tattoo Guides, Trends & Inspiration Blog | TattooWorlds",
  description: "Read expert tattoo guides, 2026 trending styles, aftercare routines, pain charts, and artist advice curated by the TattooWorlds team.",
  alternates: {
    canonical: "https://tattooworlds.com/blog",
  },
  openGraph: {
    title: "Tattoo Inspiration & Education Blog | TattooWorlds",
    description: "Explore in-depth tattoo styles, aftercare guides, and 2026 design trends.",
    url: "https://tattooworlds.com/blog",
    siteName: "TattooWorlds",
    type: "website",
  },
};

export default function BlogListingPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);
  const allCategories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="min-h-screen bg-charcoal text-white flex flex-col selection:bg-accent-gold/30 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs uppercase tracking-widest font-mono">
            <Sparkles size={14} className="animate-spin-slow" />
            <span>TattooWorlds Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
            Tattoo Guides, Trends & <span className="text-accent-gold">Aesthetic Inspiration</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Master the art of ink. From essential aftercare checklists to 2026 design trends and body placement guides, explore our expert-written articles.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-mono mr-1">Categories:</span>
            {allCategories.map((cat) => (
              <span
                key={cat}
                className="text-xs px-3 py-1 rounded-full bg-charcoal-light/60 border border-white/10 text-gray-300 hover:border-accent-gold/50 hover:text-accent-gold transition-colors cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Hero Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="relative rounded-2xl overflow-hidden border border-accent-gold/20 bg-gradient-to-br from-charcoal-light/80 to-charcoal shadow-2xl group transition-all duration-300 hover:border-accent-gold/40">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
                {/* Featured Image */}
                <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[380px] w-full rounded-xl overflow-hidden bg-black/40">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-accent-gold text-charcoal text-xs font-bold font-mono px-3 py-1 rounded-md shadow-md flex items-center gap-1.5">
                    <Flame size={14} />
                    <span>FEATURED ARTICLE</span>
                  </div>
                </div>

                {/* Featured Text */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                    <span className="text-accent-gold font-semibold uppercase">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {featuredPost.publishDate}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white group-hover:text-accent-gold transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-accent-gold/40 relative">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{featuredPost.author.name}</p>
                        <p className="text-[11px] text-gray-400">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent-gold hover:text-white transition-colors group/btn"
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Articles Grid */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2.5">
              <BookOpen size={22} className="text-accent-gold" />
              <span>Latest Tattoo Guides & Articles</span>
            </h2>
            <span className="text-xs font-mono text-gray-400">{blogPosts.length} Guides Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-charcoal-light/40 border border-white/10 rounded-xl overflow-hidden hover:border-accent-gold/40 hover:bg-charcoal-light/70 transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                {/* Card Image */}
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-charcoal/90 backdrop-blur-md text-accent-gold text-[11px] font-mono px-2.5 py-0.5 rounded border border-accent-gold/30">
                    {post.category}
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-[11px] font-mono text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {post.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-accent-gold transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full overflow-hidden border border-accent-gold/30 relative">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-300 font-medium">{post.author.name}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-accent-gold flex items-center gap-1 hover:underline"
                    >
                      <span>Read More</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pinterest & Design Consultation CTA Banner */}
        <section className="mt-20 rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-accent-gold/20 via-charcoal-light to-charcoal border border-accent-gold/30 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Have a Custom Tattoo Concept in Mind?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Bring your Pinterest boards, flash art references, or unique ideas to our studio for a personalized 1-on-1 consultation with our award-winning artists.
            </p>
          </div>
          <Link
            href="mailto:hello@tattooworlds.com"
            className="shrink-0 px-6 py-3.5 rounded-lg bg-accent-gold text-charcoal font-bold hover:bg-white transition-colors duration-300 shadow-lg text-sm sm:text-base flex items-center gap-2"
          >
            <span>Book Your Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
