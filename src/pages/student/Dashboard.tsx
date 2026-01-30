export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
      <p className="text-muted-foreground">View upcoming events and your registrations.</p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 border rounded-lg bg-card shadow-sm">
          <h3 className="font-semibold mb-2">Upcoming Events</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-6 border rounded-lg bg-card shadow-sm">
          <h3 className="font-semibold mb-2">My Registrations</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
