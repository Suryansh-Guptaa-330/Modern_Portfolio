import { useState } from 'react';
import { personalInfo, skillsData, projectsData } from './data/portfolioData';
import Terminal from './components/Terminal';
import ProjectCard from './components/ProjectCard';
import AntiGravityCanvas from './components/AntiGravityCanvas';
import {
  Orbit,
  Sparkles,
  ArrowRight,
  Globe,
  Code,
  Database,
  Wrench,
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Github, Linkedin } from './components/Icons';
import './App.css';

export default function App() {
  const [antiGravityActive, setAntiGravityActive] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSayHi = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { x, y },
        colors: ['#06b6d4', '#6366f1', '#10b981', '#f59e0b', '#ec4899'],
        disableForReducedMotion: true,
      });
    } catch (err) {
      console.warn('Confetti error:', err);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSent(true);

    try {
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#6366f1', '#10b981', '#38bdf8', '#f59e0b'],
      });
    } catch (err) {
      console.warn('Confetti error:', err);
    }

    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setFormSent(false);
    }, 6000);
  };

  const bentoSkills = [
    {
      category: 'Frontend Development',
      icon: Code,
      accent: 'text-cyan-400',
      borderHover: 'hover:border-cyan-500/50',
      glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]',
      description: 'Crafting pixel-perfect, responsive UI and fluid client-side states.',
      skills: skillsData.frontend,
    },
    {
      category: 'Backend & APIs',
      icon: Globe,
      accent: 'text-indigo-400',
      borderHover: 'hover:border-indigo-500/50',
      glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]',
      description: 'Engineering resilient REST APIs, JWT authentication, and backend servers.',
      skills: skillsData.backend,
    },
    {
      category: 'Database & Cloud',
      icon: Database,
      accent: 'text-emerald-400',
      borderHover: 'hover:border-emerald-500/50',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]',
      description: 'Structuring schemas, scalable NoSQL/SQL clusters, and data caching.',
      skills: skillsData.database,
    },
    {
      category: 'Tools & DevOps',
      icon: Wrench,
      accent: 'text-amber-400',
      borderHover: 'hover:border-amber-500/50',
      glow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]',
      description: 'Continuous deployment, version control, automated testing, and APIs.',
      skills: skillsData.toolsAndCloud,
    },
  ];

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 selection:bg-cyan-500 selection:text-[#080d1a] font-sans relative overflow-x-hidden">
      
      {/* Radial Ambient Blur Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[160px]" />
      </div>

      {/* Anti-Gravity Canvas Physics Overlay */}
      <AntiGravityCanvas
        isActive={antiGravityActive}
        onClose={() => setAntiGravityActive(false)}
      />

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-[#080d1a]/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-base font-bold text-white tracking-tight group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#080d1a] rounded-[7px] flex items-center justify-center">
                <Code className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-indigo-400 transition-all font-mono">
              &lt;{personalInfo.name} /&gt;
            </span>
          </a>

          {/* Desktop Nav Links & Anti-Gravity Trigger */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                Projects
              </a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">
                Skills
              </a>
              <a href="#terminal" className="hover:text-cyan-400 transition-colors">
                Terminal
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>

            {/* Anti-Gravity Toggle Button */}
            <button
              onClick={() => setAntiGravityActive(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-mono font-semibold tracking-wide transition-all shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] cursor-pointer active:scale-95"
              title="Activate Anti-Gravity Physics"
            >
              <Orbit className="w-3.5 h-3.5 animate-spin [animation-duration:8s]" />
              <span className="hidden sm:inline">Anti-Gravity</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 py-12 sm:py-16">
        
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto flex flex-col items-center pt-8 sm:pt-14">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Available for Full-time & Contract Roles</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400 font-semibold">{personalInfo.location}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Building Scalable Web Architectures &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Modern Systems
            </span>
          </h1>

          {/* Role & Tagline */}
          <p className="text-lg sm:text-xl font-medium text-slate-200 mb-4 font-mono">
            {personalInfo.role}
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:opacity-95 transition-all duration-300 active:scale-95 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={handleSayHi}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer shadow-sm hover:text-white"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Say Hi 👋</span>
            </button>
          </div>
        </section>

        {/* Terminal Section */}
        <section id="terminal" className="scroll-mt-24">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              Interactive Environment
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Developer CLI Terminal
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Type <code className="text-cyan-400 font-mono">help</code>,{' '}
              <code className="text-cyan-400 font-mono">skills</code>,{' '}
              <code className="text-cyan-400 font-mono">projects</code>, or{' '}
              <code className="text-cyan-400 font-mono">gravity</code> to explore via command-line:
            </p>
          </div>

          <Terminal onTriggerAntiGravity={() => setAntiGravityActive(true)} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              Production Applications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems &amp; Work
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Architected for high availability, security, responsive UI, and clean code patterns.
            </p>
          </div>

          {/* 2-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Bento-Grid */}
        <section id="skills" className="scroll-mt-24">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              Technical Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills &amp; Architecture Bento
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Core technologies, databases, frameworks, and developer workflows I use daily.
            </p>
          </div>

          {/* 4 Categorized Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoSkills.map((column) => {
              const IconComp = column.icon;
              return (
                <div
                  key={column.category}
                  className={`rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${column.borderHover} ${column.glow} group hover:-translate-y-1`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                        <IconComp className={`w-5 h-5 ${column.accent}`} />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {column.category}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                      {column.description}
                    </p>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                    {column.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              Communication Channel
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get In Touch
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Interested in working together or have an engineering opportunity? Reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            
            {/* Sidebar Contact Info */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 backdrop-blur-sm space-y-5">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact Details</h3>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-400 block font-medium">Email</span>
                  <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-indigo-500/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-400 block font-medium">Phone</span>
                  <span className="text-white font-semibold group-hover:text-indigo-400 transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-400 block font-medium">Location</span>
                  <span className="text-white font-semibold">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Functional Form */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm relative">
              <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">Let's connect and discuss your project goals.</p>

              {formSent && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-xs sm:text-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="font-bold">Message sent successfully!</span> Thank you for reaching out.
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 shadow-md hover:shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#050811] text-slate-400 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#terminal" className="hover:text-cyan-400 transition-colors">
              Terminal
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
