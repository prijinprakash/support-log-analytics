
import { create } from 'zustand';

type CaseStatus = "new" | "in progress" | "queued" | "finished";

interface Case {
  id: number;
  uuid: string;
  caseNumber: string;
  status: CaseStatus;
  serialNumber: string;
  hostName: string;
  fileName: string;
  createdAt: string; // ISO string
  syslogEndTime: string; // ISO string
}

interface CasesStore {
  cases: Case[];
  isLoading: boolean;
  fetchCases: () => Promise<void>;
}

// Mock data that would come from an API
function generateMockCases(): Case[] {
  function randStatus(): CaseStatus {
    const statuses: CaseStatus[] = ["new", "in progress", "queued", "finished"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }
  
  function randFileName(): string {
    const prefixes = ["log", "data", "report", "analysis", "dump", "trace", "debug", "system", "error", "info"];
    const suffixes = ["txt", "log", "csv", "json", "xml", "dat"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const number = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}_${number}.${suffix}`;
  }
  
  const now = Date.now();
  return Array(50)
    .fill(null)
    .map((_, idx) => ({
      id: idx + 1,
      uuid: crypto.randomUUID(),
      caseNumber: ("00000000" + (Math.floor(100000 + Math.random() * 900000))).slice(-8),
      status: randStatus(),
      serialNumber: "SN-" + Math.floor(10000000 + Math.random() * 90000000),
      hostName: `host${idx + 1}.example.com`,
      fileName: randFileName(),
      createdAt: new Date(now - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString(),
      syslogEndTime: new Date(now - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString(),
    }));
}

export const useCasesStore = create<CasesStore>((set) => ({
  cases: [],
  isLoading: false,
  fetchCases: async () => {
    set({ isLoading: true });
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // const response = await fetch('/api/cases');
    // const cases = await response.json();
    
    const cases = generateMockCases();
    set({ cases, isLoading: false });
  },
}));
