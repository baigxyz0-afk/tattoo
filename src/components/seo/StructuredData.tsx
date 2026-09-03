export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Schema with SearchAction
      {
        "@type": "WebSite",
        "@id": "https://tattooworlds.com/#website",
        "url": "https://tattooworlds.com",
        "name": "TattooWorlds",
        "alternateName": ["tattooworlds.com", "Tattoo Worlds Studio", "TattooWorlds NYC"],
        "description": "Premium custom tattoo studio specializing in Realism, Black & Grey, Japanese Irezumi, Fine Line, and custom sleeve tattoos.",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://tattooworlds.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://tattooworlds.com/#portfolio?filter={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },

      // 2. Organization Schema
      {
        "@type": "Organization",
        "@id": "https://tattooworlds.com/#organization",
        "name": "TattooWorlds",
        "url": "https://tattooworlds.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://tattooworlds.com/#logo",
          "url": "https://tattooworlds.com/icon.svg",
          "caption": "TattooWorlds Studio Official Logo",
          "width": 512,
          "height": 512
        },
        "image": "https://tattooworlds.com/images/hero-bg.jpg",
        "email": "hello@tattooworlds.com",
        "telephone": "+1-234-567-890",
        "sameAs": [
          "https://instagram.com/tattooworlds",
          "https://facebook.com/tattooworlds",
          "https://twitter.com/tattooworlds"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-234-567-890",
          "contactType": "reservations & customer service",
          "email": "hello@tattooworlds.com",
          "availableLanguage": ["English", "Spanish"]
        }
      },

      // 3. TattooParlor / LocalBusiness Schema
      {
        "@type": ["TattooParlor", "HealthAndBeautyBusiness", "LocalBusiness"],
        "@id": "https://tattooworlds.com/#tattooparlor",
        "name": "TattooWorlds",
        "alternateName": "TattooWorlds Studio",
        "url": "https://tattooworlds.com",
        "logo": "https://tattooworlds.com/icon.svg",
        "image": "https://tattooworlds.com/images/hero-bg.jpg",
        "description": "TattooWorlds is an elite, hygienic custom tattoo studio in New York. Our award-winning resident artists specialize in photorealistic portraits, black & grey, Japanese Irezumi, traditional Americana, and fine line tattoos.",
        "telephone": "+1-234-567-890",
        "email": "hello@tattooworlds.com",
        "priceRange": "$$ - $$$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Cash, Credit Card, Debit Card, Apple Pay, Google Pay",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Art Street, Downtown",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "postalCode": "10001",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.7128,
          "longitude": -74.0060
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "12:00",
            "closes": "18:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "New York" },
          { "@type": "AdministrativeArea", "name": "New York State" },
          { "@type": "Country", "name": "United States" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "148",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "James Anderson" },
            "datePublished": "2026-06-15",
            "reviewBody": "Absolutely amazing experience. The artist understood exactly what I wanted and created something even better. The studio is pristine.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Emma Johnson" },
            "datePublished": "2026-07-20",
            "reviewBody": "The studio is clean, professional, and the attention to detail is incredible. My fine line piece healed perfectly thanks to their aftercare.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Daniel Smith" },
            "datePublished": "2026-08-04",
            "reviewBody": "Best tattoo experience I've ever had. Highly recommended! The consultation was thorough and the final Japanese sleeve is a masterpiece.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Tattoo Services & Pricing",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Small Tattoo",
                "description": "Minimalist designs, lettering, and tiny symbols up to 2x2 inches."
              },
              "price": "80",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Medium Tattoo",
                "description": "Palm-sized custom pieces with detailed shading and up to 3 colors."
              },
              "price": "180",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Large Tattoo",
                "description": "Half sleeves, calves, or intricate chest pieces with complex details."
              },
              "price": "350",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Sleeve Tattoo",
                "description": "Full arm or leg sleeve with cohesive bespoke storytelling artwork."
              },
              "price": "800",
              "priceCurrency": "USD"
            }
          ]
        }
      },

      // 4. Resident Artists (Person Schemas)
      {
        "@type": "Person",
        "@id": "https://tattooworlds.com/#alex-carter",
        "name": "Alex Carter",
        "jobTitle": "Lead Realism & Portrait Specialist",
        "worksFor": { "@id": "https://tattooworlds.com/#tattooparlor" },
        "description": "Expert tattoo artist with 12 years of experience specializing in photorealism and detailed portraits.",
        "image": "https://tattooworlds.com/images/artists/alex.jpg",
        "knowsAbout": ["Realism Tattoos", "Portrait Tattoos", "Micro-realism"]
      },
      {
        "@type": "Person",
        "@id": "https://tattooworlds.com/#michael-stone",
        "name": "Michael Stone",
        "jobTitle": "Master Black & Grey Artist",
        "worksFor": { "@id": "https://tattooworlds.com/#tattooparlor" },
        "description": "Specialist in smooth gradients, high-contrast monochrome depth, and gothic black and grey illustration with 8 years of experience.",
        "image": "https://tattooworlds.com/images/artists/michael.jpg",
        "knowsAbout": ["Black and Grey Tattoos", "Shading", "Chicano Style"]
      },
      {
        "@type": "Person",
        "@id": "https://tattooworlds.com/#sophia-williams",
        "name": "Sophia Williams",
        "jobTitle": "Fine Line & Minimalist Specialist",
        "worksFor": { "@id": "https://tattooworlds.com/#tattooparlor" },
        "description": "Acclaimed fine line artist creating delicate single-needle floral and micro-geometric tattoos with 5 years experience.",
        "image": "https://tattooworlds.com/images/artists/sophia.jpg",
        "knowsAbout": ["Fine Line Tattoos", "Single Needle", "Botanical Tattoos"]
      },
      {
        "@type": "Person",
        "@id": "https://tattooworlds.com/#daniel-cruz",
        "name": "Daniel Cruz",
        "jobTitle": "Traditional Americana & Japanese Irezumi Master",
        "worksFor": { "@id": "https://tattooworlds.com/#tattooparlor" },
        "description": "Veteran tattoo artist with 15 years mastering bold lines, classic Americana flash, and Japanese dragon & koi mythology.",
        "image": "https://tattooworlds.com/images/artists/daniel.jpg",
        "knowsAbout": ["Japanese Irezumi", "Traditional Americana", "Large Body Suits"]
      },

      // 5. HowTo Schema (The Tattoo Process)
      {
        "@type": "HowTo",
        "@id": "https://tattooworlds.com/#process",
        "name": "How to Get a Custom Tattoo at TattooWorlds",
        "description": "The step-by-step professional process for getting a custom tattoo from initial consultation to complete healing.",
        "totalTime": "P1D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Consultation",
            "text": "Discuss your idea, body placement, size, and style preferences with our resident artist to establish the creative direction."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Custom Design",
            "text": "The artist crafts a tailored sketch and digital mock-up, collaborating with you on revisions until it is flawless."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Sanitization & Preparation",
            "text": "Single-use sterile needles, medical-grade barrier films, and hospital-grade sterilization are set up in front of you."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Tattoo Session",
            "text": "The tattoo is applied with precision, comfort breaks, and premium inks engineered for vibrant, lifelong retention."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Aftercare Protocol",
            "text": "Receive medical dermal wrap, healing ointment recommendations, and step-by-step instructions for optimal 2-week recovery."
          }
        ]
      },

      // 6. FAQPage Schema for AI Overviews & Rich Snippets
      {
        "@type": "FAQPage",
        "@id": "https://tattooworlds.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a tattoo cost at TattooWorlds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our studio minimum is $80 for small minimalist pieces. Medium palm-sized tattoos start at $180, large pieces and half-sleeves start at $350, and full custom sleeves start at $800. Final pricing depends on size, placement, and design complexity."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need an appointment or do you accept walk-ins?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept walk-ins based on daily artist availability for small flash pieces. However, we highly recommend booking an appointment in advance, particularly for custom artwork and multi-hour projects."
            }
          },
          {
            "@type": "Question",
            "name": "How should I prepare for my tattoo appointment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Get a full night's sleep, eat a substantial meal beforehand, and drink plenty of water. Avoid alcohol and aspirin/blood thinners for 24 hours prior. Dress comfortably in clothing providing easy access to the tattoo site."
            }
          },
          {
            "@type": "Question",
            "name": "What tattoo styles does TattooWorlds specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TattooWorlds specializes in Photorealism, Black & Grey, Japanese Irezumi, Traditional Americana, Fine Line, Geometric, Lower Back, and Custom Masculine & Feminine tattoo designs."
            }
          },
          {
            "@type": "Question",
            "name": "What is the legal age requirement to get tattooed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clients must be at least 18 years of age. A valid government-issued photo ID (passport, driver's license, or state ID) is strictly mandatory at the appointment."
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
              "text": "Yes! You can provide reference sketches, photos, or digital art. Our resident artists collaborate with you to adapt the artwork so it flows naturally with your anatomy and ages beautifully."
            }
          },
          {
            "@type": "Question",
            "name": "Does TattooWorlds offer free consultations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide complimentary one-on-one consultations in person or via phone/WhatsApp to discuss your vision, sizing, placement, and pricing before you book."
            }
          }
        ]
      },

      // 7. BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": "https://tattooworlds.com/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tattooworlds.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tattoo Styles",
            "item": "https://tattooworlds.com#styles"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Artists",
            "item": "https://tattooworlds.com#artists"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Portfolio Gallery",
            "item": "https://tattooworlds.com#portfolio"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Pricing",
            "item": "https://tattooworlds.com#pricing"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Booking Consultation",
            "item": "https://tattooworlds.com#booking"
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
