
// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";

// type BugReportDialogProps = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// };

// const BugReportDialog = ({ open, onOpenChange }: BugReportDialogProps) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     priority: "",
//     category: "",
//     email: "",
//   });
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Bug report submitted:", formData);
    
//     // Close dialog first
//     onOpenChange(false);
    
//     // Show success toast
//     toast({
//       title: "Bug Report Submitted",
//       description: "Thank you for your feedback. We'll review your report and get back to you soon.",
//     });

//     // Reset form
//     setFormData({
//       title: "",
//       description: "",
//       priority: "",
//       category: "",
//       email: "",
//     });
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Report a Bug</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="title">Bug Title *</Label>
//             <Input
//               id="title"
//               value={formData.title}
//               onChange={(e) => handleInputChange("title", e.target.value)}
//               placeholder="Brief description of the issue"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="description">Description *</Label>
//             <Textarea
//               id="description"
//               value={formData.description}
//               onChange={(e) => handleInputChange("description", e.target.value)}
//               placeholder="Detailed description of the bug..."
//               rows={4}
//               required
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label>Priority</Label>
//               <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select priority" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="low">Low</SelectItem>
//                   <SelectItem value="medium">Medium</SelectItem>
//                   <SelectItem value="high">High</SelectItem>
//                   <SelectItem value="critical">Critical</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label>Category</Label>
//               <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="ui">UI/UX</SelectItem>
//                   <SelectItem value="performance">Performance</SelectItem>
//                   <SelectItem value="functionality">Functionality</SelectItem>
//                   <SelectItem value="data">Data Issues</SelectItem>
//                   <SelectItem value="other">Other</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="email">Contact Email</Label>
//             <Input
//               id="email"
//               type="email"
//               value={formData.email}
//               onChange={(e) => handleInputChange("email", e.target.value)}
//               placeholder="your.email@example.com"
//             />
//           </div>

//           <div className="flex gap-2 pt-4">
//             <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
//               Cancel
//             </Button>
//             <Button type="submit" className="flex-1">
//               Submit Report
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default BugReportDialog;


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
import { Bug, HelpCircle, Image, Video, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type BugReportDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const BugReportDialog = ({ open, onOpenChange }: BugReportDialogProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    pageUrl: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Bug report submitted:", formData);
    
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
      priority: "",
      pageUrl: "",
      email: "",
    });
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Label className="text-sm font-medium">Page URL or Path</Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The URL where the bug occurred</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                value={formData.pageUrl}
                onChange={(e) => handleInputChange("pageUrl", e.target.value)}
                placeholder="/dashboard/profile"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Priority</Label>
              <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Low" />
                </SelectTrigger>
                <SelectContent>
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Upload Image</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Image className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Image</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Upload Video</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Video className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Video</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="email" className="text-sm font-medium">Your email (optional)</Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>We'll use this to follow up on your report</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="proof.of.email@decentralized.biz"
              className="h-12"
            />
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-slate-900 hover:bg-slate-800 text-white">
              Send bug report
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BugReportDialog;