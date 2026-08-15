'use client';

import { useEffect, useState } from 'react';
import { About } from '@/components/About';

import { Contact } from '@/components/Contact';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { SelectedConfidentialProjects } from '@/components/SelectedConfidentialProjects';
import { Skills } from '@/components/Skills';
import { dictionary, type Locale } from '@/data/dictionary';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const t = dictionary[locale];

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedLocale === 'en' || savedLocale === 'id') setLocale(savedLocale);
    if (savedTheme === 'dark' || savedTheme === 'light') setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'id' ? 'id' : 'en';
    localStorage.setItem('locale', locale);
  }, [locale]);

  useEffect(() => localStorage.setItem('theme', theme), [theme]);

  const isDark = theme === 'dark';

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-300 focus:px-4 focus:py-3 focus:font-bold focus:text-slate-950">
        {locale === 'id' ? 'Lewati ke konten utama' : 'Skip to main content'}
      </a>
      <main id="main-content" className={isDark ? 'min-h-screen overflow-x-clip bg-slate-950 text-white' : 'min-h-screen overflow-x-clip bg-stone-50 text-slate-950'}>
      <div>
        <Navbar t={t.nav} locale={locale} setLocale={setLocale} theme={theme} setTheme={setTheme} />
        <Hero t={t.hero} theme={theme} />
        <FeaturedProjects t={t.projects} locale={locale} theme={theme} />
        <ExperienceTimeline t={t.experience} locale={locale} theme={theme} />
        <Skills t={t.skills} theme={theme} locale={locale} />
        <About t={t.about} theme={theme} />
        <SelectedConfidentialProjects locale={locale} theme={theme} />
        <Contact t={t.contact} theme={theme} locale={locale} />
        <footer className={isDark ? 'px-4 py-8 text-center text-sm text-slate-400' : 'px-4 py-8 text-center text-sm text-slate-600'}>
          © 2026 Zulfikar Airlangga Siswanto. {t.footer}
        </footer>
      </div>
      </main>
    </>
  );
}
