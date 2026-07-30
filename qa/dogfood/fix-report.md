# Dogfood QA Fix Report

Tanggal: 30 Juli 2026
Target: http://127.0.0.1:3100
Browser: Playwright Chromium, deviceScaleFactor 1

## Root cause dan perbaikan

1. Hero profile image
   - Root cause: source portrait 740×1024 memiliki ruang putih besar di atas. `object-cover object-top` menambatkan crop ke ruang kosong pada frame tetap `h-80`.
   - Fix: object position responsif tanpa mengubah asset atau mobile <=480: sm 48%/48%, lg 48%/62%, xl 48%/54%.
   - Visual PASS: 768, 1024, 1440. Wajah dan upper torso terlihat; tidak ada crop aneh.

2. Tablet grids
   - Root cause: Featured/Experience mulai 2 kolom terlalu lambat; Skills featured card span dua kolom dan membuat distribusi tidak 2×2; Confidential langsung tiga kolom pada 768.
   - Fix: Featured 2 kolom md, 3 kolom lg, item ketiga span dua hanya md; Experience 2 kolom md; Skills 2×2 md tanpa md span; Confidential 2 kolom md, 3 kolom lg, item terakhir span dua hanya md.
   - PASS: 700 satu kolom; 768/820 dua kolom; 1024 tiga kolom Featured/Confidential dan dua kolom Experience/Skills. Overflow 0.

3. Article thumbnail
   - Root cause: source screenshot 1280×577 memiliki sekitar 43% area bawah kosong dan rasio 2.22:1; cover 16:9 membuang UI samping sementara blank internal tetap dominan.
   - Fix: dedicated truthful crop `article-cms-card.webp` dari bounds UI source, 1280×720. Detail page tetap memakai screenshot penuh.

4. PixelQueue thumbnail
   - Root cause: diagram penuh punya lifecycle/fine labels yang terlalu kecil pada card sempit.
   - Fix: compact SVG lima tahap React → Fastify → Redis/BullMQ → Sharp → Output untuk <1280; diagram penuh tetap pada desktop xl dan project detail.

5. Project copy
   - Root cause: homepage memakai summary detail dan `line-clamp-3`, sehingga kalimat terpotong.
   - Fix: homepage summary EN/ID khusus, lengkap, tanpa line clamp. Detail penuh tetap di case-study page.

6. QA interaction evidence
   - Root cause: script lama memakai satu page/context lintas skenario, sehingga scroll state bocor.
   - Fix: direct hash, refresh, mobile menu, dan navigation click masing-masing memakai page/context baru. JSON merekam URL, scrollY, sectionTop, active anchor; mobile menu merekam beforeTop/afterTop.

## HTML lang verification

Raw server response:

```text
GET /:         <html lang="en">
GET /?lang=id: <html lang="en">
```

Arsitektur locale saat ini client-side. Query `lang=id` tidak mengubah root server layout; tidak ada perubahan besar dilakukan karena expected minimal terpenuhi dan source `app/layout.tsx` memang menetapkan English sebagai default.

## Security triage

Before: 4 production high package findings: next, nodemailer, postcss through next, sharp through next.

Safe measured updates:
- next 16.2.6 → 16.2.12 (patch, non-major)
- nodemailer 8.0.7 → 9.0.3 (major; contact route build/typecheck passed; removes all listed nodemailer advisories)

After: 3 production high package findings remain: next aggregate through bundled postcss/sharp, postcss through next, sharp through next. npm currently suggests downgrade to Next 9.3.3 as fix, marked semver-major; rejected as unsafe/breaking. Portfolio does not process attacker-controlled CSS/source maps. Image optimizer handles only repository-controlled local images; exploitability lower, but advisory remains unresolved and must be monitored upstream.

Raw JSON:
- `qa/dogfood/npm-audit-production.json`
- `qa/dogfood/npm-audit-all.json`
- `qa/dogfood/npm-audit-production-after.json`
- `qa/dogfood/npm-audit-all-after.json`

## Interaction evidence

`qa/dogfood/interactions.json`:
- Direct `/#projects`: sectionTop 110, active #projects
- Refresh before/after: sectionTop 110
- Mobile menu: beforeTop 0, afterTop 0, scrollY 0, body overflow hidden, Escape closes
- Navigation click: sectionTop 110

## Responsive evidence

Before: `qa/dogfood/screenshots/home-*.png`
After: `qa/dogfood/screenshots/after/`

Exact CSS viewports: 320×568, 375×812, 700×900, 768×1024, 820×1180, 1024×768, 1440×900. DSF 1; `isMobile=true` only for 320/375.

All tested viewports: horizontal overflow 0; visible broken images 0; console errors 0.

## Checks

- npm run lint: PASS
- npm run typecheck: PASS
- npm test: PASS (9 bilingual projects)
- npm run build: PASS (16/16 pages)
- git diff --check: PASS

Non-failing warning: MODULE_TYPELESS_PACKAGE_JSON in test runner.

## PASS / FAIL / BLOCKED

PASS: hero crop, tablet grids, Article card crop, PixelQueue compact flow, complete summaries EN/ID, direct/refresh hash evidence, mobile scroll lock, no overflow/broken visible images/console errors, all requested checks.

FAIL: npm audit remains 3 high package findings through Next bundled dependencies.

BLOCKED: clean advisory state without unsafe downgrade/force fix; requires upstream Next dependency resolution. No `npm audit fix --force` run.

No commit, push, or deploy.
