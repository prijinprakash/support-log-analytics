
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import TimezoneSelector from "./TimezoneSelector";
import { Moon, Sun } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Header bar is always dark, regardless of theme
const headerBg = "bg-[#09090b]"; // updated dark background
const headerText = "text-white";

const Header = () => {
  // for dark/light theme, managed locally here as demo
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // Initialize theme based on document class
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  // Always keep header/footer dark, toggle theme for rest
  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark");
    setDark((d) => !d);
  };

  return (
    <header className={cn(headerBg, headerText, "w-full")}>
      <div className="flex flex-row items-center justify-between px-4 py-2 gap-2 border-b border-[rgba(255,255,255,0.08)] min-h-[52px]">
        {/* Left: Logo */}
        <div className="flex items-center min-w-[180px]">
          <Logo />
          <span className="ml-2 text-lg font-semibold hidden sm:block">Dashboard</span>
        </div>

        {/* Center: SearchBar */}
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>

        {/* Right: TimezoneSelector + icon buttons */}
        <div className="flex items-center gap-2 min-w-[320px] justify-end">
          <TimezoneSelector />
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Toggle dark mode"
                className="ml-2 rounded p-2 bg-transparent hover:bg-[#222] transition-colors"
                onClick={handleThemeToggle}
                data-testid="dark-toggle"
                type="button"
              >
                {dark ? (
                  <Moon size={18} className="text-[#aaa]" />
                ) : (
                  <Sun size={18} className="text-[#aaa]" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span className="text-xs">Switch to {dark ? 'light' : 'dark'} theme</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      {/* Tabs area handled separately in TabNavigation */}
    </header>
  );
};

export default Header;
