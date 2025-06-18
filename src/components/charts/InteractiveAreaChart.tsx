"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, Dot, ResponsiveContainer, Tooltip, YAxis } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart3, Table as TableIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

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

export function InteractiveAreaChart() {
  const [timeRange, setTimeRange] = React.useState("90d")
  const [selectedKeys, setSelectedKeys] = React.useState(["desktop", "mobile"])
  const [loadedKeys, setLoadedKeys] = React.useState(["desktop", "mobile"])
  const [hoverData, setHoverData] = React.useState(null)
  const [yAxisMax, setYAxisMax] = React.useState<number | undefined>(undefined)
  const [viewMode, setViewMode] = React.useState<'chart' | 'table'>('chart')
  
  // Zoom functionality state
  const [zoomDomain, setZoomDomain] = React.useState(null)
  const [isSelecting, setIsSelecting] = React.useState(false)
  const [selectionStart, setSelectionStart] = React.useState(null)
  const [selectionEnd, setSelectionEnd] = React.useState(null)
  const [lastClickTime, setLastClickTime] = React.useState(0)
  
  const chartRef = React.useRef(null)

  // Filter data based on time range and zoom
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

    // Apply zoom filter if zoom domain is set
    if (zoomDomain) {
      filtered = filtered.filter((item) => {
        const date = new Date(item.date)
        return date >= zoomDomain.startDate && date <= zoomDomain.endDate
      })
    }

    return filtered
  }

  const filteredData = getFilteredData()

  // Handle mouse down for selection
  const handleMouseDown = (e) => {
    if (!e.activeLabel) return
    
    const currentTime = Date.now()
    const timeDiff = currentTime - lastClickTime
    
    // Check for double click (within 300ms)
    if (timeDiff < 300) {
      // Double click - reset zoom
      setZoomDomain(null)
      setLastClickTime(0)
      return
    }
    
    setLastClickTime(currentTime)
    setIsSelecting(true)
    setSelectionStart(e.activeLabel)
    setSelectionEnd(e.activeLabel)
  }

  // Handle mouse move during selection
  const handleMouseMove = (e) => {
    if (!e.activePayload) return
    
    setHoverData(e.activePayload[0]?.payload || null)
    
    if (isSelecting && e.activeLabel) {
      setSelectionEnd(e.activeLabel)
    }
  }

  // Handle mouse up to complete selection
  const handleMouseUp = () => {
    if (isSelecting && selectionStart && selectionEnd) {
      const startDate = new Date(selectionStart)
      const endDate = new Date(selectionEnd)
      
      // Ensure start is before end
      const actualStart = startDate <= endDate ? startDate : endDate
      const actualEnd = startDate <= endDate ? endDate : startDate
      
      // Only zoom if there's a meaningful selection (more than 1 day difference)
      if (Math.abs(actualEnd - actualStart) > 24 * 60 * 60 * 1000) {
        setZoomDomain({
          startDate: actualStart,
          endDate: actualEnd
        })
      }
    }
    
    setIsSelecting(false)
    setSelectionStart(null)
    setSelectionEnd(null)
  }

  const handleMouseLeave = () => {
    setHoverData(null)
    if (isSelecting) {
      setIsSelecting(false)
      setSelectionStart(null)
      setSelectionEnd(null)
    }
  }

  return (
    <Card className="pt-0 col-span-2">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-1 sm:flex-row px-2">
        <div className="grid flex-1 gap-1">
          <CardTitle className="text-lg font-medium">
            Area Chart - Interactive {zoomDomain && "(Zoomed)"}
          </CardTitle>
        </div>
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

      <CardContent className="grid grid-cols-3 gap-2 p-0">
        {viewMode === 'chart' ? (
          <>
            <div className="col-span-2 p-2 relative">
              {/* Selection overlay */}
              {isSelecting && selectionStart && selectionEnd && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div 
                    className="absolute bg-blue-200 bg-opacity-30 border border-blue-400 border-dashed"
                    style={{
                      left: `${Math.min(
                        (filteredData.findIndex(d => d.date === selectionStart) / (filteredData.length - 1)) * 100,
                        (filteredData.findIndex(d => d.date === selectionEnd) / (filteredData.length - 1)) * 100
                      )}%`,
                      width: `${Math.abs(
                        (filteredData.findIndex(d => d.date === selectionEnd) / (filteredData.length - 1)) * 100 -
                        (filteredData.findIndex(d => d.date === selectionStart) / (filteredData.length - 1)) * 100
                      )}%`,
                      top: '0',
                      bottom: '0'
                    }}
                  />
                </div>
              )}
              
              <ChartContainer 
                config={chartConfig} 
                className="aspect-auto min-h-[300px] w-full cursor-crosshair"
                ref={chartRef}
              >
                <ResponsiveContainer minHeight={"300px"}>
                  <AreaChart
                    data={filteredData}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                  >
                  <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <Tooltip content={<></>}/>
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }
                  />
                  <YAxis 
                    domain={yAxisMax ? [0, yAxisMax] : ['auto', 'auto']}
                    tickLine={false}
                    axisLine={false}
                  />
                  {loadedKeys.includes("desktop") && (
                    <Area 
                      dataKey="desktop" 
                      type="natural" 
                      fill="url(#fillDesktop)" 
                      stroke="#3b82f6" 
                      stackId="a"
                      activeDot={<Dot fill="#3b82f6" />}
                      isAnimationActive={false}
                    />
                  )}
                  {loadedKeys.includes("mobile") && (
                    <Area 
                      dataKey="mobile" 
                      type="natural" 
                      fill="url(#fillMobile)" 
                      stroke="#10b981" 
                      stackId="a"
                      activeDot={<Dot fill="#10b981" />}
                      isAnimationActive={false}
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
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
                    const checked = selectedKeys.includes(key)
                    const isLoaded = loadedKeys.includes(key)
                    const value = hoverData?.[key]
                    return (
                      <label key={key} className="flex items-center justify-between transition-colors p-1 rounded">
                        <div className="flex items-center space-x-2 cursor-pointer">
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(checked) => {
                              setSelectedKeys((prev) =>
                                checked ? [...prev, key] : prev.filter((k) => k !== key)
                              )
                            }}
                          />
                          <span className="font-normal text-sm lowercase break-words" style={{ color }}>{label}</span>
                        </div>
                        {checked && isLoaded && hoverData && (
                          <span className="text-xs font-normal text-muted-foreground">{value}</span>
                        )}
                      </label>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-2">
                {zoomDomain && (
                  <div className="text-xs text-muted-foreground">
                    <div>Zoomed Range:</div>
                    <div>{zoomDomain.startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</div>
                    <div>to</div>
                    <div>{zoomDomain.endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</div>
                  </div>
                )}
                
                <button
                  onClick={() => setLoadedKeys([...selectedKeys])}
                  disabled={JSON.stringify(loadedKeys) === JSON.stringify(selectedKeys) || !selectedKeys.length}
                  className="w-full rounded bg-primary text-white px-4 py-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Load
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-3 p-2">
            <div className="h-[350px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Desktop</TableHead>
                    <TableHead className="text-right">Mobile</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-sm">
                        {new Date(row.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </TableCell>
                      <TableCell className="text-right font-mono">{row.desktop}</TableCell>
                      <TableCell className="text-right font-mono">{row.mobile}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
