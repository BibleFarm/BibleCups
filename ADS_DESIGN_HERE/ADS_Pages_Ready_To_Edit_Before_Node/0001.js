const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/0001.html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/0001.png' }); await browser.close(); })();