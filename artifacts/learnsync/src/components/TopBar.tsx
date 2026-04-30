import { Bell, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThemeToggle } from "./ThemeToggle";

interface TopBarProps {
  greeting?: string;
  onMenuClick?: () => void;
}

export function TopBar({ greeting = "Welcome back, Aarav", onMenuClick }: TopBarProps) {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="w-5 h-5" />
        </Button>
        <h1 className="text-lg md:text-xl font-semibold hidden sm:block">{greeting}</h1>
      </div>

      <div className="flex items-center gap-4 flex-1 justify-end">
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search courses, skills, or mentors..." 
            className="pl-9 bg-muted/50 border-transparent focus-visible:ring-primary rounded-full"
          />
        </div>

        <ThemeToggle />
        
        <Button variant="ghost" size="icon" className="relative rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
        </Button>

        <Avatar className="w-9 h-9 border border-border cursor-pointer lg:hidden">
          <AvatarImage src="/images/avatar-1.png" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
