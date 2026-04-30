import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { CoursePreviewModal } from "@/components/CoursePreviewModal";
import { courses, categories, Course } from "@/data/courses";
import { motion } from "framer-motion";
import { BrainCircuit, Target, Route, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const featuredCourses = courses.slice(0, 4);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        {/* Trust Bar */}
        <section className="py-12 border-y border-border/50 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8">
              TRUSTED BY LEARNERS AT INNOVATIVE COMPANIES
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {['Google', 'Microsoft', 'Flipkart', 'Razorpay', 'Swiggy', 'Zomato'].map((company) => (
                <div key={company} className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Bento */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Master any discipline</h2>
              <p className="text-lg text-muted-foreground">
                World-class curriculum across 8 key domains. Pick a track and let AI build your perfect syllabus.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`aspect-square rounded-3xl p-6 flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-border/50 shadow-sm`}
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--card)), hsl(var(--muted)))`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                  
                  <h3 className="text-xl font-bold text-white relative z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                    {category}
                  </h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity relative z-20 mt-2">
                    Explore courses →
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Personalization Showcase */}
        <section className="py-24 bg-card border-y border-border relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
                <BrainCircuit className="w-4 h-4" />
                LearnSync AI Engine
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Stop guessing. Start learning.</h2>
              <p className="text-lg text-muted-foreground">
                Our AI analyzes your goals, current skill level, and learning style to generate the perfect roadmap.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
              <div className="bg-background rounded-2xl p-6 border border-border shadow-lg relative">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Your Goals</h3>
                <p className="text-muted-foreground text-sm">Tell us what you want to build or achieve. "I want to be a full-stack developer in 6 months."</p>
                
                <div className="absolute top-1/2 -right-4 translate-x-full hidden md:block text-muted-foreground">
                  →
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.1)] relative scale-105 z-10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-4 shadow-lg shadow-primary/30">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">2. AI Analysis</h3>
                <p className="text-muted-foreground text-sm">Our engine maps out the exact dependencies and skills required, filtering millions of data points.</p>
                
                <div className="absolute top-1/2 -right-4 translate-x-full hidden md:block text-muted-foreground">
                  →
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border shadow-lg relative">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-4">
                  <Route className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Curated Path</h3>
                <p className="text-muted-foreground text-sm">You get a step-by-step syllabus with the best courses, projects, and assessments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trending this week</h2>
                <p className="text-lg text-muted-foreground">The most popular courses among ambitious learners.</p>
              </div>
              <Button variant="ghost" className="hidden md:flex">View all courses →</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  onClick={() => setSelectedCourse(course)}
                />
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-8 md:hidden">View all courses</Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Don't just take our word for it</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Rahul Sharma", role: "Frontend Engineer at Swiggy", text: "LearnSync's AI paths saved me hundreds of hours. It knew exactly what I needed to learn next to level up to a Senior role.", avatar: "/images/avatar-1.png" },
                { name: "Priya Desai", role: "Product Designer", text: "The quality of the courses is unmatched. It genuinely feels like having a personal mentor curating the best content on the internet.", avatar: "/images/avatar-2.png" },
                { name: "Alex Chen", role: "Data Scientist", text: "I was stuck in tutorial hell for months. The structured roadmap with real projects finally got me job-ready.", avatar: "/images/avatar-3.png" },
              ].map((t, i) => (
                <div key={i} className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg leading-relaxed mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to accelerate your career?</h2>
                <p className="text-xl text-white/90 mb-10">
                  Join thousands of learners mastering new skills with AI-powered personalization.
                </p>
                <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-primary hover:bg-white/90 shadow-xl">
                  Start learning today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CoursePreviewModal 
        course={selectedCourse} 
        isOpen={!!selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />
    </div>
  );
}
