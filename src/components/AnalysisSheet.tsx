
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

// Example analyses list structure by categories
const ANALYSIS_OPTIONS = [
  {
    category: "Potential Bugs",
    key: "potential-bugs",
    analyses: [
      {
        key: "cpu-utilization",
        name: "CPU Utilization",
        description: "Inspect CPU consumption spikes that may indicate problems."
      },
      {
        key: "ptop-memory",
        name: "Ptop Memory",
        description: "Analyze memory utilization recorded by ptop logs."
      }
    ]
  },
  {
    category: "Performance",
    key: "performance",
    analyses: [
      {
        key: "disk-io",
        name: "Disk IO Patterns",
        description: "View disk I/O usage and bottlenecks."
      },
      {
        key: "network-latency",
        name: "Network Latency",
        description: "Analyze network request delays."
      }
    ]
  }
];

interface AnalysisSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AnalysisSheet = ({ open, onOpenChange }: AnalysisSheetProps) => {
  // categoryKey: boolean
  const [categoryChecked, setCategoryChecked] = useState<Record<string, boolean>>({});
  // analysisKey: boolean
  const [analysisChecked, setAnalysisChecked] = useState<Record<string, boolean>>({});

  // Initialize state/reset on open/close
  useEffect(() => {
    if (open) {
      // Set all unchecked by default
      const defaultCategory = Object.fromEntries(
        ANALYSIS_OPTIONS.map(opt => [opt.key, false])
      );
      const defaultAnalyses = Object.fromEntries(
        ANALYSIS_OPTIONS.flatMap(opt => opt.analyses.map(a => [a.key, false]))
      );
      setCategoryChecked(defaultCategory);
      setAnalysisChecked(defaultAnalyses);
    }
  }, [open]);

  // Check/uncheck whole category toggles children
  const handleCategoryChange = (key: string, checked: boolean) => {
    setCategoryChecked(v => ({ ...v, [key]: checked }));
    // Get all analyses in the category
    const analysesInCat = ANALYSIS_OPTIONS.find(cat => cat.key === key)?.analyses || [];
    setAnalysisChecked(prev => ({
      ...prev,
      ...Object.fromEntries(analysesInCat.map(a => [a.key, checked]))
    }));
  };

  // Check/uncheck individual item may affect category checkbox state
  const handleAnalysisChange = (catKey: string, analysisKey: string, checked: boolean) => {
    setAnalysisChecked(v => ({ ...v, [analysisKey]: checked }));
    // If all in category checked, check header. Else, uncheck.
    const cat = ANALYSIS_OPTIONS.find(cat => cat.key === catKey)!;
    const allChecked = cat.analyses.every(a => analysisChecked[a.key] || a.key === analysisKey && checked);
    setCategoryChecked(v => ({ ...v, [catKey]: allChecked }));
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="max-w-md w-full">
        <SheetHeader>
          <SheetTitle>select analyses</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-4 h-[60vh] overflow-auto pr-2">
          {ANALYSIS_OPTIONS.map(category => (
            <div key={category.key} className="border border-muted rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <Checkbox
                  id={`cat-${category.key}`}
                  checked={!!categoryChecked[category.key]}
                  onCheckedChange={checked =>
                    handleCategoryChange(category.key, !!checked)
                  }
                />
                <label htmlFor={`cat-${category.key}`} className="text-base font-semibold">
                  {category.category}
                </label>
              </div>
              <div className="pl-6 space-y-3">
                {category.analyses.map(analysis => (
                  <div key={analysis.key} className="space-y-1">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id={`analysis-${analysis.key}`}
                        checked={!!analysisChecked[analysis.key]}
                        onCheckedChange={checked =>
                          handleAnalysisChange(category.key, analysis.key, !!checked)
                        }
                      />
                      <label htmlFor={`analysis-${analysis.key}`} className="text-sm font-medium">
                        {analysis.name}
                      </label>
                    </div>
                    <div className="pl-8 text-xs text-muted-foreground">
                      {analysis.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Footer Buttons */}
        <SheetFooter className="px-0 pt-3 flex-row justify-end gap-2">
          <SheetClose asChild>
            <Button type="button" variant="outline" size="sm">
              Cancel
            </Button>
          </SheetClose>
          <Button type="button" size="sm" onClick={() => onOpenChange(false)}>
            View Analyses
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AnalysisSheet;
