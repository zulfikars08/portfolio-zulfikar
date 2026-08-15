import type { Locale } from '@/data/dictionary';
import { experience } from '@/data/experience';
import { SectionHeading } from './SectionHeading';

type ExperienceText = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ExperienceTimeline({ t, locale, theme }: { t: ExperienceText; locale: Locale; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="border-b border-slate-500/20 px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} theme={theme} />
        <div className="relative grid gap-6 md:grid-cols-2">
          {experience[locale].map((item, index) => (
            <article key={`${item.company}-${item.period}`} className={isDark ? 'relative rounded-md border border-white/15 bg-slate-900 p-6 sm:p-8' : 'relative rounded-md border border-slate-300 bg-white p-6 sm:p-8'}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-cyan-400 text-sm font-black text-cyan-400">0{index + 1}</span>
                <span className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-300' : 'rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600'}>{item.period}</span>
              </div>
              <h3 className={isDark ? 'text-2xl font-black text-white' : 'text-2xl font-black text-slate-950'}>{item.role}</h3>
              <p className="mt-1 font-bold text-cyan-400">{item.company}</p>
              <p className={isDark ? 'mt-4 leading-7 text-slate-300' : 'mt-4 leading-7 text-slate-700'}>{item.focus}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className={isDark ? 'rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-slate-100' : 'rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700'}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
