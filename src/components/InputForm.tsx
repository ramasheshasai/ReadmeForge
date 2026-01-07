import { UserData } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface InputFormProps {
  userData: UserData;
  onChange: (data: UserData) => void;
}

export default function InputForm({ userData, onChange }: InputFormProps) {
  const updateField = (field: keyof UserData, value: string | boolean | string[]) => {
    onChange({ ...userData, [field]: value });
  };

  const updateArrayField = (field: 'skills' | 'languages' | 'frameworks' | 'tools', index: number, value: string) => {
    const newArray = [...userData[field]];
    newArray[index] = value;
    updateField(field, newArray);
  };

  const addToArray = (field: 'skills' | 'languages' | 'frameworks' | 'tools') => {
    updateField(field, [...userData[field], '']);
  };

  const removeFromArray = (field: 'skills' | 'languages' | 'frameworks' | 'tools', index: number) => {
    const newArray = userData[field].filter((_, i) => i !== index);
    updateField(field, newArray);
  };

  const addProject = () => {
    onChange({
      ...userData,
      projects: [...userData.projects, { name: '', description: '', link: '' }],
    });
  };

  const updateProject = (index: number, field: keyof typeof userData.projects[0], value: string) => {
    const newProjects = [...userData.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onChange({ ...userData, projects: newProjects });
  };

  const removeProject = (index: number) => {
    onChange({
      ...userData,
      projects: userData.projects.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Basic Information</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={userData.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Tagline (e.g., Full Stack Developer | AI Enthusiast)"
            value={userData.tagline}
            onChange={(e) => updateField('tagline', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            placeholder="About Me"
            value={userData.about}
            onChange={(e) => updateField('about', e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Location (e.g., San Francisco, CA)"
            value={userData.location}
            onChange={(e) => updateField('location', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Current Work (e.g., Working at XYZ Company)"
            value={userData.currentWork}
            onChange={(e) => updateField('currentWork', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Skills & Technologies</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
            {userData.skills.map((skill, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="e.g., Problem Solving"
                  value={skill}
                  onChange={(e) => updateArrayField('skills', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => removeFromArray('skills', index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              onClick={() => addToArray('skills')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              <Plus size={16} /> Add Skill
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
            {userData.languages.map((lang, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="e.g., JavaScript"
                  value={lang}
                  onChange={(e) => updateArrayField('languages', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => removeFromArray('languages', index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              onClick={() => addToArray('languages')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              <Plus size={16} /> Add Language
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Frameworks & Libraries</label>
            {userData.frameworks.map((framework, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="e.g., React"
                  value={framework}
                  onChange={(e) => updateArrayField('frameworks', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => removeFromArray('frameworks', index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              onClick={() => addToArray('frameworks')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              <Plus size={16} /> Add Framework
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tools & Platforms</label>
            {userData.tools.map((tool, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="e.g., Git"
                  value={tool}
                  onChange={(e) => updateArrayField('tools', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => removeFromArray('tools', index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              onClick={() => addToArray('tools')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              <Plus size={16} /> Add Tool
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Social Links</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="GitHub Username"
            value={userData.githubUsername}
            onChange={(e) => updateField('githubUsername', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="LinkedIn URL"
            value={userData.linkedinUrl}
            onChange={(e) => updateField('linkedinUrl', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Twitter URL"
            value={userData.twitterUrl}
            onChange={(e) => updateField('twitterUrl', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Portfolio URL"
            value={userData.portfolioUrl}
            onChange={(e) => updateField('portfolioUrl', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => updateField('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Projects</h3>
        {userData.projects.map((project, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Project {index + 1}</span>
              <button
                onClick={() => removeProject(index)}
                className="text-red-600 hover:bg-red-50 p-1 rounded"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Project Name"
                value={project.name}
                onChange={(e) => updateProject(index, 'name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Description"
                value={project.description}
                onChange={(e) => updateProject(index, 'description', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Project Link/Repo URL"
                value={project.link}
                onChange={(e) => updateProject(index, 'link', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        ))}
        <button
          onClick={addProject}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          <Plus size={16} /> Add Project
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">GitHub Stats</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={userData.stats}
              onChange={(e) => updateField('stats', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Show GitHub Stats</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={userData.topLanguages}
              onChange={(e) => updateField('topLanguages', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Show Top Languages</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={userData.streak}
              onChange={(e) => updateField('streak', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Show GitHub Streak</span>
          </label>
        </div>
      </div>
    </div>
  );
}
