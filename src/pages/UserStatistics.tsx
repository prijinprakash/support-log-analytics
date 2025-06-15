
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import Footer from "@/components/Footer";
import { ChartLine, Activity, Clock, Target, TrendingUp } from "lucide-react";

const UserStatistics = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex flex-col flex-1">
        <TabNavigation />
        <main className="flex-1 container mx-auto px-4 py-8" style={{ minHeight: "calc(100vh - 44px - 60px - 33px)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <ChartLine size={32} className="text-primary" />
              <h1 className="text-3xl font-bold">User Statistics</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Stat Cards */}
              <div className="bg-card rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Activity size={20} className="text-blue-500" />
                  <span className="text-sm font-medium text-muted-foreground">Total Activity</span>
                </div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-sm text-green-500">+12% from last month</div>
              </div>

              <div className="bg-card rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={20} className="text-orange-500" />
                  <span className="text-sm font-medium text-muted-foreground">Time Spent</span>
                </div>
                <div className="text-2xl font-bold">24.5h</div>
                <div className="text-sm text-green-500">+8% from last week</div>
              </div>

              <div className="bg-card rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Target size={20} className="text-purple-500" />
                  <span className="text-sm font-medium text-muted-foreground">Goals Completed</span>
                </div>
                <div className="text-2xl font-bold">18/25</div>
                <div className="text-sm text-blue-500">72% completion rate</div>
              </div>

              <div className="bg-card rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp size={20} className="text-green-500" />
                  <span className="text-sm font-medium text-muted-foreground">Productivity Score</span>
                </div>
                <div className="text-2xl font-bold">87/100</div>
                <div className="text-sm text-green-500">+5 points this week</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Activity Chart */}
              <div className="bg-card rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
                <div className="h-64 flex items-end justify-between gap-2">
                  {/* Mock chart bars */}
                  {[40, 65, 45, 80, 55, 70, 85].map((height, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div 
                        className="bg-primary rounded-t w-8 transition-all hover:opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-muted-foreground">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium">Completed task review</div>
                      <div className="text-sm text-muted-foreground">2 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded border">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium">Updated project settings</div>
                      <div className="text-sm text-muted-foreground">5 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded border">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium">Attended team meeting</div>
                      <div className="text-sm text-muted-foreground">1 day ago</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded border">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium">Submitted weekly report</div>
                      <div className="text-sm text-muted-foreground">2 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserStatistics;
