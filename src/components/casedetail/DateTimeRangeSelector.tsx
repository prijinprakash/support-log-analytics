
import React from 'react';
import { format } from "date-fns";
import { RefreshCcw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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

  const handleDateTimeChange = (dateTime: string | undefined, fromOrTo: "from" | "to") => {
    if (dateTime) {
      const newDate = new Date(dateTime);
      console.log(newDate)
      fromOrTo === "from" ? onChange({ ...value, from: newDate }) : onChange({ ...value, to: newDate })
    }
  }

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
  };

  return (
    <div className="flex items-center gap-2 bg-muted/30 border rounded-md py-1 min-w-[390px] justify-between">
      {/* Custom Range Selector */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "h-7 px-2 text-sm font-normal justify-start hover:bg-background flex-1 gap-0",
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
        <PopoverContent className="w-[480px] p-4 bg-background" align="start">
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
            <div className="grid grid-cols-2 gap-2">
              {/* From DateTime */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">From</label>
                <input type="datetime-local" value={value.from && value.from.toISOString().split('.')[0]} className='border rounded p-2 text-sm w-full' onChange={(e) => handleDateTimeChange(e.target.value, "from")}/>
              </div>

              {/* To DateTime */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">To</label>
                <input type="datetime-local" value={value.to && value.to.toISOString().split('.')[0]} className='text-sm border rounded p-2 w-full' onChange={(e) => handleDateTimeChange(e.target.value, "to")}/>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div className="flex items-center justify-between gap-2 px-2">
        <div className="h-6 w-px bg-border" />
        <RefreshCcw className="cursor-pointer stroke-muted-foreground hover:stroke-foreground" size={20} onClick={onRefresh} />
        {/* <Loader className="animate-spin cursor-pointer" size={20} onClick={onRefresh} /> */}
      </div>
    </div>
  );
};

export default DateTimeRangeSelector;
