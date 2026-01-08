import { Link } from 'react-router-dom';
import { Zap, Briefcase, Minimize2, Palette, Code2, ArrowRight, FileText } from 'lucide-react';

const templates = [
  {
    id: 'neon',
    name: 'Neon Glow',
    description: 'Eye-catching design with vibrant colors and modern animations',
    icon: Zap,
    gradient: 'from-pink-500 via-purple-500 to-cyan-500',
    preview: 'Animated badges, typing effects, vibrant colors',
    features: ['Animated typing SVG', 'Colorful badges', 'Neon aesthetics', 'Perfect for creative developers'],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clean and corporate design perfect for job applications',
    icon: Briefcase,
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    preview: 'Structured layout, formal tone, business-ready',
    features: ['Corporate style', 'Clean layout', 'Professional badges', 'Ideal for job seekers'],
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple and elegant with focus on content',
    icon: Minimize2,
    gradient: 'from-slate-600 via-slate-500 to-slate-400',
    preview: 'Clean lines, no clutter, easy to read',
    features: ['Less is more', 'Content focused', 'Simple design', 'Quick to scan'],
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Fun and expressive design with personality',
    icon: Palette,
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    preview: 'Playful layout, expressive elements',
    features: ['Fun design', 'Colorful elements', 'Personality shine', 'Stand out profile'],
  },
  {
    id: 'developer',
    name: 'Developer',
    description: 'Code-focused design with technical aesthetics',
    icon: Code2,
    gradient: 'from-green-500 via-teal-500 to-cyan-500',
    preview: 'Code blocks, dark theme, tech-savvy',
    features: ['Code aesthetics', 'Dark theme', 'Technical feel', 'Developer friendly'],
  },
];

export default function TemplatesGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <FileText className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white">README.ai</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Choose Your Template
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Select a template that matches your style. Each template is fully customizable
              and includes live GitHub preview.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.id}
                  className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-br ${template.gradient} rounded-xl shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {template.name}
                    </h3>

                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {template.description}
                    </p>

                    <div className="mb-6 p-3 bg-slate-900/50 rounded-lg border border-slate-700/50">
                      <p className="text-sm text-slate-500 italic">
                        {template.preview}
                      </p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {template.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/editor/${template.id}`}
                      className={`flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r ${template.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group/button`}
                    >
                      Use This Template
                      <ArrowRight size={18} className="group-hover/button:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className={`absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br ${template.gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
