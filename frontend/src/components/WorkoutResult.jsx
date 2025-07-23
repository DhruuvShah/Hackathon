import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

// Add Tailwind/your classes to markdown elements using components prop:
const WorkoutResult = ({ plan }) => (
  <div className="glass-effect rounded-3xl p-6 sm:p-8 space-y-4 prose prose-invert max-w-none">
    <ReactMarkdown
      children={plan}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
        strong: ({node, ...props}) => <strong className="text-blue-400" {...props} />,
        ul: ({node, ...props}) => <ul className="ml-6 list-disc space-y-1" {...props} />,
        ol: ({node, ...props}) => <ol className="ml-6 list-decimal space-y-1" {...props} />,
        table: ({node, ...props}) => (
          <table className="w-full border-collapse mt-4 text-left bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden" {...props} />
        ),
        th: ({node, ...props}) => (
          <th className="border border-gray-700 px-4 py-2 bg-gray-900/80 text-blue-300" {...props} />
        ),
        td: ({node, ...props}) => (
          <td className="border border-gray-700 px-4 py-2" {...props} />
        ),
        p: ({node, ...props}) => <p className="text-gray-300" {...props} />,
      }}
    />
  </div>
);

export default WorkoutResult;
