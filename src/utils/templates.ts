import { UserData } from '../types';

export function generateNeonTemplate(data: UserData): string {
  let readme = '';

  readme += `<div align="center">\n\n`;
  readme += `# <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30"> Hi, I'm ${data.name}! <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30">\n\n`;

  if (data.tagline) {
    readme += `### 🌟 ${data.tagline} 🌟\n\n`;
  }

  readme += `<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&pause=1000&color=F75C7E&center=true&vCenter=true&width=600&lines=Welcome+to+my+GitHub+Profile!;Let's+build+something+amazing!" alt="Typing SVG" />\n\n`;
  readme += `</div>\n\n`;

  readme += `---\n\n`;

  if (data.about) {
    readme += `## 💫 About Me\n\n`;
    readme += `\`\`\`yaml\n`;
    readme += `name: "${data.name}"\n`;
    if (data.location) readme += `location: "${data.location}"\n`;
    if (data.currentWork) readme += `current_work: "${data.currentWork}"\n`;
    readme += `status: "Building cool stuff 🚀"\n`;
    readme += `\`\`\`\n\n`;
    readme += `${data.about}\n\n`;
  }

  if (data.languages.filter(Boolean).length > 0 || data.frameworks.filter(Boolean).length > 0) {
    readme += `## 🔥 Tech Stack\n\n`;
    readme += `<div align="center">\n\n`;

    if (data.languages.filter(Boolean).length > 0) {
      readme += `### Languages\n`;
      data.languages.filter(Boolean).forEach(lang => {
        readme += `![${lang}](https://img.shields.io/badge/${lang.replace(/\s+/g, '%20')}-FF007F?style=for-the-badge&logo=${lang.toLowerCase()}&logoColor=white) `;
      });
      readme += `\n\n`;
    }

    if (data.frameworks.filter(Boolean).length > 0) {
      readme += `### Frameworks & Libraries\n`;
      data.frameworks.filter(Boolean).forEach(framework => {
        readme += `![${framework}](https://img.shields.io/badge/${framework.replace(/\s+/g, '%20')}-00D9FF?style=for-the-badge&logo=${framework.toLowerCase()}&logoColor=white) `;
      });
      readme += `\n\n`;
    }

    if (data.tools.filter(Boolean).length > 0) {
      readme += `### Tools\n`;
      data.tools.filter(Boolean).forEach(tool => {
        readme += `![${tool}](https://img.shields.io/badge/${tool.replace(/\s+/g, '%20')}-9D00FF?style=for-the-badge&logo=${tool.toLowerCase()}&logoColor=white) `;
      });
      readme += `\n\n`;
    }

    readme += `</div>\n\n`;
  }

  if (data.projects.filter(p => p.name).length > 0) {
    readme += `## ⚡ Featured Projects\n\n`;
    readme += `<div align="center">\n\n`;
    data.projects.filter(p => p.name).forEach(project => {
      readme += `### 🎯 [${project.name}](${project.link})\n`;
      readme += `> ${project.description}\n\n`;
    });
    readme += `</div>\n\n`;
  }

  if (data.githubUsername && (data.stats || data.topLanguages || data.streak)) {
    readme += `## 📊 GitHub Stats\n\n`;
    readme += `<div align="center">\n\n`;
    if (data.stats) {
      readme += `<img src="https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&show_icons=true&theme=radical&hide_border=true" alt="GitHub Stats" />\n\n`;
    }
    if (data.topLanguages) {
      readme += `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.githubUsername}&layout=compact&theme=radical&hide_border=true" alt="Top Languages" />\n\n`;
    }
    if (data.streak) {
      readme += `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.githubUsername}&theme=radical&hide_border=true" alt="GitHub Streak" />\n\n`;
    }
    readme += `</div>\n\n`;
  }

  if (data.githubUsername || data.linkedinUrl || data.twitterUrl || data.email) {
    readme += `## 🌐 Connect With Me\n\n`;
    readme += `<div align="center">\n\n`;
    if (data.githubUsername) {
      readme += `[![GitHub](https://img.shields.io/badge/GitHub-FF007F?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${data.githubUsername}) `;
    }
    if (data.linkedinUrl) {
      readme += `[![LinkedIn](https://img.shields.io/badge/LinkedIn-00D9FF?style=for-the-badge&logo=linkedin&logoColor=white)](${data.linkedinUrl}) `;
    }
    if (data.twitterUrl) {
      readme += `[![Twitter](https://img.shields.io/badge/Twitter-9D00FF?style=for-the-badge&logo=twitter&logoColor=white)](${data.twitterUrl}) `;
    }
    if (data.portfolioUrl) {
      readme += `[![Portfolio](https://img.shields.io/badge/Portfolio-FF6B00?style=for-the-badge&logo=google-chrome&logoColor=white)](${data.portfolioUrl}) `;
    }
    if (data.email) {
      readme += `[![Email](https://img.shields.io/badge/Email-FF0099?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${data.email}) `;
    }
    readme += `\n\n</div>\n\n`;
  }

  readme += `<div align="center">\n\n`;
  readme += `### ✨ Thanks for visiting! ✨\n\n`;
  readme += `![Profile Views](https://komarev.com/ghpvc/?username=${data.githubUsername}&color=ff007f&style=for-the-badge)\n\n`;
  readme += `</div>`;

  return readme;
}

