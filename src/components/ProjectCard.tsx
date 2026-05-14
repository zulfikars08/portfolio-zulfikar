import type { Project } from '@/data/projects';

export function ProjectCard({
  project,
  index,
  contributionTitle,
  theme,
}: {
  project: Project;
  index: number;
  contributionTitle: string;
  theme: 'dark' | 'light';
}) {
  const isDark = theme === 'dark';

  return (
    <article className={isDark ? 'group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.09] sm:p-7' : 'group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/75 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/70 hover:bg-white sm:p-7'}>
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-violet-400/20" />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className={isDark ? 'rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-100' : 'rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-700'}>
            {project.type}
          </span>
          <span className={isDark ? 'text-sm font-black text-cyan-200' : 'text-sm font-black text-cyan-700'}>0{index + 1}</span>
        </div>
        <h3 className={isDark ? 'text-2xl font-black tracking-[-0.03em] text-white' : 'text-2xl font-black tracking-[-0.03em] text-slate-950'}>{project.title}</h3>
        <p className={isDark ? 'mt-4 leading-7 text-slate-300' : 'mt-4 leading-7 text-slate-700'}>{project.description}</p>

        <div className="mt-6">
          <h4 className={isDark ? 'text-sm font-black uppercase tracking-[0.18em] text-slate-400' : 'text-sm font-black uppercase tracking-[0.18em] text-slate-500'}>{contributionTitle}</h4>
          <ul className="mt-4 space-y-3">
            {project.contributions.map((item) => (
              <li key={item} className={isDark ? 'flex gap-3 text-sm leading-6 text-slate-300' : 'flex gap-3 text-sm leading-6 text-slate-700'}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className={isDark ? 'rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-slate-100' : 'rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700'}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
