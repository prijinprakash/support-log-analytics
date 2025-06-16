
import React from "react";

type CaseStatus = "new" | "in progress" | "queued" | "finished";

interface CaseStatusBadgeProps {
  status: CaseStatus;
}

export const CaseStatusBadge: React.FC<CaseStatusBadgeProps> = ({ status }) => {
  function statusColor(status: CaseStatus) {
    switch (status) {
      case "new":
        return "text-blue-400 border border-blue-500";
      case "in progress":
        return "text-yellow-400 border border-yellow-500";
      case "queued":
        return "text-gray-400 border border-gray-500";
      case "finished":
        return "text-green-400 border border-green-500";
      default:
        return "text-gray-400 border border-gray-500";
    }
  }

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold tracking-wider ${statusColor(status)}`}>
      {status}
    </span>
  );
};
