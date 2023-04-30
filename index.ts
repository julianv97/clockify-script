/* eslint-disable no-continue */
/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
import * as puppeteer from 'puppeteer';
import {
  LABORABLE_DAYS, HOURS_PER_DAY, TASKS_PER_DAY, DAYS_TYPES,
} from './constants';

require('dotenv').config();

const email = process.env.EMAIL || '';
const password = process.env.PASSWORD || '';

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://app.clockify.me/en/login');

  await page.waitForSelector('#email');
  await page.waitForSelector('#password');

  Promise.all([await page.type('#email', email), await page.type('#password', password)]);

  await page.click('button[type="submit"]');

  await page.waitForSelector('.cl-navbar-toggler');
  await page.click('.cl-navbar-toggler');

  await page.waitForSelector('a[routerlink="/timesheet"]');
  const timesheetButton = await page.$('a[routerlink="/timesheet"]');
  await page.evaluate((element) => {
    element.click();
  }, timesheetButton);

  await page.waitForSelector('.timesheet-row-component.ng-star-inserted');

  await page.click(
    '#layout-main > timesheet2 > div > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td > div > a',
  );

  const listOfHoursInputs = await page.$$('time-duration > input');

  for (let i = 0; i < LABORABLE_DAYS; i += 1) {
    if (TASKS_PER_DAY[i] === DAYS_TYPES.FERIADO) {
      continue;
    }
    await listOfHoursInputs[i].click({ clickCount: 3 });
    await listOfHoursInputs[i].press('Backspace');
    await listOfHoursInputs[i].type(HOURS_PER_DAY);
  }

  const listOfDotsButtons = await page.$$('time-duration > a');

  for (let i = 0; i < LABORABLE_DAYS; i += 1) {
    if (TASKS_PER_DAY[i] === DAYS_TYPES.FERIADO) {
      continue;
    }

    await page.evaluate((element) => {
      element.click();
    }, listOfDotsButtons[i]);

    const descriptionInput = await page.$('#descriptionName');

    if (!descriptionInput) throw new Error('No description input found');

    await descriptionInput.click({ clickCount: 3 });
    await descriptionInput.press('Backspace');
    await descriptionInput.type(TASKS_PER_DAY[i]);

    await page.click('.cl-btn.cl-btn-primary');

    if (i < 4) await page.waitForTimeout(8000);
  }

  browser.close();
})();
