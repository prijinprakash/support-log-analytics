
import React from 'react';
import { create } from 'zustand';
import { supabase } from "@/integrations/supabase/client";

export type CaseStatus = "new" | "in progress" | "queued" | "finished";

interface Case {
  id: number;
  // uuid: string;
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

// const fetchCases = async () => {
//   const { data, error } = await supabase
//         .from('cases')
//         .select('*')

//   if (error) console.error(error)
//   else console.log('cases fetched...')
// }

export const useCasesStore = create<CasesStore>((set, get) => ({
  cases: [],
  isLoading: true,
  pageNumber: 0,
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setPageNumber: (page: number) => set({ page }),
  fetchCases: async () => {
    const { cases, pageNumber, isLoading } = get();
    if (!isLoading) return;
    
    const pageSize = parseInt(localStorage.getItem('hello')) || 10
    const from = pageNumber * pageSize;
    const to = from + pageSize - 1;
    const { data, error } = await supabase
        .from('cases')
        .select('*')
        .range(from, to);

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

    // set({ 
    //   cases: data.map(caseItem => ({...caseItem, status: caseStatusMap[caseItem.status]})), 
    //   isLoading: false,
    //   page: page + 1,
    // });
    set({
      cases: [
        ...cases,
        ...data.map(item => ({
          ...item,
          status: caseStatusMap[item.status],
        })),
      ],
      isLoading: false,
      pageNumber: pageNumber + 1,
    });
  }
}));
