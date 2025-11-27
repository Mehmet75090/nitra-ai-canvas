import { Ruler, CalendarClock, MessageSquare } from "lucide-react";

const agents = [
  {
    icon: Ruler,
    name: "Agent IA Method",
    role: "Standardisation & Optimisation",
    description: "Standardise les gestes, réduit la variabilité, analyse posture et séquence pour améliorer continuellement vos processus.",
    color: "from-data-blue to-data-teal"
  },
  {
    icon: CalendarClock,
    name: "Agent IA Planner",
    role: "Gestion des Délais",
    description: "Optimise les délais, génère des alertes proactives et anticipe les retards avant qu'ils n'impactent vos clients.",
    color: "from-data-teal to-data-cyan"
  },
  {
    icon: MessageSquare,
    name: "Agent IA Coach",
    role: "Intelligence Générative",
    description: "Coaching instantané, interaction vocale Ask Nitra, et génération automatique de rapports pour faciliter votre quotidien.",
    color: "from-data-cyan to-accent"
  }
];

export const AgentsSection = () => {
  return (
    <section id="agents" className="py-24 bg-gradient-to-br from-primary to-[hsl(var(--hero-gradient-end))] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Les Agents IA Nitra³
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Trois intelligences spécialisées au service de votre production
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {agent.name}
                  </h3>
                  
                  <p className="text-accent font-semibold mb-4">
                    {agent.role}
                  </p>
                  
                  <p className="text-white/80 leading-relaxed">
                    {agent.description}
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
