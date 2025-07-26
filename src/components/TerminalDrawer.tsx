import React, { useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Maximize2, X, AlertTriangle, Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import Terminal from "./casedetail/TerminalComponent";

interface TerminalDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ open, onOpenChange }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [terminals, setTerminals] = useState([{ id: 1, name: "Terminal 1", active: true }]);
  const [activeTerminal, setActiveTerminal] = useState(1);

  const handleTerminate = () => {
    // Handle session termination logic here
    console.log("Terminating shell session...");
    onOpenChange(false);
  };

  const addNewTerminal = () => {
    const newTerminal = {
      id: terminals.length + 1,
      name: `Terminal ${terminals.length + 1}`,
      active: true
    };
    setTerminals([...terminals, newTerminal]);
    setActiveTerminal(newTerminal.id);
  };

  const closeTerminal = (terminalId: number) => {
    if (terminals.length === 1) {
      onOpenChange(false);
      return;
    }
    
    const updatedTerminals = terminals.filter(t => t.id !== terminalId);
    setTerminals(updatedTerminals);
    
    if (activeTerminal === terminalId) {
      setActiveTerminal(updatedTerminals[0]?.id || 1);
    }
  };

  return (
    <>
      <Drawer open={open && !isFullscreen} onOpenChange={onOpenChange}>
        <DrawerContent className="h-[70vh] max-h-[70vh]">
          <DrawerHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* <DrawerTitle>CloudShell</DrawerTitle> */}
                <div className="flex items-center gap-2">
                  {terminals.map((terminal) => (
                    <div key={terminal.id} className="flex items-center gap-1">
                      <Badge
                        variant={activeTerminal === terminal.id ? "default" : "secondary"}
                        className="cursor-pointer flex items-center gap-1"
                        onClick={() => setActiveTerminal(terminal.id)}
                      >
                        {terminal.name}
                        {terminals.length > 1 && (
                          <X 
                            className="h-3 w-3 ml-1 hover:bg-red-500 hover:text-white rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeTerminal(terminal.id);
                            }}
                          />
                        )}
                      </Badge>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={addNewTerminal}
                    className="h-6 w-6 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      Terminate
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Terminate Shell Session?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will terminate all active shell sessions and close any running processes. 
                        This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleTerminate} className="bg-red-600 hover:bg-red-700">
                        Terminate
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFullscreen(true)}
                >
                  <Maximize2 className="h-4 w-4 mr-1" />
                  Fullscreen
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onOpenChange(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DrawerHeader>
          
          <div className="flex-1 overflow-hidden">
            <Terminal />
          </div>
        </DrawerContent>
      </Drawer>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-background">
          <div className="h-full flex flex-col">
            <div className="border-b border-border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-semibold">CloudShell - Fullscreen</h2>
                  <div className="flex items-center gap-2">
                    {terminals.map((terminal) => (
                      <div key={terminal.id} className="flex items-center gap-1">
                        <Badge
                          variant={activeTerminal === terminal.id ? "default" : "secondary"}
                          className="cursor-pointer flex items-center gap-1"
                          onClick={() => setActiveTerminal(terminal.id)}
                        >
                          {terminal.name}
                          {terminals.length > 1 && (
                            <X 
                              className="h-3 w-3 ml-1 hover:bg-red-500 hover:text-white rounded-full"
                              onClick={(e) => {
                                e.stopPropagation();
                                closeTerminal(terminal.id);
                              }}
                            />
                          )}
                        </Badge>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addNewTerminal}
                      className="h-6 w-6 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        Terminate
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Terminate Shell Session?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will terminate all active shell sessions and close any running processes. 
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleTerminate} className="bg-red-600 hover:bg-red-700">
                          Terminate
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsFullscreen(false)}
                  >
                    Exit Fullscreen
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <Terminal />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalDrawer;