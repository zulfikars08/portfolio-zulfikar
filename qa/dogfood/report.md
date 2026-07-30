# Dogfood QA Report

**Target:** http://127.0.0.1:3100  
**Tanggal:** 30 Juli 2026  
**Scope:** Exploratory QA portfolio lengkap — visual, responsive, interaction, accessibility, diagnostics, metadata  
**Browser:** Playwright Chromium 151.0.7922.34  
**Emulasi:** CSS viewport eksplisit, `deviceScaleFactor: 1`; `isMobile: true` untuk lebar 320–430, `false` untuk 768–1440

## 1. Executive summary

| Severity | Count |
|---|---:|
| Critical | 0 |
| High | 1 |
| Medium | 3 |
| Low | 3 |
| **Total** | **7** |

**Kesimpulan:** Belum layak disebut production-ready tanpa catatan. Flow utama, build, routing, hash navigation, mobile menu, locale, theme, project pages, metadata dasar, robots, sitemap, dan validasi native bekerja. Namun foto profil gagal merepresentasikan subjek pada tablet/desktop, beberapa screenshot project terpotong atau terlalu kecil, grid tablet tidak natural, contact delivery end-to-end belum terbukti, dan dependency audit melaporkan empat high-severity vulnerabilities.

Tidak ada source code diperbaiki dalam sesi ini.

## 2. Viewport dan browser

| CSS viewport | isMobile | DSF | Screenshot |
|---|---:|---:|---|
| 320×568 | true | 1 | `screenshots/home-320x568.png` |
| 360×800 | true | 1 | `screenshots/home-360x800.png` |
| 375×812 | true | 1 | `screenshots/home-375x812.png` |
| 390×844 | true | 1 | `screenshots/home-390x844.png` |
| 400×892 | true | 1 | `screenshots/home-400x892.png` |
| 430×932 | true | 1 | `screenshots/home-430x932.png` |
| 768×1024 | false | 1 | `screenshots/home-768x1024.png` |
| 1024×768 | false | 1 | `screenshots/home-1024x768.png` |
| 1440×900 | false | 1 | `screenshots/home-1440x900.png` |

Menu/locale/theme evidence:

- `screenshots/menu-open-375.png`
- `screenshots/home-id-375.png`
- `screenshots/home-id-light-375.png`

## 3. Area yang diuji

- Homepage: Hero, Featured Public Projects, Professional Experience, Core Skills, About Me, Selected Confidential Work, Contact, footer.
- `/projects`.
- Semua sembilan `/projects/[slug]`.
- Custom 404.
- `robots.txt` dan `sitemap.xml`.
- Hash links, direct hash, refresh, active state, offset.
- Mobile menu, Escape, backdrop/body lock.
- EN/ID, dark/light.
- Contact native validation.
- Keyboard Tab order.
- Console, page errors, failed requests, broken images, H1/title/metadata.
- Repository/live links via HTTP.

## 4. Issues

### Issue #1 — Foto profil hampir seluruhnya kosong pada tablet/desktop

| Field | Value |
|---|---|
| Severity | **High** |
| Category | Visual / UX |
| URL | `http://127.0.0.1:3100/` |
| Viewport | 768×1024, 1024×768, 1440×900 |

**Langkah reproduksi:**
1. Buka homepage pada CSS viewport 768×1024 atau 1440×900.
2. Lihat profile card di Hero.

**Expected:** wajah dan upper torso terlihat jelas sebagai focal point recruiter.

**Actual:** area gambar didominasi latar putih; hanya bagian rambut/kepala kecil terlihat dekat bawah frame. Pada 768 px subjek praktis tidak terbaca.

**Screenshot:** `screenshots/home-768x1024.png`, `screenshots/home-1440x900.png`

**Console/network evidence:** tidak ada JS error atau broken image; ini masalah crop/object-position/source image, bukan request gagal.

**Rekomendasi:** gunakan crop source yang lebih rapat atau object-position desktop/tablet yang menampilkan wajah dan upper torso. Jangan ubah mobile yang sudah proporsional tanpa regresi viewport.

---

### Issue #2 — Screenshot Article Management terpotong pada tablet

| Field | Value |
|---|---|
| Severity | **Medium** |
| Category | Visual / Content |
| URL | `http://127.0.0.1:3100/#projects` |
| Viewport | 768×1024 |

**Langkah reproduksi:** buka homepage 768×1024, scroll ke card Article Management System.

**Expected:** screenshot aplikasi menampilkan konteks UI utama secara utuh atau crop dengan focal point jelas.

**Actual:** elemen kiri dan kanan screenshot terpotong; area tengah yang kosong mendominasi, sehingga UI sulit dipahami.

**Screenshot:** `screenshots/home-768x1024.png`

**Console/network evidence:** gambar termuat, tidak ada failed image request.

**Rekomendasi:** gunakan `object-contain`/focal crop khusus tablet atau asset screenshot yang disusun untuk rasio card.

---

### Issue #3 — Layout tablet 768 px mempertahankan grid desktop yang terlalu padat

