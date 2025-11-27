import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";
import productivityDashboard from "@/assets/productivity-dashboard.jpg";
import otdDashboard from "@/assets/otd-dashboard.jpg";
import profitabilityDashboard from "@/assets/profitability-dashboard.jpg";

const pillars = [
  {
    icon: TrendingUp,
    title: "Productivité",
    subtitle: "Débloquez +15–20% de rendement caché",
    features: [
      "Compteur pièces/heure en temps réel",
      "Analyse cycle moyen",
      "Détection automatique des temps morts (%)"
    ],
    image: productivityDashboard,
    color: "from-data-blue to-data-teal"
  },
  {
    icon: Clock,
    title: "Délais / OTD",
    subtitle: "Sécurisez vos livraisons",
    features: [
      "Delta OTD (écarts plan vs réel)",
      "Takt attainment par poste",
      "Simulation capacité vs commandes",
      "Suivi d'avancement en continu"
    ],
    image: otdDashboard,
    color: "from-data-teal to-data-cyan"
  },
  {
    icon: DollarSign,
    title: "Rentabilité",
    subtitle: "Identifiez où se perd la marge",
    features: [
      "Coût des non-performances",
      "Top stations générant les pertes",
      "Heatmaps des pertes par ligne"
    ],
    image: profitabilityDashboard,
    color: "from-data-cyan to-data-green"
  }
];

export const PillarsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Les 3 piliers de Nitra³AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une visibilité complète pour une performance optimale
            </p>
          </div>
          
          <div className="space-y-24">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-slide-up`}
                >
                  <div className="flex-1 space-y-6">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${pillar.color} text-white`}>
                      <Icon className="h-5 w-5" />
                      <span className="font-semibold">{pillar.title}</span>
                    </div>
                    
                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                      {pillar.subtitle}
                    </h3>
                    
                    <ul className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${pillar.color} flex-shrink-0`} />
                          <span className="text-lg text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex-1">
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-border hover:shadow-2xl transition-shadow">
                      <img 
                        src={pillar.image} 
                        alt={`${pillar.title} Dashboard`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Voir le tableau de bord complet
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
