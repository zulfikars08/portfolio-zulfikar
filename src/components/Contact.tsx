import { SectionHeading } from './SectionHeading';

const links = [
  { label: 'Email', href: 'mailto:zulfikarsiswanto@gmail.com', value: 'zulfikarsiswanto@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/zulfikars08', value: 'github.com/zulfikars08' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zulfikar-airlangga-siswanto-556a97160/',
    value: 'Zulfikar Airlangga Siswanto',
  },
];

type ContactText = {
  eyebrow: string;
  title: string;
  description: string;
};

export function Contact({ t, theme }: { t: ContactText; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section id="contact" className="px-4 py-20 sm:py-24">
      <div className={isDark ? 'mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-violet-500/15 to-white/[0.04] p-6 text-center shadow-2xl shadow-black/20 backdrop-blur sm:p-12' : 'mx-auto max-w-6xl rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-cyan-100 via-violet-100 to-white p-6 text-center shadow-2xl shadow-slate-300/60 backdrop-blur sm:p-12'}>
        <SectionHeading centered eyebrow={t.eyebrow} title={t.title} description={t.description} theme={theme} />
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {links.map((link) => (
            <a
              id={`contact-${link.label.toLowerCase()}-link`}
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className={isDark ? 'rounded-3xl border border-white/10 bg-slate-950/40 p-5 text-left transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/10' : 'rounded-3xl border border-slate-200 bg-white/75 p-5 text-left transition hover:-translate-y-2 hover:border-cyan-300/70 hover:bg-white'}
            >
              <span className={isDark ? 'text-xs font-black uppercase tracking-[0.2em] text-cyan-200' : 'text-xs font-black uppercase tracking-[0.2em] text-cyan-700'}>{link.label}</span>
              <strong className={isDark ? 'mt-3 block break-words text-sm text-white' : 'mt-3 block break-words text-sm text-slate-950'}>{link.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
