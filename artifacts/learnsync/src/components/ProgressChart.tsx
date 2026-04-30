import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const data = [
  { name: "Mon", hours: 1.5 },
  { name: "Tue", hours: 2.0 },
  { name: "Wed", hours: 0.5 },
  { name: "Thu", hours: 3.2 },
  { name: "Fri", hours: 1.8 },
  { name: "Sat", hours: 4.5 },
  { name: "Sun", hours: 3.0 },
];

export function ProgressChart() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Learning Hours (This Week)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-3xl font-bold text-foreground">16.5</span>
          <span className="text-sm font-medium text-muted-foreground">Hours</span>
          <span className="text-xs font-medium text-green-500 ml-2 flex items-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            +12%
          </span>
        </div>
        
        <div className="h-[140px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} 
                dy={10}
              />
              <YAxis hide domain={[0, 'dataMax + 1']} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                itemStyle={{ color: 'hsl(var(--foreground))' }}
                labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
              />
              <Area 
                type="monotone" 
                dataKey="hours" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorHours)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
