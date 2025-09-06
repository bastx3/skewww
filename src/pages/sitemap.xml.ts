import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://artxeweb.com';
  
  // Get all collections
  const blogPosts = await getCollection('blog', ({ data }) => !data.noindex);
  const projects = await getCollection('projects');
  const authors = await getCollection('authors');
  
  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/servicios', priority: '0.9', changefreq: 'monthly' },
    { url: '/proyectos', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'daily' },
    { url: '/contacto', priority: '0.7', changefreq: 'monthly' },
  ];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('')}
  
  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <lastmod>${post.data.pubDate.toISOString().split('T')[0]}</lastmod>
  </url>`).join('')}
  
  ${projects.map(project => `
  <url>
    <loc>${baseUrl}/proyectos/${project.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('')}
  
  ${authors.map(author => `
  <url>
    <loc>${baseUrl}/autores/${author.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('')}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};