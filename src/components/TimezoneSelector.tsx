
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState, useEffect, useMemo, useCallback } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import moment from "moment-timezone";

// function formatTimezoneWithOffset(timezone: string): string {
//   const offset = moment.tz(timezone).format('Z');
//   const abbreviation = moment.tz(timezone).format('z');
//   return `${timezone.replace(/_/g, ' ')} (UTC${offset})`;
// }

const TimezoneSelector = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [tz, setTz] = useState("");

  useEffect(() => {
    // Load timezone from localStorage or default to user's local timezone
    const savedTimezone = localStorage.getItem('selectedTimezone');
    const defaultTimezone = savedTimezone || moment.tz.guess();
    setTz(defaultTimezone);
  }, []);

  const handleTimezoneChange = useCallback((newTimezone: string) => {
    setTz(newTimezone);
    localStorage.setItem('selectedTimezone', newTimezone);
    setOpen(false);
  }, []);

  const zones = useMemo(() => moment.tz.names().filter(z =>
    z.toLowerCase().includes(search.toLowerCase())
  ), [search]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex items-center bg-lightbackground text-white border border-headerborder px-3 py-1.5 text-sm rounded-md w-[300px] h-9 hover:bg-headerborder transition-colors font-medium"
              aria-label="Select Timezone"
            >
              <Globe className="w-4 h-4 mr-2" />
              <span className="flex-1 text-left truncate">
                {tz.replace(/_/g, ' ')}
              </span>
              <span className="ml-2 text-xs text-[#aaa] flex-shrink-0">
                {tz && moment.tz(tz).format('Z')}
              </span>
              <ChevronDown size={14} className="ml-1 flex-shrink-0" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-2 w-[300px] bg-[#191a1b] border border-[#03bd4d70] rounded-md shadow-lg z-[1000] mt-1">
            <input
              className="w-full mb-2 px-2 py-1.5 bg-[#202223] text-sm rounded-md border border-primary focus:border-[#03bd4d80] text-white h-9"
              placeholder="Search timezone..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className="max-h-56 overflow-auto">
              {zones.length === 0 && (
                <div className="py-6 text-center text-[#bbb] text-sm">No matches</div>
              )}
              {zones.map((zone) => (
                <div
                  key={zone}
                  className={`px-2 py-2 rounded-md cursor-pointer hover:bg-[#03bd4d30] text-white text-sm ${tz === zone ? "bg-[#03bd4d60] font-medium" : ""}`}
                  onClick={() => handleTimezoneChange(zone)}
                >
                  <div className="flex justify-between items-center">
                    <span className="truncate">{zone.replace(/_/g, ' ')}</span>
                    <span className="ml-2 text-xs text-[#aaa] flex-shrink-0">
                      {moment.tz(zone).format('Z')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </TooltipTrigger>
      <TooltipContent>
        <span className="text-xs">Select timezone</span>
      </TooltipContent>
    </Tooltip>
  );
};

export default TimezoneSelector;
