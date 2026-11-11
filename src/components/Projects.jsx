import { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, CheckCircle } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack', 'Frontend & APIs', 'Frontend'];

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-accentCyan/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accentIndigo/10 border border-accentIndigo/20 text-accentIndigo text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world applications and architectures demonstrating full-stack engineering, clean code patterns, and modern performance standards.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-accentCyan to-accentIndigo text-white shadow-md shadow-accentCyan/20'
                    : 'bg-cardBg text-slate-400 hover:text-white border border-cardBorder'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-cardBg/90 border border-cardBorder overflow-hidden hover:border-accentCyan/50 transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8">
                {/* Header Meta: Category & Featured Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#141d33] border border-cardBorder text-accentCyan">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  <FolderGit2 className="w-6 h-6 text-slate-500 group-hover:text-accentCyan transition-colors" />
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-accentCyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-accentIndigo font-semibold mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                {project.highlights && (
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-accentCyan shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-cardBorder/60">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-[#141d33] border border-cardBorder rounded-md text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 py-4 sm:px-8 bg-[#0c1322] border-t border-cardBorder flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-accentCyan to-accentIndigo hover:opacity-95 rounded-lg shadow-sm transition-all"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-cardBg hover:bg-cardBg/80 border border-cardBorder rounded-lg transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

                <span className="text-[11px] text-slate-500 font-mono">
                  MERN Architecture
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
