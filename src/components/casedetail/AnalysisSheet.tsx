
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface AnalysisSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeSheet: object;
}

const AnalysisSheet = ({ open, onOpenChange, activeSheet }: AnalysisSheetProps) => {
  console.log(activeSheet)
  useEffect(() => {
    if (!open) {
      activeSheet=null;
    }
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="max-w-md w-full flex flex-col">
        <SheetHeader>
          <SheetTitle>{activeSheet && activeSheet[0].title}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4 flex-1 overflow-auto pr-2 text-muted-foreground text-sm">
          <div dangerouslySetInnerHTML={{ __html: activeSheet && activeSheet[0].description || "no description available" }} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AnalysisSheet;
