import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type TabularDataProps = {
  headers: string[];
  data: Record<string, any>[];
  maxCellWidth?: number; // in pixels, default 150
};

const TabularData = ({ headers, data, maxCellWidth = 200 }: TabularDataProps) => {
  return (
    <div className="relative">
      <Table className="border">
        <TableHeader>
          <TableRow>
            {headers.map((header, header_index) => (
              <TableHead className="px-2 py-1 h-auto text-left" key={header_index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {Object.keys(row).map((col, j) => (
                <TableCell 
                  key={j}
                  className="font-medium text-sm px-2 py-1 text-left relative group cursor-pointer"
                  // style={{ maxWidth: `${maxCellWidth}px` }}
                >
                  {/* <div 
                    className="cell-content truncate transition-all duration-200 ease-in-out group-hover:bg-white group-hover:shadow-lg group-hover:border group-hover:border-gray-300 group-hover:rounded group-hover:px-3 group-hover:py-2 group-hover:z-20 group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:whitespace-normal group-hover:overflow-visible group-hover:max-w-none group-hover:min-w-max"
                    style={{
                      minHeight: '1.5rem',
                    }}
                  >
                    {row[col]}
                  </div> */}
                  <div 
                    className="cell-content truncate group-hover:bg-background group-hover:border group-hover:px-3 group-hover:py-2 group-hover:z-20 group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:whitespace-normal group-hover:overflow-visible group-hover:break-words"
                    style={{
                      minHeight: '1.5rem',
                      width: `${maxCellWidth}px`
                    }}
                  >
                    {row[col]}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TabularData;
