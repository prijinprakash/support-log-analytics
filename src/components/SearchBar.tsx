
import { Search } from "lucide-react";
import { useState } from "react";
import SearchDialog from "./SearchDialog";

const SearchBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fake search bar (button, not input) */}
      <button
        type="button"
        aria-label="Open search"
        className="w-full max-w-[300px] h-9 bg-[#222324] text-white rounded text-sm flex items-center outline-none border-none shadow-none pl-10 pr-4 py-1.5 relative cursor-pointer hover:bg-[#232324] focus:ring-2 ring-[#03bd4d60] transition-colors"
        style={{ minWidth: 0 }}
        onClick={() => setOpen(true)}
        tabIndex={0}
      >
        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Search size={16} className="text-[#bbb]" />
        </span>
        <span className="truncate text-left text-[#bbb]">Search ...</span>
      </button>
      <SearchDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default SearchBar;