export function generateProfessionalTemplate(data: UserData): string {
  let readme = '';

  readme += `# ${data.name}\n\n`;

  if (data.tagline) {
    readme += `**${data.tagline}**\n\n`;
  }

  if (data.location || data.email || data.portfolioUrl) {
    readme += `📍 ${data.location || 'Remote'}`;
    if (data.email) readme += ` | ✉️ ${data.email}`;
    if (data.portfolioUrl) readme += ` | 🌐 [Portfolio](${data.portfolioUrl})`;
    readme += `\n\n`;
  }

  readme += `---\n\n`;

  if (data.about) {
    readme += `## Professional Summary\n\n`;
    readme += `${data.about}\n\n`;
  }

  if (data.currentWork) {
    readme += `## Current Role\n\n`;
    readme += `${data.currentWork}\n\n`;
  }

  if (data.skills.filter(Boolean).length > 0) {
    readme += `## Core Competencies\n\n`;
    data.skills.filter(Boolean).forEach(skill => {
      readme += `- ${skill}\n`;
    });
    readme += `\n`;
  }

  if (data.languages.filter(Boolean).length > 0 || data.frameworks.filter(Boolean).length > 0 || data.tools.filter(Boolean).length > 0) {
    readme += `## Technical Skills\n\n`;

    if (data.languages.filter(Boolean).length > 0) {
      readme += `**Languages:** `;
      readme += data.languages.filter(Boolean).join(' • ');
      readme += `\n\n`;
    }

    if (data.frameworks.filter(Boolean).length > 0) {
      readme += `**Frameworks & Libraries:** `;
      readme += data.frameworks.filter(Boolean).join(' • ');
      readme += `\n\n`;
    }

    if (data.tools.filter(Boolean).length > 0) {
      readme += `**Tools & Platforms:** `;
      readme += data.tools.filter(Boolean).join(' • ');
      readme += `\n\n`;
    }
  }

  if (data.projects.filter(p => p.name).length > 0) {
    readme += `## Featured Projects\n\n`;
    data.projects.filter(p => p.name).forEach(project => {
      readme += `### [${project.name}](${project.link})\n`;
      readme += `${project.description}\n\n`;
    });
  }

  if (data.githubUsername && (data.stats || data.topLanguages)) {
    readme += `## GitHub Analytics\n\n`;
    if (data.stats) {
      readme += `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&show_icons=true&theme=default)\n\n`;
    }
    if (data.topLanguages) {
      readme += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.githubUsername}&layout=compact&theme=default)\n\n`;
    }
  }

  if (data.githubUsername || data.linkedinUrl || data.twitterUrl) {
    readme += `## Connect\n\n`;
    if (data.linkedinUrl) {
      readme += `[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](${data.linkedinUrl}) `;
    }
    if (data.githubUsername) {
      readme += `[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/${data.githubUsername}) `;
    }
    if (data.twitterUrl) {
      readme += `[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)](${data.twitterUrl}) `;
    }
    readme += `\n\n`;
  }

  readme += `---\n\n`;
  readme += `*Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}*`;

  return readme;
}
export function generateProductTemplate(data: UserData): string {
  let readme = '';

  readme += `<div align="center">\n\n`;
  readme += `# ${data.name}\n\n`;

  if (data.tagline) {
    readme += `**${data.tagline}**\n\n`;
  }

  readme += `*Building products with impact, clarity, and measurable outcomes.*\n\n`;
  readme += `</div>\n\n`;

  readme += `---\n\n`;

  if (data.about) {
    readme += `## 🧠 Product Overview\n\n`;
    readme += `${data.about}\n\n`;
  }

  if (data.currentWork || data.location) {
    readme += `## 📍 Context\n\n`;
    if (data.currentWork) readme += `- 💼 Currently: ${data.currentWork}\n`;
    if (data.location) readme += `- 🌍 Location: ${data.location}\n`;
    readme += `- 📈 Focus: Shipping usable, scalable solutions\n\n`;
  }

  if (data.skills.filter(Boolean).length > 0) {
    readme += `## 🎯 Core Strengths\n\n`;
    data.skills.filter(Boolean).forEach(skill => {
      readme += `- ${skill}\n`;
    });
    readme += `\n`;
  }

  if (
    data.languages.filter(Boolean).length > 0 ||
    data.frameworks.filter(Boolean).length > 0 ||
    data.tools.filter(Boolean).length > 0
  ) {
    readme += `## 🛠️ Product Toolkit\n\n`;

    if (data.languages.filter(Boolean).length > 0) {
      readme += `**Languages:** ${data.languages.filter(Boolean).join(' • ')}\n\n`;
    }

    if (data.frameworks.filter(Boolean).length > 0) {
      readme += `**Frameworks & Libraries:** ${data.frameworks.filter(Boolean).join(' • ')}\n\n`;
    }

    if (data.tools.filter(Boolean).length > 0) {
      readme += `**Tools & Platforms:** ${data.tools.filter(Boolean).join(' • ')}\n\n`;
    }
  }

  if (data.projects.filter(p => p.name).length > 0) {
    readme += `## 📦 Case Studies\n\n`;
    data.projects.filter(p => p.name).forEach(project => {
      readme += `### ${project.name}\n`;
      readme += `${project.description}\n\n`;
      readme += `🔗 ${project.link}\n\n`;
    });
  }

  if (data.githubUsername && (data.stats || data.topLanguages)) {
    readme += `## 📊 Engineering Signals\n\n`;
    if (data.stats) {
      readme += `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&show_icons=true&theme=transparent)\n\n`;
    }
    if (data.topLanguages) {
      readme += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.githubUsername}&layout=compact&theme=transparent)\n\n`;
    }
  }

  if (
    data.githubUsername ||
    data.linkedinUrl ||
    data.portfolioUrl ||
    data.email
  ) {
    readme += `## 🤝 Let’s Connect\n\n`;
    if (data.linkedinUrl) {
      readme += `- 💼 [LinkedIn](${data.linkedinUrl})\n`;
    }
    if (data.portfolioUrl) {
      readme += `- 🌐 [Portfolio](${data.portfolioUrl})\n`;
    }
    if (data.githubUsername) {
      readme += `- 💻 [GitHub](https://github.com/${data.githubUsername})\n`;
    }
    if (data.email) {
      readme += `- ✉️ ${data.email}\n`;
    }
    readme += `\n`;
  }

  readme += `---\n`;
  readme += `*Focused on outcomes, not just output.*`;

  return readme;
}

