import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projectSlug } from '@/data/project-utils';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects | Zulfikar Airlangga Siswanto',
  description: 'Public projects and anonymized professional case studies by Zulfikar Airlangga Siswanto.',
  alternates: { canonical: '/projects' },
};

export default async function ProjectIndex({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = (await searchParams).lang === 'id' ? 'id' : 'en';
  const isId = locale === 'id';

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href={`/?lang=${locale}`} className="font-bold text-cyan-300">← {isId ? 'Beranda' : 'Home'}</Link>
        <h1 className="mt-8 text-4xl font-black sm:text-5xl">{isId ? 'Semua Proyek' : 'All Projects'}</h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          {isId ? 'Proyek publik ditampilkan lebih dahulu. Studi kasus profesional ditampilkan secara anonim untuk menjaga kerahasiaan.' : 'Public work appears first. Professional case studies are anonymized to protect confidential information.'}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects[locale].map((project, index) => {
            const confidential = project.type.includes('Confidential') || project.type.includes('Rahasia');
            return (
              <article key={project.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                {project.screenshot && !confidential ? (
                  <Image src={project.screenshot} alt={`${project.title} application screenshot`} width={1280} height={720} className="aspect-video w-full object-cover object-top" />
                ) : (
                  <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-cyan-300/10 via-violet-400/10 to-amber-300/10 p-6 text-center">
                    <span className="rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-sm font-bold">{isId ? 'Ilustrasi alur abstrak' : 'Abstract workflow illustration'}</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wider">
                    <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-cyan-200">{project.type}</span>
                    <span className={`rounded-full px-3 py-1.5 ${confidential ? 'bg-amber-300/10 text-amber-200' : 'bg-emerald-300/10 text-emerald-200'}`}>{confidential ? (isId ? 'Rahasia' : 'Confidential') : (isId ? 'Publik' : 'Public')}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-black">{project.title}</h2>
                  {project.status ? <p className="mt-2 text-sm font-bold text-amber-200">{project.status}</p> : null}
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-300">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.techStack.slice(0, 6).map((tech) => <span key={tech} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-200">{tech}</span>)}</div>
                  <Link className="mt-6 inline-flex font-bold text-cyan-300" href={`/projects/${projectSlug(projects.en[index].title)}?lang=${locale}`}>{isId ? 'Baca studi kasus' : 'Read case study'} →</Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
