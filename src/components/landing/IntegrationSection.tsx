import { CheckCircle2 } from "lucide-react";

const features = [
  "Compatible tout atelier textile",
  "Déploiement progressif poste par poste",
  "Dashboard web accessible partout",
  "Fonctionne avec caméra + edge device",
  "Adoption opérateurs & managers facilitée",
  "Interaction vocale mains-libres"
];

export const IntegrationSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Intégration sans friction
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple à déployer, facile à adopter
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all animate-slide-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <p className="text-lg text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
