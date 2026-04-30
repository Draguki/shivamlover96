import { DashboardSidebar } from "@/components/DashboardSidebar";
import { TopBar } from "@/components/TopBar";
import { StreakWidget } from "@/components/StreakWidget";
import { XPWidget } from "@/components/XPWidget";
import { Trophy, Medal, Star, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Achievements() {
  const badges = [
    { name: "First Steps", desc: "Completed first course", icon: Target, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", earned: true },
    { name: "Fast Learner", desc: "Finished a course in 1 day", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20", earned: true },
    { name: "Week Warrior", desc: "7 day streak", icon: Trophy, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", earned: true },
    { name: "Month Master", desc: "30 day streak", icon: Medal, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20", earned: false },
    { name: "Polyglot", desc: "Courses in 3 categories", icon: Star, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20", earned: false },
    { name: "Completionist", desc: "100% in a Learning Path", icon: Trophy, color: "text-primary", bg: "bg-primary/10", border: "border-primary/20", earned: false },
  ];

  const leaderboard = [
    { rank: 1, name: "Arjun Verma", xp: 12450, avatar: "/images/avatar-1.png", trend: "up" },
    { rank: 2, name: "Meera Reddy", xp: 11200, avatar: "/images/avatar-2.png", trend: "same" },
    { rank: 3, name: "Aarav Patel (You)", xp: 10850, avatar: "/images/avatar-1.png", trend: "up", isMe: true },
    { rank: 4, name: "Sarah Chen", xp: 9500, avatar: "/images/avatar-3.png", trend: "down" },
    { rank: 5, name: "Rohan Kumar", xp: 8200, avatar: "/images/avatar-1.png", trend: "up" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar greeting="Achievements" />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1200px] mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StreakWidget />
                  <XPWidget />
                </div>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Badges Collection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {badges.map((badge, i) => (
                        <div 
                          key={i} 
                          className={`p-4 rounded-xl border flex flex-col items-center text-center transition-all
                            ${badge.earned ? `${badge.bg} ${badge.border}` : 'bg-muted/50 border-transparent opacity-60 grayscale'}`}
                        >
                          <div className={`w-12 h-12 rounded-full mb-3 flex items-center justify-center bg-background border ${badge.earned ? badge.border : 'border-border'}`}>
                            <badge.icon className={`w-6 h-6 ${badge.earned ? badge.color : 'text-muted-foreground'}`} />
                          </div>
                          <h4 className="font-bold text-sm mb-1">{badge.name}</h4>
                          <p className="text-xs text-muted-foreground">{badge.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Right Column - Leaderboard */}
              <div className="lg:col-span-1">
                <Card className="border-border bg-card h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      Weekly Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {leaderboard.map((user) => (
                        <div 
                          key={user.rank} 
                          className={`flex items-center gap-3 p-3 rounded-lg transition-colors
                            ${user.isMe ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted'}`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                            ${user.rank === 1 ? 'bg-yellow-500 text-yellow-950' : 
                              user.rank === 2 ? 'bg-gray-300 text-gray-800' : 
                              user.rank === 3 ? 'bg-amber-600 text-amber-50' : 'text-muted-foreground'}`}
                          >
                            {user.rank}
                          </div>
                          
                          <Avatar className="w-10 h-10 border border-border">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-semibold truncate ${user.isMe ? 'text-primary' : 'text-foreground'}`}>
                              {user.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{user.xp.toLocaleString()} XP</p>
                          </div>
                          
                          {user.isMe && <Badge variant="default" className="text-[10px] h-5 px-1.5 bg-primary/20 text-primary hover:bg-primary/30 shadow-none border-none">You</Badge>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
