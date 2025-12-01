import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { CockpitSection } from "@/components/landing/CockpitSection";
import { AgentsSection } from "@/components/landing/AgentsSection";
import { IntegrationSection } from "@/components/landing/IntegrationSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <CockpitSection />
      <AgentsSection />
      <IntegrationSection />
      <UseCasesSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
