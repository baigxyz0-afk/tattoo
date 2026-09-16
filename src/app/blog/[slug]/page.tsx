import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Tag, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Sparkles, 
  ChevronRight,
  BookOpen
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | TattooWorlds",
    };
  }

  return {
    title: `${post.title} | TattooWorlds Guides`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://tattooworlds.com/blog/${post.slug}`,
      siteName: "TattooWorlds",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://tattooworlds.com${post.image}`,
    "datePublished": post.publishDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "TattooWorlds",
      "url": "https://tattooworlds.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://tattooworlds.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-charcoal text-white flex flex-col selection:bg-accent-gold/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-accent-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blog" className="hover:text-accent-gold transition-colors">Blog</Link>
          <ChevronRight size={12} />
          <span className="text-gray-300 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-gold hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to all guides</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-gold/15 border border-accent-gold/30 text-accent-gold">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs font-mono flex items-center gap-1">
              <Clock size={13} /> {post.readTime}
            </span>
            <span className="text-gray-400 text-xs font-mono flex items-center gap-1">
              <Calendar size={13} /> {post.publishDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
            {post.excerpt}
          </p>

          {/* Author Bar */}
          <div className="flex items-center justify-between py-4 border-y border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-accent-gold/40 relative bg-black/40">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-white text-sm sm:text-base">{post.author.name}</p>
                <p className="text-xs text-gray-400 font-mono">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
              <Sparkles size={14} className="text-accent-gold" />
              <span>Verified Studio Guide</span>
            </div>
          </div>
        </header>

        {/* Hero Article Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl bg-black/50">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {/* Content & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content */}
          <article className="lg:col-span-8 space-y-8">
            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="p-5 rounded-xl bg-charcoal-light/50 border border-white/10 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-accent-gold font-bold flex items-center gap-2">
                  <BookOpen size={14} />
                  <span>In This Article</span>
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {post.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a href={`#${toc.id}`} className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
                        <ChevronRight size={12} className="text-accent-gold/60" />
                        <span>{toc.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections */}
            {post.content.map((sec, idx) => (
              <section key={sec.id || idx} id={sec.id} className="space-y-4 pt-2">
                {sec.heading && (
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight border-b border-white/10 pb-2">
                    {sec.heading}
                  </h2>
                )}

                {sec.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {p}
                  </p>
                ))}

                {sec.callout && (
                  <div className={`p-5 rounded-xl border flex items-start gap-4 ${
                    sec.callout.type === 'warning'
                      ? 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                      : sec.callout.type === 'tip'
                      ? 'bg-accent-gold/10 border-accent-gold/30 text-gray-200'
                      : 'bg-blue-950/20 border-blue-500/30 text-blue-200'
                  }`}>
                    <AlertCircle size={20} className="shrink-0 text-accent-gold mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">{sec.callout.title}</h4>
                      <p className="text-sm opacity-90 leading-relaxed">{sec.callout.content}</p>
                    </div>
                  </div>
                )}

                {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                  <div className="p-5 rounded-xl bg-charcoal-light/60 border border-accent-gold/20 space-y-3 my-4">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-accent-gold font-bold flex items-center gap-2">
                      <CheckCircle2 size={15} />
                      <span>Key Takeaways</span>
                    </h4>
                    <ul className="space-y-2">
                      {sec.keyTakeaways.map((item, kIdx) => (
                        <li key={kIdx} className="text-sm text-gray-300 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* FAQs Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="pt-8 space-y-4 border-t border-white/10">
                <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
                  <HelpCircle size={22} className="text-accent-gold" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-4">
                  {post.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-5 rounded-xl bg-charcoal-light/40 border border-white/10 space-y-2">
                      <h4 className="text-base font-semibold text-white">{faq.question}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1 mr-2">
                <Tag size={13} /> Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-charcoal-light/80 border border-white/10 text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Consultation Booking Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-charcoal-light to-charcoal border border-accent-gold/30 shadow-xl space-y-4 sticky top-28">
              <div className="inline-block px-2.5 py-1 rounded-md bg-accent-gold/20 text-accent-gold text-[11px] font-mono font-semibold">
                Studio Appointment
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Ready to Bring Your Design to Life?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Connect with our expert artists at TattooWorlds for custom flash art, cover-ups, or single-needle fine line tattoos.
              </p>
              <Link
                href="/#contact"
                className="block w-full py-3 rounded-lg bg-accent-gold text-charcoal font-bold text-center text-sm hover:bg-white transition-colors duration-300 shadow-md"
              >
                Schedule Free Consultation
              </Link>
            </div>

            {/* Pinterest Pin Asset Card */}
            <div className="p-6 rounded-2xl bg-charcoal-light/40 border border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-gold font-bold">
                Pinterest Tattoo Inspiration
              </h4>
              <p className="text-xs text-gray-300">
                Found a tattoo you love? Pin it directly to your aesthetic boards or save our flash sheets for your next appointment.
              </p>
              <Link
                href="/#tattoo-ideas"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-gold hover:text-white transition-colors"
              >
                <span>Browse Tattoo Ideas Hub</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              More Tattoo Guides & Inspirations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-charcoal-light/30 border border-white/10 rounded-xl overflow-hidden hover:border-accent-gold/40 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full bg-black/40 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="text-[11px] font-mono text-accent-gold">{rel.category}</span>
                    <h4 className="text-sm font-bold text-white group-hover:text-accent-gold transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
