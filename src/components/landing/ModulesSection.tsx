import { Button } from "@/components/ui/button";
import { Zap, Calendar, Shield, Heart, TrendingUp, ArrowRight } from "lucide-react";

const modules = [
  {
    icon: Zap,
    badge: "Productivité avancée",
    title: "Conformité & Lissage",
    features: [
      "Conformité aux standards GSD",
      "Lissage de la variabilité",
      "Auto-génération des gammes",
      "Équilibrage ligne automatique"
    ],
    color: "from-data-blue to-data-teal"
  },
  {
    icon: Calendar,
    badge: "Délais prédictifs",
    title: "Anticipation & Planification",
    features: [
      "ETA vs Due Date prédictif",
      "Alertes proactives Planner",
      "Gantt dynamique de production"
    ],
    color: "from-data-teal to-data-cyan"
  },
  {
    icon: Shield,
    badge: "Qualité avancée",
    title: "Détection & Traçabilité",
    features: [
      "Détection automatique des défauts",
      "Heatmaps défauts par poste",
      "Traçabilité par série"
    ],
    color: "from-data-cyan to-accent"
  },
  {
    icon: Heart,
    badge: "Santé & Ergonomie",
    title: "Protection des Opérateurs",
    features: [
      "Score posture en temps réel",
      "Évaluation risque TMS",
      "Alertes ergonomiques",
      "Heatmaps risques"
    ],
    color: "from-accent to-data-green"
  },
  {
    icon: TrendingUp,
    badge: "Facteur H",
    title: "TRS Augmenté",
    features: [
      "Santé + motivation intégrées",
      "Corrélation H / Performance",
      "Indicateur de bien-être global"
    ],
    color: "from-data-green to-secondary"
  }
];

export const ModulesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold mb-4">
              V2 & 2027
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Modules avancés
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              L'avenir de la production textile intelligente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/50 animate-slide-up"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${module.color} text-white text-sm font-medium mb-4`}>
                    <Icon className="h-4 w-4" />
                    {module.badge}
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {module.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${module.color} flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              Rejoindre la liste d'attente
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
