
import { Search } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";
import { useRef } from "react";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);

  // Keyboard shortcut — Cmd+K to focus the input
  // Only runs in browser environment
  if (typeof window !== "undefined") {
    document.onkeydown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ref.current?.focus();
      }
    };
  }

  return (
    <form className="flex items-center relative w-full max-w-lg">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Search size={16} className="text-[#bbb]" />
      </span>
      <input
        ref={ref}
        className="w-full rounded bg-[#222324] text-white pl-10 pr-24 py-2 text-sm border-none outline-none focus:ring-2 focus:ring-[#03bd4d] placeholder:text-[#7d8699]"
        placeholder="Search ..."
        type="search"
        aria-label="Search"
      />
      <button
        type="button"
        tabIndex={-1}
        className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-[#232426] text-xs font-medium text-[#99e0b6] border border-[#03bd4d70] hover:bg-[#03bd4d20] transition hover-scale"
        style={{ minWidth: 52 }}
      >
        Filter
      </button>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 text-xs px-2 py-1 bg-[#292b2e] text-[#8cbf99] rounded hidden md:flex items-center pointer-events-none border border-[#03bd4d40]">
        ⌘K
      </div>
    </form>
  );
};

export default SearchBar;
