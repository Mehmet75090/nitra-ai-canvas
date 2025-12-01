import { Button } from "@/components/ui/button";
import { FileText, Zap, ArrowRight, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const beforeAfter = {
  before: {
    title: "Méthode traditionnelle",
    duration: "3-5 jours",
    icon: AlertCircle,
    color: "from-red-500 to-orange-500",
    steps: [
      "Analyse manuelle de la fiche technique",
      "Calcul des temps opératoires approximatifs",
      "Équilibrage ligne par essai-erreur",
      "Ajustements multiples sur le terrain",
      "Risque d'erreurs et de déséquilibres"
    ]
  },
  after: {
    title: "Avec Nitra³AI",
    duration: "5-10 minutes",
    icon: CheckCircle2,
    color: "from-data-teal to-accent",
    steps: [
      "Upload de la fiche technique du modèle",
      "Analyse IA des opérations et séquences",
      "Génération automatique de l'équilibrage optimal",
      "Simulation de la capacité de production",
      "Implantation prête avec stations équilibrées"
    ]
  }
};

export const PillarsSection = () => {
  const BeforeIcon = beforeAfter.before.icon;
  const AfterIcon = beforeAfter.after.icon;
  
  return (
    <section id="piliers" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Transformation digitale
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              De la fiche technique à la chaîne en production
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passez de plusieurs jours de configuration manuelle à quelques minutes d'automatisation intelligente
            </p>
          </div>

          {/* Time Comparison Visual */}
          <div className="flex items-center justify-center gap-8 mb-20 animate-fade-in">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 mb-2">
                <Clock className="h-5 w-5" />
                <span className="font-bold text-2xl">3-5 jours</span>
              </div>
              <p className="text-sm text-muted-foreground">Méthode traditionnelle</p>
            </div>
            
            <ArrowRight className="h-8 w-8 text-accent animate-pulse" />
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent mb-2">
                <Zap className="h-5 w-5" />
                <span className="font-bold text-2xl">5-10 min</span>
              </div>
              <p className="text-sm text-muted-foreground">Avec Nitra³AI</p>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Before */}
            <div className="relative group animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-background border-2 border-red-500/20 rounded-3xl p-8 h-full">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${beforeAfter.before.color} text-white mb-6`}>
                  <BeforeIcon className="h-5 w-5" />
                  <span className="font-semibold">{beforeAfter.before.title}</span>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">{beforeAfter.before.duration}</div>
                  <p className="text-muted-foreground">de configuration manuelle</p>
                </div>
                
                <ul className="space-y-4">
                  {beforeAfter.before.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-red-600">{idx + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* After */}
            <div className="relative group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-data-teal/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-background border-2 border-accent/40 rounded-3xl p-8 h-full">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${beforeAfter.after.color} text-white mb-6`}>
                  <AfterIcon className="h-5 w-5" />
                  <span className="font-semibold">{beforeAfter.after.title}</span>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">{beforeAfter.after.duration}</div>
                  <p className="text-muted-foreground">d'automatisation IA</p>
                </div>
                
                <ul className="space-y-4">
                  {beforeAfter.after.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background border border-border rounded-2xl p-6 text-center hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Gain de temps radical</h3>
              <p className="text-muted-foreground">Jusqu'à 99% de temps économisé sur la phase d'implantation</p>
            </div>
            
            <div className="bg-background border border-border rounded-2xl p-6 text-center hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Précision optimale</h3>
              <p className="text-muted-foreground">Équilibrage parfait basé sur les données réelles</p>
            </div>
            
            <div className="bg-background border border-border rounded-2xl p-6 text-center hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Démarrage immédiat</h3>
              <p className="text-muted-foreground">Production lancée en un temps record avec zéro erreur</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white group shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Voir une démonstration
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