export function generateMinimalistTemplate(data: UserData): string {
  let readme = '';

  readme += `# ${data.name}\n\n`;

  if (data.tagline) {
    readme += `${data.tagline}\n\n`;
  }

  if (data.about) {
    readme += `${data.about}\n\n`;
  }

  if (data.currentWork) {
    readme += `Currently ${data.currentWork.toLowerCase()}\n\n`;
  }

  if (data.languages.filter(Boolean).length > 0) {
    readme += `**Tech:** `;
    const allTech = [
      ...data.languages.filter(Boolean),
      ...data.frameworks.filter(Boolean),
      ...data.tools.filter(Boolean)
    ];
    readme += allTech.join(', ');
    readme += `\n\n`;
  }

  if (data.projects.filter(p => p.name).length > 0) {
    readme += `**Projects:**\n\n`;
    data.projects.filter(p => p.name).forEach(project => {
      readme += `[${project.name}](${project.link}) - ${project.description}\n\n`;
    });
  }

  if (data.email || data.linkedinUrl || data.twitterUrl || data.portfolioUrl) {
    readme += `**Links:** `;
    const links = [];
    if (data.portfolioUrl) links.push(`[website](${data.portfolioUrl})`);
    if (data.linkedinUrl) links.push(`[linkedin](${data.linkedinUrl})`);
    if (data.twitterUrl) links.push(`[twitter](${data.twitterUrl})`);
    if (data.email) links.push(`[email](mailto:${data.email})`);
    readme += links.join(' · ');
  }

  return readme;
}

