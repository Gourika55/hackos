export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      <p className="text-muted-foreground">Manage approvals, resources, and view campus-wide analytics.</p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards */}
        <div className="p-6 border rounded-lg bg-card shadow-sm">
          <h3 className="font-semibold mb-2">Pending Events</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-6 border rounded-lg bg-card shadow-sm">
          <h3 className="font-semibold mb-2">Pending Bookings</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-6 border rounded-lg bg-card shadow-sm">
          <h3 className="font-semibold mb-2">Total Students</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
