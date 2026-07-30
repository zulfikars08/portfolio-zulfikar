const { chromium } = require('/home/zulfikar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs = require('fs'), path = require('path');
const base='http://127.0.0.1:3100', out=__dirname, shots=path.join(out,'screenshots');
fs.mkdirSync(shots,{recursive:true});
const viewports=[[320,568],[360,800],[375,812],[390,844],[400,892],[430,932],[768,1024],[1024,768],[1440,900]];
const slugs=['mini-erp-invoicing-system','pixelqueue','article-management-system','modular-erp-operations-platform','ecommerce-sales-mobile-app','warehouse-picking-delivery-app','multi-company-saas-builder','dynamic-internal-app-platform','boarding-house-management-system-nur-residence'];
const R={started:new Date().toISOString(),pages:[],interactions:[],endpoints:[],findings:[]};
const clean=s=>s.replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').toLowerCase();
async function inspect(page,label,url,screenshot=true){
 const rec={label,url,console:[],pageErrors:[],failedRequests:[]};
 page.on('console',m=>{if(['error','warning'].includes(m.type()))rec.console.push({type:m.type(),text:m.text()})});
 page.on('pageerror',e=>rec.pageErrors.push(e.message));
 page.on('requestfailed',q=>rec.failedRequests.push({url:q.url(),error:q.failure()?.errorText}));
 const res=await page.goto(url,{waitUntil:'load',timeout:15000}); await page.waitForTimeout(500);
 Object.assign(rec,await page.evaluate(()=>({status:null,title:document.title,lang:document.documentElement.lang,description:document.querySelector('meta[name=description]')?.content||'',canonical:document.querySelector('link[rel=canonical]')?.href||'',h1:[...document.querySelectorAll('h1')].map(x=>x.innerText.trim()),headings:[...document.querySelectorAll('h1,h2,h3')].map(x=>({tag:x.tagName,text:x.innerText.trim()})),brokenImages:[...document.images].filter(x=>!x.complete||x.naturalWidth===0).map(x=>x.currentSrc||x.src),overflow:{html:document.documentElement.scrollWidth-document.documentElement.clientWidth,body:document.body.scrollWidth-document.body.clientWidth},outOfBounds:[...document.querySelectorAll('a,button,input,textarea,article')].map((e,i)=>{let r=e.getBoundingClientRect();return {i,tag:e.tagName,text:(e.innerText||e.getAttribute('aria-label')||'').trim().slice(0,60),left:r.left,right:r.right,width:r.width}}).filter(x=>x.left<-.5||x.right>innerWidth+.5),links:[...document.links].map(a=>({text:a.innerText.trim().slice(0,80),href:a.href})),buttons:[...document.querySelectorAll('button')].map(b=>({text:b.innerText.trim(),aria:b.getAttribute('aria-label'),type:b.type})),forms:[...document.forms].map(f=>({action:f.action,method:f.method,fields:[...f.elements].map(e=>({tag:e.tagName,type:e.type,name:e.name,required:e.required,label:e.labels?.[0]?.innerText||'',aria:e.getAttribute('aria-label')}))}))})));
 rec.status=res?.status(); R.pages.push(rec); if(screenshot)await page.screenshot({path:path.join(shots,clean(label)+'.png'),fullPage:true}); return rec;
}
(async()=>{const browser=await chromium.launch({headless:true});
 for(const [w,h] of viewports){const c=await browser.newContext({viewport:{width:w,height:h},deviceScaleFactor:1,isMobile:w<=430});const p=await c.newPage();await inspect(p,`home-${w}x${h}`,base,true);await c.close()}
 const c=await browser.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1,isMobile:false});
 for(const [label,url] of [['projects',base+'/projects'],...slugs.map(s=>['project-'+s,base+'/projects/'+s]),['404',base+'/definitely-missing-qa'],['robots',base+'/robots.txt'],['sitemap',base+'/sitemap.xml']]){const p=await c.newPage();await inspect(p,label,url,true);await p.close()}
 const p=await c.newPage(); await p.goto(base,{waitUntil:'networkidle'});
 // Hash links, offset, history.
 const hashes=await p.locator('a[href^="#"]').evaluateAll(as=>[...new Set(as.map(a=>a.getAttribute('href')))]);
 for(const hash of hashes){await p.goto(base);await p.locator(`a[href="${hash}"]`).first().click();await p.waitForTimeout(250);R.interactions.push({kind:'hash',hash,url:p.url(),top:await p.locator(hash).first().evaluate(e=>e.getBoundingClientRect().top).catch(()=>null)});}
 if(hashes.length>1){await p.goBack();R.interactions.push({kind:'back',url:p.url()});await p.goForward();R.interactions.push({kind:'forward',url:p.url()})}
 // Theme/language buttons by accessible hints/text.
 for(const spec of [{kind:'language',re:/EN|ID|language|bahasa/i},{kind:'theme',re:/theme|dark|light|tema|gelap|terang/i}]){const b=p.getByRole('button',{name:spec.re}).first();if(await b.count()){const before=await p.locator('html').evaluate(e=>({lang:e.lang,cls:e.className}));await b.click();await p.waitForTimeout(200);const after=await p.locator('html').evaluate(e=>({lang:e.lang,cls:e.className}));R.interactions.push({kind:spec.kind,before,after});await p.screenshot({path:path.join(shots,`${spec.kind}-state.png`),fullPage:true})}}
 // Menu keyboard, backdrop-like click, Escape.
 await p.setViewportSize({width:390,height:844});const menu=p.getByRole('button',{name:/menu|navigation|navigasi/i}).first();if(await menu.count()){for(const close of ['Escape','button','backdrop']){await menu.click();await p.waitForTimeout(100);let open=await menu.getAttribute('aria-expanded');if(close==='Escape')await p.keyboard.press('Escape');else if(close==='button')await menu.click();else await p.mouse.click(5,300);await p.waitForTimeout(100);R.interactions.push({kind:'menu-'+close,open,closed:await menu.getAttribute('aria-expanded')});}await p.screenshot({path:path.join(shots,'mobile-menu.png'),fullPage:false})}
 // Contact native/app validation, no real valid submission unless configured action differs from current page.
 await p.goto(base,{waitUntil:'load'});const form=p.locator('form').first();if(await form.count()){const submit=form.locator('button[type=submit],input[type=submit]').first();if(await submit.count()){await submit.click();R.interactions.push({kind:'contact-empty',invalid:await form.locator(':invalid').count(),url:p.url()});const email=form.locator('input[type=email]').first();if(await email.count()){await email.fill('invalid');await submit.click();R.interactions.push({kind:'contact-invalid-email',invalid:await form.locator(':invalid').count()})}const action=await form.getAttribute('action');R.interactions.push({kind:'contact-safety',action,successSkipped:!action||action==='#'||action.startsWith('/')});}}
 // Keyboard focus evidence.
 await p.goto(base);let focus=[];for(let i=0;i<12;i++){await p.keyboard.press('Tab');focus.push(await p.evaluate(()=>({tag:document.activeElement?.tagName,text:(document.activeElement?.innerText||document.activeElement?.getAttribute('aria-label')||'').trim().slice(0,60),href:document.activeElement?.getAttribute('href')})))}R.interactions.push({kind:'focus-order',focus});
 await p.close();await c.close();
 // HTTP endpoints.
 for(const u of ['/robots.txt','/sitemap.xml']){const r=await fetch(base+u);R.endpoints.push({url:u,status:r.status,contentType:r.headers.get('content-type'),body:await r.text()})}
 await browser.close();R.finished=new Date().toISOString();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(R,null,2));console.log(JSON.stringify({pages:R.pages.length,interactions:R.interactions.length,screenshots:fs.readdirSync(shots).length},null,2));
})().catch(e=>{console.error(e);process.exitCode=1});
