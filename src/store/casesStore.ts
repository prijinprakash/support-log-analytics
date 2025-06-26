
import { create } from 'zustand';
import { supabase } from "@/integrations/supabase/client";

export type CaseStatus = "new" | "in progress" | "queued" | "finished";

interface Case {
  id: number;
  case_number: string;
  status: CaseStatus;
  serial_number: string;
  host_name: string;
  file_name: string;
  created_at: string; // ISO string
  syslog_end_time: string; // ISO string
}

interface CasesStore {
  cases: Case[];
  isLoading: boolean;
  fetchCases: () => Promise<void>;
}

const caseStatusMap = Object.freeze({
  0: "new",
  1: "in progress",
  2: "queued", 
  3: "finished"
})

export const useCasesStore = create<CasesStore>((set, get) => ({
  cases: [],
  isLoading: false,
  pageNumber: 0,
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setPageNumber: (pageNumber: number) => set({ pageNumber }),
  fetchCases: async () => {
    const { cases, pageNumber, isLoading } = get();
    
    if (!isLoading) return;
    
    const pageSize = parseInt(localStorage.getItem("casesTablePageSize")) || 10
    const from = pageNumber * pageSize;
    const to = from + 1000 - 1;
    console.log(isLoading, pageNumber, from, to)
    const { data, error } = await supabase
        .from('cases')
        .select('*')
        .range(from, to);
    // const { data, count, error } = await supabase
    //   .from('cases')
    //   .select('*', { count: 'exact' })
    //   .range(from, to);
    if (error) {
      console.error(error);
      set({ isLoading: false });
      return;
    }

    if (data.length === 0) {
      // no more data
      set({ isLoading: false });
      return;
    }
    console.log(`fetched ${data.length} cases....`)
    const casesUpdated = [
      ...cases,
      ...data.map(item => ({
        ...item,
        status: caseStatusMap[item.status],
      })),
    ]
    set({
      cases: casesUpdated,
      isLoading: false,
      pageNumber: pageNumber + 1,
    });
  }
}));
