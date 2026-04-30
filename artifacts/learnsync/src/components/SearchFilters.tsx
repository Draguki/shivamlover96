import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, Filter, SlidersHorizontal, Sparkles } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const filters = [
  "All", "Beginner", "Intermediate", "Advanced", "Free", "Premium", "Certificate", "Short < 2hrs"
];

export function SearchFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="space-y-6 mb-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
          </div>
          <Input 
            className="pl-12 h-14 rounded-2xl bg-card border-border/50 text-lg shadow-sm focus-visible:ring-primary focus-visible:border-primary transition-all" 
            placeholder="Ask AI: I want to learn full-stack web development starting from zero..." 
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <Button size="sm" className="rounded-xl px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              Search
            </Button>
          </div>
        </div>
        <Button variant="outline" className="h-14 px-6 rounded-2xl bg-card border-border/50 shadow-sm gap-2">
          <SlidersHorizontal className="w-5 h-5" />
          Filters
        </Button>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter) => (
          <Badge
            key={filter}
            variant={activeFilter === filter ? "default" : "secondary"}
            className={`px-4 py-2 text-sm cursor-pointer whitespace-nowrap rounded-full transition-all ${
              activeFilter === filter 
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" 
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border-transparent"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Badge>
        ))}
      </div>
    </div>
  );
}
