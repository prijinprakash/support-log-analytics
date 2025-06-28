
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface GaugeMeterProps {
  value: number;
  title: string;
  description: string;
}

const GaugeMeter: React.FC<GaugeMeterProps> = ({ value, title, description }) => {
  const clampedValue = Math.min(Math.max(value, 0), 100);
  const angle = (clampedValue / 100) * 180 - 90; // -90 to 90 degrees
  const isRedZone = clampedValue > 70;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-48 h-24 mb-4">
          {/* Background arc */}
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <path
              d="M 20 80 A 80 80 0 0 1 180 80"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Green zone */}
            <path
              d="M 20 80 A 80 80 0 0 1 140 80"
              fill="none"
              stroke="#22c55e"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Red zone */}
            <path
              d="M 140 80 A 80 80 0 0 1 180 80"
              fill="none"
              stroke="#ef4444"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Needle */}
            <g transform={`rotate(${angle} 100 80)`}>
              <line
                x1="100"
                y1="80"
                x2="100"
                y2="25"
                stroke={isRedZone ? "#ef4444" : "#64748b"}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle
                cx="100"
                cy="80"
                r="4"
                fill={isRedZone ? "#ef4444" : "#64748b"}
              />
            </g>
          </svg>
        </div>
        <div className="text-center">
          <div className={`text-3xl font-bold ${isRedZone ? 'text-red-500' : 'text-foreground'}`}>
            {clampedValue}%
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Current Usage
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GaugeMeter;
