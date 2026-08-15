import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/data/dictionary';
import { projectSlug } from '@/data/project-utils';
import { projects } from '@/data/projects';
import { SectionHeading } from './SectionHeading';

const titles = ['Mini ERP Invoicing System', 'PixelQueue', 'Article Management System'];

const homepageSummaries: Record<Locale, Record<string, string>> = {
  en: {
    'Mini ERP Invoicing System': 'A full-stack invoicing system with customer management, multi-item invoices, JWT authentication, and dashboard analytics.',
    PixelQueue: 'An asynchronous image-processing service with a Fastify API, BullMQ queue, Redis, and a separate Sharp worker.',
    'Article Management System': 'A Vue and Go CMS for creating, drafting, publishing, previewing, and soft-deleting articles.',
  },
  id: {
    'Mini ERP Invoicing System': 'Sistem invoicing full-stack dengan manajemen pelanggan, invoice multi-item, autentikasi JWT, dan analitik dashboard.',
    PixelQueue: 'Layanan pemrosesan gambar asinkron dengan Fastify API, antrean BullMQ, Redis, dan Sharp worker terpisah.',
    'Sistem Manajemen Artikel': 'CMS berbasis Vue dan Go untuk membuat, menyimpan draf, menerbitkan, meninjau, dan menghapus artikel secara lunak.',
  },
};

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
    <section id="projects" className="border-b border-slate-500/20 px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={locale === 'id' ? 'Proyek Publik Unggulan' : 'Featured Public Projects'} title={t.title} description={t.description} theme={theme} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map(({ project, slug }, index) => (
            <article key={project.title} className={`${isDark ? 'flex overflow-hidden rounded-md border border-white/15 bg-slate-900' : 'flex overflow-hidden rounded-md border border-slate-300 bg-white'} md:last:col-span-2 lg:last:col-span-1`}>
              <div className="flex min-w-0 flex-1 flex-col">
                {index === 1 ? <><Image src="/projects/pixelqueue-architecture-compact.svg" alt="PixelQueue flow: React, Fastify, Redis and BullMQ, Sharp, and output" width={1280} height={720} className="aspect-video w-full bg-slate-950 object-contain xl:hidden" /><Image src="/projects/pixelqueue-architecture.svg" alt="PixelQueue architecture: React frontend, Fastify API, Redis and BullMQ queue, Sharp worker, and processed output" width={1280} height={720} className="hidden aspect-video w-full bg-slate-950 object-contain xl:block" /></> : index === 2 ? <Image src="/projects/article-cms-card.webp" alt={`${project.title} posts management interface`} width={1280} height={720} className="aspect-video w-full object-cover object-top" /> : project.screenshot ? <Image src={project.screenshot} alt={`${project.title} application screenshot`} width={1280} height={720} className="aspect-video w-full object-cover object-top" /> : null}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className={isDark ? 'text-2xl font-black text-white' : 'text-2xl font-black text-slate-950'}>{project.title}</h3>
                  <p className={isDark ? 'mt-3 text-sm leading-6 text-slate-300' : 'mt-3 text-sm leading-6 text-slate-700'}>{homepageSummaries[locale][project.title]}</p>
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
