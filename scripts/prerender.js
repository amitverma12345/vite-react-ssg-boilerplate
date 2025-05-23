import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toAbsolute = (p) => path.resolve(__dirname, p);

// Template
const template = fs.readFileSync(toAbsolute('../dist/index.html'), 'utf-8');

// Import the server entry
const serverPath = path.resolve(__dirname, '../dist/server/entry-server.js');
const serverUrl = `file://${serverPath.replace(/\\/g, '/')}`;
const { render } = await import(serverUrl);

// Determine routes to pre-render
const routesToPrerender = ['/', '/404'];

try {
  // For each route, render and write to file
  for (const url of routesToPrerender) {
    console.log(`Pre-rendering route: ${url}`);
    const { html: appHtml, helmetContext } = await render(url);
    
    // Get Helmet context
    const { helmet } = helmetContext;
    console.log('Helmet context:', helmet);
    
    // Extract Helmet tags
    const helmetTags = helmet ? [
      helmet.title?.toString(),
      helmet.meta?.toString(),
      helmet.link?.toString(),
      helmet.script?.toString(),
      helmet.style?.toString(),
      helmet.noscript?.toString()
    ].filter(Boolean).join('\n') : '';

    console.log('Generated Helmet tags:', helmetTags);
    
    // Replace placeholders in template
    const html = template
      .replace('<!--app-html-->', appHtml)
      .replace('<!--app-head-->', helmetTags);

    const filePath = `../dist${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('Pre-rendered:', filePath);
  }
} catch (e) {
  console.error('Error during pre-rendering:', e);
  process.exit(1);
} 