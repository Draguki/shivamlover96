import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Node {
  id: string;
  title: string;
  type: "course" | "project" | "assessment";
  status?: "completed" | "current" | "locked";
}

interface LearningPathCardProps {
  title: string;
  description: string;
  nodes: Node[];
  courseCount: number;
  duration: string;
  salaryRange: string;
  gradient: string;
  onClick?: () => void;
}

export function LearningPathCard({
  title,
  description,
  nodes,
  courseCount,
  duration,
  salaryRange,
  gradient,
  onClick
}: LearningPathCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col h-full cursor-pointer group"
      onClick={onClick}
    >
      <div className={`h-24 ${gradient} p-6 flex flex-col justify-end relative overflow-hidden`}>
        <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-50 transition-opacity">
          <BookOpen className="w-24 h-24 text-white rotate-12 transform translate-x-4 -translate-y-8" />
        </div>
        <h3 className="text-xl font-bold text-white relative z-10">{title}</h3>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
          {description}
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground flex items-center gap-1"><BookOpen className="w-3 h-3"/> Courses</span>
            <span className="font-semibold">{courseCount}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3"/> Time</span>
            <span className="font-semibold">{duration}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground flex items-center gap-1"><Trophy className="w-3 h-3"/> Salary</span>
            <span className="font-semibold text-green-600 dark:text-green-400">{salaryRange}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-6 border-t border-border">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-muted z-0"></div>
            
            <div className="flex justify-between relative z-10">
              {nodes.map((node, i) => (
                <div key={node.id} className="flex flex-col items-center gap-2 group/node">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors
                    ${node.status === 'completed' ? 'bg-primary border-primary text-primary-foreground' : 
                      node.status === 'current' ? 'bg-background border-primary text-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]' : 
                      'bg-muted border-muted text-muted-foreground'}`
                  }>
                    {i + 1}
                  </div>
                  <span className="text-[10px] font-medium text-center max-w-[60px] leading-tight text-muted-foreground group-hover/node:text-foreground transition-colors">
                    {node.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <Button variant="ghost" className="w-full mt-6 text-primary group-hover:bg-primary/5 transition-colors">
            Explore Path <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
