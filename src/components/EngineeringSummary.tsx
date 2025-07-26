import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { set } from "date-fns";

type HeadingData = {
  id: string;
  text: string;
  level: "H2" | "H3";
};

interface EngineeringSummaryProps {
  content: React.ReactNode;
}

const EngineeringSummary: React.FC<EngineeringSummaryProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [headings, setHeadings] = useState<HeadingData[]>([]);

  useEffect(() => {
    if (!contentRef.current) return;

    const nodes = contentRef.current.querySelectorAll<HTMLHeadingElement>("h2, h3");
    const headingData: HeadingData[] = Array.from(nodes).map((node) => ({
      id: node.id,
      text: node.innerText,
      level: node.tagName as "H2" | "H3",
    }));
    setHeadings(headingData);
    setActiveId(headingData.length > 0 ? headingData[0].id : null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0% 0% -80% 0%", // triggers earlier to highlight TOC
        threshold: 0.1,
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [content]);

  const handleTOCClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 p-6">
      {/* Left column: scrollable content */}
      <div
        ref={contentRef}
        className="overflow-y-auto h-[80vh] prose prose-lg max-w-none pr-4 scroll-smooth"
      >
        {content}
      </div>

      {/* Right column: sticky TOC, scrollable only if needed */}
      <aside className="relative hidden md:block">
        <div className="sticky top-6 max-h-[80vh] overflow-y-auto pl-4">
          <h4 className="text-sm font-semibold mb-2">Table of Contents</h4>
          <ul className="space-y-1 text-sm">
            {headings.map(({ id, text, level }) => (
              <li key={id}>
                <button
                  onClick={() => handleTOCClick(id)}
                  className={clsx(
                    "text-left w-full transition-colors",
                    level === "H3" ? "ml-4 text-gray-500" : "",
                    activeId === id
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-brand/80"
                  )}
                >
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default EngineeringSummary;
