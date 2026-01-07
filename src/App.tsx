import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';
import InputForm from './components/InputForm';
import TemplateSelector from './components/TemplateSelector';
import PreviewPanel from './components/PreviewPanel';
import { UserData, TemplateType } from './types';
import {
  generateNeonTemplate,
  generateProfessionalTemplate,
  generateMinimalistTemplate,
  generateCreativeTemplate,
  generateDeveloperTemplate,
} from './utils/templates';

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

function App() {
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('neon');
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    let generatedMarkdown = '';
    switch (selectedTemplate) {
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
    }
    setMarkdown(generatedMarkdown);
  }, [userData, selectedTemplate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <FileText className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI README Generator
              </h1>
              <p className="text-gray-600 text-sm">
                Create stunning GitHub profile READMEs in seconds
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onSelect={setSelectedTemplate}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto max-h-[calc(100vh-250px)]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Information</h2>
            <InputForm userData={userData} onChange={setUserData} />
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <PreviewPanel markdown={markdown} />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            Made with love for the developer community
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
