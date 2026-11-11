import { ArrowRight, Sparkles, Mail, FileCode2, Terminal } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const quickSkills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'Tailwind CSS'];

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accentCyan/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accentIndigo/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cardBg/90 border border-cardBorder text-slate-300 text-xs font-medium mb-8 backdrop-blur-sm shadow-sm hover:border-accentCyan/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full-time Roles & Projects</span>
            <span className="text-slate-600">|</span>
            <span className="text-accentCyan font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> {personalInfo.location}
            </span>
          </div>

          {/* Main Title & Role */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accentCyan via-cyan-300 to-accentIndigo bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-slate-200 mb-6 flex items-center justify-center gap-2">
            <Terminal className="w-6 h-6 text-accentCyan inline" />
            <span>{personalInfo.role}</span>
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-accentCyan to-accentIndigo rounded-xl shadow-lg shadow-accentCyan/20 hover:shadow-accentCyan/40 hover:opacity-95 transition-all duration-300 active:scale-95 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-cardBg hover:bg-cardBg/80 border border-cardBorder hover:border-accentCyan/50 rounded-xl transition-all duration-300 hover:text-white"
            >
              <Mail className="w-4 h-4 text-accentCyan" />
              <span>Get In Touch</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-400 hover:text-white bg-cardBg/50 hover:bg-cardBg border border-cardBorder rounded-xl transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick Core Tech Stack Pills */}
          <div className="pt-8 border-t border-cardBorder/60 w-full flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
              <FileCode2 className="w-3.5 h-3.5 text-accentCyan" /> Core Tech Stack
            </span>
            <div className="flex flex-wrap justify-center gap-2.5">
              {quickSkills.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 bg-cardBg border border-cardBorder rounded-lg hover:border-accentCyan/40 hover:text-accentCyan transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
