export default function OrganizerDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Organizer Dashboard</h1>
      <p className="text-muted-foreground">Manage your club events and resource bookings.</p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 border rounded-lg bg-card shadow-sm">
          <h3 className="font-semibold mb-2">My Events</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-6 border rounded-lg bg-card shadow-sm">
          <h3 className="font-semibold mb-2">Total Registrations</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
