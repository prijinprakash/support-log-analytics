import SearchBar from "./SearchBar";
import TimezoneSelector from "./TimezoneSelector";
import { HelpCircle, Moon, Sun } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { FileUp, ChartLine, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dark, setDark] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage first, then fall back to system preference
    const savedTheme = localStorage.getItem('theme');
    let isDark = true;
    
    if (savedTheme) {
      isDark = savedTheme === 'dark';
    } else {
      // Check system preference if no saved theme
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Apply the theme
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    setDark(isDark);
  }, []);

  const handleThemeToggle = () => {
    const newDark = !dark;
    
    // Toggle the class
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save to localStorage
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    
    setDark(newDark);
  };

  return (
    <header className="w-full border-zinc-800">
      <div
        className="flex flex-row items-center justify-between px-4 gap-2"
        style={{ minHeight: 44, height: 44 }}
      >
        {/* Left: Logo and title */}
        <div className="flex justify-between items-center gap-10 h-full">
          <a href="/" className="flex items-center" aria-label="Home">
            <img
              src="logo.svg"
              alt="Logo"
              className="h-8 w-8 rounded"
              draggable={false}
            />
          </a>
          <SearchBar />
        </div>
        
        {/* Center: SearchBar */}
        {/* <div className="flex flex-1 justify-center items-center h-full max-w-xs px-2">
          <SearchBar />
        </div> */}
        {/* Right: Timezone selector and icon buttons */}
        <div className="flex items-center justify-end min-w-[320px] gap-2 h-full">
          <TimezoneSelector />
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="upload-file"
                className="navicon"
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
                onClick={() => navigate('/statistics')}
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
                onClick={() => navigate('/settings')}
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
