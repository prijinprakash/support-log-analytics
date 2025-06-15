
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import TimezoneSelector from "./TimezoneSelector";
import { Moon, Sun } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
    <header className="w-full bg-[#09090b] border-b border-[#27272a]">
      <div
        className="flex flex-row items-center justify-between px-4 gap-2"
        style={{ minHeight: 44, height: 44 }}
      >
        {/* Left: Logo and title */}
        <div className="flex items-center min-w-[150px] h-full">
          <Logo />
          <span className="ml-2 text-base font-semibold hidden sm:block leading-none text-white">
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
                className="rounded p-2 bg-transparent hover:bg-[#18181b] transition-colors h-9 w-9 flex items-center justify-center"
                onClick={handleThemeToggle}
                data-testid="dark-toggle"
                type="button"
              >
                {dark ? (
                  <Moon size={18} className="text-[#a1a1aa]" />
                ) : (
                  <Sun size={18} className="text-[#a1a1aa]" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span className="text-xs">
                Switch to {dark ? "light" : "dark"} theme
              </span>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};

export default Header;
