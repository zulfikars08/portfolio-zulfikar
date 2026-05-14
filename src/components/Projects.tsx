import type { Locale } from '@/data/dictionary';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

type ProjectsText = {
  eyebrow: string;
  title: string;
  description: string;
  contributions: string;
};

export function Projects({ t, locale, theme }: { t: ProjectsText; locale: Locale; theme: 'dark' | 'light' }) {
  return (
    <section id="projects" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} theme={theme} />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects[locale].map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} contributionTitle={t.contributions} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}
