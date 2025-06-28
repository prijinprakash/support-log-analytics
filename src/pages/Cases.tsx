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
import { Loader2Icon } from "lucide-react";

const Cases: React.FC = () => {
  // Stored state
  const { cases, isLoading, pageNumber, setPageNumber, fetchCases } = useCasesStore();

  // Table state
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"id" | "created_at" | "status">("id");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
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
          d.case_number.includes(s) ||
          d.host_name.toLowerCase().includes(s) ||
          d.serial_number.toLowerCase().includes(s) ||
          d.file_name.toLowerCase().includes(s)
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
      } else if (sortBy === "created_at") {
        keyA = a.created_at;
        keyB = b.created_at;
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
    const start = (pageNumber - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, pageNumber, pageSize]);

  const pageCount = Math.ceil(filteredData.length / pageSize);

  // loads initial page and fetches more pages as user reaches the last page
  useEffect(() => {
    if (pageNumber === pageCount) {
      console.log('initial page load')
      fetchCases();
    }
  }, [pageNumber])
  
  function handleSort(column: "id" | "created_at" | "status") {
    setPageNumber(1);
    if (sortBy === column) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortBy(column);
      setSortDir("asc");
    }
  }

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPageNumber(1);
  };

  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
    setPageNumber(1);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPageNumber(1);
  };

  return (
    <section className="p-4 w-full">
      <Card>
        <CardHeader className="p-2 flex flex-row justify-between items-center space-y-0">
          <CasesTableFilters
            search={search}
            statusFilter={statusFilter}
            onSearchChange={handleSearchChange}
            onStatusFilterChange={handleStatusFilterChange}
          />
          <CasesTablePagination
            totalPages={pageCount}
            pageSize={pageSize}
            onPageSizeChange={handlePageSizeChange}
            totalItems={filteredData.length}
          />
        </CardHeader>
        <CardContent className="p-0 border-t">
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
                <TableHead className="h-8 min-w-[160px] cursor-pointer select-none text-muted-foreground font-semibold" onClick={() => handleSort("created_at")}>
                  <span className="inline-flex items-center">
                    Created At
                    {sortBy === "created_at" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-4 h-4 text-primary" /> : <ChevronDown className="ml-1 w-4 h-4 text-primary" />)}
                  </span>
                </TableHead>
                <TableHead className="h-8 min-w-[160px] text-muted-foreground font-semibold">Syslog End Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length === 0 ? (
                <TableRow className="border-b border-border hover:bg-muted/50">
                  <TableCell colSpan={8} className="text-center text-muted-foreground py-12 px-3">
                    {isLoading ? <span className="flex flex-1 text-sm text-muted-foreground gap-1 items-center justify-center">
                      <Loader2Icon className="animate-spin stroke-primary"/> Loading...</span> : 
                      <>No results found.</>}
                  </TableCell>
                </TableRow>
              ) : (
                paginated.map(row => (
                  <CasesTableRow key={row.id} case={row} timezone={timezone} />
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default Cases;
