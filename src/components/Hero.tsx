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

const stats = ['ERP Modules', 'Mobile Apps', 'Dashboards', 'REST APIs'];

export function Hero({ t, theme }: { t: HeroText; theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-500/20 px-4 pt-36 sm:pt-44 max-[480px]:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-24 lg:grid-cols-[1.08fr_0.92fr] lg:pb-32 max-[480px]:gap-8 max-[480px]:pb-16">
        <div className="relative z-10 min-w-0">
          <p className={isDark ? 'mb-5 border-l-2 border-cyan-400 pl-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-300 max-[480px]:mb-3 max-[480px]:text-[10px]' : 'mb-5 border-l-2 border-cyan-600 pl-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-600 max-[480px]:mb-3 max-[480px]:text-[10px]'}>
            {t.badge}
          </p>
          <p className={isDark ? 'mb-4 text-lg font-black text-cyan-200 sm:text-xl max-[480px]:mb-2 max-[480px]:text-base' : 'mb-4 text-lg font-black text-cyan-700 sm:text-xl max-[480px]:mb-2 max-[480px]:text-base'}>{t.name}</p>
          <h1 className={isDark ? 'max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl max-[480px]:max-w-[22rem] max-[480px]:text-[clamp(2rem,8.5vw,2.6rem)] max-[480px]:leading-[0.98] max-[480px]:tracking-[-0.04em]' : 'max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl max-[480px]:max-w-[22rem] max-[480px]:text-[clamp(2rem,8.5vw,2.6rem)] max-[480px]:leading-[0.98] max-[480px]:tracking-[-0.04em]'}>
            {t.headline}
          </h1>
          <p className={isDark ? 'mt-7 max-w-2xl text-lg leading-8 text-slate-300 max-[480px]:mt-5 max-[480px]:text-base max-[480px]:leading-[1.65]' : 'mt-7 max-w-2xl text-lg leading-8 text-slate-700 max-[480px]:mt-5 max-[480px]:text-base max-[480px]:leading-[1.65]'}>{t.description}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap max-[480px]:grid max-[480px]:grid-cols-2 max-[480px]:gap-3 max-[480px]:mt-7 max-[374px]:grid-cols-1">
            <a id="view-projects-button" href="#projects" aria-label={t.viewProjects} className="group inline-flex items-center justify-center rounded-md bg-cyan-400 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-300 max-[480px]:col-span-2 max-[480px]:h-[52px] max-[480px]:py-0 max-[374px]:col-span-1">
              {t.viewProjects}<span className="ml-2 transition group-hover:translate-x-1">→</span>
            </a>
            <a id="download-cv-button" href="/Zulfikar Airlangga Siswanto-resume.pdf" target="_blank" rel="noreferrer" className={isDark ? 'inline-flex items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-6 py-4 font-bold text-cyan-100 backdrop-blur transition hover:-translate-y-1 hover:bg-cyan-300/15 max-[480px]:h-[52px] max-[480px]:px-3 max-[480px]:py-0 max-[480px]:text-sm' : 'inline-flex items-center justify-center rounded-2xl border border-cyan-300 bg-cyan-50 px-6 py-4 font-bold text-cyan-800 backdrop-blur transition hover:-translate-y-1 hover:bg-cyan-100 max-[480px]:h-[52px] max-[480px]:px-3 max-[480px]:py-0 max-[480px]:text-sm'}>
              {t.downloadCv}
            </a>
            <a id="contact-me-button" href="#contact" className={isDark ? 'inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15 max-[480px]:h-[52px] max-[480px]:px-3 max-[480px]:py-0 max-[480px]:text-sm' : 'inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 font-bold text-slate-950 backdrop-blur transition hover:-translate-y-1 hover:bg-white max-[480px]:h-[52px] max-[480px]:px-3 max-[480px]:py-0 max-[480px]:text-sm'}>
              {t.contactMe}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 max-[480px]:hidden">
            {stats.map((item) => (
              <span key={item} className={isDark ? 'rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-300' : 'rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-xs font-bold text-slate-700'}>{item}</span>
            ))}
          </div>
        </div>

        <aside className={isDark ? 'relative z-10 max-w-full rounded-md border border-white/15 bg-slate-900 p-4 sm:p-6' : 'relative z-10 max-w-full rounded-md border border-slate-300 bg-white p-4 sm:p-6'}>
          <div>
            <div className={isDark ? 'relative h-80 overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/45 max-[480px]:h-64 max-[480px]:rounded-2xl' : 'relative h-80 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white/60 max-[480px]:h-64 max-[480px]:rounded-2xl'}>
              <Image src={zulfikarPhoto} alt="Zulfikar Airlangga Siswanto" fill priority sizes="(max-width: 480px) calc(100vw - 64px), (max-width: 1024px) 90vw, 420px" className="object-cover object-top sm:object-[48%_48%] lg:object-[48%_62%] xl:object-[48%_54%]" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 max-[480px]:mt-3 max-[320px]:hidden">
              <div className={isDark ? 'rounded-2xl border border-white/10 bg-white/10 p-4' : 'rounded-2xl border border-slate-200 bg-white/70 p-4'}>
                <strong className={isDark ? 'block text-2xl text-white' : 'block text-2xl text-slate-950'}>Zul</strong>
                <span className={isDark ? 'text-sm text-slate-300' : 'text-sm text-slate-600'}>Developer</span>
              </div>
              <div className={isDark ? 'rounded-2xl border border-white/10 bg-white/10 p-4' : 'rounded-2xl border border-slate-200 bg-white/70 p-4'}>
                <strong className={isDark ? 'block text-xl text-cyan-200' : 'block text-xl text-cyan-700'}>{t.role}</strong>
                <span className={isDark ? 'text-sm text-slate-300' : 'text-sm text-slate-600'}>{t.focus}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
