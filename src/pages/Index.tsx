
import CasesTable from "@/components/caselist/CasesTable";
// import { useState, useEffect } from "react";
// import PageLoader from "@/components/PageLoader";

const Index = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time for the page
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <main className="flex-1 flex items-center justify-center py-8">
  //       <PageLoader />
  //     </main>
  //   );
  // }

  return (
    <main className="flex-1 flex items-start justify-center py-4">
      <CasesTable />
    </main>
  );
};

export default Index;
