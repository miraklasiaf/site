import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://miraklasiaf.com/blog/${post.slug}`,
    lastModified: post.publishedAt
  }));

  const routes = ['', '/about', '/blog', '/dashboard', '/uses'].map((route) => ({
    url: `https://miraklasiaf.com${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...blogs];
}
