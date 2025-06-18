
import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UploadDialog = ({ open, onOpenChange }: UploadDialogProps) => {
  const [caseNumber, setCaseNumber] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!caseNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a case number",
        variant: "destructive",
      });
      return;
    }

    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive",
      });
      return;
    }

    // Close dialog and start upload process
    onOpenChange(false);
    
    // Show progress toast
    const progressToast = toast({
      title: "Uploading file...",
      description: `Uploading ${selectedFile.name} for case ${caseNumber}`,
    });

    // Simulate upload progress
    setTimeout(() => {
      progressToast.update({
        id: progressToast.id,
        title: "Upload complete!",
        description: `Successfully uploaded ${selectedFile.name} for case ${caseNumber}`,
      });
    }, 2000);

    // Reset form
    setCaseNumber("");
    setSelectedFile(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="caseNumber">Case Number</Label>
            <Input
              id="caseNumber"
              value={caseNumber}
              onChange={(e) => setCaseNumber(e.target.value)}
              placeholder="Enter case number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>File</Label>
            <div
              className={`border border-dashed rounded-lg p-6 text-center transition-colors ${
                isDragOver
                  ? "border-brand bg-brand/5"
                  : "border-gray-300 hover:border-brand"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {selectedFile ? (
                <div className="flex items-center justify-between bg-gray-50 rounded p-3">
                  <div className="flex items-center space-x-2">
                    <Upload size={20} className="text-brand" />
                    <span className="text-sm font-medium">{selectedFile.name}</span>
                    <span className="text-xs text-gray-500">
                      ({Math.round(selectedFile.size / 1024)} KB)
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="h-6 w-6 p-0"
                  >
                    <X size={14} />
                  </Button>
                </div>
              ) : (
                <>
                  <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Drag and drop a file here, or click to select
                  </p>
                  <input
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="fileInput"
                  />
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-brand hover:text-brand/80 text-sm font-medium"
                  >
                    Browse files
                  </label>
                </>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Upload File
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
