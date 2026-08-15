'use client';

import { useEffect, useRef, useState } from 'react';
import type { Locale } from '@/data/dictionary';

const navItems = [
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'skills', href: '#skills' },
  { key: 'about', href: '#about' },
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
  const visibleSections = useRef(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.current.add(entry.target.id);
          else visibleSections.current.delete(entry.target.id);
        });

        const closest = [...visibleSections.current]
          .map((id) => document.getElementById(id))
          .filter((section): section is HTMLElement => section !== null)
          .sort((a, b) => Math.abs(a.getBoundingClientRect().top - 110) - Math.abs(b.getBoundingClientRect().top - 110))[0];

        if (closest) setActive(closest.id);
      },
      { rootMargin: '0px' },
    );
    navItems.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const sectionId = window.location.hash.replace('#', '');
      if (!sectionId) return;

      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'auto',
          block: 'start',
        });
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    window.addEventListener('popstate', scrollToHash);
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
      window.removeEventListener('popstate', scrollToHash);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', close);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', close);
    };
  }, [open]);

  const shell = isDark
    ? 'border-white/15 bg-slate-950 text-white'
    : 'border-slate-300 bg-stone-50 text-slate-950';
  const navLabel = locale === 'id' ? 'Navigasi utama' : 'Primary navigation';
  const toggleLabel = locale === 'id' ? (open ? 'Tutup menu' : 'Buka menu') : open ? 'Close menu' : 'Open menu';

  const navigateTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', `#${sectionId}`);
    setOpen(false);
  };

  return (
    <>
      {open ? <button type="button" aria-label={locale === 'id' ? 'Tutup menu navigasi' : 'Close navigation menu'} className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-[2px] lg:hidden" onClick={() => setOpen(false)} /> : null}
      <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div className={`relative mx-auto max-w-7xl rounded-xl border px-4 py-2.5 shadow-xl shadow-slate-950/10 backdrop-blur-xl sm:px-6 ${shell}`}>
        <div className="flex h-full items-center justify-between gap-3">
          <a id="brand-link" href="#home" className="text-lg font-black tracking-[-0.04em]">
            Zulfikar<span className="text-emerald-400">.</span>
          </a>
          <nav aria-label={navLabel} className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); navigateTo(item.key); }} aria-current={active === item.key ? 'location' : undefined} className={`border-b px-3 py-2 text-xs font-semibold transition ${active === item.key ? 'border-cyan-400 text-cyan-400' : isDark ? 'border-transparent text-slate-300 hover:text-white' : 'border-transparent text-slate-600 hover:text-slate-950'}`}>
                {t[item.key]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setLocale(locale === 'en' ? 'id' : 'en')} className="min-h-11 min-w-11 rounded-md border border-current/20 px-3 text-xs font-bold" aria-label={locale === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}>{locale === 'en' ? 'ID' : 'EN'}</button>
            <button type="button" onClick={() => setTheme(isDark ? 'light' : 'dark')} className="min-h-11 min-w-11 rounded-md border border-current/20 px-3 text-sm" aria-label={locale === 'id' ? `Gunakan tema ${isDark ? 'terang' : 'gelap'}` : `Use ${isDark ? 'light' : 'dark'} theme`}>{isDark ? '☀' : '☾'}</button>
            <button type="button" className="min-h-11 min-w-11 rounded-md border border-current/20 px-3 text-sm font-bold lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={toggleLabel} onClick={() => setOpen((value) => !value)}>{open ? '×' : '☰'}</button>
          </div>
        </div>
        <nav id="mobile-navigation" aria-label={navLabel} hidden={!open} className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] gap-1 rounded-[1.375rem] border p-3 shadow-2xl backdrop-blur-xl lg:hidden ${open ? 'grid' : 'hidden'} ${isDark ? 'border-white/10 bg-slate-950/95' : 'border-slate-200 bg-white/95'}`}>
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); navigateTo(item.key); }} aria-current={active === item.key ? 'location' : undefined} className={`flex h-11 items-center rounded-xl px-4 text-sm font-bold ${active === item.key ? 'bg-cyan-300 text-slate-950' : ''}`}>{t[item.key]}</a>)}
        </nav>
      </div>
      </header>
    </>
  );
}
