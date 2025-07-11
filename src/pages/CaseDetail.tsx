import { useParams } from "react-router-dom";
import { FileText, Clock, AlertCircle, Server, Globe, HardDrive, Bug, Download, Share2, TriangleAlert, SquareTerminal } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
// import PageLoader from "@/components/PageLoader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import AnalysisDialog from "@/components/casedetail/AnalysisDialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CollapsibleAnalysis from "@/components/casedetail/CollapsibleAnalysis";
import VirtualTabularData from "@/components/datavisulization/VirtualTabularData";
import LineChart from "@/components/datavisulization/LineChart";
import BugReportDialog from "@/components/casedetail/BugReportDialog";
import AnalysisSheet from "@/components/casedetail/AnalysisSheet";
import SystemAlertDialog from "@/components/casedetail/AlertDialog";
import GaugeMeter from "@/components/casedetail/GaugeMeter";
import ViewSelector from "@/components/casedetail/ViewSelector";
import DateTimeRangeSelector from "@/components/casedetail/DateTimeRangeSelector";
// import Terminal from "@/components/casedetail/TerminalComponent";
import TerminalComponent from "@/components/casedetail/TerminalComponent";
import ToolTipChart from "@/components/datavisulization/ToolTipChart";

const CaseDetail = () => {
  // const { caseId } = useParams<{ caseId: string }>();
  // const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(true);
  const [activeSheet, setActiveSheet] = useState(null);
  const [fullscreenContent, setFullscreenContent] = useState<{ title: string; content: React.ReactNode } | null>(null);
  const [bugReportOpen, setBugReportOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [dateTimeRange, setDateTimeRange] = useState<{from: string | null; to: string | null}>({
    from: null,
    to: null
  });
  const logs = `192.168.1.10 - - [16/Jun/2025:11:00:05 +0530] "GET /index.html HTTP/1.1" 200 2345 "-" "Mozilla/5.0"
192.168.1.15 - - [16/Jun/2025:11:00:10 +0530] "POST /submit_form HTTP/1.1" 200 123 "-" "curl/7.68.0"
192.168.1.20 - - [16/Jun/2025:11:00:15 +0530] "GET /images/logo.png HTTP/1.1" 200 15789 "-" "Mozilla/5.0
2025-06-16 10:30:45 INFO: User 'john.doe' logged in.
2025-06-16 10:31:12 WARNING: Low disk space on /dev/sda1.
2025-06-16 10:32:00 ERROR: Database connection failed.
2025-06-16 10:33:30 INFO: User 'jane.doe' logged out.
2025-06-16 10:30:45 INFO: User 'john.doe' logged in.
2025-06-16 10:31:12 WARNING: Low disk space on /dev/sda1.
2025-06-16 10:32:00 ERROR: Database connection failed.
2025-06-16 10:33:30 INFO: User 'jane.doe' logged out.
192.168.1.15 - - [16/Jun/2025:11:00:10 +0530] "POST /submit_form HTTP/1.1" 200 123 "-" "curl/7.68.0"
192.168.1.20 - - [16/Jun/2025:11:00:15 +0530] "GET /images/logo.png HTTP/1.1" 200 15789 "-" "Mozilla/5.0
2025-06-16 10:30:45 INFO: User 'john.doe' logged in.
2025-06-16 10:31:12 WARNING: Low disk space on /dev/sda1.
2025-06-16 10:32:00 ERROR: Database connection failed.
2025-06-16 10:33:30 INFO: User 'jane.doe' logged out.
2025-06-16 10:30:45 INFO: User 'john.doe' logged in.
2025-06-16 10:31:12 WARNING: Low disk space on /dev/sda1.
2025-06-16 10:32:00 ERROR: Database connection failed.
2025-06-16 10:33:30 INFO: User 'jane.doe' logged out.`

  const metrics = [
    { metric: "Total Processes", value: "347", status: "Normal", lastUpdated: "2 min ago" },
    { metric: "Active Connections", value: "1,234", status: "High", lastUpdated: "1 min ago" },
    { metric: "Memory Free", value: "8.4 GB", status: "Normal", lastUpdated: "30s ago" },
    { metric: "Disk Usage", value: "67%", status: "Warning", lastUpdated: "1 min ago" },
    { metric: "Load Average", value: "2.45", status: "Normal", lastUpdated: "45s ago" },
    { metric: "Uptime", value: "7d 14h 32m", status: "Normal", lastUpdated: "5 min ago" },
    { metric: "Error Rate", value: "0.02%", status: "Normal", lastUpdated: "2 min ago" },
    { metric: "Response Time", value: "145ms", status: "Good", lastUpdated: "1 min ago" },
  ];

  const [gridElements, setGridElements] = useState([
    { 
      id: 'chart', 
      title: 'Interactive Line Chart', 
      el: <LineChart />, 
      description: "this chart represents the cpu usage over time" 
    },
    { 
      id: 'tooltip_chart', 
      title: 'Interactive Tooltip Chart', 
      el: <ToolTipChart />, 
      description: "this chart represents the cpu usage over time" 
    },
    { 
      id: 'logs', 
      title: 'Recent Log Entries', 
      el: <div className="font-mono whitespace-pre-line text-sm focus-visible:ring-0 text-muted-foreground">{logs}</div> 
    },
    { id: 'tabular_data', 
      title: 'Tabular Data', 
      el: <VirtualTabularData headers={["Metric", "Value", "Status", "Last Updated"]} data={metrics}/> ,
      description: `<p>this is some tabular data</p>
      <p><a href='#' class='text-brand hover:text-brand/80 underline'>follow the link<a/>
      </p>`
    }
  ]);

  // Keyboard shortcut: Ctrl+Shift+A (or Cmd+Shift+A for Mac)
  useEffect(() => {
    const toggleDialog = (e: KeyboardEvent) => {
      // ctrlKey or metaKey (cmd), shiftKey, and letter A (65 or 'a')
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setDialogOpen(v => !v);
      }
    };
    window.addEventListener("keydown", toggleDialog);
    return () => window.removeEventListener("keydown", toggleDialog);
  }, []);

  const removeElement = (id: string) => {
    setGridElements(prev => prev.filter(el => el.id !== id));
  };

  const openFullscreen = (title: string, content: React.ReactNode) => {
    setFullscreenContent({ title, content });
  };

  const onInfoClick = (id: String) => {
    setSheetOpen(true);
    setActiveSheet(gridElements.filter(ele => ele.id === id))
  }

  const handleRefresh = () => {
    console.log('Refreshing data for range:', dateTimeRange);
    // Add refresh logic here
  };

  // if (isLoading) {
  //   return (
  //     <main className="container mx-auto px-4 py-8">
  //       <div className="max-w-6xl mx-auto">
  //         <PageLoader />
  //       </div>
  //     </main>
  //   );
  // }

  // Mock case data - in real app this would come from API
  const caseData = {
    case_number: "00123456",
    host_name: "server-prod-01.example.com",
    file_name: "system_logs_2024.tar.gz",
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
        <div className="w-80 flex-shrink-0 p-4 overflow-auto break-words relative">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Case Details</h2>
          
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <FileText size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-muted-foreground mb-1">Case Number</div>
                <div className="text-sm font-mono break-all">{caseData.case_number}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Server size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-muted-foreground mb-1">Host Name</div>
                <div className="text-sm break-all">{caseData.host_name}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <HardDrive size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-muted-foreground mb-1">File Name</div>
                <div className="text-sm break-all">{caseData.file_name}</div>
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
        </div>

        {/* Right Section - Tabs and Content */}
        <div className="flex-1 flex flex-col min-w-0 p-4 border-l">
          {/* Top Flexbox - Tabs and Buttons */}
          <div className="flex items-center justify-between mb-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
                <TabsTrigger value="documents">Debug Summary</TabsTrigger>
                <TabsTrigger value="analysis">Syslog Summary</TabsTrigger>
                <TabsTrigger value="bc">connect</TabsTrigger>
                <TabsTrigger value="bc_metrics">connect metrics</TabsTrigger>
                <TabsTrigger value="terminal"><SquareTerminal size={20}/></TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-3">
              {/* DateTime Range Selector */}
              <DateTimeRangeSelector
                value={dateTimeRange}
                onChange={setDateTimeRange}
                onRefresh={handleRefresh}
              />
              <Tooltip>
                <TooltipTrigger asChild>
                    <Share2 size={20} className="cursor-pointer stroke-muted-foreground hover:stroke-foreground" onClick={() => console.log('share button clicked')}/>
                </TooltipTrigger>
                <TooltipContent className="bg-background">Share Analysis</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                    <Download size={20} className="cursor-pointer stroke-muted-foreground hover:stroke-foreground" onClick={() => console.log('share button clicked')}/>
                </TooltipTrigger>
                <TooltipContent className="bg-background">Export Report</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                    <Bug size={20} className="cursor-pointer stroke-muted-foreground hover:stroke-foreground" onClick={() => setBugReportOpen(true)} />
                </TooltipTrigger>
                <TooltipContent className="bg-background">Report Bug</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                    <TriangleAlert size={20} className="cursor-pointer stroke-red-600 hover:stroke-red-800" onClick={() => setAlertDialogOpen(true)}/>
                </TooltipTrigger>
                <TooltipContent className="bg-background">Alerts</TooltipContent>
              </Tooltip>
              <Button onClick={() => setDialogOpen(true)} className="bg-brand hover:bg-brand/80 h-8">
                View Analysis
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 rounded-lg min-h-0 overflow-auto">
            <Tabs value={activeTab}>
              <TabsContent value="overview" className="m-0">
                {/* Visualizations Grid */}
                <div className="space-y-2">
                  {gridElements.length ? gridElements.map((elem, idx)=> (
                    <CollapsibleAnalysis {...elem} openFullscreen={openFullscreen} removeElement={removeElement} key={idx} onInfoClick={onInfoClick}/>
                  )) : <span className="text-muted-foreground px-2">No Analysis selected</span>}
                </div>
              </TabsContent>
              
              <TabsContent value="stats" className="mt-0 h-full">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">System Statistics</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <GaugeMeter
                      value={78}
                      title="CPU Usage"
                      description="Current system CPU utilization percentage"
                    />
                    <ViewSelector />
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
                        <div className="font-medium">{caseData.file_name}</div>
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

              <TabsContent value="bc" className="mt-0 h-full">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Related Documents</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded border hover:bg-muted/50 cursor-pointer">
                      <FileText size={16} />
                      <div className="flex-1">
                        <div className="font-medium">{caseData.file_name}</div>
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
              
              <TabsContent value="bc_metrics" className="mt-0 h-full">
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
              <TabsContent value="terminal" className="mt-0 h-full">
                <TerminalComponent />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={!!fullscreenContent} onOpenChange={() => setFullscreenContent(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full">
          <div className="flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-4">{fullscreenContent?.title}</h2>
            <div className="flex-1 overflow-auto">
              {fullscreenContent?.content}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog for selecting analyses */}
      <AnalysisDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      
      {/* Bug Report Dialog */}
      <BugReportDialog open={bugReportOpen} onOpenChange={setBugReportOpen} />

      {/* Dialog for selecting analyses */}
      {activeSheet && <AnalysisSheet open={sheetOpen} onOpenChange={setSheetOpen} activeSheet={activeSheet}/>}
      
      {/* System Alert Dialog */}
      <SystemAlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen} />
    </div>
  );
};

export default CaseDetail;
