
import { TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";
import moment from "moment-timezone";
import { CaseStatusBadge } from "./CaseStatusBadge";
type CaseStatus = "new" | "in progress" | "queued" | "finished";

interface Case {
  id: number;
  uuid: string;
  caseNumber: string;
  status: CaseStatus;
  serialNumber: string;
  hostName: string;
  fileName: string;
  createdAt: string; // ISO string
  syslogEndTime: string; // ISO string
}

interface CasesTableRowProps {
  case: Case;
  timezone: string;
}

const CasesTableRow: React.FC<CasesTableRowProps> = ({ case: caseItem, timezone }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCaseNumberClick = async () => {
    setIsLoading(true);
    
    // Small delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Call the global openCase function from TabNavigation
    if ((window as any).openCase) {
      (window as any).openCase(caseItem.caseNumber);
    }
    
    setIsLoading(false);
  };

  const formatDateTime = (isoString: string) => {
    return moment(isoString).tz(timezone).format('YYYY-MM-DD HH:mm:ss');
  };

  return (
    <TableRow className="hover:bg-muted/50 dark:hover:bg-muted/50">
      <TableCell className="py-1 font-mono">{caseItem.id}</TableCell>
      <TableCell className="py-1 font-mono">
        <button
          onClick={handleCaseNumberClick}
          className="text-primary hover:text-primary/80 hover:underline transition-colors cursor-pointer font-mono"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
              {caseItem.caseNumber}
            </div>
          ) : (
            caseItem.caseNumber
          )}
        </button>
      </TableCell>
      <TableCell className="py-1 font-mono">
        <CaseStatusBadge status={caseItem.status} />
      </TableCell>
      <TableCell className="py-1 font-mono">{caseItem.serialNumber}</TableCell>
      <TableCell className="py-1 font-mono">{caseItem.hostName}</TableCell>
      <TableCell className="py-1 font-mono">{caseItem.fileName}</TableCell>
      <TableCell className="py-1 font-mono">{formatDateTime(caseItem.createdAt)}</TableCell>
      <TableCell className="py-1 font-mono">{formatDateTime(caseItem.syslogEndTime)}</TableCell>
    </TableRow>
  );
};

export default CasesTableRow;
