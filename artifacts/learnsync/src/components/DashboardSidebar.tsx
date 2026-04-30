import { Link, useLocation } from "wouter";
import { 
  Home, 
  Compass, 
  BookOpen, 
  Map, 
  Trophy, 
  Users, 
  Settings,
  BarChart3,
  LogOut,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface SidebarProps {
  isAdmin?: boolean;
}

export function DashboardSidebar({ isAdmin = false }: SidebarProps) {
  const [location] = useLocation();

  const userNav = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Explore", href: "/explore", icon: Compass },
    { name: "My Learning", href: "/learning", icon: BookOpen },
    { name: "Paths", href: "/paths", icon: Map },
    { name: "Achievements", href: "/achievements", icon: Trophy },
    { name: "Community", href: "/community", icon: Users },
  ];

  const adminNav = [
    { name: "Analytics", href: "/admin", icon: BarChart3 },
    { name: "Manage Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const navItems = isAdmin ? adminNav : userNav;

  return (
    <aside className="w-64 border-r border-border bg-card h-screen sticky top-0 flex flex-col hidden lg:flex">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight">LearnSync</span>
        </Link>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-1 mb-8">
          <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            {isAdmin ? "Admin Menu" : "Menu"}
          </p>
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                {item.name}
              </Link>
            )
          })}
        </div>

        {!isAdmin && (
          <div className="space-y-1">
            <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Preferences
            </p>
            <Link 
              href="/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar className="w-9 h-9 border border-border">
            <AvatarImage src="/images/avatar-1.png" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-sm font-medium truncate">Aarav Patel</span>
            <span className="text-xs text-muted-foreground truncate">{isAdmin ? 'Administrator' : 'Pro Learner'}</span>
          </div>
          <button className="text-muted-foreground hover:text-destructive transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
