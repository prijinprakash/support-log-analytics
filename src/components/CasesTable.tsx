
import React, { useEffect, useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
import { ChevronUp, ChevronDown, Search as SearchIcon } from "lucide-react";

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

const statusOptions: CaseStatus[] = ["new", "in progress", "queued", "finished"];
const PAGE_SIZE = 10;

const CasesTable: React.FC = () => {
  // Table state
  const [data] = useState<Case[]>(generateDemoCases());
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"id" | "createdAt" | "status">("id");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);

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
    const start = (page - 1) * PAGE_SIZE;
    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, page]);

  const pageCount = Math.ceil(filteredData.length / PAGE_SIZE);

  // Routing for case link
  const navigate = useNavigate();

  function handleSort(column: "id" | "createdAt" | "status") {
    if (sortBy === column) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortBy(column);
      setSortDir("asc");
    }
  }

  // Color for status chips
  function statusColor(status: CaseStatus) {
    switch (status) {
      case "new":
        return "bg-blue-500 text-white";
      case "in progress":
        return "bg-yellow-500 text-white";
      case "queued":
        return "bg-gray-400 text-white";
      case "finished":
        return "bg-green-600 text-white";
      default:
        return "bg-muted";
    }
  }

  return (
    <section className="mx-auto px-4 max-w-6xl py-8 w-full">
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:items-end justify-between">
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative flex-1">
            <Input
              placeholder="Search case number, serial, or host…"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full pl-10"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          </div>
          <Select
            value={statusFilter}
            onValueChange={v => {
              setStatusFilter(v);
              setPage(1);
            }}
          >
            <SelectTrigger className="sm:min-w-[160px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {statusOptions.map((status) => (
                <SelectItem value={status} key={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="text-xs text-muted-foreground mt-1 sm:mt-0">
          Showing {filteredData.length} results{search && ` for '${search}'`}
        </div>
      </div>
      <div className="bg-card rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] cursor-pointer select-none" onClick={() => handleSort("id")}>
                <span className="inline-flex items-center">
                  ID
                  {sortBy === "id" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-3 h-3" /> : <ChevronDown className="ml-1 w-3 h-3" />)}
                </span>
              </TableHead>
              <TableHead className="min-w-[130px]">Case Number</TableHead>
              <TableHead className="min-w-[120px] cursor-pointer select-none" onClick={() => handleSort("status")}>
                <span className="inline-flex items-center">
                  Status
                  {sortBy === "status" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-3 h-3" /> : <ChevronDown className="ml-1 w-3 h-3" />)}
                </span>
              </TableHead>
              <TableHead>Serial Number</TableHead>
              <TableHead>Host Name</TableHead>
              <TableHead className="min-w-[140px] cursor-pointer select-none" onClick={() => handleSort("createdAt")}>
                <span className="inline-flex items-center">
                  Created At
                  {sortBy === "createdAt" && (sortDir === "asc" ? <ChevronUp className="ml-1 w-3 h-3" /> : <ChevronDown className="ml-1 w-3 h-3" />)}
                </span>
              </TableHead>
              <TableHead className="min-w-[140px]">Syslog End Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              paginated.map(row => (
                <TableRow key={row.id} className="group hover:shadow-md transition-shadow">
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <button
                      onClick={() => navigate(`/cases/${row.uuid}`)}
                      className="text-brand font-mono underline-offset-2 hover:underline hover:text-brand/80 transition px-0.5 py-0.5"
                    >
                      {row.caseNumber}
                    </button>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium uppercase tracking-widest ${statusColor(row.status)}`}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell>{row.serialNumber}</TableCell>
                  <TableCell>{row.hostName}</TableCell>
                  <TableCell>
                    {moment(row.createdAt).tz(timezone).format("YYYY-MM-DD HH:mm")}
                  </TableCell>
                  <TableCell>
                    {moment(row.syslogEndTime).tz(timezone).format("YYYY-MM-DD HH:mm")}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              asChild
              onClick={e => {
                e.preventDefault();
                setPage(prev => Math.max(prev - 1, 1));
              }}
              href="#"
              aria-disabled={page <= 1}
              tabIndex={page <= 1 ? -1 : 0}
            />
          </PaginationItem>
          {Array.from({ length: pageCount }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                isActive={i + 1 === page}
                asChild
                href="#"
                tabIndex={0}
                onClick={e => {
                  e.preventDefault();
                  setPage(i + 1);
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              asChild
              onClick={e => {
                e.preventDefault();
                setPage(prev => Math.min(prev + 1, pageCount));
              }}
              href="#"
              aria-disabled={page >= pageCount}
              tabIndex={page >= pageCount ? -1 : 0}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default CasesTable;

