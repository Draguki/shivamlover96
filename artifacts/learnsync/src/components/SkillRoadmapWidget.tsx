import { CheckCircle2, Circle, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function SkillRoadmapWidget() {
  const skills = [
    { name: "React Fundamentals", progress: 100, status: "completed" },
    { name: "State Management", progress: 100, status: "completed" },
    { name: "Next.js App Router", progress: 65, status: "current" },
    { name: "Server Actions", progress: 0, status: "locked" },
  ];

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            Current Goal: Next.js Mastery
          </span>
          <span className="text-xs text-muted-foreground font-normal">65% Complete</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mt-2 pl-4 border-l border-muted">
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[21px] top-0.5 bg-background">
                  {skill.status === "completed" ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500 fill-background" />
                  ) : skill.status === "current" ? (
                    <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center bg-background">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground fill-background" />
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className={`text-sm font-medium ${skill.status === 'locked' ? 'text-muted-foreground' : 'text-foreground'}`}>
                      {skill.name}
                    </h4>
                    {skill.status === "current" && (
                      <span className="text-xs font-medium text-primary">{skill.progress}%</span>
                    )}
                  </div>
                  {skill.status === "current" && (
                    <Progress value={skill.progress} className="h-1.5 mt-2 bg-muted">
                      <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${skill.progress}%` }} />
                    </Progress>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
