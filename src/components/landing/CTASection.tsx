import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Bring structure to
              <br />
              <span className="gradient-text">campus operations</span>
            </h2>
            
            <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10">
              Join universities worldwide in modernizing their event and resource 
              management. Start your transformation today.
            </p>

            <Button variant="hero" size="xl" className="group">
              Get started today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="mt-6 text-sm text-muted-foreground">
              Free trial available • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
