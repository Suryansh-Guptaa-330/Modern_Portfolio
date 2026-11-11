import { useState } from 'react';
import { Code2, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-cyan-500 to-blue-500',
      description: 'Crafting responsive, high-performance user interfaces and interactive experiences.',
      skills: skillsData.frontend,
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: Server,
      color: 'from-indigo-500 to-purple-500',
      description: 'Engineering robust REST APIs, authentication services, and scalable server architectures.',
      skills: skillsData.backend,
    },
    {
      id: 'database',
      title: 'Databases & Storage',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      description: 'Designing structured schemas, indexing strategies, and reliable cloud database clusters.',
      skills: skillsData.database,
    },
    {
      id: 'tools',
      title: 'Tools, DevOps & Cloud',
      icon: Wrench,
      color: 'from-amber-500 to-orange-500',
      description: 'Version control, deployment pipelines, containerization, and modern developer tooling.',
      skills: skillsData.toolsAndCloud,
    },
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? categories
      : categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/20 text-accentCyan text-xs font-semibold uppercase tracking-wider mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical Skills & Architecture
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of technologies, frameworks, and developer tools I utilize to construct production-ready MERN applications.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-accentCyan to-accentIndigo text-white shadow-md shadow-accentCyan/20'
                  : 'bg-cardBg text-slate-400 hover:text-white border border-cardBorder'
              }`}
            >
              All Technologies
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-accentCyan to-accentIndigo text-white shadow-md shadow-accentCyan/20'
                    : 'bg-cardBg text-slate-400 hover:text-white border border-cardBorder'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative rounded-2xl bg-cardBg/90 border border-cardBorder p-6 sm:p-8 hover:border-accentCyan/50 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-[1px] shadow-sm`}
                    >
                      <div className="w-full h-full bg-cardBg rounded-[11px] flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accentCyan transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {category.skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-cardBorder/60">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#141d33] border border-cardBorder text-slate-200 group-hover:border-accentCyan/30 group-hover:text-white transition-all hover:scale-105"
                    >
                      <CheckCircle2 className="w-3 h-3 text-accentCyan shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

