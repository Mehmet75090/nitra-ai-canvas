import { AlertCircle, TrendingDown, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Manque de visibilité en temps réel",
    description: "Décisions tardives et opportunités manquées par absence de données instantanées",
    color: "text-destructive"
  },
  {
    icon: TrendingDown,
    title: "Pertes invisibles",
    description: "Micro-arrêts et variabilité non détectés entraînent un TRS sous-estimé",
    color: "text-data-blue"
  },
  {
    icon: Clock,
    title: "Retards client",
    description: "OTD non maîtrisé compromet la satisfaction client et la réputation",
    color: "text-data-teal"
  },
  {
    icon: DollarSign,
    title: "Baisse de marge",
    description: "Inefficiences non localisées érodent silencieusement la rentabilité",
    color: "text-data-cyan"
  }
];

export const ProblemSection = () => {
  return (
    <section id="problemes" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Les défis de l'atelier textile moderne
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sans les bons outils, votre production reste dans l'ombre
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/50 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${problem.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-12 w-12" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-heading font-semibold text-foreground mb-2">
              Nitra³AI donne à votre atelier la visibilité et le pilotage qu'il mérite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
