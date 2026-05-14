export type SkillCategory = {
  title: string;
  items: string[];
  featured?: boolean;
};

export const skills: SkillCategory[] = [
  {
    title: 'Main Stack',
    featured: true,
    items: ['Laravel', 'Next.js', 'Flutter', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Blade', 'Livewire'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'REST API', 'Authentication', 'Role-Based Access Control', 'Laravel Sanctum', 'Laravel Jetstream'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'Data Modeling', 'Prisma ORM', 'Eloquent ORM', 'Database Migration'],
  },
  {
    title: 'Cloud & Tools',
    items: ['AWS S3', 'AWS Cognito', 'Git', 'GitHub', 'GitLab CI', 'Jira', 'Postman', 'Docker', 'Figma', 'VS Code'],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'Dart', 'GetX', 'Dio', 'Android UI', 'Mobile Scanner', 'Camera Integration'],
  },
  {
    title: 'Business Systems',
    items: ['ERP Modules', 'Warehouse Workflow', 'Sales Workflow', 'Ecommerce Workflow', 'Inventory Management', 'PDF/Excel Reports'],
  },
  {
    title: 'Soft Skills',
    items: ['Communication', 'Teamwork', 'Time Management', 'Adaptability', 'Problem Solving', 'Leadership'],
  },
];
