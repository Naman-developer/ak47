import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ATPFOLIO
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/builder" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Portfolio Builder
          </Link>
          <Link to="/ai-assistant" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            AI Assistant
          </Link>
          <Link to="/expression-analyzer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Expression Analyzer
          </Link>
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/builder">
            <Button size="sm" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
