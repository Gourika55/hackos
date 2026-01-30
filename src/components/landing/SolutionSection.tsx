import { ArrowRight, CheckCircle2, ClipboardList, Users, Building } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Events",
    description: "Submit and track event proposals",
  },
  {
    icon: CheckCircle2,
    title: "Approval",
    description: "Multi-level review workflow",
  },
  {
    icon: Users,
    title: "Registration",
    description: "Student sign-ups & attendance",
  },
  {
    icon: Building,
    title: "Resources",
    description: "Venue & equipment booking",
  },
];

const SolutionSection = () => {
  return (
    <section id="solutions" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container-narrow relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
            The Solution
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            One unified workflow
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From event creation to resource allocation—every step connected, 
            every stakeholder aligned.
          </p>
        </div>

        {/* Workflow visualization */}
        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex md:flex-col items-center md:text-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
                
                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-8 -right-2 translate-x-1/2 text-muted-foreground/30">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Architecture diagram hint */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {["Database Sync", "Real-time Updates", "Access Control"].map((label, i) => (
                <div key={i} className="text-center py-3 px-4 rounded-lg bg-muted/30 border border-border/30">
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
