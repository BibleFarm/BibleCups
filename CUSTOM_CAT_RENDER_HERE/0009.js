const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 2717, height: 1146}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/CUSTOM_CAT_RENDER_HERE/0009.html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/CUSTOM_CAT_RENDER_HERE/0009.png' }); await browser.close(); })();