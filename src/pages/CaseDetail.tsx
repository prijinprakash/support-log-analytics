
import { useParams } from "react-router-dom";
import { FileText, Clock, User, AlertCircle } from "lucide-react";

const CaseDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <FileText size={32} className="text-primary" />
          <h1 className="text-3xl font-bold">Case {caseId}</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Case Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Case Overview</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Case Number</label>
                    <div className="text-lg font-mono">{caseId}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Status</label>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>In Progress</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Description</label>
                  <p className="mt-1 text-sm">
                    This is a placeholder description for case {caseId}. In a real application, 
                    this would contain detailed information about the case, including relevant 
                    documents, timeline, and current status.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Case Timeline</h2>
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
                    <div className="font-medium">Initial review completed</div>
                    <div className="text-sm text-muted-foreground">1 day ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded border">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium">Under investigation</div>
                    <div className="text-sm text-muted-foreground">6 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Details Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Case Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Created</div>
                    <div className="text-sm text-muted-foreground">Dec 13, 2024</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User size={16} className="text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Assigned to</div>
                    <div className="text-sm text-muted-foreground">John Doe</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle size={16} className="text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Priority</div>
                    <div className="text-sm text-muted-foreground">Medium</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Related Documents</h3>
              <div className="space-y-2">
                <div className="text-sm p-2 rounded border hover:bg-muted/50 cursor-pointer">
                  Initial Report.pdf
                </div>
                <div className="text-sm p-2 rounded border hover:bg-muted/50 cursor-pointer">
                  Evidence Photos.zip
                </div>
                <div className="text-sm p-2 rounded border hover:bg-muted/50 cursor-pointer">
                  Witness Statement.docx
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseDetail;
