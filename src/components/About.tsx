import { SectionHeading } from './SectionHeading';

type AboutText = {
  eyebrow: string;
  title: string;
  description: string;
  p1: string;
  p2: string;
};

export function About({ t, theme }: { t: AboutText; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section id="about" className="px-4 py-20 sm:py-24">
      <div className={isDark ? 'mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-10 lg:p-14' : 'mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white/75 p-6 shadow-2xl shadow-slate-300/50 backdrop-blur sm:p-10 lg:p-14'}>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} theme={theme} />
        <div className={isDark ? 'grid gap-5 text-base leading-8 text-slate-300 lg:grid-cols-2' : 'grid gap-5 text-base leading-8 text-slate-700 lg:grid-cols-2'}>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>
      </div>
    </section>
  );
}
