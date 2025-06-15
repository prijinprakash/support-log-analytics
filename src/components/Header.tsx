
import SearchBar from "./SearchBar";
import TimezoneSelector from "./TimezoneSelector";
import { HelpCircle, Moon, Sun } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { FileUp, ChartLine, Settings } from "lucide-react";

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
    <header className="w-full bg-headerbackground border-zinc-800">
      <div
        className="flex flex-row items-center justify-between px-4 gap-2"
        style={{ minHeight: 44, height: 44 }}
      >
        {/* Left: Logo and title */}
        <a href="/" className="flex items-center" aria-label="Home">
          <img
            src="logo.svg"
            alt="Logo"
            className="h-8 w-8 rounded"
            draggable={false}
          />
        </a>
        {/* Center: SearchBar */}
        <div className="flex flex-1 justify-center items-center h-full max-w-xs px-2">
          <SearchBar />
        </div>
        {/* Right: Timezone selector and icon buttons */}
        <div className="flex items-center justify-end min-w-[320px] gap-2 h-full">
          <TimezoneSelector />
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="upload-file"
                className="navicon"
                // onClick={handleThemeToggle}
                // data-testid="dark-toggle"
                type="button"
              >
                <FileUp size={18} className="text-zinc-400"/>
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-secondary text-xs">upload file</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="user-statistics"
                className="navicon"
                // onClick={handleThemeToggle}
                // data-testid="dark-toggle"
                type="button"
              >
                <ChartLine size={18} className="text-zinc-400"/>
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-secondary text-xs">user statistics</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="help"
                className="navicon"
                // onClick={handleThemeToggle}
                // data-testid="dark-toggle"
                type="button"
              >
                <HelpCircle size={18} className="text-zinc-400"/>
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-secondary text-xs">help</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="settings"
                className="navicon"
                // onClick={handleThemeToggle}
                // data-testid="dark-toggle"
                type="button"
              >
                <Settings size={18} className="text-zinc-400"/>
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-secondary text-xs">settings</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Toggle dark mode"
                className="navicon"
                onClick={handleThemeToggle}
                data-testid="dark-toggle"
                type="button"
              >
                {dark ? (
                  <Moon size={18} className="text-zinc-400" />
                ) : (
                  <Sun size={18} className="text-zinc-400" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-secondary text-xs">
                Switch to {dark ? "light" : "dark"} theme
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};

export default Header;
