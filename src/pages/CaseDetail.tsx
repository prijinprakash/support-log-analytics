import { useParams } from "react-router-dom";
import { FileText, Clock, User, AlertCircle, Server, Globe, HardDrive } from "lucide-react";
import { useState, useEffect } from "react";
import PageLoader from "@/components/PageLoader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AnalysisSheet from "@/components/AnalysisSheet";
import { useCallback } from "react";

const CaseDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [sheetOpen, setSheetOpen] = useState(false);

  // Keyboard shortcut: Ctrl+Shift+A (or Cmd+Shift+A for Mac)
  useEffect(() => {
    const toggleSheet = (e: KeyboardEvent) => {
      // ctrlKey or metaKey (cmd), shiftKey, and letter A (65 or 'a')
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setSheetOpen(v => !v);
      }
    };
    window.addEventListener("keydown", toggleSheet);
    return () => window.removeEventListener("keydown", toggleSheet);
  }, []);

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <PageLoader />
        </div>
      </main>
    );
  }

  // Mock case data - in real app this would come from API
  const caseData = {
    caseNumber: "00123456",
    hostName: "server-prod-01.example.com",
    fileName: "system_logs_2024.tar.gz",
    clusterStatus: "Active",
    totalProcessingTime: "45 minutes",
    timezone: "UTC-5 (EST)",
    debugLogInterval: "2024-07-18 02:22:20 - 2024-07-18 02:22:20",
    ptopLogInterval: "2024-07-18 02:22:20 - 2024-07-18 02:22:20",
    sysLogInterval: "2024-07-18 02:22:20 - 2024-07-18 02:22:20",
  };

  return (
    <div className="h-full">
      {/* Main Content - Two Column Layout */}
      <div className="flex gap-0 h-[calc(100vh-130px)]">
        {/* Left Section - Basic Details */}
        <div className="w-80 flex-shrink-0 p-4 overflow-auto break-words">
          {/* <div className="bg-card rounded-lg border p-6 h-full"> */}
            <h2 className="text-lg font-semibold mb-4 text-foreground">Case Details</h2>
            
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <FileText size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Case Number</div>
                  <div className="text-sm font-mono break-all">{caseData.caseNumber}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Server size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Host Name</div>
                  <div className="text-sm break-all">{caseData.hostName}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HardDrive size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">File Name</div>
                  <div className="text-sm break-all">{caseData.fileName}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Cluster Status</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">{caseData.clusterStatus}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Total Processing Time</div>
                  <div className="text-sm">{caseData.totalProcessingTime}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Timezone</div>
                  <div className="text-sm">{caseData.timezone}</div>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-semibold my-4 text-foreground">Log intervals</h2>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Debug Log Interval</div>
                  <div className="text-sm break-all tracking-tight">{caseData.debugLogInterval}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Syslog Interval</div>
                  <div className="text-sm break-all tracking-tight">{caseData.sysLogInterval}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Ptop Log interval</div>
                  <div className="text-sm break-all tracking-tight">{caseData.ptopLogInterval}</div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>

        {/* Right Section - Tabs and Content */}
        <div className="flex-1 flex flex-col min-w-0 py-4 pr-4">
          {/* Top Flexbox - Tabs and Buttons */}
          <div className="flex items-center justify-between mb-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2 ml-4">
              <Button variant="outline" size="sm">
                Export
              </Button>
              <Button variant="outline" size="sm">
                Share
              </Button>
              <Button size="sm" onClick={() => setSheetOpen(true)}>
                Actions
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-card rounded-lg border p-6 min-h-0 overflow-auto">
            <Tabs value={activeTab} className="h-full">
              <TabsContent value="overview" className="mt-0 h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Case Overview</h3>
                    <p className="text-muted-foreground">
                      This is a detailed overview of case {caseData.caseNumber}. The case involves analysis of system logs 
                      from {caseData.hostName}. Current processing status shows the cluster is active and analysis 
                      is progressing normally.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary">24</div>
                        <div className="text-sm text-muted-foreground">Issues Found</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary">12GB</div>
                        <div className="text-sm text-muted-foreground">Data Processed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="timeline" className="mt-0 h-full">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Case Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded border">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Case created</div>
                        <div className="text-sm text-muted-foreground">2 days ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded border">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Initial processing started</div>
                        <div className="text-sm text-muted-foreground">1 day ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded border">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Analysis in progress</div>
                        <div className="text-sm text-muted-foreground">Currently active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-0 h-full">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Related Documents</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded border hover:bg-muted/50 cursor-pointer">
                      <FileText size={16} />
                      <div className="flex-1">
                        <div className="font-medium">{caseData.fileName}</div>
                        <div className="text-sm text-muted-foreground">12.4 GB • Uploaded 2 days ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded border hover:bg-muted/50 cursor-pointer">
                      <FileText size={16} />
                      <div className="flex-1">
                        <div className="font-medium">Analysis Report.pdf</div>
                        <div className="text-sm text-muted-foreground">2.1 MB • Generated 1 day ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded border hover:bg-muted/50 cursor-pointer">
                      <FileText size={16} />
                      <div className="flex-1">
                        <div className="font-medium">Configuration Export.json</div>
                        <div className="text-sm text-muted-foreground">145 KB • Exported 6 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analysis" className="mt-0 h-full">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Analysis Results</h3>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-medium">Critical Issues: 3</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Security vulnerabilities detected in system configuration
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-medium">Warnings: 15</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Performance optimizations recommended
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">Information: 6</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        System status and configuration details
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      {/* Sheet for selecting analyses */}
      <AnalysisSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </div>
  );
};

export default CaseDetail;
