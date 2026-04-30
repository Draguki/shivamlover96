import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { TopBar } from "@/components/TopBar";
import { SearchFilters } from "@/components/SearchFilters";
import { CourseCard } from "@/components/CourseCard";
import { RecommendationRow } from "@/components/RecommendationRow";
import { CoursePreviewModal } from "@/components/CoursePreviewModal";
import { courses, categories, Course } from "@/data/courses";

export default function Explore() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar greeting="Explore" />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1600px] mx-auto">
            
            <SearchFilters />

            {/* Categories Grid */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 tracking-tight">Explore by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {categories.map((category, i) => (
                  <div 
                    key={category}
                    className="aspect-square rounded-2xl p-4 flex items-end relative overflow-hidden group cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--primary)/0.${1+i}), hsl(var(--accent)/0.${2+i}))`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <span className="font-bold text-white relative z-20 text-sm sm:text-base leading-tight drop-shadow-md">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <RecommendationRow 
              title="Because you learned React" 
              courses={courses.filter(c => c.tags.includes("Next.js") || c.tags.includes("React") || c.tags.includes("CSS"))} 
              onCourseClick={setSelectedCourse} 
            />
            
            <RecommendationRow 
              title="Top Rated in AI/ML" 
              courses={courses.filter(c => c.category === "AI/ML")} 
              onCourseClick={setSelectedCourse} 
            />

            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight">All Courses</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map(course => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    onClick={() => setSelectedCourse(course)} 
                  />
                ))}
              </div>
            </section>
            
          </div>
        </main>
      </div>

      <CoursePreviewModal 
        course={selectedCourse} 
        isOpen={!!selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />
    </div>
  );
}
