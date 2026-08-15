type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme: 'dark' | 'light';
};

export function SectionHeading({ eyebrow, title, description, centered = false, theme }: SectionHeadingProps) {
  const isDark = theme === 'dark';

  return (
    <div className={centered ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-12 max-w-3xl'}>
      <p className={isDark ? 'mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300' : 'mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-700'}>
        {eyebrow}
      </p>
      <h2 className={isDark ? 'text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl' : 'text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl'}>
        {title}
      </h2>
      {description ? <p className={isDark ? 'mt-5 text-base leading-8 text-slate-300 sm:text-lg' : 'mt-5 text-base leading-8 text-slate-700 sm:text-lg'}>{description}</p> : null}
    </div>
  );
}
