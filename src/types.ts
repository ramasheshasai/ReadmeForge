export interface UserData {
  name: string;
  tagline: string;
  about: string;
  location: string;
  currentWork: string;
  skills: string[];
  languages: string[];
  frameworks: string[];
  tools: string[];
  githubUsername: string;
  linkedinUrl: string;
  twitterUrl: string;
  portfolioUrl: string;
  email: string;
  projects: Project[];
  stats: boolean;
  topLanguages: boolean;
  streak: boolean;
}

export interface Project {
  name: string;
  description: string;
  link: string;
}

export type TemplateType = 'neon' | 'professional' | 'minimalist' | 'creative' | 'developer' | 'product' | 'datascience';
