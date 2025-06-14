
import { X, Plus } from "lucide-react";
import { useState } from "react";

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
      className="w-full border-b border-[#222] px-4 bg-[#18191b] select-none"
      style={{ minHeight: TABS_HEIGHT, height: TABS_HEIGHT, display: "flex", alignItems: "flex-end", paddingBottom: 0 }}
    >
      {/* Flex row: Tabs list and right-aligned New case button */}
      <div className="flex w-full items-end justify-between">
        {/* Tabs list */}
        <div
          className="flex-1 flex items-end gap-0 overflow-x-auto scrollbar-thin scrollbar-thumb-[#23282d] scrollbar-track-transparent"
          style={{ minHeight: TABS_HEIGHT, height: TABS_HEIGHT }}
        >
          {tabs.length === 0 ? (
            <div className="flex items-center h-full text-[#fff4] text-sm px-4">
              No cases open.
            </div>
          ) : (
            tabs.map((tab) => (
              <div
                key={tab.id}
                className={`group flex items-center px-2 sm:px-3 py-0 h-[32px] max-w-[180px] min-w-[80px] text-xs sm:text-sm
                  ${activeTab === tab.id
                    ? "bg-[#212223] text-[#03bd4d] border-b-2 border-[#03bd4d] z-10"
                    : "bg-transparent text-[#aaa] hover:bg-[#16191d]"
                  } 
                  flex-shrink-0 rounded-t-md mr-1 transition-all cursor-pointer`}
                title={tab.label}
                style={{
                  flex: "0 1 140px", // allow to shrink/grow
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="truncate">{tab.label}</span>
                <button
                  aria-label="Close tab"
                  className="ml-2 opacity-70 hover:opacity-100 text-[#888] hover:text-[#fc7a7a] cursor-pointer transition"
                  onClick={e => {
                    e.stopPropagation();
                    closeTab(tab.id);
                  }}
                  tabIndex={-1}
                >
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>
        {/* New case button right-aligned */}
        <button
          onClick={addTab}
          className="ml-4 bg-[#191a1d] border border-[#03bd4d70] rounded px-2 py-1 flex items-center text-[#03bd4d] hover:bg-[#03bd4d20] transition"
          aria-label="Open new tab"
          style={{ height: 32, alignSelf: 'center', whiteSpace: "nowrap" }}
        >
          <Plus size={16} />
          <span className="ml-1 text-xs">New case</span>
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;

