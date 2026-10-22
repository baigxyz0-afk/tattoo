export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://www.tattooworlds.com/#website",
        "url": "https://www.tattooworlds.com",
        "name": "TattooWorlds",
        "alternateName": ["tattooworlds.com", "TattooWorlds Studio"],
        "description": "Explore tattoo ideas, tattoo designs, popular tattoo styles, inspiration, portfolios, and tattoo guides.",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.tattooworlds.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.tattooworlds.com/tattoo-ideas?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },

      // 2. Organization Schema
      {
        "@type": "Organization",
        "@id": "https://www.tattooworlds.com/#organization",
        "name": "TattooWorlds",
        "url": "https://www.tattooworlds.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.tattooworlds.com/#logo",
          "url": "https://www.tattooworlds.com/icon.svg",
          "caption": "TattooWorlds Official Logo",
          "width": 512,
          "height": 512
        },
        "image": "https://www.tattooworlds.com/images/hero-bg.jpg",
        "email": "hello@tattooworlds.com",
        "sameAs": [
          "https://instagram.com/tattooworlds",
          "https://facebook.com/tattooworlds",
          "https://twitter.com/tattooworlds"
        ],
        "knowsAbout": [
          "Tattoo ideas and designs",
          "Tattoo ideas for men and women",
          "Small and minimalist tattoo designs",
          "Fine line tattoos and black & grey realism",
          "Japanese Irezumi and American traditional tattoos",
          "Sleeve, forearm, wrist, chest, back, and spine tattoo placements",
          "Floral, rose, butterfly, lion, wolf, tiger, snake, dragon, skull, and mandala tattoo motifs",
          "Tattoo aftercare routines and healing process",
          "Tattoo trends 2026"
        ]
      },

      // 3. WebPage Schema for Homepage
      {
        "@type": "WebPage",
        "@id": "https://www.tattooworlds.com/#webpage",
        "url": "https://www.tattooworlds.com",
        "name": "Tattoo Ideas, Designs & Styles | TattooWorlds",
        "description": "Explore tattoo ideas, tattoo designs, popular tattoo styles, inspiration, portfolios, and tattoo guides to find the perfect design for your next tattoo.",
        "isPartOf": {
          "@id": "https://www.tattooworlds.com/#website"
        },
        "about": {
          "@id": "https://www.tattooworlds.com/#organization"
        },
        "inLanguage": "en-US"
      },

      // 4. BreadcrumbList Schema with valid full URLs
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tattooworlds.com/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tattooworlds.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tattoo Ideas",
            "item": "https://www.tattooworlds.com/tattoo-ideas"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tattoo Blog",
            "item": "https://www.tattooworlds.com/blog"
          }
        ]
      },

      // 5. FAQPage Schema
      {
        "@type": "FAQPage",
        "@id": "https://www.tattooworlds.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do custom tattoo consultations work at TattooWorlds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide custom consultations where you collaborate with resident artists on sizing, anatomical placement, and bespoke concept sketches."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need an appointment or do you accept walk-ins?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept walk-ins based on daily artist availability for small flash pieces. However, we highly recommend booking an appointment in advance for custom artwork."
            }
          },
          {
            "@type": "Question",
            "name": "How should I prepare for my tattoo appointment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Get a full night's sleep, eat a substantial meal beforehand, and drink plenty of water. Avoid alcohol and aspirin for 24 hours prior. Dress comfortably in clothing providing easy access to the tattoo site."
            }
          },
          {
            "@type": "Question",
            "name": "What tattoo styles does TattooWorlds feature?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TattooWorlds features Minimalist, Fine Line, Realism, Black and Grey, Floral, Japanese Irezumi, Traditional Americana, Geometric, and Custom Sleeve tattoo styles."
            }
          },
          {
            "@type": "Question",
            "name": "What is the recommended tattoo aftercare routine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Keep the bandage on as directed, wash gently with fragrance-free antibacterial soap, pat dry with a clean paper towel, apply a thin layer of recommended healing balm, and keep the tattoo protected from direct sunlight and swimming for 2 to 3 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Can I bring my own custom design or reference pictures?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! You can provide reference sketches, photos, or digital art. Our resident artists collaborate with you to adapt the artwork so it flows naturally with your anatomy."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
