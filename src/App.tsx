
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TabNavigation from "./components/TabNavigation";
import Footer from "./components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import Index from "./pages/Index";
import Settings from "./pages/Settings";
import UserStatistics from "./pages/UserStatistics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="sticky top-0 z-50 bg-headerbackground">
          <Header />
          <TabNavigation />
        </div>
        <div className="relative bg-background text-foreground flex flex-col overflow-hidden">
          <div className="flex flex-col flex-1 min-h-0">
            {/* <ScrollArea className="flex-1 h-full"> */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/statistics" element={<UserStatistics />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            {/* </ScrollArea> */}
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
