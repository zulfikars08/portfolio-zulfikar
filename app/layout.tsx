import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zul | Full Stack Web Developer Portfolio',
  description:
    'Modern portfolio website for Zul, a Full Stack Web Developer experienced in Next.js, React, Laravel, MySQL, dashboards, admin panels, and internal business systems.',
  keywords: [
    'Zul',
    'Full Stack Web Developer',
    'Next.js Developer',
    'React Developer',
    'Laravel Developer',
    'Portfolio',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
