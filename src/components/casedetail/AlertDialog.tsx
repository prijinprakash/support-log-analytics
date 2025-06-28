
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

interface AlertItem {
  id: string;
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  timestamp: string;
}

interface AlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SystemAlertDialog: React.FC<AlertDialogProps> = ({ open, onOpenChange }) => {
  const alerts: AlertItem[] = [
    {
      id: '1',
      type: 'error',
      title: 'Database Connection Failed',
      description: 'Unable to connect to the primary database server. Please check network connectivity.',
      timestamp: '2024-06-28 14:30:25'
    },
    {
      id: '2',
      type: 'warning',
      title: 'High Memory Usage',
      description: 'System memory usage has exceeded 85%. Consider optimizing running processes.',
      timestamp: '2024-06-28 14:25:10'
    },
    {
      id: '3',
      type: 'info',
      title: 'Scheduled Maintenance',
      description: 'System maintenance is scheduled for tonight at 2:00 AM EST.',
      timestamp: '2024-06-28 14:00:00'
    },
    {
      id: '4',
      type: 'error',
      title: 'Authentication Service Down',
      description: 'The authentication service is currently unavailable. Users may experience login issues.',
      timestamp: '2024-06-28 13:45:30'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info':
        return <Info className="h-4 w-4 text-blue-500" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getAlertVariant = (type: string) => {
    return type === 'error' ? 'destructive' : 'default';
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <AlertDialogHeader>
          <AlertDialogTitle>System Alerts</AlertDialogTitle>
          <AlertDialogDescription>
            Current system alerts and notifications
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="flex-1 overflow-auto space-y-4 py-4">
          {alerts.map((alert) => (
            <Alert key={alert.id} variant={getAlertVariant(alert.type)}>
              {getAlertIcon(alert.type)}
              <AlertTitle className="flex items-center justify-between">
                {alert.title}
                <span className="text-xs font-normal text-muted-foreground">
                  {alert.timestamp}
                </span>
              </AlertTitle>
              <AlertDescription>
                {alert.description}
              </AlertDescription>
            </Alert>
          ))}
        </div>

        <AlertDialogFooter>
          <AlertDialogAction onClick={() => onOpenChange(false)}>
            Show
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SystemAlertDialog;
