
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon } from "lucide-react";

type CaseStatus = "new" | "in progress" | "queued" | "finished";

interface CasesTableFiltersProps {
  search: string;
  statusFilter: string;
  onSearchChange: (value: string) => void;
  onStatusFilterChange: (value: string) => void;
  resultCount: number;
}

const statusOptions: CaseStatus[] = ["new", "in progress", "queued", "finished"];

export const CasesTableFilters: React.FC<CasesTableFiltersProps> = ({
  search,
  statusFilter,
  onSearchChange,
  onStatusFilterChange,
  resultCount,
}) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4 sm:items-end justify-between">
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <div className="relative flex-1 min-w-[300px]">
          <Input
            placeholder="Search case number, serial, or host…"
            value={search}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-10 bg-lightbackground border-brand/30 text-white placeholder:text-gray-400 focus:border-brand h-10"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
        <Select value={statusFilter} onValueChange={onStatusFilterChange}>
          <SelectTrigger className="sm:min-w-[180px] bg-lightbackground border-brand/30 text-white focus:border-brand h-10">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-[#191a1b] border-brand/30">
            <SelectItem value="all" className="text-white hover:bg-brand/20">All statuses</SelectItem>
            {statusOptions.map((status) => (
              <SelectItem value={status} key={status} className="text-white hover:bg-brand/20">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="text-sm text-gray-400 mt-1 sm:mt-0">
        Showing {resultCount} results{search && ` for '${search}'`}
      </div>
    </div>
  );
};
