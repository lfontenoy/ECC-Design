// Renderiza cada anuncio de anuncio.html a PNG 1080x1350 (formato feed 4:5 de Meta).
// Uso: node ads/meta-perdida-peso/render.js
const path = require('path');
const { chromium } = require('playwright');

const IDS = [
  '01a-espejo-segura', '01b-espejo-sutil', '02-polo', '03a-bikini-segura', '03b-bikini-sutil',
  '04-nueva-version', '05a-jean-segura', '05b-jean-sutil', '06-ropa-favorita', '07-ropa-luzca',
  '08-lunes', '09-fin-de-semana', '10-hamburguesa', '11-delivery', '12-entreno',
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  const file = 'file://' + path.join(__dirname, 'anuncio.html');
  for (const id of IDS) {
    await page.goto(`${file}?id=${id}`);
    await page.waitForSelector('body[data-ready="1"]', { state: 'attached', timeout: 30000 });
    await page.locator('#ad').screenshot({ path: path.join(__dirname, 'png', `${id}.png`) });
    console.log('ok', id);
  }
  await browser.close();
})();
