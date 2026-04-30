import { DashboardSidebar } from "@/components/DashboardSidebar";
import { TopBar } from "@/components/TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";
import { Users, BookOpen, CreditCard, Activity } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Admin() {
  const kpis = [
    { title: "Total Users", value: "142,384", change: "+12.5%", icon: Users },
    { title: "Active Learners", value: "48,210", change: "+5.2%", icon: Activity },
    { title: "Active Courses", value: "342", change: "+12", icon: BookOpen },
    { title: "Monthly Revenue", value: "₹4.2M", change: "+18.1%", icon: CreditCard },
  ];

  const userGrowthData = [
    { name: "Jan", users: 4000 },
    { name: "Feb", users: 5500 },
    { name: "Mar", users: 7200 },
    { name: "Apr", users: 8100 },
    { name: "May", users: 11000 },
    { name: "Jun", users: 15400 },
    { name: "Jul", users: 18200 },
    { name: "Aug", users: 22000 },
  ];

  const courseData = [
    { name: "React 19", enrollments: 8500 },
    { name: "PyTorch ML", enrollments: 4200 },
    { name: "Ethical Hack", enrollments: 15600 },
    { name: "Ableton", enrollments: 10200 },
    { name: "Figma", enrollments: 7800 },
  ];

  const revenueData = [
    { name: "B2C Subs", value: 65 },
    { name: "B2B Enterprise", value: 25 },
    { name: "One-off Sales", value: 10 },
  ];
  const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--chart-4))'];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar isAdmin={true} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar greeting="Admin Dashboard" />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1600px] mx-auto space-y-8">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, i) => (
                <Card key={i} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                        <p className="text-3xl font-bold text-foreground">{kpi.value}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <kpi.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-green-500 font-medium">{kpi.change}</span>
                      <span className="text-muted-foreground ml-2">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Chart */}
              <Card className="col-span-1 lg:col-span-2 border-border bg-card">
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={userGrowthData}>
                        <defs>
                          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                          itemStyle={{ color: 'hsl(var(--foreground))' }}
                        />
                        <Area type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#colorUsers)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Pie Chart */}
              <Card className="col-span-1 border-border bg-card">
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                  <div className="h-[220px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={revenueData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                        >
                          {revenueData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 mt-4 w-full">
                    {revenueData.map((entry, index) => (
                      <div key={index} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                        {entry.name} ({entry.value}%)
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bar Chart */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Course Popularity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={courseData} layout="vertical" margin={{ left: 30 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                        <Tooltip 
                          cursor={{ fill: 'hsl(var(--muted))' }}
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                        />
                        <Bar dataKey="enrollments" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Table */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border hover:bg-transparent">
                        <TableHead>User</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { user: "Aarav P.", plan: "Pro Annual", amount: "₹12,999", status: "success" },
                        { user: "Sarah C.", plan: "Team Monthly", amount: "₹4,999", status: "success" },
                        { user: "Company X", plan: "Enterprise", amount: "₹45,000", status: "pending" },
                        { user: "Rahul S.", plan: "Pro Monthly", amount: "₹1,999", status: "success" },
                        { user: "Priya D.", plan: "Course Only", amount: "₹3,499", status: "failed" },
                      ].map((tx, i) => (
                        <TableRow key={i} className="border-border hover:bg-muted/50">
                          <TableCell className="font-medium">{tx.user}</TableCell>
                          <TableCell className="text-muted-foreground">{tx.plan}</TableCell>
                          <TableCell>{tx.amount}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={
                              tx.status === 'success' ? 'text-green-500 border-green-500/20 bg-green-500/10' :
                              tx.status === 'pending' ? 'text-yellow-500 border-yellow-500/20 bg-yellow-500/10' :
                              'text-red-500 border-red-500/20 bg-red-500/10'
                            }>
                              {tx.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
