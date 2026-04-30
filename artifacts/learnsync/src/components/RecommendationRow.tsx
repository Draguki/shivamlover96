import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Course } from "@/data/courses";
import { CourseCard } from "./CourseCard";
import { Button } from "./ui/button";

interface RecommendationRowProps {
  title: string;
  courses: Course[];
  onCourseClick: (course: Course) => void;
}

export function RecommendationRow({ title, courses, onCourseClick }: RecommendationRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (!courses.length) return null;

  return (
    <div className="mb-10 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => scroll("left")} className="h-8 w-8 rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll("right")} className="h-8 w-8 rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 -mx-2 snap-x snap-mandatory scrollbar-hide w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course) => (
            <div key={course.id} className="min-w-[320px] max-w-[320px] md:min-w-[360px] md:max-w-[360px] snap-start shrink-0">
              <CourseCard course={course} onClick={() => onCourseClick(course)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
