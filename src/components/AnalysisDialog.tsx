
import { useState, useEffect } from "react";
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
  const [activeTab, setActiveTab] = useState("all");
  const [selectedAnalyses, setSelectedAnalyses] = useState<string[]>([]);

  // Get all analyses
  const getAllAnalyses = () => {
    return ANALYSIS_OPTIONS.flatMap(category => category.analyses);
  };

  // Initialize state on open
  useEffect(() => {
    if (open) {
      setSearchTerm("");
      setActiveTab("all");
      setSelectedAnalyses([]);
    }
  }, [open]);

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
  };

  const removeSelectedAnalysis = (analysisKey: string) => {
    setSelectedAnalyses(prev => prev.filter(key => key !== analysisKey));
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const getAnalysisName = (key: string) => {
    const allAnalyses = getAllAnalyses();
    return allAnalyses.find(analysis => analysis.key === key)?.name || key;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Select Analyses</DialogTitle>
        </DialogHeader>
        
        {/* Search Input with Selected Chips */}
        <div className="space-y-2">
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
          
          {/* Selected Analysis Chips */}
          {selectedAnalyses.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {selectedAnalyses.map(analysisKey => (
                <Badge
                  key={analysisKey}
                  variant="secondary"
                  className="flex items-center gap-1 text-xs"
                >
                  {getAnalysisName(analysisKey)}
                  <button
                    onClick={() => removeSelectedAnalysis(analysisKey)}
                    className="hover:bg-muted-foreground/20 rounded-full p-0.5"
                  >
                    <X size={12} />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Tabs for Categories */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            {ANALYSIS_OPTIONS.map(category => (
              <TabsTrigger key={category.key} value={category.key}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Contents */}
          <div className="flex-1 min-h-0 mt-4">
            <TabsContent value="all" className="h-full overflow-auto mt-0">
              <div className="space-y-1">
                {getFilteredAnalyses("all").map(analysis => (
                  <div
                    key={analysis.key}
                    onClick={() => handleAnalysisClick(analysis.key)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedAnalyses.includes(analysis.key)
                        ? 'bg-primary/10 border-primary border'
                        : 'hover:bg-muted border border-transparent'
                    }`}
                  >
                    <div className="font-medium text-sm">{analysis.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {analysis.description}
                    </div>
                  </div>
                ))}
                {getFilteredAnalyses("all").length === 0 && (
                  <div className="text-center text-muted-foreground py-8">
                    No analyses found matching your search.
                  </div>
                )}
              </div>
            </TabsContent>

            {ANALYSIS_OPTIONS.map(category => (
              <TabsContent
                key={category.key}
                value={category.key}
                className="h-full overflow-auto mt-0"
              >
                <div className="space-y-1">
                  {getFilteredAnalyses(category.key).map(analysis => (
                    <div
                      key={analysis.key}
                      onClick={() => handleAnalysisClick(analysis.key)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedAnalyses.includes(analysis.key)
                          ? 'bg-primary/10 border-primary border'
                          : 'hover:bg-muted border border-transparent'
                      }`}
                    >
                      <div className="font-medium text-sm">{analysis.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {analysis.description}
                      </div>
                    </div>
                  ))}
                  {getFilteredAnalyses(category.key).length === 0 && (
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
