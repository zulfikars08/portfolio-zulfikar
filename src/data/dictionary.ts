export type Locale = 'en' | 'id';

export const dictionary = {
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact', hire: 'Hire Me' },
    hero: {
      badge: 'Full Stack Web Developer',
      name: 'Zulfikar Airlangga Siswanto',
      headline: 'Building modern, responsive, and scalable web applications.',
      description:
        'I’m a Full Stack Web Developer experienced in building internal business systems, dashboards, admin panels, and web-based applications using Next.js, React, Laravel, and MySQL.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      role: 'Full Stack',
      focus: 'Web Apps',
    },
    about: {
      eyebrow: 'About Me',
      title: 'I build practical web solutions for real business needs.',
      description:
        'I have experience building web applications for business needs, internal company tools, dashboards, admin panels, and management systems. My work focuses on clean interfaces, maintainable code, reliable data flows, and features that help teams work more efficiently.',
      p1: 'I enjoy translating complex operational workflows into structured web applications, from responsive pages and reusable UI components to CRUD features, authentication, permissions, and API integration.',
      p2: 'Some of my projects are confidential, so only the technical scope can be shared publicly. I present them as generalized company projects while protecting company names, source code, screenshots, internal data, and sensitive business details.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'A focused stack for modern full stack web development.',
      description:
        'Technologies and capabilities I use to build responsive interfaces, backend integrations, dashboards, and internal business systems.',
    },
    projects: {
      eyebrow: 'Experience / Projects',
      title: 'Confidential company projects presented by technical scope.',
      description:
        'These projects are summarized without company names, internal data, screenshots, or source code. The focus is on responsibilities, problems solved, and technologies used.',
      contributions: 'Key Contributions',
    },
    disclaimer: {
      eyebrow: 'Confidential Project Disclaimer',
      title: 'Protecting client and company privacy.',
      text: 'Due to confidentiality agreements and company privacy policies, some projects cannot be publicly displayed with real names, screenshots, source code, or business details. The descriptions shown here are generalized summaries of my actual work, focusing on technical responsibilities, project scope, and the problems I helped solve.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Interested in working together?',
      description:
        'I’m open to opportunities as a Full Stack Web Developer, Frontend Developer, or freelance web developer.',
    },
    footer: 'Built with Next.js, React, TypeScript, and Tailwind CSS.',
  },
  id: {
    nav: { about: 'Tentang', skills: 'Keahlian', projects: 'Proyek', contact: 'Kontak', hire: 'Rekrut Saya' },
    hero: {
      badge: 'Full Stack Web Developer',
      name: 'Zulfikar Airlangga Siswanto',
      headline: 'Membangun aplikasi web modern, responsif, dan scalable.',
      description:
        'Saya Full Stack Web Developer yang berpengalaman membangun sistem internal bisnis, dashboard, admin panel, dan aplikasi berbasis web menggunakan Next.js, React, Laravel, dan MySQL.',
      viewProjects: 'Lihat Proyek',
      contactMe: 'Hubungi Saya',
      role: 'Full Stack',
      focus: 'Aplikasi Web',
    },
    about: {
      eyebrow: 'Tentang Saya',
      title: 'Saya membangun solusi web praktis untuk kebutuhan bisnis nyata.',
      description:
        'Saya berpengalaman membangun aplikasi web untuk kebutuhan bisnis, tools internal perusahaan, dashboard, admin panel, dan sistem manajemen. Fokus saya adalah antarmuka yang bersih, kode yang maintainable, alur data yang andal, dan fitur yang membantu tim bekerja lebih efisien.',
      p1: 'Saya terbiasa mengubah workflow operasional yang kompleks menjadi aplikasi web yang terstruktur, mulai dari halaman responsif, komponen UI reusable, fitur CRUD, authentication, permission, sampai integrasi API.',
      p2: 'Sebagian proyek saya bersifat rahasia, jadi hanya scope teknis yang bisa dibagikan secara publik. Proyek ditampilkan sebagai ringkasan umum tanpa membuka nama perusahaan, source code, screenshot, data internal, atau detail bisnis sensitif.',
    },
    skills: {
      eyebrow: 'Keahlian',
      title: 'Stack yang fokus untuk pengembangan web full stack modern.',
      description:
        'Teknologi dan kemampuan yang saya gunakan untuk membangun UI responsif, integrasi backend, dashboard, dan sistem internal bisnis.',
    },
    projects: {
      eyebrow: 'Pengalaman / Proyek',
      title: 'Proyek perusahaan rahasia ditampilkan berdasarkan scope teknis.',
      description:
        'Proyek ini diringkas tanpa nama perusahaan, data internal, screenshot, atau source code. Fokusnya pada tanggung jawab, masalah yang diselesaikan, dan teknologi yang digunakan.',
      contributions: 'Kontribusi Utama',
    },
    disclaimer: {
      eyebrow: 'Disclaimer Proyek Rahasia',
      title: 'Menjaga privasi klien dan perusahaan.',
      text: 'Karena perjanjian kerahasiaan dan kebijakan privasi perusahaan, beberapa proyek tidak dapat ditampilkan secara publik dengan nama asli, screenshot, source code, atau detail bisnis. Deskripsi yang ditampilkan adalah ringkasan umum dari pekerjaan nyata saya, dengan fokus pada tanggung jawab teknis, scope proyek, dan masalah yang saya bantu selesaikan.',
    },
    contact: {
      eyebrow: 'Kontak',
      title: 'Tertarik bekerja sama?',
      description:
        'Saya terbuka untuk peluang sebagai Full Stack Web Developer, Frontend Developer, atau freelance web developer.',
    },
    footer: 'Dibuat dengan Next.js, React, TypeScript, dan Tailwind CSS.',
  },
} as const;
