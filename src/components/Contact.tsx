'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import type { Locale } from '@/data/dictionary';

type ContactText = {
  eyebrow: string;
  title: string;
  description: string;
  availability: string;
  formTitle: string;
  formDescription: string;
  labels: { name: string; email: string; subject: string; message: string };
  placeholders: { name: string; email: string; subject: string; message: string };
  submit: string;
  sending: string;
  success: string;
  error: string;
  validation: { required: string; invalidEmail: string; shortMessage: string };
  linksTitle: string;
  open: string;
  whatsapp: string;
  privacy: string;
};

type FormState = 'idle' | 'loading' | 'success' | 'error';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function Contact({ t, theme, locale }: { t: ContactText; theme: 'dark' | 'light'; locale: Locale }) {
  const isDark = theme === 'dark';
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactLinks = [
    { label: 'Email', href: 'mailto:zulfikarsiswanto@gmail.com', value: 'zulfikarsiswanto@gmail.com' },
    {
      label: 'WhatsApp',
      href: `https://wa.me/6281380930824?text=${encodeURIComponent('Hello Zulfikar, I saw your portfolio and I would like to discuss a project or job opportunity with you.')}`,
      value: t.whatsapp,
    },
    { label: 'GitHub', href: 'https://github.com/zulfikars08', value: 'github.com/zulfikars08' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zulfikar-airlangga-siswanto-556a97160/',
      value: 'Zulfikar Airlangga Siswanto',
    },
  ];

  const inputClass = useMemo(
    () =>
      isDark
        ? 'mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-4 focus:ring-cyan-300/10'
        : 'mt-2 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/50',
    [isDark],
  );

  useEffect(() => {
    if (status !== 'success' && status !== 'error') {
      return;
    }

    const timeout = window.setTimeout(() => {
      setStatus('idle');
      setErrorMessage('');
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('idle');
    setErrorMessage('');

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMessage(t.validation.required);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus('error');
      setErrorMessage(t.validation.invalidEmail);
      return;
    }

    if (form.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage(t.validation.shortMessage);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale, website: '' }),
      });

      if (!response.ok) {
        throw new Error(t.error);
      }

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setErrorMessage(t.error);
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:py-24">
      <div className={isDark ? 'mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-violet-500/15 to-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-10 lg:p-12' : 'mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-cyan-100 via-violet-100 to-white p-6 shadow-2xl shadow-slate-300/60 backdrop-blur sm:p-10 lg:p-12'}>
        <SectionHeading centered eyebrow={t.eyebrow} title={t.title} description={t.description} theme={theme} />

        <div className={isDark ? 'mx-auto mb-8 flex max-w-3xl items-center gap-3 rounded-3xl border border-emerald-300/25 bg-emerald-400/10 px-5 py-4 text-sm font-bold text-emerald-100' : 'mx-auto mb-8 flex max-w-3xl items-center gap-3 rounded-3xl border border-emerald-300 bg-emerald-50 px-5 py-4 text-sm font-bold text-emerald-800'} role="status">
          <span className="flex h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
          {t.availability}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={handleSubmit} className={isDark ? 'rounded-[2rem] border border-white/10 bg-slate-950/40 p-5 sm:p-7' : 'rounded-[2rem] border border-slate-200 bg-white/80 p-5 sm:p-7'} noValidate>
            <input className="hidden" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />
            <div className="mb-6">
              <h3 className={isDark ? 'text-2xl font-black text-white' : 'text-2xl font-black text-slate-950'}>{t.formTitle}</h3>
              <p className={isDark ? 'mt-2 text-sm leading-6 text-slate-300' : 'mt-2 text-sm leading-6 text-slate-600'}>{t.formDescription}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.labels.name} id="contact-name" value={form.name} onChange={(value) => setForm((current) => ({ ...current, name: value }))} inputClass={inputClass} placeholder={t.placeholders.name} />
              <Field label={t.labels.email} id="contact-email" type="email" value={form.email} onChange={(value) => setForm((current) => ({ ...current, email: value }))} inputClass={inputClass} placeholder={t.placeholders.email} />
            </div>

            <div className="mt-5">
              <Field label={t.labels.subject} id="contact-subject" value={form.subject} onChange={(value) => setForm((current) => ({ ...current, subject: value }))} inputClass={inputClass} placeholder={t.placeholders.subject} />
            </div>

            <div className="mt-5">
              <label htmlFor="contact-message" className={isDark ? 'text-sm font-bold text-slate-200' : 'text-sm font-bold text-slate-700'}>
                {t.labels.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                className={`${inputClass} min-h-36 resize-y`}
                placeholder={t.placeholders.message}
                required
                minLength={10}
              />
            </div>

            <button
              id="contact-submit-button"
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 px-6 py-4 font-black text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
            >
              {status === 'loading' ? t.sending : t.submit}
            </button>

            {status === 'success' ? (
              <p className="mt-4 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm font-bold text-emerald-200" role="status">
                {t.success}
              </p>
            ) : null}

            {status === 'error' ? (
              <p className="mt-4 rounded-2xl border border-rose-300/30 bg-rose-400/10 px-4 py-3 text-sm font-bold text-rose-200" role="alert">
                {errorMessage || t.error}
              </p>
            ) : null}
            <p className={isDark ? 'mt-4 text-xs leading-5 text-slate-400' : 'mt-4 text-xs leading-5 text-slate-600'}>{t.privacy}</p>
          </form>

          <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <h3 className={isDark ? 'sr-only text-white' : 'sr-only text-slate-950'}>{t.linksTitle}</h3>
            {contactLinks.map((link) => (
              <a
                id={`contact-${link.label.toLowerCase()}-link`}
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={isDark ? 'group rounded-3xl border border-white/10 bg-slate-950/40 p-5 text-left transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/10' : 'group rounded-3xl border border-slate-200 bg-white/75 p-5 text-left transition hover:-translate-y-2 hover:border-cyan-300/70 hover:bg-white'}
              >
                <span className={isDark ? 'text-xs font-black uppercase tracking-[0.2em] text-cyan-200' : 'text-xs font-black uppercase tracking-[0.2em] text-cyan-700'}>{link.label}</span>
                <strong className={isDark ? 'mt-3 block break-words text-sm text-white' : 'mt-3 block break-words text-sm text-slate-950'}>{link.value}</strong>
                <span className={isDark ? 'mt-3 inline-flex text-xs font-bold text-slate-400 transition group-hover:text-cyan-200' : 'mt-3 inline-flex text-xs font-bold text-slate-500 transition group-hover:text-cyan-700'}>
                  {t.open} →
                </span>
              </a>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  inputClass,
  placeholder,
  type = 'text',
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  inputClass: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-inherit">
        {label}
      </label>
      <input id={id} name={id.replace('contact-', '')} type={type} value={value} onChange={(event) => onChange(event.target.value)} className={inputClass} placeholder={placeholder} required />
    </div>
  );
}