export function generateCreativeTemplate(data: UserData): string {
  let readme = '';

  readme += `<h1 align="center">🎨 ${data.name} 🎨</h1>\n\n`;

  if (data.tagline) {
    readme += `<p align="center"><em>${data.tagline}</em></p>\n\n`;
  }

  readme += `<p align="center">\n`;
  readme += `  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&center=true&vCenter=true&random=false&width=435&lines=Creative+Developer;Problem+Solver;Tech+Enthusiast" alt="Typing SVG" />\n`;
  readme += `</p>\n\n`;

  if (data.about) {
    readme += `## 🌈 About Me\n\n`;
    readme += `<img align="right" width="400" src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" />\n\n`;
    readme += `${data.about}\n\n`;
  }

  if (data.currentWork || data.location) {
    readme += `## 🎯 Current Status\n\n`;
    if (data.currentWork) readme += `- 💼 ${data.currentWork}\n`;
    if (data.location) readme += `- 📍 Based in ${data.location}\n`;
    readme += `- 🌱 Always learning and growing\n`;
    readme += `- ⚡ Fun fact: I love turning coffee into code!\n\n`;
  }

  if (data.skills.filter(Boolean).length > 0) {
    readme += `## 🚀 Superpowers\n\n`;
    readme += `<table>\n<tr>\n`;
    data.skills.filter(Boolean).forEach((skill, index) => {
      if (index % 2 === 0 && index !== 0) {
        readme += `</tr>\n<tr>\n`;
      }
      readme += `<td align="center">⚡ ${skill}</td>\n`;
    });
    readme += `</tr>\n</table>\n\n`;
  }

  if (data.languages.filter(Boolean).length > 0 || data.frameworks.filter(Boolean).length > 0) {
    readme += `## 🛠️ My Toolbox\n\n`;
    readme += `<div align="center">\n\n`;

    const allTech = [
      ...data.languages.filter(Boolean),
      ...data.frameworks.filter(Boolean),
      ...data.tools.filter(Boolean)
    ];

    allTech.forEach(tech => {
      readme += `<img src="https://img.shields.io/badge/-${tech.replace(/\s+/g, '%20')}-05122A?style=flat&logo=${tech.toLowerCase()}" alt="${tech}" /> `;
    });

    readme += `\n\n</div>\n\n`;
  }

  if (data.projects.filter(p => p.name).length > 0) {
    readme += `## 🎪 Showcase\n\n`;
    readme += `<div align="center">\n\n`;
    data.projects.filter(p => p.name).forEach((project, index) => {
      readme += `### ${['🎭', '🎨', '🎪', '🎯', '🎸'][index % 5]} ${project.name}\n`;
      readme += `**${project.description}**\n\n`;
      readme += `[🔗 View Project](${project.link})\n\n`;
    });
    readme += `</div>\n\n`;
  }

  if (data.githubUsername && (data.stats || data.topLanguages || data.streak)) {
    readme += `## 📈 GitHub Journey\n\n`;
    readme += `<div align="center">\n\n`;
    if (data.stats) {
      readme += `<img src="https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&show_icons=true&theme=tokyonight" alt="GitHub Stats" width="48%" />\n`;
    }
    if (data.topLanguages) {
      readme += `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.githubUsername}&layout=compact&theme=tokyonight" alt="Top Languages" width="48%" />\n\n`;
    }
    if (data.streak) {
      readme += `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.githubUsername}&theme=tokyonight" alt="GitHub Streak" width="48%" />\n\n`;
    }
    readme += `</div>\n\n`;
  }

  readme += `<div align="center">\n\n`;
  readme += `## 🤝 Let's Connect!\n\n`;
  if (data.linkedinUrl) {
    readme += `<a href="${data.linkedinUrl}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a> `;
  }
  if (data.githubUsername) {
    readme += `<a href="https://github.com/${data.githubUsername}"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a> `;
  }
  if (data.twitterUrl) {
    readme += `<a href="${data.twitterUrl}"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" /></a> `;
  }
  if (data.portfolioUrl) {
    readme += `<a href="${data.portfolioUrl}"><img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white" /></a> `;
  }
  readme += `\n\n`;
  readme += `<img src="https://komarev.com/ghpvc/?username=${data.githubUsername}&color=blueviolet&style=flat-square&label=Profile+Views" />\n\n`;
  readme += `</div>`;

  return readme;
}

