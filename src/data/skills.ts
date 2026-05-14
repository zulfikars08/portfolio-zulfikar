export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Blade', 'Livewire'],
  },
  {
    title: 'Backend',
    items: ['Laravel', 'PHP', 'REST API', 'Laravel Sanctum', 'Laravel Jetstream', 'AWS Cognito', 'Node.js API Routes'],
  },
  {
    title: 'Mobile Development',
    items: ['Flutter', 'Dart', 'GetX', 'Dio', 'Android UI', 'Mobile Scanner', 'Camera Integration'],
  },
  {
    title: 'Database & ORM',
    items: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Eloquent ORM', 'Database Migration', 'Multi-Tenant Database'],
  },
  {
    title: 'Business Systems',
    items: [
      'ERP Modules',
      'Warehouse Workflow',
      'Sales Workflow',
      'Ecommerce Workflow',
      'Purchase Workflow',
      'Accounting Modules',
      'Manufacturing Modules',
      'Inventory Management',
    ],
  },
  {
    title: 'Reports & Documents',
    items: ['Excel Import/Export', 'PDF Generation', 'mPDF', 'Operational Reports', 'Print Layouts', 'Dashboard Reporting'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'GitLab CI', 'Postman', 'Figma', 'VS Code', 'Docker', 'Vite', 'NPM', 'Composer'],
  },
  {
    title: 'Other',
    items: [
      'Responsive Web Design',
      'CRUD Applications',
      'Dashboard Development',
      'Authentication',
      'Role-Based Access Control',
      'Dynamic Forms',
      'Dynamic Tables',
      'Multi-Language Apps',
      'Bug Fixing',
      'Feature Adjustments',
    ],
  },
];
