import { useState, useEffect } from 'react';
import { Menu, X, Mail, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-darkBg/90 backdrop-blur-md border-b border-cardBorder shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accentCyan to-accentIndigo p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-darkBg rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accentCyan group-hover:text-accentIndigo transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-accentCyan group-hover:to-accentIndigo transition-all">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-accentCyan tracking-wider uppercase font-semibold">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-accentCyan transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accentCyan hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Icons & Action */}
            <div className="flex items-center gap-3 border-l border-cardBorder pl-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-400 hover:text-accentCyan hover:bg-cardBg rounded-lg transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-400 hover:text-accentCyan hover:bg-cardBg rounded-lg transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-accentCyan to-accentIndigo hover:opacity-95 rounded-lg shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-300 active:scale-95"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white bg-cardBg border border-cardBorder rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-accentCyan" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-cardBorder bg-darkBg/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-accentCyan hover:bg-cardBg/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-cardBorder flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-300 hover:text-accentCyan bg-cardBg rounded-lg border border-cardBorder"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-300 hover:text-accentCyan bg-cardBg rounded-lg border border-cardBorder"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 text-slate-300 hover:text-accentCyan bg-cardBg rounded-lg border border-cardBorder"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-accentCyan to-accentIndigo rounded-lg shadow-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
