
import { Search, ListFilter } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import SearchDialog from "./SearchDialog";

// Platform-specific shortcut display
function getShortcutLabel() {
  return navigator.platform.includes('Mac') ? "⌘ K" : "Ctrl K";
}

const SearchBar = () => {
  const [open, setOpen] = useState(false);

  // Keyboard shortcut handler (Cmd+K or Ctrl+K)
  const handleKeydown = useCallback((event: KeyboardEvent) => {
    const isMac = navigator.platform.includes('Mac');
    // Cmd+K (Mac) or Ctrl+K (Win/Linux)
    if (
      ((isMac && event.metaKey) || (!isMac && event.ctrlKey)) &&
      (event.key === "k" || event.key === "K")
    ) {
      event.preventDefault();
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <>
      {/* Fake search bar (button, not input) */}
      <button
        type="button"
        aria-label="Open search"
        className="w-full max-w-[220px] h-9 bg-[#222324] text-white rounded text-sm flex items-center outline-none border-none shadow-none pl-9 pr-3 py-1.5 relative cursor-pointer hover:bg-[#232324] focus:ring-2 ring-[#03bd4d60] transition-colors min-w-0"
        style={{ minWidth: 0 }}
        onClick={() => setOpen(true)}
        tabIndex={0}
      >
        {/* Search icon, absolute position */}
        <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <Search size={16} className="text-[#bbb]" />
        </span>
        {/* Label */}
        <span className="truncate text-left text-[#bbb] pr-2 flex-1">Search ...</span>
        {/* Filter icon, inline */}
        <span className="ml-2 flex items-center text-[#6bd17b]">
          <ListFilter size={16} className="align-middle" />
        </span>
        {/* Keyboard shortcut */}
        <span className="ml-2 px-1.5 py-0.5 text-xs rounded bg-[#232324] text-[#bbb] border border-[#28282a] font-mono tracking-tight">
          {getShortcutLabel()}
        </span>
      </button>
      <SearchDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default SearchBar;

