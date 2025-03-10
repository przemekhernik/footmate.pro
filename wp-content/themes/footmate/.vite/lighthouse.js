import fs from 'fs';
import path from 'path';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

import desktop from 'lighthouse/core/config/lr-desktop-config.js';
import mobile from 'lighthouse/core/config/lr-mobile-config.js';

const DIR = path.resolve('./.output');
const BASE = 'https://fm.tentyp.test/wp-content/themes/footmate/.output';

await test('https://fm.tentyp.test/playground/', true);
await test('https://fm.tentyp.test/playground/', false);

export async function test(url, isMobile = true) {
  const browser = await puppeteer.launch();
  const endpoint = new URL(browser.wsEndpoint());

  const result = await lighthouse(
    url,
    {
      output: 'html',
      onlyCategories: [
        'performance',
        'accessibility',
      ],
      port: endpoint.port,
    },
    isMobile ? mobile : desktop,
  );

  if (isMobile) {
    fs.writeFileSync(`${DIR}/lighthouse-mobile.html`, await report(result.report), 'utf-8');
    await screenshot(`${BASE}/lighthouse-mobile.html`, `${DIR}/lighthouse-mobile.png`);
    console.log(`
      📱 Mobile
      - Performance: ${result.lhr.categories.performance.score * 100}
      - Accessibility: ${result.lhr.categories.accessibility.score * 100}
      - Report: ${BASE}/lighthouse-mobile.html
      - Image: ${BASE}/lighthouse-mobile.png
    `);
  } else {
    fs.writeFileSync(`${DIR}/lighthouse-desktop.html`, await report(result.report), 'utf-8');
    await screenshot(`${BASE}/lighthouse-desktop.html`, `${DIR}/lighthouse-desktop.png`);
    console.log(`
      💻  Desktop
      - Performance: ${result.lhr.categories.performance.score * 100}
      - Accessibility: ${result.lhr.categories.accessibility.score * 100}
      - Report: ${BASE}/lighthouse-desktop.html
      - Image: ${BASE}/lighthouse-desktop.png
    `);
  }

  await browser.close();
}

export async function screenshot(url, path) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url);
  await page.screenshot({ path, fullPage: true });
  await browser.close();
}

export async function report(html) {
  return html.replace('</head>', `
    <style>
    .lh-topbar {display: none!important}
    .lh-metrics__disclaimer {display: none!important}
    .lh-filmstrip-container {display: none!important}
    .lh-sticky-header {display: none!important}
    .lh-category-header__description {display: none!important}
    .lh-audit-group--metrics .lh-audit-group__header {display: none!important}
    .lh-audit-group--metrics .lh-buttons {display: none!important}
    .lh-metricfilter {display: none!important}
    ._lh-clump--manual {display: none!important}
    .lh-clump--passed {display: none!important}
    .lh-clump--notapplicable {display: none!important}
    .lh-audit--informative {display: none!important}
    .lh-audit-group__footer {display: none!important}
    .lh-footer {display: none!important}
    .lh-categories { display: flex; }
    .lh-category-wrapper { width: 50%; }
    </style>
    </head>`);
}
