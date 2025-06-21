
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const FILTER_OPTIONS = [
  { id: "documents", label: "Documents", checked: true },
  { id: "images", label: "Images", checked: false },
  { id: "videos", label: "Videos", checked: false },
  { id: "audio", label: "Audio", checked: false },
  { id: "recent", label: "Recent Items", checked: true },
  { id: "favorites", label: "Favorites", checked: false },
];

export default function FilterDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [filters, setFilters] = useState(FILTER_OPTIONS);

  const handleFilterChange = (id: string, checked: boolean) => {
    setFilters(prev => 
      prev.map(filter => 
        filter.id === id ? { ...filter, checked } : filter
      )
    );
  };

  const handleApplyFilters = () => {
    console.log('Applied filters:', filters.filter(f => f.checked));
    onOpenChange(false);
  };

  const handleClearAll = () => {
    setFilters(prev => prev.map(filter => ({ ...filter, checked: false })));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-xl max-w-[380px] bg-background text-foreground border-border border">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-foreground">
            Search Filters
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-3">
            {filters.map((filter) => (
              <div key={filter.id} className="flex items-center space-x-3">
                <Checkbox
                  id={filter.id}
                  checked={filter.checked}
                  onCheckedChange={(checked) => 
                    handleFilterChange(filter.id, checked as boolean)
                  }
                  className="border-border bg-background data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor={filter.id}
                  className="text-sm text-foreground cursor-pointer flex-1"
                >
                  {filter.label}
                </label>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2 pt-4 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearAll}
              className="flex-1 bg-transparent border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              Clear All
            </Button>
            <Button
              size="sm"
              onClick={handleApplyFilters}
              className="flex-1 bg-primary hover:bg-brand/90 text-white dark:text-white"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
