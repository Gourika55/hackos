import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, ShieldCheck, CheckCircle } from "lucide-react";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-16 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
          Unified Campus Resource & <br /> Event Management
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          One platform to manage all campus events, club activities, registrations, and resource bookings.
          No more spreadsheets or clashing schedules.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link to="/register">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
        <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
          <Calendar className="h-10 w-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">Centralized Events</h3>
          <p className="text-muted-foreground">All campus events in one place with built-in registration forms.</p>
        </div>
        <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
          <ShieldCheck className="h-10 w-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">Admin Control</h3>
          <p className="text-muted-foreground">Complete visibility and approval workflows for authorities.</p>
        </div>
        <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
          <Users className="h-10 w-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">Club Management</h3>
          <p className="text-muted-foreground">Organizers can manage events and participants easily.</p>
        </div>
        <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
          <CheckCircle className="h-10 w-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">Conflict Free</h3>
          <p className="text-muted-foreground">Automated checks to prevent room and schedule clashes.</p>
        </div>
      </section>
    </div>
  );
}
