// Renders banner.html to banner.png at 1600 x 400. Needs Playwright: npm i -D playwright
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
const here = fileURLToPath(new URL('.', import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 400 } });
await page.goto('file://' + here + 'banner.html');
await page.evaluate(() => document.fonts.ready);
await page.locator('#banner').screenshot({ path: here + 'banner.png' });
await browser.close();
