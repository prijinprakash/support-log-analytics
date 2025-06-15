
import React, { useEffect, useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import moment from "moment-timezone";
import { ChevronUp, ChevronDown } from "lucide-react";
import { CasesTableFilters } from "./CasesTableFilters";
import CasesTableRow from "./CasesTableRow";
import { CasesTablePagination } from "./CasesTablePagination";

type CaseStatus = "new" | "in progress" | "queued" | "finished";
interface Case {
  id: number;
  uuid: string;
  caseNumber: string;
  status: CaseStatus;
  serialNumber: string;
  hostName: string;
  createdAt: string; // ISO string
  syslogEndTime: string; // ISO string
}

// For demo: mock 50 cases
function generateDemoCases(): Case[] {
  function randStatus() {
    const s = ["new", "in progress", "queued", "finished"] as const;
    return s[Math.floor(Math.random() * s.length)];
  }
  const now = Date.now();
  return Array(50)
    .fill(null)
    .map((_, idx) => ({
      id: idx + 1,
      uuid: crypto.randomUUID(),
      caseNumber: ("000000" + (Math.floor(100000 + Math.random() * 900000))).slice(-6),
      status: randStatus(),
      serialNumber: "SN-" + Math.floor(10000000 + Math.random() * 90000000),
      hostName: `host${idx + 1}.example.com`,
      createdAt: new Date(now - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString(),
      syslogEndTime: new Date(now - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString(),
    }));
}

const CasesTable: React.FC = () => {
  // Table state
  const [data] = useState<Case[]>(generateDemoCases());
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
    let items = [...data];
    if (search.trim()) {
      const s = search.trim().toLowerCase();
      items = items.filter(
        (d) =>
          d.caseNumber.includes(s) ||
          d.hostName.toLowerCase().includes(s) ||
          d.serialNumber.toLowerCase().includes(s)
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
  }, [data, search, statusFilter, sortBy, sortDir]);

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

  return (
    <section className="px-4 w-full">
      <CasesTableFilters
        search={search}
        statusFilter={statusFilter}
        onSearchChange={handleSearchChange}
        onStatusFilterChange={handleStatusFilterChange}
        resultCount={filteredData.length}
      />
      
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="h-12 px-2 cursor-pointer select-none text-muted-foreground font-semibold" onClick={() => handleSort("id")}>
                <span className="inline-flex items-center">
                  ID
                  {sortBy === "id" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-4 h-4 text-primary" /> : <ChevronDown className="ml-1 w-4 h-4 text-primary" />)}
                </span>
              </TableHead>
              <TableHead className="min-w-[140px] px-2 text-muted-foreground font-semibold">Case Number</TableHead>
              <TableHead className="min-w-[130px] px-2 cursor-pointer select-none text-muted-foreground font-semibold" onClick={() => handleSort("status")}>
                <span className="inline-flex items-center">
                  Status
                  {sortBy === "status" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-4 h-4 text-primary" /> : <ChevronDown className="ml-1 w-4 h-4 text-primary" />)}
                </span>
              </TableHead>
              <TableHead className="px-2 text-muted-foreground font-semibold">Serial Number</TableHead>
              <TableHead className="px-2 text-muted-foreground font-semibold">Host Name</TableHead>
              <TableHead className="min-w-[160px] px-2 cursor-pointer select-none text-muted-foreground font-semibold" onClick={() => handleSort("createdAt")}>
                <span className="inline-flex items-center">
                  Created At
                  {sortBy === "createdAt" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-4 h-4 text-primary" /> : <ChevronDown className="ml-1 w-4 h-4 text-primary" />)}
                </span>
              </TableHead>
              <TableHead className="min-w-[160px] px-2 text-muted-foreground font-semibold">Syslog End Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow className="border-b border-border hover:bg-muted/50">
                <TableCell colSpan={7} className="text-center text-muted-foreground py-12 px-3">
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
      </div>
      
      <CasesTablePagination
        currentPage={page}
        totalPages={pageCount}
        onPageChange={setPage}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        totalItems={filteredData.length}
      />
    </section>
  );
};

export default CasesTable;
