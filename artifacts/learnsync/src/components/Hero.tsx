import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 dark:opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-blue-500 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
        </div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-primary to-accent blur-[120px] rounded-full mix-blend-screen" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              LearnSync 3.0 is live
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Your personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI mentor</span> for career growth.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Curated, Netflix-quality courses personalized to your goals. 
              Master tech, business, and design skills faster with intelligent paths.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-14 px-8 rounded-full text-base font-medium w-full sm:w-auto shadow-lg shadow-primary/25" asChild>
                <Link href="/dashboard">
                  Start learning for free
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-medium w-full sm:w-auto bg-background/50 backdrop-blur-md">
                <Play className="w-5 h-5 mr-2" />
                See how it works
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`/images/avatar-${(i % 3) + 1}.png`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Join 100,000+ ambitious learners</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative w-full max-w-2xl lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/20 aspect-[16/10] bg-muted/20 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 z-10" />
              <img 
                src="/images/dashboard-mockup.png" 
                alt="LearnSync Dashboard Interface" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating UI Elements */}
              <motion.div 
                className="absolute top-6 -left-6 bg-card border border-border shadow-xl rounded-xl p-4 flex items-center gap-4 z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Course Completed</p>
                  <p className="text-xs text-muted-foreground">+500 XP Earned</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
