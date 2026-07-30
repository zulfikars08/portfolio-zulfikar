import Link from 'next/link';
import { projects } from '@/data/projects';
import { projectSlug } from '@/data/project-utils';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Projects | Zulfikar Airlangga Siswanto', alternates: { canonical: '/projects' } };
export default async function ProjectIndex({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
 const locale = (await searchParams).lang === 'id' ? 'id' : 'en';
 return <main className="min-h-screen bg-slate-950 px-4 py-16 text-white"><div className="mx-auto max-w-5xl"><Link href="/" className="text-cyan-300">← {locale === 'id' ? 'Beranda' : 'Home'}</Link><h1 className="mt-8 text-5xl font-black">{locale === 'id' ? 'Semua Proyek' : 'All Projects'}</h1><p className="mt-4 text-slate-300">{locale === 'id' ? 'Proyek publik ditampilkan lebih dahulu. Proyek rahasia dijelaskan tanpa nama, data, atau tangkapan layar perusahaan.' : 'Public work appears first. Confidential work omits company names, data, and screenshots.'}</p><div className="mt-10 grid gap-5 md:grid-cols-2">{projects[locale].map((project, i) => <article key={project.title} className="rounded-3xl border border-white/10 bg-white/5 p-6"><p className="text-xs font-bold uppercase text-cyan-300">{project.type}</p><h2 className="mt-3 text-2xl font-black">{project.title}</h2><p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p><Link className="mt-5 inline-block font-bold text-cyan-300" href={`/projects/${projectSlug(projects.en[i].title)}?lang=${locale}`}>{locale === 'id' ? 'Baca studi kasus' : 'Read case study'} →</Link></article>)}</div></div></main>;
}
