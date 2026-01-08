import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface GitHubPreviewProps {
  markdown: string;
}

export default function GitHubPreview({ markdown }: GitHubPreviewProps) {
  return (
    <div className="github-markdown-body bg-white rounded-xl p-8 shadow-lg min-h-[600px]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown || '# Start filling in your details to see the preview...'}
      </ReactMarkdown>
    </div>
  );
}
