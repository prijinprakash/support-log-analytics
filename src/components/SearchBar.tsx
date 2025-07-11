
import { Search, ListFilter } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import SearchDialog from "./SearchDialog";
import FilterDialog from "./FilterDialog";

// Platform-specific shortcut display
function getShortcutLabel() {
  return navigator.platform.includes('Mac') ? "⌘K" : "Ctrl K";
}

const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  // Keyboard shortcut handler (Cmd+K or Ctrl+K)
  const handleKeydown = useCallback((event: KeyboardEvent) => {
    const isMac = navigator.platform.includes('Mac');
    // Cmd+K (Mac) or Ctrl+K (Win/Linux)
    if (
      ((isMac && event.metaKey) || (!isMac && event.ctrlKey)) &&
      (event.key === "k" || event.key === "K")
    ) {
      event.preventDefault();
      setSearchOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFilterOpen(true);
  };

  return (
    <>
      {/* Fake search bar (button, not input) */}
      <button
        type="button"
        aria-label="Open search"
        className="w-[250px] h-9 bg-lightbackground text-white rounded-md text-sm flex items-center border-headerborder border pl-9 pr-3 py-1.5 relative cursor-pointer hover:bg-headerborder transition-colors min-w-0"
        style={{ minWidth: 0 }}
        onClick={handleSearchClick}
        tabIndex={0}
      >
        {/* Search icon, absolute position */}
        <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <Search size={16} className="text-[#bbb]" />
        </span>
        {/* Label */}
        <span className="truncate text-left text-[#bbb] pr-2 flex-1">Search...</span>
        {/* Keyboard shortcut */}
        <span className="py-0.5 rounded text-[#bbb]">{getShortcutLabel()}</span>
        {/* Filter icon, inline after shortcut */}
        <button
          type="button"
          aria-label="Open filters"
          className="ml-2 flex items-center text-[#bbb] hover:text-primary transition-colors p-1 rounded hover:bg-[#232324]"
          onClick={handleFilterClick}
        >
          <ListFilter size={16} className="align-middle" />
        </button>
      </button>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <FilterDialog open={filterOpen} onOpenChange={setFilterOpen} />
    </>
  );
};

export default SearchBar;
