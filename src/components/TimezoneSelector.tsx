
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

function getTimezones(): string[] {
  return Intl.supportedValuesOf("timeZone") || [
    "UTC", "America/New_York", "Europe/London", "Asia/Kolkata", "Asia/Singapore"
  ];
}

const TimezoneSelector = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [tz, setTz] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

  const zones = getTimezones().filter(z =>
    z.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center bg-[#212223] text-[#96ffbc] border border-[#03bd4d40] px-3 py-1 text-xs rounded min-w-[160px] hover:scale-105 transition-all font-medium"
          aria-label="Select Timezone"
        >
          <span className="flex-1 text-left truncate">{tz.replace("_", " ")}</span>
          <span className="ml-2 text-xs text-[#aaa]">
            {Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "short" }).format(new Date()).split(" ").at(-1)}
          </span>
          <ChevronDown size={12} className="ml-1" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-2 min-w-[260px] bg-[#191a1b] border border-[#03bd4d70] rounded shadow-lg z-[1000] mt-1">
        <input
          className="w-full mb-2 px-2 py-1 bg-[#202223] text-sm rounded border border-[#03bd4d40] focus:border-[#03bd4d80] text-white"
          placeholder="Search timezone ..."
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
              className={`px-2 py-1 rounded cursor-pointer hover:bg-[#03bd4d30] text-white ${tz === zone ? "bg-[#03bd4d60] font-medium" : ""}`}
              onClick={() => {
                setTz(zone);
                setOpen(false);
              }}
            >
              {zone}
            </div>
          ))}
        </div>
      </PopoverContent>
      <Tooltip>
        <span className="text-xs">Select timezone</span>
      </Tooltip>
    </Popover>
  );
};

export default TimezoneSelector;
