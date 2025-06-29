"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart3, Table as TableIcon } from "lucide-react"
import VirtualTabularData from "./VirtualTabularData"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import "uplot/dist/uPlot.min.css"
import Uplot from "./Uplot"
import { chartData, chartConfig } from "@/store/lineChartStore"

export default function ToolTipChart() {
  const [timeRange, setTimeRange] = React.useState("90d")
  // const [selectedKeys, setSelectedKeys] = React.useState(Object.keys(chartConfig)[])
  const [loadedKeys, setLoadedKeys] = React.useState(Object.keys(chartConfig).slice(0,1))
  const [yAxisMax, setYAxisMax] = React.useState(undefined)
  const [viewMode, setViewMode] = React.useState('chart')
  
  // Filter data based on time range and zoom
  const filteredData = React.useMemo(() => {
    let filtered = chartData.filter((item) => {
      const date = new Date(item.date)
      // const referenceDate = new Date("2024-06-30")
      // let daysToSubtract = 90
      // if (timeRange === "30d") daysToSubtract = 30
      // else if (timeRange === "7d") daysToSubtract = 7
      // const startDate = new Date(referenceDate)
      // startDate.setDate(startDate.getDate() - daysToSubtract)
      // return date >= startDate
      return date;
    })

    return filtered
  }, [timeRange, viewMode])

  return (
    <Card className="p-0 col-span-2 border-none shadow-none">
      <CardHeader className="flex items-center gap-2 space-y-0 py-1 sm:flex-row px-2 border-b">
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
          {/* <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex">
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl bg-background">
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
            </SelectContent>
          </Select> */}
        </div>
      </CardHeader>

      <CardContent className="p-0 overflow-auto">
        {viewMode === 'chart' ? (
          <div className="grid grid-cols-4 gap-2 relative">
            <div className="col-span-4 p-2">
              <Uplot chartData={filteredData} chartConfig={chartConfig} loadedKeys={loadedKeys} yAxisMax={yAxisMax}/>
            </div>
            <div className="col-span-4 flex flex-col justify-between border-l p-2">
              <div className="space-y-4">
                <VirtualTabularData headers={["Date", ...Object.keys(chartConfig).map(key => chartConfig[key].label)]} data={filteredData}/>
              </div>
            </div>
          </div>
        ) : (
          <VirtualTabularData headers={["Date", ...Object.keys(chartConfig).map(key => chartConfig[key].label)]} data={filteredData}/>
        )}
      </CardContent>
    </Card>
  )
}