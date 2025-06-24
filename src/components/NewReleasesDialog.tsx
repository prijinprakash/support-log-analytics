
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Zap } from "lucide-react";

const NewReleasesDialog = () => {
  const [open, setOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Check if user has opted out of seeing this dialog
    const hideReleases = localStorage.getItem('hideNewReleases');
    if (!hideReleases) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('hideNewReleases', 'true');
    }
    setOpen(false);
  };

  const releaseFeatures = [
    {
      icon: <Sparkles className="w-5 h-5 text-blue-500" />,
      title: "Enhanced Analytics Dashboard",
      description: "New interactive charts and real-time data visualization",
      badge: "New"
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: "Performance Improvements",
      description: "50% faster case processing and improved system responsiveness",
      badge: "Improved"
    },
    {
      icon: <Star className="w-5 h-5 text-purple-500" />,
      title: "Advanced Search & Filtering",
      description: "Powerful search capabilities with smart filters and suggestions",
      badge: "Enhanced"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-500" />
            What's New in v2.1.0
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We've been working hard to bring you exciting new features and improvements!
          </p>
          
          <div className="space-y-3">
            {releaseFeatures.map((feature, index) => (
              <div key={index} className="flex gap-3 p-3 rounded-lg border bg-muted/20">
                <div className="flex-shrink-0 mt-0.5">
                  {feature.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{feature.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="dont-show"
              checked={dontShowAgain}
              onCheckedChange={(checked) => setDontShowAgain(checked as boolean)}
            />
            <label
              htmlFor="dont-show"
              className="text-sm text-muted-foreground cursor-pointer"
            >
              Don't show this again
            </label>
          </div>

          <div className="flex gap-2 pt-4">
            <Button onClick={handleClose} className="flex-1">
              Got it, thanks!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewReleasesDialog;
