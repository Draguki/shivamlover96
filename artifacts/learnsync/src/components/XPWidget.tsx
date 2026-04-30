import { Trophy, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function XPWidget() {
  const currentXP = 2450;
  const nextLevelXP = 3000;
  const progress = (currentXP / nextLevelXP) * 100;

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          Experience Points
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between mb-2">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-foreground">{currentXP}</span>
            <span className="text-xs font-medium text-muted-foreground">XP</span>
          </div>
          <div className="text-sm font-medium text-primary">Level 12</div>
        </div>
        
        <div className="space-y-1.5 mb-4">
          <Progress value={progress} className="h-2.5 bg-muted">
            <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all" style={{ width: `${progress}%` }} />
          </Progress>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{nextLevelXP - currentXP} XP to Level 13</span>
            <span>{nextLevelXP} XP</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recent Badges</h4>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500" title="React Novice">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500" title="Fast Learner">
              <Star className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground opacity-50" title="Locked">
              <Trophy className="w-5 h-5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
