
import React from 'react';
// import GaugeComponent from 'react-gauge-component';
import GaugeChart from 'react-gauge-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface GaugeMeterProps {
  value: number;
  title: string;
  description: string;
}

const GaugeMeter: React.FC<GaugeMeterProps> = ({ value, title, description }) => {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {/* <div className="w-48 mb-4">
          <GaugeComponent
            arc={{
              subArcs: [
                {
                  limit: 70,
                  color: '#22c55e',
                  showTick: true
                },
                {
                  limit: 100,
                  color: '#ef4444',
                  showTick: true
                }
              ]
            }}
            pointer={{
              type: "needle",
              color: clampedValue > 70 ? '#ef4444' : '#64748b'
            }}
            value={clampedValue}
            maxValue={100}
            labels={{
              valueLabel: {
                formatTextValue: value => `${value}%`,
                style: { fontSize: '24px', fontWeight: 'bold', fill: clampedValue > 70 ? '#ef4444' : '#000' }
              },
              tickLabels: {
                type: 'outer',
                ticks: [
                  { value: 0 },
                  { value: 25 },
                  { value: 50 },
                  { value: 70 },
                  { value: 100 }
                ]
              }
            }}
          />
        </div> */}
        <GaugeChart
            id="gauge-chart"
            animate={false}
            nrOfLevels={15}
            percent={0.78}
            needleColor="#345243"
            textColor="red"
            style={{ width: '100%', maxWidth: 500, height: 250 }}
            // formatTextValue={(value) => `${(data.rpzRatio * 100).toFixed(2)}%`}
        />
        <div className="text-center">
          <div className="text-sm text-muted-foreground mt-1">
            Current Usage
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GaugeMeter;
