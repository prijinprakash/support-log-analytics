
import React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useCasesStore } from "@/store/casesStore";

interface CasesTablePaginationProps {
  totalPages: number;
  pageSize: number;
  onPageSizeChange: (pageSize: number) => void;
  totalItems: number;
}

export const CasesTablePagination: React.FC<CasesTablePaginationProps> = ({
  totalPages,
  pageSize,
  onPageSizeChange,
  totalItems,
}) => {
  const { pageNumber, setPageNumber } = useCasesStore();
  const startItem = (pageNumber - 1) * pageSize + 1;
  const endItem = Math.min(pageNumber * pageSize, totalItems);

  return (
    <div className="flex items-center justify-end w-[30%]">
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          {startItem}-{endItem} of {totalItems}
        </div>
        <Select value={pageSize.toString()} onValueChange={(value) => onPageSizeChange(Number(value))}>
          <SelectTrigger className="w-20 h-8 bg-background border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-background border-border">
            <SelectItem value="5" className="hover:bg-accent">5</SelectItem>
            <SelectItem value="10" className="hover:bg-accent">10</SelectItem>
            <SelectItem value="20" className="hover:bg-accent">20</SelectItem>
            <SelectItem value="50" className="hover:bg-accent">50</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Pagination className="justify-end mx-0 w-1/2">
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationLink
              onClick={e => {
                e.preventDefault();
                setPageNumber(1);
              }}
              href="#"
              aria-disabled={pageNumber <= 1}
              tabIndex={pageNumber <= 1 ? -1 : 0}
              className={pageNumber <= 1 && 'opacity-50 cursor-not-allowed'}
            >
              <ChevronsLeft className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationPrevious
              onClick={e => {
                e.preventDefault();
                setPageNumber(Math.max(pageNumber - 1, 1));
              }}
              href="#"
              aria-disabled={pageNumber <= 1}
              tabIndex={pageNumber <= 1 ? -1 : 0}
              className={pageNumber <= 1 && 'opacity-50 cursor-not-allowed'}
            />
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink
              isActive={true}
              href="#"
              tabIndex={0}
              // size="sm"
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationNext
              onClick={e => {
                e.preventDefault();
                setPageNumber(Math.min(pageNumber + 1, totalPages));
              }}
              href="#"
              aria-disabled={pageNumber >= totalPages}
              tabIndex={pageNumber >= totalPages ? -1 : 0}
              className={pageNumber >= totalPages && 'opacity-50 cursor-not-allowed'}
            />
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink
              onClick={e => {
                e.preventDefault();
                setPageNumber(totalPages);
              }}
              href="#"
              aria-disabled={pageNumber >= totalPages}
              tabIndex={pageNumber >= totalPages ? -1 : 0}
              className={pageNumber >= totalPages && 'opacity-50 cursor-not-allowed'}
            >
              <ChevronsRight className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
