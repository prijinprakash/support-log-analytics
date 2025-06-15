
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { X } from "lucide-react";

// Analysis options structure
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

interface AnalysisDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AnalysisDialog = ({ open, onOpenChange }: AnalysisDialogProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("potential-bugs");
  const [analysisChecked, setAnalysisChecked] = useState<Record<string, boolean>>({});

  // Initialize state on open
  useEffect(() => {
    if (open) {
      setSearchTerm("");
      setActiveTab("potential-bugs");
      const defaultAnalyses = Object.fromEntries(
        ANALYSIS_OPTIONS.flatMap(opt => opt.analyses.map(a => [a.key, false]))
      );
      setAnalysisChecked(defaultAnalyses);
    }
  }, [open]);

  // Filter analyses based on search term
  const getFilteredAnalyses = (categoryKey: string) => {
    const category = ANALYSIS_OPTIONS.find(cat => cat.key === categoryKey);
    if (!category) return [];
    
    if (!searchTerm) return category.analyses;
    
    return category.analyses.filter(analysis =>
      analysis.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      analysis.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleAnalysisChange = (analysisKey: string, checked: boolean) => {
    setAnalysisChecked(prev => ({ ...prev, [analysisKey]: checked }));
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Select Analyses</DialogTitle>
        </DialogHeader>
        
        {/* Search Input */}
        <div className="relative">
          <Input
            placeholder="Search analyses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-8"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-sm"
            >
              <X size={16} className="text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Tabs for Categories */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-2">
            {ANALYSIS_OPTIONS.map(category => (
              <TabsTrigger key={category.key} value={category.key}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Contents */}
          <div className="flex-1 min-h-0 mt-4">
            {ANALYSIS_OPTIONS.map(category => (
              <TabsContent
                key={category.key}
                value={category.key}
                className="h-full overflow-auto space-y-3 mt-0"
              >
                {getFilteredAnalyses(category.key).map(analysis => (
                  <div key={analysis.key} className="flex items-start gap-3 p-3 border rounded-lg">
                    <Checkbox
                      id={`analysis-${analysis.key}`}
                      checked={!!analysisChecked[analysis.key]}
                      onCheckedChange={checked =>
                        handleAnalysisChange(analysis.key, !!checked)
                      }
                      className="mt-0.5"
                    />
                    <div className="flex-1 min-w-0">
                      <label
                        htmlFor={`analysis-${analysis.key}`}
                        className="text-sm font-medium cursor-pointer block"
                      >
                        {analysis.name}
                      </label>
                      <p className="text-xs text-muted-foreground mt-1">
                        {analysis.description}
                      </p>
                    </div>
                  </div>
                ))}
                {getFilteredAnalyses(category.key).length === 0 && (
                  <div className="text-center text-muted-foreground py-8">
                    No analyses found matching your search.
                  </div>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Button Group */}
        <div className="flex gap-2 pt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            View Analyses
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnalysisDialog;
