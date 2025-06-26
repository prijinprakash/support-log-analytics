
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon } from "lucide-react";
import { CaseStatus } from "@/store/casesStore";

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
      <div className="flex gap-3 items-center justify-between">
        <div className="relative flex-1 min-w-[300px]">
          <Input
            placeholder="Search case number, serial, or host…"
            value={search}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-10 placeholder:text-muted-foreground focus:border-primary h-10 focus-visible:ring-0"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        </div>
        <Select value={statusFilter} onValueChange={onStatusFilterChange}>
          <SelectTrigger className="w-[150px] text-foreground focus:border-primary h-10 focus-visible:ring-0">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-background">
            <SelectItem value="all" className="text-foreground hover:bg-accent hover:text-accent-foreground">All statuses</SelectItem>
            {statusOptions.map((status) => (
              <SelectItem value={status} key={status} className="text-foreground hover:bg-accent hover:text-accent-foreground">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
  );
};
