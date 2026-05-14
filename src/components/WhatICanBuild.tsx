import type { Locale } from '@/data/dictionary';
import { buildItems } from '@/data/build';
import { SectionHeading } from './SectionHeading';

type BuildText = {
  eyebrow: string;
  title: string;
  description: string;
};

export function WhatICanBuild({ t, locale, theme }: { t: BuildText; locale: Locale; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section id="services" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} theme={theme} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildItems[locale].map((item, index) => (
            <article key={item} className={isDark ? 'group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.09]' : 'group rounded-[1.5rem] border border-slate-200 bg-white/75 p-5 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-white'}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-400 text-sm font-black text-slate-950">{index + 1}</div>
              <h3 className={isDark ? 'text-lg font-black text-white' : 'text-lg font-black text-slate-950'}>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
