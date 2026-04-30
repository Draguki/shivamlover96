import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { TopBar } from "@/components/TopBar";
import { RecommendationRow } from "@/components/RecommendationRow";
import { StreakWidget } from "@/components/StreakWidget";
import { XPWidget } from "@/components/XPWidget";
import { ProgressChart } from "@/components/ProgressChart";
import { SkillRoadmapWidget } from "@/components/SkillRoadmapWidget";
import { CoursePreviewModal } from "@/components/CoursePreviewModal";
import { courses, Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function Dashboard() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const recommendedCourses = courses.filter(c => c.isRecommended);
  const trendingCourses = courses.filter(c => c.isTrending);
  const newCourses = courses.filter(c => c.isNew);
  
  const continueCourse = courses[0];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col xl:flex-row gap-8">
              {/* Left Column (Main Content) */}
              <div className="flex-1 min-w-0">
                
                {/* Continue Learning Hero Card */}
                <section className="mb-10">
                  <h2 className="text-xl font-bold mb-4 tracking-tight">Continue Learning</h2>
                  <div className="relative rounded-2xl overflow-hidden bg-card border border-border group cursor-pointer flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full md:w-1/3 aspect-video md:aspect-auto relative bg-muted">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${continueCourse.thumbnail})` }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{continueCourse.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-6">Module 4: Advanced React Patterns</p>
                      
                      <div className="mt-auto">
                        <div className="flex justify-between text-sm mb-2 font-medium">
                          <span>Progress</span>
                          <span className="text-primary">65%</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[65%]" />
                        </div>
                        <Button className="mt-6 shadow-sm">Resume Course</Button>
                      </div>
                    </div>
                  </div>
                </section>

                <RecommendationRow 
                  title="Recommended for you" 
                  courses={recommendedCourses} 
                  onCourseClick={setSelectedCourse} 
                />
                
                <RecommendationRow 
                  title="Trending This Week" 
                  courses={trendingCourses} 
                  onCourseClick={setSelectedCourse} 
                />

                <RecommendationRow 
                  title="New Releases" 
                  courses={newCourses} 
                  onCourseClick={setSelectedCourse} 
                />
                
              </div>

              {/* Right Column (Widgets) */}
              <div className="w-full xl:w-[320px] shrink-0 space-y-6">
                <StreakWidget />
                <XPWidget />
                <ProgressChart />
                <SkillRoadmapWidget />
              </div>
            </div>
            
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
