import * as puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://app.clockify.me/en/login');

  await page.waitForSelector('#email');
  await page.waitForSelector('#password');

  Promise.all([
    await page.type('#email', 'julian.vicente@radiumrocket.com'),
    await page.type('#password', 'Holacomova?97'),
  ]);

  // browser.close();
})();
