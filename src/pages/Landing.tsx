import { Link } from 'react-router-dom';
import { FileText, Sparkles, Zap, Code2, Download, Eye } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <FileText className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white">README.ai</span>
            </div>
            <Link
              to="/templates"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
                <Sparkles size={16} className="animate-pulse" />
                AI-Powered README Generator
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight animate-gradient">
              Create Stunning GitHub
              <br />
              READMEs in Seconds
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Stand out from the crowd with professionally designed README profiles.
              Choose from stunning templates, customize everything, and download instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/templates"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Creating
                <Zap size={20} className="group-hover:rotate-12 transition-transform" />
              </Link>
              <a
                href="#features"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white border border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <div className="text-cyan-400"># Hi, I'm John Doe 👋</div>
                <div className="text-slate-400 mt-2">### Full Stack Developer | AI Enthusiast</div>
                <div className="text-slate-300 mt-4">
                  ![GitHub Stats](https://github-readme-stats.vercel.app/api?username=johndoe)
                </div>
                <div className="text-green-400 mt-4">## 🚀 Skills</div>
                <div className="text-slate-400 mt-2">JavaScript • React • Node.js • Python</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose README.ai?
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to create a professional GitHub profile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">5 Beautiful Templates</h3>
              <p className="text-slate-400 leading-relaxed">
                Choose from Neon, Professional, Minimalist, Creative, and Developer themes.
                Each template is carefully crafted for maximum impact.
              </p>
            </div>

            <div className="group p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Live GitHub Preview</h3>
              <p className="text-slate-400 leading-relaxed">
                See exactly how your README will look on GitHub in real-time as you edit.
                No surprises, just perfection.
              </p>
            </div>

            <div className="group p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Generation</h3>
              <p className="text-slate-400 leading-relaxed">
                Fill in your details and watch your README come to life instantly.
                Download or copy with one click.
              </p>
            </div>

            <div className="group p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Code2 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GitHub Stats Integration</h3>
              <p className="text-slate-400 leading-relaxed">
                Add GitHub stats, top languages, and streak cards to showcase your
                coding journey and achievements.
              </p>
            </div>

            <div className="group p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Download className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Export Anywhere</h3>
              <p className="text-slate-400 leading-relaxed">
                Download your README.md file or copy the markdown to your clipboard.
                Ready to push to your repository immediately.
              </p>
            </div>

            <div className="group p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <FileText className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">100% Customizable</h3>
              <p className="text-slate-400 leading-relaxed">
                Add projects, skills, social links, and more. Every template is fully
                customizable to match your unique style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Stand Out?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join thousands of developers who have transformed their GitHub profiles
          </p>
          <Link
            to="/templates"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Create Your README Now
            <Zap size={24} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500">
            Made with love for the developer community
          </p>
        </div>
      </footer>
    </div>
  );
}
