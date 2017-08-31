const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto('https://google.com');

  page.focus('input[title="Search"]');
  await page.type('React JS development company', { delay: 100 });

  const submit = await page.$('input[value="Google Search"]');
  await submit.click();

  await page.waitFor(10000);
  await page.screenshot({path: 'screenshots/github.png'});

  browser.close();
}

run();