| Field | Value |
|---|---|
| Severity | **Medium** |
| Category | Responsive / UX |
| URL | `http://127.0.0.1:3100/` |
| Viewport | 768×1024 |

**Langkah reproduksi:** buka homepage pada 768×1024, periksa Skills dan Selected Professional Work.

**Expected:** breakpoint tablet menghasilkan grid satu/dua kolom yang mudah dibaca.

**Actual:** tiga confidential cards tetap satu baris sempit; judul, deskripsi, dan tags padat. Skills menyisakan `Tools & Cloud` sebagai half-width orphan dengan area kosong besar di kanan.

**Screenshot:** `screenshots/home-768x1024.png`

**Console/network evidence:** tidak ada error; layout CSS stabil dan tanpa horizontal overflow.

**Rekomendasi:** gunakan dua kolom atau satu kolom pada 768 px; buat item terakhir span penuh bila jumlah card ganjil.

---

### Issue #4 — PixelQueue diagram terlalu kecil pada mobile/tablet

| Field | Value |
|---|---|
| Severity | **Medium** |
| Category | Visual / Accessibility |
| URL | `http://127.0.0.1:3100/#projects` |
| Viewport | 320–768 px |

**Langkah reproduksi:** buka homepage 320×568 atau 768×1024, scroll ke PixelQueue.

**Expected:** komponen pipeline dan label tetap dapat dibaca.

**Actual:** diagram lengkap tidak terpotong, tetapi shrink-to-fit membuat label sekunder dan lifecycle sangat kecil. Pada mobile berfungsi lebih sebagai dekorasi daripada bukti arsitektur.

**Screenshot:** `screenshots/home-320x568.png`, `screenshots/home-768x1024.png`

**Console/network evidence:** asset termuat; DOM audit tidak menemukan broken image atau overflow horizontal.

**Rekomendasi:** sediakan diagram mobile bertumpuk atau versi detail yang dapat dibuka/zoom tanpa crop.

---

### Issue #5 — Deskripsi card terpotong tanpa affordance ekspansi

| Field | Value |
|---|---|
| Severity | **Low** |
| Category | Content / UX |
| URL | `http://127.0.0.1:3100/#projects` |
| Viewport | 320–768 px |

**Langkah reproduksi:** buka mobile/tablet, scroll project cards dan confidential cards.

**Expected:** ringkasan singkat selesai secara semantik atau tersedia affordance untuk detail.

**Actual:** beberapa kalimat berhenti dengan ellipsis pada fragmen seperti `Prism...`, `It accep...`, dan deskripsi confidential terpotong. `View Case Study` tersedia, tetapi truncation tampak seperti copy rusak alih-alih teaser terkontrol.

**Screenshot:** `screenshots/home-320x568.png`, `screenshots/home-768x1024.png`

**Console/network evidence:** tidak ada error.

**Rekomendasi:** tulis ringkasan 2–3 baris yang selesai sebagai kalimat; jangan bergantung pada clamp di tengah kata/kalimat.

---

### Issue #6 — Metadata `lang` tidak tersedia pada HTML awal di pemeriksaan browser tool

| Field | Value |
|---|---|
| Severity | **Low** |
| Category | Accessibility / SEO |
| URL | Homepage dan halaman project |
| Viewport | semua |

**Langkah reproduksi:** inspeksi elemen `<html>` pada initial document/browser accessibility diagnostics.

**Expected:** `<html lang="en">` atau `<html lang="id">` sesuai locale.

**Actual:** automated Playwright run setelah hydration membaca `lang: en`, tetapi browser-tool metadata inspection pada initial document mengembalikan `lang` kosong. Bukti bertentangan; potensi timing/hydration issue.

**Screenshot:** tidak visual.

**Console/network evidence:** tidak ada hydration error.

**Rekomendasi:** pastikan `lang` dirender server-side di root layout, bukan hanya diset client-side. Verifikasi ulang dari raw HTML response.

---

### Issue #7 — Dependency audit melaporkan empat high-severity vulnerabilities

| Field | Value |
|---|---|
| Severity | **Low untuk audit UI ini; security triage wajib** |
| Category | Build / Security |
| URL | N/A |
| Viewport | N/A |

**Langkah reproduksi:** jalankan `npm install`.

**Expected:** production dependency tree tanpa high-severity advisory atau advisory terdokumentasi sebagai non-runtime/not-applicable.

**Actual:** npm melaporkan `4 high severity vulnerabilities`.

**Screenshot:** tidak visual.

**Console/network evidence:** output instalasi npm.

**Rekomendasi:** jalankan `npm audit --omit=dev`, review dependency chain dan exploitability; jangan menjalankan `npm audit fix --force` tanpa review karena dapat memicu breaking upgrade.

## 5. Bagian yang PASS

Bukti Playwright nyata:

