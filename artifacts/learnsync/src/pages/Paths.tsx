import { DashboardSidebar } from "@/components/DashboardSidebar";
import { TopBar } from "@/components/TopBar";
import { LearningPathCard } from "@/components/LearningPathCard";
import { BrainCircuit } from "lucide-react";

export default function Paths() {
  const paths = [
    {
      title: "Machine Learning Engineer",
      description: "Master Python, PyTorch, and deploy production-grade models. Perfect for aspiring AI engineers.",
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      courseCount: 8,
      duration: "4 Months",
      salaryRange: "₹12L - ₹25L",
      nodes: [
        { id: "1", title: "Python Basics", type: "course" as const, status: "completed" as const },
        { id: "2", title: "Data Math", type: "course" as const, status: "current" as const },
        { id: "3", title: "PyTorch Basics", type: "course" as const, status: "locked" as const },
        { id: "4", title: "Deep Learning", type: "course" as const, status: "locked" as const },
        { id: "5", title: "Capstone", type: "project" as const, status: "locked" as const },
      ]
    },
    {
      title: "Full-Stack Web Developer",
      description: "Build modern web apps with React, Next.js, Node.js, and PostgreSQL. From zero to deployment.",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      courseCount: 12,
      duration: "6 Months",
      salaryRange: "₹8L - ₹18L",
      nodes: [
        { id: "1", title: "HTML/CSS", type: "course" as const, status: "completed" as const },
        { id: "2", title: "JavaScript", type: "course" as const, status: "completed" as const },
        { id: "3", title: "React", type: "course" as const, status: "completed" as const },
        { id: "4", title: "Next.js", type: "course" as const, status: "current" as const },
        { id: "5", title: "Backend", type: "course" as const, status: "locked" as const },
      ]
    },
    {
      title: "Product Designer (UI/UX)",
      description: "Learn Figma, design systems, user research, and build a stunning portfolio.",
      gradient: "bg-gradient-to-br from-pink-500 to-purple-600",
      courseCount: 6,
      duration: "3 Months",
      salaryRange: "₹7L - ₹15L",
      nodes: [
        { id: "1", title: "UX Basics", type: "course" as const, status: "locked" as const },
        { id: "2", title: "Figma Master", type: "course" as const, status: "locked" as const },
        { id: "3", title: "UI Design", type: "course" as const, status: "locked" as const },
        { id: "4", title: "Design Sys", type: "course" as const, status: "locked" as const },
        { id: "5", title: "Portfolio", type: "project" as const, status: "locked" as const },
      ]
    },
    {
      title: "Cybersecurity Specialist",
      description: "Learn ethical hacking, network defense, and cryptography to secure modern infrastructure.",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-700",
      courseCount: 9,
      duration: "5 Months",
      salaryRange: "₹10L - ₹22L",
      nodes: [
        { id: "1", title: "Networks", type: "course" as const, status: "locked" as const },
        { id: "2", title: "Linux Sys", type: "course" as const, status: "locked" as const },
        { id: "3", title: "Ethical Hack", type: "course" as const, status: "locked" as const },
        { id: "4", title: "Pen Testing", type: "course" as const, status: "locked" as const },
        { id: "5", title: "Cert Exam", type: "assessment" as const, status: "locked" as const },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar greeting="Learning Paths" />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1600px] mx-auto">
            
            {/* Hero */}
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4 border border-accent/20">
                  <BrainCircuit className="w-4 h-4" />
                  AI-Curated Paths
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Structured paths for structured success</h1>
                <p className="text-lg text-muted-foreground">
                  Don't know where to start? Pick a career goal and follow our AI-optimized roadmaps. 
                  Every path is designed to take you from beginner to job-ready.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {paths.map((path, i) => (
                <LearningPathCard key={i} {...path} />
              ))}
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}
