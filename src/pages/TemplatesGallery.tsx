import { Link } from 'react-router-dom'
import { Zap, Briefcase, Minimize2, Palette, Code2, ArrowRight, FileText, BarChart3 } from 'lucide-react';

const templates = [
  {
    id: 'neon',
    name: 'Neon Glow',
    description: 'Eye-catching design with vibrant colors and modern animations',
    icon: Zap,
    gradient: 'from-emerald-500 via-orange-500 to-emerald-600',
    preview: 'Animated badges, typing effects, vibrant colors',
    features: ['Animated typing SVG', 'Colorful badges', 'Neon aesthetics', 'Perfect for creative developers'],
    accentColor: 'emerald',
  },
  {
  id: 'product',
  name: 'Product',
  description: 'Impact-driven layout focused on metrics, outcomes, and real-world use cases',
  icon: BarChart3,
  gradient: 'from-indigo-500 via-emerald-500 to-cyan-500',
  preview: 'Metrics-first sections, product highlights, clean storytelling',
  features: [
    'Impact & metrics sections',
    'Case-study friendly layout',
    'Product & startup ready',
    'Ideal for PMs & founders',
  ],
  accentColor: 'indigo',
},

  {
    id: 'professional',
    name: 'Professional',
    description: 'Clean and corporate design perfect for job applications',
    icon: Briefcase,
    gradient: 'from-emerald-600 via-emerald-500 to-orange-500',
    preview: 'Structured layout, formal tone, business-ready',
    features: ['Corporate style', 'Clean layout', 'Professional badges', 'Ideal for job seekers'],
    accentColor: 'emerald',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple and elegant with focus on content',
    icon: Minimize2,
    gradient: 'from-slate-600 via-emerald-600 to-slate-500',
    preview: 'Clean lines, no clutter, easy to read',
    features: ['Less is more', 'Content focused', 'Simple design', 'Quick to scan'],
    accentColor: 'emerald',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Fun and expressive design with personality',
    icon: Palette,
    gradient: 'from-orange-600 via-orange-500 to-emerald-500',
    preview: 'Playful layout, expressive elements',
    features: ['Fun design', 'Colorful elements', 'Personality shine', 'Stand out profile'],
    accentColor: 'orange',
  },
  {
    id: 'developer',
    name: 'Developer',
    description: 'Code-focused design with technical aesthetics',
    icon: Code2,
    gradient: 'from-emerald-500 via-slate-600 to-emerald-600',
    preview: 'Code blocks, dark theme, tech-savvy',
    features: ['Code aesthetics', 'Dark theme', 'Technical feel', 'Developer friendly'],
    accentColor: 'emerald',
  },
];

export default function TemplatesGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-amber-950 to-slate-950">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-b from-slate-950/95 to-slate-950/50 backdrop-blur-xl z-50 border-b border-emerald-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="p-2.5 bg-gradient-to-br from-emerald-600 to-orange-600 rounded-lg shadow-lg">
                <FileText className="text-slate-950 font-bold" size={24} />
              </div>
              <span className="text-2xl font-black text-white">README.ai</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-orange-400 to-emerald-500 bg-clip-text text-transparent">
              Choose Your Template
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              Select a template that matches your style. Each template is fully customizable
              and includes live GitHub preview.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.id}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-emerald-600/30 rounded-2xl overflow-hidden hover:border-emerald-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-br ${template.gradient} rounded-xl shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="text-slate-950 font-bold" size={32} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                      {template.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 mb-4 leading-relaxed font-light">
                      {template.description}
                    </p>

                    {/* Preview Box */}
                    <div className="mb-6 p-3 bg-slate-900/60 rounded-lg border border-emerald-600/20 hover:border-emerald-600/40 transition-colors">
                      <p className="text-sm text-slate-400 italic">
                        {template.preview}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {template.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-orange-500"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      to={`/editor/${template.id}`}
                      className={`flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r ${template.gradient} text-slate-950 rounded-xl font-bold hover:shadow-2xl hover:shadow-emerald-600/30 transition-all duration-300 group/button active:scale-95 hover:scale-105`}
                    >
                      Use This Template
                      <ArrowRight size={18} className="group-hover/button:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Floating glow effect */}
                  <div className={`absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br ${template.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              );
            })}
          </div>

          {/* Back to Home Link */}
          <div className="mt-20 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-emerald-600/20 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400">
            Built by developer, for developers
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        @media (prefers-reduced-motion: no-preference) {
          .animate-pulse {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        }
      `}</style>
    </div>
  );
}