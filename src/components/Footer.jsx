import { ChevronUp, Mail, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cardBorder bg-[#050811] text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-cardBorder/60">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2.5 text-base font-bold text-white mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accentCyan to-accentIndigo p-[1px]">
                <div className="w-full h-full bg-darkBg rounded-[7px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-accentCyan" />
                </div>
              </div>
              <span className="font-extrabold text-white">{personalInfo.name}</span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              {personalInfo.role} • Designing high-performance web systems and full-stack MERN architectures.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-accentCyan transition-colors">About</a>
            <a href="#skills" className="hover:text-accentCyan transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accentCyan transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accentCyan transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-cardBg rounded-lg border border-cardBorder transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-cardBg rounded-lg border border-cardBorder transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-slate-400 hover:text-white hover:bg-cardBg rounded-lg border border-cardBorder transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-300 hover:text-accentCyan hover:bg-cardBg rounded-lg border border-cardBorder transition-colors ml-2"
              aria-label="Scroll to Top"
              title="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with React, Tailwind CSS & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
