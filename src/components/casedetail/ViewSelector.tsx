
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ViewData {
  [key: string]: Array<{ label: string; value: string; count: number }>;
}

const ViewSelector: React.FC = () => {
  const [selectedView, setSelectedView] = useState<string>('view_1');

  const viewData: ViewData = {
    view_1: [
      { label: '192.168.1.100', value: '192.168.1.100', count: 1245 },
      { label: '192.168.1.101', value: '192.168.1.101', count: 892 },
      { label: '192.168.1.102', value: '192.168.1.102', count: 634 },
      { label: '10.0.0.45', value: '10.0.0.45', count: 423 },
      { label: '10.0.0.46', value: '10.0.0.46', count: 312 }
    ],
    view_2: [
      { label: '172.16.0.10', value: '172.16.0.10', count: 2156 },
      { label: '172.16.0.11', value: '172.16.0.11', count: 1834 },
      { label: '172.16.0.12', value: '172.16.0.12', count: 1245 },
      { label: '192.168.50.1', value: '192.168.50.1', count: 987 }
    ],
    view_3: [
      { label: '203.0.113.10', value: '203.0.113.10', count: 3421 },
      { label: '203.0.113.11', value: '203.0.113.11', count: 2847 },
      { label: '198.51.100.5', value: '198.51.100.5', count: 1956 },
      { label: '198.51.100.6', value: '198.51.100.6', count: 1432 },
      { label: '198.51.100.7', value: '198.51.100.7', count: 876 }
    ]
  };

  const currentData = viewData[selectedView] || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Analysis</CardTitle>
        <CardDescription>View different network traffic perspectives</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Select View</label>
          <Select value={selectedView} onValueChange={setSelectedView}>
            <SelectTrigger>
              <SelectValue placeholder="Select a view" />
            </SelectTrigger>
            <SelectContent className='bg-background'>
              <SelectItem value="view_1">View 1 - Internal Network</SelectItem>
              <SelectItem value="view_2">View 2 - DMZ Network</SelectItem>
              <SelectItem value="view_3">View 3 - External Traffic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="border rounded-lg">
          <div className="grid grid-cols-2 gap-0 bg-muted/50 p-3 border-b font-medium text-sm">
            <div>IP Address</div>
            <div className="text-right">Count</div>
          </div>
          <div className="max-h-64 overflow-auto">
            {currentData.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-0 p-3 border-b last:border-b-0 hover:bg-muted/25">
                <div className="font-mono text-sm">{item.label}</div>
                <div className="text-right font-medium">{item.count.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewSelector;
