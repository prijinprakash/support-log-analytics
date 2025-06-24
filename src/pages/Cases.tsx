import React, { useEffect, useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import moment from "moment-timezone";
import { ChevronUp, ChevronDown } from "lucide-react";
import { CasesTableFilters } from "../components/caselist/CasesTableFilters";
import CasesTableRow from "../components/caselist/CasesTableRow";
import { CasesTablePagination } from "../components/caselist/CasesTablePagination";
import { useCasesStore } from "@/store/casesStore";

type CaseStatus = "new" | "in progress" | "queued" | "finished";
// interface Case {
//   id: number;
//   uuid: string;
//   caseNumber: string;
//   status: CaseStatus;
//   serialNumber: string;
//   hostName: string;
//   fileName: string;
//   createdAt: string; // ISO string
//   syslogEndTime: string; // ISO string
// }

const Cases: React.FC = () => {
  // Store state
  const { cases, isLoading, fetchCases } = useCasesStore();
  
  // Table state
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"id" | "createdAt" | "status">("id");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  
  // Initialize pagination from localStorage
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("casesTableCurrentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  
  const [pageSize, setPageSize] = useState(() => {
    const savedPageSize = localStorage.getItem("casesTablePageSize");
    return savedPageSize ? parseInt(savedPageSize, 10) : 10;
  });

  // Timezone from localStorage or default (sync to changes)
  const [timezone, setTimezone] = useState<string>(moment.tz.guess());

  // Fetch cases on component mount
  useEffect(() => {
    fetchCases();
  }, [fetchCases]);

  useEffect(() => {
    const tz = localStorage.getItem("selectedTimezone") || moment.tz.guess();
    setTimezone(tz);
    // Listen for localStorage changes from other tabs (optional)
    const onStorage = (e: StorageEvent) => {
      if (e.key === "selectedTimezone") {
        setTimezone(e.newValue || moment.tz.guess());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Save pagination settings to localStorage
  useEffect(() => {
    localStorage.setItem("casesTableCurrentPage", page.toString());
  }, [page]);

  useEffect(() => {
    localStorage.setItem("casesTablePageSize", pageSize.toString());
  }, [pageSize]);

  // Filtering, Searching, Sorting, Pagination
  const filteredData = useMemo(() => {
    let items = [...cases];
    if (search.trim()) {
      const s = search.trim().toLowerCase();
      items = items.filter(
        (d) =>
          d.caseNumber.includes(s) ||
          d.hostName.toLowerCase().includes(s) ||
          d.serialNumber.toLowerCase().includes(s) ||
          d.fileName.toLowerCase().includes(s)
      );
    }
    if (statusFilter !== "all") {
      items = items.filter((d) => d.status === statusFilter);
    }
    // Sorting
    items.sort((a, b) => {
      let keyA, keyB;
      if (sortBy === "id") {
        keyA = a.id;
        keyB = b.id;
      } else if (sortBy === "createdAt") {
        keyA = a.createdAt;
        keyB = b.createdAt;
      } else if (sortBy === "status") {
        keyA = a.status;
        keyB = b.status;
      }
      if (keyA! < keyB!) return sortDir === "asc" ? -1 : 1;
      if (keyA! > keyB!) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return items;
  }, [cases, search, statusFilter, sortBy, sortDir]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, pageSize]);

  const pageCount = Math.ceil(filteredData.length / pageSize);

  function handleSort(column: "id" | "createdAt" | "status") {
    if (sortBy === column) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortBy(column);
      setSortDir("asc");
    }
  }

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
    setPage(1);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  if (isLoading) {
    return (
      <section className="px-4 w-full">
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin" />
          <span className="ml-3 text-muted-foreground">Loading cases...</span>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 w-full">
      <Card>
        <CardHeader className="py-2 px-4 flex flex-row justify-between items-center space-y-0">
          <CasesTableFilters
            search={search}
            statusFilter={statusFilter}
            onSearchChange={handleSearchChange}
            onStatusFilterChange={handleStatusFilterChange}
            resultCount={filteredData.length}
          />
          <CasesTablePagination
            currentPage={page}
            totalPages={pageCount}
            onPageChange={setPage}
            pageSize={pageSize}
            onPageSizeChange={handlePageSizeChange}
            totalItems={filteredData.length}
          />
        </CardHeader>
        <CardContent className="p-0 border-t">
          {/* <div className="bg-card rounded-lg border border-border overflow-hidden"> */}
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="h-8 cursor-pointer select-none text-muted-foreground font-semibold" onClick={() => handleSort("id")}>
                <span className="inline-flex items-center">
                  ID
                  {sortBy === "id" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-4 h-4 text-primary" /> : <ChevronDown className="ml-1 w-4 h-4 text-primary" />)}
                </span>
              </TableHead>
              <TableHead className="h-8 min-w-[140px] text-muted-foreground font-semibold">Case Number</TableHead>
              <TableHead className="h-8 min-w-[130px] cursor-pointer select-none text-muted-foreground font-semibold" onClick={() => handleSort("status")}>
                <span className="inline-flex items-center">
                  Status
                  {sortBy === "status" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-4 h-4 text-primary" /> : <ChevronDown className="ml-1 w-4 h-4 text-primary" />)}
                </span>
              </TableHead>
              <TableHead className="h-8 text-muted-foreground font-semibold">Serial Number</TableHead>
              <TableHead className="h-8 text-muted-foreground font-semibold">Host Name</TableHead>
              <TableHead className="h-8 text-muted-foreground font-semibold">File Name</TableHead>
              <TableHead className="h-8 min-w-[160px] cursor-pointer select-none text-muted-foreground font-semibold" onClick={() => handleSort("createdAt")}>
                <span className="inline-flex items-center">
                  Created At
                  {sortBy === "createdAt" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-4 h-4 text-primary" /> : <ChevronDown className="ml-1 w-4 h-4 text-primary" />)}
                </span>
              </TableHead>
              <TableHead className="h-8 min-w-[160px] text-muted-foreground font-semibold">Syslog End Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow className="border-b border-border hover:bg-muted/50">
                <TableCell colSpan={8} className="text-center text-muted-foreground py-12 px-3">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              paginated.map(row => (
                <CasesTableRow key={row.id} case={row} timezone={timezone} />
              ))
            )}
          </TableBody>
        </Table>
      {/* </div> */}


        </CardContent>
      </Card>
    </section>
  );
};

export default Cases;
