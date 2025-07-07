
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
  setPageNumber: (pageNumber: number) => void;
  pageNumber: number;
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
  setPageNumber: (pageNumber: number) => set({ pageNumber }),
  fetchCases: async () => {
    const { cases, pageNumber } = get();

    set({ isLoading: true })
    // await new Promise(resolve => setTimeout(resolve, 3000)); // blocking code
    const pageSize = parseInt(localStorage.getItem("casesTablePageSize")) || 10
    const from = pageNumber * pageSize;
    const to = from + 1000 - 1;

    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .order('id', { ascending: true }) // this needs to be set as a global sort direction
      .range(from, to);

    // console.log(from, to)

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
    console.log(`fetched ${data.length} cases from db`)
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
      pageNumber: pageNumber === 0 ? 1 : pageNumber,
    });
  }
}));
