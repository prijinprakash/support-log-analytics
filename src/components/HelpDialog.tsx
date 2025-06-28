
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HelpDialog = ({ open, onOpenChange }: HelpDialogProps) => {
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Command copied successfully",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const curlCommands = [
    {
      title: "Upload File",
      description: "Upload a file with case number",
      command: `curl -X POST "https://api.example.com/upload" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@document.pdf" \\
  -F "caseNumber=12345"`
    },
    {
      title: "Search Cases",
      description: "Search for cases by keyword",
      command: `curl -X GET "https://api.example.com/search?q=keyword" \\
  -H "Authorization: Bearer YOUR_TOKEN"`
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-background border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Help & Documentation</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Getting Started */}
          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Getting Started</CardTitle>
              <CardDescription className="text-muted-foreground">
                Welcome to the application! Here's how to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">1. Upload Files</h4>
                <p className="text-sm text-muted-foreground">
                  Click the upload icon in the header to upload documents. Enter a case number and select your file.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">2. Search</h4>
                <p className="text-sm text-muted-foreground">
                  Use the search bar to find specific cases or documents. Your recent searches are saved for quick access.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">3. View Statistics</h4>
                <p className="text-sm text-muted-foreground">
                  Check your usage statistics and analytics in the statistics page accessible from the header.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* API Examples */}
          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">API Examples</CardTitle>
              <CardDescription className="text-muted-foreground">
                Use these curl commands to interact with the API programmatically.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {curlCommands.map((cmd, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{cmd.title}</h4>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(cmd.command)}
                      className="h-8 px-2"
                    >
                      <Copy size={14} />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">{cmd.description}</p>
                  <div className="bg-zinc-900 p-3 rounded-md overflow-x-auto">
                    <code className="text-sm text-green-400 whitespace-pre">{cmd.command}</code>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Keyboard Shortcuts */}
          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Keyboard Shortcuts</CardTitle>
              <CardDescription className="text-muted-foreground">
                Speed up your workflow with these keyboard shortcuts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center p-2 border-b border">
                  <span className="text-sm text-foreground">Open Search</span>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs text-primary">Ctrl + K</kbd>
                </div>
                <div className="flex justify-between items-center p-2 border-b border">
                  <span className="text-sm text-foreground">Upload File</span>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs text-primary">Ctrl + U</kbd>
                </div>
                <div className="flex justify-between items-center p-2 border-b border">
                  <span className="text-sm text-foreground">Load analysis</span>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs text-primary">Ctrl + Shift + A</kbd>
                </div>
                <div className="flex justify-between items-center p-2 border-b border">
                  <span className="text-sm text-foreground">Settings</span>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs text-primary">Ctrl + ,</kbd>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Useful Links */}
          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Useful Links</CardTitle>
              <CardDescription className="text-muted-foreground">
                External resources and documentation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href="https://docs.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-md border transition-colors"
              >
                <div>
                  <div className="font-medium text-foreground">API Documentation</div>
                  <div className="text-sm text-muted-foreground">Complete API reference and guides</div>
                </div>
                <ExternalLink size={16} className="text-muted-foreground" />
              </a>
              <a
                href="https://support.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-md border transition-colors"
              >
                <div>
                  <div className="font-medium text-foreground">Support Center</div>
                  <div className="text-sm text-muted-foreground">Get help and submit tickets</div>
                </div>
                <ExternalLink size={16} className="text-muted-foreground" />
              </a>
              <a
                href="https://status.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-md border transition-colors"
              >
                <div>
                  <div className="font-medium text-foreground">System Status</div>
                  <div className="text-sm text-muted-foreground">Check service availability</div>
                </div>
                <ExternalLink size={16} className="text-muted-foreground" />
              </a>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Need More Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you can't find what you're looking for, feel free to reach out to our support team.
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:support@example.com">
                  Email Support
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
