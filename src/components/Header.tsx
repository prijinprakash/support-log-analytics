import Logo from "./Logo";
import SearchBar from "./SearchBar";
import TimezoneSelector from "./TimezoneSelector";
import { Moon, Sun } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Header bar is always dark, regardless of theme
const headerBg = "bg-[#09090b]"; // unified dark background
const headerText = "text-white";

const Header = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark");
    setDark((d) => !d);
  };

  return (
    <header className={cn(headerBg, headerText, "w-full border-b border-[#18191b]")}>
      <div
        className="flex flex-row items-center justify-between px-4 gap-2"
        style={{ minHeight: 44, height: 44 }}
      >
        {/* Left: Logo and title */}
        <div className="flex items-center min-w-[150px] h-full">
          <Logo />
          <span className="ml-2 text-base font-semibold hidden sm:block leading-none">
            Dashboard
          </span>
        </div>
        {/* Center: SearchBar */}
        <div className="flex flex-1 justify-center items-center h-full max-w-xs px-2">
          <SearchBar />
        </div>
        {/* Right: Timezone selector and icon buttons */}
        <div className="flex items-center justify-end min-w-[320px] gap-1 h-full">
          <TimezoneSelector />
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Toggle dark mode"
                className="rounded p-2 bg-transparent hover:bg-[#232323] transition-colors h-9 w-9 flex items-center justify-center"
                onClick={handleThemeToggle}
                data-testid="dark-toggle"
                type="button"
              >
                {dark ? (
                  <Moon size={18} className="text-[#ccc]" />
                ) : (
                  <Sun size={18} className="text-[#ccc]" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span className="text-xs">
                Switch to {dark ? "light" : "dark"} theme
              </span>
            </TooltipContent>
          </Tooltip>
          {/* Add more icons here for settings, etc as in screenshot if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
