import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { tattooIdeas } from '@/data/tattooIdeas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tattooworlds.com';
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tattoo-ideas`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const tattooIdeaRoutes: MetadataRoute.Sitemap = tattooIdeas.map((idea) => ({
    url: `${baseUrl}/tattoo-ideas/${idea.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...tattooIdeaRoutes];
}
