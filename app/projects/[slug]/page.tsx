import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectSlug } from '@/data/project-utils';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.en.map((project) => ({ slug: projectSlug(project.title) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.en.find((item) => projectSlug(item.title) === slug);
  return project ? {
    title: `${project.title} | Zulfikar`,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.title, description: project.summary, images: project.screenshot ? [project.screenshot] : [] },
  } : {};
}

export default async function ProjectDetail({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> }) {
  const { slug } = await params;
  const locale = (await searchParams).lang === 'id' ? 'id' : 'en';
  const index = projects.en.findIndex((item) => projectSlug(item.title) === slug);
  if (index < 0) notFound();
  const project = projects[locale][index];
  const isId = locale === 'id';
  const confidential = project.type.includes('Confidential') || project.type.includes('Rahasia');
  const facts = [
    [isId ? 'Masalah' : 'Problem', project.problem],
    [isId ? 'Solusi' : 'Solution', project.solution],
    [isId ? 'Peran Saya' : 'My Role', project.role],
    [isId ? 'Arsitektur Teknis' : 'Technical Architecture', project.architecture],
    [isId ? 'Hasil' : 'Result', project.impact],
    [isId ? 'Status' : 'Status', project.status],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <main className="site-shell min-h-screen px-4 py-16">
      <article className="mx-auto max-w-5xl">
        <Link href={`/projects?lang=${locale}`} className="inline-flex min-h-11 items-center font-semibold text-emerald-400">← {isId ? 'Semua proyek' : 'All projects'}</Link>
        <div className="mt-10 flex flex-wrap gap-2 text-xs font-black uppercase tracking-wider">
          <span className="rounded-full bg-cyan-300/10 px-3 py-2 text-cyan-200">{project.type}</span>
          <span className={`rounded-full px-3 py-2 ${confidential ? 'bg-amber-300/10 text-amber-200' : 'bg-emerald-300/10 text-emerald-200'}`}>{confidential ? (isId ? 'Rahasia' : 'Confidential') : (isId ? 'Publik' : 'Public')}</span>
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.04em] sm:text-6xl">{project.title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{project.summary}</p>

        {project.demoVideo ? <video controls preload="metadata" className="mt-8 aspect-video w-full rounded-md border border-white/15 object-cover"><source src={project.demoVideo} /></video>
          : project.demoGif ? <Image unoptimized src={project.demoGif} alt={`${project.title} demo`} width={1280} height={720} priority className="mt-8 aspect-video w-full rounded-md border border-white/15 object-cover" />
          : project.screenshot ? <Image src={project.screenshot} alt={`${project.title} application screenshot`} width={1280} height={720} priority className="mt-8 aspect-video w-full rounded-md border border-white/15 object-cover object-top" />
          : <div className="mt-8 rounded-md border border-white/15 bg-slate-900 p-6"><h2 className="font-black text-cyan-200">{isId ? 'Alur Abstrak' : 'Abstract Workflow'}</h2><ol className="mt-4 grid gap-3 sm:grid-cols-4">{project.workflow.map((step, i) => <li key={step} className="border-l border-cyan-400 p-3"><b>{i + 1}.</b> {step}</li>)}</ol></div>}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && project.status === 'Live' ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950">Live Demo</a> : null}
          {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 px-5 py-3 font-bold">GitHub</a> : null}
          {project.backendGithubUrl ? <a href={project.backendGithubUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 px-5 py-3 font-bold">Backend GitHub</a> : null}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">{facts.map(([label, value]) => <Info key={label} label={label} value={value} />)}</div>
        <List title={isId ? 'Fitur Utama' : 'Key Features'} values={project.keyFeatures} />
        <List title={isId ? 'Tantangan Engineering' : 'Engineering Challenges'} values={project.challenges ?? []} />
        <List title={isId ? 'Keputusan Teknis' : 'Technical Decisions'} values={project.technicalDecisions} />
        <List title="Tech Stack" values={project.techStack} tags />
        {confidential ? <Info label={isId ? 'Catatan Kerahasiaan' : 'Confidentiality Note'} value={project.confidentiality} className="mt-5" /> : null}
      </article>
    </main>
  );
}

function Info({ label, value, className = '' }: { label: string; value: string; className?: string }) {
  return <section className={`rounded-md border border-white/15 bg-slate-900 p-6 ${className}`}><h2 className="font-black text-cyan-200">{label}</h2><p className="mt-3 leading-7 text-slate-300">{value}</p></section>;
}

function List({ title, values, tags = false }: { title: string; values: string[]; tags?: boolean }) {
  if (!values.length) return null;
  return <section className="mt-5 rounded-md border border-white/15 bg-slate-900 p-6"><h2 className="font-black text-cyan-200">{title}</h2><ul className={`mt-4 ${tags ? 'flex flex-wrap gap-2' : 'grid gap-2 sm:grid-cols-2'}`}>{values.map((value) => <li key={value} className={tags ? 'border border-white/15 px-3 py-2 text-sm text-cyan-100' : 'border-l border-white/20 p-3'}>{value}</li>)}</ul></section>;
}
