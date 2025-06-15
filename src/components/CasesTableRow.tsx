
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
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
  createdAt: string;
  syslogEndTime: string;
}

interface CasesTableRowProps {
  case: Case;
  timezone: string;
}

export const CasesTableRow: React.FC<CasesTableRowProps> = ({ case: caseData, timezone }) => {
  const navigate = useNavigate();

  return (
    <TableRow className="border-b border-brand/10 hover:bg-brand/5 transition-colors dark:hover:bg-brand/5">
      <TableCell className="px-3 py-2 text-foreground font-medium">{caseData.id}</TableCell>
      <TableCell className="px-3 py-2">
        <button
          onClick={() => navigate(`/cases/${caseData.uuid}`)}
          className="text-brand font-mono underline-offset-2 hover:underline hover:text-brand/80 transition-colors px-1 py-1 font-semibold"
        >
          {caseData.caseNumber}
        </button>
      </TableCell>
      <TableCell className="px-3 py-2">
        <CaseStatusBadge status={caseData.status} />
      </TableCell>
      <TableCell className="px-3 py-2 text-muted-foreground font-mono text-sm">{caseData.serialNumber}</TableCell>
      <TableCell className="px-3 py-2 text-muted-foreground">{caseData.hostName}</TableCell>
      <TableCell className="px-3 py-2 text-muted-foreground font-mono text-sm">
        {moment(caseData.createdAt).tz(timezone).format("YYYY-MM-DD HH:mm")}
      </TableCell>
      <TableCell className="px-3 py-2 text-muted-foreground font-mono text-sm">
        {moment(caseData.syslogEndTime).tz(timezone).format("YYYY-MM-DD HH:mm")}
      </TableCell>
    </TableRow>
  );
};
