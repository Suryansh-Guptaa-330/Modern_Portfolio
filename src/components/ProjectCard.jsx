import { ExternalLink, FolderGit2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Github } from './Icons';

export default function ProjectCard({ project }) {
  if (!project) return null;

  const handleLiveDemoClick = (e) => {
    // Localized confetti burst using viewport-relative coordinates
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    try {
      confetti({
        particleCount: 55,
        spread: 65,
        origin: { x, y },
        colors: ['#06b6d4', '#3b82f6', '#6366f1', '#10b981', '#f59e0b'],
        disableForReducedMotion: true,
      });
    } catch (err) {
      console.warn('Confetti trigger failed:', err);
    }
  };

  return (
    <div className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] hover:-translate-y-1">
      <div>
        {/* Top Header: Category, Production Badge & Folder Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 border border-slate-700 text-cyan-400">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Production
              </span>
            )}
          </div>

          <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/60 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-110">
            <FolderGit2 className="w-4 h-4" />
          </div>
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs text-indigo-400 font-semibold mb-3.5">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-slate-300 mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Categorized Tech Tag Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack?.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleLiveDemoClick}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-md hover:shadow-cyan-500/30 hover:opacity-95 transition-all duration-300 active:scale-95 group/btn"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all duration-300 active:scale-95 group/code"
          >
            <Github className="w-4 h-4 group-hover/code:scale-110 transition-transform" />
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
  );
}
