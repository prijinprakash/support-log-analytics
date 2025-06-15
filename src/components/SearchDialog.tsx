
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const RECENT_SEARCHES = [
  "React Tailwind",
  "Shadcn UI",
  "Algolia Search Clone",
];

export default function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [mode, setMode] = useState("normal");
  const [searchValue, setSearchValue] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px] p-0 border border-zinc-800 bg-background">
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
                  className="border-zinc-600 data-[state=checked]:bg-brand data-[state=checked]:border-brand"
                />
                <span className={`text-sm font-medium ${
                  mode === "normal" ? "text-foreground" : "text-muted-foreground"
                }`}>
                  Normal Search
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <RadioGroupItem
                  value="advanced"
                  className="border-zinc-600 data-[state=checked]:bg-brand data-[state=checked]:border-brand"
                />
                <span className={`text-sm font-medium ${
                  mode === "advanced" ? "text-foreground" : "text-muted-foreground"
                }`}>
                  Advanced Search
                </span>
              </label>
            </RadioGroup>
          </div>

          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              autoFocus
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Enter search term..."
              className="pl-10 h-12 bg-secondary border-zinc-700 text-foreground placeholder:text-muted-foreground focus:border-brand focus:ring-1 focus:ring-brand"
            />
          </div>

          {/* Recent Searches */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              Recent Searches
            </h3>
            <div className="space-y-1">
              {RECENT_SEARCHES.map((searchTerm, index) => (
                <div
                  key={searchTerm}
                  className={`px-3 py-2.5 rounded-md cursor-pointer transition-colors ${
                    searchValue.trim() === "" && index === 0
                      ? "bg-zinc-800 text-foreground"
                      : "text-muted-foreground hover:bg-zinc-800 hover:text-foreground"
                  }`}
                  onClick={() => setSearchValue(searchTerm)}
                >
                  <span className="text-sm">{searchTerm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
