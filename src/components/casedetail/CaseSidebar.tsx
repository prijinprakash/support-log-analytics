import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function CaseSidebar(caseData) {
  return (
    <div className="w-80 flex-shrink-0 p-4 overflow-auto break-words relative">

      <h2 className="text-lg font-semibold mb-4 text-foreground">Case Details</h2>

      <div className="space-y-2">
      {/* {caseData.map((case) => )} */}
        <div className="flex items-start gap-3">
          {/* <FileText size={18} className="text-muted-foreground mt-1 flex-shrink-0" /> */}
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-muted-foreground mb-1">Case Number</div>
            <div className="text-sm font-mono break-all">{caseData.case_number}</div>
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
  )
}