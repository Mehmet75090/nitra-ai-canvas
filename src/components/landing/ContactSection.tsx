import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Demander une démo
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez comment Nitra³AI peut transformer votre production textile
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
