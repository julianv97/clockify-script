import * as puppeteer from 'puppeteer';

const safeHover = async <E extends puppeteer.ElementHandle<Element>>(elem: E) => {
  await elem.evaluate((e) => e.scrollIntoView({ block: 'center', inline: 'center' }));

  await elem.click();
};

export default safeHover;
