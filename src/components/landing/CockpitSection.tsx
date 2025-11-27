import { BarChart3, Map, Clock, Activity, Layers, Mic } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "TRS Complet",
    description: "Disponibilité / Performance / Qualité en temps réel"
  },
  {
    icon: Map,
    title: "Heatmaps",
    description: "Défauts, pertes, ergonomie visualisés par zone"
  },
  {
    icon: Clock,
    title: "Timeline ETA",
    description: "Comparaison ETA vs Due Date en continu"
  },
  {
    icon: Activity,
    title: "Monitoring OTD",
    description: "Takt et avancement en direct"
  },
  {
    icon: Layers,
    title: "Drill-down",
    description: "Analyse station par station détaillée"
  },
  {
    icon: Mic,
    title: "Ask Nitra",
    description: "Interface vocale mains-libres"
  }
];

export const CockpitSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Le cockpit Nitra³AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Toutes vos données de production, unifiées dans une interface intuitive
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/50 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="bg-gradient-to-br from-accent/10 to-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
