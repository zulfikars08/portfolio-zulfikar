export type SkillCategory = {
  title: string;
  items: string[];
  featured?: boolean;
};

export const skills: Record<'en' | 'id', SkillCategory[]> = { en: [
  {
    title: 'Main Stack',
    featured: true,
    items: ['Laravel', 'Next.js', 'Flutter', 'MySQL', 'PostgreSQL'],
  },
  { title: 'Web & Mobile', items: ['Next.js', 'React', 'Vue 3', 'Angular', 'Laravel', 'Livewire', 'Flutter', 'Tailwind CSS'] },
  {
    title: 'Backend & Data',
    items: ['PHP', 'Go', 'NestJS', 'Fastify', 'REST API', 'MySQL', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ'],
  },

  {
    title: 'Delivery & Tools',
    items: ['Git', 'GitHub', 'GitLab CI', 'Docker', 'Nginx', 'AWS Cognito', 'Postman', 'Jira'],
  },
], id: [
  { title: 'Stack Utama', featured: true, items: ['Laravel', 'Next.js', 'Flutter', 'MySQL', 'PostgreSQL'] },
  { title: 'Web & Mobile', items: ['Next.js', 'React', 'Vue 3', 'Angular', 'Laravel', 'Livewire', 'Flutter', 'Tailwind CSS'] },
  { title: 'Backend & Data', items: ['PHP', 'Go', 'NestJS', 'Fastify', 'REST API', 'MySQL', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ'] },
  { title: 'Delivery & Tools', items: ['Git', 'GitHub', 'GitLab CI', 'Docker', 'Nginx', 'AWS Cognito', 'Postman', 'Jira'] },
] };
