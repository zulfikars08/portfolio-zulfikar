export type Locale = 'en' | 'id';

export const dictionary = {
  en: {
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Case Studies', services: 'What I Build', contact: 'Contact', hire: 'Hire Me' },
    hero: {
      badge: 'Full Stack Developer / Programmer',
      name: 'Zulfikar Airlangga Siswanto',
      headline:
        'Full Stack Developer specializing in internal business systems, dashboards, ERP modules, and mobile apps using Laravel, Next.js, Flutter, and PostgreSQL.',
      description:
        'I build practical, scalable software for business operations — from admin dashboards and APIs to warehouse workflows, sales systems, mobile apps, and reporting tools.',
      viewProjects: 'View Case Studies',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me',
      role: 'Business Systems',
      focus: 'Web & Mobile Apps',
    },
    about: {
      eyebrow: 'About Me',
      title: 'I turn operational problems into reliable web and mobile applications.',
      description:
        'I have experience building internal business systems, ERP modules, dashboards, mobile apps, APIs, reporting tools, and management platforms. My focus is clean implementation, practical UX, maintainable code, and features that help teams work faster.',
      p1: 'I work across frontend, backend, mobile, and database layers using Laravel, Next.js, Flutter, MySQL, PostgreSQL, and API-driven architectures.',
      p2: 'Some of my professional projects are confidential. For portfolio purposes, I present them as anonymized case studies focused on my role, technical scope, and business problems solved.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'A practical stack for business-focused product development.',
      description:
        'Grouped by what recruiters and teams usually need to evaluate: main stack, frontend, backend, database, cloud/tools, and collaboration skills.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Professional experience across business systems and collaborative frontend work.',
      description: 'A concise timeline of roles, technologies, and delivery focus.',
    },
    projects: {
      eyebrow: 'Case Studies',
      title: 'Anonymized case studies focused on scope, role, and impact.',
      description:
        'Some of my professional projects are under confidentiality restrictions. To respect company privacy, I present them as anonymized case studies focused on my role, technical scope, and business problems solved.',
      contributions: 'Key Contributions',
      filters: { all: 'All', web: 'Web App', mobile: 'Mobile App', backend: 'Backend/API', erp: 'ERP', saas: 'SaaS', academic: 'Academic' },
      viewCaseStudy: 'View Case Study',
      hideCaseStudy: 'Hide Case Study',
      labels: {
        overview: 'Overview',
        problem: 'Problem',
        solution: 'Solution',
        role: 'My Role',
        stack: 'Tech Stack',
        features: 'Key Features',
        impact: 'Result / Impact',
        confidentiality: 'Confidentiality Note',
        workflow: 'Workflow',
      },
    },
    build: {
      eyebrow: 'What I Can Build',
      title: 'Software I can help companies design and ship.',
      description: 'I focus on practical systems that support daily operations, internal teams, and data-driven workflows.',
    },
    disclaimer: {
      eyebrow: 'Confidential Work',
      title: 'Professional, privacy-first project presentation.',
      text: 'Some of my professional projects are under confidentiality restrictions. To respect company privacy, I present them as anonymized case studies focused on my role, technical scope, and business problems solved.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Interested in working together?',
      description:
        'I’m open to opportunities as a Full Stack Developer, Frontend Developer, Mobile Developer, or freelance web developer.',
      availability: 'Email contact is active — use the form below or message me on WhatsApp for a faster response.',
      formTitle: 'Send me a message',
      formDescription: 'Your message will be delivered directly to my email inbox.',
      labels: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message' },
      placeholders: {
        name: 'Your name',
        email: 'your@email.com',
        subject: 'Project or job opportunity',
        message: 'Tell me briefly about your project, role, timeline, or opportunity...',
      },
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Thank you! Your message has been sent successfully. I will review it and reply as soon as possible.',
      error: 'Sorry, something went wrong. Please try again or contact me via WhatsApp.',
      validation: {
        required: 'Please fill in all fields before sending.',
        invalidEmail: 'Please enter a valid email address.',
        shortMessage: 'Message must be at least 10 characters.',
      },
      linksTitle: 'Other ways to reach me',
      open: 'Open',
      whatsapp: 'Message me on WhatsApp',
    },
    footer: 'Built with Next.js, React, TypeScript, and Tailwind CSS.',
  },
  id: {
    nav: { about: 'Tentang', skills: 'Keahlian', experience: 'Pengalaman', projects: 'Studi Kasus', services: 'Yang Bisa Dibuat', contact: 'Kontak', hire: 'Rekrut Saya' },
    hero: {
      badge: 'Full Stack Developer / Programmer',
      name: 'Zulfikar Airlangga Siswanto',
      headline:
        'Full Stack Developer yang fokus membangun sistem bisnis internal, dashboard, modul ERP, dan aplikasi mobile menggunakan Laravel, Next.js, Flutter, dan PostgreSQL.',
      description:
        'Saya membangun software praktis dan scalable untuk operasional bisnis — mulai dari admin dashboard, API, workflow warehouse, sistem sales, aplikasi mobile, sampai reporting tools.',
      viewProjects: 'Lihat Studi Kasus',
      downloadCv: 'Download CV',
      contactMe: 'Hubungi Saya',
      role: 'Sistem Bisnis',
      focus: 'Web & Mobile Apps',
    },
    about: {
      eyebrow: 'Tentang Saya',
      title: 'Saya mengubah masalah operasional menjadi aplikasi web dan mobile yang reliable.',
      description:
        'Saya berpengalaman membangun sistem bisnis internal, modul ERP, dashboard, aplikasi mobile, API, reporting tools, dan platform manajemen. Fokus saya adalah implementasi bersih, UX praktis, kode maintainable, dan fitur yang membantu tim bekerja lebih cepat.',
      p1: 'Saya bekerja di layer frontend, backend, mobile, dan database menggunakan Laravel, Next.js, Flutter, MySQL, PostgreSQL, dan arsitektur berbasis API.',
      p2: 'Sebagian project profesional saya bersifat confidential. Untuk portfolio, saya menampilkannya sebagai studi kasus anonim yang fokus pada role, scope teknis, dan masalah bisnis yang diselesaikan.',
    },
    skills: {
      eyebrow: 'Keahlian',
      title: 'Stack praktis untuk pengembangan produk berbasis kebutuhan bisnis.',
      description:
        'Dikelompokkan berdasarkan hal yang biasanya dinilai recruiter dan tim: main stack, frontend, backend, database, cloud/tools, dan skill kolaborasi.',
    },
    experience: {
      eyebrow: 'Pengalaman',
      title: 'Pengalaman profesional di sistem bisnis dan frontend kolaboratif.',
      description: 'Timeline singkat berisi role, teknologi, dan fokus pekerjaan.',
    },
    projects: {
      eyebrow: 'Studi Kasus',
      title: 'Studi kasus anonim yang fokus pada scope, role, dan impact.',
      description:
        'Sebagian project profesional saya berada dalam batasan confidential. Untuk menjaga privasi perusahaan, saya menampilkannya sebagai studi kasus anonim yang fokus pada role, scope teknis, dan masalah bisnis yang diselesaikan.',
      contributions: 'Kontribusi Utama',
      filters: { all: 'Semua', web: 'Web App', mobile: 'Mobile App', backend: 'Backend/API', erp: 'ERP', saas: 'SaaS', academic: 'Akademik' },
      viewCaseStudy: 'Lihat Studi Kasus',
      hideCaseStudy: 'Tutup Studi Kasus',
      labels: {
        overview: 'Ringkasan',
        problem: 'Masalah',
        solution: 'Solusi',
        role: 'Role Saya',
        stack: 'Tech Stack',
        features: 'Fitur Utama',
        impact: 'Hasil / Impact',
        confidentiality: 'Catatan Confidential',
        workflow: 'Workflow',
      },
    },
    build: {
      eyebrow: 'Yang Bisa Saya Bangun',
      title: 'Software yang bisa saya bantu desain dan kembangkan.',
      description: 'Saya fokus pada sistem praktis untuk operasional harian, tim internal, dan workflow berbasis data.',
    },
    disclaimer: {
      eyebrow: 'Pekerjaan Confidential',
      title: 'Presentasi project profesional yang tetap menjaga privasi.',
      text: 'Sebagian project profesional saya berada dalam batasan confidential. Untuk menjaga privasi perusahaan, saya menampilkannya sebagai studi kasus anonim yang fokus pada role, scope teknis, dan masalah bisnis yang diselesaikan.',
    },
    contact: {
      eyebrow: 'Kontak',
      title: 'Tertarik bekerja sama?',
      description:
        'Saya terbuka untuk peluang sebagai Full Stack Developer, Frontend Developer, Mobile Developer, atau freelance web developer.',
      availability: 'Email contact aktif — gunakan form di bawah atau hubungi saya lewat WhatsApp untuk respons lebih cepat.',
      formTitle: 'Kirim pesan ke saya',
      formDescription: 'Pesan kamu akan langsung dikirim ke inbox email saya.',
      labels: { name: 'Nama', email: 'Email', subject: 'Subjek', message: 'Pesan' },
      placeholders: {
        name: 'Nama kamu',
        email: 'email@kamu.com',
        subject: 'Project atau peluang kerja',
        message: 'Ceritakan singkat tentang project, role, timeline, atau peluang yang ingin dibahas...',
      },
      submit: 'Kirim Pesan',
      sending: 'Mengirim...',
      success: 'Terima kasih! Pesan kamu berhasil dikirim. Saya akan cek dan balas secepatnya.',
      error: 'Maaf, terjadi kendala. Silakan coba lagi atau hubungi saya lewat WhatsApp.',
      validation: {
        required: 'Mohon isi semua field sebelum mengirim.',
        invalidEmail: 'Mohon masukkan alamat email yang valid.',
        shortMessage: 'Pesan minimal harus 10 karakter.',
      },
      linksTitle: 'Cara lain menghubungi saya',
      open: 'Buka',
      whatsapp: 'Hubungi saya lewat WhatsApp',
    },
    footer: 'Dibuat dengan Next.js, React, TypeScript, dan Tailwind CSS.',
  },
} as const;
