const { chromium } = require('/home/zulfikar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs = require('fs');
const base = 'http://127.0.0.1:3100';
const sizes = [[320,568],[375,812],[700,900],[768,1024],[820,1180],[1024,768],[1440,900]];
(async()=>{
  const browser=await chromium.launch({headless:true});
  fs.mkdirSync('qa/dogfood/screenshots/after',{recursive:true});
  const results=[];
  for(const [width,height] of sizes){
    const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,isMobile:width<=430});
    const page=await context.newPage();
    const errors=[]; page.on('pageerror',e=>errors.push(e.message)); page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
    await page.goto(base); await page.waitForLoadState('networkidle'); await page.waitForTimeout(1000);
    const metrics=await page.evaluate(()=>({
      overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,
      brokenImages:[...document.images].filter(i=>getComputedStyle(i).display!=='none'&&(!i.complete||!i.naturalWidth)).map(i=>i.src),
      grids:{
        featured:getComputedStyle(document.querySelector('#projects .grid')).gridTemplateColumns,
        experience:getComputedStyle(document.querySelector('#experience .grid')).gridTemplateColumns,
        skills:getComputedStyle(document.querySelector('#skills .grid')).gridTemplateColumns,
        confidential:getComputedStyle(document.querySelector('#confidential-work .grid')).gridTemplateColumns,
      },
      profile:document.querySelector('#home img').getBoundingClientRect().toJSON(),
      article:[...document.querySelectorAll('#projects img')].find(i=>i.alt.includes('posts management'))?.getBoundingClientRect().toJSON(),
      pixel:[...document.querySelectorAll('#projects img')].filter(i=>getComputedStyle(i).display!=='none').find(i=>i.alt.includes('PixelQueue'))?.getBoundingClientRect().toJSON(),
      summaries:[...document.querySelectorAll('#projects article p')].map(p=>p.textContent.trim()),
    }));
    await page.screenshot({path:`qa/dogfood/screenshots/after/home-${width}x${height}.png`,fullPage:true});
    for(const [name,id] of [['profile','home'],['article','projects'],['skills','skills'],['confidential','confidential-work']]){
      await page.locator('#'+id).scrollIntoViewIfNeeded(); await page.waitForTimeout(200);
      await page.locator('#'+id).screenshot({path:`qa/dogfood/screenshots/after/${name}-${width}x${height}.png`});
    }
    results.push({width,height,deviceScaleFactor:1,isMobile:width<=430,metrics,errors});
    await context.close();
  }
  await browser.close(); fs.writeFileSync('qa/dogfood/visual-results-after.json',JSON.stringify(results,null,2)); console.log(JSON.stringify(results.map(r=>({width:r.width,overflow:r.metrics.overflow,grids:r.metrics.grids,broken:r.metrics.brokenImages.length,errors:r.errors.length})),null,2));
})().catch(e=>{console.error(e);process.exit(1)});
