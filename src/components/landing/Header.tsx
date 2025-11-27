import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Nitra³AI Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#problemes" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Défis
            </a>
            <a 
              href="#piliers" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Solutions
            </a>
            <a 
              href="#modules" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Modules
            </a>
            <a 
              href="#agents" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Agents IA
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden sm:inline-flex"
            >
              Connexion
            </Button>
            <Button className="bg-accent hover:bg-accent/90">
              Démo gratuite
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
