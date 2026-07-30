const { chromium } = require('/home/zulfikar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs = require('fs');
const base = 'http://127.0.0.1:3100';
const viewport = { width: 375, height: 812 };
const settle = async (page) => {
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1200);
};
const measure = (page, sectionId) => page.evaluate((id) => ({
  url: location.href,
  scrollY: Math.round(scrollY),
  sectionTop: Math.round(document.getElementById(id)?.getBoundingClientRect().top ?? NaN),
  activeAnchor: document.querySelector('header a[aria-current]')?.getAttribute('href') ?? null,
}), sectionId);
(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = {};

  {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: true });
    const page = await context.newPage();
    await page.goto(`${base}/#projects`);
    await settle(page);
    results.directHash = await measure(page, 'projects');
    await context.close();
  }

  {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: true });
    const page = await context.newPage();
    await page.goto(`${base}/#projects`);
    await settle(page);
    results.refresh = { before: await measure(page, 'projects') };
    await page.reload();
    await settle(page);
    results.refresh.after = await measure(page, 'projects');
    await context.close();
  }

  {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: true });
    const page = await context.newPage();
    await page.goto(base);
    await settle(page);
    await page.evaluate(() => scrollTo(0, 0));
    const beforeTop = await page.locator('#home').evaluate((element) => Math.round(element.getBoundingClientRect().top));
    await page.locator('button[aria-controls="mobile-navigation"]').click();
    await page.waitForTimeout(150);
    const afterTop = await page.locator('#home').evaluate((element) => Math.round(element.getBoundingClientRect().top));
    results.mobileMenu = {
      url: page.url(),
      beforeTop,
      afterTop,
      scrollY: await page.evaluate(() => Math.round(scrollY)),
      bodyOverflow: await page.locator('body').evaluate((element) => getComputedStyle(element).overflow),
      expanded: await page.locator('button[aria-controls="mobile-navigation"]').getAttribute('aria-expanded'),
      activeAnchor: await page.locator('header a[aria-current]').last().getAttribute('href').catch(() => null),
    };
    await page.keyboard.press('Escape');
    results.mobileMenu.escapeClosed = (await page.locator('button[aria-controls="mobile-navigation"]').getAttribute('aria-expanded')) === 'false';
    await context.close();
  }

  {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: true });
    const page = await context.newPage();
    await page.goto(base);
    await settle(page);
    await page.locator('button[aria-controls="mobile-navigation"]').click();
    await page.locator('#mobile-navigation a[href="#projects"]').click();
    await page.waitForTimeout(900);
    results.navigationClick = await measure(page, 'projects');
    await context.close();
  }


  await browser.close();
  fs.writeFileSync('qa/dogfood/interactions.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
})().catch((error) => { console.error(error); process.exit(1); });
