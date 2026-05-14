'use client';

import { useMemo, useState } from 'react';
import type { Locale } from '@/data/dictionary';
import { projects, type ProjectCategory } from '@/data/projects';
import { SectionHeading } from './SectionHeading';

type ProjectsText = {
  eyebrow: string;
  title: string;
  description: string;
  contributions: string;
  filters: Record<'all' | ProjectCategory, string>;
  viewCaseStudy: string;
  hideCaseStudy: string;
  labels: Record<'overview' | 'problem' | 'solution' | 'role' | 'stack' | 'features' | 'impact' | 'confidentiality' | 'workflow', string>;
};

const filterKeys: Array<'all' | ProjectCategory> = ['all', 'web', 'mobile', 'backend', 'erp', 'saas', 'academic'];

export function Projects({ t, locale, theme }: { t: ProjectsText; locale: Locale; theme: 'dark' | 'light' }) {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [openProject, setOpenProject] = useState<string | null>(null);
  const isDark = theme === 'dark';

  const filteredProjects = useMemo(() => {
    return projects[locale].filter((project) => activeFilter === 'all' || (project.categories as ProjectCategory[]).includes(activeFilter));
  }, [activeFilter, locale]);

  return (
    <section id="projects" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} theme={theme} />

        <div className={isDark ? 'mb-8 rounded-[1.5rem] border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-7 text-amber-50/90' : 'mb-8 rounded-[1.5rem] border border-amber-300 bg-amber-50/80 p-5 text-sm leading-7 text-amber-900'}>
          {t.description}
        </div>

        <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label="Project filters">
          {filterKeys.map((key) => {
            const active = activeFilter === key;
            return (
              <button
                id={`filter-${key}-button`}
                key={key}
                type="button"
                onClick={() => {
                  setActiveFilter(key);
                  setOpenProject(null);
                }}
                className={
                  active
                    ? 'rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20'
                    : isDark
                      ? 'rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white'
                      : 'rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950'
                }
                aria-pressed={active}
              >
                {t.filters[key]}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const isOpen = openProject === project.title;
            return (
              <article key={project.title} className={isDark ? 'overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40' : 'overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 shadow-2xl shadow-slate-200/70 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/70'}>
                <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                  <div className={isDark ? 'border-b border-white/10 bg-slate-950/35 p-6 md:border-b-0 md:border-r' : 'border-b border-slate-200 bg-slate-50/80 p-6 md:border-b-0 md:border-r'}>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className={isDark ? 'rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-100' : 'rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-700'}>{project.type}</span>
                      <span className="text-sm font-black text-cyan-400">0{index + 1}</span>
                    </div>
                    <div className={isDark ? 'rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/10 via-violet-400/10 to-amber-300/10 p-4' : 'rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50 via-violet-50 to-amber-50 p-4'}>
                      <div className="space-y-3">
                        {project.workflow.map((step, stepIndex) => (
                          <div key={step} className={isDark ? 'flex items-center gap-3 rounded-2xl bg-slate-950/45 p-3' : 'flex items-center gap-3 rounded-2xl bg-white/80 p-3'}>
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-300 text-xs font-black text-slate-950">{stepIndex + 1}</span>
                            <span className={isDark ? 'text-sm font-bold text-slate-200' : 'text-sm font-bold text-slate-700'}>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className={isDark ? 'text-2xl font-black tracking-[-0.03em] text-white' : 'text-2xl font-black tracking-[-0.03em] text-slate-950'}>{project.title}</h3>
                    <p className={isDark ? 'mt-4 leading-7 text-slate-300' : 'mt-4 leading-7 text-slate-700'}>{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span key={tech} className={isDark ? 'rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-slate-100' : 'rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700'}>{tech}</span>
                      ))}
                    </div>
                    <button
                      id={`case-study-${index + 1}-button`}
                      type="button"
                      onClick={() => setOpenProject(isOpen ? null : project.title)}
                      className="mt-7 inline-flex rounded-2xl bg-gradient-to-r from-cyan-300 to-violet-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-1"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? t.hideCaseStudy : t.viewCaseStudy}
                    </button>
                  </div>
                </div>

                <div className={isOpen ? 'grid grid-rows-[1fr] transition-all duration-300' : 'grid grid-rows-[0fr] transition-all duration-300'}>
                  <div className="overflow-hidden">
                    <div className={isDark ? 'border-t border-white/10 p-6 sm:p-7' : 'border-t border-slate-200 p-6 sm:p-7'}>
                      <div className="grid gap-5 md:grid-cols-2">
                        <Detail label={t.labels.overview} value={project.summary} theme={theme} />
                        <Detail label={t.labels.problem} value={project.problem} theme={theme} />
                        <Detail label={t.labels.solution} value={project.solution} theme={theme} />
                        <Detail label={t.labels.role} value={project.role} theme={theme} />
                        <Detail label={t.labels.impact} value={project.impact} theme={theme} />
                        <Detail label={t.labels.confidentiality} value={project.confidentiality} theme={theme} />
                      </div>
                      <div className="mt-6 grid gap-5 md:grid-cols-2">
                        <ListDetail label={t.labels.features} values={project.keyFeatures} theme={theme} />
                        <ListDetail label={t.labels.stack} values={project.techStack} theme={theme} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value, theme }: { label: string; value: string; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';
  return (
    <div className={isDark ? 'rounded-3xl border border-white/10 bg-white/[0.04] p-5' : 'rounded-3xl border border-slate-200 bg-slate-50/80 p-5'}>
      <h4 className={isDark ? 'text-sm font-black uppercase tracking-[0.18em] text-cyan-200' : 'text-sm font-black uppercase tracking-[0.18em] text-cyan-700'}>{label}</h4>
      <p className={isDark ? 'mt-3 text-sm leading-7 text-slate-300' : 'mt-3 text-sm leading-7 text-slate-700'}>{value}</p>
    </div>
  );
}

function ListDetail({ label, values, theme }: { label: string; values: string[]; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';
  return (
    <div className={isDark ? 'rounded-3xl border border-white/10 bg-white/[0.04] p-5' : 'rounded-3xl border border-slate-200 bg-slate-50/80 p-5'}>
      <h4 className={isDark ? 'text-sm font-black uppercase tracking-[0.18em] text-cyan-200' : 'text-sm font-black uppercase tracking-[0.18em] text-cyan-700'}>{label}</h4>
      <div className="mt-4 flex flex-wrap gap-2">
        {values.map((value) => (
          <span key={value} className={isDark ? 'rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-slate-100' : 'rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700'}>{value}</span>
        ))}
      </div>
    </div>
  );
}
