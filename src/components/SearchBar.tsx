
import { Search, ListFilter } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
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
  }, [handleKeydown]);

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
        className="w-full max-w-[250px] h-9 bg-lightbackground text-white rounded-md text-sm flex items-center border-primary border pl-9 pr-3 py-1.5 relative cursor-pointer hover:bg-[#232324] transition-colors min-w-0"
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
        {/* <span className="ml-2 px-1.5 py-0.5 text-xs rounded-md bg-[#232324] text-[#bbb] border border-[#28282a] font-mono tracking-tight">
          {getShortcutLabel()}
        </span> */}
        <span className="py-0.5 rounded text-[#bbb]">{getShortcutLabel()}</span>
        {/* Filter icon, inline after shortcut */}
        <button
          type="button"
          aria-label="Open filters"
          className="ml-2 flex items-center text-[#bbb] hover:text-brand transition-colors p-1 rounded hover:bg-[#232324]"
          onClick={handleFilterClick}
        >
          <ListFilter size={16} className="align-middle" />
        </button>

        {/* <Button variant="ghost" size="sm" className="cursor-pointer">
            <ListFilter size="sm"/>
        </Button> */}
      </button>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <FilterDialog open={filterOpen} onOpenChange={setFilterOpen} />
    </>
  );
};

export default SearchBar;
