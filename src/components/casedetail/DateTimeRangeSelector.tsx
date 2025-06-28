
import React, { useState } from 'react';
import { format } from "date-fns";
import { Calendar as CalendarIcon, RefreshCcw } from "lucide-react";
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

  return (
    <div className="flex items-center gap-2">
      {/* From Date/Time */}
      <div className="flex items-center gap-1">
        <span className="text-sm text-muted-foreground">From:</span>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[140px] justify-start text-left font-normal",
                !value.from && "text-muted-foreground"
              )}
              size="sm"
            >
              <CalendarIcon className="mr-2 h-3 w-3" />
              {value.from ? format(value.from, "MMM dd") : "Select date"}
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
          className="w-[100px] text-xs"
          size="sm"
        />
      </div>

      {/* To Date/Time */}
      <div className="flex items-center gap-1">
        <span className="text-sm text-muted-foreground">To:</span>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[140px] justify-start text-left font-normal",
                !value.to && "text-muted-foreground"
              )}
              size="sm"
            >
              <CalendarIcon className="mr-2 h-3 w-3" />
              {value.to ? format(value.to, "MMM dd") : "Select date"}
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
          className="w-[100px] text-xs"
          size="sm"
        />
      </div>

      {/* Refresh Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={onRefresh}
        className="ml-2"
      >
        <RefreshCcw className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default DateTimeRangeSelector;
