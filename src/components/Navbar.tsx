import type { Locale } from '@/data/dictionary';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'services', href: '#services' },
  { key: 'contact', href: '#contact' },
] as const;

type NavbarProps = {
  t: Record<'about' | 'skills' | 'experience' | 'projects' | 'services' | 'contact' | 'hire', string>;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
};

export function Navbar({ t, locale, setLocale, theme, setTheme }: NavbarProps) {
  const isDark = theme === 'dark';

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className={isDark ? 'mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6' : 'mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-3 shadow-2xl shadow-slate-200/70 backdrop-blur-xl sm:px-6'}>
        <a id="brand-link" href="#home" className={isDark ? 'text-lg font-black tracking-[-0.04em] text-white' : 'text-lg font-black tracking-[-0.04em] text-slate-950'}>
          Zul<span className="text-cyan-400">.</span>
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              id={`nav-${item.key}`}
              key={item.href}
              href={item.href}
              className={isDark ? 'rounded-full px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white' : 'rounded-full px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950'}
            >
              {t[item.key]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            id="language-toggle-button"
            type="button"
            onClick={() => setLocale(locale === 'en' ? 'id' : 'en')}
            className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-black text-white transition hover:bg-white/15' : 'rounded-full border border-slate-200 bg-slate-950/5 px-3 py-2 text-xs font-black text-slate-950 transition hover:bg-slate-950/10'}
            aria-label="Toggle language"
          >
            {locale === 'en' ? 'ID' : 'EN'}
          </button>
          <button
            id="theme-toggle-button"
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={isDark ? 'rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-black text-white transition hover:bg-white/15' : 'rounded-full border border-slate-200 bg-slate-950/5 px-3 py-2 text-sm font-black text-slate-950 transition hover:bg-slate-950/10'}
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <a id="navbar-contact-button" href="#contact" className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 sm:inline-flex">
            {t.hire}
          </a>
        </div>
      </div>
    </header>
  );
}
