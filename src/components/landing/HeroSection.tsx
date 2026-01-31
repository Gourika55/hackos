import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";
import ReactiveBackground from "./ReactiveBackground";
import gsap from "gsap";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Text Reveal
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });

      // Button Reveal
      gsap.from(".hero-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 1
      });

      // Stats Reveal
      gsap.from(".hero-stat", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1.2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center overflow-hidden bg-black selection:bg-primary selection:text-black">
      {/* WebGL Reactive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <ReactiveBackground />
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center">
        {/* Left Content Area */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full pt-20">
          
          {/* Badge / Top Label */}
          <div className="hero-line overflow-hidden mb-6">
            <div className="inline-flex items-center gap-3 border border-white/20 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                Campus OS v2.0
              </span>
            </div>
          </div>

          {/* Main Headline - Broken into lines for animation */}
          <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
            <div className="overflow-hidden"><div className="hero-line">Unified</div></div>
            <div className="overflow-hidden"><div className="hero-line">Campus</div></div>
            <div className="overflow-hidden"><div className="hero-line text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Orchestration</div></div>
          </h1>

          {/* Subtext */}
          <div className="hero-line max-w-lg mb-12">
            <p className="text-lg md:text-xl font-medium text-gray-400 leading-relaxed">
              A full-service platform designing digital experiences for universities and students around the world.
            </p>
          </div>

          {/* CTA Area */}
          <div className="hero-btn flex items-center gap-6">
            <Button className="agency-button bg-primary text-black hover:bg-white hover:text-black">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Play className="h-4 w-4 fill-current" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                Watch Showreel
              </span>
            </div>
          </div>
        </div>

        {/* Right / Bottom Content (Stats) */}
        <div className="lg:col-span-5 flex flex-col justify-end pb-20 h-full pointer-events-none">
           <div className="flex flex-col gap-8 pointer-events-auto">
              {[
                { label: "Universities", value: "50+" },
                { label: "Events Managed", value: "10k+" },
                { label: "Uptime", value: "99.9%" }
              ].map((stat, i) => (
                <div key={i} className="hero-stat group">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">{stat.label}</div>
                  <div className="text-4xl font-black text-white tracking-tighter">{stat.value}</div>
                </div>
              ))}
           </div>
        </div>
      </div>
      
      {/* Decorative Progress Bar (Visual only, like reference) */}
      <div className="absolute bottom-10 left-0 w-full px-8 md:px-20 z-20">
         <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/3 animate-[shimmer_2s_infinite]"></div>
         </div>
      </div>
    </section>
  );
};

export default HeroSection;
