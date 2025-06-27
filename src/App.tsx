
import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TabNavigation from "./components/TabNavigation";
import NewReleasesDialog from "./components/NewReleasesDialog";
import PageLoader from './components/PageLoader';

const queryClient = new QueryClient();
const Index = React.lazy(() => import("./pages/Index"));
const Settings = React.lazy(() => import("./pages/Settings"));
const UserStatistics = React.lazy(() => import("./pages/UserStatistics"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const CaseDetail = React.lazy(() => import("./pages/CaseDetail"));
const Cases = React.lazy(() => import("./pages/Cases"));

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <NewReleasesDialog />
        <BrowserRouter>
          <div className="sticky top-0 z-50 bg-headerbackground">
            <Header />
            <TabNavigation />
          </div>
          {/* <div className="relative dark:bg-background bg-[#f8f8f8] text-foreground flex flex-col overflow-hidden min-h-[calc(100vh-130px)]"> */}
            {/* <div className="flex flex-col flex-1 min-h-0"> */}
              {/* <ScrollArea className="flex-1 h-full"> */}
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/cases" element={<Cases />} />
                  <Route path="/cases/:caseId" element={<CaseDetail />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/statistics" element={<UserStatistics />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              {/* </ScrollArea> */}
            {/* </div> */}
          {/* </div> */}
          <footer className="fixed left-0 bottom-0 w-full bg-background text-muted-foreground text-center py-2 z-50 border-t border-border">
            <span className="text-xs select-none">
              &copy; 2025 company name. All rights reserved.
            </span>
          </footer>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
