import Link from 'next/link';
import type { Locale } from '@/data/dictionary';
import { projectSlug } from '@/data/project-utils';
import { projects } from '@/data/projects';
import { SectionHeading } from './SectionHeading';

export function SelectedConfidentialProjects({ locale, theme }: { locale: Locale; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';
  const selected = projects[locale]
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => project.type.includes('Confidential') || project.type.includes('Rahasia'))
    .slice(0, 3);

  return (
    <section id="confidential-work" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={locale === 'id' ? 'Pekerjaan Profesional Pilihan' : 'Selected Professional Work'}
          title={locale === 'id' ? 'Studi kasus anonim dari sistem bisnis nyata.' : 'Anonymized case studies from real business systems.'}
          description={locale === 'id' ? 'Scope dan kontribusi teknis ditampilkan tanpa identitas perusahaan, data internal, atau aturan bisnis privat.' : 'Technical scope and contributions are shown without company identities, internal data, or private business rules.'}
          theme={theme}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {selected.map(({ project, index }) => (
            <article key={project.title} className={isDark ? 'rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6' : 'rounded-[1.75rem] border border-slate-200 bg-white/80 p-6'}>
              <p className={isDark ? 'text-xs font-black uppercase tracking-[0.16em] text-amber-200' : 'text-xs font-black uppercase tracking-[0.16em] text-amber-700'}>{project.type}</p>
              <h3 className={isDark ? 'mt-4 text-xl font-black text-white' : 'mt-4 text-xl font-black text-slate-950'}>{project.title}</h3>
              <p className={isDark ? 'mt-3 line-clamp-3 text-sm leading-6 text-slate-300' : 'mt-3 line-clamp-3 text-sm leading-6 text-slate-700'}>{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.techStack.slice(0, 4).map((tech) => <span key={tech} className={isDark ? 'rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-200' : 'rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700'}>{tech}</span>)}</div>
              <Link href={`/projects/${projectSlug(projects.en[index].title)}?lang=${locale}`} className={isDark ? 'mt-6 inline-flex font-bold text-cyan-200' : 'mt-6 inline-flex font-bold text-cyan-700'}>{locale === 'id' ? 'Lihat Studi Kasus' : 'View Case Study'} →</Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center"><Link href={`/projects?lang=${locale}`} className="inline-flex rounded-2xl bg-cyan-300 px-6 py-3 font-black text-slate-950">{locale === 'id' ? 'Lihat Semua Proyek' : 'View All Projects'} →</Link></div>
      </div>
    </section>
  );
}
