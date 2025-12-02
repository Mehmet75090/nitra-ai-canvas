import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import textileProductionLine from "@/assets/textile-production-line.jpg";
import logoNitra from "@/assets/logo_nitra.png";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Copilote IA pour ateliers textile
          </div>
          
          <img src={logoNitra} alt="Nitra³AI Logo" className="h-16 md:h-20 mx-auto mb-8" />
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Le copilote IA qui révèle la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              productivité cachée
            </span>{" "}
            de votre atelier textile
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Optimisez TRS, réduisez les retards et améliorez la rentabilité grâce à une visibilité temps réel de votre production.
          </p>
          
          <div className="flex justify-center mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all group text-lg px-8 py-6" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Demander une démo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent z-10" />
            <img alt="Ligne de production textile avec caméras de surveillance et contrôle qualité" src="/lovable-uploads/b2c23c65-faba-4926-9d93-9929e11ed729.png" className="w-full h-auto object-scale-down" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};