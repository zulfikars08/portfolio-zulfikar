import Image from 'next/image';
import zulfikarPhoto from '../../app/ZulfikarPhoto.jpeg';

type HeroText = {
  badge: string;
  name: string;
  headline: string;
  description: string;
  viewProjects: string;
  downloadCv: string;
  contactMe: string;
  role: string;
  focus: string;
};

const stats = ['Laravel', 'Next.js', 'Flutter', 'PostgreSQL'];

export function Hero({ t, theme }: { t: HeroText; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-500/20 px-4 pt-32 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div className="relative z-10 min-w-0">
          <p className={isDark ? 'mb-5 border-l-2 border-emerald-400 pl-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-300' : 'mb-5 border-l-2 border-emerald-700 pl-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-600'}>
            {t.badge}
          </p>
          <p className={isDark ? 'mb-4 text-lg font-bold text-emerald-300 sm:text-xl' : 'mb-4 text-lg font-bold text-emerald-700 sm:text-xl'}>{t.name}</p>
          <h1 className={isDark ? 'max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl max-[480px]:max-w-[22rem] max-[480px]:text-[clamp(2rem,8.5vw,2.6rem)] max-[480px]:leading-[0.98] max-[480px]:tracking-[-0.04em]' : 'max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl max-[480px]:max-w-[22rem] max-[480px]:text-[clamp(2rem,8.5vw,2.6rem)] max-[480px]:leading-[0.98] max-[480px]:tracking-[-0.04em]'}>
            {t.headline}
          </h1>
          <p className={isDark ? 'mt-7 max-w-2xl text-lg leading-8 text-slate-300 max-[480px]:mt-5 max-[480px]:text-base max-[480px]:leading-[1.65]' : 'mt-7 max-w-2xl text-lg leading-8 text-slate-700 max-[480px]:mt-5 max-[480px]:text-base max-[480px]:leading-[1.65]'}>{t.description}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap max-[480px]:grid max-[480px]:grid-cols-2 max-[480px]:gap-3 max-[480px]:mt-7 max-[374px]:grid-cols-1">
            <a id="view-projects-button" href="#projects" aria-label={t.viewProjects} className="group inline-flex min-h-11 items-center justify-center rounded-md bg-emerald-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-emerald-300 max-[480px]:col-span-2 max-[374px]:col-span-1">
              {t.viewProjects}<span className="ml-2 transition group-hover:translate-x-1">→</span>
            </a>
            <a id="download-cv-button" href="/Zulfikar Airlangga Siswanto-resume.pdf" target="_blank" rel="noreferrer" className={isDark ? 'inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-300/35 bg-emerald-300/10 px-6 py-4 font-bold text-emerald-100 transition hover:border-emerald-300/60 hover:bg-emerald-300/15 max-[480px]:px-3 max-[480px]:text-sm' : 'inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-700/30 bg-emerald-50 px-6 py-4 font-bold text-emerald-800 transition hover:border-emerald-700/50 hover:bg-emerald-100 max-[480px]:px-3 max-[480px]:text-sm'}>
              {t.downloadCv}
            </a>
            <a id="contact-me-button" href="#contact" className={isDark ? 'inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-6 py-4 font-bold text-white transition hover:border-white/30 hover:bg-white/5 max-[480px]:px-3 max-[480px]:text-sm' : 'inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-4 font-bold text-slate-950 transition hover:border-slate-400 hover:bg-white max-[480px]:px-3 max-[480px]:text-sm'}>
              {t.contactMe}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Core skills">
            {stats.map((item) => (
              <span key={item} className={isDark ? 'rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs font-semibold text-slate-300' : 'rounded-full border border-slate-200 bg-white/70 px-3 py-2 font-mono text-xs font-semibold text-slate-700'}>{item}</span>
            ))}
          </div>
        </div>

        <aside className={isDark ? 'relative z-10 max-w-full rounded-xl border border-white/15 bg-slate-900/90 p-3 shadow-2xl shadow-slate-950/40 sm:p-4' : 'relative z-10 max-w-full rounded-xl border border-slate-300 bg-white p-3 shadow-xl shadow-slate-300/30 sm:p-4'}>
          <div>
            <div className={isDark ? 'relative h-80 overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/45 max-[480px]:h-64 max-[480px]:rounded-2xl' : 'relative h-80 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white/60 max-[480px]:h-64 max-[480px]:rounded-2xl'}>
              <Image src={zulfikarPhoto} alt="Zulfikar Airlangga Siswanto" fill priority sizes="(max-width: 480px) calc(100vw - 64px), (max-width: 1024px) 90vw, 420px" className="object-cover object-top sm:object-[48%_48%] lg:object-[48%_62%] xl:object-[48%_54%]" />
            </div>
            <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-4">
              <div><strong className="block text-sm font-semibold">{t.role}</strong><span className={isDark ? 'text-sm text-slate-400' : 'text-sm text-slate-600'}>{t.focus}</span></div>
              <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,.8)]" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
