import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { projectSlug } from '@/data/project-utils';
const base = 'https://portfolio-zulfikar.vercel.app';
export default function sitemap(): MetadataRoute.Sitemap { return ['/', '/projects', ...projects.en.map((p) => `/projects/${projectSlug(p.title)}`)].map((path) => ({ url: `${base}${path}`, changeFrequency: 'monthly' })); }