- Semua sembilan viewport: `documentElement.scrollWidth - clientWidth = 0`; tidak ada horizontal overflow.
- Homepage 375 px: satu H1, title terisi, tidak ada broken image.
- Hash click mobile:
  - `#projects`, `#experience`, `#skills`, `#about` berhenti tepat `110px`.
  - `#contact` berhenti `116px` karena batas bawah dokumen.
  - Active state sesuai IntersectionObserver.
- Direct `/#projects` dan refresh: `top = 110px` setelah layout stabil.
- Direct `/#experience`: mencapai `110px` setelah image/layout settle sekitar 1 detik.
- Mobile menu body lock: `overflow: hidden`.
- Escape menutup menu: `aria-expanded true → false`.
- Dropdown overlay tidak menggeser hero.
- Empty contact submission: empat field invalid.
- Invalid email ditolak oleh native validation.
- Keyboard Tab order dimulai dari Skip Link, brand, locale, theme, menu, hero CTAs, lalu project links.
- EN/ID CTA: `View Projects` / `Lihat Proyek`; anchor tetap `#projects`.
- ID locale tidak menghasilkan horizontal overflow.
- Dark/light screenshots berhasil.
- Semua sembilan project detail route mengembalikan halaman dan screenshot.
- Custom 404 tersedia: `screenshots/404.png`.
- Resume URL lokal mengembalikan HTTP 200.
- `robots.txt` HTTP 200 dan menunjuk sitemap production.
- `sitemap.xml` berisi homepage, `/projects`, dan sembilan slug.
- GitHub utama dan Article live demo mengembalikan HTTP 200.
- Tidak ada uncaught JS/page error selama interaction run.
- Failed RSC requests yang tercatat berstatus `net::ERR_ABORTED` saat script melakukan navigasi cepat; ini cancellation browser, bukan HTTP failure aplikasi.
- Build production PASS dan 16/16 static pages generated.

## 6. BLOCKED

- **Contact successful delivery dan rapid double-click:** tidak dijalankan. Form mengarah ke internal API dan keberhasilan HTTP tidak membuktikan email sampai inbox; pengiriman pesan QA berulang berpotensi spam/side effect. Perlu inbox tujuan dan izin eksplisit untuk last-mile test.
- **LinkedIn:** curl mengembalikan HTTP 999 karena anti-bot; URL tidak dapat dinyatakan broken dari hasil ini.
- **Live demo Mini ERP:** CTA disembunyikan karena deployment maintenance; full flow memang tidak tersedia.
- **PixelQueue live demo:** tidak ada deployment; source/local Docker status ditampilkan.

## 7. Tidak dapat diverifikasi

- Inbox receipt contact form.
- WhatsApp membuka aplikasi native pada perangkat fisik.
- Screen-reader announcement aktual di NVDA/VoiceOver/TalkBack.
- Color contrast ratio numerik; visual review menemukan secondary text redup, tetapi belum diukur dengan axe/contrast analyzer.
- Real-device iOS Safari/Android Chrome behavior.
- External GitHub/Article app flow setelah landing; hanya HTTP availability diverifikasi.

## 8. Diagnostics dan metadata

- Homepage title: `Zulfikar Airlangga Siswanto — Full Stack Developer Portfolio`.
- Homepage H1 count: 1.
- Console/page errors pada interaction run: 0.
- Broken images homepage 375 px: 0.
- robots dan sitemap: HTTP 200.
- Project detail screenshots tersimpan untuk seluruh slug.

## 9. Production-readiness verdict

**Verdict: CONDITIONAL — belum production-ready tanpa catatan.**

Tidak ada Critical functional failure. Navigation, responsive containment, localization, theme, routes, build, dan basic form validation stabil. High visual defect pada portrait mengurangi kredibilitas hero di tablet/desktop. Medium issues pada screenshot project, tablet grids, dan diagram readability memengaruhi recruiter scanning. Contact last-mile dan dependency advisories belum selesai diverifikasi.

Prioritas sebelum label production-ready:

1. Perbaiki portrait tablet/desktop.
2. Perbaiki crop Article screenshot dan readability PixelQueue diagram.
3. Rapikan breakpoint 768 px.
4. Triage npm advisories.
5. Lakukan contact E2E dengan akses inbox dan izin pengiriman.

## 10. Evidence inventory

- Homepage viewport: `screenshots/home-*.png`
- Menu: `screenshots/menu-open-375.png`
- Locale/theme: `screenshots/home-id-375.png`, `screenshots/home-id-light-375.png`
- Projects listing: `screenshots/projects.png`
- Public detail: `screenshots/project-mini-erp-invoicing-system.png`, `screenshots/project-pixelqueue.png`, `screenshots/project-article-management-system.png`
- Confidential detail: `screenshots/project-modular-erp-operations-platform.png` dan lima detail lain.
- 404/robots/sitemap: `screenshots/404.png`, `screenshots/robots.png`, `screenshots/sitemap.png`
- Machine-readable interaction evidence: `interactions.json`
- QA scripts: `audit.cjs`, `interaction-audit.cjs`

Catatan: screenshot adalah file lokal biasa, bukan dipublikasikan atau dikirim ke layanan eksternal.