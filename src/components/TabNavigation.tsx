
import { X, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
};

const initialTabs: Tab[] = [
  { id: "1", label: "00123456" },
  { id: "2", label: "00987654" },
  { id: "3", label: "00345621" },
];

const TABS_HEIGHT = 44; // px

const TabNavigation = () => {
  const [tabs, setTabs] = useState<Tab[]>(initialTabs);
  const [activeTab, setActiveTab] = useState<string>(initialTabs[0].id);

  const addTab = () => {
    const newLabel = String(Math.floor(10000000 + Math.random() * 90000000));
    const newId = Date.now().toString();
    setTabs([...tabs, { id: newId, label: newLabel }]);
    setActiveTab(newId);
  };

  const closeTab = (id: string) => {
    const idx = tabs.findIndex(t => t.id === id);
    let newTabs = tabs.filter(t => t.id !== id);
    let newActive: string | undefined = activeTab;
    if (activeTab === id) {
      if (newTabs[idx]) newActive = newTabs[idx].id;
      else if (idx > 0) newActive = newTabs[idx - 1].id;
      else newActive = newTabs[0]?.id;
    }
    setTabs(newTabs);
    if (newActive) setActiveTab(newActive);
  };

  return (
    <div
      className={cn(
        "w-full border-b border-[#222] px-4 bg-[#18191b] select-none",
        "flex items-end", // align at bottom for tab bar look
        "relative",
      )}
      style={{ minHeight: TABS_HEIGHT, height: TABS_HEIGHT, paddingBottom: 0 }}
    >
      {/* Tabs list with overflow */}
      <div
        className={cn(
          "flex items-end gap-0 overflow-x-auto scrollbar-thin scrollbar-thumb-[#23282d] scrollbar-track-transparent flex-1 min-w-0 h-full"
        )}
        style={{ minHeight: TABS_HEIGHT, height: TABS_HEIGHT }}
      >
        {tabs.length === 0 ? (
          <div className="flex items-center h-full text-[#fff4] text-sm px-4 w-full">
            No cases open.
          </div>
        ) : (
          tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                "group flex items-center px-2 sm:px-3 py-0 max-w-[180px] min-w-[80px] text-xs sm:text-sm",
                activeTab === tab.id
                  ? "bg-[#212223] text-[#03bd4d] border-b-2 border-[#03bd4d] z-10"
                  : "bg-transparent text-[#aaa] hover:bg-[#16191d]",
                "flex-shrink-1 flex-grow max-w-[180px] min-w-[80px] rounded-t-md mr-1 transition-all cursor-pointer",
                "h-[32px]", // tab height
                "truncate"
              )}
              style={{
                flex: "1 1 140px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }}
              onClick={() => setActiveTab(tab.id)}
              title={tab.label}
            >
              <span className="truncate">{tab.label}</span>
              <Button
                aria-label="Close tab"
                variant="ghost"
                size="icon"
                tabIndex={-1}
                className="ml-2 p-0 h-5 w-5 opacity-70 hover:opacity-100 text-[#888] hover:text-[#fc7a7a] cursor-pointer transition rounded focus:outline-none focus:ring-0"
                onClick={e => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
              >
                <X size={16} />
              </Button>
            </div>
          ))
        )}
      </div>
      {/* New case button right-aligned */}
      <div className="flex-0 flex items-center h-full min-w-[120px] justify-end pl-2">
        <Button
          onClick={addTab}
          variant="outline"
          className="bg-[#191a1d] border border-[#03bd4d70] text-[#03bd4d] hover:bg-[#03bd4d20] transition h-8 px-2 py-1 rounded flex items-center whitespace-nowrap"
          aria-label="Open new tab"
          style={{ alignSelf: 'center' }}
        >
          <Plus size={16} />
          <span className="ml-1 text-xs">New case</span>
        </Button>
      </div>
    </div>
  );
};

export default TabNavigation;
