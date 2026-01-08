import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown-light.css';

interface GitHubPreviewProps {
  markdown: string;
}

export default function GitHubPreview({ markdown }: GitHubPreviewProps) {
  return (
    <div className="w-full flex justify-center bg-[#f6f8fa] py-8">
      <div className="w-full max-w-[980px] bg-white border border-[#d0d7de] rounded-md shadow-sm">
        
        {/* README Header */}
        <div className="px-6 py-4 border-b border-[#d0d7de] bg-[#f6f8fa] rounded-t-md">
          <h2 className="text-sm font-semibold text-[#24292f]">
            README.md
          </h2>
        </div>

        {/* REAL GitHub Markdown Rendering */}
        <article className="markdown-body px-6 py-8">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}   // 🔥 THIS IS THE KEY
          >
            {markdown || '# Start filling in your details to see the preview...'}
          </ReactMarkdown>
        </article>

      </div>
    </div>
  );
}
