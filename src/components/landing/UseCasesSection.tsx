import { TrendingUp, Clock, Target, Heart } from "lucide-react";

const useCases = [
  {
    icon: Clock,
    title: "Réduction des retards",
    before: "Retards fréquents, OTD non maîtrisé",
    after: "Visibilité OTD en temps réel, anticipation des problèmes",
    impact: "Satisfaction client améliorée"
  },
  {
    icon: Target,
    title: "Diminution des défauts",
    before: "Défauts détectés trop tard",
    after: "Qualité avancée avec détection automatique",
    impact: "Réduction significative des rebuts"
  },
  {
    icon: TrendingUp,
    title: "Amélioration du TRS",
    before: "Pertes cachées, TRS sous-estimé",
    after: "Révélation des micro-arrêts et optimisation",
    impact: "+15-20% de rendement"
  },
  {
    icon: Heart,
    title: "Réduction des TMS",
    before: "Risques ergonomiques non identifiés",
    after: "Modules ergonomie avec alertes posture",
    impact: "Bien-être opérateurs amélioré"
  }
];

export const UseCasesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Bénéfices concrets
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des résultats mesurables pour votre atelier
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/50 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-destructive/30">
                      <p className="text-sm text-muted-foreground mb-1">Avant</p>
                      <p className="text-foreground">{useCase.before}</p>
                    </div>
                    
                    <div className="pl-4 border-l-2 border-accent">
                      <p className="text-sm text-muted-foreground mb-1">Après</p>
                      <p className="text-foreground">{useCase.after}</p>
                    </div>
                    
                    <div className="bg-accent/5 rounded-lg p-4">
                      <p className="text-accent font-semibold">✓ {useCase.impact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
