import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'Bingbot',
          'Applebot',
          'ChatGPT-User',
          'GPTBot',
          'ClaudeBot',
          'PerplexityBot',
          'anthropic-ai',
          'CCBot'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://tattooworlds.com/sitemap.xml',
    host: 'https://tattooworlds.com',
  };
}
