import React from 'react';

export default function Section({ title, children, link }) {
  // Check if title is a valid URL
  const isTitleLink = link != undefined;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 py-2 print:py-4 print:grid-cols-5">
      <div className="text-2xl font-semibold sm:font-normal pb-2 sm:pb-0">
        {isTitleLink ? (
          <a href={title} target="_blank" rel="noopener noreferrer" className="underline text-cyan-600">
            {title}
          </a>
        ) : (
          title
        )}
      </div>
      <div className="sm:col-span-4 print:col-span-4 grid gap-y-1">
        {children}
      </div>
    </div>
  );
}
