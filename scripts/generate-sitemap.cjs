const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const DOMAIN = 'https://your-domain.com'; // Replace with your actual domain
const PAGES_DIR = path.join(__dirname, '../src/pages');
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// Get all page files
const pages = glob.sync('**/*.tsx', { cwd: PAGES_DIR })
  .filter(file => !file.includes('NotFound') && !file.includes('_'))
  .map(file => {
    const name = file.replace(/\.tsx$/, '').toLowerCase();
    return name === 'home' ? '' : name;
  });

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${DOMAIN}/${page}</loc>
      <changefreq>daily</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

// Write sitemap to file
fs.writeFileSync(OUTPUT_FILE, sitemap);
console.log(`Sitemap generated at ${OUTPUT_FILE}`); 