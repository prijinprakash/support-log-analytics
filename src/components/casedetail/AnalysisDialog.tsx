import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
        description: "Inspect CPU consumption spikes that may indicate problems.",
        alert: true, // marked as alert
      },
      {
        key: "ptop-memory",
        name: "Ptop Memory",
        description: "Analyze memory utilization recorded by ptop logs.",
        alert: false,
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
        description: "View disk I/O usage and bottlenecks.",
        alert: true, // marked as alert
      },
      {
        key: "network-latency",
        name: "Network Latency",
        description: "",
        alert: false,
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
  const [activeTab, setActiveTab] = useState("all");
  const [selectedAnalyses, setSelectedAnalyses] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Get all analyses
  const getAllAnalyses = () => {
    return ANALYSIS_OPTIONS.flatMap(category => category.analyses);
  };

  // Initialize state on open/close
  useEffect(() => {
    if (open) {
      setSearchTerm("");
      setActiveTab("all");
      // Focus input on open
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 150);

      // Random select one alert analysis if not already in selectedAnalyses
      const allAnalyses = getAllAnalyses();
      const alertAnalyses = allAnalyses.filter(a => a.alert);
      if (alertAnalyses.length && selectedAnalyses.length === 0) {
        const random = alertAnalyses[Math.floor(Math.random() * alertAnalyses.length)];
        setSelectedAnalyses([random.key]);
      }
    } else {
      setSearchTerm("");
      // Not clearing selection here (only search)
    }
  }, [open]);

  // Focus input after analysis selection
  useEffect(() => {
    if (open && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [selectedAnalyses, open]);

  // Filter analyses based on search term
  const getFilteredAnalyses = (categoryKey: string) => {
    let analyses;

    if (categoryKey === "all") {
      analyses = getAllAnalyses();
    } else {
      const category = ANALYSIS_OPTIONS.find(cat => cat.key === categoryKey);
      if (!category) return [];
      analyses = category.analyses;
    }

    if (!searchTerm) return analyses;

    return analyses.filter(analysis =>
      analysis.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      analysis.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleAnalysisClick = (analysisKey: string) => {
    setSelectedAnalyses(prev => {
      if (prev.includes(analysisKey)) {
        return prev.filter(key => key !== analysisKey);
      } else {
        return [...prev, analysisKey];
      }
    });
    setSearchTerm(""); // clear input after selection
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const removeSelectedAnalysis = (analysisKey: string) => {
    setSelectedAnalyses(prev => prev.filter(key => key !== analysisKey));
  };

  const clearAllSelectedAnalyses = () => {
    setSelectedAnalyses([]);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 50);
  };

  const getAnalysisName = (key: string) => {
    const allAnalyses = getAllAnalyses();
    return allAnalyses.find(analysis => analysis.key === key)?.name || key;
  };

  const getAnalysisDescription = (key: string) => {
    const allAnalyses = getAllAnalyses();
    return allAnalyses.find(analysis => analysis.key === key)?.description || "";
  };

  const getAnalysisObject = (key: string) => {
    return getAllAnalyses().find(analysis => analysis.key === key);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full max-h-[95vh] flex flex-col p-10">
        <DialogHeader>
          <DialogTitle>Select Analyses</DialogTitle>
        </DialogHeader>

        {/* Search Input with Selected Chips */}
        <div className="space-y-2 pb-2">
          <div className="relative flex flex-col gap-1">
            <Input
              ref={searchInputRef}
              placeholder="Search analyses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-8 text-base"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-sm"
                tabIndex={-1}
                aria-label="Clear search"
              >
                <X size={16} className="text-muted-foreground" />
              </button>
            )}
            {(selectedAnalyses.length > 0) && (
              <div className="flex flex-wrap gap-1 mt-2">
                {selectedAnalyses.map(analysisKey => {
                  const analysisObj = getAnalysisObject(analysisKey);
                  const isAlert = analysisObj?.alert;
                  return (
                    <Badge
                      key={analysisKey}
                      variant="secondary"
                      className={`flex items-center gap-1 text-xs shadow
                        ${isAlert
                          ? "bg-red-100 border-red-500 text-red-800"
                          : "bg-brand/10 border-primary text-primary border"
                        }`}
                      style={
                        isAlert
                          ? {
                            background: "var(--chip-bg-danger, #fee2e2)",
                            border: "1px solid var(--chip-border-danger, #ef4444)",
                            color: "var(--chip-fg-danger, #991b1b)",
                          }
                          : undefined
                      }
                    >
                      {getAnalysisName(analysisKey)}
                      <button
                        onClick={() => removeSelectedAnalysis(analysisKey)}
                        className="hover:bg-brand/10 ml-1 rounded-full p-0.5 focus:outline-none"
                        tabIndex={-1}
                        aria-label="Remove selected analysis"
                      >
                        <X size={12} />
                      </button>
                    </Badge>
                  );
                })}
                <button
                  type="button"
                  onClick={clearAllSelectedAnalyses}
                  className="ml-2 px-1.5 py-0.5 bg-muted hover:bg-muted/80 text-xs rounded border text-muted-foreground border-muted-foreground/20 font-medium transition"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tabs for Categories */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-[repeat(auto-fit,minmax(120px,1fr))] mb-1">
            <TabsTrigger value="all">All</TabsTrigger>
            {ANALYSIS_OPTIONS.map(category => (
              <TabsTrigger key={category.key} value={category.key}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 min-h-0 mt-2">
            {[{ key: "all", analyses: getAllAnalyses() }, ...ANALYSIS_OPTIONS].map(tab => (
              <TabsContent
                key={tab.key}
                value={tab.key}
                className="h-full overflow-auto mt-0"
              >
                <div className="border rounded-lg p-2">
                  {getFilteredAnalyses(tab.key).length > 0 &&
                    getFilteredAnalyses(tab.key).map(analysis => {
                      const isSelected = selectedAnalyses.includes(analysis.key);
                      const isAlert = analysis.alert;
                      return (
                        <div
                          key={analysis.key}
                          onClick={() => handleAnalysisClick(analysis.key)}
                          className={`
                            flex items-center px-2 py-1.5 cursor-pointer transition-colors last:mb-0 justify-between
                            ${isSelected && 'bg-brand/10'}
                          `}
                          tabIndex={0}
                          role="button"
                          aria-pressed={isSelected}
                        >
                          <div className="flex justify-start items-center">
                            <span className="font-normal text-foreground text-sm">
                              {analysis.name}
                            </span>
                            {isAlert ? (
                              <span className="ml-3 text-xs font-semibold text-red-700 bg-red-200 rounded-lg px-2 py-0.25">! Alert</span>
                            ):<span></span>}
                          </div>
                          <span className="text-xs text-muted-foreground ml-1">
                            {analysis.description}
                          </span>
                        </div>
                      );
                    })}
                  {getFilteredAnalyses(tab.key).length === 0 && (
                    <div className="text-center text-muted-foreground py-8">
                      No analyses found matching your search.
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Button Group */}
        <div className="flex gap-2 pt-4 mt-auto">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1 h-9"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            className="flex-1 h-9 bg-brand hover:bg-brand/80"
          >
            View Analyses
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnalysisDialog;
