import { skills } from '@/data/skills';
import { SectionHeading } from './SectionHeading';
import type { Locale } from '@/data/dictionary';

type SkillsText = {
  eyebrow: string;
  title: string;
  description: string;
};

export function Skills({ t, theme, locale }: { t: SkillsText; theme: 'dark' | 'light'; locale: Locale }) {
  const isDark = theme === 'dark';

  return (
    <section id="skills" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} theme={theme} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills[locale].map((category) => (
            <article
              key={category.title}
              className={
                category.featured
                  ? 'rounded-[1.75rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-300/15 to-violet-400/15 p-6 shadow-xl shadow-cyan-500/10 backdrop-blur transition hover:-translate-y-2 md:col-span-2 xl:col-span-2'
                  : isDark
                    ? 'rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.09]'
                    : 'rounded-[1.75rem] border border-slate-200 bg-white/75 p-6 shadow-xl shadow-slate-200/70 backdrop-blur transition hover:-translate-y-2 hover:border-cyan-300/70 hover:bg-white'
              }
            >
              <h3 className={isDark ? 'text-xl font-black text-white' : 'text-xl font-black text-slate-950'}>{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className={isDark ? 'rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-sm font-semibold text-slate-200' : 'rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700'}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
