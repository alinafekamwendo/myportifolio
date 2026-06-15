import { MetadataRoute } from "next";
import { blogPosts } from "../data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alinafeckamwendo.vercel.app";

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
