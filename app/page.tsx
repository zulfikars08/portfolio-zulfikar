'use client';

import { useEffect, useState } from 'react';
import { About } from '@/components/About';
import { ConfidentialDisclaimer } from '@/components/ConfidentialDisclaimer';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { dictionary, type Locale } from '@/data/dictionary';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const t = dictionary[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const isDark = theme === 'dark';

  return (
    <main className={isDark ? 'min-h-screen overflow-hidden bg-slate-950 text-white' : 'min-h-screen overflow-hidden bg-slate-50 text-slate-950'}>
      <div
        className={
          isDark
            ? 'pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_28rem),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.2),transparent_30rem),linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)]'
            : 'pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(6,182,212,0.16),transparent_28rem),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.14),transparent_30rem),linear-gradient(135deg,#f8fafc_0%,#eef2ff_50%,#ecfeff_100%)]'
        }
      />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="relative z-10">
        <Navbar t={t.nav} locale={locale} setLocale={setLocale} theme={theme} setTheme={setTheme} />
        <Hero t={t.hero} theme={theme} />
        <About t={t.about} theme={theme} />
        <Skills t={t.skills} theme={theme} />
        <Projects t={t.projects} locale={locale} theme={theme} />
        <ConfidentialDisclaimer t={t.disclaimer} theme={theme} />
        <Contact t={t.contact} theme={theme} />
        <footer className={isDark ? 'px-4 py-8 text-center text-sm text-slate-400' : 'px-4 py-8 text-center text-sm text-slate-600'}>
          © 2026 Zulfikar Airlangga Siswanto. {t.footer}
        </footer>
      </div>
    </main>
  );
}
