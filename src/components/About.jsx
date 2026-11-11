import { User, MapPin, Mail, Phone, Award, ShieldCheck, Zap, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: Layers,
      title: 'Full-Stack MERN Architecture',
      description: 'Expertise in wiring React frontend interfaces with scalable Node/Express server backends and MongoDB document stores.',
    },
    {
      icon: ShieldCheck,
      title: 'Authentication & Security',
      description: 'Implementing hardened JWT authentication, role-based access control (RBAC), password hashing, and CORS safeguards.',
    },
    {
      icon: Zap,
      title: 'API & Performance Optimization',
      description: 'Structuring clean RESTful endpoints, query pagination, indexing, and lightweight client-side state management.',
    },
    {
      icon: Award,
      title: 'Production Deployments',
      description: 'Deploying continuous integration workflows with Vercel, Render, and cloud infrastructure for high availability.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/20 text-accentCyan text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Passionate Engineering & Modern Web Craft
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer committed to writing clean, maintainable code and turning concepts into robust digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio & Details Column */}
          <div className="lg:col-span-5 rounded-2xl bg-cardBg/90 border border-cardBorder p-6 sm:p-8 shadow-xl shadow-black/20">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-cardBorder/60">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accentCyan to-accentIndigo p-[1px]">
                <div className="w-full h-full bg-darkBg rounded-[15px] flex items-center justify-center">
                  <User className="w-7 h-7 text-accentCyan" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs text-accentIndigo font-semibold mt-0.5">{personalInfo.role}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new opportunities
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              I am a Full-Stack MERN Developer based in India with a strong focus on engineering high-performance web systems. From architecting end-to-end voting systems with anti-tamper controls to building multi-vendor marketplace platforms, I enjoy tackling engineering challenges from database schema design to front-end responsiveness.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              My engineering philosophy revolves around simplicity, performance, type safety, and clean API boundaries. I strive to build applications that are as enjoyable to maintain as they are to use.
            </p>

            {/* Quick Contact Info Cards */}
            <div className="space-y-3 pt-6 border-t border-cardBorder/60 text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-accentCyan shrink-0" />
                <span>Location: <strong className="text-white font-medium">{personalInfo.location}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-accentCyan shrink-0" />
                <span>Email: <a href={`mailto:${personalInfo.email}`} className="text-accentCyan hover:underline font-medium">{personalInfo.email}</a></span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-accentCyan shrink-0" />
                <span>Phone: <a href={`tel:${personalInfo.phone}`} className="text-white hover:underline font-medium">{personalInfo.phone}</a></span>
              </div>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-cardBg/90 border border-cardBorder p-6 hover:border-accentCyan/40 transition-all duration-300 shadow-lg shadow-black/20 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-accentCyan/10 border border-accentCyan/20 flex items-center justify-center text-accentCyan mb-4 group-hover:scale-110 group-hover:bg-accentCyan group-hover:text-darkBg transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-accentCyan transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-cardBorder/40 flex items-center text-[11px] text-accentIndigo font-semibold">
                    Core Capability ✓
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

