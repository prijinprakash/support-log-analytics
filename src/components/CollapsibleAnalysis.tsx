
import React from "react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { CardHeader,Card, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Trash, Maximize, ChevronDown, ChevronUp } from "lucide-react";

type CollapsibleAnalysisProps = {
  id: string;
  title: string;
  el: React.ReactNode;
  openFullscreen: (title: string, el: React.ReactNode) => void;
  removeElement: (id: string) => void;
  className?: string;
};

const CollapsibleAnalysis = ({id, title, el, className, openFullscreen, removeElement}: CollapsibleAnalysisProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible 
    key={id}
    open={open} 
    onOpenChange={() => setOpen(!open)}
    className={className}
    >
      <Card className="h-full">
        <CardHeader className={`p-2 ${open && "border-b"}`}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg cursor-pointer w-[80%]" onClick={() => setOpen(!open)}>{title}</CardTitle>
            <div className="flex items-center gap-1">
              <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openFullscreen(title, el)}
                  className="h-8 w-8 p-0"
              >
                  <Maximize size={14} />
              </Button>
              <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeElement(id)}
                  className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
              >
                  <Trash size={14} />
              </Button>
              <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  {open ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                  </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className={`border-0 ${id!=='chart' ? "p-2 h-64 overflow-auto" : "p-0"}`}>
              {el}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default CollapsibleAnalysis;