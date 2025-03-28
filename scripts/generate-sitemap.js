import fs from 'fs';
import prettier from 'prettier';

// Define all website routes
const routes = [
  '/',
  '/services',
  '/resources',
  '/about',
  '/contact',
  '/quiz',
  '/privacy-policy',
  '/terms-of-service',
  '/partners'
];

// Define website URL
const website = 'https://webfrens.com';

async function generateSitemap() {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `
            <url>
              <loc>${website}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${route === '/' ? '1.0' : '0.8'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formatted = await prettier.format(sitemap, {
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}); 