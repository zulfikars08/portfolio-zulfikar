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
    <section id="about" className="border-b border-slate-500/20 px-4 py-20 sm:py-24">
      <div className={isDark ? 'mx-auto max-w-6xl border-l border-cyan-400 p-6 sm:p-10 lg:p-14' : 'mx-auto max-w-6xl border-l border-cyan-600 p-6 sm:p-10 lg:p-14'}>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} theme={theme} />
        <div className={isDark ? 'grid gap-5 text-base leading-8 text-slate-300 lg:grid-cols-2' : 'grid gap-5 text-base leading-8 text-slate-700 lg:grid-cols-2'}>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>
      </div>
    </section>
  );
}
