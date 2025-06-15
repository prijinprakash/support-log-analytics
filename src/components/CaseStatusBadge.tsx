
import React from "react";

type CaseStatus = "new" | "in progress" | "queued" | "finished";

interface CaseStatusBadgeProps {
  status: CaseStatus;
}

export const CaseStatusBadge: React.FC<CaseStatusBadgeProps> = ({ status }) => {
  function statusColor(status: CaseStatus) {
    switch (status) {
      case "new":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "in progress":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      case "queued":
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
      case "finished":
        return "bg-green-500/20 text-green-400 border border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
    }
  }

  return (
    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${statusColor(status)}`}>
      {status}
    </span>
  );
};
