
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import moment from "moment-timezone";

function getTimezones(): string[] {
  return moment.tz.names();
}

function formatTimezoneWithOffset(timezone: string): string {
  const offset = moment.tz(timezone).format('Z');
  const abbreviation = moment.tz(timezone).format('z');
  return `${timezone.replace(/_/g, ' ')} (UTC${offset})`;
}

const TimezoneSelector = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [tz, setTz] = useState(moment.tz.guess());

  const zones = getTimezones().filter(z =>
    z.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex items-center bg-[#222324] text-[#96ffbc] border border-[#03bd4d40] px-3 py-1.5 text-sm rounded-md w-[200px] h-9 hover:bg-[#232324] transition-colors font-medium"
              aria-label="Select Timezone"
            >
              <span className="flex-1 text-left truncate">
                {tz.replace(/_/g, ' ')}
              </span>
              <span className="ml-2 text-xs text-[#aaa] flex-shrink-0">
                {moment.tz(tz).format('Z')}
              </span>
              <ChevronDown size={14} className="ml-1 flex-shrink-0" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-2 w-[300px] bg-[#191a1b] border border-[#03bd4d70] rounded-md shadow-lg z-[1000] mt-1">
            <input
              className="w-full mb-2 px-2 py-1.5 bg-[#202223] text-sm rounded-md border border-[#03bd4d40] focus:border-[#03bd4d80] text-white h-9"
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
                  onClick={() => {
                    setTz(zone);
                    setOpen(false);
                  }}
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
