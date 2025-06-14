
import { Search, ListFilter } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);

  // Keyboard shortcut — Cmd+K to focus the input
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
      {/* Search icon */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Search size={16} className="text-[#bbb]" />
      </span>
      {/* Use shadcn Input */}
      <Input
        ref={ref}
        className="w-full rounded pl-10 pr-14 py-2 bg-[#222324] text-white text-sm border-none outline-none placeholder:text-[#7d8699] focus:outline-none focus:ring-0 ring-0 shadow-none"
        placeholder="Search ..."
        type="search"
        aria-label="Search"
      />
      {/* Filter button, no outline */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            tabIndex={-1}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-0 bg-transparent border-none text-[#99e0b6] hover:bg-[#03bd4d20] hover:text-[#03bd4d] rounded flex items-center transition w-8 h-8 focus:outline-none focus:ring-0"
            aria-label="Filter"
          >
            <ListFilter size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="text-xs">Filter</span>
        </TooltipContent>
      </Tooltip>
      {/* Keyboard shortcut display, no outline or border */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 text-xs px-2 py-1 bg-[#292b2e] text-[#8cbf99] rounded hidden md:flex items-center pointer-events-none border-0 shadow-none select-none">
        ⌘K
      </div>
    </form>
  );
};

export default SearchBar;
