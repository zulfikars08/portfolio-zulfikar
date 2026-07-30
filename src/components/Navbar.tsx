'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/data/dictionary';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
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
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-25% 0px -65%' },
    );
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  const shell = isDark
    ? 'border-white/10 bg-slate-950/90 text-white shadow-black/30'
    : 'border-slate-200 bg-white/95 text-slate-950 shadow-slate-200/70';
  const navLabel = locale === 'id' ? 'Navigasi utama' : 'Primary navigation';
  const toggleLabel = locale === 'id' ? (open ? 'Tutup menu' : 'Buka menu') : open ? 'Close menu' : 'Open menu';

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className={`mx-auto max-w-7xl rounded-3xl border px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6 ${shell}`}>
        <div className="flex items-center justify-between gap-3">
          <a id="brand-link" href="#home" className="text-lg font-black tracking-[-0.04em]">
            Zul<span className="text-cyan-400">.</span>
          </a>
          <nav aria-label={navLabel} className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} aria-current={active === item.key ? 'location' : undefined} className={`rounded-full px-3 py-2 text-xs font-semibold transition ${active === item.key ? 'bg-cyan-300 text-slate-950' : isDark ? 'text-slate-300 hover:bg-white/10 hover:text-white' : 'text-slate-600 hover:bg-slate-950/5 hover:text-slate-950'}`}>
                {t[item.key]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setLocale(locale === 'en' ? 'id' : 'en')} className="rounded-full border border-current/20 px-3 py-2 text-xs font-black" aria-label={locale === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}>{locale === 'en' ? 'ID' : 'EN'}</button>
            <button type="button" onClick={() => setTheme(isDark ? 'light' : 'dark')} className="rounded-full border border-current/20 px-3 py-2 text-sm" aria-label={locale === 'id' ? `Gunakan tema ${isDark ? 'terang' : 'gelap'}` : `Use ${isDark ? 'light' : 'dark'} theme`}>{isDark ? '☀' : '☾'}</button>
            <button type="button" className="rounded-full border border-current/20 px-3 py-2 text-sm font-black lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={toggleLabel} onClick={() => setOpen((value) => !value)}>{open ? '×' : '☰'}</button>
          </div>
        </div>
        <nav id="mobile-navigation" aria-label={navLabel} hidden={!open} className="mt-3 grid gap-1 border-t border-current/10 pt-3 lg:hidden">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={active === item.key ? 'location' : undefined} className={`rounded-xl px-4 py-3 text-sm font-bold ${active === item.key ? 'bg-cyan-300 text-slate-950' : ''}`}>{t[item.key]}</a>)}
        </nav>
      </div>
    </header>
  );
}
