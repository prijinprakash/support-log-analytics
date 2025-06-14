
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
    <div className="w-full border-b border-[#222] px-4 py-0 bg-[#18191b]">
      <div className="flex items-end gap-4">
        <span className="text-base font-semibold text-white mr-4 select-none">
          Dashboard
        </span>
        <div className="flex items-center gap-0 flex-1 overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`group flex items-center px-3 py-0 h-[32px] text-sm
                ${activeTab === tab.id
                  ? "bg-[#212223] text-[#03bd4d] border-b-2 border-[#03bd4d] z-10"
                  : "bg-transparent text-[#aaa] hover:bg-[#16191d]"
                } rounded-t-md mr-1 transition-all cursor-pointer select-none`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.label}</span>
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
          ))}
          <button
            onClick={addTab}
            className="ml-4 bg-[#191a1d] border border-[#03bd4d70] rounded px-2 py-1 flex items-center text-[#03bd4d] hover:bg-[#03bd4d20] transition"
            aria-label="Open new tab"
          >
            <Plus size={16} />
            <span className="ml-1 text-xs">New case</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
