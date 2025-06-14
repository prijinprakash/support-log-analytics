
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const RECENT_SEARCHES = [
  "React Tailwind",
  "Shadcn UI",
  "Algolia Search Clone",
];

export default function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [mode, setMode] = useState("normal");
  const [searchValue, setSearchValue] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="rounded-xl p-0 border-0 max-w-[430px] bg-[#161617] text-white shadow-xl"
        style={{ overflow: "visible" }}
      >
        <div className="p-6 pt-4">
          <div className="flex items-center justify-between mb-4">
            <RadioGroup
              value={mode}
              onValueChange={setMode}
              className="flex flex-row gap-6"
            >
              <label className="flex items-center gap-2 cursor-pointer text-base">
                <RadioGroupItem
                  value="normal"
                  id="normal-search"
                  className="border-[#222] bg-[#232324] checked:bg-green-500 checked:border-green-500"
                />
                <span
                  className={
                    mode === "normal"
                      ? "font-semibold text-white"
                      : "text-[#bbb]"
                  }
                >
                  Normal Search
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-base">
                <RadioGroupItem
                  value="advanced"
                  id="advanced-search"
                  className="border-[#222] bg-[#232324] checked:bg-green-500 checked:border-green-500"
                />
                <span
                  className={
                    mode === "advanced"
                      ? "font-semibold text-white"
                      : "text-[#bbb]"
                  }
                >
                  Advanced Search
                </span>
              </label>
            </RadioGroup>
            {/* Close button, just in case */}
            <DialogClose asChild>
              <button
                className="text-[#888] hover:text-white p-2 rounded transition-colors -mr-2"
                aria-label="Close search dialog"
              >
                <X size={20} />
              </button>
            </DialogClose>
          </div>
          {/* Search bar inside dialog */}
          <Input
            autoFocus
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Enter search term..."
            className="w-full h-12 rounded-lg bg-[#232324] border border-[#28282a] text-white text-base px-4 mb-6 ring-0 placeholder:text-[#888] focus:outline-none focus:ring-0 shadow-none"
          />

          <div className="text-[#bbb] text-sm font-semibold mb-2 mt-4">
            Recent Searches
          </div>
          <div className="flex flex-col rounded-lg overflow-hidden bg-[#1a1a1c]">
            {RECENT_SEARCHES.map(r => (
              <div
                key={r}
                className="px-4 py-3 text-base cursor-pointer hover:bg-[#232324] first:rounded-t-lg last:rounded-b-lg transition select-none"
                style={{
                  background:
                    searchValue.trim() === "" && r === RECENT_SEARCHES[0]
                      ? "#232324"
                      : "transparent",
                  color:
                    searchValue.trim() === "" && r === RECENT_SEARCHES[0]
                      ? "#fff"
                      : "#fff",
                  fontWeight:
                    searchValue.trim() === "" && r === RECENT_SEARCHES[0]
                      ? 600
                      : 400,
                }}
                tabIndex={0}
                onClick={() => setSearchValue(r)}
              >
                {r}
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
