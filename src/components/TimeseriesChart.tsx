
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TimeseriesChart = () => {
  // Generate dummy time series data
  const generateTimeSeriesData = () => {
    const data = [];
    const now = new Date();
    
    for (let i = 23; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60 * 60 * 1000); // Every hour for 24 hours
      data.push({
        time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        cpuUsage: Math.floor(Math.random() * 40) + 20, // 20-60%
        memoryUsage: Math.floor(Math.random() * 30) + 40, // 40-70%
        diskIO: Math.floor(Math.random() * 50) + 10, // 10-60%
        networkTraffic: Math.floor(Math.random() * 80) + 20, // 20-100%
      });
    }
    
    return data;
  };

  const data = generateTimeSeriesData();

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="time" 
            className="text-xs fill-muted-foreground"
            tick={{ fontSize: 10 }}
          />
          <YAxis 
            className="text-xs fill-muted-foreground"
            tick={{ fontSize: 10 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px'
            }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Line 
            type="monotone" 
            dataKey="cpuUsage" 
            stroke="#8884d8" 
            strokeWidth={2}
            name="CPU Usage (%)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="memoryUsage" 
            stroke="#82ca9d" 
            strokeWidth={2}
            name="Memory Usage (%)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="diskIO" 
            stroke="#ffc658" 
            strokeWidth={2}
            name="Disk I/O (%)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="networkTraffic" 
            stroke="#ff7300" 
            strokeWidth={2}
            name="Network Traffic (%)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeseriesChart;
