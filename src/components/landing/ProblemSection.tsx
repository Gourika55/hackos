import { AlertTriangle, Calendar, FileX, Users } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "Scattered Forms",
    description: "Event requests lost in email threads and paper forms with no tracking.",
  },
  {
    icon: Calendar,
    title: "Resource Conflicts",
    description: "Double-booked venues and equipment causing last-minute chaos.",
  },
  {
    icon: Users,
    title: "Registration Chaos",
    description: "Multiple disconnected systems for student sign-ups and attendance.",
  },
  {
    icon: AlertTriangle,
    title: "Zero Visibility",
    description: "No unified view of campus activities for administrators.",
  },
];

const ProblemSection = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Campus systems are fragmented
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Disconnected tools create confusion, delays, and missed opportunities. 
            Managing events shouldn't feel like chaos.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="glass-card-hover p-6 group"
            >
              <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="h-6 w-6 text-destructive/80" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
