
import { TableCell, TableRow } from "@/components/ui/table";
import { CaseStatusBadge } from "./CaseStatusBadge";
import { useState } from "react";
import PageLoader from "./PageLoader";

type CaseStatus = "new" | "in progress" | "queued" | "finished";

interface Case {
  id: string;
  caseNumber: string;
  serialNumber: string;
  hostName: string;
  status: CaseStatus;
  createdAt: string;
  updatedAt: string;
}

interface CasesTableRowProps {
  case: Case;
}

const CasesTableRow: React.FC<CasesTableRowProps> = ({ case: caseItem }) => {
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

  return (
    <TableRow className="hover:bg-muted/50 dark:hover:bg-muted/50">
      <TableCell className="px-3 py-2 font-mono">
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
      <TableCell className="px-3 py-2 font-mono">{caseItem.serialNumber}</TableCell>
      <TableCell className="px-3 py-2">{caseItem.hostName}</TableCell>
      <TableCell className="px-3 py-2">
        <CaseStatusBadge status={caseItem.status} />
      </TableCell>
      <TableCell className="px-3 py-2 text-muted-foreground">{caseItem.createdAt}</TableCell>
      <TableCell className="px-3 py-2 text-muted-foreground">{caseItem.updatedAt}</TableCell>
    </TableRow>
  );
};

export default CasesTableRow;
