
import { TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";
import moment from "moment-timezone";
import { CaseStatusBadge } from "./CaseStatusBadge";
import { CaseStatus } from "@/store/casesStore";
interface Case {
  id: number;
  // uuid: string;
  case_number: string;
  status: CaseStatus;
  serial_number: string;
  host_name: string;
  file_name: string;
  created_at: string; // ISO string
  syslog_end_time: string; // ISO string
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
      (window as any).openCase(caseItem.case_number);
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
          className="text-primary hover:text-brand/80 hover:underline transition-colors cursor-pointer font-mono"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
              {caseItem.case_number}
            </div>
          ) : (
            caseItem.case_number
          )}
        </button>
      </TableCell>
      <TableCell className="py-1 font-mono">
        <CaseStatusBadge status={caseItem.status} />
      </TableCell>
      <TableCell className="py-1 font-mono">{caseItem.serial_number}</TableCell>
      <TableCell className="py-1 font-mono">{caseItem.host_name}</TableCell>
      <TableCell className="py-1 font-mono">{caseItem.file_name}</TableCell>
      <TableCell className="py-1 font-mono">{formatDateTime(caseItem.created_at)}</TableCell>
      <TableCell className="py-1 font-mono">{formatDateTime(caseItem.syslog_end_time)}</TableCell>
    </TableRow>
  );
};

export default CasesTableRow;
