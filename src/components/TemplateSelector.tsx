import { TemplateType } from '../types';
import { Zap, Briefcase, Minimize2, Palette, Code2 } from 'lucide-react';

interface TemplateSelectorProps {
  selectedTemplate: TemplateType;
  onSelect: (template: TemplateType) => void;
}

const templates = [
  {
    id: 'neon' as TemplateType,
    name: 'Neon Glow',
    description: 'Eye-catching design with vibrant colors and modern animations',
    icon: Zap,
    color: 'from-pink-500 to-purple-600',
    preview: 'Animated, colorful badges, typing effects',
  },
  {
    id: 'professional' as TemplateType,
    name: 'Professional',
    description: 'Clean and corporate design perfect for job applications',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-700',
    preview: 'Structured, formal, business-ready',
  },
  {
    id: 'minimalist' as TemplateType,
    name: 'Minimalist',
    description: 'Simple and elegant with focus on content',
    icon: Minimize2,
    color: 'from-gray-500 to-gray-700',
    preview: 'Clean lines, no clutter, easy to read',
  },
  {
    id: 'creative' as TemplateType,
    name: 'Creative',
    description: 'Fun and expressive design with personality',
    icon: Palette,
    color: 'from-orange-500 to-red-600',
    preview: 'Emojis, GIFs, playful layout',
  },
  {
    id: 'developer' as TemplateType,
    name: 'Developer',
    description: 'Code-focused design with technical aesthetics',
    icon: Code2,
    color: 'from-green-500 to-teal-600',
    preview: 'Code blocks, dark theme, tech-savvy',
  },
];

export default function TemplateSelector({ selectedTemplate, onSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Choose Your Style</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => {
          const Icon = template.icon;
          const isSelected = selectedTemplate === template.id;
          return (
            <button
              key={template.id}
              onClick={() => onSelect(template.id)}
              className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${template.color} text-white`}
                >
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {template.description}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {template.preview}
                  </p>
                </div>
              </div>
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
