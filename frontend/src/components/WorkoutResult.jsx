import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

// Responsive, beautiful markdown results!
const WorkoutResult = ({ plan }) => (
  <div className="
    glass-effect rounded-3xl
    p-4 xs:p-5 sm:p-6 md:p-8
    space-y-4
    prose prose-invert max-w-3xl mx-auto
    break-words
    overflow-x-auto
  ">
    <ReactMarkdown
      children={plan}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mt-6 mb-3" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mt-4 mb-2" {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className="text-blue-400" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="ml-4 xs:ml-6 list-disc space-y-1" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="ml-4 xs:ml-6 list-decimal space-y-1" {...props} />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[350px] border-collapse mt-4 text-left bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden" {...props} />
          </div>
        ),
        th: ({ node, ...props }) => (
          <th className="border border-gray-700 px-2 xs:px-4 py-2 bg-gray-900/80 text-blue-300" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="border border-gray-700 px-2 xs:px-4 py-2" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg" {...props} />
        ),
        code: ({ node, ...props }) => (
          <code className="bg-gray-800 text-blue-300 px-1.5 py-1 rounded text-xs xs:text-sm break-all" {...props} />
        ),
        pre: ({ node, ...props }) => (
          <pre className="bg-gray-900/70 rounded-xl p-3 xs:p-4 mb-4 overflow-x-auto text-xs xs:text-sm" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="text-blue-400 underline break-all" {...props} />
        ),
      }}
    />
  </div>
);

export default WorkoutResult;
