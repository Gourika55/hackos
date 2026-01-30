import { useAuth } from "@/contexts/AuthContext";
import { UserRole } from "@/types";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to their appropriate dashboard if they try to access a page not for them
    switch (user.role) {
      case "admin":
        return <Navigate to="/admin" replace />;
      case "organizer":
        return <Navigate to="/organizer" replace />;
      case "student":
        return <Navigate to="/student" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
}
