import { BarChart3, TrendingUp, Eye, Activity } from "lucide-react";

const AnalyticsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left visual */}
          <div className="order-2 lg:order-1">
            <div className="glass-card p-6 mb-6">
              {/* Chart header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-medium">Event Analytics</p>
                  <p className="text-xs text-muted-foreground">Last 7 days</p>
                </div>
                <div className="flex items-center gap-2 text-primary text-sm">
                  <TrendingUp className="h-4 w-4" />
                  +24%
                </div>
              </div>

              {/* Abstract chart */}
              <div className="h-48 flex items-end justify-between gap-3">
                {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div
                      className="rounded-t-lg bg-gradient-to-t from-primary/30 to-primary/60 transition-all hover:from-primary/40 hover:to-primary/70"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                  <span key={i}>{day}</span>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: BarChart3, value: "1,234", label: "Events this month" },
                { icon: Eye, value: "89%", label: "Resource utilization" },
                { icon: Activity, value: "4.2k", label: "Active registrations" },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <stat.icon className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
              Analytics & Visibility
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Insights that drive
              <br />
              <span className="text-muted-foreground">better decisions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Real-time dashboards give administrators complete visibility into campus 
              activities. Track attendance, monitor resource usage, and identify trends.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Live Dashboards", desc: "Real-time event monitoring" },
                { title: "Usage Reports", desc: "Resource utilization metrics" },
                { title: "Trend Analysis", desc: "Historical data insights" },
                { title: "Export Tools", desc: "PDF and CSV reporting" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <p className="font-medium text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
