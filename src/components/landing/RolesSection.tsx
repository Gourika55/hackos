import { LayoutDashboard, CalendarDays, GraduationCap, Shield, ChevronRight, Users, BarChart3, Clock } from "lucide-react";

const roles = [
  {
    icon: Shield,
    role: "Administrator",
    title: "Complete oversight",
    description: "Full visibility into all campus events, resources, and analytics. Approve requests, manage permissions, and monitor utilization.",
    features: ["Approval workflows", "Resource allocation", "Audit logs"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: CalendarDays,
    role: "Organizer",
    title: "Streamlined planning",
    description: "Submit events, book resources, and track registrations from a single dashboard. No more juggling multiple systems.",
    features: ["Event creation", "Attendee management", "Budget tracking"],
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: GraduationCap,
    role: "Student",
    title: "Effortless discovery",
    description: "Browse events, register instantly, and get personalized recommendations. Your campus life, organized.",
    features: ["Event discovery", "One-click registration", "Calendar sync"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
];

const RolesSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
            Role-Based Experience
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Tailored for every user
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Whether you're an administrator, event organizer, or student—get exactly 
            the tools and views you need.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <div
              key={i}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-b ${role.gradient} p-6 flex items-end`}>
                <div className="h-12 w-12 rounded-xl bg-background/90 backdrop-blur flex items-center justify-center">
                  <role.icon className="h-6 w-6 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground font-medium mb-1">{role.role}</p>
                <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {role.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard preview hint */}
        <div className="mt-16 glass-card p-8 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <LayoutDashboard className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Unified Dashboard</h3>
                <p className="text-muted-foreground text-sm">All views accessible from one interface</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              {[
                { icon: Users, label: "5,000+ users" },
                { icon: BarChart3, label: "Real-time analytics" },
                { icon: Clock, label: "24/7 access" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
