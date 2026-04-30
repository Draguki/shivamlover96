import { motion } from "framer-motion";
import { Star, Clock, User, BarChart, PlayCircle } from "lucide-react";
import { Course } from "@/data/courses";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface CourseCardProps {
  course: Course;
  onClick?: () => void;
  className?: string;
}

export function CourseCard({ course, onClick, className = "" }: CourseCardProps) {
  const difficultyColor = {
    Beginner: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    Intermediate: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    Advanced: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl bg-card border border-border overflow-hidden flex flex-col h-full hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all ${className}`}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={
            course.thumbnail.startsWith('linear-gradient') 
              ? { background: course.thumbnail } 
              : { backgroundImage: `url(${course.thumbnail})` }
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <PlayCircle className="w-6 h-6" />
          </div>
        </div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {course.isRecommended && (
            <Badge className="bg-primary hover:bg-primary/90 text-white font-medium shadow-sm">
              Recommended
            </Badge>
          )}
          {course.isNew && (
            <Badge className="bg-accent hover:bg-accent/90 text-white font-medium shadow-sm">
              New
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3">
          <Badge variant="secondary" className="bg-black/60 text-white hover:bg-black/70 backdrop-blur-md border-none font-medium">
            {course.matchPercentage}% Match
          </Badge>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="outline" className={`font-medium ${difficultyColor[course.difficulty]}`}>
            {course.difficulty}
          </Badge>
          <div className="flex items-center gap-1 text-sm font-medium text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            {course.rating.toFixed(1)}
            <span className="text-muted-foreground font-normal ml-1">({course.reviewCount})</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span className="truncate max-w-[100px]">{course.instructor}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <div className="border-t border-border pt-4 mt-auto flex items-center justify-between">
          <div className="font-bold text-lg text-foreground">
            ₹{course.price.toLocaleString('en-IN')}
          </div>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 font-medium">
            View Course
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
