import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { tattooIdeas } from "@/data/tattooIdeas";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Compass, 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Layers, 
  ArrowRight 
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tattooIdeas.map((idea) => ({
    slug: idea.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const idea = tattooIdeas.find((item) => item.slug === slug);

  if (!idea) {
    return {
      title: "Tattoo Design Not Found | TattooWorlds",
    };
  }

  return {
    title: `${idea.title}: Meanings, Placements & 2026 Ideas | TattooWorlds`,
    description: `${idea.shortDescription} Explore symbolic meaning, best body placements, pain ratings, and custom design tips.`,
    keywords: [idea.keyword, `${idea.title} ideas`, "tattoo designs", "tattoo placement", "tattooworlds"],
    alternates: {
      canonical: `https://tattooworlds.com/tattoo-ideas/${idea.slug}`,
    },
    openGraph: {
      title: `${idea.title} - Complete Design & Placement Guide`,
      description: idea.shortDescription,
      url: `https://tattooworlds.com/tattoo-ideas/${idea.slug}`,
      siteName: "TattooWorlds",
      images: [
        {
          url: idea.image,
          width: 1200,
          height: 800,
          alt: idea.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: idea.title,
      description: idea.shortDescription,
      images: [idea.image],
    },
  };
}

export default async function TattooIdeaDetailPage({ params }: Props) {
  const { slug } = await params;
  const idea = tattooIdeas.find((item) => item.slug === slug);

  if (!idea) {
    notFound();
  }

  // Pick 4 related items from same category or adjacent IDs
  const relatedIdeas = tattooIdeas
    .filter((item) => item.slug !== idea.slug)
    .sort((a, b) => (a.category === idea.category ? -1 : 1))
    .slice(0, 4);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": `${idea.title}: Meanings, Placements & Design Ideas`,
        "description": idea.shortDescription,
        "image": `https://tattooworlds.com${idea.image}`,
        "author": {
          "@type": "Organization",
          "name": "TattooWorlds Master Artists",
        },
        "publisher": {
          "@type": "Organization",
          "name": "TattooWorlds",
          "url": "https://tattooworlds.com",
        },
        "mainEntityOfPage": `https://tattooworlds.com/tattoo-ideas/${idea.slug}`,
      },
      {
        "@type": "FAQPage",
        "mainEntity": idea.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-charcoal text-white flex flex-col selection:bg-accent-gold/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-accent-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/tattoo-ideas" className="hover:text-accent-gold transition-colors">Tattoo Ideas</Link>
          <ChevronRight size={12} />
          <span className="text-gray-300 truncate max-w-xs">{idea.title}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/tattoo-ideas"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-gold hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to all {tattooIdeas.length} designs</span>
          </Link>
        </div>

        {/* Header Title */}
        <header className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-gold/15 border border-accent-gold/30 text-accent-gold">
              {idea.category}
            </span>
            <span className="text-xs font-mono text-gray-400">
              Guide #{idea.id} of {tattooIdeas.length}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
            {idea.title}: Meanings & Placement Ideas
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed font-light">
            {idea.shortDescription}
          </p>
        </header>

        {/* Hero Image Showcase */}
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl bg-black/50">
          <Image
            src={idea.image}
            alt={idea.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-charcoal/80 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono text-gray-300 border border-white/10">
            TattooWorlds Studio Design
          </div>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-charcoal-light/60 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-accent-gold font-mono">
              <Activity size={14} />
              <span>Pain Level</span>
            </div>
            <p className="text-sm font-semibold text-white">{idea.painLevel}</p>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-light/60 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-accent-gold font-mono">
              <Clock size={14} />
              <span>Healing Time</span>
            </div>
            <p className="text-sm font-semibold text-white">{idea.healingTime}</p>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-light/60 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-accent-gold font-mono">
              <Compass size={14} />
              <span>Top Placement</span>
            </div>
            <p className="text-sm font-semibold text-white">{idea.bestPlacements[0]}</p>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-light/60 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-accent-gold font-mono">
              <Layers size={14} />
              <span>Key Style</span>
            </div>
            <p className="text-sm font-semibold text-white">{idea.popularStyles[0]}</p>
          </div>
        </div>

        {/* Detailed Guide Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Section 1: Meaning & Symbolism */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2">
                Symbolic Meaning of {idea.title}
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {idea.meaning}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you select this design to honor a pivotal life milestone, celebrate personal perseverance, or simply embody its visual aesthetic, every custom line tells a personal narrative.
              </p>
            </section>

            {/* Section 2: Best Placements & Pain Guide */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2">
                Best Body Placements & Sizing
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Anatomical positioning determines how your tattoo looks in motion and how comfortably it heals. Recommended placements for this concept include:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {idea.bestPlacements.map((pl) => (
                  <span
                    key={pl}
                    className="px-3.5 py-1.5 rounded-lg bg-charcoal-light border border-accent-gold/30 text-white text-xs font-mono flex items-center gap-1.5"
                  >
                    <CheckCircle2 size={13} className="text-accent-gold" />
                    <span>{pl}</span>
                  </span>
                ))}
              </div>
            </section>

            {/* Section 3: Master Artist Advice */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2">
                Master Artist Design Tips
              </h2>
              <div className="space-y-3">
                {idea.designTips.map((tip, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-charcoal-light/40 border border-white/10 flex items-start gap-3">
                    <Sparkles size={16} className="text-accent-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: FAQs */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
                <HelpCircle size={22} className="text-accent-gold" />
                <span>Frequently Asked Questions</span>
              </h2>
              <div className="space-y-4">
                {idea.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-charcoal-light/40 border border-white/10 space-y-2">
                    <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-charcoal-light to-charcoal border border-accent-gold/30 shadow-xl space-y-4 sticky top-28">
              <div className="inline-block px-2.5 py-1 rounded-md bg-accent-gold/20 text-accent-gold text-[11px] font-mono font-semibold">
                Custom Ink Design
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Get a Custom {idea.title}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Our award-winning tattoo artists specialize in custom flash and fine-line adaptations. Bring this reference to our studio for your custom consultation.
              </p>
              <Link
                href="mailto:hello@tattooworlds.com"
                className="block w-full py-3 rounded-lg bg-accent-gold text-charcoal font-bold text-center text-sm hover:bg-white transition-colors duration-300 shadow-md"
              >
                Book Your Consultation
              </Link>
            </div>
          </aside>
        </div>

        {/* Related 4 Design Ideas (Cross Linking for SEO) */}
        <section className="mt-20 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-white">
              Related Tattoo Ideas You Might Love
            </h2>
            <Link
              href="/tattoo-ideas"
              className="text-xs font-mono text-accent-gold hover:underline flex items-center gap-1"
            >
              <span>View all {tattooIdeas.length} designs</span>
              <ChevronRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedIdeas.map((rel) => (
              <Link
                key={rel.slug}
                href={`/tattoo-ideas/${rel.slug}`}
                className="group bg-charcoal-light/30 border border-white/10 rounded-xl overflow-hidden hover:border-accent-gold/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-charcoal/90 text-[10px] font-mono text-accent-gold px-2 py-0.5 rounded">
                    {rel.category}
                  </div>
                </div>
                <div className="p-3.5 space-y-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-accent-gold transition-colors line-clamp-1">
                    {rel.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-mono">
                    Pain: {rel.painLevel.split(" ")[0]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
