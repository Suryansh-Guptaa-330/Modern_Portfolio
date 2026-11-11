import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-darkBg text-slate-100 selection:bg-accentCyan selection:text-darkBg font-sans">
      {/* Top Sticky Navigation */}
      <Navbar />

      <main className="relative">
        {/* Hero Introduction Section */}
        <Hero />

        {/* Interactive CLI Terminal Section */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
              Interactive Developer Console
            </span>
            <p className="text-xs text-slate-400 mt-1">
              Try typing <code className="text-accentCyan bg-cardBg px-1.5 py-0.5 rounded border border-cardBorder">help</code>,{' '}
              <code className="text-accentCyan bg-cardBg px-1.5 py-0.5 rounded border border-cardBorder">skills</code>, or{' '}
              <code className="text-accentCyan bg-cardBg px-1.5 py-0.5 rounded border border-cardBorder">projects</code> below:
            </p>
          </div>
          <Terminal />
        </section>

        {/* About & Core Strengths Section */}
        <About />

        {/* Technical Skills Showcase */}
        <Skills />

        {/* Featured Projects Grid */}
        <Projects />

        {/* Interactive Contact & Confetti Form */}
        <Contact />
      </main>

      {/* Footer with Smooth Scroll */}
      <Footer />
    </div>
  );
}
