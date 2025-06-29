"use client"

import * as React from "react"
import uPlot from "uplot"
import "uplot/dist/uPlot.min.css"

export default function Uplot({chartData, chartConfig, loadedKeys, yAxisMax, chartType="line", customHooks={}}) {
  console.log(customHooks)
  const chartRef = React.useRef(null)
  const plotRef = React.useRef(null)

  // Convert data to uPlot format
  const getUPlotData = React.useCallback(() => {
    const timestamps = chartData.map(d => new Date(d.date).getTime() / 1000)
    const data = [timestamps]
    loadedKeys.forEach(key => data.push(chartData.map(d => d[key])))
    return data
  }, [chartData, loadedKeys])

  const getUPlotOptions = React.useCallback(() => {
    const series = [{}] // First series is always the x-axis (time)
    
    Object.keys(chartConfig).forEach(key => loadedKeys.includes(key) ? series.push(
      {
        label: chartConfig[key].label,
        stroke: chartConfig[key].color,
        width: 1,
        show: true,
      }
    ): null)

    return {
      // id: 'my-chart',
      width: chartRef.current?.clientWidth || 600,
      // class: ["selection:bg-fuchsia-300", "selection:text-fuchsia-900", "h-[300px]"],
      // class: "uplot-styles",
      padding: [10,0,0,10],
      height: 400,
      series,
      legend: {
        show: false
      },
      scales: {
        x: {
          time: true,
        },
        y: {
          range: yAxisMax ? [0, yAxisMax] : [null, null]
        }
      },
      axes: [
        {
          stroke: "#64748b",
          grid: {
            show: false,
            stroke: "#e2e8f0",
            width: 1
          }
        },
        {
          stroke: "#64748b",
          grid: {
            show: false,
            stroke: "#e2e8f0",
            width: 1,
          },
          values: (u, vals) => vals.map(v => v.toExponential(1)),
        }
      ],
      cursor: {
        show: true,
        x: true,
        y: true,
        lock: chartType === "tooltip",
      },
      select: {
        show: true,
        over:true,
        left: 0,
        width: 0,
        top: 0,
        height: 0,
      },
      hooks: customHooks
    }
  }, [loadedKeys, yAxisMax])

  // Handle chart creation and updates
  React.useEffect(() => {
    if (!chartRef.current) return

    const data = getUPlotData()
    const options = getUPlotOptions()

    // Destroy existing plot
    if (plotRef.current) {
      plotRef.current.destroy()
      plotRef.current = null
    }

    // Clear the container
    if (chartRef.current) {
      chartRef.current.innerHTML = ''
    }

    try {
      // Create new plot
      plotRef.current = new uPlot(options, data, chartRef.current)
      console.log('uPlot created successfully')
    } catch (error) {
      console.error('Error creating uPlot:', error)
    }

    // Cleanup function
    return () => {
      if (plotRef.current) {
        plotRef.current.destroy()
        plotRef.current = null
      }
    }
  }, [getUPlotData, getUPlotOptions])

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (plotRef.current && chartRef.current) {
        plotRef.current.setSize({
          width: chartRef.current.clientWidth,
          height: 300
        })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div ref={chartRef} className="w-auto h-auto" />
      <div className="text-xs text-muted-foreground p-2">
        💡 Click and drag to zoom • Double-click to reset zoom
      </div>
    </>
  )
}