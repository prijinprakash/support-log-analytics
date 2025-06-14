
import { Search, ListFilter } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);

  if (typeof window !== "undefined") {
    document.onkeydown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ref.current?.focus();
      }
    };
  }

  return (
    <form className="flex items-center relative w-full max-w-xl h-9">
      {/* Search icon */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Search size={16} className="text-[#bbb]" />
      </span>
      {/* Use shadcn Input */}
      <Input
        ref={ref}
        className="w-full rounded pl-10 pr-16 py-1.5 bg-[#222324] text-white text-sm border-none outline-none placeholder:text-[#7d8699] focus:outline-none focus:ring-0 ring-0 shadow-none h-9"
        placeholder="Search ..."
        type="search"
        aria-label="Search"
        tabIndex={0}
      />
      {/* Filter button, no outline */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            tabIndex={-1}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-0 bg-transparent border-none text-[#99e0b6] hover:bg-[#03bd4d20] hover:text-[#03bd4d] rounded flex items-center w-8 h-8 focus:outline-none focus:ring-0"
            aria-label="Filter"
          >
            <ListFilter size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="text-xs">Filter</span>
        </TooltipContent>
      </Tooltip>
      {/* Keyboard shortcut display */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 text-xs px-2 py-0.5 bg-[#292b2e] text-[#8cbf99] rounded hidden md:flex items-center pointer-events-none border-0 shadow-none select-none h-6">
        ⌘K
      </div>
    </form>
  );
};

export default SearchBar;
