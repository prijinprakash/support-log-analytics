
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
      <DialogContent className="rounded-xl max-w-[380px] bg-[#161617] text-white border-[#28282a]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-white">
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
                  className="border-[#444] bg-[#232324] data-[state=checked]:bg-[#03bd4d] data-[state=checked]:border-[#03bd4d]"
                />
                <label
                  htmlFor={filter.id}
                  className="text-sm text-white cursor-pointer flex-1"
                >
                  {filter.label}
                </label>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2 pt-4 border-t border-[#28282a]">
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearAll}
              className="flex-1 bg-transparent border-[#444] text-[#bbb] hover:bg-[#232324] hover:text-white"
            >
              Clear All
            </Button>
            <Button
              size="sm"
              onClick={handleApplyFilters}
              className="flex-1 bg-[#03bd4d] hover:bg-[#02a043] text-white"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
