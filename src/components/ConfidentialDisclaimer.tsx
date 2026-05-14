import { SectionHeading } from './SectionHeading';

type DisclaimerText = {
  eyebrow: string;
  title: string;
  text: string;
};

export function ConfidentialDisclaimer({ t, theme }: { t: DisclaimerText; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section aria-labelledby="confidential-disclaimer-heading" className="px-4 py-20 sm:py-24">
      <div className={isDark ? 'mx-auto max-w-6xl rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-10' : 'mx-auto max-w-6xl rounded-[2rem] border border-amber-300 bg-amber-50/80 p-6 shadow-2xl shadow-amber-100/60 backdrop-blur sm:p-10'}>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} theme={theme} />
        <p id="confidential-disclaimer-heading" className={isDark ? 'text-lg leading-8 text-amber-50/90' : 'text-lg leading-8 text-amber-900'}>
          {t.text}
        </p>
      </div>
    </section>
  );
}
