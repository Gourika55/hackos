import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <div className="h-4 w-4 rounded-sm bg-primary" />
          </div>
          <span className="font-semibold text-lg tracking-tight">CampusOS</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="#resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button variant="hero" size="sm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
