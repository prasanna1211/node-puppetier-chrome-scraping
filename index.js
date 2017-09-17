var scrapModule = require('./scrap.js');

scrapModule.scrapeGoogleResult('React Native development company', 'https://www.google.co.in', 1)
.then((res) => {
  if (res.success) {
    console.log(res.result);
  }
})
