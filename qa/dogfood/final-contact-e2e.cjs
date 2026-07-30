const { chromium } = require('/home/zulfikar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true}); const context=await browser.newContext({viewport:{width:1440,height:900}}); const page=await context.newPage();
 const evidence={token:'PORTFOLIO-QA-20260730-FINAL',payload:{name:'Portfolio QA Verification',email:'zulfikarsiswanto@gmail.com',subject:'Final contact form E2E — PORTFOLIO-QA-20260730-FINAL',message:'Single pre-deployment QA message. Please verify subject, sender, reply-to, and this exact message token: PORTFOLIO-QA-20260730-FINAL'}};
 let responseEvidence=null; page.on('response',async r=>{if(r.url().endsWith('/api/contact')&&r.request().method()==='POST'){responseEvidence={url:r.url(),status:r.status(),body:await r.text()}}});
 await page.goto('http://127.0.0.1:3100/#contact'); await page.waitForLoadState('networkidle'); await page.waitForTimeout(800);
 await page.fill('#contact-name',evidence.payload.name); await page.fill('#contact-email',evidence.payload.email); await page.fill('#contact-subject',evidence.payload.subject); await page.fill('#contact-message',evidence.payload.message);
 await page.click('#contact-submit-button'); await page.waitForResponse(r=>r.url().endsWith('/api/contact')&&r.request().method()==='POST'); await page.waitForTimeout(500);
 evidence.response=responseEvidence; evidence.uiSuccess=await page.locator('form [role="status"]').textContent().catch(()=>null); evidence.submitDisabled=await page.locator('#contact-submit-button').isDisabled();
 require('fs').writeFileSync('qa/dogfood/final-contact-e2e.json',JSON.stringify(evidence,null,2)); console.log(JSON.stringify(evidence,null,2)); await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
