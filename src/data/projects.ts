export type Project = {
  title: string;
  type: string;
  description: string;
  contributions: string[];
  techStack: string[];
};

export const projects = {
  en: [
    {
      title: 'Modular ERP & Internal Operations Platform',
      type: 'Confidential Company Project',
      description:
        'Worked on a modular web-based business platform covering internal operations such as sales, warehouse, purchase, ecommerce, accounting, manufacturing, and system settings.',
      contributions: [
        'Developed and adjusted Livewire-based CRUD pages for internal business workflows',
        'Built and maintained modular features across sales, warehouse, ecommerce, and master data areas',
        'Implemented role-based access control using permission-driven workflows',
        'Created Excel import/export features to support operational reporting and data management',
        'Built printable PDF documents for warehouse, sales, delivery, and operational records',
        'Improved UI consistency, validation, and workflow usability for internal users',
      ],
      techStack: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'Tailwind CSS', 'Vite', 'Spatie Permission', 'Excel Export', 'mPDF'],
    },
    {
      title: 'Mobile Ecommerce & Sales Application',
      type: 'Confidential Company Project',
      description:
        'Contributed to a Flutter-based ecommerce and sales mobile application with product browsing, cart, order history, loyalty, profile, and sales-related workflows.',
      contributions: [
        'Built and adjusted mobile screens for product discovery, category browsing, cart, orders, and profile flows',
        'Integrated mobile features with backend APIs using Dio and centralized API handling',
        'Worked on authentication/session storage using secure storage and shared preferences',
        'Improved order, after-sales, sales customer, and sales visit user flows',
        'Handled product image rendering, gallery behavior, search, and customer-facing UI adjustments',
        'Fixed bugs and refined features based on operational and user feedback',
      ],
      techStack: ['Flutter', 'Dart', 'GetX', 'Dio', 'REST API', 'Secure Storage', 'Shared Preferences'],
    },
    {
      title: 'Warehouse Picking, Packing & Delivery Mobile App',
      type: 'Confidential Company Project',
      description:
        'Built and improved a lightweight warehouse mobile application used for picking, packing, delivery, goods receipt, activity tracking, and scanner-assisted workflows.',
      contributions: [
        'Developed mobile workflows for assign picking, my picking, packing assignment, and delivery order processes',
        'Integrated barcode/QR scanning features for warehouse activity support',
        'Connected warehouse screens with backend APIs for real-time operational data',
        'Implemented session persistence and login flow for warehouse users',
        'Built history, activity, goods receipt, and driver delivery screens',
        'Improved mobile usability for fast warehouse operations on Android devices',
      ],
      techStack: ['Flutter', 'Dart', 'Dio', 'Mobile Scanner', 'Camera', 'REST API', 'Shared Preferences'],
    },
    {
      title: 'Multi-Company SaaS Builder Prototype',
      type: 'Confidential Prototype Project',
      description:
        'Developed a Next.js prototype for a multi-company platform with central administration, company provisioning, dynamic builders, role management, workflows, and multilingual support.',
      contributions: [
        'Built central admin pages for company management, builder tools, menus, roles, workflows, and publish logs',
        'Implemented dynamic builder concepts for configuring company features and database structures',
        'Worked with Prisma and PostgreSQL for central and company-level data models',
        'Integrated authentication flows using AWS Cognito-based services',
        'Added internationalization support for English, Indonesian, and Japanese interfaces',
        'Improved platform reliability through structured services, validation, logging, and backup-related utilities',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'AWS Cognito', 'next-intl', 'Zod'],
    },
    {
      title: 'Dynamic Company Application Platform',
      type: 'Confidential Company Project',
      description:
        'Worked on a dynamic company application that renders dashboards, menus, tables, forms, and data entry screens based on configurable company-specific structures.',
      contributions: [
        'Developed dynamic dashboard, menu, table, and form modules for configurable company applications',
        'Built API routes for data access using table-based dynamic routing patterns',
        'Integrated localized login and application routing with multi-language support',
        'Worked with central and company database connections for multi-tenant application behavior',
        'Implemented reusable UI and workspace controls for internal users',
        'Improved maintainability through service-based module structure and typed validation',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'next-intl', 'AWS Cognito', 'Zod'],
    },
  ],
  id: [
    {
      title: 'Platform ERP Modular & Operasional Internal',
      type: 'Proyek Perusahaan Rahasia',
      description:
        'Mengerjakan platform bisnis modular berbasis web untuk kebutuhan operasional internal seperti sales, warehouse, purchase, ecommerce, accounting, manufacture, dan system settings.',
      contributions: [
        'Mengembangkan dan menyesuaikan halaman CRUD berbasis Livewire untuk workflow bisnis internal',
        'Membangun dan memelihara fitur modular di area sales, warehouse, ecommerce, dan master data',
        'Mengimplementasikan role-based access control berbasis permission workflow',
        'Membuat fitur import/export Excel untuk reporting operasional dan manajemen data',
        'Membangun dokumen PDF/print untuk warehouse, sales, delivery, dan record operasional',
        'Meningkatkan konsistensi UI, validasi, dan usability workflow untuk user internal',
      ],
      techStack: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'Tailwind CSS', 'Vite', 'Spatie Permission', 'Excel Export', 'mPDF'],
    },
    {
      title: 'Aplikasi Mobile Ecommerce & Sales',
      type: 'Proyek Perusahaan Rahasia',
      description:
        'Berkontribusi pada aplikasi mobile ecommerce dan sales berbasis Flutter dengan fitur product browsing, cart, order history, loyalty, profile, dan workflow sales.',
      contributions: [
        'Membangun dan menyesuaikan screen mobile untuk product discovery, kategori, cart, order, dan profile',
        'Mengintegrasikan fitur mobile dengan backend API menggunakan Dio dan centralized API handling',
        'Bekerja pada authentication/session storage menggunakan secure storage dan shared preferences',
        'Meningkatkan flow order, after-sales, sales customer, dan sales visit',
        'Menangani product image rendering, gallery behavior, search, dan penyesuaian UI customer-facing',
        'Memperbaiki bug dan menyempurnakan fitur berdasarkan feedback user dan operasional',
      ],
      techStack: ['Flutter', 'Dart', 'GetX', 'Dio', 'REST API', 'Secure Storage', 'Shared Preferences'],
    },
    {
      title: 'Aplikasi Mobile Warehouse Picking, Packing & Delivery',
      type: 'Proyek Perusahaan Rahasia',
      description:
        'Membangun dan meningkatkan aplikasi mobile warehouse ringan untuk picking, packing, delivery, goods receipt, activity tracking, dan workflow berbasis scanner.',
      contributions: [
        'Mengembangkan workflow mobile untuk assign picking, my picking, packing assignment, dan delivery order',
        'Mengintegrasikan barcode/QR scanning untuk mendukung aktivitas warehouse',
        'Menghubungkan screen warehouse dengan backend API untuk data operasional real-time',
        'Mengimplementasikan session persistence dan login flow untuk user warehouse',
        'Membangun screen history, activity, goods receipt, dan driver delivery',
        'Meningkatkan usability mobile agar cocok untuk operasional warehouse yang cepat di perangkat Android',
      ],
      techStack: ['Flutter', 'Dart', 'Dio', 'Mobile Scanner', 'Camera', 'REST API', 'Shared Preferences'],
    },
    {
      title: 'Prototype Multi-Company SaaS Builder',
      type: 'Proyek Prototype Rahasia',
      description:
        'Mengembangkan prototype Next.js untuk platform multi-company dengan central administration, company provisioning, dynamic builder, role management, workflow, dan multi-language support.',
      contributions: [
        'Membangun halaman central admin untuk company management, builder tools, menus, roles, workflows, dan publish logs',
        'Mengimplementasikan konsep dynamic builder untuk konfigurasi fitur dan struktur database perusahaan',
        'Bekerja dengan Prisma dan PostgreSQL untuk model data central dan company-level',
        'Mengintegrasikan authentication flow berbasis AWS Cognito',
        'Menambahkan internationalization untuk interface bahasa Inggris, Indonesia, dan Jepang',
        'Meningkatkan reliability platform melalui structured services, validation, logging, dan backup utilities',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'AWS Cognito', 'next-intl', 'Zod'],
    },
    {
      title: 'Platform Dynamic Company Application',
      type: 'Proyek Perusahaan Rahasia',
      description:
        'Mengerjakan aplikasi company dinamis yang menampilkan dashboard, menu, tabel, form, dan data entry berdasarkan struktur konfigurasi khusus tiap perusahaan.',
      contributions: [
        'Mengembangkan modul dynamic dashboard, menu, table, dan form untuk aplikasi perusahaan yang configurable',
        'Membangun API route untuk akses data menggunakan pola dynamic routing berbasis table slug',
        'Mengintegrasikan localized login dan routing aplikasi dengan dukungan multi-bahasa',
        'Bekerja dengan koneksi central dan company database untuk perilaku aplikasi multi-tenant',
        'Mengimplementasikan reusable UI dan workspace controls untuk user internal',
        'Meningkatkan maintainability lewat struktur service-based module dan typed validation',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'next-intl', 'AWS Cognito', 'Zod'],
    },
  ],
} satisfies Record<'en' | 'id', Project[]>;

export const privateProjectReferences = [
  'D:\\trendi-app-fantech',
  'D:\\trendi-ecommerce-android',
  'D:\\trendi-warehouse',
  'D:\\motaspo-prototype',
  'D:\\company-application',
];
