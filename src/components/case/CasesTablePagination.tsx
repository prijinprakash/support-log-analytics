
import React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

interface CasesTablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (pageSize: number) => void;
  totalItems: number;
}

export const CasesTablePagination: React.FC<CasesTablePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
  totalItems,
}) => {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="mt-0 flex items-center justify-end w-[30%]">
      <div className="flex items-center gap-2 w-1/2">
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
        <div className="text-sm text-muted-foreground">
          {startItem}-{endItem} of {totalItems}
        </div>
      </div>
      
      <Pagination className="justify-end mx-0 w-1/2">
        <PaginationContent className="gap-0">
          <PaginationItem>
            <PaginationLink
              onClick={e => {
                e.preventDefault();
                onPageChange(1);
              }}
              href="#"
              aria-disabled={currentPage <= 1}
              tabIndex={currentPage <= 1 ? -1 : 0}
              className={`h-8 w-8 p-0 bg-background border-border hover:bg-accent hover:text-accent-foreground ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronsLeft className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationPrevious
              onClick={e => {
                e.preventDefault();
                onPageChange(Math.max(currentPage - 1, 1));
              }}
              href="#"
              aria-disabled={currentPage <= 1}
              tabIndex={currentPage <= 1 ? -1 : 0}
              className={`h-8 bg-background border-border hover:bg-accent hover:text-accent-foreground ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </PaginationItem>
          
          {/* {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  isActive={pageNum === currentPage}
                  href="#"
                  tabIndex={0}
                  onClick={e => {
                    e.preventDefault();
                    onPageChange(pageNum);
                  }}
                  className={`h-8 w-8 ${pageNum === currentPage 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-background border-border hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })} */}
          <PaginationItem>
            <PaginationLink
              isActive={true}
              href="#"
              tabIndex={0}
              // onClick={e => {
              //   e.preventDefault();
              //   onPageChange(pageNum);
              // }}
              // className="border-none"
              size="sm"
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationNext
              onClick={e => {
                e.preventDefault();
                onPageChange(Math.min(currentPage + 1, totalPages));
              }}
              href="#"
              aria-disabled={currentPage >= totalPages}
              tabIndex={currentPage >= totalPages ? -1 : 0}
              className={`h-8 bg-background border-border hover:bg-accent hover:text-accent-foreground ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink
              onClick={e => {
                e.preventDefault();
                onPageChange(totalPages);
              }}
              href="#"
              aria-disabled={currentPage >= totalPages}
              tabIndex={currentPage >= totalPages ? -1 : 0}
              className={`h-8 w-8 p-0 bg-background border-border hover:bg-accent hover:text-accent-foreground ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronsRight className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
