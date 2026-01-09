import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FileText, Copy, Download, Check, ArrowLeft, Eye, Code } from 'lucide-react';
import InputForm from '../components/InputForm';
import GitHubPreview from '../components/GitHubPreview';
import { UserData, TemplateType } from '../types';
import {
  generateNeonTemplate,
  generateProfessionalTemplate,
  generateMinimalistTemplate,
  generateCreativeTemplate,
  generateDeveloperTemplate,
  generateProductTemplate,
} from '../utils/templates';

const initialUserData: UserData = {
  name: '',
  tagline: '',
  about: '',
  location: '',
  currentWork: '',
  skills: [''],
  languages: [''],
  frameworks: [''],
  tools: [''],
  githubUsername: '',
  linkedinUrl: '',
  twitterUrl: '',
  portfolioUrl: '',
  email: '',
  projects: [],
  stats: false,
  topLanguages: false,
  streak: false,
};

const templateInfo = {
  neon: { name: 'Neon Glow', gradient: 'from-pink-500 to-purple-600' },
  professional: { name: 'Professional', gradient: 'from-blue-500 to-blue-700' },
  minimalist: { name: 'Minimalist', gradient: 'from-gray-500 to-gray-700' },
  creative: { name: 'Creative', gradient: 'from-orange-500 to-red-600' },
  developer: { name: 'Developer', gradient: 'from-green-500 to-teal-600' },
  product: { name: 'Product', gradient: 'from-indigo-500 via-emerald-500 to-cyan-500' },
};

export default function TemplateEditor() {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [markdown, setMarkdown] = useState('');
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  useEffect(() => {
    if (!templateId || !['neon', 'professional', 'minimalist', 'creative', 'developer', 'product'].includes(templateId)) {
      navigate('/templates');
      return;
    }

    let generatedMarkdown = '';
    switch (templateId as TemplateType) {
      case 'neon':
        generatedMarkdown = generateNeonTemplate(userData);
        break;
      case 'professional':
        generatedMarkdown = generateProfessionalTemplate(userData);
        break;
      case 'minimalist':
        generatedMarkdown = generateMinimalistTemplate(userData);
        break;
      case 'creative':
        generatedMarkdown = generateCreativeTemplate(userData);
        break;
      case 'developer':
        generatedMarkdown = generateDeveloperTemplate(userData);
        break;
      case 'product':
  generatedMarkdown = generateProductTemplate(userData);
  break;

    }
    setMarkdown(generatedMarkdown);
  }, [userData, templateId, navigate]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const template = templateInfo[templateId as TemplateType];

  if (!template) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/templates"
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="text-slate-600" size={24} />
              </Link>
              <div className="flex items-center gap-3">
                <div className={`p-2.5 bg-gradient-to-br ${template.gradient} rounded-lg`}>
                  <FileText className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-800">{template.name} Template</h1>
                  <p className="text-sm text-slate-500">Customize your README</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('preview')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all ${
                    viewMode === 'preview'
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <Eye size={16} />
                  Preview
                </button>
                <button
                  onClick={() => setViewMode('code')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all ${
                    viewMode === 'code'
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <Code size={16} />
                  Code
                </button>
              </div>

              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    <span className="hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all"
              >
                <Download size={18} />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md border border-slate-200">
              <div className="border-b border-slate-200 px-6 py-4">
                <h2 className="text-xl font-bold text-slate-800">Your Information</h2>
                <p className="text-sm text-slate-500 mt-1">Fill in your details to generate your README</p>
              </div>
              <div className="p-6 overflow-auto max-h-[calc(100vh-200px)]">
                <InputForm userData={userData} onChange={setUserData} />
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 h-fit space-y-4">
            <div className="bg-white rounded-xl shadow-md border border-slate-200">
              <div className="border-b border-slate-200 px-6 py-4">
                <h2 className="text-xl font-bold text-slate-800">Live Preview</h2>
                <p className="text-sm text-slate-500 mt-1">
                  {viewMode === 'preview' ? 'See how it looks on GitHub' : 'View the markdown code'}
                </p>
              </div>
              <div className="p-6 overflow-auto max-h-[calc(100vh-200px)]">
                {viewMode === 'preview' ? (
                  <GitHubPreview markdown={markdown} />
                ) : (
                  <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm text-slate-300 font-mono leading-relaxed whitespace-pre-wrap">
                      {markdown || '# Start filling in your details...'}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
