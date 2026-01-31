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
    <div className="min-h-screen flex flex-col bg-black font-body text-white selection:bg-primary selection:text-black">
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 text-2xl font-black tracking-tighter uppercase text-white hover:opacity-80 transition-opacity">
            <span className="text-white">Uni</span>
            <span className="text-primary">Flow</span>
          </Link>

          <nav className="flex items-center gap-8">
            {user ? (
              <>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white">
                  <UserIcon className="h-4 w-4 text-primary" />
                  <span className="font-bold text-xs uppercase tracking-wider">{user.name}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-transparent">
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-8">
                <Link to="/login" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                  Login
                </Link>
                <Link to="/register" className="agency-button bg-white text-black hover:bg-primary px-6 py-3 text-[10px]">
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1 relative pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-black py-12 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-black tracking-tighter uppercase text-white">
              Uni<span className="text-primary">Flow</span>
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} UniFlow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
