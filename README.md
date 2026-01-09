# ReadmeForge

ReadmeForge is a GitHub README generator that lets developers build clean, professional profile READMEs with a **real GitHub-style live preview**.  
It supports Markdown, embedded HTML, images, badges, and GitHub stats — so what you see in the editor is exactly what appears on GitHub.

🔗 **Live Demo:** https://git-hub-readme-generator-pi.vercel.app/  
📦 **Repository:** https://github.com/ramasheshasai/ReadmeForge

---

## 🚀 Why ReadmeForge?

Writing a good GitHub README takes time, and most tools don’t accurately reflect how GitHub actually renders Markdown.

ReadmeForge solves this by:
- Providing a **GitHub-accurate live preview**
- Supporting **Markdown + raw HTML**, just like GitHub
- Offering **professionally structured templates**
- Allowing instant export of `README.md`

---

## ✨ Features

- **Real GitHub-Style Live Preview**  
  Preview your README exactly as GitHub renders it — including images, badges, tables, and HTML.

- **Multiple README Templates**  
  Choose from clean, professional, minimalist, creative, and developer-focused templates.

- **Markdown + HTML Support**  
  Supports embedded HTML (`<div>`, `<img>`, SVGs, badges) used in modern GitHub READMEs.

- **Instant Export**  
  Copy the generated Markdown or download it directly as `README.md`.

- **Developer-Focused UX**  
  Responsive, clean UI designed for speed and clarity.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Markdown Rendering:** react-markdown, remark-gfm, rehype-raw
- **GitHub Styling:** github-markdown-css
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 🧩 How It Works

1. Select a README template
2. Fill in your profile details (skills, projects, links, stats)
3. Preview the README live with GitHub-accurate rendering
4. Copy the Markdown or download `README.md`
5. Push it directly to your GitHub profile or repository

---

## 📸 Preview Accuracy

ReadmeForge uses GitHub’s official Markdown styles and enables raw HTML rendering to ensure:
- `<div align="center">` works
- Images and SVGs render correctly
- GitHub stats cards display properly
- The preview matches GitHub’s **Preview tab**

---

## 🧪 Local Development

```bash
# Clone the repository
git clone https://github.com/ramasheshasai/ReadmeForge.git

# Navigate to the project
cd ReadmeForge

# Install dependencies
npm install

# Start the development server
npm run dev
