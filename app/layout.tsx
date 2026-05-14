import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-zulfikar.vercel.app'),
  title: 'Zulfikar Airlangga Siswanto — Full Stack Developer Portfolio',
  description:
    'Professional portfolio of Zulfikar Airlangga Siswanto, a Full Stack Developer specializing in Laravel, Next.js, Flutter, PostgreSQL, ERP modules, dashboards, internal business systems, APIs, and mobile apps.',
  keywords: [
    'Zulfikar Airlangga Siswanto',
    'Full Stack Developer',
    'Laravel Developer',
    'Next.js Developer',
    'Flutter Developer',
    'PostgreSQL',
    'MySQL',
    'ERP Developer',
    'Dashboard Developer',
    'Portfolio',
  ],
  openGraph: {
    title: 'Zulfikar Airlangga Siswanto — Full Stack Developer Portfolio',
    description:
      'Case-study driven portfolio focused on internal business systems, dashboards, ERP modules, APIs, and mobile apps using Laravel, Next.js, Flutter, and PostgreSQL.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Zulfikar Airlangga Siswanto Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zulfikar Airlangga Siswanto — Full Stack Developer Portfolio',
    description:
      'Full Stack Developer specializing in business systems, dashboards, ERP modules, APIs, and mobile apps.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
