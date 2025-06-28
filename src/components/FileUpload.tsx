
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  selectedFile?: File | null;
  accept?: string;
  placeholder?: string;
  className?: string;
}

const FileUpload = ({ 
  onFileSelect, 
  selectedFile, 
  accept,
  placeholder = "Drag and drop a file here, or click to select",
  className = ""
}: FileUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

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
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    onFileSelect(null);
  };

  return (
    <div
      className={`border border-dashed rounded-lg p-6 text-center transition-colors ${
        isDragOver
          ? "border-primary bg-brand/5"
          : "border-gray-300 hover:border-primary"
      } ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {selectedFile ? (
        <div className="flex items-center justify-between bg-gray-50 rounded p-3">
          <div className="flex items-center space-x-2">
            <Upload size={20} className="text-primary" />
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
            {placeholder}
          </p>
          <input
            type="file"
            onChange={handleFileSelect}
            accept={accept}
            className="hidden"
            id={`fileInput-${Math.random()}`}
          />
          <label
            htmlFor={`fileInput-${Math.random()}`}
            className="cursor-pointer text-primary hover:text-brand/80 text-sm font-medium"
          >
            Browse files
          </label>
        </>
      )}
    </div>
  );
};

export default FileUpload;
