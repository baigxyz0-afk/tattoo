import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 sm:py-24 bg-charcoal border-t border-accent-gold/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs uppercase tracking-widest font-mono">
              <BookOpen size={13} />
              <span>Studio Articles & Education</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
              Tattoo Guides & <span className="text-accent-gold">Trends</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Explore professional tattoo aftercare tips, 2026 trending design aesthetics, and first-timer pain charts written by our studio artists.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-gold hover:text-white transition-colors group self-start md:self-auto"
          >
            <span>View All Guides ({blogPosts.length})</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col bg-charcoal-light/40 border border-white/10 rounded-2xl overflow-hidden hover:border-accent-gold/40 hover:bg-charcoal-light/70 transition-all duration-300 shadow-xl hover:-translate-y-1.5"
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full bg-black/40 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-charcoal/90 backdrop-blur-md text-accent-gold text-[11px] font-mono px-2.5 py-1 rounded-md border border-accent-gold/30">
                  {post.category}
                </div>
              </Link>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-accent-gold transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
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
      </div>
    </section>
  );
}
