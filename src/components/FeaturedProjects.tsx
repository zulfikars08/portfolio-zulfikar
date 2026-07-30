import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/data/dictionary';
import { projectSlug } from '@/data/project-utils';
import { projects } from '@/data/projects';
import { SectionHeading } from './SectionHeading';

const titles = ['Mini ERP Invoicing System', 'PixelQueue', 'Article Management System'];

type Text = {
  eyebrow: string;
  title: string;
  description: string;
  viewCaseStudy: string;
  liveDemo: string;
  frontendGithub: string;
  backendGithub: string;
};

export function FeaturedProjects({ t, locale, theme }: { t: Text; locale: Locale; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';
  const featured = titles.map((title) => {
    const index = projects.en.findIndex((project) => project.title === title);
    return { project: projects[locale][index], slug: projectSlug(title) };
  });

  return (
    <section id="projects" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={locale === 'id' ? 'Proyek Publik Unggulan' : 'Featured Public Projects'} title={t.title} description={t.description} theme={theme} />
        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map(({ project, slug }) => (
            <article key={project.title} className={isDark ? 'flex overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-xl shadow-black/10' : 'flex overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 shadow-xl shadow-slate-200/70'}>
              <div className="flex min-w-0 flex-1 flex-col">
                {project.screenshot ? <Image src={project.screenshot} alt={`${project.title} application screenshot`} width={1280} height={720} className="aspect-video w-full object-cover object-top" /> : null}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className={isDark ? 'text-2xl font-black text-white' : 'text-2xl font-black text-slate-950'}>{project.title}</h3>
                  <p className={isDark ? 'mt-3 line-clamp-3 text-sm leading-6 text-slate-300' : 'mt-3 line-clamp-3 text-sm leading-6 text-slate-700'}>{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.techStack.slice(0, 6).map((tech) => <span key={tech} className={isDark ? 'rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-200' : 'rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700'}>{tech}</span>)}</div>
                  {project.status ? <p className="mt-4 text-sm font-bold text-amber-300">{project.status}</p> : null}
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.liveUrl && project.status === 'Live' ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-black text-slate-950">{t.liveDemo}</a> : null}
                    {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={isDark ? 'rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold' : 'rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold'}>{project.backendGithubUrl ? t.frontendGithub : 'GitHub'}</a> : null}
                    {project.backendGithubUrl ? <a href={project.backendGithubUrl} target="_blank" rel="noopener noreferrer" className={isDark ? 'rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold' : 'rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold'}>{t.backendGithub}</a> : null}
                    <Link href={`/projects/${slug}?lang=${locale}`} className={isDark ? 'rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold' : 'rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold'}>{t.viewCaseStudy}</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
