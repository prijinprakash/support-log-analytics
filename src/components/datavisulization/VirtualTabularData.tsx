import { useRef, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useVirtualizer } from "@tanstack/react-virtual";

type VirtualTabularDataProps = {
  headers: string[];
  data: Record<string, any>[];
  maxCellWidth?: number;
  rowHeight?: number;
  maxHeight?: number;
};

const VirtualTabularData = ({
  headers,
  data,
  maxCellWidth = 200,
  rowHeight = 40,
  maxHeight = 500,
}: VirtualTabularDataProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan: 10,
  });

  useEffect(() => {
    console.log('tabular component mounted')

    return () => console.log('tabular component unmounted');
  }, [])

  return (
    <div
      ref={parentRef}
      className="relative overflow-auto border rounded"
      style={{ maxHeight }}
    >
      <Table className="w-full table-fixed">
        <TableHeader className="w-full sticky top-0 bg-background z-10">
          <TableRow style={{ height: rowHeight }}>
            {headers.map((header, header_index) => (
              <TableHead
                className="px-2 py-1 text-left border-b"
                key={header_index}
                style={{ 
                  maxWidth: `${maxCellWidth}px`, 
                  width: `${maxCellWidth}px`,
                  height: rowHeight,
                  lineHeight: `${rowHeight - 16}px` // Account for padding
                }}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody
          style={{
            position: "relative",
            height: rowVirtualizer.getTotalSize(),
            width: "100%",
            marginTop: 0,
            borderSpacing: 0,
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const row = data[virtualRow.index];
            return (
              <TableRow
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
                className="absolute parent-row w-full table table-fixed"
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                  height: rowHeight,
                }}
              >
                {Object.keys(row).map((col, j) => {
                  return (
                    <TableCell
                      key={j}
                      className="font-medium text-sm px-2 py-1 text-left cursor-pointer relative group child-cell"
                    >
                      <div
                        className="cell-content truncate flex items-center h-full min-h-6 visible group-hover:invisible"
                      >
                        {row[col]}
                      </div>
                      <div
                        className="absolute bg-background border p-3 z-[10000] top-0 left-0 w-full pointer-events-none invisible group-hover:visible"
                      >
                        <div className="whitespace-normal break-words text-sm">
                          {row[col]}
                        </div>
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default VirtualTabularData;