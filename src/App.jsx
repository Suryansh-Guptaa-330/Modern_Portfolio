import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AntiGravityCanvas from './components/AntiGravityCanvas';
import { Sparkles } from 'lucide-react';
import './App.css';

export default function App() {
  const [isZeroGravity, setIsZeroGravity] = useState(false);

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
              <code className="text-accentCyan bg-cardBg px-1.5 py-0.5 rounded border border-cardBorder">gravity</code>, or{' '}
              <code className="text-accentCyan bg-cardBg px-1.5 py-0.5 rounded border border-cardBorder">projects</code> below:
            </p>
          </div>
          <Terminal onTriggerAntiGravity={() => setIsZeroGravity(true)} />
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

      {/* Floating Anti-Gravity Mode Trigger */}
      <button
        onClick={() => setIsZeroGravity(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-mono font-bold tracking-wide shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-cyan-500/40 cursor-pointer backdrop-blur-md"
        title="Activate Anti-Gravity Mode"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
        </span>
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>Zero-G Physics</span>
      </button>

      {/* Anti-Gravity Canvas Physics Overlay */}
      <AntiGravityCanvas
        isActive={isZeroGravity}
        onClose={() => setIsZeroGravity(false)}
      />
    </div>
  );
}
