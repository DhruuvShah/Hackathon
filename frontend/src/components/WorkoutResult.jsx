import React from 'react';

const WorkoutResult = ({ plan }) => {
    // This is a simplified Markdown to HTML parser. For production, a library like 'marked' or 'react-markdown' would be more robust.
    const renderMarkdown = (markdown) => {
        let html = markdown
            .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
            .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
            .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-4 mb-2">$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/^- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>');

        // Group list items
        html = html.replace(/<\/li>\s*<li/g, '</li><li');
        html = html.replace(/(<li.*<\/li>)/gs, '<ul>$1</ul>');
        
        // Handle tables
        const tableRegex = /\|(.+)\|\s*<br \/>\|(.*)\|/g;
        html = html.replace(tableRegex, (match, header, rows) => {
            const headers = header.split('|').slice(1, -1).map(h => h.trim());
            const rowData = rows.split(/<br \/>\|/).map(r => r.split('|').slice(1, -1).map(c => c.trim()));

            let tableHtml = '<table class="w-full border-collapse mt-4 text-left">';
            tableHtml += '<thead><tr>';
            headers.forEach(h => tableHtml += `<th class="border border-gray-600 px-4 py-2">${h}</th>`);
            tableHtml += '</tr></thead><tbody>';
            rowData.forEach(row => {
                if(row.length === headers.length && row.every(c => !c.startsWith('--'))) {
                     tableHtml += '<tr>';
                     row.forEach(cell => tableHtml += `<td class="border border-gray-600 px-4 py-2">${cell}</td>`);
                     tableHtml += '</tr>';
                }
            });
            tableHtml += '</tbody></table>';
            return tableHtml;
        }).replace(/<br \/>/g, '\n');

        return { __html: html.replace(/\n/g, '<br />') };
    };

    return (
        <div className="glass-effect rounded-3xl p-6 sm:p-8 space-y-4 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white">
            <div dangerouslySetInnerHTML={renderMarkdown(plan)} />
        </div>
    );
};

export default WorkoutResult;