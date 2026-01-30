import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-40 fade-mask-b" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl animate-pulse-slow" />
      
      <div className="container-narrow relative z-10 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm mb-8">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Unified Campus Management</span>
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-up-delay-1 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          One platform to manage
          <br />
          <span className="gradient-text">every campus event</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up-delay-2 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          Centralize event approvals, resource booking, and student registrations. 
          Eliminate conflicts, reduce overhead, and bring clarity to campus operations.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl" className="group">
            Get started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="hero-outline" size="xl" className="group">
            <Play className="h-4 w-4" />
            View demo
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { value: "50+", label: "Universities" },
            { value: "10k+", label: "Events managed" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
