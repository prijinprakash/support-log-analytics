
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Bug } from "lucide-react";
import FileUpload from "../FileUpload";

type BugReportDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const BugReportDialog = ({ open, onOpenChange }: BugReportDialogProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "low",
    pageUrl: "",
    email: "",
    category: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Bug report submitted:", formData, "File:", selectedFile);
    
    // Close dialog first
    onOpenChange(false);
    
    // Show success toast
    toast({
      title: "Bug Report Submitted",
      description: "Thank you for your feedback. We'll review your report and get back to you soon.",
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      priority: "low",
      pageUrl: "",
      email: "",
      category: ""
    });
    setSelectedFile(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
            <Bug className="h-6 w-6 text-white" />
          </div>
          <div>
            <DialogTitle className="text-xl">Bug Report</DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Found a problem? Let us know so we can fix it.
            </p>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">Bug title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="Feedback Form Submission Fails (Chrome Desktop)"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">Bug description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="When I click the 'Submit' button on the feedback form, the page reloads but nothing is submitted. No confirmation message appears, and the data is lost. Happens in Chrome on desktop."
              rows={6}
              required
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Describe the issue, steps to reproduce, and browser/device.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pageUrl" className="text-sm font-medium">Page URL</Label>
            <Input
              id="pageUrl"
              value={formData.pageUrl}
              onChange={(e) => handleInputChange("pageUrl", e.target.value)}
              placeholder="https://example.com/feedback"
              className="h-12"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Category</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select a bug category" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectItem value="visual">Visual/aesthetic issue</SelectItem>
                  <SelectItem value="functionality">Functionality issue</SelectItem>
                  <SelectItem value="performance">Performance issue</SelectItem>
                  <SelectItem value="crash">Crash/error issue</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Priority</Label>
              <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Low" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectItem value="low">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Low
                    </div>
                  </SelectItem>
                  <SelectItem value="medium">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      Medium
                    </div>
                  </SelectItem>
                  <SelectItem value="high">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      High
                    </div>
                  </SelectItem>
                  <SelectItem value="critical">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Critical
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Upload file</Label>
            <FileUpload
              onFileSelect={setSelectedFile}
              selectedFile={selectedFile}
              accept="image/*,video/*"
              placeholder="Drag and drop an image or video here, or click to select"
              id="bug-report"
            />
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-brand text-white hover:bg-brand/80">
              Send bug report
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BugReportDialog;
