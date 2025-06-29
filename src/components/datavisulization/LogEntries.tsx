
import { AlertTriangle, Info, XCircle, CheckCircle } from "lucide-react";

const LogEntries = () => {
  // Generate dummy log entries
  const generateLogEntries = () => {
    const logTypes = ['INFO', 'WARNING', 'ERROR', 'SUCCESS'];
    const messages = [
      'Database connection established successfully',
      'User authentication completed for user: admin@example.com',
      'Backup process started for database: production_db',
      'Memory usage threshold exceeded: 85%',
      'Failed to connect to external API endpoint',
      'SSL certificate renewal scheduled',
      'Cache cleared for application instance',
      'Network latency spike detected: 250ms',
      'Cron job executed successfully: daily_cleanup',
      'Security scan completed with 0 vulnerabilities',
      'File upload processed: system_config.xml',
      'Session timeout warning for inactive user',
    ];

    const logs = [];
    const now = new Date();
    
    for (let i = 0; i < 12; i++) {
      const timestamp = new Date(now.getTime() - i * 5 * 60 * 1000); // Every 5 minutes
      const logType = logTypes[Math.floor(Math.random() * logTypes.length)];
      const message = messages[Math.floor(Math.random() * messages.length)];
      
      logs.push({
        timestamp: timestamp.toLocaleString(),
        level: logType,
        message: message,
        source: `system.${Math.floor(Math.random() * 5) + 1}`,
      });
    }
    
    return logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  };

  const logs = generateLogEntries();

  const getLogIcon = (level: string) => {
    switch (level) {
      case 'INFO':
        return <Info size={14} className="text-blue-500" />;
      case 'WARNING':
        return <AlertTriangle size={14} className="text-yellow-500" />;
      case 'ERROR':
        return <XCircle size={14} className="text-red-500" />;
      case 'SUCCESS':
        return <CheckCircle size={14} className="text-green-500" />;
      default:
        return <Info size={14} className="text-gray-500" />;
    }
  };

  const getLogColor = (level: string) => {
    switch (level) {
      case 'INFO':
        return 'text-blue-600 bg-blue-50';
      case 'WARNING':
        return 'text-yellow-600 bg-yellow-50';
      case 'ERROR':
        return 'text-red-600 bg-red-50';
      case 'SUCCESS':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="h-64 overflow-auto space-y-2">
      {logs.map((log, index) => (
        <div key={index} className="flex items-start gap-3 p-3 rounded-lg border bg-background hover:bg-muted/50 transition-colors">
          <div className="flex-shrink-0 mt-1">
            {getLogIcon(log.level)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getLogColor(log.level)}`}>
                {log.level}
              </span>
              <span className="text-xs text-muted-foreground font-mono">{log.source}</span>
              <span className="text-xs text-muted-foreground ml-auto">{log.timestamp}</span>
            </div>
            <p className="text-sm text-foreground break-words">{log.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogEntries;
