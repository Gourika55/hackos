const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-primary/20 flex items-center justify-center">
              <div className="h-3.5 w-3.5 rounded-sm bg-primary" />
            </div>
            <span className="font-semibold tracking-tight">CampusOS</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {["Documentation", "Support", "Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 CampusOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
