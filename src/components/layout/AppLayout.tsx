import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { LogOut, User as UserIcon } from 'lucide-react';

export default function AppLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <span>UniFlow</span>
          </Link>

          <nav className="flex items-center gap-4">
            {user ? (
              <>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>{user.name} ({user.role})</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} UniFlow. All rights reserved.
      </footer>
    </div>
  );
}
