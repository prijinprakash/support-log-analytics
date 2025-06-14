
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import { useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState(false); // demo spinner

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex flex-col flex-1">
        <TabNavigation />
        <main className="flex-1" style={{ minHeight: "400px" }}>
          {/* Page content: loader demo */}
          {loading ? (
            <div className="flex flex-1 justify-center items-center h-full">
              <Spinner />
            </div>
          ) : (
            <div className="flex flex-1 justify-center items-center min-h-[400px]">
              <button
                onClick={() => setLoading(true)}
                className="px-4 py-2 rounded bg-primary text-primary-foreground text-sm hover:scale-105 transition-transform"
              >
                Simulate loading
              </button>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
