
import React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface CasesTablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CasesTablePagination: React.FC<CasesTablePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="mt-8 flex justify-center">
      <Pagination>
        <PaginationContent className="gap-2">
          <PaginationItem>
            <PaginationPrevious
              onClick={e => {
                e.preventDefault();
                onPageChange(Math.max(currentPage - 1, 1));
              }}
              href="#"
              aria-disabled={currentPage <= 1}
              tabIndex={currentPage <= 1 ? -1 : 0}
              className={`bg-lightbackground border-brand/30 text-white hover:bg-brand/20 hover:text-white ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </PaginationItem>
          
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                isActive={i + 1 === currentPage}
                href="#"
                tabIndex={0}
                onClick={e => {
                  e.preventDefault();
                  onPageChange(i + 1);
                }}
                className={`${i + 1 === currentPage 
                  ? 'bg-brand text-white border-brand' 
                  : 'bg-lightbackground border-brand/30 text-white hover:bg-brand/20 hover:text-white'
                }`}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext
              onClick={e => {
                e.preventDefault();
                onPageChange(Math.min(currentPage + 1, totalPages));
              }}
              href="#"
              aria-disabled={currentPage >= totalPages}
              tabIndex={currentPage >= totalPages ? -1 : 0}
              className={`bg-lightbackground border-brand/30 text-white hover:bg-brand/20 hover:text-white ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
