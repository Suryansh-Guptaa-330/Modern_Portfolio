import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulate sending time for realistic feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger colorful canvas confetti celebration!
      try {
        confetti({
          particleCount: 110,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#6366f1', '#10b981', '#38bdf8', '#f59e0b'],
        });
      } catch (err) {
        // Fallback gracefully if canvas context fails
        console.warn('Confetti trigger skipped:', err);
      }

      // Reset fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-accentIndigo/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/20 text-accentCyan text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Exceptional
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, an open full-time role, or an interesting engineering problem? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-cardBg/90 border border-cardBorder p-6 sm:p-8 shadow-xl shadow-black/20">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#141d33] border border-cardBorder hover:border-accentCyan/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accentCyan/10 flex items-center justify-center text-accentCyan group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Email Me</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-accentCyan transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#141d33] border border-cardBorder hover:border-accentCyan/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accentIndigo/10 flex items-center justify-center text-accentIndigo group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Call / WhatsApp</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-accentIndigo transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#141d33] border border-cardBorder">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {personalInfo.location} (Open to Remote Globally)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-6 mt-6 border-t border-cardBorder/60">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Connect on Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#141d33] border border-cardBorder text-slate-300 hover:text-white hover:border-accentCyan/50 transition-colors text-xs font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#141d33] border border-cardBorder text-slate-300 hover:text-white hover:border-accentCyan/50 transition-colors text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-cardBg/90 border border-cardBorder p-6 sm:p-8 shadow-xl shadow-black/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accentCyan/10 border border-accentCyan/20 flex items-center justify-center text-accentCyan">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Send Direct Message</h3>
                  <p className="text-xs text-slate-400 mt-0.5">I usually respond within 24 hours.</p>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="font-bold">Message sent successfully!</span> Thank you for reaching out.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#141d33] border border-cardBorder text-slate-200 placeholder:text-slate-500 text-sm focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#141d33] border border-cardBorder text-slate-200 placeholder:text-slate-500 text-sm focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Hiring Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-[#141d33] border border-cardBorder text-slate-200 placeholder:text-slate-500 text-sm focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or role..."
                    className="w-full px-4 py-3 rounded-xl bg-[#141d33] border border-cardBorder text-slate-200 placeholder:text-slate-500 text-sm focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accentCyan to-accentIndigo hover:opacity-95 shadow-lg shadow-accentCyan/20 hover:shadow-accentCyan/30 transition-all active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
