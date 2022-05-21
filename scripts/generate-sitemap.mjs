import { globby } from 'globby';
import prettier from 'prettier';
import { writeFileSync } from 'fs';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'src/pages/*.tsx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx',
    'src/@content/**/*.mdx',
    '!src/@content/*.mdx'
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('src/pages', '')
              .replace('.tsx', '')
              .replace('.mdx', '')
              .replace('src/@content', '');
            const route = path === '/index' ? '' : path;

            return `
              <url>
                  <loc>${`https://miraklasiaf.com${route}`}</loc>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted);
}

generate();