export function generateDeveloperTemplate(data: UserData): string {
  let readme = '';

  readme += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=${encodeURIComponent(data.name)}&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient" />\n</div>\n\n`;

  readme += `\`\`\`javascript\n`;
  readme += `const developer = {\n`;
  readme += `  name: "${data.name}",\n`;
  if (data.tagline) readme += `  title: "${data.tagline}",\n`;
  if (data.location) readme += `  location: "${data.location}",\n`;
  if (data.currentWork) readme += `  currentWork: "${data.currentWork}",\n`;
  if (data.languages.filter(Boolean).length > 0) {
    readme += `  languages: [${data.languages.filter(Boolean).map(l => `"${l}"`).join(', ')}],\n`;
  }
  if (data.frameworks.filter(Boolean).length > 0) {
    readme += `  frameworks: [${data.frameworks.filter(Boolean).map(f => `"${f}"`).join(', ')}],\n`;
  }
  if (data.tools.filter(Boolean).length > 0) {
    readme += `  tools: [${data.tools.filter(Boolean).map(t => `"${t}"`).join(', ')}],\n`;
  }
  readme += `  askMeAbout: ["tech", "code", "innovation"],\n`;
  readme += `  currentlyLearning: "New technologies everyday 🚀"\n`;
  readme += `};\n`;
  readme += `\`\`\`\n\n`;

  if (data.about) {
    readme += `## 👨‍💻 About Me\n\n`;
    readme += `${data.about}\n\n`;
  }

  if (data.skills.filter(Boolean).length > 0) {
    readme += `## 💡 What I Do\n\n`;
    readme += `\`\`\`python\n`;
    readme += `skills = {\n`;
    data.skills.filter(Boolean).forEach((skill, index) => {
      readme += `    "${skill}": "⭐⭐⭐⭐⭐"${index < data.skills.filter(Boolean).length - 1 ? ',' : ''}\n`;
    });
    readme += `}\n`;
    readme += `\`\`\`\n\n`;
  }

  if (data.languages.filter(Boolean).length > 0 || data.frameworks.filter(Boolean).length > 0) {
    readme += `## 🔧 Technologies & Tools\n\n`;

    if (data.languages.filter(Boolean).length > 0) {
      readme += `**Languages**\n\n`;
      readme += `<p>\n`;
      data.languages.filter(Boolean).forEach(lang => {
        readme += `  <img src="https://img.shields.io/badge/-${lang.replace(/\s+/g, '%20')}-333333?style=flat&logo=${lang.toLowerCase()}" />\n`;
      });
      readme += `</p>\n\n`;
    }

    if (data.frameworks.filter(Boolean).length > 0) {
      readme += `**Frameworks & Libraries**\n\n`;
      readme += `<p>\n`;
      data.frameworks.filter(Boolean).forEach(framework => {
        readme += `  <img src="https://img.shields.io/badge/-${framework.replace(/\s+/g, '%20')}-333333?style=flat&logo=${framework.toLowerCase()}" />\n`;
      });
      readme += `</p>\n\n`;
    }

    if (data.tools.filter(Boolean).length > 0) {
      readme += `**Tools**\n\n`;
      readme += `<p>\n`;
      data.tools.filter(Boolean).forEach(tool => {
        readme += `  <img src="https://img.shields.io/badge/-${tool.replace(/\s+/g, '%20')}-333333?style=flat&logo=${tool.toLowerCase()}" />\n`;
      });
      readme += `</p>\n\n`;
    }
  }

  if (data.projects.filter(p => p.name).length > 0) {
    readme += `## 🚀 Projects\n\n`;
    readme += `<table>\n`;
    data.projects.filter(p => p.name).forEach((project, index) => {
      if (index % 2 === 0) readme += `<tr>\n`;
      readme += `  <td width="50%">\n`;
      readme += `    <h3><a href="${project.link}">${project.name}</a></h3>\n`;
      readme += `    <p>${project.description}</p>\n`;
      readme += `  </td>\n`;
      if (index % 2 === 1 || index === data.projects.filter(p => p.name).length - 1) {
        if (index % 2 === 0) readme += `  <td width="50%"></td>\n`;
        readme += `</tr>\n`;
      }
    });
    readme += `</table>\n\n`;
  }

  if (data.githubUsername && (data.stats || data.topLanguages || data.streak)) {
    readme += `## 📊 GitHub Stats\n\n`;
    readme += `<div align="center">\n\n`;
    if (data.stats) {
      readme += `<img height="180em" src="https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&show_icons=true&theme=dark&include_all_commits=true&count_private=true"/>\n`;
    }
    if (data.topLanguages) {
      readme += `<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.githubUsername}&layout=compact&langs_count=7&theme=dark"/>\n`;
    }
    if (data.streak) {
      readme += `\n\n<img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.githubUsername}&theme=dark" />\n`;
    }
    readme += `\n</div>\n\n`;
  }

  readme += `## 📫 How to Reach Me\n\n`;
  readme += `<div align="center">\n\n`;
  if (data.email) {
    readme += `[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${data.email})\n`;
  }
  if (data.linkedinUrl) {
    readme += `[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${data.linkedinUrl})\n`;
  }
  if (data.githubUsername) {
    readme += `[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${data.githubUsername})\n`;
  }
  if (data.twitterUrl) {
    readme += `[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](${data.twitterUrl})\n`;
  }
  if (data.portfolioUrl) {
    readme += `[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](${data.portfolioUrl})\n`;
  }
  readme += `\n</div>\n\n`;

  readme += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" />\n</div>`;

  return readme;
}
