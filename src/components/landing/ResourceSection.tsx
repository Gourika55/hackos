import { Calendar, Check, Clock, MapPin } from "lucide-react";

const timeSlots = [
  { time: "9:00", status: "available" },
  { time: "10:00", status: "booked" },
  { time: "11:00", status: "booked" },
  { time: "12:00", status: "available" },
  { time: "13:00", status: "available" },
  { time: "14:00", status: "pending" },
  { time: "15:00", status: "available" },
  { time: "16:00", status: "booked" },
];

const venues = [
  { name: "Main Auditorium", capacity: 500, available: true },
  { name: "Conference Room A", capacity: 30, available: true },
  { name: "Seminar Hall", capacity: 150, available: false },
  { name: "Open Amphitheater", capacity: 1000, available: true },
];

const ResourceSection = () => {
  return (
    <section id="resources" className="section-padding relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
              Resource Management
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Conflict-free booking,
              <br />
              <span className="text-muted-foreground">always</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Visual timelines and intelligent scheduling ensure venues and equipment 
              are never double-booked. See availability at a glance, reserve instantly.
            </p>

            <div className="space-y-4">
              {[
                "Real-time availability checks",
                "Automatic conflict detection",
                "Equipment and venue bundling",
                "Waitlist management",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="space-y-6">
            {/* Timeline card */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Today's Schedule</span>
                </div>
                <span className="text-xs text-muted-foreground">Main Auditorium</span>
              </div>

              <div className="grid grid-cols-8 gap-2">
                {timeSlots.map((slot, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`h-16 rounded-lg mb-2 transition-colors ${
                        slot.status === "booked"
                          ? "bg-destructive/20 border border-destructive/30"
                          : slot.status === "pending"
                          ? "bg-accent/30 border border-accent/50"
                          : "bg-primary/10 border border-primary/20 hover:bg-primary/20"
                      }`}
                    />
                    <span className="text-xs text-muted-foreground">{slot.time}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-primary/20 border border-primary/30" />
                  <span className="text-xs text-muted-foreground">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-destructive/20 border border-destructive/30" />
                  <span className="text-xs text-muted-foreground">Booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-accent/40 border border-accent/60" />
                  <span className="text-xs text-muted-foreground">Pending</span>
                </div>
              </div>
            </div>

            {/* Venues list */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Available Venues</span>
              </div>

              <div className="space-y-3">
                {venues.map((venue, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                      venue.available
                        ? "border-border/50 hover:border-primary/30 hover:bg-primary/5"
                        : "border-border/30 opacity-50"
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium">{venue.name}</p>
                      <p className="text-xs text-muted-foreground">Capacity: {venue.capacity}</p>
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded ${
                        venue.available
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {venue.available ? "Available" : "Booked"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
