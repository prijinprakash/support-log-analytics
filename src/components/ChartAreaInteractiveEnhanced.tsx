
"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, Brush, ResponsiveContainer, YAxis } from "recharts"

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

const chartData = [
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

export function ChartAreaInteractiveEnhanced() {
  const [selectedKeys, setSelectedKeys] = React.useState(["desktop", "mobile"])
  const [loadedKeys, setLoadedKeys] = React.useState(["desktop", "mobile"])
  const [hoverData, setHoverData] = React.useState(null)
  const [zoomDomain, setZoomDomain] = React.useState([0, chartData.length - 1])

  const visibleData = chartData.slice(zoomDomain[0], zoomDomain[1] + 1)

  const handleBrushChange = (range) => {
    if (range?.startIndex !== undefined && range?.endIndex !== undefined) {
      setZoomDomain([range.startIndex, range.endIndex])
    }
  }

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-1 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle className="text-lg">Area Chart - Interactive Zoom</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 grid grid-cols-4 gap-2">
        <div className="col-span-3" onDoubleClick={() => setZoomDomain([0, chartData.length - 1])}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={visibleData}
              onMouseMove={({ activePayload }) => setHoverData(activePayload?.[0]?.payload || null)}
              onMouseLeave={() => setHoverData(null)}
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
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
              />
              <YAxis />
              <Tooltip
                contentStyle={{ display: "none" }}
                cursor={{ stroke: "#8884d8", strokeWidth: 1 }}
              />
              {loadedKeys.includes("desktop") && (
                <Area
                  dataKey="desktop"
                  type="monotone"
                  stroke="#3b82f6"
                  fill="url(#fillDesktop)"
                  dot={{ stroke: "#3b82f6", strokeWidth: 2, r: 3 }}
                />
              )}
              {loadedKeys.includes("mobile") && (
                <Area
                  dataKey="mobile"
                  type="monotone"
                  stroke="#10b981"
                  fill="url(#fillMobile)"
                  dot={{ stroke: "#10b981", strokeWidth: 2, r: 3 }}
                />
              )}
              <Brush dataKey="date" height={20} onChange={handleBrushChange} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="col-span-1 flex flex-col justify-between p-2 border-l">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground text-center font-medium">
              {hoverData?.date
                ? new Date(hoverData.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                : "Hover over chart"}
            </div>

            <div className="space-y-2">
              {Object.entries(chartConfig).map(([key, { label, color }]) => {
                const checked = selectedKeys.includes(key)
                const isLoaded = loadedKeys.includes(key)
                const value = hoverData?.[key]
                return (
                  <label key={key} className="flex items-center justify-between transition-colors hover:bg-muted/30 p-1 rounded">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) =>
                          setSelectedKeys((prev) =>
                            e.target.checked
                              ? [...prev, key]
                              : prev.filter((k) => k !== key)
                          )
                        }
                      />
                      <span className="font-medium" style={{ color }}>{label}</span>
                    </div>
                    {checked && isLoaded && hoverData && (
                      <span className="text-sm font-medium text-muted-foreground">{value}</span>
                    )}
                  </label>
                )
              })}
            </div>
          </div>

          <button
            onClick={() => setLoadedKeys([...selectedKeys])}
            disabled={JSON.stringify(loadedKeys) === JSON.stringify(selectedKeys)}
            className="mt-4 w-full rounded bg-primary text-white px-4 py-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Load
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
