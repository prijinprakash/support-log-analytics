import SearchBar from "./SearchBar";
import TimezoneSelector from "./TimezoneSelector";
import UploadDialog from "./UploadDialog";
import HelpDialog from "./HelpDialog";
import { HelpCircle, Moon, Sun } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { FileUp, ChartLine, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dark, setDark] = useState(true);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [helpDialogOpen, setHelpDialogOpen] = useState(false);
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
    <>
      <header className="w-full border-zinc-800">
        <div
          className="flex flex-row items-center justify-between px-4 gap-2"
          style={{ minHeight: 44, height: 44 }}
        >
          {/* Left: Logo and title */}
          <div className="flex justify-between items-center gap-10 h-full">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-8 rounded cursor-pointer"
              draggable={false}
              onClick={() => navigate('/')}
            />
            <SearchBar />
          </div>
          
          {/* Right: Timezone selector and icon buttons */}
          <div className="flex items-center justify-end min-w-[320px] gap-2 h-full">
            <TimezoneSelector />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="h-9 w-9 cursor-pointer bg-lightbackground text-white border border-headerborder hover:bg-headerborder hover:text-white"
                  aria-label="upload-file"
                  variant="outline"
                  onClick={() => setUploadDialogOpen(true)}
                >
                  <FileUp/>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-secondary text-xs">upload file</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="h-9 w-9 cursor-pointer bg-lightbackground text-white border border-headerborder hover:bg-headerborder hover:text-white"
                  aria-label="user-statistics"
                  onClick={() => navigate('/statistics')}
                  variant="outline"
                >
                  <ChartLine/>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-secondary text-xs">user statistics</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="h-9 w-9 cursor-pointer bg-lightbackground text-white border border-headerborder hover:bg-headerborder hover:text-white"
                  aria-label="help"
                  variant="outline"
                  onClick={() => setHelpDialogOpen(true)}
                >
                  <HelpCircle/>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-secondary text-xs">help</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="h-9 w-9 cursor-pointer bg-lightbackground text-white border border-headerborder hover:bg-headerborder hover:text-white"
                  aria-label="settings"
                  onClick={() => navigate('/settings')}
                  variant="outline"
                >
                  <Settings/>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-secondary text-xs">settings</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="h-9 w-9 cursor-pointer bg-lightbackground text-white border border-headerborder hover:bg-headerborder hover:text-white"
                  aria-label="Toggle dark mode"
                  onClick={handleThemeToggle}
                  data-testid="dark-toggle"
                  variant="outline"
                >
                  {dark ? (
                    <Moon/>
                  ) : (
                    <Sun/>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-secondary text-xs">
                  Switch to {dark ? "light" : "dark"} theme
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </header>
      <UploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} />
      <HelpDialog open={helpDialogOpen} onOpenChange={setHelpDialogOpen} />
    </>
  );
};

export default Header;
