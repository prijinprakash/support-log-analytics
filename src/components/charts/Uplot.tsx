import React, { useRef, useEffect, useState, useCallback } from 'react';
import uPlot from 'uplot';
import 'uplot/dist/uPlot.min.css';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { BarChart3, Table as TableIcon } from "lucide-react";
import VirtualTabularData from "../VirtualTabularData";

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
]

const chartConfig = {
  desktop: { label: "Desktop", color: "#3b82f6" },
  mobile: { label: "Mobile", color: "#10b981" },
}

export default function Uplot() {
  const chartRef = useRef<HTMLDivElement>(null);
  const plotRef = useRef<uPlot | null>(null);
  
  const [timeRange, setTimeRange] = useState("90d");
  const [selectedKeys, setSelectedKeys] = useState(["desktop", "mobile"]);
  const [loadedKeys, setLoadedKeys] = useState(["desktop", "mobile"]);
  const [hoverData, setHoverData] = useState<any>(null);
  const [yAxisMax, setYAxisMax] = useState<number | undefined>(undefined);
  const [viewMode, setViewMode] = useState<'chart' | 'table'>('chart');

  const getFilteredData = () => {
    let filtered = chartData.filter((item) => {
      const date = new Date(item.date)
      const referenceDate = new Date("2024-06-30")
      let daysToSubtract = 90
      if (timeRange === "30d") daysToSubtract = 30
      else if (timeRange === "7d") daysToSubtract = 7
      const startDate = new Date(referenceDate)
      startDate.setDate(startDate.getDate() - daysToSubtract)
      return date >= startDate
    })
    return filtered
  }

  // Memoize the setCursor callback to prevent re-renders from breaking selection
  const setCursorCallback = useCallback((u: uPlot) => {
    const idx = u.cursor.idx;
    if (idx != null && idx >= 0 && idx < filteredData.length) {
      const dataPoint = filteredData[idx];
      // Use requestAnimationFrame to defer state update and prevent interference
      requestAnimationFrame(() => {
        setHoverData(dataPoint);
      });
    } else {
      requestAnimationFrame(() => {
        setHoverData(null);
      });
    }
  }, [filteredData]);

  useEffect(() => {
    if (!chartRef.current) return;

    const filteredData = getFilteredData();
    
    // Prepare data for uPlot
    const timestamps = filteredData.map(d => new Date(d.date).getTime() / 1000);
    const desktopData = loadedKeys.includes("desktop") ? filteredData.map(d => d.desktop) : null;
    const mobileData = loadedKeys.includes("mobile") ? filteredData.map(d => d.mobile) : null;
    
    const data: (number[] | null)[] = [timestamps];
    const series: uPlot.Series[] = [{
      label: "Time"
    }];

    if (desktopData) {
      data.push(desktopData);
      series.push({
        label: "Desktop",
        stroke: "#3b82f6",
        fill: "#3b82f610",
        width: 2,
      });
    }

    if (mobileData) {
      data.push(mobileData);
      series.push({
        label: "Mobile", 
        stroke: "#10b981",
        fill: "#10b98110",
        width: 2,
      });
    }

    const opts: uPlot.Options = {
      width: chartRef.current.clientWidth,
      height: 300,
      series,
      axes: [
        {
          space: 80,
          incrs: [
            1, 2, 5, 10, 15, 30,
            60, 120, 300, 600, 900, 1800, 3600, 7200, 14400, 28800, 57600, 86400,
            172800, 345600, 604800, 1209600, 2419200, 4838400, 9676800, 19353600
          ],
          values: [
            [86400, "{YYYY}-{MM}-{DD}", null, null, null, null, null, null, 1],
            [3600, "{h}{aa}", "\n{YYYY}-{MM}-{DD}", null, null, null, null, null, 1],
            [60, "{h}:{mm}{aa}", "\n{YYYY}-{MM}-{DD}", null, null, null, null, null, 1],
            [1, ":{ss}", "\n{YYYY}-{MM}-{DD} {h}:{mm}{aa}", null, null, null, null, null, 1]
          ]
        },
        {
          space: 60,
          size: 50,
          ...(yAxisMax && { range: [0, yAxisMax] })
        }
      ],
      scales: {
        x: {
          time: true,
        },
        y: {
          auto: !yAxisMax,
          ...(yAxisMax && { range: [0, yAxisMax] })
        }
      },
      cursor: {
        drag: {
          x: true,
          y: false,
        }
      },
      select: {
        show: true,
        left: 0,
        width: 0,
        top: 0,
        height: 0,
      },
      hooks: {
        setCursor: [setCursorCallback],
        setSelect: [
          (u: uPlot) => {
            const sel = u.select;
            if (sel.width > 10) { // Only zoom if selection is meaningful
              const leftTs = u.posToVal(sel.left, 'x');
              const rightTs = u.posToVal(sel.left + sel.width, 'x');
              u.setScale('x', { min: leftTs, max: rightTs });
            }
          }
        ]
      }
    };

    // Clean up existing plot
    if (plotRef.current) {
      plotRef.current.destroy();
    }

    // Create new plot
    plotRef.current = new uPlot(opts, data as any, chartRef.current);

    // Cleanup function
    return () => {
      if (plotRef.current) {
        plotRef.current.destroy();
        plotRef.current = null;
      }
    };
  }, [loadedKeys, timeRange, yAxisMax, setCursorCallback]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (plotRef.current && chartRef.current) {
        plotRef.current.setSize({
          width: chartRef.current.clientWidth,
          height: 300
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredData = getFilteredData();

  return (
    <Card className="pt-0 col-span-2 border-none shadow-none">
      <CardHeader className="flex items-center gap-2 space-y-0 py-1 sm:flex-row px-2">
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2">
            <Label htmlFor="yaxis-max" className="text-sm">Y-axis max</Label>
            <Input
              id="yaxis-max"
              type="number"
              placeholder="Auto"
              value={yAxisMax || ''}
              onChange={(e) => setYAxisMax(e.target.value ? Number(e.target.value) : undefined)}
              className="w-20 h-8"
            />
          </div>
          <div className="flex rounded-md border">
            <Button
              variant={viewMode === 'chart' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('chart')}
              className="rounded-r-none h-8"
            >
              <BarChart3 size={16} />
            </Button>
            <Button
              variant={viewMode === 'table' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('table')}
              className="rounded-l-none h-8"
            >
              <TableIcon size={16} />
            </Button>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex">
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl bg-background">
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="p-0 h-[350px] overflow-auto">
        {viewMode === 'chart' ? (
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 p-2">
              <div ref={chartRef} className="w-full" />
            </div>
            
            <div className="col-span-1 flex flex-col justify-between border-l p-2">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground text-left font-medium">
                  {hoverData?.date
                    ? new Date(hoverData.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    : "timestamp"}
                </div>

                <div>
                  {Object.entries(chartConfig).map(([key, { label, color }]) => {
                    const checked = selectedKeys.includes(key);
                    const isLoaded = loadedKeys.includes(key);
                    const value = hoverData?.[key];
                    return (
                      <label key={key} className="flex items-center justify-between transition-colors p-1 rounded">
                        <div className="flex items-center space-x-2 cursor-pointer">
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(checked) => {
                              setSelectedKeys((prev) =>
                                checked ? [...prev, key] : prev.filter((k) => k !== key)
                              );
                            }}
                          />
                          <span className="font-normal text-sm lowercase break-words" style={{ color }}>{label}</span>
                        </div>
                        {checked && isLoaded && hoverData && (
                          <span className="text-xs font-normal text-muted-foreground">{value}</span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setLoadedKeys([...selectedKeys])}
                  disabled={JSON.stringify(loadedKeys) === JSON.stringify(selectedKeys) || !selectedKeys.length}
                  className="w-full rounded bg-primary text-white px-4 py-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Load
                </button>
                
                <button
                  onClick={() => {
                    if (plotRef.current) {
                      plotRef.current.setScale('x', { min: null, max: null });
                    }
                  }}
                  className="w-full rounded bg-secondary text-secondary-foreground px-4 py-2 hover:bg-secondary/80 text-sm"
                >
                  Reset Zoom
                </button>
              </div>
            </div>
          </div>
        ) : (
          <VirtualTabularData headers={["Date", "Desktop", "Mobile"]} data={filteredData}/>
        )}
      </CardContent>
    </Card>
  );
}
