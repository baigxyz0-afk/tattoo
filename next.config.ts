import type { NextConfig } from "next";

const deletedTattooSlugs = [
  "outer-bicep-classic-tattoo",
  "inner-bicep-private-lettering-tattoo",
  "elbow-cap-mandala-spiderweb-tattoo",
  "kneecap-circular-rose-tattoo",
  "solid-black-armband-memorial-tattoo",
  "full-body-suit-living-canvas-tattoo",
  "side-torso-to-thigh-branch-tattoo",
  "back-of-neck-hairline-tattoo",
  "thumb-knuckle-dainty-icons-tattoo",
  "ankle-to-calf-climbing-vine-tattoo",
  "mirrored-wrist-handshake-tattoo",
  "outer-ribs-micro-typography-poem",
  "shoulder-to-neck-wing-tattoo",
  "back-of-calf-twin-columns-tattoo",
  "clavicle-to-shoulder-floral-garland",
  "fine-line-single-needle-tattoo",
  "neo-traditional-rich-palette-tattoo",
  "american-traditional-old-school-flash",
  "black-grey-realism-portrait-tattoo",
  "watercolor-splatter-bleed-tattoo",
  "cyber-sigilism-neo-tribal-tattoo",
  "geometric-dotwork-stippling-tattoo",
  "trash-polka-chaos-crimson-tattoo",
  "chicano-custom-lettering-tattoo",
  "anime-linework-manga-panel-tattoo",
  "glitch-art-3d-chromatic-tattoo",
  "micro-realism-coin-sized-tattoo",
  "blackwork-heavy-blackout-tattoo",
  "ignorant-style-doodle-tattoo",
  "woodcut-medieval-etching-tattoo",
  "interlocking-couple-matching-tattoo",
  "mother-daughter-eternal-bond-tattoo",
  "best-friends-sisterhood-tattoo",
  "memorial-angel-wing-name-tattoo",
  "roman-numerals-milestone-date-tattoo",
  "geographic-gps-coordinates-tattoo",
  "fingerprint-heart-memorial-tattoo",
  "family-crest-heraldic-shield-tattoo",
  "semicolon-mental-health-tattoo",
  "poetic-script-typography-tattoo",
  "beginner-first-tattoo-ideas-low-pain",
  "small-dainty-mini-ink-tattoo",
  "minimalist-clean-line-art-tattoo",
  "masculine-bold-tattoo-ideas-for-men",
  "feminine-chic-tattoo-ideas-for-women",
  "cover-up-transformation-tattoo",
  "patchwork-sleeve-collage-tattoo",
  "zen-enso-calligraphy-brush-tattoo",
  "baroque-filigree-jewelry-tattoo",
  "surrealist-dali-dreamscape-tattoo",
  "dark-fantasy-eldritch-lore-tattoo",
  "zodiac-astrological-constellation-tattoo",
  "birth-flower-family-bouquet-tattoo",
  "self-love-resilience-blooming-tattoo",
  "top-2026-trendsetter-tattoo-collection",
];

const staticPageRedirects = [
  { source: "/about", destination: "/" },
  { source: "/about/:path*", destination: "/" },
  { source: "/styles", destination: "/" },
  { source: "/styles/:path*", destination: "/" },
  { source: "/portfolio", destination: "/tattoo-ideas" },
  { source: "/portfolio/:path*", destination: "/tattoo-ideas" },
  { source: "/artists", destination: "/" },
  { source: "/artists/:path*", destination: "/" },
  { source: "/faq", destination: "/" },
  { source: "/faq/:path*", destination: "/" },
  { source: "/contact", destination: "/" },
  { source: "/contact/:path*", destination: "/" },
  { source: "/home", destination: "/" },
  { source: "/home/:path*", destination: "/" },
  { source: "/services", destination: "/" },
  { source: "/services/:path*", destination: "/" },
  { source: "/gallery", destination: "/tattoo-ideas" },
  { source: "/gallery/:path*", destination: "/tattoo-ideas" },
  { source: "/tattoo-styles", destination: "/" },
  { source: "/tattoo-styles/:path*", destination: "/" },
  { source: "/privacy-policy", destination: "/" },
  { source: "/privacy-policy/:path*", destination: "/" },
  { source: "/terms-of-service", destination: "/" },
  { source: "/terms-of-service/:path*", destination: "/" },
  { source: "/tattoos", destination: "/tattoo-ideas" },
  { source: "/tattoos/:path*", destination: "/tattoo-ideas" },
  { source: "/ideas", destination: "/tattoo-ideas" },
  { source: "/ideas/:path*", destination: "/tattoo-ideas" },
  { source: "/tag/:path*", destination: "/blog" },
  { source: "/category/:path*", destination: "/blog" },
  { source: "/author/:path*", destination: "/blog" },
  { source: "/feed", destination: "/blog" },
  { source: "/feed/:path*", destination: "/blog" },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      ...deletedTattooSlugs.map((slug) => ({
        source: `/tattoo-ideas/${slug}`,
        destination: "/tattoo-ideas",
        permanent: true,
      })),
      ...staticPageRedirects.map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: true,
      })),
    ];
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1kq2dqeox7x40.cloudfront.net',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://d1kq2dqeox7x40.cloudfront.net https://www.google-analytics.com; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; frame-ancestors 'self';",
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
