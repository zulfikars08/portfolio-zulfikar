export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'erp' | 'saas' | 'academic';

export type CaseStudy = {
  title: string;
  type: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  keyFeatures: string[];
  impact: string;
  confidentiality: string;
  categories: ProjectCategory[];
  workflow: string[];
};

export const projects = {
  en: [
    {
      title: 'Modular ERP & Operations Platform',
      type: 'Confidential Company Project',
      summary:
        'A modular web platform for internal operations including sales, warehouse, purchase, ecommerce, accounting, manufacturing, and system settings.',
      problem:
        'Operational teams needed a centralized system to manage workflows, documents, data, roles, and reports without relying on scattered manual processes.',
      solution:
        'Built and improved modular Laravel/Livewire features with CRUD workflows, role-based permissions, Excel/PDF reporting, and operational print documents.',
      role: 'Full Stack Developer responsible for feature development, UI adjustments, reporting tools, workflow improvements, and bug fixing across business modules.',
      techStack: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'Tailwind CSS', 'Vite', 'Spatie Permission', 'Maatwebsite Excel', 'mPDF'],
      keyFeatures: [
        'Modular ERP structure',
        'Sales and warehouse workflows',
        'Role-based access control',
        'Excel import/export',
        'PDF and print documents',
        'Inventory and master data management',
      ],
      impact:
        'Helped internal users manage operational data more consistently, reduce manual reporting effort, and access structured workflows from one platform.',
      confidentiality:
        'Company names, internal data, screenshots, and private business rules are intentionally omitted.',
      categories: ['web', 'backend', 'erp'],
      workflow: ['Data Entry', 'Approval / Validation', 'Operational Processing', 'Reports / Documents'],
    },
    {
      title: 'Ecommerce Sales Mobile App',
      type: 'Confidential Company Project',
      summary:
        'A Flutter mobile app supporting ecommerce and sales workflows such as product browsing, cart, orders, after-sales, loyalty, profile, and sales visits.',
      problem:
        'Sales and customer-facing activities required a mobile experience connected to backend APIs for faster access to products, orders, customer data, and transaction history.',
      solution:
        'Improved Flutter screens, API integrations, session handling, product image rendering, order flows, sales customer features, and mobile UI behavior.',
      role: 'Mobile Developer / Full Stack contributor focused on Flutter UI, API integration, state management, session handling, bug fixing, and feature adjustments.',
      techStack: ['Flutter', 'Dart', 'GetX', 'Dio', 'REST API', 'Secure Storage', 'Shared Preferences'],
      keyFeatures: ['Product browsing', 'Cart and order flows', 'Order history', 'After-sales history', 'Sales customer screens', 'Sales visit workflow', 'Product gallery'],
      impact:
        'Improved mobile access to ecommerce and sales workflows, making it easier for users to browse products, manage orders, and access customer-related data.',
      confidentiality:
        'Real product data, customer records, company identity, and screenshots are not displayed publicly.',
      categories: ['mobile', 'backend'],
      workflow: ['Browse Products', 'Add to Cart', 'Submit / Track Orders', 'After-Sales Support'],
    },
    {
      title: 'Warehouse Picking & Delivery App',
      type: 'Confidential Company Project',
      summary:
        'A lightweight Flutter Android app for warehouse operations including picking, packing, delivery, goods receipt, activity tracking, and scanner-assisted workflows.',
      problem:
        'Warehouse staff needed a faster mobile workflow to handle picking, packing, delivery, and goods receipt activities with reduced manual checking.',
      solution:
        'Built and improved mobile screens connected to backend APIs, integrated scanner support, maintained session persistence, and optimized task-focused warehouse flows.',
      role: 'Mobile Developer responsible for warehouse screens, scanner workflow, API integration, session handling, and usability improvements for operational users.',
      techStack: ['Flutter', 'Dart', 'Dio', 'Mobile Scanner', 'Camera', 'REST API', 'Shared Preferences'],
      keyFeatures: ['Assign picking', 'My picking', 'Packing assignment', 'Delivery order', 'Driver delivery', 'Goods receipt', 'Barcode/QR scanner', 'Activity history'],
      impact:
        'Supported faster warehouse task execution and clearer visibility across picking, packing, delivery, and activity history.',
      confidentiality:
        'Warehouse data, operational records, order references, and company details are anonymized.',
      categories: ['mobile', 'backend', 'erp'],
      workflow: ['Assign Task', 'Scan / Pick', 'Pack Items', 'Deliver / Update Status'],
    },
    {
      title: 'Multi-Company SaaS Builder',
      type: 'Confidential Prototype Project',
      summary:
        'A Next.js prototype for a multi-company platform with central administration, company provisioning, dynamic builders, role management, workflows, and multilingual support.',
      problem:
        'A scalable platform concept required centralized control to create and manage company-specific applications, menus, roles, workflows, and database configuration.',
      solution:
        'Developed central builder modules, company provisioning flows, Prisma/PostgreSQL data structures, AWS Cognito authentication, i18n routing, and operational utilities.',
      role: 'Full Stack Developer focused on Next.js App Router, dynamic builder features, authentication integration, database modeling, localization, and service structure.',
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'AWS Cognito', 'next-intl', 'Zod'],
      keyFeatures: ['Central dashboard', 'Company management', 'Dynamic builders', 'Menu and role configuration', 'Workflow management', 'Company database setup', 'Multilingual UI'],
      impact:
        'Created a foundation for configurable company applications and reduced the need to manually build repetitive admin modules from scratch.',
      confidentiality:
        'Architecture is described at a high level only; private implementation details and business rules are not disclosed.',
      categories: ['web', 'backend', 'saas'],
      workflow: ['Central Setup', 'Configure Company', 'Build Features', 'Publish / Operate'],
    },
    {
      title: 'Dynamic Internal App Platform',
      type: 'Confidential Company Project',
      summary:
        'A dynamic company application that renders dashboards, menus, tables, forms, and data entry screens based on configurable company-specific structures.',
      problem:
        'Internal teams needed flexible company applications that could adapt menus, forms, tables, and data entry workflows without rebuilding every page manually.',
      solution:
        'Built dynamic modules for dashboard, menu, table, form, localized login, API data routes, central/company database connections, and workspace controls.',
      role: 'Full Stack Developer responsible for dynamic UI modules, API routing, i18n support, database connectivity, and service-based feature structure.',
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'next-intl', 'AWS Cognito', 'Zod'],
      keyFeatures: ['Dynamic dashboard', 'Dynamic menus', 'Dynamic tables', 'Dynamic forms', 'Localized auth', 'Table-based API routing', 'Workspace controls'],
      impact:
        'Improved flexibility for building internal tools and reduced repetitive frontend/backend implementation for configurable business data screens.',
      confidentiality:
        'Displayed as an anonymized technical case study without real company data or screenshots.',
      categories: ['web', 'backend', 'saas'],
      workflow: ['Read Configuration', 'Render UI', 'Submit Data', 'Store in Company Database'],
    },
    {
      title: 'Boarding House Management System / Nur Residence',
      type: 'Academic / Portfolio Project',
      summary:
        'A web-based management system concept for boarding house operations, focused on tenant records, room availability, payments, and administrative workflows.',
      problem:
        'Boarding house operations often rely on manual records for tenants, rooms, payment tracking, and administrative updates.',
      solution:
        'Designed a structured management system concept with admin-focused workflows, CRUD data management, dashboards, and reporting-friendly structure.',
      role: 'Full Stack Developer responsible for system planning, UI flow, data structure, CRUD features, and administrative dashboard concepts.',
      techStack: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      keyFeatures: ['Tenant management', 'Room data', 'Payment tracking', 'Admin dashboard', 'CRUD operations', 'Basic reports'],
      impact:
        'Demonstrated ability to translate real-world administrative needs into structured web application workflows.',
      confidentiality:
        'This project is safe to present publicly as an academic/portfolio-oriented system with no private company data.',
      categories: ['web', 'backend', 'academic'],
      workflow: ['Register Tenant', 'Assign Room', 'Track Payment', 'Review Dashboard'],
    },
  ],
  id: [
    {
      title: 'Platform ERP & Operasional Modular',
      type: 'Proyek Perusahaan Rahasia',
      summary:
        'Platform web modular untuk operasional internal seperti sales, warehouse, purchase, ecommerce, accounting, manufacturing, dan system settings.',
      problem:
        'Tim operasional membutuhkan sistem terpusat untuk mengelola workflow, dokumen, data, role, dan laporan tanpa bergantung pada proses manual yang tersebar.',
      solution:
        'Membangun dan meningkatkan fitur modular Laravel/Livewire dengan CRUD workflow, role-based permission, Excel/PDF reporting, dan dokumen print operasional.',
      role: 'Full Stack Developer yang bertanggung jawab pada development fitur, penyesuaian UI, reporting tools, perbaikan workflow, dan bug fixing lintas modul bisnis.',
      techStack: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'Tailwind CSS', 'Vite', 'Spatie Permission', 'Maatwebsite Excel', 'mPDF'],
      keyFeatures: ['Struktur ERP modular', 'Workflow sales dan warehouse', 'Role-based access control', 'Excel import/export', 'PDF dan dokumen print', 'Inventory dan master data'],
      impact:
        'Membantu user internal mengelola data operasional lebih konsisten, mengurangi effort reporting manual, dan mengakses workflow terstruktur dari satu platform.',
      confidentiality:
        'Nama perusahaan, data internal, screenshot, dan business rule privat sengaja tidak ditampilkan.',
      categories: ['web', 'backend', 'erp'],
      workflow: ['Input Data', 'Approval / Validasi', 'Proses Operasional', 'Laporan / Dokumen'],
    },
    {
      title: 'Aplikasi Mobile Ecommerce Sales',
      type: 'Proyek Perusahaan Rahasia',
      summary:
        'Aplikasi mobile Flutter untuk workflow ecommerce dan sales seperti product browsing, cart, orders, after-sales, loyalty, profile, dan sales visit.',
      problem:
        'Aktivitas sales dan customer-facing membutuhkan pengalaman mobile yang terhubung ke backend API untuk akses cepat ke produk, order, data customer, dan riwayat transaksi.',
      solution:
        'Meningkatkan screen Flutter, integrasi API, session handling, product image rendering, order flow, fitur sales customer, dan behavior UI mobile.',
      role: 'Mobile Developer / Full Stack contributor yang fokus pada Flutter UI, API integration, state management, session handling, bug fixing, dan feature adjustments.',
      techStack: ['Flutter', 'Dart', 'GetX', 'Dio', 'REST API', 'Secure Storage', 'Shared Preferences'],
      keyFeatures: ['Product browsing', 'Cart dan order flow', 'Order history', 'After-sales history', 'Sales customer screen', 'Sales visit workflow', 'Product gallery'],
      impact:
        'Meningkatkan akses mobile untuk workflow ecommerce dan sales sehingga user lebih mudah browse produk, mengelola order, dan mengakses data customer.',
      confidentiality:
        'Data produk asli, record customer, identitas perusahaan, dan screenshot tidak ditampilkan publik.',
      categories: ['mobile', 'backend'],
      workflow: ['Browse Produk', 'Masuk Cart', 'Submit / Track Order', 'After-Sales Support'],
    },
    {
      title: 'Aplikasi Warehouse Picking & Delivery',
      type: 'Proyek Perusahaan Rahasia',
      summary:
        'Aplikasi Android Flutter ringan untuk operasional warehouse seperti picking, packing, delivery, goods receipt, activity tracking, dan workflow berbasis scanner.',
      problem:
        'Staff warehouse membutuhkan workflow mobile yang lebih cepat untuk picking, packing, delivery, dan goods receipt dengan proses pengecekan manual yang lebih sedikit.',
      solution:
        'Membangun dan meningkatkan screen mobile yang terhubung backend API, integrasi scanner, session persistence, dan flow warehouse yang fokus pada task operasional.',
      role: 'Mobile Developer yang bertanggung jawab pada screen warehouse, scanner workflow, API integration, session handling, dan usability untuk user operasional.',
      techStack: ['Flutter', 'Dart', 'Dio', 'Mobile Scanner', 'Camera', 'REST API', 'Shared Preferences'],
      keyFeatures: ['Assign picking', 'My picking', 'Packing assignment', 'Delivery order', 'Driver delivery', 'Goods receipt', 'Barcode/QR scanner', 'Activity history'],
      impact:
        'Mendukung eksekusi task warehouse yang lebih cepat dan visibility yang lebih jelas pada picking, packing, delivery, dan activity history.',
      confidentiality:
        'Data warehouse, record operasional, referensi order, dan detail perusahaan dianonimkan.',
      categories: ['mobile', 'backend', 'erp'],
      workflow: ['Assign Task', 'Scan / Pick', 'Packing Barang', 'Delivery / Update Status'],
    },
    {
      title: 'Multi-Company SaaS Builder',
      type: 'Proyek Prototype Rahasia',
      summary:
        'Prototype Next.js untuk platform multi-company dengan central administration, company provisioning, dynamic builder, role management, workflow, dan multilingual support.',
      problem:
        'Konsep platform scalable membutuhkan kontrol terpusat untuk membuat dan mengelola aplikasi perusahaan, menu, role, workflow, dan konfigurasi database.',
      solution:
        'Mengembangkan central builder module, company provisioning flow, struktur data Prisma/PostgreSQL, authentication AWS Cognito, i18n routing, dan operational utilities.',
      role: 'Full Stack Developer yang fokus pada Next.js App Router, dynamic builder feature, integrasi authentication, database modeling, localization, dan struktur service.',
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'AWS Cognito', 'next-intl', 'Zod'],
      keyFeatures: ['Central dashboard', 'Company management', 'Dynamic builders', 'Konfigurasi menu dan role', 'Workflow management', 'Company database setup', 'Multilingual UI'],
      impact:
        'Membuat fondasi untuk aplikasi perusahaan yang configurable dan mengurangi kebutuhan membangun modul admin repetitif dari awal.',
      confidentiality:
        'Arsitektur dijelaskan secara high-level; detail implementasi privat dan business rule tidak dibuka.',
      categories: ['web', 'backend', 'saas'],
      workflow: ['Central Setup', 'Konfigurasi Company', 'Build Features', 'Publish / Operate'],
    },
    {
      title: 'Dynamic Internal App Platform',
      type: 'Proyek Perusahaan Rahasia',
      summary:
        'Aplikasi company dinamis yang menampilkan dashboard, menu, tabel, form, dan data entry berdasarkan struktur konfigurasi khusus tiap perusahaan.',
      problem:
        'Tim internal membutuhkan aplikasi fleksibel yang bisa menyesuaikan menu, form, table, dan workflow data entry tanpa membangun ulang setiap halaman secara manual.',
      solution:
        'Membangun modul dynamic dashboard, menu, table, form, localized login, API data route, koneksi central/company database, dan workspace controls.',
      role: 'Full Stack Developer yang bertanggung jawab pada dynamic UI modules, API routing, i18n support, database connectivity, dan service-based feature structure.',
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'next-intl', 'AWS Cognito', 'Zod'],
      keyFeatures: ['Dynamic dashboard', 'Dynamic menus', 'Dynamic tables', 'Dynamic forms', 'Localized auth', 'Table-based API routing', 'Workspace controls'],
      impact:
        'Meningkatkan fleksibilitas pembuatan internal tools dan mengurangi implementasi frontend/backend repetitif untuk screen data bisnis yang configurable.',
      confidentiality:
        'Ditampilkan sebagai studi kasus teknis anonim tanpa data perusahaan atau screenshot asli.',
      categories: ['web', 'backend', 'saas'],
      workflow: ['Baca Konfigurasi', 'Render UI', 'Submit Data', 'Simpan ke Company Database'],
    },
    {
      title: 'Boarding House Management System / Nur Residence',
      type: 'Proyek Akademik / Portfolio',
      summary:
        'Konsep sistem manajemen kos berbasis web untuk operasional tenant, ketersediaan kamar, pembayaran, dan workflow administrasi.',
      problem:
        'Operasional kos sering bergantung pada pencatatan manual untuk tenant, kamar, tracking pembayaran, dan update administrasi.',
      solution:
        'Mendesain konsep sistem manajemen terstruktur dengan workflow admin, CRUD data, dashboard, dan struktur yang mendukung reporting.',
      role: 'Full Stack Developer yang bertanggung jawab pada perencanaan sistem, UI flow, struktur data, fitur CRUD, dan konsep dashboard administrasi.',
      techStack: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      keyFeatures: ['Manajemen tenant', 'Data kamar', 'Tracking pembayaran', 'Admin dashboard', 'CRUD operations', 'Basic reports'],
      impact:
        'Menunjukkan kemampuan menerjemahkan kebutuhan administrasi dunia nyata menjadi workflow aplikasi web yang terstruktur.',
      confidentiality:
        'Project ini aman ditampilkan sebagai project akademik/portfolio tanpa data perusahaan privat.',
      categories: ['web', 'backend', 'academic'],
      workflow: ['Registrasi Tenant', 'Assign Kamar', 'Track Pembayaran', 'Review Dashboard'],
    },
  ],
} satisfies Record<'en' | 'id', CaseStudy[]>;
