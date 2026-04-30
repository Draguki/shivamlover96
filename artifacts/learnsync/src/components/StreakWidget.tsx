import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function StreakWidget() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const activeDays = [true, true, true, true, true, false, false];

  return (
    <Card className="border-border bg-card overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          Learning Streak
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          </motion.div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold text-foreground">5</span>
          <span className="text-sm font-medium text-muted-foreground">Days</span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          {days.map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                ${activeDays[i] 
                  ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30' 
                  : 'bg-muted text-muted-foreground'}`
              }>
                {activeDays[i] ? <Flame className="w-4 h-4" /> : null}
              </div>
              <span className="text-xs text-muted-foreground">{day}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border flex justify-between text-sm">
          <span className="text-muted-foreground">Longest Streak</span>
          <span className="font-semibold">14 Days</span>
        </div>
      </CardContent>
    </Card>
  );
}
