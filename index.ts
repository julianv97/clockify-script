/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
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

  await page.click('button[type="submit"]');

  await page.waitForSelector('.cl-navbar-toggler');
  await page.click('.cl-navbar-toggler');

  await page.waitForSelector('a[routerlink="/timesheet"]');
  const timesheetButton = await page.$('a[routerlink="/timesheet"]');
  await page.evaluate((element) => {
    element.click();
  }, timesheetButton);

  await page.waitForSelector('.timesheet-row-component.ng-star-inserted');

  // TODO: improve this selector
  await page.click(
    '#layout-main > timesheet2 > div > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td > div > a',
  );

  /*  const listOfHoursInputs = await page.$$('time-duration > input');

  for (let i = 0; i < 5; i += 1) {
    await listOfHoursInputs[i].click({ clickCount: 3 });
    await listOfHoursInputs[i].press('Backspace');
    await listOfHoursInputs[i].type('400');
  } */

  const listOfDotsButtons = await page.$$(
    '#layout-main > timesheet2 > div > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > time-duration > a > img',
  );

  for (let i = 0; i < listOfDotsButtons.length; i += 1) {
    await page.evaluate((element) => {
      element.click();
    }, listOfDotsButtons[i]);
  }

  await page.waitForTimeout(20000);

  browser.close();
})();
