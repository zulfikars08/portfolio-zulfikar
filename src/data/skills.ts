export type SkillCategory = { title: string; items: string[]; featured?: boolean };

export const skills: Record<'en' | 'id', SkillCategory[]> = {
  en: [
    { title: 'Core Stack', featured: true, items: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Node.js', 'Laravel', 'PHP', 'PostgreSQL', 'MySQL', 'REST API'] },
    { title: 'Additional Experience', items: ['Vue 3', 'Angular', 'Go', 'NestJS', 'Fastify', 'Livewire', 'Flutter', 'Dart', 'Redis', 'BullMQ'] },
    { title: 'Engineering Capabilities', items: ['Testing', 'CI/CD', 'Authentication', 'RBAC', 'API Integration', 'Database Modeling', 'Input Validation'] },
    { title: 'Tools & Cloud', items: ['Git', 'GitHub', 'GitLab CI', 'Docker', 'Nginx', 'AWS Cognito', 'AWS S3', 'Prisma', 'Postman', 'Jira'] },
  ],
  id: [
    { title: 'Stack Inti', featured: true, items: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Node.js', 'Laravel', 'PHP', 'PostgreSQL', 'MySQL', 'REST API'] },
    { title: 'Pengalaman Tambahan', items: ['Vue 3', 'Angular', 'Go', 'NestJS', 'Fastify', 'Livewire', 'Flutter', 'Dart', 'Redis', 'BullMQ'] },
    { title: 'Kapabilitas Engineering', items: ['Testing', 'CI/CD', 'Authentication', 'RBAC', 'API Integration', 'Database Modeling', 'Input Validation'] },
    { title: 'Tools & Cloud', items: ['Git', 'GitHub', 'GitLab CI', 'Docker', 'Nginx', 'AWS Cognito', 'AWS S3', 'Prisma', 'Postman', 'Jira'] },
  ],
};