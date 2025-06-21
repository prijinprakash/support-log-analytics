
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Search, X, Trash } from "lucide-react";

const STORAGE_KEY = "searchDialog_recentSearches";
const MAX_RECENT_SEARCHES = 5;

export default function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [mode, setMode] = useState("normal");
  const [searchValue, setSearchValue] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setRecentSearches(parsed.slice(0, MAX_RECENT_SEARCHES));
        }
      } catch (error) {
        console.error("Failed to parse recent searches from localStorage:", error);
      }
    }
  }, []);

  // Save recent searches to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recentSearches));
  }, [recentSearches]);

  const addToRecentSearches = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item !== searchTerm);
      const updated = [searchTerm, ...filtered].slice(0, MAX_RECENT_SEARCHES);
      return updated;
    });
  };

  const removeFromRecentSearches = (searchTerm: string) => {
    setRecentSearches(prev => prev.filter(item => item !== searchTerm));
  };

  const clearSearchInput = () => {
    setSearchValue("");
  };

  const handleRecentSearchClick = (searchTerm: string) => {
    setSearchValue(searchTerm);
    addToRecentSearches(searchTerm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      addToRecentSearches(searchValue.trim());
      // Handle search submission here
      console.log("Searching for:", searchValue.trim());
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px] p-0 border border-border bg-background shadow-xl">
        <div className="p-6">
          {/* Search Mode Selection */}
          <div className="mb-6">
            <RadioGroup
              value={mode}
              onValueChange={setMode}
              className="flex flex-row gap-8"
            >
              <label className="flex items-center gap-3 cursor-pointer">
                <RadioGroupItem
                  value="normal"
                />
                <span className={`text-sm font-medium transition-colors ${
                  mode === "normal"
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}>
                  Normal Search
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <RadioGroupItem
                  value="advanced"
                />
                <span className={`text-sm font-medium transition-colors ${
                  mode === "advanced"
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}>
                  Advanced Search
                </span>
              </label>
            </RadioGroup>
          </div>

          {/* Search Input */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              <Input
                autoFocus
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Enter search term..."
                className="pl-11 pr-11 h-12 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 transition-colors"
                style={{ boxShadow: "none" }} // Ensure no forced box-shadow in input
              />
              {searchValue && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={clearSearchInput}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:bg-accent hover:text-foreground flex items-center justify-center"
                  tabIndex={-1}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Recent Searches
              </h3>
              <div className="space-y-2">
                {recentSearches.map((searchTerm, index) => (
                  <div
                    key={`${searchTerm}-${index}`}
                    className="group flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors hover:bg-accent/50 hover:text-foreground bg-transparent text-muted-foreground"
                  >
                    <span 
                      className="text-sm flex-1 truncate"
                      onClick={() => handleRecentSearchClick(searchTerm)}
                    >
                      {searchTerm}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromRecentSearches(searchTerm);
                      }}
                      className="h-6 w-6 opacity-60 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity"
                      tabIndex={-1}
                    >
                      <Trash className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
