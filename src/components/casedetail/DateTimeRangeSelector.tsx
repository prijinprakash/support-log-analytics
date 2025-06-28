
import React, { useState } from 'react';
import { format } from "date-fns";
import { Calendar as CalendarIcon, RefreshCcw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface DateTimeRange {
  from: Date | null;
  to: Date | null;
}

interface DateTimeRangeSelectorProps {
  value: DateTimeRange;
  onChange: (range: DateTimeRange) => void;
  onRefresh: () => void;
}

const DateTimeRangeSelector: React.FC<DateTimeRangeSelectorProps> = ({
  value,
  onChange,
  onRefresh
}) => {
  const [fromTime, setFromTime] = useState("00:00:00");
  const [toTime, setToTime] = useState("23:59:59");

  const handleFromDateSelect = (date: Date | undefined) => {
    if (date) {
      const [hours, minutes, seconds] = fromTime.split(':').map(Number);
      const newDate = new Date(date);
      newDate.setHours(hours, minutes, seconds);
      onChange({ ...value, from: newDate });
    }
  };

  const handleToDateSelect = (date: Date | undefined) => {
    if (date) {
      const [hours, minutes, seconds] = toTime.split(':').map(Number);
      const newDate = new Date(date);
      newDate.setHours(hours, minutes, seconds);
      onChange({ ...value, to: newDate });
    }
  };

  const handleFromTimeChange = (time: string) => {
    setFromTime(time);
    if (value.from) {
      const [hours, minutes, seconds] = time.split(':').map(Number);
      const newDate = new Date(value.from);
      newDate.setHours(hours, minutes, seconds);
      onChange({ ...value, from: newDate });
    }
  };

  const handleToTimeChange = (time: string) => {
    setToTime(time);
    if (value.to) {
      const [hours, minutes, seconds] = time.split(':').map(Number);
      const newDate = new Date(value.to);
      newDate.setHours(hours, minutes, seconds);
      onChange({ ...value, to: newDate });
    }
  };

  const formatDateTime = (date: Date | null) => {
    if (!date) return "Select date & time";
    return `${format(date, "MMM dd, yyyy")} ${format(date, "HH:mm:ss")}`;
  };

  const quickRanges = [
    { label: "Last 5m", value: 5 * 60 * 1000 },
    { label: "Last 15m", value: 15 * 60 * 1000 },
    { label: "Last 30m", value: 30 * 60 * 1000 },
    { label: "Last 1h", value: 60 * 60 * 1000 },
    { label: "Last 3h", value: 3 * 60 * 60 * 1000 },
    { label: "Last 6h", value: 6 * 60 * 60 * 1000 },
    { label: "Last 12h", value: 12 * 60 * 60 * 1000 },
    { label: "Last 24h", value: 24 * 60 * 60 * 1000 },
  ];

  const handleQuickRange = (milliseconds: number) => {
    const to = new Date();
    const from = new Date(to.getTime() - milliseconds);
    onChange({ from, to });
    setFromTime(format(from, "HH:mm:ss"));
    setToTime(format(to, "HH:mm:ss"));
  };

  return (
    <div className="flex items-center gap-2 bg-muted/30 border rounded-md p-1">
      {/* Quick Time Ranges */}
      <div className="flex items-center gap-1">
        {quickRanges.slice(0, 4).map((range) => (
          <Button
            key={range.label}
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs font-normal hover:bg-background"
            onClick={() => handleQuickRange(range.value)}
          >
            {range.label}
          </Button>
        ))}
      </div>

      <div className="h-6 w-px bg-border" />

      {/* Custom Range Selector */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "h-7 px-3 text-xs font-normal justify-start hover:bg-background",
              (!value.from || !value.to) && "text-muted-foreground"
            )}
          >
            <Clock className="mr-2 h-3 w-3" />
            {value.from && value.to
              ? `${formatDateTime(value.from)} to ${formatDateTime(value.to)}`
              : "Custom time range"
            }
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[480px] p-4" align="end">
          <div className="space-y-4">
            <div className="text-sm font-medium">Select time range</div>
            
            {/* Quick ranges in popover */}
            <div className="grid grid-cols-4 gap-2">
              {quickRanges.map((range) => (
                <Button
                  key={range.label}
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={() => handleQuickRange(range.value)}
                >
                  {range.label}
                </Button>
              ))}
            </div>

            <div className="h-px bg-border" />

            {/* Custom date/time selection */}
            <div className="grid grid-cols-2 gap-4">
              {/* From DateTime */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">From</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full h-8 justify-start text-xs font-normal"
                    >
                      <CalendarIcon className="mr-2 h-3 w-3" />
                      {value.from ? format(value.from, "MMM dd, yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={value.from || undefined}
                      onSelect={handleFromDateSelect}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <Input
                  type="time"
                  step="1"
                  value={fromTime}
                  onChange={(e) => handleFromTimeChange(e.target.value)}
                  className="h-8 text-xs"
                />
              </div>

              {/* To DateTime */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">To</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full h-8 justify-start text-xs font-normal"
                    >
                      <CalendarIcon className="mr-2 h-3 w-3" />
                      {value.to ? format(value.to, "MMM dd, yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={value.to || undefined}
                      onSelect={handleToDateSelect}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <Input
                  type="time"
                  step="1"
                  value={toTime}
                  onChange={(e) => handleToTimeChange(e.target.value)}
                  className="h-8 text-xs"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onChange({ from: null, to: null })}
              >
                Clear
              </Button>
              <Button
                size="sm"
                onClick={onRefresh}
                className="bg-primary hover:bg-primary/90"
              >
                Apply time range
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <div className="h-6 w-px bg-border" />

      {/* Refresh Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onRefresh}
        className="h-7 w-7 p-0 hover:bg-background"
        title="Refresh"
      >
        <RefreshCcw className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default DateTimeRangeSelector;
