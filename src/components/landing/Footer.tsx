import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src={logo} 
                alt="Nitra³AI Logo" 
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/80">
                Le copilote IA pour ateliers textile
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li>contact@nitra3ai.com</li>
                <li>+33 (0)1 XX XX XX XX</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
                aria-label="Suivez-nous sur LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 Nitra³AI. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
