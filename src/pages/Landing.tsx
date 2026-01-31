import HeroSection from "@/components/landing/HeroSection";
import { Calendar, Users, ShieldCheck, CheckCircle } from "lucide-react";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-4 container mx-auto relative z-10">
        <div className="p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all rounded-lg">
          <Calendar className="h-10 w-10 text-primary mb-4 stroke-[2px]" />
          <h3 className="font-bold text-xl mb-2 text-black">Centralized Events</h3>
          <p className="font-medium text-gray-600">All campus events in one place with built-in registration forms.</p>
        </div>
        <div className="p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all rounded-lg">
          <ShieldCheck className="h-10 w-10 text-black mb-4 stroke-[2px]" />
          <h3 className="font-bold text-xl mb-2 text-black">Admin Control</h3>
          <p className="font-medium text-gray-600">Complete visibility and approval workflows for authorities.</p>
        </div>
        <div className="p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all rounded-lg">
          <Users className="h-10 w-10 text-primary mb-4 stroke-[2px]" />
          <h3 className="font-bold text-xl mb-2 text-black">Club Management</h3>
          <p className="font-medium text-gray-600">Organizers can manage events and participants easily.</p>
        </div>
        <div className="p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all rounded-lg">
          <CheckCircle className="h-10 w-10 text-black mb-4 stroke-[2px]" />
          <h3 className="font-bold text-xl mb-2 text-black">Conflict Free</h3>
          <p className="font-medium text-gray-600">Automated checks to prevent room and schedule clashes.</p>
        </div>
      </section>
    </div>
  );
}
