import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, User, CheckCircle2, PlayCircle } from "lucide-react";
import { Course } from "@/data/courses";

interface CoursePreviewModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CoursePreviewModal({ course, isOpen, onClose }: CoursePreviewModalProps) {
  if (!course) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border gap-0">
        <div className="relative aspect-[21/9] w-full bg-muted">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={
              course.thumbnail.startsWith('linear-gradient') 
                ? { background: course.thumbnail } 
                : { backgroundImage: `url(${course.thumbnail})` }
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="icon" className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30">
              <PlayCircle className="w-8 h-8" />
            </Button>
          </div>

          <div className="absolute bottom-4 left-6 flex gap-2">
            <Badge className="bg-primary hover:bg-primary text-white border-none">{course.matchPercentage}% AI Match</Badge>
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">{course.difficulty}</Badge>
          </div>
        </div>

        <div className="p-6">
          <DialogHeader className="mb-4 text-left">
            <DialogTitle className="text-2xl font-bold">{course.title}</DialogTitle>
            <DialogDescription className="text-base mt-2">
              {course.description}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium text-foreground">{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium">{course.rating.toFixed(1)}</span>
              <span className="text-muted-foreground ml-1">({course.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <div>
              <span>{course.enrolledCount.toLocaleString()} students enrolled</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="font-semibold mb-3">What you'll learn</h4>
              <ul className="space-y-2">
                {["Build production-ready applications", "Master core concepts and advanced patterns", "Implement secure authentication flows", "Deploy and scale your application"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Skills you'll gain</h4>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-muted/50 text-foreground font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="sm:justify-between items-center mt-2 border-t border-border pt-6">
            <div className="flex flex-col mb-4 sm:mb-0">
              <span className="text-sm text-muted-foreground">Full Lifetime Access</span>
              <span className="text-2xl font-bold">₹{course.price.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button className="px-8 shadow-lg shadow-primary/20">Enroll Now</Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
