
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

const TABS_HEIGHT = 44; // px to match header

const TabNavigation = () => {
  const [tabs, setTabs] = useState(initialTabs);
  const [activeTab, setActiveTab] = useState(initialTabs[0].id);

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

  // Calculate dynamic tab width based on number of tabs
  const getTabWidth = () => {
    if (tabs.length <= 4) return "min-w-[90px] max-w-[180px]";
    if (tabs.length <= 6) return "min-w-[70px] max-w-[140px]";
    if (tabs.length <= 8) return "min-w-[60px] max-w-[120px]";
    return "min-w-[50px] max-w-[100px]";
  };

  return (
    <div className="w-full bg-[#09090b] border-b border-[#27272a]">
      <div
        className={cn(
          "w-full flex items-center px-4",
          "bg-[#09090b] border-t border-[#27272a]"
        )}
        style={{ minHeight: TABS_HEIGHT, height: TABS_HEIGHT }}
      >
        {/* Title */}
        <div className="flex items-center min-w-[70px] h-full pr-4">
          <span className="text-lg font-semibold text-white tracking-tight">
            Cases
          </span>
        </div>
        {/* Tabs */}
        <div
          className={cn(
            "flex items-center gap-0 flex-1 min-w-0 h-full overflow-hidden"
          )}
          style={{
            minHeight: TABS_HEIGHT,
            height: TABS_HEIGHT,
          }}
        >
          {tabs.length === 0 ? (
            <div className="flex items-center h-full text-[#a1a1aa] text-sm px-4 w-full">
              No cases open.
            </div>
          ) : (
            tabs.map((tab, i) => (
              <div
                key={tab.id}
                className={cn(
                  "group flex items-center px-3 py-0",
                  activeTab === tab.id
                    ? "bg-[#18181b] text-[#22c55e] border-b-2 border-[#22c55e] z-10"
                    : "bg-transparent text-[#a1a1aa] hover:bg-[#18181b]",
                  "rounded-t-md mr-1 transition-all cursor-pointer h-[32px]",
                  "truncate",
                  getTabWidth()
                )}
                style={{
                  flex: tabs.length > 4 ? "1 1 0px" : "0 0 auto",
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
                  className="ml-2 p-0 h-5 w-5 opacity-70 hover:opacity-100 text-[#a1a1aa] hover:text-[#ef4444] cursor-pointer transition rounded focus:outline-none focus:ring-0"
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
        <div className="flex flex-0 items-center h-full min-w-[110px] justify-end pl-4">
          <Button
            onClick={addTab}
            variant="outline"
            className="bg-[#09090b] border border-[#22c55e]/70 text-[#22c55e] hover:bg-[#22c55e]/20 transition h-8 px-3 rounded flex items-center whitespace-nowrap"
            aria-label="Open new tab"
            style={{ alignSelf: 'center' }}
          >
            <Plus size={16} />
            <span className="ml-1 text-xs">New case</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
