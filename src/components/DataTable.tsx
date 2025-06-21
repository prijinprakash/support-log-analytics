
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DataTable = () => {
  // Generate dummy tabular data
  const generateTableData = () => {
    const metrics = [
      { metric: "Total Processes", value: "347", status: "Normal", lastUpdated: "2 min ago" },
      { metric: "Active Connections", value: "1,234", status: "High", lastUpdated: "1 min ago" },
      { metric: "Memory Free", value: "8.4 GB", status: "Normal", lastUpdated: "30s ago" },
      { metric: "Disk Usage", value: "67%", status: "Warning", lastUpdated: "1 min ago" },
      { metric: "Load Average", value: "2.45", status: "Normal", lastUpdated: "45s ago" },
      { metric: "Uptime", value: "7d 14h 32m", status: "Normal", lastUpdated: "5 min ago" },
      { metric: "Error Rate", value: "0.02%", status: "Normal", lastUpdated: "2 min ago" },
      { metric: "Response Time", value: "145ms", status: "Good", lastUpdated: "1 min ago" },
    ];
    
    return metrics;
  };

  const data = generateTableData();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'normal':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'good':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="p-1 h-auto text-center">Metric</TableHead>
          <TableHead className="p-1 h-auto text-center">Value</TableHead>
          <TableHead className="p-1 h-auto text-center">Status</TableHead>
          <TableHead className="p-1 h-auto text-center">Last Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {/* {row.map((col, col_index) => 
              <TableCell className="font-medium text-sm p-1 text-center">{col}</TableCell>
            )} */}
            <TableCell className="font-medium text-sm p-1 text-center">{row.metric}</TableCell>
            <TableCell className="font-mono text-sm p-1 text-center">{row.value}</TableCell>
            <TableCell className="p-1 text-center">
              <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getStatusColor(row.status)}`}>
                {row.status}
              </span>
            </TableCell>
            <TableCell className="text-xs text-muted-foreground p-1 text-center">{row.lastUpdated}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
