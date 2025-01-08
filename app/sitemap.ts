import { promises as fs } from 'fs';
import path from 'path';

async function getSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, '/'));
}

export default async function sitemap() {
  const notesDirectory = path.join(process.cwd(), 'app', 'n');
  const projectsDirectory = path.join(process.cwd(), 'app', 'p');
  const noteSlugs = await getSlugs(notesDirectory);
  const projectSlugs = await getSlugs(projectsDirectory);

  const notes = noteSlugs.map((slug) => ({
    url: `https://miraklasiaf.com/n/${slug}`,
    lastModified: new Date().toISOString()
  }));

  const projects = projectSlugs.map((slug) => ({
    url: `https://miraklasiaf.com/p/${slug}`,
    lastModified: new Date().toISOString()
  }));

  const routes = [''].map((route) => ({
    url: `https://miraklasiaf.com${route}`,
    lastModified: new Date().toISOString()
  }));

  return [...routes, ...notes, ...projects];
}
