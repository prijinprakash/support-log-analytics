
import { X, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

type Tab = {
  id: string;
  label: string;
  caseId: string;
};

// Generate UUIDs for case IDs
const generateCaseId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const initialTabs: Tab[] = [
  { id: "1", label: "00123456", caseId: generateCaseId() },
  { id: "2", label: "00987654", caseId: generateCaseId() },
  { id: "3", label: "00345621", caseId: generateCaseId() },
];

const TABS_HEIGHT = 44; // px to match header

const TabNavigation = () => {
  const [tabs, setTabs] = useState(initialTabs);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab based on current route
  const getActiveTabFromRoute = () => {
    const caseMatch = location.pathname.match(/^\/cases\/(.+)$/);
    if (caseMatch) {
      const caseId = caseMatch[1];
      const tab = tabs.find(t => t.caseId === caseId);
      return tab?.id || null;
    }
    return null;
  };

  const activeTab = getActiveTabFromRoute();

  const addTab = () => {
    const newLabel = String(Math.floor(10000000 + Math.random() * 90000000));
    const newCaseId = generateCaseId();
    const newId = Date.now().toString();
    const newTab = { id: newId, label: newLabel, caseId: newCaseId };
    
    setTabs([...tabs, newTab]);
    navigate(`/cases/${newCaseId}`);
  };

  const closeTab = (id: string) => {
    const tabToClose = tabs.find(t => t.id === id);
    const idx = tabs.findIndex(t => t.id === id);
    let newTabs = tabs.filter(t => t.id !== id);
    
    // If we're closing the currently active tab, navigate to another tab or home
    if (tabToClose && location.pathname === `/cases/${tabToClose.caseId}`) {
      if (newTabs[idx]) {
        navigate(`/cases/${newTabs[idx].caseId}`);
      } else if (idx > 0) {
        navigate(`/cases/${newTabs[idx - 1].caseId}`);
      } else if (newTabs[0]) {
        navigate(`/cases/${newTabs[0].caseId}`);
      } else {
        navigate('/');
      }
    }
    
    setTabs(newTabs);
  };

  const handleTabClick = (tab: Tab) => {
    navigate(`/cases/${tab.caseId}`);
  };

  // Calculate dynamic tab width based on number of tabs
  const getTabWidth = () => {
    if (tabs.length <= 4) return "min-w-[90px] max-w-[180px]";
    if (tabs.length <= 6) return "min-w-[70px] max-w-[140px]";
    if (tabs.length <= 8) return "min-w-[60px] max-w-[120px]";
    return "min-w-[50px] max-w-[100px]";
  };

  return (
    <div className="w-full border-b border-zinc-800">
      <div
        className={cn(
          "w-full flex items-center px-4",
          "border-t border-zinc-800"
        )}
        style={{ minHeight: TABS_HEIGHT, height: TABS_HEIGHT }}
      >
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
            <div className="flex items-center h-full text-zinc-400 text-sm px-4 w-full">
              No cases open.
            </div>
          ) : (
            tabs.map((tab, i) => (
              <div
                key={tab.id}
                className={cn(
                  "group flex items-center px-3 py-0",
                  activeTab === tab.id
                    ? "bg-zinc-800 text-brand border-b-2 border-brand z-10"
                    : "bg-transparent text-zinc-400 hover:bg-zinc-800",
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
                onClick={() => handleTabClick(tab)}
                title={`Case ${tab.label}`}
              >
                <span className="truncate">{tab.label}</span>
                <Button
                  aria-label="Close tab"
                  variant="ghost"
                  size="icon"
                  tabIndex={-1}
                  className="ml-2 p-0 h-5 w-5 opacity-70 hover:opacity-100 text-zinc-400 hover:text-red-500 cursor-pointer transition rounded focus:outline-none focus:ring-0"
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
        <div className="flex flex-0 items-center h-full min-w-[110px] justify-end pl-4">
          <Button
            onClick={addTab}
            variant="outline"
            className="bg-headerbackground border border-brand/70 text-brand hover:bg-brand/20 transition h-8 px-3 rounded flex items-center whitespace-nowrap"
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
