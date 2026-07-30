import Link from 'next/link';
export default function NotFound() { return <main className="grid min-h-screen place-content-center bg-slate-950 p-6 text-center text-white"><h1 className="text-6xl font-black">404</h1><p className="mt-4 text-slate-300">Page not found / Halaman tidak ditemukan.</p><Link className="mt-6 text-cyan-300" href="/">Return home / Kembali ke beranda</Link></main>; }
