import { Link } from 'react-router-dom';
import { FileText, Sparkles, Zap, Code2, Download, Eye } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-amber-950 to-slate-950">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-700/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <nav className="fixed top-0 w-full bg-gradient-to-b from-slate-950/95 to-slate-950/50 backdrop-blur-xl z-50 border-b border-emerald-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-emerald-600 to-orange-600 rounded-lg shadow-lg">
                <FileText className="text-slate-950 font-bold" size={24} />
              </div>
              <span className="text-2xl font-black text-white">README.ai</span>
            </div>
            <Link
              to="/templates"
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-orange-600 text-slate-950 rounded-lg font-bold hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Create README
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-600/20 border border-emerald-500/40 rounded-full text-emerald-300 text-sm font-bold backdrop-blur-sm hover:bg-emerald-600/30 transition-colors">
                <Sparkles size={16} />
                GitHub README Generator
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-orange-400 to-emerald-500 bg-clip-text text-transparent leading-tight">
              Build a Clean, Professional
              <br />
              GitHub README
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Create a GitHub README that clearly represents who you are as a developer.
              Choose a template, add your details, preview it live, and export instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/templates"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-orange-600 text-slate-950 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 active:scale-95"
              >
                Create My README
                <Zap size={20} className="group-hover:rotate-12 transition-transform" />
              </Link>
              <a
                href="#features"
                className="px-8 py-4 bg-slate-800/60 backdrop-blur-sm text-slate-100 border border-emerald-600/30 rounded-xl font-semibold text-lg hover:bg-slate-800/80 hover:border-emerald-500/50 transition-all duration-300"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/15 to-orange-600/15 blur-3xl"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-emerald-600/30 p-8 shadow-2xl hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-slate-900/80 rounded-lg p-6 font-mono text-sm overflow-x-auto border border-slate-700/50">
                <div className="text-emerald-400 font-bold"># Hi, I'm John Doe 👋</div>
                <div className="text-slate-400 mt-2">
                  ### Full Stack Developer | Problem Solver
                </div>
                <div className="text-slate-300 mt-4">
                  ![GitHub Stats](https://github-readme-stats.vercel.app/api?username=johndoe)
                </div>
                <div className="text-orange-400 font-bold mt-4">## 🚀 Skills</div>
                <div className="text-slate-400 mt-2">
                  JavaScript • React • Node.js • Python
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Everything You Need for a GitHub README
            </h2>
            <p className="text-xl text-slate-300">
              Simple, practical features designed for developers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={<Sparkles size={28} className="text-emerald-400" />}
              title="Multiple README Templates"
              desc="Choose from clean, professional, minimalist, creative, and developer-focused layouts."
              accentColor="emerald"
            />
            <Feature
              icon={<Eye size={28} className="text-orange-400" />}
              title="Live GitHub Preview"
              desc="Preview your README exactly as it will appear on GitHub, including images and HTML."
              accentColor="orange"
            />
            <Feature
              icon={<Zap size={28} className="text-emerald-400" />}
              title="Instant Markdown Generation"
              desc="Your README updates instantly as you fill in your details."
              accentColor="emerald"
            />
            <Feature
              icon={<Code2 size={28} className="text-orange-400" />}
              title="GitHub Stats Support"
              desc="Include GitHub stats, top languages, and contribution streaks easily."
              accentColor="orange"
            />
            <Feature
              icon={<Download size={28} className="text-emerald-400" />}
              title="Export Ready"
              desc="Download your README.md or copy the markdown to commit directly."
              accentColor="emerald"
            />
            <Feature
              icon={<FileText size={28} className="text-orange-400" />}
              title="Fully Customizable"
              desc="You control the content. The tool just formats it cleanly."
              accentColor="orange"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Create Your README?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Generate a clean GitHub profile README in just a few minutes.
          </p>
          <Link
            to="/templates"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-orange-600 text-slate-950 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Open README Generator
            <Zap size={24} />
          </Link>
        </div>
      </section>

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

function Feature({
  icon,
  title,
  desc,
  accentColor,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accentColor: 'emerald' | 'orange';
}) {
  const bgColor = accentColor === 'emerald' ? 'from-emerald-600/20 to-emerald-600/5' : 'from-orange-600/20 to-orange-600/5';
  const borderColor = accentColor === 'emerald' ? 'border-emerald-600/30 hover:border-emerald-500/50' : 'border-orange-600/30 hover:border-orange-500/50';
  const iconBg = accentColor === 'emerald' ? 'bg-gradient-to-br from-emerald-600/30 to-emerald-700/20' : 'bg-gradient-to-br from-orange-600/30 to-orange-700/20';

  return (
    <div className={`group p-8 bg-gradient-to-br ${bgColor} backdrop-blur-sm border ${borderColor} rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}>
      <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}